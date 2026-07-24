import Link from 'next/link';
import './globals.css';
// by default the Components are server based Component
// to make client interactive use client
// "use client"

export default async function Home() {
  async function getUsers(): Promise<any> {
    const api = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(api);
    const data = await response.json();
    return data;
  }
  const users = await getUsers();
  // console.log(users);
  return (
    <div>
      <h1>Server vs Client Component examples</h1>
      {/* <button onClick={()=>alert("Button clicked!")}>Click Me</button> */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {users.map((user: any) => (
        <div className="max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-xl font-bold text-white">
              LG
            </div>

            <div className="min-w-0">
              <h2 className="text-xl font-semibold text-zinc-900">{user.name}</h2>
              <p className="text-sm text-zinc-500">@{user.username}</p>
              <p className="mt-1 text-sm text-zinc-600">{user.email}</p>
              <p className="text-sm text-zinc-600">{user.phone}</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
              Contact
            </button>
            <Link href={`/${user.id}`} className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50">
              View Profile
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div >
  );
}
