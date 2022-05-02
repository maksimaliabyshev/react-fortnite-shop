import { useContext } from 'react';
import { ShopContext } from '../context';

const Cart = () => {
    const { order, handleCartShow } = useContext(ShopContext);
    const quantity = order.length;
    return (
        <div className="cart blue darken-4 white-text" onClick={handleCartShow}>
            <i className="medium material-icons">shopping_cart</i>
            {quantity ? <span>{quantity}</span> : null}
        </div>
    );
};

export default Cart;
