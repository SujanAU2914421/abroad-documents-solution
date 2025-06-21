// app/api/contact/route.js
import { google } from "googleapis";
import nodemailer from "nodemailer";

export async function POST(request) {
	try {
		const { name, email, subject, message } = await request.json();

		if (!name || !email || !subject || !message) {
			return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
		}

		const CLIENT_ID = process.env.CLIENT_ID;
		const CLIENT_SECRET = process.env.CLIENT_SECRET;
		const REDIRECT_URI = process.env.REDIRECT_URI;
		const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

		const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
		oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

		const accessToken = await oAuth2Client.getAccessToken();

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				type: "OAuth2",
				user: "ads.doc.services@gmail.com",
				clientId: CLIENT_ID,
				clientSecret: CLIENT_SECRET,
				refreshToken: REFRESH_TOKEN,
				accessToken: accessToken.token,
			},
		});

		const mailOptions = {
			from: `"${name}" <${email}>`,
			to: "ads.doc.services@gmail.com",
			subject: `Contact Form: ${subject}`,
			text: `From: ${name}\nEmail: ${email}\n\n${message}`,
		};

		const result = await transporter.sendMail(mailOptions);
		console.log("Email sent", result);

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error("Email failed", error);
		return new Response(JSON.stringify({ error: "Failed to send email" }), {
			status: 500,
		});
	}
}
