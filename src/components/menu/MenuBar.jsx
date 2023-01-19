import { ReactComponent as UserSvg } from '../../images/user.svg';
import { ReactComponent as ModalCrossSvg } from '../../images/modal-cross.svg';


function MenuBar(props) {
    return (
        <div className="container">
            <div id="menu-bar">
                <div id='modal-cross' onClick={props.onclose}>
                    <ModalCrossSvg/>
                </div>
                <div>
                    <div className='secondary-color' id='sign-in'>Sign In / Join</div>
                    <div className='badge'><UserSvg/></div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar