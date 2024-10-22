import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Link href="/todos" className="text-blue-500 underline">
        Todos
      </Link>
    </div>
  );
}
