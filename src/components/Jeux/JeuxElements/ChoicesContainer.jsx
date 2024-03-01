import { useSelector, useDispatch } from 'react-redux';
import { loadBlock } from '../../../store/gameSlice';

export default function ChoicesContainer() {
  const dispatch = useDispatch();
  const currentBlock = useSelector((state) => state.game.currentBlock);
  const question = currentBlock.choice_question;
  const { choices } = currentBlock;
  const story = useSelector((state) => state.game.currentStory);

  const handleChoiceSubmit = (e) => {
    const targetId = Number(e.target.value);
    const blockToLoad = story.blocks.find((block) => block.id === targetId);
    dispatch(loadBlock(blockToLoad));
  };

  return (
    <div className="jeu__question-and-choices">
      {question && <div className="jeu__question">{question}</div>}
      <div className="jeu__choix-container">
        {choices.map((choice) => (
          <button
            type="button"
            key={choice.id}
            className="jeu__choix-button"
            value={choice.destination_block_id}
            onClick={handleChoiceSubmit}
          >
            {choice.choice_label ? choice.choice_label : 'La suite !'}
          </button>
        ))}
      </div>
    </div>
  );
}
