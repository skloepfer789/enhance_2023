import ServiceLoop from '../components/servicesLooping';

export default function ServiceLanding() {
  return (
      <div className={`BarBlue TopBarThird`} >
        <img className='topBarLogo' src='/images/SVG/enhance_fullLogo.svg' alt='Enhance Printing' />
        <div className='looperBox'>
          <ServiceLoop className='loop' />
        </div>
      </div>
  );
}