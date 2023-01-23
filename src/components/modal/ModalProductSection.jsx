import { useState } from 'react';
import { ReactComponent as  PlusSvg } from '../../images/modal-plus.svg';
import { ReactComponent as  MinusSvg } from '../../images/modal-minus.svg';
import React from 'react';

 var count=1;

function ModalProductSection() {

    const [ quantity, setQuantity] = useState(1)
    
    const [checked,setChecked] = useState('size-9')

    const changeQuantity = (sign) => {

        console.error('Failed to add Product')
            if( sign==='plus') {
                try{
                    
                    
                    
                } catch(error) {
                    console.error("Issue with incremeting the product count")
                }
                setQuantity( prev => prev<100 ? prev+1 : prev )
            }else if(sign==='minus') {
                count--;
                setQuantity( prev => prev>1 ? prev-1 : prev )
            }
        } 

    return (
        
        <div id='modal-product-section'>
            <div id='quantity-section'>
                <div>Quantity</div>
                <div id='quantity'>
                    <span className='button-hover pointer' onClick={() => changeQuantity('minus')} ><MinusSvg/></span>
                    <span>{quantity}</span>
                    <span className='button-hover pointer' onClick={() => changeQuantity('plus')} ><PlusSvg/></span>
                </div>
            </div>
            <div id='size-section'>
                <div>Select Size</div>
                <div>
                    <input className='radio-input' type="radio" name="size" id="size-9" value={'size-9'} onChange = { (e) => setChecked(e.target.value)} checked={checked==='size-9'}/>
                    <label htmlFor="size-9" >UK 9</label>
                    <input className='radio-input' type="radio" name="size" id="size-10" value={'size-10'} onChange = { (e) => setChecked(e.target.value)} checked={checked==='size-10'}/>
                    <label htmlFor="size-10">UK 10</label>
                    <input className='radio-input' type="radio" name="size" id="size-11" value={'size-11'} onChange = { (e) => setChecked(e.target.value)} checked={checked==='size-11'}/>
                    <label htmlFor="size-11">UK 11</label>
                </div>
            </div>
         </div>
    )
  }
export default ModalProductSection

