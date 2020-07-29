import React from 'react';

import './ShopItem.scss';

const ShopItem = props => (
    <div className="shop-item">
        <div
            className="shop-item-image"
            style={{backgroundImage: `url(${props.imageUrl})` }}

        ></div>
        <div className="shop-item-detail">
            <p className="shop-item-name">
                {props.name}
            </p>
            <p className="shop-item-price">
                {props.price}
            </p>
        </div>
    </div>
);

export default ShopItem;