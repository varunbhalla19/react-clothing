import React from 'react';

import './ShopCollection.scss';

import ShopItem from '../ShopItem/ShopItem';

const ShopCollection = props => (
    <div className="shop-collection">
        <h2 className="shop-collection-title" > {props.title} </h2>
        <div className="shop-collection-preview">
            {props.items.map(({ id, ...otherProps }) => <ShopItem key={id} {...otherProps} />)}
        </div>
    </div>
);

export default ShopCollection;