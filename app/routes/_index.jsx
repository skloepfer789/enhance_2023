import { EnhanceBlue } from "../styles/global.styles";

export const meta = () => {
  return [{ title: "Enhnace Printing | Northern Colorado's One-Stop-Shop" }];
};

export default function Index() {
  return (
    <main>
      <div className={`BarBlue TopBarFull`} >
        <h1 className="knockout">your one stop shop for <em>printing</em></h1>
        <a href='/contact' className="KnockoutButton">CONTACT US</a>
      </div>
      <div className="textArea">
        <div className="sectionHeading">
          <div><h2><sub>ABOUT ENHANCE PRINTING</sub></h2></div>
          <div className="dividerBar"></div>
          <div><h2>testing the fonts</h2></div>
        </div>
        <p>Testing the <em>fonts</em> on this site.<br/>Line Two</p>
        <a href='google.com' className="PrimaryButton">SEE MORE</a>
      </div>
      <div style={{ fontFamily: "Open Sans, sans-serif", lineHeight: "1.4", backgroundColor:EnhanceBlue, backgroundImage:"../../public/background_icon_overlay.svg", padding:"30px 0", marginTop:"50px"}}>
        <div className="textArea knockout rightHandText">
          <div className="sectionHeading">
            <div><h2 className="knockout"><sub>OUR SERVICES</sub></h2></div>
            <div className="dividerBar dividerWhite dividerRight"></div>
            <div><h2 className="knockout">testing the fonts</h2></div>
          </div>
          <p>Testing the <em>fonts</em> on this site.<br/>Line Two</p>
        </div>
      </div>
    </main>
  );
}
