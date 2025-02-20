const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

async function sendEmailWithReport() {
  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // false for TLS; true for SSL
    auth: {
      user: 'demo80824@gmail.com',
      pass: 'izsf ftlt vrus cmen',
    },
  });

  // Read the HTML report file generated by Jest
  const reportFilePath = path.join(__dirname, 'jest_html_reporters.html');
  const htmlReport = fs.readFileSync(reportFilePath, 'utf-8');

  // Setup email data
  let mailOptions = {
    from: 'demo80824@gmail.com',
    to: 'callmemahi9@gmail.com',
    subject: 'Jest HTML Report',
    html: htmlReport, // HTML content of the report
    attachments: [{
      filename: 'report.html',
      content: htmlReport, // Attachment content
    }],
  };

  // Send email
  let info = await transporter.sendMail(mailOptions);

  console.log('Email sent: %s', info.messageId);
}

sendEmailWithReport().catch(console.error);
