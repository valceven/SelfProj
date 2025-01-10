import Link from "next/link";

const Navbar = () => {

    return (
        <>
            <nav className="flex flex-row items-center justify-between bg-transparent text-slate-800 fixed mx-auto px-48 py-12 w-full z-10">
                <div className="flex items-center text-2xl">
                    <Link href="/" className="hover:text-blue-500"> Ribeval </Link>
                </div>

                <div className="flex">
                    <ul className="flex space-x-12 text-xl">
                        <Link href="/about">
                            <li className="hover:text-blue-500 cursor-pointer">About</li>
                        </Link>

                        <Link href="/contact">
                            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
                        </Link>
                        
                        <Link href="login">
                            <li className="hover:text-blue-500 cursor-pointer">Login</li>
                        </Link>
                        
                    </ul>
                </div>
            </nav>
        </>
    );

}

export default Navbar;