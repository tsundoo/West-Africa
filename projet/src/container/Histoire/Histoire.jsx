import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Histoire.css';

const Histoire = () => {
    return (
        <div className='app__histoire section__padding' id='about'>
            <div className='app__histoire-title'>
                <SubHeading title="Histoire" />
                <h1 className='headtext__cormorant' id='title'>Notre Histoire</h1>
            </div>

            <div className='app__histoire-content'>
                <img src={images.chef} alt="chef" className='app__histoire-img'/>
                <p className='p__opensans'>
                Chers amis, derrière chaque plat que vous dégustez chez WEST AFRICA, il y a l’histoire de deux jeunes passionnés de Dijon : Ibrahim et Jean-Brice. Ils ont voulu partager avec vous les saveurs authentiques et riches de l’Afrique de l’Ouest, qu’ils affectionnent tant. En créant ce lieu chaleureux, ils avaient en tête de vous offrir bien plus qu’un simple repas, mais une véritable expérience culinaire. Chaque bouchée est préparée avec soin pour vous faire voyager, et c’est un plaisir pour eux de vous accueillir jour après jour. Alors, installez-vous et laissez-vous guider par leurs passions et découvertes.
                </p>
            </div>
        </div>
    )
}

export default Histoire;