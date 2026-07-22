const Navbar = () => {
    return (
        <div className="flex justify-center items-center ">
            <nav className="flex gap-10 text-[25px] ">
                <h1 className="cursor-pointer">Home</h1>
                <div className="flex gap-10">
                    <h1 className="cursor-pointer">Performance</h1>
                    <h1 className="cursor-pointer">Reliability</h1>
                </div>
            </nav>
        </div>
    )
}

export default Navbar