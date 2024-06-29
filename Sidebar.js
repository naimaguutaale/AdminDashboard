import React from 'react';
import './App.css'

import { Link } from 'react-router-dom';
import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill,
    BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck,
    BsMenuButtonWideFill
} from 'react-icons/bs'


const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {

    return (
        <nav id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon_header' /> SHOP
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to="/">
                        <BsGrid1X2Fill className='icon' />  Dashboard
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Products">
                        <BsFillArchiveFill className='icon' /> Products
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/cotegories">
                        <BsFillGrid3X3GapFill className='icon' /> Categories
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/customers">
                        <BsPeopleFill className='icon' /> Customers
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/inventory">
                        <BsListCheck className='icon' /> Inventory
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/reports">
                        <BsMenuButtonWideFill className='icon' /> Reports
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar

