import './Profil.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
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
function Profil() {
  const [avatar] = useState(
    'https://static.hitek.fr/img/up_m/1618601155/harrypotter.webp'
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { mail, firstname, lastname, password } = userData;

  const user = useSelector((state) => state.user);

  // Utilisez des états locaux pour stocker les données utilisateur
  const [userData, setUserData] = useState(user);

  // Mettre à jour les états locaux lorsque les données utilisateur changent dans le store Redux
  useEffect(() => {
    setUserData(user);
  }, [user]);

  // DELETE
  const handleDelete = () => {
    console.log('DELETE');
    console.log(user);
    dispatch({
      type: 'DELETE_USER',
      payload: user.id,
    });
    navigate('/');
  };

  return (
    <>
      <div className="title-box">
        <h1 className="title">Page du profil</h1>
      </div>
      <div id="avatar-box">
        <Image
          id="avatar-image"
          src={avatar} // donnée brut car pas gérer en back les images
          // src={user.avatar}
          wrapped
          ui={false}
        />
      </div>
      <div id="informations-box">
        <Button id="update-profil" type="button" color="white">
          <Link to="/modification-profil">Modifier mon Profil</Link>
        </Button>

        {/* caché car non atteignable dans le site directement mais par le lien avec token envoyé par email pour réinitialiser
        <Button type="button" color="white">
          <Link to="/reinitilisation-mot-de-passe">Reset Password Page</Link>
        </Button>
         */}

        <Form id="custom-form">
          <FormGroup widths="equal">
            <FormField
              control={Input}
              label="Prénom *"
              placeholder="votre prénom"
              value={userData.firstname}
            />
            <FormField
              control={Input}
              label="Nom"
              placeholder="votre nom"
              value={userData.lastname}
            />
            <FormField
              control={Input}
              label="Email *"
              placeholder="votre-adresse@mail.com"
              value={userData.mail}
            />
          </FormGroup>
          <p id="champs">* champs obligatoires</p>

          <Link to="/request-reset-password">
            <p className="menu__item" id="reset-password">
              Réinitialiser le mot de passe ?
            </p>
          </Link>
          <Button
            id="delete-profil"
            type="button"
            color="red"
            onClick={handleDelete}
          >
            <p>Supprimer le compte</p>
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Profil;
