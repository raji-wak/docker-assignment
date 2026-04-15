export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Next.js + MongoDB + Docker Compose</h1>
      <p>App is running inside Docker.</p>
      <p>
        Try calling <code>/api/test</code> to hit MongoDB.
      </p>
    </main>
  );
}
