import { ReactComponent as TwitterSvg } from '../../images/twitter.svg';
import { ReactComponent as InstagramSvg } from '../../images/instagram.svg';
import { ReactComponent as FacebookSvg } from '../../images/facebook.svg';

function TopBar() {
  return (
    <nav id="topbar">
        <div className="container" >
            <div id="social-links">
                <ul>
                    <li>
                        <a href="#"><TwitterSvg/></a>      
                    </li>
                    <li>  
                        <a href="#"><InstagramSvg/></a>
                        
                    </li>
                    <li>
                        <a href="#"><FacebookSvg/></a>
                        
                    </li>
                </ul>
            </div> 
            <div>
                <ul>
                    <li>
                        <a href="#">Delivery</a>
                    </li>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li>
                        <a href="#">USD<i className="fa-solid fa-caret-down i-tag"></i></a>
                    </li>
                    <li>
                        <a href="#">Language <i className="fa-solid fa-caret-down i-tag"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default TopBar