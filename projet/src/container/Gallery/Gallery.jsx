import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images} from '../../constants';
import './Gallery.css';

const galleryImages = [ images.food1, images.food2, images.food3, images.food4, images.im5, images.im2 ];

const Gallery = () => { 

  const scrollRef = React.useRef(null);

  return (
    <div className='app__gallery flex__center' id='gallery'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>Pour voir plus de photos, cliquez sur le bouton ci-dessous</p>
        <a href="https://www.instagram.com/westafriica/">
        <button type='button' className='custom__button'>Follow Instagram</button>
        </a>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <a href='https://www.instagram.com/westafriica/'>
                <img src={image} alt="gallery" />
              </a>
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Gallery;
