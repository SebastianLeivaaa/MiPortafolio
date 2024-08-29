import { google } from 'googleapis';
import nodemailer from 'nodemailer';

const CLIENT_ID = "753573338206-m8fprndcmdokn0j4j69evqbl0ie88jng.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REFRESH_TOKEN = "1//04Fp83fiQUpHSCgYIARAAGAQSNwF-L9Irlesqb_-NpQZsBfUQ03ROwSB5fW6yYjBd8DFGST6_eYvlzh6rtzAVB4gLi-KwT7xjoVI";
const REDIRECT_URI = "https://developers.google.com/oauthplayground"; //DONT EDIT THIS
const MY_EMAIL = "sebastianleiva010@gmail.com";


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
