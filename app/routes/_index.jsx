import { Link } from '@remix-run/react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from '~/styles/home.css';

export const meta = () => {
  return [{ title: "Enhnace Printing | Northern Colorado's One-Stop-Shop" }];
};

export default function Index() {
  return (
    <main>
      <div className={`BarBlue TopBarFull`} >
        <h1 className="knockout">your one stop shop for <em>printing</em></h1>
        <Link to='/contact' className="KnockoutButton">CONTACT US</Link>
      </div>
      <div className="row">
      <div className='col-2of3'>
        <div className="sectionHeading">
          <div className="subheading_box"><h2><sub>ABOUT ENHANCE PRINTING</sub></h2></div>
          <div><h2>colorado's one-stop-shop</h2></div>
        </div>
          <p className='headline-paragraph'>
            Serving Northern Colorado for over forty years, <em>Enhance Printing</em> is the <em>one-stop-shop</em> for all your printing, wide format and branding needs.
          </p>
        </div>
        <div className='col-1of3-aside'>
          <img className='inlineImage' src='/images/ENH_CO-Icon.gif' alt='Colorado Owned And Operated'/><br/>
          <Link to='/about' className="PrimaryButton">SEE MORE</Link>
        </div>        
      </div>
      <div className='row'>
        <AnimationOnScroll className='col-1of3' style={{backgroundColor: '#06245d'}} duration={1.25} offset={100} animateIn="animate__backInUp" animateOut="animate__backOutUp">
          <img className='icon' src='/images/SVG/fast_icon.svg' alt='Fast Service' />
          <p className='knockout'>
            We pride ourself in our speed and efficiency. While many of our competitors take over a week, we work to get most jobs out within <em>one to three days</em>. 
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll className='col-1of3' style={{backgroundColor: '#f57600'}} duration={2} offset={100} animateIn="animate__fadeIn" animateOut="animate__fadeOut">
          <img className='icon' src='/images/SVG/local_icon.svg' alt='Local' />
          <p className='knockout'>
            Operating in the Front Range for over four decades, we are a proud of our ties to Fort Collins, and the greater <em className='orangeback_em'>Northern Colorado</em> area. 
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll className='col-1of3' style={{backgroundColor: '#890c4d'}} duration={1.25} offset={100} animateIn="animate__backInDown" animateOut="animate__backOutDown">
          <img className='icon' src='/images/SVG/full_service_icon.svg' alt='Full Service' />
          <p className='knockout'>
            From the preliminary design, through the final product, our expansive options will make us
            your <em>one-stop-shop</em> for all your print and design needs. 
          </p>
        </AnimationOnScroll>
      </div>
      <div className='textArea'>
        <div className="sectionHeading">
          <div className="subheading_box"><h2><sub>WHY ENHANCE PRINTING</sub></h2></div>
          <div><h2>our services</h2></div>
        </div>         
        <div className="row">            

        </div>
      </div>
    </main>
  );
}

export const links = () => [
  {rel:   "stylesheet", href: styles},
  ];