import os
from passlib.context import CryptContext
from jose import jwt
from datetime import datetime, timedelta
import secrets

# Generate a secret key and assign it to SECRET_KEY
secret_key = secrets.token_hex(32)

# Use the secret_key directly
SECRET_KEY = os.getenv("SECRET_KEY", secret_key)  # Fallback to the generated key if environment variable is not set
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
