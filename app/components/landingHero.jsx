import { Link } from "@remix-run/react";
import { useState } from "react";

import Typewriter from 'typewriter-effect';

//https://www.npmjs.com/package/typewriter-effect

export default function LandingHero() {
    const [barColor, setBarColor] = useState('BarBlue');

    function ChangeColor(color){
        setBarColor(color);
    }

    return(
        <div id="hero" className={`${barColor} TopBarFull`} >
            <h2 className="knockout typewriter"><Typewriter 
                onInit={(typewriter) => {    
                    typewriter
                    .callFunction(()=>{
                        ChangeColor('BarBlue');
                    })                
                    .typeString('Your One-Stop-Shop For ')
                    .pauseFor(500)
                    .typeString('<strong>Printing</strong>')
                    .pauseFor(2500)
                    .deleteChars(8)
                    .callFunction(()=>{
                        ChangeColor('BarGreen');
                    })
                    .typeString('<strong>Branding</strong>')
                    .pauseFor(2500)
                    .deleteChars(8)
                    .callFunction(()=>{
                        ChangeColor('BarPurple');
                    })
                    .typeString('<strong>Wide Format</strong>')
                    .pauseFor(2500)
                    .deleteChars(11)
                    .callFunction(()=>{
                        ChangeColor('BarDarkOrange');
                    })
                    .typeString('<strong>Design</strong>')
                    .pauseFor(2500)
                    .deleteChars(6)
                    .callFunction(()=>{
                        ChangeColor('BarBlack');
                    })
                    .typeString('<strong>Finishing</strong>')
                    .pauseFor(2500)
                    .deleteChars(9)
                    .callFunction(()=>{
                        ChangeColor('BarDarkGreen');
                    })
                    .typeString('<strong>Web</strong>')
                    .pauseFor(2500)
                    .start();
                }}
                options={{
                    loop: true
                }}
            /></h2>
            <div className="mobileLogoBox">
                <img className="mobileLogo" src="/images/SVG/enhance_fullLogo-shadow.svg" alt="Enhance Printing Logo"/>
                <Link to='/contact' className="KnockoutButton">CONTACT US</Link>
            </div> 
            <div className="mainLogoBox">
                <img className="mainLogo" src="/images/SVG/enhance_type_noIcon.svg" alt="Enhance Printing Logo"/>
                <Link to='/contact' className="KnockoutButton">CONTACT US</Link>
            </div>
            <div className="mainIconBox">
                <img className="mainIcon" src="/images/SVG/enhance_iconOnly.svg" alt="Enhance Printing"/>
            </div> 
      </div>
    );
}