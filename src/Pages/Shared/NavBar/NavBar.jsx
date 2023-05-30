import { Link } from "react-router-dom";


const NavBar = () => {
    const navItems = <>
        <li><Link>Home</Link></li>
        <li><Link>Contact Us</Link></li>
        <li><Link>Dashboard</Link></li>
        <li><Link>Our Menu</Link></li>
        <li><Link>Our Shop</Link></li>
    </>
    return (
        <div className="navbar fixed z-10 opacity-80 bg-black max-w-7xl mx-auto text-white px-2 py-4 font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-white text-black  rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="text-2xl font-bold text-white">Bistro Boss</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-purple-800">Get started</a>
            </div>
        </div>
    );
};

export default NavBar;