import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the type for the form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}

// Create a transporter object using Mailtrap SMTP
const transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",  // Correct Mailtrap SMTP host
  port: 587,  // Port for sending emails (587 is for TLS)
  auth: {
    user: "api",  // Replace with your Mailtrap username
    pass: "61a74e09361aedf64ff0bdf95facbd99",  // Replace with your Mailtrap password
  },
  tls: {
    rejectUnauthorized: false,  // Disable certificate validation
  },
});

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const formData: FormData = await request.json();
    const { name, email, phone, budget, message } = formData;

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Configure the email options
    const mailOptions = {
      from: 'info@demomailtrap.com',  // Sender address
      to: 'aachcoder47@gmail.com',    // Recipient address
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email using the transporter
    const info = await transporter.sendMail(mailOptions);

    // Check if the email was accepted by the Mailtrap server
    if (!info.accepted || info.accepted.length === 0) {
      throw new Error('Email not accepted by Mailtrap server');
    }

    // Return a success response
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing request:', error);
    
    // Return an error response
    return NextResponse.json(
      {
        error: 'Failed to send message',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS (Cross-Origin Resource Sharing)
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins (modify as needed for your production environment)
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
