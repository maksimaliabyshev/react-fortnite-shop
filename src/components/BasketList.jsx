import React from 'react';
import BasketItem from './BasketItem';

const BasketList = (props) => {
    const {
        order = [],
        handleCartShow = Function.prototype,
        removeFromCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        {...item}
                        removeFromCart={removeFromCart}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                ))
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active">
                Общая стоимость: {totalPrice}
            </li>
            <li className="collection-item">
                <button className="blue btn-small">Оформить</button>
            </li>
            <i className="material-icons basket-close" onClick={handleCartShow}>
                close
            </i>
        </ul>
    );
};

export default BasketList;
