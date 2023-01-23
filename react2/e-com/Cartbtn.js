import React from "react";
import {Button} from 'react-bootstrap';

const Cartbtn=()=>{
    return(
        <Button variant='dark'>
                <a href="#cart" className="cart-holder">
                    Cart
                    <span className='cart-number'>0</span>
                </a>
       </Button>
    );
}
export default Cartbtn;
