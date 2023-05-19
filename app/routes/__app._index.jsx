import styles from '~/styles/home.css';
import HomeIntro from '../components/home-intro';
import ServicesBlock from '../components/services-block';
import Testimonials, {links as CarouselLinks} from '../components/testimonials';
import InternalLinks from '../components/internallinks';
import LandingHero from '../components/landingHero';

export const meta = () => {
  return [
    {title: "Enhance Printing - Printing, Branding, Signs, and Web Design"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Enhance Printing, All rights reserved."},
    {name: "description", content: "Serving Northern Colorado for over 40 years, Enhance Printing is your one-stop-shop for all your print and branding needs."},    
   {name: "og:title", content: "Enhnace Printing Colorado's One-Stop-Shop for Printing, Branding, Wide Format and Web Design"},
   {name: "og:description", content: "Serving Northern Colorado for over 40 years, Enhance Printing is your one-stop-shop for all your printing, signage, and branding needs."},
   {name: "og:image", content: "/favicon.ico"},
  ];
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