import { db } from "@vercel/postgres";

const client = await db.connect();

// Function to get station name suggestions
async function getStationChoices(partialStationName: string, isHiragana: boolean) {
  const data = await client.sql`
    SELECT * FROM mobility.get_updated_station_choices(${partialStationName}, ${isHiragana})
  `;
  return data.rows;
}

// APIエンドポイント
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  try {
    const query = searchParams.get('query') || '';
    const isHiragana = searchParams.get('isHiragana') === 'true';

    const result = await getStationChoices(query, isHiragana);
    return Response.json(result);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}