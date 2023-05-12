import { google } from "googleapis";

type SignUpEmail = {
  email: string;
};

export async function POST(req: Request) {
  const { email } = (await req.json()) as SignUpEmail;
  if (!email) {
    return new Response("error: Email is required");
  }
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/drive/spreedsheets",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SHEET_ID;
    const range = "Sheet1!A1:B1";
    console.log("getting result");

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: range, // Append to column A of Sheet1
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email]],
      },
    });
    console.log(
      `Appended "${email}" to Sheet1!A${result.data.updates.updatedRange}`
    );
  } catch (error) {
    console.error(`Error appending "${email}" to Sheet1!A:A:`, error);
    return new Response("error: Error appending email to sheet");
  }
}
