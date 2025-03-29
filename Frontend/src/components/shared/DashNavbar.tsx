import React, { useState } from 'react';
import Link from 'next/link';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const DashNavbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const navItems = [
    { href: '/auth/login/dashboard/payroll', icon: <PriceChangeOutlinedIcon />, label: 'Payroll' },
    { href: '/auth/login/dashboard/inventory', icon: <Inventory2OutlinedIcon />, label: 'Inventory' },
    { href: '/auth/login/dashboard/recipes', icon: <MenuBookOutlinedIcon />, label: 'Recipes' },
    { href: '/auth/login/dashboard/sales', icon: <AttachMoneyIcon/>, label:'Sales'}
  ];

  return (
    <nav className="flex flex-col h-screen w-56 bg-white shadow-xl transition-all duration-300 md:w-48 lg:w-56">
      {/* Logo/Brand */}
      <div className="flex items-center justify-center p-6 border-b">
        <p className="text-xl font-bold tracking-wider">RIBEVAL CEVEN</p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col flex-grow px-4 py-8 space-y-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 ${
              activeLink === item.href ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
            }`}
            onClick={() => setActiveLink(item.href)}
          >
            <div className="text-xl">{item.icon}</div>
            <p className="font-medium">{item.label}</p>
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t mt-auto">
        <button className="flex items-center justify-center w-full p-3 space-x-3 rounded-lg transition-all duration-200 hover:bg-red-50 hover:text-red-600 text-gray-700">
          <LogoutOutlinedIcon />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default DashNavbar;