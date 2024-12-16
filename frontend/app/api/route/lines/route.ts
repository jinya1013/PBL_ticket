import { db } from "@vercel/postgres";

const client = await db.connect();

// Function to get train lines and distance
async function getLinesAndDistance(from: string, to: string, isHiragana: boolean) {
  const data = await client.sql`
    SELECT * FROM mobility.get_lines_and_distance(${from}, ${to}, ${isHiragana})
  `;
  return data.rows;
}


// API endpoint
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  try {
    const from = searchParams.get('from') || '';
    const to = searchParams.get('to') || '';
    const isHiragana = searchParams.get('isHiragana') === 'true';

    const result = await getLinesAndDistance(from, to, isHiragana);
    return Response.json(result);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}