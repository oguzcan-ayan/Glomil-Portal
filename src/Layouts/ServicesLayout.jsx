import React from 'react';
import Sidebar from '../components/services/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function ServicesLayout() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default ServicesLayout;