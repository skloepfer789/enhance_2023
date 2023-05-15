import { Link } from '@remix-run/react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from '~/styles/home.css';
import HomeIntro from '../components/home-intro';
import ServicesBlock from '../components/services-block';

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
      <HomeIntro/>
      <ServicesBlock />
    </main>
  );
}

export const links = () => [
  {rel:   "stylesheet", href: styles},
  ];