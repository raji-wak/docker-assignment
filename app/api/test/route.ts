import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("mydb");
    const collection = db.collection("test");

    await collection.insertOne({
      message: "Hello from Docker + MongoDB",
      createdAt: new Date(),
    });

    const docs = await collection
      .find()
      .sort({ createdAt: -1 })
      .limit(5)
      .toArray();

    return NextResponse.json({ ok: true, docs });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 },
    );
  }
}
