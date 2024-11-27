import React from 'react';
import { Link } from 'react-router-dom';
import '../BaseComponents/Navbar.css';

const SellerNavbar: React.FC = () => {
    return (
        <nav className="sidebar-nav">
            <ul>
                <li><Link to="/vehicles">Vehicles</Link></li>
                <li><Link to="/chargers">Chargers</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/invoices">Invoices</Link></li>
            </ul>
        </nav>
    );
}

export default SellerNavbar;