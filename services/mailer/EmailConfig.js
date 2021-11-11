const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();
const config = require('../config');

app.use(cors());
app.use(express.json());

app.post('/sendEmail', (req, res) => {
    const { from, motive, text } = req.body;

    const CLIENT_ID = config.CLIENT_ID;
    const CLIENT_SECRET = config.CLIENT_SECRET;
    const REDIRECT_URI = config.REDIRECT_URI;
    const REFRESH_TOKEN = config.REFRESH_TOKEN;
    const USER = config.USER;
    const TO = config.TO;
    const PASSWORD = config.PASSWORD;

    const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID, 
        CLIENT_SECRET, 
        REDIRECT_URI
    );

    oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

    async function sendMail() {
        try{
            const ACCESS_TOKEN = await oAuth2Client.getAccessToken()

           const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: USER,
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: ACCESS_TOKEN
                }
            });
            const mailOptions = {
                from: `MI Portafolio de ${from}`,
                to: TO,
                subject: `Motivo ${motive}`,
                text: `Texto enviado desde ${from}:\n ${text}`
            };

            const results = await transporter.sendMail(mailOptions);
            return results;

        } catch(error) {
            console.log(error)
        }
    }

    sendMail()
    .then(result => res.status(200).send('Enviado'))
    .catch(error => console.log(error))
});

app.listen(3001, () => {
    console.log('Server on Port 3001')
})
