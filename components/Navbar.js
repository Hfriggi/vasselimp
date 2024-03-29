import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import {Link} from 'react-scroll';

const NavBar = () => {
    const router = useRouter()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    useEffect(()=>{
        setMobileMenuOpen(false);
    }, [router.asPath])

    return (
    <>    
        <header className="bg-gray-900 border-gray-200 dark:bg-gray-900">
        <div className="sticky top-0 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center">
                <img src="/images/vasselimpLogo.png" className="h-12 mr-4" alt="Company Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white"></span>
            </Link>
            <button onClick={toggleMobileMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition duration-500 ease-in-out" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6  transition duration-500 ease-in-out" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className={`${mobileMenuOpen ? "" : "hidden"} w-full md:block transition duration-500 ease-in-out md:w-auto focus:outline-none `} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-800 bg-gray-800 md:bg-gray-900 border-gray-700">
                <li>
                <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className="block py-2 pl-2 pr-2 text-white rounded hover:bg-gray-600 hover:text-blue-200" aria-current="page">Inicio</Link>
                </li>
                <li>
                <Link to="servicos" spy={true} smooth={true} offset={-10} duration={500} className="block py-2 pl-2 pr-2 text-white rounded hover:bg-gray-600 hover:text-blue-200" aria-current="page">Serviços</Link>
                </li>
                <li>
                <Link to="resultados" spy={true} smooth={true} offset={-150} duration={500} className="block py-2 pl-2 pr-2 text-white rounded hover:bg-gray-600 hover:text-blue-200" aria-current="page">Resultados</Link>
                </li>
                <li>
                <Link to="sobre" spy={true} smooth={true} offset={0} duration={500} className="block py-2 pl-2 pr-2 text-white rounded hover:bg-gray-600 hover:text-blue-200">Sobre nós</Link>
                </li>
            </ul>
            </div>
        </div>
        </header>
    </>
    )
}

export default NavBar