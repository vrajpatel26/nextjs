import { deleteSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

const SnippetDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    //it is shorter version of :
    // const data = await params;
    // const id = data.id
    const id = parseInt((await params).id);

    // await new Promise ((r) => setTimeout(r,2000))

    const snippet = await prisma.snippet.findUnique({
        where: {
            id,
        }
    })

    if (!snippet) return notFound()

    const deleteSnippetAction = deleteSnippet.bind(null,snippet.id)



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

                        <form action={deleteSnippetAction}>
                            <Button
                                type="submit"
                                variant="destructive"
                                className="cursor-pointer"
                            >
                                Delete
                            </Button>
                        </form>
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



export const generateStaticParams = async() =>{
    const snippets = await prisma.snippet.findMany()

    return snippets.map((snippet)=>{
        return {id:snippet.id.toString()}
})
}