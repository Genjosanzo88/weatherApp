import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';

export const SidebarData = [
    {
        id: 0,
        title: "Barcelona",
        icon: <HomeIcon />,
        link: "/barcelona",
    },
    {
        id: 1,
        title: "Madrid",
        icon: <DashboardIcon />,
        link: "/madrid",
    },
    {
        id: 2,
        title: "Valencia",
        icon: <ReceiptIcon />,
        link: "/valencia",
    },
]