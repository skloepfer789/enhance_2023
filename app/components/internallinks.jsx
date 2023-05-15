import { Link } from '@remix-run/react';

export default function InternalLinks() {
  return (
      <section id='internal-links'>
        <div className='heading-box'>
          <div className="sectionHeading">
            <div className="subheading_box"><h2><sub>WHY ENHANCE PRINTING</sub></h2></div>
            <div><h2>your next project</h2></div>
          </div>
          <div className='next-project-text'>
            <p>
              We’d love to hear about your next project. Please, feel free to <em>call us</em>, and we can help brainstrom your next project. Or, if you already have something in mind, please fill out either our <em>quote request</em>, or <em>design intake</em> forms &#40;linked below&#41; and we can start helping you today!
            </p>
          </div>
          <div className='row-noShrink'>
            <div className='col-1of4'>
              <Link to='tel:970-282-1891'>
                <img className='icon-link' src='/images/SVG/call_icon.svg' alt='' />
                <h3>call</h3>
              </Link>
            </div>
            <div className='col-1of4'>
              <Link to='/quote'>
                <img className='icon-link' src='/images/SVG/quote_icon.svg' alt='' />
                <h3>quote</h3>
              </Link>
            </div>
            <div className='col-1of4'>
              <Link to='/upload'>
                <img className='icon-link' src='/images/SVG/upload_icon.svg' alt='' />
                <h3>upload</h3>
              </Link>
            </div>
            <div className='col-1of4'>
              <Link to='/services/design/intake'>
                <img className='icon-link' src='/images/SVG/design_button_icon.svg' alt='' />
                <h3>design</h3>
              </Link>
            </div>
          </div>
        </div>     
      </section>
  );
}