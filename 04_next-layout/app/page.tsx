import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Home Page

      <br />
      <Link href="/about">About</Link>
      <br />      
      <Link href="/contact">Contact</Link>
      <br />      
      <Link href="/learn">Learn</Link>
    </div>
  );
}
