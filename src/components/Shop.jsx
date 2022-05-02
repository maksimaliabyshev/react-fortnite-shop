import React, { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import Alert from './Alert';
import CartList from './CartList';
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';
import { ShopContext } from '../context';

const Shop = () => {
    const { setGoods, loading, order, isCartShow, alertName } =
        useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.shop);
            })
            .catch((err) => {
                console.error(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList />}
            {isCartShow && <CartList />}
            {alertName && <Alert />}
        </main>
    );
};

export default Shop;
