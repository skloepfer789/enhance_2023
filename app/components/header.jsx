import { useState, useEffect } from "react";
import { Link, NavLink } from "@remix-run/react";
import {FaPhoneAlt} from 'react-icons/fa'

import headerstyles from '~/styles/header.css';

import SvgComponent from "~/images/TypeOnlyLogo";


export const links = () => [
  {rel: "stylesheet", href: headerstyles},
];

export default function Header() {
    const [open, setOpen] = useState('closed');
    const [openState, setOpenState] = useState(false);
    const[navbar, setNavbar] = useState('transparent');
    const[logo, setLogo] = useState('invisibleLogo');

    function ToggleMenu() {
        setOpenState(!openState);
        if(!openState){
            setOpen('open');
        } else {
            setOpen('closed');
        }
    };

   const changeBackground = () => {
        if (window.scrollY >= 220) {
            setNavbar('');
            setLogo('');
          } else {
            setNavbar('transparent');
            setLogo('invisibleLogo');
          }
    }

    useEffect(()=>{
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    });


    return (
        <>
            <header id='mobileheader' className={`mobile_header mobile ${navbar}`}>
                <Link to='/' aria-label="Home Button"><SvgComponent name='icon1' className={`logo ${logo}`} alt='Enhance Printing Logo'/></Link>                
            </header>
            <button onClick={()=>ToggleMenu()} className={`burger`} aria-label="MenuButton" >
                <div className={`line ` + open} />
                <div className={`line ` + open} />
                <div className={`line ` + open} />
            </button>                
            <header>
                <div className="sidebar"></div>
                <button onClick={() => ToggleMenu()} className="invisible" aria-label='Menu'><h2 className={`header_heading heading` + open}>{!openState ? `MENU` : `CLOSE`}</h2></button>
            </header>
            
            <section className={`menu menu` + open} >
            <nav>
                <NavLink onClick={() => ToggleMenu() } to='/'><h2 className="linkFont">Home</h2></NavLink>
                <NavLink onClick={() => ToggleMenu() } to='/services'><h2 className="linkFont">Services</h2></NavLink>
                    <ul className="subheadings">
                        <li><NavLink onClick={() => ToggleMenu() } to='/services/printing'><h3 className="subheadFont">printing</h3></NavLink></li>
                        <li><NavLink onClick={() => ToggleMenu() } to='/services/design'><h3 className="subheadFont">graphic design</h3></NavLink></li>
                        <li><NavLink onClick={() => ToggleMenu() } to='/services/wideformat'><h3 className="subheadFont">wide format</h3></NavLink></li>
                        <li><NavLink onClick={() => ToggleMenu() } to='/services/web'><h3 className="subheadFont">web design</h3></NavLink></li>
                    </ul>
                <NavLink onClick={() => ToggleMenu() } to='/about'><h2 className="linkFont">About</h2></NavLink>
                    <ul className="subheadings">
                        <li><NavLink onClick={() => ToggleMenu() } to='/faq'><h3 className="subheadFont">FAQs</h3></NavLink></li>
                    </ul>
                <NavLink onClick={() => ToggleMenu() } to='/upload'><h2 className="linkFont">Upload</h2></NavLink>
                <Link preventScrollReset={true} onClick={() => ToggleMenu() } to='/quote'><h2 className="linkFont">Quote</h2></Link>                    
                <Link onClick={() => ToggleMenu() } to='/pay'><h2 className="linkFont">Pay Invoice</h2></Link>
                <NavLink onClick={() => ToggleMenu() } to='tel:970-282-1891'><h2 className="linkFont">Call Us  <FaPhoneAlt className="emphasis"/></h2></NavLink>
            </nav>
            <SvgComponent name='icon2' className='menuLogo' alt='Enhance Printing Logo'/>
        </section>
        </>
    );
}