import nodemailer from "nodemailer";
import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";
import bodyParser from "body-parser";


WebApp.connectHandlers.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "arnavsingh.sethi@gmail.com", // your Gmail address
    pass: "ismo wetj deas fqcy" // the 16-character app password
  }
});

WebApp.connectHandlers.use("/api/send-email", (req, res) => {
  if (req.method === "POST") {
    const { name, email, phone, interests, message } = req.body;

    const mailOptions = {
      from: "arnavsingh.sethi@gmail.com",
      replyTo: email,
      to: "arnavsingh.sethi@gmail.com",
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
