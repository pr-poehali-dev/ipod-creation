import os
import json
import urllib.request
import urllib.error

def handler(event: dict, context) -> dict:
    """Отправляет сообщение в Mistral AI и возвращает ответ для чата NeyroMax."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    raw_body = event.get('body', '{}')
    body = json.loads(raw_body) if isinstance(raw_body, str) else (raw_body or {})
    messages = body.get('messages', [])

    if not messages:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'messages required'}
        }

    api_key = os.environ['MISTRAL_API_KEY']

    payload = json.dumps({
        'model': 'mistral-large-latest',
        'messages': [
            {
                'role': 'system',
                'content': (
                    'Ты — NeyroMax, умный AI-ассистент. '
                    'Ты можешь помочь с любыми вопросами: программирование, наука, история, '
                    'творчество, советы, объяснения, анализ — всё что угодно. '
                    'Когда пишешь код — используй markdown с указанием языка. '
                    'Отвечай на том языке, на котором пишет пользователь. '
                    'Будь полезным, точным и дружелюбным.'
                )
            },
            *messages
        ],
        'max_tokens': 4096,
        'temperature': 0.7,
    }).encode('utf-8')

    req = urllib.request.Request(
        'https://api.mistral.ai/v1/chat/completions',
        data=payload,
        headers={
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}',
        },
        method='POST'
    )

    with urllib.request.urlopen(req) as response:
        result = json.loads(response.read().decode('utf-8'))

    reply = result['choices'][0]['message']['content']

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': {'reply': reply}
    }