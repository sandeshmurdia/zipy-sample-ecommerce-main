import ModalRatingSection from './ModalRatingSection';
import ModalPriceSection from './ModalPriceSection';
import ModalDescriptionSection from './ModalDescriptionSection';
import ModalTableSection from './ModalTableSection';
import ModalProductSection from './ModalProductSection';
import ModalButtonSection from './ModalButtonSection';
import ModalImage from './ModalImage';
import { ReactComponent as ModalCrossSvg } from '../../images/modal-cross.svg';

function ModalContent(props) {

    
    return (
        <div className="modal-content-section">
            <div id='modal-cross' onClick={() => props.setShowModal( prev => !prev)}>
                <ModalCrossSvg/>
            </div>
            {props.showImage && <ModalImage/>}
            

            <div className="modal-container">

                <h1>{props.text}</h1>
                
                <ModalRatingSection/>
                <ModalPriceSection price={props.price}/>
                <ModalDescriptionSection/>
                <ModalTableSection/>
                {/* {props.showImage && <ModalImage/>} */}
                <ModalProductSection/>
                <ModalButtonSection id={props.id} text={props.text} price={props.price} path={props.path} />
            </div>
        </div>
    )
}

export default ModalContent