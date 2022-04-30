import React from 'react';

const GoodsItem = (props) => {
    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        price,
		displayAssets: assets,
		addToCart = Function.prototype
    } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={assets[0].full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>

                <p>{description}</p>
            </div>
            <div className="card-action">
				<button className="btn" onClick={() => addToCart({ id, name, price: price['finalPrice'] })}>
                    Купить
                </button>
                <span className="right" style={{fontSize: '1.8rem'}}>{price.finalPrice} руб.</span>
            </div>
        </div>
    );
};

export default GoodsItem;
