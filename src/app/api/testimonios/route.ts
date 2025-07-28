export const runtime = 'nodejs';

import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = '1POzPg2GyJarMlIExRzy5xJ5_IglaJoDiKx2f0M2sCFU';
const SHEET_NAME = 'Hoja 1';

const allowedOrigins = [
  "https://www.bateriaconjuanma.com.ar",
  "https://bateriaconjuanma.com.ar",
];

// Cliente autenticado
function getSheetsClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: SCOPES,
  });
  return google.sheets({ version: 'v4', auth });
}

// Middleware CORS
function withCors(req: NextRequest, response: NextResponse) {
  const origin = req.headers.get("origin");
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }
  response.headers.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

// Handlers
export async function GET(req: NextRequest) {
  try {
    const sheets = getSheetsClient();
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `'${SHEET_NAME}'!A2:B`
    });

    const rows = res.data.values || [];
    const testimonials = rows.map(([name, testimonial], i) => ({
      name,
      testimonial,
      rowIndex: i + 2,
    }));

    return withCors(req, NextResponse.json(testimonials));
  } catch (error) {
    console.error('Error leyendo desde Google Sheets:', error);
    return withCors(req, NextResponse.json({ error: 'Error al obtener testimonios' }, { status: 500 }));
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, testimonial } = await req.json();
    if (!name || !testimonial) {
      return withCors(req, NextResponse.json({ error: 'Nombre y testimonio requeridos' }, { status: 400 }));
    }

    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:B`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [[name, testimonial]] },
    });

    const readRes = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `'${SHEET_NAME}'!A2:A`,
    });

    const rowIndex = (readRes.data.values || []).length + 1;
    return withCors(req, NextResponse.json({ name, testimonial, rowIndex }, { status: 201 }));
  } catch (error) {
    console.error('Error escribiendo en Google Sheets:', error);
    return withCors(req, NextResponse.json({ error: 'Error al guardar testimonio' }, { status: 500 }));
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { rowIndex, name, testimonial } = await req.json();
    if (!rowIndex || !name || !testimonial) {
      return withCors(req, NextResponse.json({ error: 'Faltan datos' }, { status: 400 }));
    }

    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A${rowIndex}:B${rowIndex}`,
      valueInputOption: 'RAW',
      requestBody: { values: [[name, testimonial]] },
    });

    return withCors(req, NextResponse.json({ success: true }));
  } catch (error) {
    console.error('Error actualizando testimonio:', error);
    return withCors(req, NextResponse.json({ error: 'Error al actualizar testimonio' }, { status: 500 }));
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { rowIndex } = await req.json();
    if (!rowIndex) {
      return withCors(req, NextResponse.json({ error: 'rowIndex requerido' }, { status: 400 }));
    }

    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A${rowIndex}:B${rowIndex}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [['', '']] },
    });

    return withCors(req, NextResponse.json({ success: true }));
  } catch (error) {
    console.error('Error eliminando testimonio:', error);
    return withCors(req, NextResponse.json({ error: 'Error al eliminar testimonio' }, { status: 500 }));
  }
}

export async function OPTIONS(req: NextRequest) {
  return withCors(req, new NextResponse(null, { status: 204 }));
}
