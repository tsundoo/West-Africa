import React from 'react';
import './Event.css';
import { images } from '../../constants';

const Event = () => {
    return (
        <div className='app__event section__padding' id='events'>
            <div className='app__event-title'>
                
                <h2 className='headtext__cormorant heading__event'>
                    Chaque bouchée raconte une histoire, chaque sourire en témoigne.
                </h2>
            </div>

            <div className='app__event-images'>
                <img id='img1' className='event_img' src={images.person1} alt="person" />
                <img id='img2' className='event_img' src={images.person2} alt="person" />
                <img id='img3' className='event_img' src={images.person3} alt="person" />
                <img id='img4' className='event_img' src={images.person4} alt="person" />
                <img id='img5' className='event_img' src={images.new1} alt="person" />
                <img id='img6' className='event_img' src={images.new2} alt="person" />
            </div>

            <div className='app__event-content'>
                <p className='p__opensans'>
                    Les épices de l’Afrique, les rires de nos clients, WEST AFRICA, un festin pour tous les sens.
                </p>
            </div>

        </div>
    )
}

export default Event;