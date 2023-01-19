import React from "react";

export default React.createContext({
  data: [ {
    id   :  1,
    name : 'new-watch',
    path : require('../images/new-watch.png'),
    text : 'Apple smartwatch black',
    price: 349.95,
    cart: false

},
{
    id   :  2,
    name : 'new-sofa',
    path : require('../images/new-sofa.png'),
    text : 'Amazing sofa for hall',
    price: 149.95,
    cart: false

},
{
    id   :  3,
    name : 'new-wallet',
    path : require('../images/new-wallet.png'),
    text : 'Leather wallet brown lacoste',
    price: 99.95,
    cart: false

},
{
    id   :  4,
    name : 'new-headphone',
    path : require('../images/new-headphone.png'),
    text : 'Bose Headphones 700',
    price: 399.95,
    cart: false
}],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
