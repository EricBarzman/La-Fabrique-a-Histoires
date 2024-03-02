import { useSelector, useDispatch } from 'react-redux';
import './CardSavedStory.scss';
import { Icon } from 'semantic-ui-react';
import { updateField } from '../../../store/gameSlice';
import { updateState } from '../../../store/gameOptionsSlice';
import { useNavigate } from 'react-router';

export default function CardSavedStory({ savedStory }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allStories = useSelector((state) => state.gameOptions.allStories);
  const thisStory = allStories.find(
    (story) => story.id === savedStory.story_id
  );
  const currentStory = useSelector((state) => state.game.currentStory);
  const isStoryFinished = savedStory.is_story_finished;
  const blockProgression = savedStory.block_progression;

  // Utilitaire pour récupérer et renvoyer les datas
  function recoverSavedStoryData() {
    
    const characterGender = savedStory.character_gender;
    const characterName = savedStory.character_name;
    const savedStoryName = savedStory.saved_story_name;
    const isAlreadySavedAndFinished = isStoryFinished ? true : false;
    
    // On crée un objet qui les contient toutes
    const properties = {
      characterGender,
      characterName,
      savedStoryName,
      blockProgression,
      isStoryFinished,
      progressionIndex: 0,
      isAlreadySavedAndFinished,
    };
    for (const property in properties) {
      dispatch(
        updateField({
          name: property,
          value: properties[property],
        })
      );
    };
  }

  function handleDelete() {
    dispatch({ type: 'DELETE_ONE_SAVED_STORY', payload: savedStory.id });
    dispatch({ type: 'FETCH_SAVED_STORIES' });
  }

  function handleContinueGame() {
    dispatch(updateState({ name: 'selectedStoryId', value: savedStory.story_id }));
    dispatch({ type: 'FETCH_STORY_WITHOUT_PROGRESSION_UPDATE' });
    recoverSavedStoryData();
    const lastBlockAlphanum = blockProgression[blockProgression.length - 1]
    const targetBlock = currentStory.blocks.find((block) => block.alphanum === lastBlockAlphanum);
    dispatch(updateField({
      name: 'currentBlock',
      value: targetBlock
    }))
    dispatch(updateField({
      name: 'savedStoryId',
      value: savedStory.id
    }))
    navigate('/jeux');
  } 

  function handleReplayFromSaved() {
    dispatch(updateState({ name: 'selectedStoryId', value: savedStory.story_id }));
    dispatch({ type: 'FETCH_STORY' });
    recoverSavedStoryData();
    navigate('/jeux');
  }

  return (
    <div className="center cardstory">
      <img
        className="thumbnail"
        src={thisStory.thumbnail_path}
        alt="vignette de la sauvegarde"
      />
      <div className="cardstory__menu">
        {/* <div className="cardstory__menu-element-title">
          {savedStory.saved_story_name}
        </div> */}
        <div className="cardstory__menu-element-finished">
          {isStoryFinished ? 'Terminé !' : 'Pas finie'}
        </div>
      </div>

      <div className="cardstory__menu-wrapper">
        
        {!isStoryFinished && (
          <button type="button" onClick={handleContinueGame}>
          <Icon
            name="play"
            alt="revoir"
            size="big"
            className="violet_main margin-left_1"
          />
        </button>
        )}

        {isStoryFinished && (
          <button type="button" onClick={handleReplayFromSaved}>
          <Icon
            name="video"
            alt="revoir"
            size="big"
            className="violet_main margin-left_1"
          />
        </button>
        )}

        <button type="button" onClick={handleDelete}>
          <Icon
            name="trash"
            alt="jeter"
            size="big"
            className="violet_main margin-left_1"
          />
        </button>
      </div>
    </div>
  );
}
