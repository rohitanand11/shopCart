import React from 'react';
import Classes from './Header.module.scss';

const Header = () => {
    return(
        <div className={Classes.Header}>
            <span className={Classes.BrandName}>
                Shop Cart
            </span>
        </div>
    );
}

export default Header;