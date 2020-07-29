import React, { Component } from 'react';

import './Shop.scss';

import ShopCollection from '../../Components/ShopCollection/ShopCollection';

import ShopData from '../../CollectionData';

class Shop extends Component {
    state = {
        collection: ShopData
    }

    render() {
        console.log(this.state.collection)
        return (
            <div className="shop">
                <h1> The Shop </h1>
                {this.state.collection.map(el => (
                    <ShopCollection key={el.id} items={el.items.slice(0,4)} title={el.title} />
                ))}
            </div>
        )
    }
}

export default Shop 