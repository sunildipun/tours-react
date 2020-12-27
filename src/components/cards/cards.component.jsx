import React, { useState } from 'react';
import './cards.style.css';

export default function Cards({id, image, info, name, price}) {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="cards">
            <img className="image" src={image} alt="name"/>
            <div className="content">
                <div className="tour-mains">
                    <h4>{name}</h4>
                    <h4 className="tour-price">{price}$</h4>
                </div>
                <p className="tour-info">
                    {readMore ? info : `${info.substring(0,200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more'}
                    </button>
                </p>
            </div>
        </div>
    )
}
