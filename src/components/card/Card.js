import React from 'react';

import Classes from './Card.module.scss';

const Card = (props) => {

    return (
        <div className={Classes.Card}>
            <div className={Classes.Card_image_container}>
                <img className={Classes.Card_image} src={props.product.image} alt="product" />
            </div>
            <div className={Classes.Description}>

                <strong>Price - Rs {props.product.price}</strong>
                <div style ={{marginTop:"15px",width:"80%"}}>
                    {props.product.description}
                </div>

            </div>
        </div>
    );
}

export default Card;