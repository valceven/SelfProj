import Link from "next/link";

const Navbar = () => {

    return (
        <>
            <nav className="flex flex-row items-center justify-between bg-accent2 text-slate-800 px-32 py-12 w-full z-10">
                <div className="flex items-center text-3xl font-medium">
                    <Link href="/" className="hover:text-blue-600"> Ribeval </Link>
                </div>

                <div className="flex">
                    <ul className="flex space-x-24 text-lg">
                        <Link href="/about">
                            <li className="hover:text-blue-600 hover:underline hover:underline-offset-2 cursor-pointer">About</li>
                        </Link>

                        <Link href="/contact">
                            <li className="hover:text-blue-600 hover:underline hover:underline-offset-2 cursor-pointer">Contact</li>
                        </Link>
                        
                        <Link href="/auth/login">
                            <li className="hover:text-blue-600 hover:underline hover:underline-offset-2 cursor-pointer">Login</li>
                        </Link>
                        
                    </ul>
                </div>
            </nav>
        </>
    );

}
export default Navbar;