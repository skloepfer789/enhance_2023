import { Link } from "@remix-run/react";

export const meta = () => {
    return [{ title: "Enhnace Printing | Northern Colorado's One-Stop-Shop" }];
  };
  
  export default function FAQPage() {
    return (
      <main>
        <div className={`BarBlue TopBarThird`} >
          <img className='topBarLogo' src='/images/SVG/enhance_fullLogo.svg' alt='Enhance Printing' />
          <h1 className="knockout">FAQs</h1>
        </div>
        <div className="textArea">
          <p>
          <h2>
          What File-Types Do You Accept?
          </h2>
          A print-ready, CMYK PDF will ensure the truest colors and the most accurate print, however we will accept most file types compatible with the Adobe Suite or Microsoft Office. We cannot accept Corel, Quark, or Publisher files.<br/><br/>
          <h2>
          What Resolution and Size Should I Use?
          </h2>
          Images degrade when upscaled or manipulated. We strongly encourage at least 300 pixels per inch, at dimensions as close to the final print size as possible.<br/><br/>
          <h2>
          Can You Make Changes To My File?
          </h2>
          We can edit most Adobe and Microsoft compatible 
          files. To ensure our ability to access your files, we will need all links and fonts used in your original. We can also recreate most artwork for an additional fee. See more about our graphic design and digital branding services 
          <Link to='/services/design' className="inlineLink"> HERE.</Link>
          <br/><br/>
          <h2>
          I’m Looking For Something Not Mentioned Here?
          </h2>
          We offer a wide range of print, digital art, finishing, and wide format options. Please give us a call or email, and we’d love to discuss how we can help you on any custom order.<br/><br/>
          <h2>
          If I Have You Design Something, Do I Own The File?
          </h2>
          Yes. Once the design is paid for it belongs to you.
          We can provide files in their raw format, or as JPEG, PNG, PDF, or GIF. We do not charge export fees, unless there is major work involved in the export. Until files are paid for, all proofs will be locked and not printable.<br/><br/>
          <h2>
          Do You Have My Artwork On File?
          </h2>
          If we printed the job in the past, we likely will have 
          the artwork on file. However, due to changes in technology, or (rare) glitches in the computer, some files may become lost or corrupted over the years. We strongly recommend keeping a copy of your artwork on your home or business computer. <br/><br/>
          <h2>
          Do You Match Pricing?
          </h2>
          We are known for our competitive prices and it will be hard to find a bid lower than ours, but if someone does manage to underbid us, we are always willing to price-match any local companies. We also try to match online vendors but cannot guarantee that.<br/><br/>
          <h2>
          I Have Another Question?
          </h2>
          Please feel free to reach us using either the form below, or giving us a
          <Link className="inlineLink" to="tel:970-282-1891"> CALL.</Link>
          </p>
        </div>
      </main>
    );
  }
  