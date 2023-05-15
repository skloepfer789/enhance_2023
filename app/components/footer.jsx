import { Link } from '@remix-run/react';

import SvgComponent from "~/images/TypeOnlyLogo";

import styles from '~/styles/footer.css';

export default function Footer() {

    const name = 'icon3';

    return (
        <footer>
        <div className='footer'>
            <div className='col-4'>
                <SvgComponent name={name} className='footer_logo' />
                <p className="footerFont">
                Serving Northern Colorado for over 40 years, Enhance Printing is your one-stop-shop for all your print and brand needs.
                </p>
            </div>
            <div className='col-4'>
                <h5>OFFICE</h5>
                <p className='footerFont'>
                    1833 E Harmony Road<br/> Unit 8<br/>
                    Fort Collins, CO 80528
                </p>
            </div>
            <div className='col-4'>
                <h5>CONTACT</h5>
                <p className='footerFont'><a href='tel:970-282-1891'>970 282-1891</a><br/><a href='mailto:info@enhanceprinting.com'>info@enhanceprinting.com</a></p>
            </div>
            <div className='col-4 right'>
                <h5>
                    <Link className='footerMenu' to='/'>HOME</Link><br/>
                    <Link className='footerMenu' to='/services'>SERVICES</Link><br/>
                    <Link className='footerMenu' to='/upload'>UPLOAD</Link><br/>
                    <Link className='footerMenu' to='/about'>ABOUT US</Link><br/>
                    <Link className='footerMenu' to='/faq'>FAQs</Link><br/>
                </h5>
            </div>            
        </div>
        <div className='copywrite'>
                <p className='footerFont center'>&copy;2023 Enhance Printing</p>
            </div>      
        </footer>
    );
}
  
export const links = () => [
{rel:   "stylesheet", href: styles},
];