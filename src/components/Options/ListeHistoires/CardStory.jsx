import './CardStory.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../../store/gameOptionsSlice';

export default function CardStory({ story }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const startGame = (e) => {
    const targetId = Number(e.currentTarget.value);
    dispatch(updateState({ name: 'selectedStoryId', value: targetId }));
    dispatch({ type: 'FETCH_STORY', payload: targetId });
  };

  const currentStory = useSelector((state) => state.game.currentStory);
  if (currentStory) navigate('/jeux');

  return (
    <div className="center cardstory">
      <img
        className="thumbnail"
        src={story.thumbnail_path}
        alt="vignette de l'histoire"
      />
      <button
        type="button"
        onClick={startGame}
        value={story.id}
        className="storyTitle"
      >
        {story.title}
      </button>
    </div>
  );
}
