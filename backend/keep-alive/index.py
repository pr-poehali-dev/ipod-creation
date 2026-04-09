import json
import os
import urllib.request
from datetime import datetime, timezone

def handler(event: dict, context) -> dict:
    """Keep-alive пинг — поддерживает превью проекта активным 24/7."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    now = datetime.now(timezone.utc).isoformat()

    # Пингуем основную функцию чата чтобы она тоже не спала
    chat_url = os.environ.get('CHAT_FUNCTION_URL', '')
    chat_status = 'skipped'
    if chat_url:
        try:
            req = urllib.request.Request(
                chat_url,
                method='OPTIONS'
            )
            req.add_header('Content-Type', 'application/json')
            with urllib.request.urlopen(req, timeout=5) as resp:
                chat_status = f'ok:{resp.status}'
        except Exception as e:
            chat_status = f'error:{str(e)[:80]}'

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store',
        },
        'body': {
            'alive': True,
            'timestamp': now,
            'service': 'NeyroMax',
            'developer': 'Максим Полиенко',
            'chat_ping': chat_status,
        }
    }
