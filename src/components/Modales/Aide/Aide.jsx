import './Aide.scss';
import { useState } from 'react';
import {
  Button,
  Modal,
  ModalDescription,
  Header,
  Icon,
} from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';

function Aide() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleQuit = () => {
    setOpen(false);
    navigate('/');
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="fullscreen"
      trigger={
        <Button>
          <Icon
            disabled
            color="white"
            name="help circle"
            alt="help circle"
            size="big"
          />
        </Button>
      }
    >
      <Modal.Header className="aide__title">
        Aide
        <Icon
          name="close"
          alt="quitter"
          size="small"
          className="violet_main margin-left_1 jeu_fin-option-button"
          onClick={handleQuit}
        />
      </Modal.Header>
      <Modal.Content>
        <ModalDescription>
          <div className="modal-aide_section">
            <div>
              <Header className="blue-secondary aide__title">Comment jouer ?</Header>
              <p>
                Tu peux te créer un compte ou tu peux jouer sans.
                <br/>Choisis les options de ton jeu, puis une histoire parmi celles proposées.
                Cliquer sur le bouton "Je joue !" pour lancer le jeu.
                Il ne te reste plus qu'à commencer l'aventure !
              </p>
            </div>
            <Link to="/options" target="_blank">
              <button type="button" className="btn btn__blue">
                Je joue
              </button>
            </Link>
          </div>
          <div className="modal-aide_section_right text-align_right">
            <div className="modal-aide_section_right__icon">
              <Icon
                name="arrow alternate circle left outline"
                alt="arrow icon"
                size="big"
                className="ocre center margin-top_4 pointer"
              />
              <Icon
                name="arrow alternate circle right outline"
                alt="arrow icon"
                size="big"
                className="ocre center margin-top_4 pointer"
              />
            </div>
            <div className="modal-aide_section_right__paragraph">
              <Header className="blue-secondary aide__title">
                Utiliser les flèches de gauche et de droite
              </Header>
              <p>
                Durant ton histoire, tu verras
                deux flèches, à gauche et à droite. Celle de gauche te permet de revenir en arrière d'une étape,
                celle de droite d'aller à l'étape suivante. Essaie ! Tu vas voir, c'est très
                simple ! Tu peux revenir en arrière pour changer ta
                décision lors d'un choix, par exemple.
              </p>
            </div>
          </div>
          <div className="modal-aide_section">
            <div>
              <Header className="blue-secondary aide__title">
                A quoi sert le compte ?
              </Header>
              <p>
                Avoir un compte te permet d'enregistrer
                l'histoire à laquelle tu joues, même si elle n'est pas finie.
                Puis la retrouver dans Mes histoires
                (tu y accèdes en cliquant sur le livre dans le menu
                ou bien dans ton profil). Tu peux rejouer autant de fois que tu le
                souhaites les histoires que tu as créées, et même les
                modifier ! Papa ou maman peuvent également se créer leur profil
                et le faire à ta place si tu es trop petit.
              </p>
            </div>
            <Link to="/profil">
              <Icon
                name="user circle"
                color="white"
                alt="user circle icone"
                size="big"
              />
            </Link>
          </div>
          <div className="modal-aide_section_right text-align_right">
            <div className="modal-aide_section_right__icon">
              <Icon
                name="save"
                alt="save"
                size="big"
                className="violet_main margin-left_1"
              />
            </div>
            <div className="modal-aide_section_right__paragraph">
              <Header className="blue-secondary aide__title">Sauvegarder</Header>
              <p>
                Comment sauvegarder une histoire ? Si tu as un compte, tu
                verras pendant une histoire et à la fin une icône de disquette.
                Clique dessus ! Elle te renvoie sur la page Mes Histoires, où tu
                retrouveras toutes tes histoires sauvegardées.
              </p>
            </div>
          </div>

          <div className="modal-aide_section">
            <div>
              <Header className="blue-secondary aide__title">Rejouer</Header>
              <p>
                Tu peux rejouer une histoire dès que tu l'as finie !
                Fais aussi attention à la sauvegarder, sinon tu ne pourras pas la
                rejouer quand tu seras parti.
                Une fois ton histoire sauvegardée, tu peux cliquer sur l'icône de
                caméra : elle te permet de lire et relire
                l'histoire que tu as créé.
              </p>
            </div>
            <Icon name="video" color="violet_main" alt="redo icone" size="big" />
          </div>
        </ModalDescription>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Fermer
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default Aide;
