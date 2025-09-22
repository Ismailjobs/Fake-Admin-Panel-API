# Fake Admin Panel API

This is a **Fake Admin Panel API** designed to log all login attempts made to it. The API captures the following details:

- IP address of the requester
- User-Agent header
- HTTP method and endpoint
- Username and password attempts
- JWT token generated for each request
- Timestamp of each attempt

The API stores login attempts in MongoDB, grouping attempts by **IP address**. Multiple attempts from the same IP will be stored in a single document, under an array of attempts.

---
## Photos
<img width="640" height="608" alt="image" src="https://github.com/user-attachments/assets/1c1f4771-d76c-48da-9ce0-f14da94c9e93" />

<img width="750" height="375" alt="image" src="https://github.com/user-attachments/assets/f301faf9-9d3d-451d-82e4-24411a003720" style="margin-top:10px;" />

## Features

- Records all login attempts with detailed information.
- Groups multiple attempts from the same IP in one document.
- Generates JWT for each request.
- Uses Express.js and Mongoose for backend handling.
- Fully customizable for development and testing purposes.

---

## Requirements

- Node.js >= 18
- MongoDB server running locally or remotely
- npm

---

## Installation

1. Clone the repository:

- git clone https://github.com/Ismailjobs/Fake-Admin-Panel-API/
- cd fake-admin-panel-api

---

## Install dependencies

- npm install

## Dependencies used:

- express – Web framework
- mongoose – MongoDB object modeling
- dotenv – Environment variables management
- jsonwebtoken – JWT generation

---

## Create .env file

- PORT=3000
- MONGODB_CONNECTION_STRING=mongodb://localhost:27017/fake_admin_panel
- JWT_SECRET=your_jwt_secret_here

---

## Running the API

Start the server:

- npm start


You should see:

- Server is running on http://localhost:3000
- Connected to MongoDB

---

## API Usage

Endpoint: 
- POST /admin

Headers:
- Content-Type: application/json


Body Example:
- {
-     "username": "testuser",
-     "password": "123456" }


Response Example:

- {
-     "message": "Login failed",
-     "success": false,
-     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3NkdHVzZXIiLCJpcCI6Ijo6MSIsInRpbWVzdGFtcCI6MTc1ODUzODI1MDc4MywiaWF0IjoxNzU4NTM4MjUwLCJleHAiOjE3NTg1NDE4NTB9.VomS8VUKBl3EIlLCGWst1XrIIXMoQILR18U-2qUAlJM"
- }

Or Use Curl: 

- curl -X POST http://localhost:3000/admin \ -H "Content-Type: application/json" \ -d '{"username":"testuser","password":"123"}'

