import { useState } from 'react';
import { useSelector } from 'react-redux';
import CardStory from './ListeHistoires/CardStory';
import './ListeHistoires.scss';

export default function ListeHistoires() {
  const [isContentVisible] = useState(true);

  const allStories = useSelector((state) => state.gameOptions.allStories);
  const themeId = useSelector((state) => state.gameOptions.selectedThemeId);
  const levelId = useSelector((state) => state.gameOptions.selectedLevelId);
  const filteredStories = allStories.filter(
    (story) => story.level_id === levelId && story.theme_id === themeId
  );

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isContentVisible && (
        <>
          <h1 className="title storylist-title">
            Clique sur l'histoire à laquelle tu veux jouer !
          </h1>
          <div className="cardstory-container">
            {filteredStories.map((story) => (
              <CardStory story={story} key={story.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
