/* eslint-disable prettier/prettier */
import './Jeux.scss';
import { useSelector } from 'react-redux';
import EndContainer from './JeuxElements/EndContainer';
import ChoicesContainer from './JeuxElements/ChoicesContainer';
import ReplayButton from './JeuxElements/ReplayButton';
import QuitButton from './JeuxElements/QuitButton';
import SaveButton from './JeuxElements/SaveButton';

function Jeux() {

  
  /* Récupération des données nécessaires */
  const game = useSelector((state) => state.game);
  const { currentBlock, isStoryFinished, isAlreadySavedAndFinished } = game;

  const gender = useSelector((state) => state.game.characterGender);  
  const bulleText = currentBlock.label_text;
  const boyImgPath = currentBlock.boy_character_img_path;
  const girlImgPath = currentBlock.girl_character_img_path;
  const isLogged = useSelector((state) => state.user.logged);
  
  return (
    <div className="container__game-page">
      
      <div
        id="jeu__background"
        alt="background"
        style={{
          backgroundImage: `url(${
            gender === 'garçon' ? boyImgPath : girlImgPath
          })`,
        }}
      >
        {bulleText && <div id="bubble">
          <div className="jeu__bulle">{bulleText}</div>
          <span id="arrow_inner" />
        </div>}

        {/* Le jeu est-il en cours ? */}
        {!isStoryFinished && currentBlock.type !== 'end' &&
          (<ChoicesContainer />)}

        {/* Mode replay */}
        {isStoryFinished && currentBlock.type !== 'end' &&
         (<ReplayButton />)}

        {/* Le jeu a atteint le dernier bloc : sauver, replay, quitter */}
        {currentBlock.type === 'end' && (<EndContainer />)}

        {currentBlock.type !== 'end' && (
          <div>
          <QuitButton className="jeu__permanent-quit-button" />
          {isLogged && !isAlreadySavedAndFinished && (<SaveButton className="jeu__permanent-save-button" />)}
        </div>
        )}
      </div>

    </div>
  );
}

export default Jeux;
