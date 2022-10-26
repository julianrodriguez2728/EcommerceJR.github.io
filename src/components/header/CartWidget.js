import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Cart from '../cart/Cart';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartWidget(){
    const {totalUnidades} = useContext(CartContext);
    return(
        <>
    <span><FontAwesomeIcon icon={faCartShopping} /></span>
    <span>{totalUnidades()}</span>
        
        </>
    )
}

export default CartWidget;