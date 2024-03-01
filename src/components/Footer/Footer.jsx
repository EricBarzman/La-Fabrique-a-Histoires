import './Footer.scss';
import { Link } from 'react-router-dom';
import { MenuMenu, MenuItem, Menu } from 'semantic-ui-react';

function Footer() {
  return (
      <div className="footer">
        <div className="footer__copyright">
          Copyright 2024 La Fabrique à Histoires
        </div>
        <div className="footer__links">
          <Link className='footer__links-element' to="/politique-confidentialite">Politique de confidentialité</Link> 
          <Link className='footer__links-element' to="/contact">Contact</Link>
        </div>      
      </div>
  );
}

export default Footer;
