import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Header></Header>
            <div>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side shadow-xl">
                        <label htmlFor="my-drawer-2 " className="drawer-overlay "></label>
                        <ul className="menu p-4 w-80 text-base-content bg-sky-800">
                            <li><Link to='/dashboard'>My Dashboard</Link></li>
                            {
                                isAdmin && <>
                                    <li><Link to='/dashboard/users'>All User</Link></li>
                                    <li><Link to='/dashboard/addDoctor'>Add A Doctor</Link></li>
                                    <li><Link to='/dashboard/manageDoctors'>Manage Doctor</Link></li>
                                </>
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;