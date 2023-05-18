export const meta = () => {
    return [{ title: "Enhnace Printing | Northern Colorado's One-Stop-Shop" }];
  };
  
  export default function DesignPage() {
    return (
      <main>
        <div className={`BarBlue TopBarThird`} >
          <img className='topBarLogo' src='/images/SVG/enhance_fullLogo.svg' alt='Enhance Printing' />
          <h1 className="knockout">graphic design & branding</h1>
        </div>
        <div className="textArea">
          <p>Testing the <em>fonts</em> on this site.<br/>Line Two</p>
        </div>
      </main>
    );
  }
  