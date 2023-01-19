import { ReactComponent as ShoppingCartSvg } from '../../images/shopping-cart.svg';



function MobileHeaderSecond() {
    return ( 
        <div id="mobile-header-second">
            <div id='app-logo'>
                <div><ShoppingCartSvg/></div>
                <div className="title">
                    <div className="secondary-color">Zipy Demo</div>
                    <div className="primary-color text-bold">Ecommerce</div>
                </div>
            </div>
        </div>  
    )
}

export default MobileHeaderSecond