import Image from 'next/image';
import '../globals.css';

export default async function Home({params}:any) {
    const data = await params;
    const {id} = await data;
    // console.log(id)
  async function getUsers(id:any): Promise<any> {
    const api = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(api);
    const data = await response.json();
    return data;
  }
  const user = await getUsers(id);
  // console.log(user);
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {
        <div className="max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-white">
              <Image src={'./next.svg'} width={50} height={50}/>
            </div>

            <div className="min-w-0">
              <h2 className="text-xl font-semibold text-zinc-900">{user.name}</h2>
              <p className="text-sm text-zinc-500">@{user.username}</p>
              <p className="mt-1 text-sm text-zinc-600">{user.email}</p>
              <p className="text-sm text-zinc-600">{user.phone}</p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Address</h3>
              <p className="mt-1 text-sm text-zinc-700">
                {user.street}
              </p>
              <p className="text-xs text-zinc-500">
                Lat: -37.3159, Lng: 81.1496
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Website</h3>
              <a
                href="https://hildegard.org"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-medium text-blue-600 hover:underline"
              >
                hildegard.org
              </a>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Company</h3>
              <p className="mt-1 text-sm font-medium text-zinc-800">Romaguera-Crona</p>
              <p className="text-sm text-zinc-600">Multi-layered client-server neural-net</p>
              <p className="text-sm text-zinc-500">harness real-time e-markets</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
              Contact
            </button>
            <button className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50">
              View Profile
            </button>
          </div>
        </div>
      }
    </div>
    </div >
  );
}
