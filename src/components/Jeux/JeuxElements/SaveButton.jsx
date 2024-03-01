import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Icon } from 'semantic-ui-react';
import { updateField } from '../../../store/gameSlice';

export default function SaveButton({ className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentBlock = useSelector((state) => state.game.currentBlock);
  const savedStoryId = useSelector((state) => state.game.savedStoryId);

  const handleSave = () => {
    dispatch(
      updateField({
        name: 'isStoryFinished',
        value: currentBlock.type === 'end',
      })
    );
    if (!savedStoryId) dispatch({ type: 'SAVE_STORY' });
    if (savedStoryId)
      dispatch({ type: 'UPDATE_SAVED_STORY', payload: savedStoryId });
    dispatch({ type: 'FETCH_SAVED_STORIES' });
    navigate('/mes_histoires');
  };

  return (
    <Icon
      name="save"
      alt="sauver"
      size="big"
      className={`violet_main margin-left_1 ${className}`}
      onClick={handleSave}
    />
  );
}
