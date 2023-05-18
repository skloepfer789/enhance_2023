import { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '~/styles/carousel.css';

export default class Testimonials extends Component {
    render(){    
    return(
        <section id='testimonials-block'>
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <div>
                <img src="/images/wentworth@4x.webp" alt='The Wentworth Group'/>
                <div className='myCarousel'>
                    <h3>Kevin Flowers</h3>
                    <h4>The Wentworth Company</h4>
                    <p>Thanks again for your outstanding support, creative solutions, fast service. You guys are the go to in local printing in Fort Collins and Northern Colorado.</p>
                </div>                
            </div>
            <div>
                <img src="/images/tutoring@4x.webp" alt='Tutoring Excellence' />
                <div className='myCarousel'>
                    <h3>Tutoring Excellence</h3>
                    <h4>Fort Collins</h4>
                    <p>Justin and his team are the best.  They help with designs and are efficient in getting the jobs done in a timely manor.  We have been using them for printing, window decals and van wraps.  We could’t Be recognized without their help.  Thanks Justin.</p>
                </div> 
            </div>
            <div>
                <img src="/images/blue_sage@4x.webp" alt='Blue Sage' />
                <div className='myCarousel'>
                    <h3>Jennifer Bohlig</h3>
                    <h4>Blue Sage Photography</h4>
                    <p>Justin and Steve were great! Amazing customer service (which made it easy as a novice to figure out exactly what I needed), fast turnaround, and great price. Justin found a solution for me that matched expectations and budget. I am so happy I found Enhance Printing - I will definitely be using again and again. Thanks guys!!</p>
                </div> 
            </div>
        </Carousel>
        </section>
    )
    }
}

export const links = () => [
    {rel: "stylesheet", href: styles},
];