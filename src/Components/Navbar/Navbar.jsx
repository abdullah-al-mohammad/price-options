import Link from "../Link/Link";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {

    const [open, setOpen] = useState(false)
    
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' }
      ];
    return (


        <nav className="bg-amber-500 p-5">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <MdClose className="text-2xl" /> : <CiMenuBurger className="text-2xl" /> 
                }
            </div>
            
            <ul className={`md:flex px-6 absolute duration-1000 ${
                open ? 'top-16' : '-top-60'
            } md:static`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;