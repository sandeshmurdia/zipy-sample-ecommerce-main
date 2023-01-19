/* eslint-disable */

import Card from './Card'
import data2 from '../data/PopularProductsData';
import data from '../data/NewArrivedData';
import { ListItemSecondaryAction } from '@mui/material';
import React,{useState} from 'react';


function Products() {
const  {newArrivedData}=data; 
const {popularProductsData}=data2;
    return (
        <div className="container">
            <section id="popular-products">
                <h2>Popular products</h2>
                <div id="popular-items" className='grid-container'>
                    {/* cards */}
                    {popularProductsData.map( item => (
                        <Card id={item.id} name={item.name} path={item.path} text={item.text} price = {item.price}/>
                    ))}
                </div>
            </section>
            
            <section id="new-arrived">
                <h2>New arrived</h2>
                <div id="new-arrived-items" className='grid-container'>
                    {/* cards */}
                    {newArrivedData.map( item => (
                        <Card id={item.id} name={item.name} path={item.path} text={item.text} price={item.price} />
                    ))}

                </div>
            </section>
        </div>
    )
}

export default Products