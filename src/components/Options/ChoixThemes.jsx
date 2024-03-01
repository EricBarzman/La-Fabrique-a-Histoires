import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import { updateState } from '../../store/gameOptionsSlice';
import Personnage from './Personnage';

export default function ChoixThemes() {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const dispatch = useDispatch();

  const allStories = useSelector((state) => state.gameOptions.allStories);
  const levelId = useSelector((state) => state.gameOptions.selectedLevelId);

  // Ne garde que les thèmes qui sont disponible avec le level choisi précédemment
  const possibleThemes = [];
  const filteredStories = allStories.filter(
    (story) => story.level_id === levelId
  );
  filteredStories.forEach((story) => {
    if (!possibleThemes.some((theme) => theme.id === story.theme.id))
      possibleThemes.push(story.theme);
  });

  const handleThemeClick = (e) => {
    setIsContentVisible(false);
    dispatch(
      updateState({
        name: 'selectedThemeId',
        value: Number(e.target.value),
      })
    );
  };
  return (
    <>
      {isContentVisible && (
        <>
          <h1 className="title">Quel thème veux-tu aborder ?</h1>
          <div className="flex margin-top_4 options__level-wrapper">
            {possibleThemes.map((theme) => (
              <div className="center options__level-container" key={theme.id}>
                <img src={theme.thumbnail_path} alt="vignette thème" className='theme-vignette' />
                <button
                  value={theme.id}
                  type="button"
                  className="btn btn_blue"
                  onClick={handleThemeClick}
                >
                  {theme.name}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      {/* Personnage content */}
      {!isContentVisible && <Personnage />}
    </>
  );
}
