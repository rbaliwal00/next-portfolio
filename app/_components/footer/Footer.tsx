import Image from 'next/image';
import React from 'react';
import Instagram from '../../icons/Logos/instagram-fill.svg';
import LinkedIn from '../../icons/Logos/linkedin-fill.svg';
import Github from '../../icons/Logos/github-fill.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__find-me'>find me in:</div>
            <div className="footer__item"><Image src={LinkedIn} alt="github" width={20} height={20} /></div>
            <div className="footer__item footer__instagram"><Image src={Instagram} alt="instagram" width={20} height={20}/></div>
            <div></div>
            <div className="footer__item">@rbaliwal00<Image src={Github} alt="github" width={20} height={20} /></div>
        </div>
    );
};

export default Footer;