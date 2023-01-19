import { ReactComponent as AppStoreSvg} from '../images/appstore.svg'
import { ReactComponent as GooglePlaySvg} from '../images/googleplay.svg'
 
function AppStore() {
    return (
        <div className="container">
            <section id="app">
                <h2>Download app demo text</h2>
                <div id="store-logos">
                    <span>
                        <AppStoreSvg/>
                    </span>
                    <span>
                        <GooglePlaySvg/>
                    </span>
                </div>
            </section>
        </div>
    )
}

export default AppStore