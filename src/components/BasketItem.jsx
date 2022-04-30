import React from 'react';

const BasketItem = (props) => {
    const { id, name, price, quantity, removeFromCart= Function.prototype } = props;
    return (
        <li className="collection-item">
            {name} x{quantity}={price}
            <span className="secondary-content">
                <i
                    className="material-icons basket-delete"
                    onClick={() => removeFromCart(id)}
                >
                    close
                </i>
            </span>
        </li>
    );
};

export default BasketItem;
