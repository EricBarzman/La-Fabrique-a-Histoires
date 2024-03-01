import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MenuMenu, MenuItem, Menu, Icon } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import Connexion from '../Modales/Connexion/Connexion';
import Inscription from '../Modales/Inscription/Inscription';


export default function () {

    const [menuOpen, setMenuOpen] = useState(false); // État pour contrôler l'ouverture/fermeture du menu burger
    const logged = useSelector((state) => state.user.logged);
    const dispatch = useDispatch();
    
    // Ferme le menu burger lorsque l'on clique sur un item
    const handleMenuItemClick = () => {
    setMenuOpen(false);
    };

    const handleLogoutClick = () => {
        dispatch(handleLogout()); // Utilisez la fonction importée depuis userSlice
        dispatch(resetLoginForm()); // Réinitialiser les informations de connexion, la fonction importée depuis userSlice
        navigate('/'); // Naviguer vers la page d'accueil après la déconnexion
        navigate(0); // rafraichir la page
      };

    return (
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
    );
}