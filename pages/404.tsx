import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8">
      <h1 className="text-2xl text-orange-500">
        {"Oops... This page doesn't exist"}
      </h1>
      <Link href="/">Go to Home</Link>
    </main>
  );
}
