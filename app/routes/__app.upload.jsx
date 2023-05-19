export const meta = () => {
  return [
    {title: "Upload Files - Enhance Printing"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Enhance Printing, All rights reserved."},
    {name: "description", content: "Upload your files here and we can start making your vision come true!"},    
   {name: "og:title", content: "Upload files to Enhance Printing"},
   {name: "og:description", content: "Upload your files here and we can start making your vision come true!"},
   {name: "og:image", content: "/favicon.ico"},
  ];
};
  
  export default function UploadPage() {
    return (
      <main>
        <div className={`BarBlue TopBarThird`} >
          <img className='topBarLogo' src='/images/SVG/enhance_fullLogo.svg' alt='Enhance Printing' />
          <h1 className="knockout">upload a file</h1>
        </div>
        <div className="textArea">
          <p>Upload your file through the form below. Once received we can get started on making your vision come true!<br/><br/>
          Please make sure to include your contact information, as well as the quantity and paper specifications you'd like, either in the description or in an email to: <a className="inlineLink" href='mailto:orders@enhanceprinting.com'>orders@enhanceprinting.com</a></p>
        </div>
        <iframe className="frame" src="https://spaces.hightail.com/uplink/EnhancePrintingDropBox" title="Enhance Printing Upload" />
        <div className="textArea">
          <p>If you’re having problems viewing the frame above, click  
          <a target="_blank" rel='noreferrer' className="inlineLink" href='https://spaces.hightail.com/uplink/EnhancePrintingDropBox' aria-label="Hightail Upload Link"> HERE </a> 
          to be directed directly to our upload service!</p>
        </div>
      </main>

    );
  }
  