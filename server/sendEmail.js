import nodemailer from "nodemailer";
import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";
import bodyParser from "body-parser";

WebApp.connectHandlers.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "smtp.rediffmail.com", // Rediffmail Pro SMTP
  port: 465,
  secure: true,
  auth: {
    user: "homemadewithlove@rediffmail.com",
    pass: "Citrus@123" // Replace with your actual Rediffmail password
  }
});

WebApp.connectHandlers.use("/api/test-route", (req, res) => {
  res.writeHead(200);
  res.end("Test route is working");
});


WebApp.connectHandlers.use("/api/send-email", (req, res) => {
  if (req.method === "POST") {
    const { name, email, phone, interests, message } = req.body;

    const mailOptions = {
      from: "homemadewithlove@rediffmail.com",
      replyTo: email,
      to: "homemadewithlove@rediffmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Interests: ${interests.join(", ")}
Message: ${message}
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email failed:", error);
        res.writeHead(500);
        res.end("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.writeHead(200);
        res.end("Email sent successfully");
      }
    });
  } else {
    res.writeHead(405);
    res.end("Method Not Allowed");
  }
});
