import { ReactComponent as MenuSvg } from '../../images/menu.svg';

function MobileHeaderFirst(props) {
    return (
        <div id="mobile-header-first">
            <div>
                <MenuSvg onClick={props.handleClick}/>
            </div>
        </div>
    )
}

export default MobileHeaderFirst