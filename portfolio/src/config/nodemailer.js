import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config({path:"./src/.env.local"})

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS

export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
user:email,
pass,
    }
});

export const mailOptions ={
   
    to:email
}