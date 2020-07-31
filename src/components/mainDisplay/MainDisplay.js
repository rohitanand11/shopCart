import React from 'react';
import Card from '../card/Card'; 

import Classes from './MainDisplay.module.scss';

const MainDisplay =(props)=> {
    
    const DisplayCards = () => {
        if(props.data)
            return props.data.map((elem,index)=><Card key= {elem.id} product={elem}/>);
        else
            return null;
    }

    return(
        <div className={Classes.MainDisplay}>
            {DisplayCards()}
        </div>
    );
}

export default MainDisplay;