import { useEffect } from "react";

export default function ScrollingImage({source, altText, classType, idAdd}) {

    const maxScrollFor100 = 270;
    const id = `image${idAdd}`;
    const boxId = `photoBox${idAdd}`
    
    function scroller(){
        const imgContainer = document.getElementById(boxId);
        const docPosition = imgContainer.getBoundingClientRect().top;
        const percentRaw = Math.abs(100 - (docPosition === maxScrollFor100 ? 100 : docPosition / (maxScrollFor100 / 100)));
        const percent = Math.abs(Math.min(percentRaw, 100) -100);
        const addNumber = (percent * .12)/100 + 1;
        const image = document.getElementById(id);
        image.style.transform = `scale(${addNumber})`;
    }

    useEffect(()=>{
        scroller();
        window.addEventListener("scroll", scroller);
    });

    return(
        <div className='photoBox' id={boxId} >
            <img className={classType} src={source} alt={altText} id={id}/>
        </div>
    );
}