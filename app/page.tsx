import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href="/bsa/1">
        <button className="btn">Agent 1</button>
      </Link>
      <Link href="/bsa/2">
        <button className="btn">Agent 2</button>
      </Link>
      <Link href="/bsa/3">
        <button className="btn">Agent 3</button>
      </Link>
      <Link href="/bsa/4">
        <button className="btn">Agent 4</button>
      </Link>
      <Link href="/bsa/5">
        <button className="btn">Agent 5</button>
      </Link>
      <Link href="/bsa/6">
        <button className="btn">Agent 6</button>
      </Link>
      <Link href="/bsa/7">
        <button className="btn">Agent 7</button>
      </Link>
      <Link href="/bsa/8">
        <button className="btn">Agent 8</button>
      </Link>
      <Link href="/bsa/9">
        <button className="btn">Agent 9</button>
      </Link>
      <Link href="/bsa/10">
        <button className="btn">Agent 10</button>
      </Link>
    </div>
  );
}
