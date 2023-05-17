import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from '~/styles/home.css';
import HomeIntro from '../components/home-intro';
import ServicesBlock from '../components/services-block';
import Testimonials, {links as CarouselLinks} from '../components/testimonials';
import InternalLinks from '../components/internallinks';
import LandingHero from '../components/landingHero';

export const meta = () => {
  return [{ title: "Enhnace Printing | Northern Colorado's One-Stop-Shop" }];
};

export default function Index() {
  return (
    <main>
      <LandingHero />
      <HomeIntro/>
      <ServicesBlock />
      <Testimonials />
      <InternalLinks />
    </main>
  );
}

export const links = () => [
  {rel:   "stylesheet", href: styles},
  ...CarouselLinks(),
  ];