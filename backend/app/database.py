from motor.motor_asyncio import AsyncIOMotorClient

# MongoDB Atlas Connection
MONGO_URI = "mongodb+srv://anuragrp:v8AcNygV4IVGHjmB@cluster0.cgonq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = AsyncIOMotorClient(MONGO_URI)
db = client.interview_platform
users_collection = db.users
print("Connected to MongoDB successfully")
