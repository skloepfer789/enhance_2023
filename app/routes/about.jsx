import styles from "~/styles/about.css";
import HeaderNoFade from "../components/header-noFade";
import ContactForm, {links as ContactLinks} from "../components/contactform";

export const meta = () => {
    return [{ title: "Enhnace Printing | Northern Colorado's One-Stop-Shop" }];
  };
  
  export default function AboutPage() {
    return (
      <>      <HeaderNoFade />
      <main>
        <div className={`BarOrange TopBarHalf`} >
          <div className="mission">
            <h2>mission</h2>
            <p >
              For over 40 years we have provided professional, cost-effective printing and graphic design to Fort Collins and the Front Range. We strive to be Northern Colorado’s <em>One-Stop-Shop</em> to support your brand and vision.
            </p>
          </div>
          <img className="aboutImage" src="/images/Heildelberg_Image.webp" alt="Heildelberg Press" />
        </div>
        <div className="textArea">
          <div className="sectionHeading">
            <div className="subheading_box"><h2><sub>ABOUT ENHANCE PRINTING</sub></h2></div>
            <div><h2>colorado's one-stop-shop</h2></div>
          </div>
          <p>
            We offer all services in-house, with an eye for detail and consistency. Our capabilities range from the preliminary graphic design all the way through the finishing process. With industrial sign capabilities, as well as top-of-the-line finishing equipment, we can provide you with a high-quality end product whether you’re needing it print or digital, short or long run.
          </p>
        </div>
        <div  className="blueBar">
          <div className="row">
            <div className="col-1of3">
              <img src="/images/SVG/NoCoStyle_badge.svg" alt="NoCo Style Nominee 2020" />
            </div>
            <div className="col-2of3">
              <div className="knockout rightHandText">
                <div className="sectionHeading rightFloat whiteHeading">
                  <div className="subheading_box whiteLine">
                    <h2 className="knockout"><sub>ABOUT ENHANCE PRINTING</sub></h2></div>
                    <div><h2 className="knockout">strong local roots</h2></div>
                </div>
                <p>
                  We have been a part of the Fort Collins community for over forty years. As a small, family-run business, we pride ourselves in our ties to the Front Range community, and work to provide excellent service to the region where we were raised. 
                </p>
              </div>
            </div>
          </div>          
        </div>
        <div className="textArea">
          <div className="sectionHeading">
            <div className="subheading_box"><h2><sub>ABOUT ENHANCE PRINTING</sub></h2></div>
            <div><h2>every job is a priority</h2></div>
          </div>
          <p>
            We pride ourselves in our speed and efficiency. Working closely with you to come up with the best solutions for your business, we strive to produce fast and cost-effective work without sacrificing quality or consistency.<br/><br/>
          </p>
        </div>
        <ContactForm />
      </main>
      </>

    );
  }

export const links = () => [
  {rel:   "stylesheet", href: styles},
  ...ContactLinks(),
];
  