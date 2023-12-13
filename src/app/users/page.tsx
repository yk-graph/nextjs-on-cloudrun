export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    return <div>Failed to load</div>;
  }

  const users = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      This is Users Page
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
