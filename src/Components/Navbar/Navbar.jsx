import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBuildingColumns, faGraduationCap, faHospital, faBusinessTime, faPrescriptionBottleMedical} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';


const Navbar =()=>{
    return(
        <div className='navbar'>
            <Link to="/CollegeVerse/"><img id='img' src={logo} alt='' /></Link>
            <NavLink to="/university" className='menu'><FontAwesomeIcon className='menu-logo' icon={faBuildingColumns} style={{color: "#11009e",}} />University</NavLink>
            <NavLink to="/engineering" className='menu'><FontAwesomeIcon className='menu-logo' icon={faGraduationCap} style={{color: "#11009e",}} />Engineering</NavLink>
            <NavLink to="/medical" className='menu'><FontAwesomeIcon className='menu-logo' icon={faHospital} style={{color: "#11009e",}} />Medical</NavLink>
            <NavLink to="/management" className='menu'><FontAwesomeIcon className='menu-logo' icon={faBusinessTime} style={{color: "#11009e",}} />Management</NavLink>
            <NavLink to="/pharmacy" className='menu'><FontAwesomeIcon className='menu-logo' icon={faPrescriptionBottleMedical} style={{color: "#11009e",}} />Pharmacy</NavLink>
        </div>
    )
}
export default Navbar;