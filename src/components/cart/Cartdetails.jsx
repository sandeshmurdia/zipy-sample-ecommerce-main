import { useState } from 'react';
import { ReactComponent as  PlusSvg } from '../../images/modal-plus.svg';
import { ReactComponent as  MinusSvg } from '../../images/modal-minus.svg';
import React from 'react';
import { randomerror } from '../../API/randomerror';
import { randomfrontenderror } from "../../API/randomfrontenderror";

const Cartdetails = (props)=>
{ const [ quantity, setQuantity] = useState(1)
    
 

    const changeQuantity = (sign) => {
        randomerror();
        console.error('Failed to add Product')
            if( sign==='plus') {
                try{
                    randomfrontenderror();  
                    
                    
                } catch(error) {
                    console.error("Issue with incremeting the product count")
                }
                setQuantity( prev => prev<10 ? prev+1 : prev )
            }else if(sign==='minus') {
            
                setQuantity( prev => prev>1 ? prev-1 : prev )
            }
            
        } 
    return (
         <>
<div className="items-info">
        <div className="product-img">
          <img src={props.path} alt="iamge" />
        </div>
        <div className="title">
          <h2>{props.text}</h2>
          <p>Your Item</p>
        </div>
        <div className="add-minus-quantity">
                    <span className='button-hover pointer' onClick={() => changeQuantity('minus')} ><MinusSvg/></span>
                    <span>{quantity}</span>
                    <span className='button-hover pointer' onClick={() => changeQuantity('plus')} ><PlusSvg/></span>
                </div>
        <div className="price">
          <h3>{props.price}₹</h3>
        </div>
        
      </div>
      <hr />
         </>
     ); 
};
export default Cartdetails;
