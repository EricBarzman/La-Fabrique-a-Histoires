import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { updateField, loadBlock } from '../../../store/gameSlice';
import QuitButton from './QuitButton';
import SaveButton from './SaveButton';

export default function EndContainer() {
  const dispatch = useDispatch();

  const characterName = useSelector((state) => state.game.characterName);
  const isLogged = useSelector((state) => state.user.logged);
  const progressionIndex = useSelector((state) => state.game.progressionIndex);
  const blockProgression = useSelector((state) => state.game.blockProgression);
  const story = useSelector((state) => state.game.currentStory);
  const isStoryFinished = useSelector((state) => state.game.isStoryFinished);
  const isAlreadySavedAndFinished = useSelector(
    (state) => state.game.isAlreadySavedAndFinished
  );

  // Lance le replay
  const handleReplay = () => {
    dispatch(
      updateField({
        name: 'isStoryFinished',
        value: true,
      })
    );
    dispatch(
      updateField({
        name: 'progressionIndex',
        value: 0,
      })
    );
    const firstBlockName = blockProgression[progressionIndex];
    const firstBlock = story.blocks.find(
      (block) => block.alphanum === firstBlockName
    );
    dispatch(loadBlock(firstBlock));
  };

  return (
    <div className="jeu__fin-container">
      <h2>
        {isStoryFinished
          ? "C'était une très belle histoire !"
          : `Bravo, ${characterName}, tu as fini l'histoire !`}
      </h2>
      <div className="jeu__fin-options">
        <Icon
          name="video"
          alt="revoir"
          size="big"
          className="violet_main margin-left_1 jeu_fin-option-button"
          onClick={handleReplay}
        />
        {isLogged && !isAlreadySavedAndFinished && (
          <SaveButton className="jeu_fin-option-button" />
        )}
        <QuitButton className="jeu_fin-option-button" />
      </div>
    </div>
  );
}
