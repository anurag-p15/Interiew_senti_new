from pydantic import BaseModel, EmailStr, Field

class User(BaseModel):
    full_name: str = Field(..., min_length=3, max_length=50)
    mobile_number: str = Field(..., pattern=r"^\d{10}$")
    email: EmailStr
    password: str = Field(..., min_length=6)
    graduation_year: str
    graduation_stream: str
    date_of_birth: str
    about: str

class Login(BaseModel):
    email: EmailStr
    password: str
