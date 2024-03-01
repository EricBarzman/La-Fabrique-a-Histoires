import './UpdateProfil.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// import { useSelector } from 'react-redux';
import {
  Image,
  Input,
  Form,
  FormField,
  FormGroup,
  Button,
} from 'semantic-ui-react';

// actuellement: données par défaut pour rendu
function UpdateProfil() {
  const [mail, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [avatar, setAvatar] = useState(
    'https://static.hitek.fr/img/up_m/1618601155/harrypotter.webp'
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setEmail(user.mail);
    setFirstName(user.firstname);
    setLastName(user.lastname);
  }, [user.firstname, user.lastname, user.mail]);

  const handleSubmit = () => {
    const updatedData = {
      mail: mail.trim(),
      firstname: firstname.trim(),
      lastname: lastname.trim(),
    };
    console.log(' IsUpdated ? ', updatedData);
    dispatch({ type: 'UPDATE_USER', payload: { ...updatedData } });
    // Attendre la mise à jour des données dans le store
    // Vous pouvez également ajouter une logique pour masquer le message après un certain délai si nécessaire
    navigate('/profil'); // Naviguer vers la page de profil
  };

  // permet de modifier et de voir la préview de l'image sélectionnée
  const handleAvatarChange = (e) => {
    if (e.target.files.length > 0) {
      const newAvatar = URL.createObjectURL(e.target.files[0]); // grâce à URL.createObjectURL
      setAvatar(newAvatar);
    }
  };

  return (
    <>
      <div className="title-box">
        <h1 className="title">Page du profil</h1>
      </div>
      <div id="avatar-box">
        <Image
          id="avatar-image"
          src={avatar} // Utilisation de l'état avatar pour afficher l'image dynamiquement
          wrapped
          ui={false}
        />
        <Input
          id="input-file"
          type="file" // img = type file
          onChange={handleAvatarChange}
          accept="image/*"
        />
      </div>
      <div id="informations-box">
        {/* {showSuccessMessage && (
          <Message positive>
            <Message.Header>Profil mis à jour avec succès !</Message.Header>
          </Message>
        )} */}
        <Form id="custom-form">
          <FormGroup widths="equal">
            <FormField
              control={Input}
              label="Prénom *"
              placeholder="votre prénom"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <FormField
              control={Input}
              label="Nom"
              placeholder="votre nom"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormGroup>
          <FormGroup widths="equal">
            <FormField
              control={Input}
              label="Email *"
              placeholder="votre-adresse@mail.com"
              value={mail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <p id="champs">* champs obligatoires</p>
        </Form>
        <Link to="/profil">
          <Button id="annuler-btn" color="red">
            Annuler
          </Button>
        </Link>
        <Button
          content="Modifier"
          labelPosition="right"
          icon="checkmark"
          type="submit"
          onClick={handleSubmit}
          positive
        />
      </div>
    </>
  );
}

export default UpdateProfil;
