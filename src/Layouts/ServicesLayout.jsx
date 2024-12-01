import React from 'react';
import Sidebar from '../components/services/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function ServicesLayout() {
    return (
        <>
            <div className='services-layout'>
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

export default ServicesLayout;