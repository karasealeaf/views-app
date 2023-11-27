import { sql } from "@vercel/postgres";

export default async function Home() {
  await sql`INSERT INTO ViewsTable (views) SELECT 0 WHERE NOT EXISTS (SELECT * FROM ViewsTable)`;
  await sql`UPDATE ViewsTable SET views = views + 1`;
  const result = await sql`SELECT views from ViewsTable`;

  console.log(result);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <p>You&apos;re looking at my root route. Rude!</p>
    </main>
  );
}
