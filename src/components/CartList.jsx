import { useContext } from 'react';
import { ShopContext } from '../context';
import CartItem from './CartItem';

const CartList = () => {
    const { order = [], handleCartShow } = useContext(ShopContext);

    const totalPrice = order.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    return (
        <ul className="collection cart-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => <CartItem key={item.id} {...item} />)
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active">
                Общая стоимость: {totalPrice}
            </li>
            <li className="collection-item">
                <button className="blue btn-small">Оформить</button>
            </li>
            <i className="material-icons cart-close" onClick={handleCartShow}>
                close
            </i>
        </ul>
    );
};

export default CartList;
