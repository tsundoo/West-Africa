import React from 'react';
import './footer.css';
import { images } from '../../constants';
import { FiInstagram } from 'react-icons/fi';


const Footer = () => {
    return (
            <div className='app__footer section__padding' id='contact'>
                <div className='app__footer-links'>
                    <div className='app__footer-links_contact'>
                        <h1 className='app__footer-headtexts'>Contact Us</h1>
                        <a href="https://www.google.com/maps/dir//64+Rue+d'Auxonne,+21000+Dijon/@47.3138551,4.9664439,20137m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x47f29d7b9ce189f3:0xe46d28b314db2d50!2m2!1d5.0488427!2d47.3138815?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D">
                            <p className='p__opensans'>64 rue d'auxonne</p>
                        </a>
                        <p className='p__opensans'>21000 Dijon</p>
                        <a href='tel:+330952259198'>
                            <p className='p__opensans'>+33 09 52 25 91 98</p>
                        </a>
                    </div>

                    <div className='app__footer-links_logo'>
                        <img src={images.logo} alt="footer_logo" />
                        <p className='p__opensans'>"« La meilleure façon de se trouver est de se perdre au service des autres. »"</p>
                        <img src={images.spoon} alt="spoon"  className="spoon__img" style={{ marginTop: 15 }}/>
                        <div className='app__footer-links_icons'>
                            <a href='https://www.instagram.com/westafriica/'>
                                <FiInstagram />
                            </a>
                        </div>
                    </div>

                    <div className='app__footer-links_work'>
                        <h1 className='app__footer-headtexts'>Heures d'ouverture</h1>
                        <p className='p__opensans'>Lundi-Vendredi:</p>
                        <p className='p__opensans'>08:00 am - 12:00 am</p>
                        <p className='p__opensans'>Samedi-Dimanche:</p>
                        <p className='p__opensans'>07:00 am - 11:00 pm</p>
                    </div>
                </div>

                <div className='footer__copyright'>
                        <p className='p__opensans'>2024 West Africa. All Rights reserved.</p>
                </div>
            </div>
    )
}

export default Footer;