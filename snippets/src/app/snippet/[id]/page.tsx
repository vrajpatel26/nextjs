import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

const SnippetDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    //it is shorter version of :
    // const data = await params;
    // const id = data.id
    const id = parseInt((await params).id);

    const snippet = await prisma.snippet.findUnique({
        where: {
            id,
        }
    })

    if (!snippet) return <h1>snippet not found</h1>

    return (
        <div className="w-[80%] mx-auto mt-10">
            <div className="bg-gray-100 rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold">{snippet?.title}</h1>

                    <div className="flex gap-3">
                        <Link href={`/snippet/${snippet.id}/edit`}>
                            <Button className="cursor-pointer">
                                Edit
                            </Button>
                        </Link>

                        <Button
                            variant="destructive"
                            className="cursor-pointer"
                        >
                            Delete
                        </Button>
                    </div>
                </div>

                <div className="bg-white border rounded-lg p-6">
                    <pre className="whitespace-pre-wrap break-words text-sm font-mono">
                        {snippet?.code}
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default SnippetDetailPage