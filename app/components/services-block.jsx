import { Link } from '@remix-run/react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function ServicesBlock() {
  return (
    <section id='services'>
      <div className='heading-box'>
        <div className="sectionHeading">
          <div className="subheading_box"><h2><sub>WHY ENHANCE PRINTING</sub></h2></div>
          <div><h2>our services</h2></div>
        </div>    
      </div>     
      <div className="row">            
        <div className='col-1of2'>
          <AnimationOnScroll initiallyVisible={true} duration={1.25} offset={130} animateIn="animate__bounce" animateOut='animate__bounce'>
            <img className='icon-service' src='/images/SVG/print_icon.svg' alt='Printing' />
          </AnimationOnScroll>
          <h2>print</h2>
          <p>
            Whether a short or a long run, we have the state of the art equipment to provide fast and cost-effective solutions for a <em>sleek, high-quality finished piece.</em>
          </p>
          <Link to='/services/printing' className="PrimaryButton">SEE MORE</Link>
        </div>
        <div className='col-1of2'>
          <AnimationOnScroll initiallyVisible={true} duration={1.25} offset={130} animateIn="animate__bounce" animateOut='animate__bounce'>
            <img className='icon-service' src='/images/SVG/design_icon.svg' alt='Printing' />
          </AnimationOnScroll>
          <h2>design</h2>
          <p>
          We are one of the only print shops in Fort Collins to offer truly <em>full-service marketing.</em> Whether you’re looking for a single piece, an overhaul of your brand, we are here to help.  
          </p>
          <Link to='/services/design' className="PrimaryButton">SEE MORE</Link>
        </div>
        <div className='col-1of2'>
          <AnimationOnScroll initiallyVisible={true} duration={1.25} offset={130} animateIn="animate__bounce" animateOut='animate__bounce'>
            <img className='icon-service' src='/images/SVG/wideFormat_icon.svg' alt='Printing' />
          </AnimationOnScroll>
          <h2>wide format</h2>
          <p>
          We are experts at creating eye-catching, <em>wide format solutions.</em> Whether you are looking for event signage, banners, vehicle and exterior vinyl, or interior marketing pieces, we can help.  
          </p>
          <Link to='/services/wideformat' className="PrimaryButton">SEE MORE</Link>
        </div>
        <div className='col-1of2'>
          <AnimationOnScroll initiallyVisible={true} duration={1.25} offset={130} animateIn="animate__bounce" animateOut='animate__bounce'>
            <img className='icon-service' src='/images/SVG/web_icon.svg' alt='Printing' />
          </AnimationOnScroll>
          <h2>web design</h2>
          <p>
          We are one of the only print shops in Colorado to offer web design. We are experts at expanding your brand <em>across all media</em>, with extensive options ranging from prebuilt content frameworks to hand-written code.   
          </p>
          <Link to='/services/web' className="PrimaryButton">SEE MORE</Link>
        </div>
      </div>
    </section>
  );
}