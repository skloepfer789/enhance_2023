import styles from '~/styles/contact.css';
import formStyles from '~/styles/forms.css';
import { Form, Link } from '@remix-run/react';

import { FaPhoneAlt, FaEnvelope, FaFacebook, FaLinkedinIn } from 'react-icons/fa';

export default function ContactForm() {

    function handleChange(){

    }
    return(
        <div className='contactRow'>
            <div className='form-panel'>
                <div className="sectionHeading">
                    <div className="subheading_box whiteLine"><h2 className='knockout'><sub>ENHANCE PRINTING</sub></h2></div>
                    <div><h2 className='knockout'>contact us</h2></div>
                </div><br/>
                <Form className='contact'>
                    <div className='group'>
                        <input className='form-input' name='name' aria-label="Name" onChange={handleChange} />
                        <label className={`form-input-label`} htmlFor='name' >name*</label>                    
                    </div>
                    <div className='input-row'>
                        <div className='group'>
                            <input className='form-input' name='email' aria-label="Email" onChange={handleChange} />
                            <label className={`form-input-label`} htmlFor='email'>email*</label>                    
                        </div>
                        <div className='group'>
                            <input className='form-input' name='phone' aria-label="Phone" onChange={handleChange} />
                            <label className={`form-input-label`} htmlFor='phone'>phone</label>                    
                        </div>
                    </div>
                    <div className='group'>
                        <input className='form-input' name='company' aria-label="Company" onChange={handleChange} />
                        <label className={`form-input-label`} htmlFor='company'>company</label>                    
                    </div>
                    <div className='group'>
                        <textarea rows={7} className='form-input' name='message' aria-label="Message" onChange={handleChange} />
                        <label className={`text-input-label`} htmlFor='message'>message*</label>                    
                    </div>
                    <button className="PrimaryButton" type='submit'>CONTACT</button>
                </Form>
            </div>
            <div className='info-panel'>
                <div className='info-box'>
                    <div className="sectionHeading whiteHeading contactHeading">
                        <div className="subheading_box whiteLine"><div><h4 className="knockout">contact</h4></div></div>                    
                    </div>
                    <div className='icon-box'>
                        <Link to='mailto:info@enhanceprinting.com' aria-label="Email Us" >
                            <FaEnvelope className='contact-icon' />
                        </Link>
                        <Link to='tel:970-282-1891' aria-label="Call Us">
                            <FaPhoneAlt className='contact-icon' />
                        </Link> 
                    </div>
                </div>
                <div className='info-box'>
                    <div className="sectionHeading whiteHeading contactHeading">
                        <div className="subheading_box whiteLine"><div><h4 className="knockout">connect</h4></div></div>                    
                    </div>
                    <div className='icon-box'>
                        <Link target="_blank" rel='noreferrer' to='https://www.facebook.com/EnhancePrintCopy/' aria-label="Our Facebook" >
                            <FaFacebook className='contact-icon' />
                        </Link>
                        <Link target="_blank" rel='noreferrer' to='https://www.linkedin.com/company/enhance-printing/' aria-label="Our LinkedIn">
                            <FaLinkedinIn className='contact-icon' />
                        </Link>
                    </div>
                </div>
                <div className='info-box'>
                    <div className="sectionHeading whiteHeading contactHeading">
                        <div className="subheading_box whiteLine"><div><h4 className="knockout">visit</h4></div></div>                    
                    </div>
                    <p className='contact-text'>
                        <em>OFFICE</em><br/>
                        <Link target="_blank" rel='noreferrer' to='https://goo.gl/maps/qzFjwjwyfa6dnYTZ8'>1833 E Harmony Road. Unit 8<br/>Fort Collins, CO 80528<br/></Link>
                        <p className='small-contact'>West side of the building. Facing the railroad tracks.</p>
                    </p>
                    <p className='contact-text'>
                        <em>HOURS</em><br/>
                        Monday - Thurday<br/>
                        8:30 am - 5:00 pm
                        <br/><br/>
                        Friday<br/>
                        8:30 am - 4:30pm
                    </p>
                </div> 
            </div>    
        </div>
    );
}

export const links = () => [
    { rel: "stylesheet", href: styles },
    { rel: 'stylesheet', href: formStyles},
];