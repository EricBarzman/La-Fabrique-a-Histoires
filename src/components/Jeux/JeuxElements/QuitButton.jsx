import { useNavigate } from 'react-router';
import { Icon } from 'semantic-ui-react';
import { resetGameSlice } from '../../../store/gameSlice';
import { useDispatch } from 'react-redux';

export default function QuitButton({ className }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleQuitGame = () => {
    dispatch(resetGameSlice());
    navigate('/');
  };

  return (
    <Icon
      name="close"
      alt="quitter"
      size="big"
      className={`violet_main margin-left_1 ${className}`}
      onClick={handleQuitGame}
    />
  );
}
