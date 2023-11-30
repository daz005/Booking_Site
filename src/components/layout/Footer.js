import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoWhiteImage from './assets/logo-white.png';
import pages from '../../utils/pages';

const contacts = [
  { icon: faLocationDot, info: '1225 Mammoth Lakes, CA 93546', },
  { icon: faPhone, info: '(669) 342-8379', },
  { icon: faEnvelope, info: 'TangLLC@yahoo.com', },
];

const socials = [
  { icon: faInstagram, name: 'instagram', },
  { icon: faYoutube, name: 'youtube', },
  { icon: faFacebook, name: 'facebook', },
  { icon: faTwitter, name: 'twitter', }
];

const socialLinks = {
  instagram: 'https://www.instagram.com/drago.fchz/',
  youtube: 'https://www.youtube.com/@angelik4._',
  facebook: 'https://www.facebook.com/groups/1167300000091005',
  twitter: 'https://twitter.com/machinegunkelly?lang=en'
};

// ...

<div className="site-footer-social">
  <h4>Connect with us</h4>
  {socials.map((social, index) => 
    <a 
      key={index} 
      href={socialLinks[social.name]}  // Use the custom links here
      target="_blank" 
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={social.icon} size="lg" />
    </a>
  )}
</div>


const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img 
          className="site-footer-logo" 
          src={logoWhiteImage} 
          alt="Little Lemon" 
        />
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
            {navLinks.map((navLink, index) => 
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
          {contacts.map((contact, index) => 
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          )}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => 
            <a 
              key={index} 
              href={socialLinks[social.name]}  // Use the custom links here
              target="_blank" 
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          )}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
