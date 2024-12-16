import { db } from "@vercel/postgres";

const client = await db.connect();

// Function to calculate route payment
async function getRoutePayment(from: string, to: string, adults: number, children: number, isHiragana: boolean) {
  const data = await client.sql`
    SELECT * FROM mobility.get_payment(
      (SELECT station_name FROM mobility.get_updated_station_choices(${from}) LIMIT 1)::varchar,
      (SELECT station_name FROM mobility.get_updated_station_choices(${to}) LIMIT 1)::varchar,
      ${adults},
      ${children},
      ${isHiragana}
    )
  `;
  return data.rows[0];
}

// API endpoint
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  try {
    const from = searchParams.get('from') || '';
    const to = searchParams.get('to') || '';
    const adults = parseInt(searchParams.get('adults') || '1');
    const children = parseInt(searchParams.get('children') || '0');
    const isHiragana = searchParams.get('isHiragana') === 'true';

    const result = await getRoutePayment(from, to, adults, children, isHiragana);
    return Response.json(result);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}