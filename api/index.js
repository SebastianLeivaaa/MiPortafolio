import express from "express";
import sendTestEmail  from "../src/utils/mailer.js";
import cors from 'cors';


const app = express();

app.use(cors());
const SENDER_EMAIL_ID = "sebastianleiva010@gmail.com";

app.post("/send-email", async (req, res) => {
  
  const {namePerson, email, phone, subject, message} = req.body;

  try {
    if (SENDER_EMAIL_ID === "EMAIL_ID") {
      throw new Error(
        "Please update SENDER_EMAIL_ID with your email id in server.js"
      );
    }
    const info = await sendTestEmail(namePerson, email, phone, subject, message, SENDER_EMAIL_ID);
    res.send(info);
  } catch (error) {
    res.send(error);
  }
});