import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";
import { google } from "googleapis";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
const sheets = google.sheets({ version: "v4" });
const spreadsheetId = process.env.SHEET_ID;
const range = "Sheet1!A1:E1";

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email) {
    return new Response("error: Email is required");
  }

  const msg = {
    to: email,
    cc: process.env.FROM_EMAIL as string,
    from: process.env.FROM_EMAIL as string,
    html: ``,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent");
    const newRow = [email, new Date().toLocaleString()];
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [newRow],
      },
    });

    return new Response("success: true");
  } catch (error) {
    console.error(error);
    new Response("error: Error sending email");
  }
}
