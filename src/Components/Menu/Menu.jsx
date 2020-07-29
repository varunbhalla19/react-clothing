import React, { Component } from "react";

import Menuitem from '../MenuItem/Menuitem';

import './Menu.scss';

class Menu extends Component {

    state = {
        sections: [
            {
                name: "Belts",
                id: 1,
                link: 'belts',
                imageURL: "https://images.unsplash.com/photo-1553704571-c32d20e6c74f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            },
            {
                name: "Shirts",
                id: 2,
                link: 'shirts',
                imageURL: 'https://images.unsplash.com/photo-1549037173-e3b717902c57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
            },
            {
                name: "Jackets",
                id: 3,
                link: 'jackets',
                imageURL: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
            },
            {
                name: "Pants",
                id: 4,
                link: 'pants',
                size: 'large',
                imageURL: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
            },
            {
                name: "Footwear",
                id: 5,
                link: 'footwear',
                size: 'large',
                imageURL: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
            },
        ]
    };

    render() {
        return (
            <div className="menu">
                {this.state.sections.map( ({id , ...otherProps }) => <Menuitem key={id} {...otherProps} />)}
            </div>
        );
    }

}

export default Menu;