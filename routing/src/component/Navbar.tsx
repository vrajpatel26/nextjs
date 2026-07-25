import Link from "next/link"
const Navbar = () => {
    return (
        <div className="absolute z-10 w-full">
            <nav className="flex justify-center items-center gap-10 text-[25px] ">
                <Link
                    href="/"
                    className="cursor-pointer"
                >Home</Link>
                <div className="flex gap-10">
                    <Link
                        href="/performance"
                        className="cursor-pointer"
                    >Performance</Link>
                    <Link href="/reliability"
                        className="cursor-pointer"
                    >Reliability</Link>
                </div>
            </nav>

        </div>
    )
}

export default Navbar