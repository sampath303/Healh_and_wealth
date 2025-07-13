import React from 'react'
import './navbar.css'
import LogoWebsite from './Logo.png' 
import { Link, useNavigate } from 'react-router-dom';



function WebNavbar() {

    const navigate = useNavigate()

    return (
        <div className='button'>
            
            <img src={LogoWebsite} alt='Logo' className='logo' />

            <ul>
                <li onClick={()=>navigate('/')}>Home</li>
                <li onClick={()=>navigate('/diet')}>Diet</li>
                <li onClick={()=>navigate('/aboutus')}>About us</li>
                <li onClick={()=>navigate('/signup')}>Sign up</li>
            </ul>

            
            {/* {/* <div className='Search'>
                <input type='text' placeholder='Search'  /> *
             
    </div> */}
        </div>
    );
}

export default WebNavbar
