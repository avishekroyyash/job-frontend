import { DashboardDrawer } from '@/Component/DashboardComponent/DashboardDrawer';
import React from 'react';

const DashLayout = ({ children }) => {
    return (
        <div className='flex min-h-screen'>
            <DashboardDrawer></DashboardDrawer>
             <div className='flex-1'>
                {children}
             </div>
        </div>
    );
};

export default DashLayout;