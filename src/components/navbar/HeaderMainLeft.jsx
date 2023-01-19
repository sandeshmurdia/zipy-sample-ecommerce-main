import { ReactComponent as ShoppingCartSvg } from '../../images/shopping-cart.svg';

function HeaderMainLeft() {
    return (
        <div id="header-main-left">
            <div className="logo">
                <ShoppingCartSvg/>
            </div>
            <div className="title">
                <div className="secondary-color">Zipy Demo</div>
                <div className="primary-color text-bold">Ecommerce</div>
            </div>
        </div>
    )
}

export default HeaderMainLeft