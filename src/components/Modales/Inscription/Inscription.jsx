import './Inscription.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Form,
  Modal,
  FormField,
  FormGroup,
  Input,
  Image,
  Icon,
  Message,
} from 'semantic-ui-react';

function Inscription() {
  const [open, setOpen] = useState(false);
  const [mail, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState(null); // utiliser un objet File pour la photo
  const [passwordMismatch, setPasswordMismatch] = useState(false); // state de verification du mot de passe
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const resetFields = () => {
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setConfirmPassword('');
    setAvatar(null);
    setPasswordMismatch(false);
  };

  const handleSubmit = () => {
    // vérifie sur le mot de passe et la confirmation de mot de passe sont identiques
    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }
    setOpen(false);
    resetFields(); // Réinitialise les champs du formulaire
    dispatch({
      type: 'SIGN_IN',
      payload: {
        mail,
        firstname,
        lastname,
        password,
        avatar,
      },
    });
    // alert('Inscription reussie');
  };

  // affiche le mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // affiche la confirmation de mot de passe
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleClose = () => {
    setOpen(false);
    resetFields(); // Réinitialise les champs
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Inscription</Button>}
    >
      <img
        className="logo-modal"
        alt="logo"
        src="/assets/elements/favicon-ss-bg.ico"
      />
      <Modal.Header>Prêt à t'inscrire ?</Modal.Header>
      <Modal.Content>
        <Form>
          <FormGroup widths="equal">
            <FormField>
              <label htmlFor="avatar">
                Mon Avatar
                <Input
                  type="file"
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
                {avatar && (
                  <Image
                    src={URL.createObjectURL(avatar)}
                    size="small"
                    rounded
                  />
                )}
              </label>
            </FormField>
            <FormField
              control={Input}
              label="Mon prénom *"
              placeholder="Mon prénom"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <FormField
              control={Input}
              label="Le nom de mes parents"
              placeholder="Le nom de mes parents"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormGroup>
          <FormGroup widths="equal">
            <FormField
              control={Input}
              label="Mon mail *"
              placeholder="Mon mail"
              value={mail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormField
              control={Input}
              label="Mon mot de passe (super secret) ! *"
              placeholder="Mon mot de passe super secret !"
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
            <FormField
              control={Input}
              label="Confirmation du Mot De Passe *"
              placeholder="confirmation de mot de passe"
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              icon={
                <Icon
                  name={showConfirmPassword ? 'eye' : 'eye slash'}
                  alt={showConfirmPassword ? 'eye icone' : 'eye slash icone'}
                  size="large"
                  color="black"
                  link
                  onClick={toggleConfirmPasswordVisibility}
                />
              }
            />
            {passwordMismatch && ( // Affiche le message si passwordMismatch est true
              <FormField>
                <Message
                  negative
                  content="Les mots de passe ne correspondent pas"
                />
              </FormField>
            )}
          </FormGroup>
          <p>* champs obligatoires</p>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="blue" onClick={handleClose}>
          Annuler
        </Button>
        <Button
          content="C'est parti !"
          labelPosition="right"
          icon="checkmark"
          onClick={handleSubmit}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default Inscription;
