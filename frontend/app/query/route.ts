import { db } from "@vercel/postgres";

const client = await db.connect();

async function getRoutePayment(from: string, to: string, adults: number, children: number, isHiragana: boolean) {
  const data = await client.sql`
    select * 
    from mobility.get_payment(
      (select station_name from mobility.get_updated_station_choices(${from}) limit 1)::varchar,
      (select station_name from mobility.get_updated_station_choices(${to}) limit 1)::varchar,
      ${adults}, /*adults*/
      ${children}, /*children*/
      ${isHiragana} /*true=hiragana_search, false=alphabet_search*/
    )
  `;

  return data.rows;
}

export async function GET() {
  try {
    return Response.json(await getRoutePayment('nezu', 'kichi', 1, 1, false));
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}