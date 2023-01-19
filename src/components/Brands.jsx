import { useEffect } from 'react';
import { ReactComponent as BrandLogitechSvg} from '../images/brand-logitech.svg';
import { ReactComponent as BrandPhilipsSvg} from '../images/brand-philips.svg';
import { ReactComponent as BrandLinkedinSvg} from '../images/brand-linkedin.svg';
import { ReactComponent as BrandAmazonSvg} from '../images/brand-amazon.svg';
import { ReactComponent as BrandFacebookchSvg} from '../images/brand-facebook.svg';
import { ReactComponent as BrandGoogleSvg} from '../images/brand-google.svg';

function Brands() {

    function logosAnimation() {

        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");
      
        root.style.setProperty("--marquee-elements", marqueeContent.children.length);
      
        for(let i=0; i<marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    }

    useEffect( () => {
        logosAnimation()
    },[])

    return (
        <div className="container">
            <section id="brands">
                <h2>Our brands</h2>
                <div className="marquee zipy-block">
                    <ul className="marquee-content" >
                        <li><BrandLogitechSvg/></li>
                        <li><BrandPhilipsSvg/></li>
                        <li><BrandLinkedinSvg/></li>
                        <li><BrandAmazonSvg/></li>
                        <li><BrandFacebookchSvg/></li>
                        <li><BrandGoogleSvg/></li>
                    </ul>
                </div>
                
            </section>
        </div>
    )
}

export default Brands