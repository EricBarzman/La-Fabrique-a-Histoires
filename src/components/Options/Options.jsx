import { Icon } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLevel } from '../../store/gameOptionsSlice';
import { resetGameSlice } from '../../store/gameSlice';
import './Options.scss';
import ChoixThemes from './ChoixThemes';

function Options() {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const dispatch = useDispatch();
  // Load all stories
  useEffect(() => {
    dispatch(resetGameSlice());
    dispatch({ type: 'FETCH_ALL_STORIES' });
    dispatch({ type: 'FETCH_THEMES' });
  }, [dispatch]);

  // Handle choice of level & filter themes left
  const handleClick = (e) => {
    const targetId = Number(e.target.value);
    dispatch(updateLevel(targetId));
    setIsContentVisible(false);
  };

  const navigate = useNavigate();

  return (
    <div className="container__centered">
      <div className="container__centered__accueil">
        {isContentVisible && (
          <>
            <h1 className="title">Quel niveau veux-tu relever ?</h1>
            <div className="flex margin-top_4 options__level-wrapper">
              <div className="center level-item">
                <img
                  className='level__icon'
                  src="/assets/elements/easy.jpg"
                  alt="facile"
                />
                <button
                  value={1}
                  type="button"
                  className="btn btn_green level"
                  onClick={handleClick}
                >
                  3-4 ans
                </button>
              </div>
              <div className="center level-item">
                <img
                  className='level__icon'
                  src="/assets/elements/medium.jpg"
                  alt="moyen"
                />
                <button
                  value={2}
                  type="button"
                  className="btn btn_grey level"
                  onClick={handleClick}
                >
                  4-5 ans
                </button>
              </div>
              <div className="center level-item">
                <img
                  className='level__icon'
                  src="/assets/elements/hard.jpg"
                  alt="difficile"
                />
                <button
                  value={3}
                  type="button"
                  className="btn btn_marron level"
                  onClick={handleClick}
                >
                  5-6 ans
                </button>
              </div>
            </div>
          </>
        )}
        {/* Level content */}
        {!isContentVisible && <ChoixThemes />}
        <Icon
          name="arrow alternate circle left outline"
          alt="arrow icon"
          size="big"
          className="ocre center margin-top_4 pointer"
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
}

export default Options;
