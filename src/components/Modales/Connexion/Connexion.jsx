import './Connexion.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Modal,
  FormField,
  FormGroup,
  Input,
  Icon,
  Message,
} from 'semantic-ui-react';
import { resetLoginError } from '../../../store/userSlice';

function Connexion({ onLoginSuccess }) {

  const [open, setOpen] = useState(false);
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false); // State pour gérer l'adresse e-mail invalide

  const loginError = useSelector((state) => state.user.loginError);

  const dispatch = useDispatch();

  const handleLogin = (evt) => {
    evt.preventDefault();

    //  Vérification de l'adresse e-mail
    if (!mail.includes('@')) {
      setInvalidEmail(true); // Définit l'état à true si l'adresse e-mail est invalide
      return;
    }
    setInvalidEmail(false); // Réinitialise l'état de l'adresse e-mail invalide si elle a été réparée

    const action = { type: 'SUBMIT_LOGIN', payload: { mail, password } };
    dispatch(action).then(() => {
      // Réinitialiser le message d'erreur lors de la connexion réussie
      setOpen(false); // Fermer la modal après la connexion réussie
      setEmail(''); // Réinitialiser les inputs après la connexion réussie
      setPassword('');
      // Appeler la fonction de rappel pour la navigation
      if (typeof onLoginSuccess === 'function') {
        onLoginSuccess(); // Appel de la fonction de rappel
      }
    });
  };

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
    // Vérification de l'adresse e-mail en temps réel
    setInvalidEmail(!evt.target.value.includes('@'));
  };

  const closedClick = () => {
    // réinitialise les inputs et ferme la modal
    setInvalidEmail(false);
    setEmail('');
    setPassword('');
    dispatch(resetLoginError());
    setOpen(false);
  };

  // affiche le mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Connexion</Button>}
      id="modal-connexion"
    >
      <img
        className="logo-modal"
        alt="logo"
        src="/assets/elements/favicon-ss-bg.ico"
      />
      <Modal.Header>Je me connecte !</Modal.Header>
      <Modal.Content>
        <Form>
          {loginError && (
            <Message
              negative
              content="L'email et/ou le mot de passe ne correspondent pas."
            />
          )}
          {invalidEmail && ( // Affiche le message si l'adresse e-mail est invalide
            <Message
              negative
              content="Veuillez saisir une adresse e-mail valide."
            />
          )}
          <FormGroup widths="equal">
            <FormField
              control={Input}
              label="Mon mail"
              placeholder="votre-adresse@mail.com"
              value={mail}
              onChange={handleChangeEmail}
              error={invalidEmail} // Active l'indication d'erreur si l'adresse e-mail est invalide
            />
            <FormField
              control={Input}
              label="Mon mot de passe"
              placeholder="mot de passe"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={
                <Icon
                  name={showPassword ? 'eye' : 'eye slash'}
                  alt={showPassword ? 'eye icone' : 'eye slash icone'}
                  size="large"
                  color="black"
                  link
                  onClick={togglePasswordVisibility}
                />
              }
            />
          </FormGroup>
          <div
            id="reset-password-link"
            onClick={() => setOpen(false)}
            // ↓ obligatoire pour respecter les règles ESTlint
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setOpen(false);
              }
            }}
            role="button"
            tabIndex={0} // Rend l'élément focusable
          >
            <Link to="/request-reset-password">
              <p className="menu__item" id="reset-password">
                Réinitialiser le mot de passe ?
              </p>
            </Link>
          </div>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="blue" onClick={closedClick}>
          Annuler
        </Button>
        <Button
          content="Prêt à se connecter !"
          labelPosition="right"
          icon="checkmark"
          onClick={handleLogin}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default Connexion;
