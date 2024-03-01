/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */ // pour <label className="menu__btn" htmlFor="menu__toggle">
import './Header.scss';
import { MenuMenu, MenuItem, Menu, Icon } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetLoginForm, handleLogout } from '../../store/userSlice';
import Connexion from '../Modales/Connexion/Connexion';
import Inscription from '../Modales/Inscription/Inscription';
import Aide from '../Modales/Aide/Aide';
import logo from '/assets/elements/logo-horizontal-transparent_250px.png'
import BurgerMenu from './BurgerMenu';

function Header() {
  const [helpOpen, setHelpOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Téléphone

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.user.logged);

  const handleLogoutClick = () => {
    dispatch(handleLogout()); // Utilisez la fonction importée depuis userSlice
    dispatch(resetLoginForm()); // Réinitialiser les informations de connexion, la fonction importée depuis userSlice
    navigate('/'); // Naviguer vers la page d'accueil après la déconnexion
    navigate(0); // rafraichir la page
  };

  const toggleHelp = () => {
    setHelpOpen(!helpOpen);
  };

  // Active le mode responsive mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Met à jour l'état isMobile en fonction de la largeur de l'écran
    };
    // Ajoute un écouteur d'événements pour redimensionner la fenêtre
    window.addEventListener('resize', handleResize); 

    // Nettoyage de l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Menu stackable className="menu" id="menu">

      <MenuMenu className="logo">
        <MenuItem>
          <Link to="/">
            <img src={logo} className="header-logo" alt="Logo" />
          </Link>
        </MenuItem>
      </MenuMenu>

      <MenuMenu >  
        {isLogged && (
            <MenuItem name="MesHistoiresDesktop" className="link">
              <Link to="/mes_histoires">
                <img className='header__mes-histoires-icon' src="/assets/elements/favicon-ss-bg.ico" alt="mes-histoires-icon" />
              </Link>
            </MenuItem>
        )}
        
        {!isMobile && (
          <Menu.Item onClick={toggleHelp}>
            <Aide />
          </Menu.Item>
        )}

      </MenuMenu>

      {isLogged ? (
        <MenuMenu position="right" >
          <MenuItem
            name="Déconnexion"
            className="btn btn_cream"
            onClick={handleLogoutClick}
          />
          <MenuItem name="Profil" className="link">
            <Link to="/profil">
              <Icon
                name="user circle"
                color="white"
                alt="user circle icone"
                size="big"
              />
            </Link>
          </MenuItem>
        </MenuMenu>
      ) : (
        <MenuMenu position="right" >
          <MenuItem name="Connexion" className="btn btn_cream">
            <Connexion />
          </MenuItem>
          <MenuItem name="Inscription" className="btn btn_cream">
            <Inscription />
          </MenuItem>
        </MenuMenu>
      )}

    </Menu>
  );
}

export default Header;
