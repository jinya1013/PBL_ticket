import { db } from "@vercel/postgres";

const client = await db.connect();

// Function to get station name suggestions
async function getStationChoices(partialStationName: string, isHiragana: boolean) {
  const data = await client.sql`
    SELECT * FROM mobility.get_updated_station_choices(${partialStationName}, ${isHiragana})
  `;
  return data.rows;
}

// Function to get shortest route
async function getShortestRoute(from: string, to: string, isHiragana: boolean) {
  const data = await client.sql`
    SELECT * FROM mobility.get_shortest_route(${from}, ${to}, ${isHiragana})
  `;
  return data.rows;
}

// Function to get train lines and distance
async function getLinesAndDistance(from: string, to: string, isHiragana: boolean) {
  const data = await client.sql`
    SELECT * FROM mobility.get_lines_and_distance(${from}, ${to}, ${isHiragana})
  `;
  return data.rows;
}

// Function to get fare prices
async function getFarePrices(from: string, to: string, isHiragana: boolean) {
  const data = await client.sql`
    SELECT * FROM mobility.get_fare_prices(${from}, ${to}, ${isHiragana})
  `;
  return data.rows[0];
}

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

    const result = await getFarePrices(from, to, isHiragana);
    return Response.json(result);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}