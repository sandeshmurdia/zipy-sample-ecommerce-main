import { ReactComponent as ShoppingCartSvg } from '../images/shopping-cart.svg';

function TopHeader() {
    return(
        <div id="top-header">
            <div className="top-container">
                <div id="header-main-left">
                    <div className="logo">
                        <ShoppingCartSvg/>
                    </div>
                    <div className="title">
                        <div className="secondary-color">Zipy Demo</div>
                        <div className="primary-color text-bold">Ecommerce</div>
                    </div>
                </div>
                <div>
                    <button>Replay Session</button>
                </div>
            </div>
        </div>
    )
}

export default TopHeader