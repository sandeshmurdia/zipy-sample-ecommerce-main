import { useState } from 'react';
import Modal from './Modal';
import { ReactComponent as StarFilledSvg } from '../images/star-filled.svg';
import { ReactComponent as StarEmptySvg } from '../images/star-empty.svg';
import { throwerror } from '../API/api';
import { randomerror } from '../API/randomerror';
import { randomfrontenderror } from '../API/randomfrontenderror';

function Card(props) {

    const starStyles = {
        height: 23,
        width: 16

    }
    
    const [ showModal,setShowModal ] = useState(false)
    
    const openModal = () => {
        randomerror();
            setShowModal( prev => !prev)
    }

    return (
        <div className="card" >
            <Modal id={props.id} path={props.path} text={props.text} price={props.price} showModal={showModal} setShowModal={setShowModal}  />
            <div className="card-image" onClick={openModal}>
                <img src={props.path} id={props.name} alt='products'/>
            </div>
            <div className="card-info" onClick={openModal}>
                <p>{props.text}</p>
                <div>
                    <span className='rating-star'>
                        <StarFilledSvg style={starStyles}/>
                        <StarFilledSvg style={starStyles}/>
                        <StarFilledSvg style={starStyles}/>
                        <StarFilledSvg style={starStyles}/>
                        <StarEmptySvg style={starStyles}/>
                    </span>
                    <span className='rating-number'>34</span>
                </div>
                <div className='price'>${props.price}</div>
            </div>
        </div>

    )
}

export default Card