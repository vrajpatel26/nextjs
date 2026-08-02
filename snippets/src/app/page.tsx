import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany()

  return (
    <div className="w-full px-10 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Code Snippets</h1>

        <Link href="/snippet/new">
          <Button className='cursor-pointer'>+ New Snippet</Button>
        </Link>
      </div>

      {/* Snippets List */}
      <div className="bg-gray-100 rounded-xl p-6 w-full space-y-4">
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="flex items-center justify-between bg-white rounded-lg border p-5 w-full"
          >
            <h2 className="text-lg font-medium">{snippet.title}</h2>

            <Link href={`/snippet/${snippet.id}`}>
              <Button variant="link" className='cursor-pointer'>View</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
