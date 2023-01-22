import React  from "react";
import Cartcard from "./Cartcard";
import { randomerror } from "../../API/randomerror";
import { randomfrontenderror } from "../../API/randomfrontenderror";

const Cart = ()=>


{
    randomerror();
   
     return (
         <>
         <Cartcard/>
         </>
     );
};
export default Cart;
