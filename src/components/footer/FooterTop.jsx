import { ReactComponent as FooterFacebookSvg} from '../../images/footer-facebook.svg'
import { ReactComponent as FooterTwitterSvg} from '../../images/footer-twitter.svg'
import { ReactComponent as FooterInstagramSvg} from '../../images/footer-instagram.svg'
import { ReactComponent as FooterYoutubeSvg} from '../../images/footer-youtube.svg'

function FooterTop() {
    return (
            <div id="footer-top">
                <div id="footer-brands" className='footer-top-items'>
                    <h4>Brands</h4>
                    <span>Adidas</span>
                    <span>Puma</span>
                    <span>Reebok</span>
                    <span>Nike</span>
                </div>
                <div id="footer-company" className='footer-top-items'>
                    <h4>Company</h4>
                    <span>About Us</span>
                    <span>Find a Store</span>
                    <span>Rules and Terms</span>
                    <span>Sitemap</span>
                    <span>Career</span>
                </div>
                <div id="footer-help" className='footer-top-items'>
                    <h4>Help</h4>
                    <span>Contact Us</span>
                    <span>Money Refund</span>
                    <span>Order Status</span>
                    <span>Shipping Info</span>
                    <span>Open Dispute</span>
                </div>
                <div id="footer-account" className='footer-top-items'>
                    <h4>Account</h4>
                    <span>Login</span>
                    <span>Register</span>
                    <span>Account Setting</span>
                    <span>My Orders</span>
                </div>
                <div id="footer-social" className='footer-top-items'>
                    <h4>Social</h4>
                    <span><FooterFacebookSvg className='footer-social-logos'/> Facebook</span>
                    <span><FooterTwitterSvg className='footer-social-logos'/> Twitter</span>
                    <span><FooterInstagramSvg className='footer-social-logos'/> Instagram</span>
                    <span><FooterYoutubeSvg className='footer-social-logos'/> Youtube</span>
                </div>
                <div className='footer-top-items'>
                </div>
                
            </div>
    )
}

export default FooterTop