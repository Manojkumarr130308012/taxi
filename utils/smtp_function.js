const nodemailer = require('nodemailer')
require('dotenv').config();


async function sendEmail(countrycode,email,name,phone,message,selectedplan){
    
    const senderEmail = "manojkumarr21@gmail.com";

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: "sales@taxiappz.com",
            pass: "ddaapnsqapmqnykc"
        }
    });


    let mailOption = "";

    if(selectedplan == "null"){
        mailOption= {
            from:process.env.AUTH_EMAIL,
            to:senderEmail,
            subject:"Enquiry",
            html:`  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
              <div style="padding: 20px;">
                <h2 style="color: #333;">New Form Submission</h2>
                <p style="color: #666; margin-top: 10px;">A new form submission has been received:</p>
                <ul style="list-style-type: none; padding-left: 0; margin-top: 20px;">
                  <li style="margin-bottom: 10px;"><strong>Name:</strong> ${name} </li>
                  <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
                  <li style="margin-bottom: 10px;"><strong>CountryCode:</strong> ${countrycode}</li>
                  <li style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</li>
                  <li style="margin-bottom: 10px;"><strong>Message:</strong> ${message}</li>
                </ul>
              </div>
            </div>
          </div>`
        }
    }else{
        mailOption= {
            from:process.env.AUTH_EMAIL,
            to:senderEmail,
            subject:"Enquiry",
            html:`  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
              <div style="padding: 20px;">
                <h2 style="color: #333;">New Form Submission</h2>
                <p style="color: #666; margin-top: 10px;">A new form submission has been received:</p>
                <ul style="list-style-type: none; padding-left: 0; margin-top: 20px;">
                  <li style="margin-bottom: 10px;"><strong>Name:</strong> ${name} </li>
                  <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
                  <li style="margin-bottom: 10px;"><strong>CountryCode:</strong> ${countrycode}</li>
                  <li style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</li>
                  <li style="margin-bottom: 10px;"><strong>Message:</strong> ${message}</li>
                  <li style="margin-bottom: 10px;"><strong>SelectedPlan:</strong> ${selectedplan}</li>
                </ul>
              </div>
            </div>
          </div>`
        }
    }

   


    try {
        await transporter.sendMail(mailOption);
        console.log("Verification email Sent") 
    } catch (error) {
        console.log("Email sending failed with an error: ",error)
    }
}

module.exports = sendEmail;