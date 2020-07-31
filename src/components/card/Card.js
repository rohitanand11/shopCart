import React from 'react';

import Classes from './Card.module.scss';

const Card = (props) => {

    return(
        <div className={Classes.Card}>
            <div className={Classes.Card_image_container}>
                <img className={Classes.Card_image} src={props.product.image} alt="product"/>
            </div>
            <div className={Classes.Description}>
                <ul className={Classes.list}>
                    <li>hey : jjsjjsjs</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;