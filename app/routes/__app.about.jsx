import { EnhanceBlue } from "../styles/global.styles";

export const meta = () => {
    return [{ title: "Enhnace Printing | Northern Colorado's One-Stop-Shop" }];
  };
  
  export default function AboutPage() {
    return (
      <main>
        <div className={`BarBlue TopBarThird`} >
          <h1 className="knockout">about us</h1>
        </div>
        <div className="textArea">
          <p>Testing the <em>fonts</em> on this site.<br/>Line Two</p>
        </div>
        <div style={{ fontFamily: "Open Sans, sans-serif", lineHeight: "1.4", backgroundColor:EnhanceBlue, backgroundImage:"../../public/background_icon_overlay.svg", padding:"30px 0", marginTop:"50px"}}>
        <div className="textArea knockout rightHandText">
        <div className="sectionHeading rightFloat whiteHeading">
          <div className="subheading_box whiteLine"><h2 className="knockout"><sub>ABOUT ENHANCE PRINTING</sub></h2></div>
          <div><h2 className="knockout">testing the fonts</h2></div>
        </div>
          <p>Testing the <em>fonts</em> on this site.<br/>Line Two</p>
        </div>
      </div>
      </main>
    );
  }
  