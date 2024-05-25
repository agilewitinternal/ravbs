const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
    const { firstName, lastName, contact, mail, message } = req.body;

    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', 
            pass: 'your-email-password' 
        }
    });

   
    let mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@example.com', 
        subject: 'Contact Request',
        text: `First Name: ${firstName}\nLast Name: ${lastName}\nContact: ${contact}\nEmail: ${mail}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
