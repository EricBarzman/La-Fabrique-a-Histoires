import { useDispatch, useSelector } from 'react-redux';
import { updateField, loadBlock } from '../../../store/gameSlice';

export default function ReplayButton() {
  const dispatch = useDispatch();
  const progressionIndex = useSelector((state) => state.game.progressionIndex);
  const blockProgression = useSelector((state) => state.game.blockProgression);
  const story = useSelector((state) => state.game.currentStory);

  const handleReplayNextBlock = () => {
    const newIndex = progressionIndex + 1;
    dispatch(
      updateField({
        name: 'progressionIndex',
        value: newIndex,
      })
    );
    const newBlockName = blockProgression[newIndex];
    const newBlock = story.blocks.find(
      (block) => block.alphanum === newBlockName
    );
    dispatch(loadBlock(newBlock));
  };

  return (
    <button
      type="button"
      className="jeu__choix-button jeu__replay-button"
      onClick={handleReplayNextBlock}
    >
      Et après ?
    </button>
  );
}
