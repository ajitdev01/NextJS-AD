import Link from "next/link";

export default function Home() {
  return (
    <>
    <div>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/users">Users Page</Link>
    </div>
    </>
  );
}
