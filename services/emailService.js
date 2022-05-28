const nodemailer = require('nodemailer');
async function sendMail({ from, to, subject, text, html }) {
    let transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: from, // Sender address
        to: to, // List of recipients
        subject: subject, // Subject line
        text: text,
        html,
    };

    await transport.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
        }
    });
}

module.exports = sendMail;