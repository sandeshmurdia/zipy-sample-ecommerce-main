import ModalImage from './modal/ModalImage';
import ModalContent from './modal/ModalContent';
import { useEffect  } from 'react';


function Modal(props) {

    const width = window.innerWidth
    let showImage = false
    showImage = width<275 ? true : false

    useEffect(() => {

        if(props.showModal) {
        }
    }, [props.showModal])
   

 
    // checking innerWidth if it is for mobile device then we will not show 
    if( props.showModal===true && showImage===false) {
        return (
            <div id="modal-background">
                <div id="modal">
                    <ModalImage  path={props.path}  />
                    <ModalContent text={props.text} price={props.price} path={props.path} id={props.id} setShowModal={props.setShowModal} />
                </div>
            </div>
        )
    }
    else if(props.showModal===true && showImage===true) {
        return (
            <div id="modal-background">
                <div id="modal">
                <ModalContent text={props.text} price={props.price} path={props.path} id={props.id} setShowModal={props.setShowModal} />
                </div>
            </div>
        )
    }
    else {
        return null
    }
}

export default Modal