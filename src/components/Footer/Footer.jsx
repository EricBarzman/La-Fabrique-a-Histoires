import './Footer.scss';
import { Link } from 'react-router-dom';
import { MenuMenu, MenuItem, Menu } from 'semantic-ui-react';

function Footer() {
  return (
    <Menu secondary className="footer">
      <div className="footer__center">
        <MenuMenu position="left">
          <MenuItem
            name="Copyright 2024 La Fabrique à Histoires"
            className="white copyright"
          />
        </MenuMenu>
        <MenuMenu position="right">
          <Link to="/politique-confidentialite">
            <MenuItem name="Politique de confidentialité" className="link" />
          </Link>
          <Link to="/contact">
            <MenuItem name="Contact" className="link" />
          </Link>
        </MenuMenu>
      </div>
    </Menu>
  );
}

export default Footer;
