"use client"; // এটা Client Side Component হিসেবে চিহ্নিত করবে

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-lg">দুঃখিত, এই পেজটি খুঁজে পাওয়া যায়নি।</p>
    </div>
  );
}
