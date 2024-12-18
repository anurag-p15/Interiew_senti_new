from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.database import users_collection
from app.schemas import User, Login
from app.auth import hash_password, verify_password, create_access_token

app = FastAPI()

# Allow all origins for CORS (you can restrict it to specific domains in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (or specify a list of allowed origins)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.post("/signup")
async def signup(user: User):
    existing_user = await users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Hash the password before storing it
    user.password = hash_password(user.password)
    
    # Insert user into the database
    await users_collection.insert_one(user.dict(exclude_unset=True))
    return {"message": "User registered successfully"}

@app.post("/login")
async def login(login: Login):
    user = await users_collection.find_one({"email": login.email})
    if not user:
        raise HTTPException(status_code=401, detail="Email not registered")
    if not verify_password(login.password, user["password"]):
        raise HTTPException(status_code=401, detail="Incorrect password")

    # Generate a token
    token = create_access_token({"email": login.email})
    return {"access_token": token, "token_type": "bearer"}
