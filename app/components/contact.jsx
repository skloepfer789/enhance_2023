import styles from '~/styles/contact.css';
import formStyles from '~/styles/forms.css';
import { Form } from '@remix-run/react';

export default function ContactForm() {

    function handleChange(){

    }
    return(
        <div className='contactRow'>
            <div className='form-panel'>
                <div className="sectionHeading">
                    <div><h2 className='knockout'><sub>ABOUT ENHANCE PRINTING</sub></h2></div>
                    <div className="dividerBar dividerWhite"></div>
                    <div><h2 className='knockout'>contact us</h2></div>
                </div>
                <Form className='contact'>
                    <div className='group'>
                        <input className='form-input' onChange={handleChange} />
                        <label className={`form-input-label`}>name*</label>                    
                    </div>
                    <div className='input-row'>
                        <div className='group'>
                            <input className='form-input' onChange={handleChange} />
                            <label className={`form-input-label`}>email*</label>                    
                        </div>
                        <div className='group'>
                            <input className='form-input' onChange={handleChange} />
                            <label className={`form-input-label`}>phone</label>                    
                        </div>
                    </div>
                    <div className='group'>
                        <input className='form-input' onChange={handleChange} />
                        <label className={`form-input-label`}>company</label>                    
                    </div>
                    <div className='group'>
                        <textarea rows={7} className='form-input' onChange={handleChange} />
                        <label className={`text-input-label`}>message*</label>                    
                    </div>
                    <button className="PrimaryButton" type='submit'>CONTACT</button>
                </Form>
            </div>
            <div className='info-panel'>
            </div>
        </div>
    );
}

export const links = () => [
    { rel: "stylesheet", href: styles },
    { rel: 'stylesheet', href: formStyles},
];