import React from 'react';
import './Menu.css';
import { SubHeading, Card } from '../../components';
// import { images } from '../../constants';

const Menu = () => {
    return (
        <div className='app__menu section__padding' id='menu'>
            <div className='app__menu-title'>
                <SubHeading title="Menu" />
                <h2 className='headtext__cormorant'>Les plats de notre restaurant</h2>
            </div>
            <Card />
        </div>
    )
}

export default Menu;