export const meta = () => {
  return [
    {title: "Contact Us - Enhance Printing"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Enhance Printing, All rights reserved."},
    {name: "description", content: "We're here to help with all your printing, design, and branding projects. Please contact us and we can discuss your next project."},    
   {name: "og:title", content: "Contact Enhance Printing"},
   {name: "og:description", content: "We're here to help with all your printing, design, and branding projects. Please contact us and we can discuss your next project."},
   {name: "og:image", content: "/favicon.ico"},
  ];
};
  
export default function ContactPage() {
  return (
    <main>
      <div className={`BarBlue TopBarThird`} >
        <h1 className="knockout">contact us</h1>
      </div>
      <div>
      <iframe title="Enhance Printing Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.8532328847373!2d-105.04560118460087!3d40.522734979353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694ce88e229323%3A0xb76871c0141874b3!2sEnhance%20Printing!5e0!3m2!1sen!2sus!4v1684166871592!5m2!1sen!2sus" style={ {border: 0, width: '100vw', height: '550px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </main>
  );
}
  