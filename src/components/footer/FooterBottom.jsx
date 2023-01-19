import { ReactComponent as FooterAmericanExpressSvg} from '../../images/footer-americanexpress.svg'
import { ReactComponent as FooterMasterCardSvg} from '../../images/footer-mastercard.svg'
import { ReactComponent as FooterPaypalSvg} from '../../images/footer-paypal.svg'
import { ReactComponent as FooterVisaSvg} from '../../images/footer-visa.svg'

function FooterBottom() {
    return (
    <div id="footer-bottom">
        <div className='footer-text'>&copy; Zipy Demo. All rights reserved.</div>
        <div className='footer-text'>hello@zipy.ai</div>
        <div className='footer-text'>456 Hagenes Gardens Suite 808</div>
        <div>
            <span><FooterAmericanExpressSvg/></span>
            <span><FooterMasterCardSvg/></span>
            <span><FooterPaypalSvg/></span>
            <span><FooterVisaSvg/></span>
        </div>
    </div>
    )
}

export default FooterBottom