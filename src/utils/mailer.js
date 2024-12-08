import { google } from 'googleapis';
import nodemailer from 'nodemailer';


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const REDIRECT_URI = process.env.REDIRECT_URI; //DONT EDIT THIS
const MY_EMAIL = process.env.MY_EMAIL;



const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendTestEmail = async (namePerson, email, phone, subject, message, to) => {
  const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: MY_EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });
  
  const html = `
    <p>Mensaje de mi portafolio</p>
    <p>Nombre: ${namePerson}</p>
    <p>Correo electronico: ${email}</p>
    <p>Telefóno: ${phone}</p>
    <p>Mensaje: ${message}</p>
    `;
  return new Promise((resolve, reject) => {
    transport.sendMail({ from: email, subject: subject, to: to, html }, (err, info) => {
      if (err) reject(err);
      resolve(info);
    });
  });
};

export default sendTestEmail;
