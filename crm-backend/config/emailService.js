const nodemailer = require('nodemailer');
require('dotenv').config();

// Configuración del transportador
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Puedes cambiar el servicio según el que uses
    auth: {
        user: process.env.EMAIL_USER, // Tu correo electrónico
        pass: process.env.EMAIL_PASS, // Tu contraseña (o un App Password si usas autenticación en dos pasos)
    },
});

// Función para enviar correos electrónicos
const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // Tu correo electrónico
        to,
        subject,
        text,
    };

    return transporter.sendMail(mailOptions)
        .then(info => {
            console.log('Email sent: ' + info.response);
        })
        .catch(error => {
            console.error('Error sending email: ', error);
        });
};

module.exports = sendEmail;
