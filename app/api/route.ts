import clientPromise from "../../lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("mydb");

  return Response.json({ message: "API is working!" });
}
