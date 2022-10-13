import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

function CartWidget(){
    return(
        <>
    <span><FontAwesomeIcon icon={faCartShopping} /></span>
    <span>2</span>
        
        </>
    )
}

export default CartWidget;