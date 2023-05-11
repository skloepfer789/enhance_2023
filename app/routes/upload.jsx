export const meta = () => {
    return [{ title: "Enhnace Printing | Northern Colorado's One-Stop-Shop" }];
  };
  
  export default function UploadPage() {
    return (
      <main>
        <div className={`BarBlue TopBarThird`} >
          <h1 className="knockout">upload a file</h1>
        </div>
        <div className="textArea">
          <p>Upload your file through the form below. Once received we can get started on making your vision come true!<br/><br/>
          Please make sure to include your contact information, as well as the quantity and paper specifications you'd like, either in the description or in an email to: <a className="inlineLink" href='mailto:orders@enhanceprinting.com'>orders@enhanceprinting.com</a></p>
        </div>
        <iframe className="frame" src="https://spaces.hightail.com/uplink/EnhancePrintingDropBox" title="Enhance Printing Upload" />
        <div className="textArea">
          <p>If you’re having problems viewing the frame above, click  
          <a target="_blank" rel='noreferrer' className="inlineLink" href='https://spaces.hightail.com/uplink/EnhancePrintingDropBox'> HERE </a> 
          to be directed directly to our upload service!</p>
        </div>
      </main>
    );
  }
  