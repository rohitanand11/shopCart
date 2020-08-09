import React from 'react';

import Classes from './Card.module.scss';

const Card = ({product}) => {

    return (
        <div className={Classes.Card}>
            <div className={Classes.Card_image_container}>
                <img className={Classes.Card_image} src={product.image} alt="product" />
            </div>
            <div className={Classes.Description}>

                <strong>Price - Rs {product.price}</strong>
                <div style ={{marginTop:"15px",width:"80%"}}>
                    {product.description}
                </div>
                {product['avlble']===0 ? <p>Not Available</p>: <p>Available</p>}

            </div>
        </div>
    );
}

export default Card;