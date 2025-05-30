export const runtime = 'nodejs';

import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';


const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = '1POzPg2GyJarMlIExRzy5xJ5_IglaJoDiKx2f0M2sCFU'; // tu ID de la hoja
const SHEET_NAME = 'Hoja 1'; // nombre de la pestaña en la hoja

// Crea el cliente autenticado
function getSheetsClient() {

  const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
  key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: SCOPES,
});

// console.log(auth, 'auth client created');
  return google.sheets({ version: 'v4', auth });
}

export async function GET() {
  try {
    const sheets = getSheetsClient();
    // console.log(sheets, 'sheets client created');
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `'${SHEET_NAME}'!A2:B`
    });

    const rows = response.data.values || [];

    const testimonials = rows.map(([name, testimonial], i) => ({
      name,
      testimonial,
      rowIndex: i + 2, // porque empieza desde la fila 2
    }));

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Error leyendo desde Google Sheets:', error);
    return NextResponse.json({ error: 'Error al obtener testimonios' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, testimonial } = await req.json();

    if (!name || !testimonial) {
      return NextResponse.json({ error: 'Nombre y testimonio requeridos' }, { status: 400 });
    }

    const sheets = getSheetsClient();

    // Agregar nuevo testimonio
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:B`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, testimonial]],
      },
    });

    // Obtener cantidad de filas después del append para saber en qué fila quedó
    const readRes = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `'${SHEET_NAME}'!A2:A`,
    });

    const currentRowCount = (readRes.data.values || []).length;
    const rowIndex = currentRowCount + 1; // porque A2 es la fila 2

    return NextResponse.json({ name, testimonial, rowIndex }, { status: 201 });
  } catch (error) {
    console.error('Error escribiendo en Google Sheets:', error);
    return NextResponse.json({ error: 'Error al guardar testimonio' }, { status: 500 });
  }
}


export async function PUT(req: NextRequest) {
  try {
    const { rowIndex, name, testimonial } = await req.json();
    
    console.log(rowIndex, 'deberia ser el index de la fila a actualizar');
    if (!rowIndex || !name || !testimonial) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }

    const sheets = getSheetsClient();

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A${rowIndex}:B${rowIndex}`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[name, testimonial]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error actualizando testimonio:', error);
    return NextResponse.json({ error: 'Error al actualizar testimonio' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { rowIndex } = await req.json();

    if (!rowIndex) {
      return NextResponse.json({ error: 'rowIndex requerido' }, { status: 400 });
    }

    const sheets = getSheetsClient();

    // Borra toda la fila (A y B)
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A${rowIndex}:B${rowIndex}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [['', '']],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error eliminando testimonio:', error);
    return NextResponse.json({ error: 'Error al eliminar testimonio' }, { status: 500 });
  }
}
