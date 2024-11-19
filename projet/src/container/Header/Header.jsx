import React from 'react';
import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => {
    return (
        <div className='app__header section__padding' id='home'>
            <div className='app__wrapper_info'>
                <SubHeading title="Bienvenue" />
                <h1 className='app__header-h1 headtext__cormorant'> Au coeur de l'Afrique de l'Ouest</h1>
                <p className='p__opensans'>
                    À Dijon Situé au 64 Rue d’Auxonne, notre restaurant, fondé par deux jeunes passionnés du quartier, vous invite à découvrir une cuisine authentique, riche en saveurs et en convivialité. Ici, chaque plat est une ode à la chaleur et à la générosité de l'Afrique de l'Ouest.<br />
                    Dans une ambiance familiale et accueillante, nous partageons avec vous les délices de notre culture culinaire. Venez vivre un moment de partage et de découverte, où la bonne humeur et le plaisir de la table sont au rendez-vous.
                </p>
            </div>
            <div className='app__wrapper_img'>
                <img src={images.plat} alt="food" className='app__header-img'/>
            </div>
        </div>
    )
}

export default Header;