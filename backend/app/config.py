# app/config.py
import secrets

# Generate a secret key and assign it to SECRET_KEY
secret_key = secrets.token_hex(32)
SECRET_KEY = secret_key  # Fallback to the generated key if environment variable is not set
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 90
