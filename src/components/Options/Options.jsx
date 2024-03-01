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
      {isContentVisible && (
        <>
          <h1 className="title">Quel niveau veux-tu relever ?</h1>
          <div className="flex margin-top_4 options__level-wrapper">
            <div className="center level-item">
              <Icon
                name="asl"
                alt="asl icon"
                size="big"
                className="margin-bottom_1 pastel-green"
              />
              <button
                value={1}
                type="button"
                className="btn btn_green"
                onClick={handleClick}
              >
                Facile
              </button>
            </div>
            <div className="center level-item">
              <Icon
                name="hand peace outline"
                alt="hand icon"
                size="big"
                className="margin-bottom_1 grey"
              />
              <button
                value={2}
                type="button"
                className="btn btn_grey"
                onClick={handleClick}
              >
                Intermédiaire
              </button>
            </div>
            <div className="center level-item">
              <Icon
                name="bolt"
                alt="bolt icon"
                size="big"
                className="margin-bottom_1 marron"
              />
              <button
                value={3}
                type="button"
                className="btn btn_marron"
                onClick={handleClick}
              >
                Difficile
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
  );
}

export default Options;
