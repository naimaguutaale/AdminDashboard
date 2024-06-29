import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Products from './Products'
import Customers from './Customers'
import  Inventory from './Inventory'
import Cotegories  from './Cotegories'
import Reports from './Reports'



const App = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <div>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/cotegories" element={<Cotegories />} />

        <Route path="/customers" element={<Customers />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={< Reports />} />

      </Routes>
    </div>

        </div>
    )
}

export default App



