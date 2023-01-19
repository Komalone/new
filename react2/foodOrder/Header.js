import style from './Header.module.css';
import React, { Fragment } from 'react';
import image from '../../attacments/imgf.jpg';
import HeadCartButton from './HeadCartButton';

const Header = props =>{
    return (
        <Fragment>
            <header className={style.header}>
                <h1>Meal</h1>
                <HeadCartButton onClick={props.onShowCart}/>
            </header>
            <div className={style['main-image']}>
                <img src={image} alt="Tablefull meal"/>
            </div>
        </Fragment>
    );
}

export default Header;