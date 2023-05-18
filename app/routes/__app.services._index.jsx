import {Link} from '@remix-run/react';

import styles from '~/styles/services.css';
import ServiceLoop from '../components/servicesLooping';

export const meta = () => {
  return [{ title: "Enhnace Printing | Northern Colorado's One-Stop-Shop" }];
};

export default function ServicesPage() {
  return (
    <main>
      <div className={`BarBlue TopBarThird`} >
        <img className='topBarLogo' src='/images/SVG/enhance_fullLogo.svg' alt='Enhance Printing' />
        <div className='looperBox'>
          <ServiceLoop className='loop' />
        </div>
      </div>
      <div className="textArea">
        <p className='headline-paragraph' >
        Here at <em>Enhance Printing</em>, we can help create any marketing piece you need to further your brand. No job is too big or too small for us to take on. Whether you are searching for a company-wide rebrand and all the marketing pieces to accompany your new look, or a simple flyer for a garage sale, <em>we are here to help</em>.
        <br/><br/>
        Offering full-service <em>graphic design</em> & marketing, <em>wide format</em> printing, <em>digital and offset printing</em>, with state-of-the art <em>bindery</em> options, we can provide a sleek, high-quality finished product for your every need.
        </p>
      </div>
      <section className='blueBar knockout'>
        <div className='textArea'>
          <div className="sectionHeading whiteHeading">
            <div className="subheading_box whiteLine">
              <h2 className="knockout"><sub>OUR SERVICES</sub></h2>
            </div>
            <div><h2 className="knockout">digital and offset printing</h2></div>
          </div>          
          <p>
            We run both digital and offset machines to allow <em>competitive pricing</em> and turnarounds for both short, and long runs. Our <em>state-of-the-art</em> bindery will help you create a sleek and modern finished piece, with a wide variety of binding, folding, creasing, and cutting options. We also have one of the only <em>digital envelope printers</em> in Northern Colorado, allowing us to create eye-catching envelopes, no matter the run size. 
          </p>        
        </div>
        <div className='photoRow'>
          <div className='photoBox'>
            <img className='verticalImg' src='/images/service-page/LomaxDoorHangar.webp' alt='Door Hangars' />
          </div>
          <div className='photoBox'>
            <img className='horizontalImg' src='/images/service-page/MuttKneeTrifold.webp' alt='TriFolds' />
          </div>
          <div className='photoBox'>
            <img className='horizontalImg' src='/images/service-page/BusinessCards1.webp' alt='Business Cards' />
          </div>
        </div>
        <div className='buttonDiv'>
          <Link to='/services/printing' className='KnockoutButton' >OUR PRINT SERVICES</Link>           
        </div>
      </section>
      <section >
        <div className='textArea'>
          <div className="sectionHeading">
            <div className="subheading_box">
              <h2 ><sub>OUR SERVICES</sub></h2>
            </div>
            <div><h2 >graphic design and branding</h2></div>
          </div>          
          <p>
            We are one of the only shops in Northern Colorado to offer <em>full marketing services</em>, including websites. We specialize in brand identity, and creating <em>cohesion</em> across both print and digital media. With a wide variety of <em>affordable packages</em>, we can help find the solution that best fits your company, project, and budget.
          </p>        
        </div>
        <div className='photoRow'>
          <div className='photoBox'>
            <img className='horizontalImg' src='/images/service-page/MuttKneeLogo.webp' alt='Door Hangars' />
          </div>
          <div className='photoBox'>
            <img className='horizontalImg' src='/images/service-page/RexLogo.webp' alt='TriFolds' />
          </div>
          <div className='photoBox'>
            <img className='horizontalImg' src='/images/service-page/SunOutLogo.webp' alt='Business Cards' />
          </div>
        </div>
        <div className='buttonDiv'>
          <Link to='/services/printing' className='PrimaryButton' >OUR DESIGN SERVICES</Link>           
        </div>
      </section>
      <section className='blueBar knockout'>
        <div className='textArea'>
          <div className="sectionHeading whiteHeading">
            <div className="subheading_box whiteLine">
              <h2 className="knockout"><sub>OUR SERVICES</sub></h2>
            </div>
            <div><h2 className="knockout">wide format</h2></div>
          </div>          
          <p>
            We pride ourselves in our ability to handle any job that comes out way. This is why we purchased a solvent-ink based wide format printer about eight years ago, and began offering <em>full-scale signage</em> and <em>vinyl</em>. No matter the project, we want to be your go-to stop for all your printing, branding, and signage needs. 
          </p>        
        </div>
        <div className='photoRow'>
          <div className='photoBox'>
            <img className='horizontalImg' src='/images/service-page/Rex Van.webp' alt='Vehicle Wraps' />
          </div>
          <div className='photoBox'>
            <img className='horizontalImg' src='/images/service-page/SummitSign.webp' alt='Signage' />
          </div>
          <div className='photoBox'>
            <img className='horizontalImg' src='/images/service-page/EndoRockies_Round_Sticker_Mockup_6.webp' alt='Labels' />
          </div>
        </div>
        <div className='buttonDiv'>
          <Link to='/services/printing' className='KnockoutButton' >OUR WIDE FORMAT SERVICES</Link>           
        </div>
      </section>
      <section >
        <div className='textArea'>
          <div className="sectionHeading">
            <div className="subheading_box">
              <h2 ><sub>OUR SERVICES</sub></h2>
            </div>
            <div><h2 >web design</h2></div>
          </div>          
          <p>
            As the marketplace evolves, so must your offerings. We strive to equip our customers with all the tools to <em>compete</em> in the fast-paced modern market. Which is why we now offer web design. Together, we will find the <em>digital solution</em> that best fits your company’s needs now, and will <em>scale</em> with you as you continue to grow. 
          </p>        
        </div>
        <div className='photoRow'>
          <div className='photoBox'>
            <img className='horizontalImg' src='/images/service-page/HoodGuyMockup copy.webp' alt='Door Hangars' />
          </div>
          <div className='photoBox'>
            <img className='horizontalImg' src='/images/service-page/Naturescapes_Site.webp' alt='TriFolds' />
          </div>
          <div className='photoBox'>
            <img className='horizontalImg' src='/images/service-page/AegirsWorkshopSite.webp' alt='Business Cards' />
          </div>
        </div>
        <div className='buttonDiv'>
          <Link to='/services/printing' className='PrimaryButton' >OUR WEB SERVICES</Link>           
        </div>
      </section>
    </main>
  );
}

export const links = () => [
  {rel: 'stylesheet', href: styles},
];
