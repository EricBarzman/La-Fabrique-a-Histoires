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

function Header() {
  const [helpOpen, setHelpOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // État pour vérifier si c'est un écran mobile
  const [menuOpen, setMenuOpen] = useState(false); // État pour contrôler l'ouverture/fermeture du menu burger

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Utilisez useSelector pour accéder à la valeur de 'logged' depuis le store Redux
  const logged = useSelector((state) => state.user.logged);

  const handleLogoutClick = () => {
    dispatch(handleLogout()); // Utilisez la fonction importée depuis userSlice
    dispatch(resetLoginForm()); // Réinitialiser les informations de connexion, la fonction importée depuis userSlice
    navigate('/'); // Naviguer vers la page d'accueil après la déconnexion
    navigate(0); // rafraichir la page
  };

  const toggleHelp = () => {
    setHelpOpen(!helpOpen);
  };

  const handleMenuItemClick = () => {
    // Ferme le menu burger lorsque l'on clique sur un item
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Met à jour l'état isMobile en fonction de la largeur de l'écran
    };
    window.addEventListener('resize', handleResize); // Ajoute un écouteur d'événements pour le redimensionnement de la fenêtre

    // Nettoyage de l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Menu stackable className="menu" id="menu">
      <MenuMenu position="left">
        {!isMobile && (
          <MenuItem name="Accueil" className="link desktop">
            <Link to="/">
              <Icon name="home" color="white" alt="home icon" size="big" />
            </Link>
          </MenuItem>
        )}
        {logged &&
          !isMobile && ( // Vérifiez si l'utilisateur n'est pas connecté et que ce n'est pas un appareil mobile
            <MenuItem name="MesHistoiresDesktop" className="link">
              <Link to="/mes_histoires">
                <Icon name="book" color="white" alt="book icon" size="big" />
              </Link>
            </MenuItem>
          )}
        <Menu.Item onClick={toggleHelp}>
          <Aide />
        </Menu.Item>
      </MenuMenu>

      <MenuMenu className="logo">
        <MenuItem>
          <Link to="/">
            <img src={logo} className="header-logo" alt="Logo" />
          </Link>
        </MenuItem>
      </MenuMenu>

      {/* Affichez le menu burger si c'est un écran mobile */}
      {isMobile && (
        <MenuMenu position="left_mobile">
          <div id="hamburger-menu">
            <input
              id="menu__toggle"
              type="checkbox"
              hidden
              checked={menuOpen}
              onChange={() => setMenuOpen(!menuOpen)}
            />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span> </span>
            </label>
            <ul className="menu__box">
              <h2 className="title">Menu</h2>
              {!logged && ( // Affiche le bouton "Connexion" si l'utilisateur n'est pas connecté
                <li>
                  <p className="menu__item" onClick={handleMenuItemClick}>
                    <Connexion className="menu__item" id="connexion-mobile" />
                    {/* si pas dans p, le onClick ne fonctionne plus */}
                  </p>
                </li>
              )}
              <span>
                {logged ? (
                  <>
                    <MenuItem name="Profil" onClick={handleMenuItemClick}>
                      <Link to="/Profil">
                        <span>
                          <p className="menu__item">Profil</p>
                          <Icon
                            name="user circle"
                            color="grey"
                            alt="user circle icone"
                            size="large"
                          />
                        </span>
                      </Link>
                    </MenuItem>

                    <MenuItem name="MesHistoires" onClick={handleMenuItemClick}>
                      <Link to="/mes_histoires">
                        <span>
                          <p className="menu__item">Mes Histoires</p>
                          <Icon
                            name="book"
                            color="grey"
                            alt="book icone"
                            size="large"
                          />
                        </span>
                      </Link>
                    </MenuItem>

                    <MenuItem onClick={handleLogoutClick}>
                      <p className="menu__item" onClick={handleMenuItemClick}>
                        Déconnexion
                      </p>
                    </MenuItem>
                  </>
                ) : (
                  <li>
                    <p onClick={handleMenuItemClick} className="menu__item">
                      <Inscription />
                    </p>
                  </li>
                )}
              </span>
              <MenuItem
                name="Contact"
                className="link"
                onClick={handleMenuItemClick}
              >
                <Link to="/contact">
                  <p className="menu__item">Contact</p>
                </Link>
              </MenuItem>
              <MenuItem
                name="Politique"
                className="link"
                onClick={handleMenuItemClick}
              >
                <Link to="/politique-confidentialite">
                  <p className="menu__item">Politique de Confidentialité</p>
                </Link>
              </MenuItem>
            </ul>
          </div>
        </MenuMenu>
      )}

      {!isMobile && ( // Affiche le menu normal sur les appareils non mobiles
        <MenuMenu position="right">
          {logged ? (
            <>
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
            </>
          ) : (
            <>
              <MenuItem name="Connexion" className="btn btn_cream">
                <Connexion />
              </MenuItem>
              <MenuItem name="Inscription" className="btn btn_cream">
                <Inscription />
              </MenuItem>
            </>
          )}
        </MenuMenu>
      )}
    </Menu>
  );
}

export default Header;
