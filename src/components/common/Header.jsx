import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    let activeStyle = {
        background: 'linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)',
        borderRadius: "10px",
        color: "#FFF"
    };
    const menuItems = <>
        <li>
            {
                user?.uid ? <NavLink to='/dashboard' style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } >Dashboard</NavLink> : <></>
            }
        </li>
        <li><NavLink to='/home' style={({ isActive }) =>
            isActive ? activeStyle : undefined
        } >Home</NavLink></li>
        <li><NavLink to='/about' style={({ isActive }) =>
            isActive ? activeStyle : undefined
        }>About</NavLink></li>
        <li><NavLink to='/appointment' style={({ isActive }) =>
            isActive ? activeStyle : undefined
        }>Appointment</NavLink></li>
        <li><NavLink to='/reviews' style={({ isActive }) =>
            isActive ? activeStyle : undefined
        }>Reviews</NavLink></li>
        <li><NavLink to='/contact' style={({ isActive }) =>
            isActive ? activeStyle : undefined
        }>Contact Us</NavLink></li>
    </>

    return (
        <div className='bg-base-100 lg:py-2 shadow-sm sticky top-0 z-40'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost p-0 pr-5 hover:bg-base-100 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="text-secondary text-xl font-bold">Doctor<span className='text-gray-400 text-sm font-normal'>Portal</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="font-semibold menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                {
                    user?.uid ?
                        <div className="navbar-end lg:w-32">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-12 rounded-full">
                                        {
                                            user?.photoURL ? <img src={user.photoURL} alt="" /> : <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>

                                            </div>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link>Settings</Link></li>
                                    <li><Link to='/loginForm' onClick={handleLogOut} className="">Sing Out</Link></li>
                                </ul>
                            </div>
                            <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost hover:bg-base-100 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                                </svg>
                            </label>
                        </div>
                        :
                        <div className="navbar-end">
                            <NavLink to='/loginForm' className="btn text-base-100 linear-gradient border-none hover:bg-secondary hover:border-none">Get started</NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;