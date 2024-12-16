import { db } from "@vercel/postgres";

const client = await db.connect();

// Function to get fare prices
async function getFarePrices(from: string, to: string, isHiragana: boolean) {
  const data = await client.sql`
    SELECT * FROM mobility.get_fare_prices(${from}, ${to}, ${isHiragana})
  `;
  return data.rows[0];
}

// API endpoint
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  try {
    const from = searchParams.get('from') || '';
    const to = searchParams.get('to') || '';
    const isHiragana = searchParams.get('isHiragana') === 'true';

    const result = await getFarePrices(from, to, isHiragana);
    return Response.json(result);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}