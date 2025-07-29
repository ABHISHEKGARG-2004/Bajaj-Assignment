const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { processData } = require("./utils");

const app = express();
app.use(cors());
app.use(bodyParser.json());


const FULL_NAME = "Abhishek_Garg";
const DOB = "09082004";  
const EMAIL = "abhishek47.be22@chitkara.edu.in";
const ROLL_NUMBER = "2210990047";


app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        user_id: `${FULL_NAME}_${DOB}`,
        email: EMAIL,
        roll_number: ROLL_NUMBER,
        message: "Invalid input: Data must be an array."
      });
    }

    const result = processData(data);

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      ...result
    });

  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({
      is_success: false,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      message: "Internal server error"
    });
  }
});


app.get("/", (req, res) => {
  res.send("Bajaj Assignment API running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
