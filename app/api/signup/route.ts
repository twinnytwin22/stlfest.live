import { google } from "googleapis";

const sheets = google.sheets({ version: "v4" });
const spreadsheetId = process.env.SHEET_ID;
const range = "Sheet1!A1";

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email) {
    return new Response("error: Email is required");
  }
  try {
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
