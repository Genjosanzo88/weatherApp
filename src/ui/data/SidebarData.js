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
        title: "Mallorca",
        icon: <DashboardIcon />,
        link: "/mallorca",
    },
    {
        id: 2,
        title: "Valencia",
        icon: <ReceiptIcon />,
        link: "/valencia",
    },
]