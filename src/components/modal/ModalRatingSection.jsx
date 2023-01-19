import { ReactComponent as StarFilledSvg } from '../../images/star-filled.svg';
import { ReactComponent as StarEmptySvg } from '../../images/star-empty.svg';
import { ReactComponent as  CheckListSvg} from '../../images/modal-checklist.svg';

function ModalRatingSection() {

    const starStyles = {
        height: 15,
        width: 16

    }

    return (
        <div id='modal-ratings-section'>
            <span id='star-ratings'>
                <StarFilledSvg style={starStyles}/>
                <StarFilledSvg style={starStyles}/>
                <StarFilledSvg style={starStyles}/>
                <StarFilledSvg style={starStyles}/>
                <StarEmptySvg style={starStyles}/>
            </span>
            <span id='item-reviews'>132 reviews</span>
            <span id='total-orders'>
                <CheckListSvg/>
                <span>154 orders</span>
            </span>
        </div>
    )
}

export default ModalRatingSection