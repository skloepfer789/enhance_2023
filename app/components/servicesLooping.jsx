import Typewriter from 'typewriter-effect';

//https://www.npmjs.com/package/typewriter-effect

export default function ServiceLoop() {

    return(
            <h2 className="knockout typewriter"><Typewriter 
                onInit={(typewriter) => {    
                    typewriter            
                    .typeString('Your One-Stop-Shop For ')
                    .pauseFor(500)
                    .typeString('<strong>Printing</strong>')
                    .pauseFor(2500)
                    .deleteChars(8)
                    .typeString('<strong>Branding</strong>')
                    .pauseFor(2500)
                    .deleteChars(8)
                    .typeString('<strong>Wide Format</strong>')
                    .pauseFor(2500)
                    .deleteChars(11)
                    .typeString('<strong>Design</strong>')
                    .pauseFor(2500)
                    .deleteChars(6)
                    .typeString('<strong>Finishing</strong>')
                    .pauseFor(2500)
                    .deleteChars(9)
                    .typeString('<strong>Web</strong>')
                    .pauseFor(2500)
                    .start();
                }}
                options={{
                    loop: true
                }}
            /></h2>
    );
}