import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);

    const addToCart = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: Number(orderItem.quantity) + 1,
                    };
                }
                return orderItem;
            });
            setOrder(newOrder);
        }
    };
    const removeFromCart = (itemId) => {
        const newOrder = order.filter((item) => item.id !== itemId);
        setOrder(newOrder);
    };

    const handleCartShow = () => {
        setIsBasketShow(!isBasketShow);
    };
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} handleCartShow={handleCartShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToCart={addToCart} />
            )}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleCartShow={handleCartShow}
                    removeFromCart={removeFromCart}
                />
            )}
        </main>
    );
};

export default Shop;
