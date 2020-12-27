import React from 'react';
import './cards.style.css';

export default function Cards({id, image, info, name, price}) {
    return (
        <div className="cards">
            <img className="image" src={image} alt="name"/>
            <div className="content">
                <div className="tour-mains">
                    <h4>{name}</h4>
                    <h4 className="tour-price">{price}$</h4>
                </div>
            </div>
        </div>
    )
}
