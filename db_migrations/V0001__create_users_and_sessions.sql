CREATE TABLE IF NOT EXISTS t_p22349408_ipod_creation.users (
  id SERIAL PRIMARY KEY,
  google_id VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS t_p22349408_ipod_creation.sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES t_p22349408_ipod_creation.users(id),
  token VARCHAR(512) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP DEFAULT (NOW() + INTERVAL '30 days')
);

CREATE INDEX IF NOT EXISTS idx_sessions_token ON t_p22349408_ipod_creation.sessions(token);
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON t_p22349408_ipod_creation.sessions(user_id);
