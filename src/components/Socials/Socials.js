import React from 'react';
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import classes from './Socials.module.css';

const Socials = props => {

    return (
        <div className={classes['socialContainer']}>
            <a href='/' className={classes.facebookSocial}>
                <FontAwesomeIcon icon={faFacebook} size='2x' />
            </a>Facebook
            <a href='/' className={classes.instagramSocial}>
                <FontAwesomeIcon icon={faInstagram} size='2x' />
            </a>Instagram
            <a href='/' className={classes.youtubeSocial}>
                <FontAwesomeIcon icon={faYoutube} size='2x' />
            </a>Youtube
        </div>
    );
};

export default Socials;