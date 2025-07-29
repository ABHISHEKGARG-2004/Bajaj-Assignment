Bajaj Assignment - REST API

This repository contains my solution for the Bajaj Assignment, where I was required to build and host a REST API that processes an array and returns structured data. The API is built with Node.js, deployed on Render, and follows best practices for modularity and error handling.

🔹 Hosted API

https://bajaj-assignment-8t2d.onrender.com/bfhl

Method: POST

Expected Status Code: 200

<img width="1375" height="805" alt="image" src="https://github.com/user-attachments/assets/26d48d4d-4990-47fb-b80c-e8ec10624d0c" />

📌 Features
Accepts an input array of strings.

Classifies and returns:

✅ Even numbers

✅ Odd numbers

✅ Alphabets (converted to uppercase)

✅ Special characters

Calculates the sum of numeric values.

Generates a concatenated string of alphabets in reverse order with alternating caps.

Returns fixed user details (user_id, email, roll number).

Includes basic input validation and graceful error handling.


📥 Example Request

{
  "data": ["2","a","y","4","&","-","*","5","92","b"]
}


📤 Example Response

{
    "is_success": true,
    "user_id": "Abhishek_Garg_09082004",
    "email": "abhishek47.be22@chitkara.edu.in",
    "roll_number": "2210990047",
    "odd_numbers": [
        "5"
    ],
    "even_numbers": [
        "2",
        "4",
        "92"
    ],
    "alphabets": [
        "A",
        "Y",
        "B"
    ],
    "special_characters": [
        "&",
        "-",
        "*"
    ],
    "sum": "103",
    "concat_string": "ByA"
}

🛠️ Tech Stack

Backend: Node.js

Hosting: Render

Tools Used: Postman for testing


📚 Notes
All numbers are returned as strings, as per the problem statement.

The user_id format is {full_name_ddmmyyyy} in lowercase.


-Note:

To Confirm if my server is running properly:

https://bajaj-assignment-8t2d.onrender.com/

Run this on Browser and you should see something like:

Bajaj Assignment API running!


Thank You

👤 Author
Abhishek Garg

Email: abhishek47.be22@chitkara.edu.in

Roll Number: 2210990047


