console.log("DATABASE_URL", process.env.DATABASE_URL);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      This is Test Page
      <p>DATABASE_URL is... {process.env.DATABASE_URL}</p>
    </main>
  );
}
