import './MesHistoires.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardSavedStory from './CardSavedStory/CardSavedStory';

export default function MesHistoires() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_STORIES' });
    dispatch({ type: 'FETCH_SAVED_STORIES' });
  }, []);
  const savedStories = useSelector((state) => state.myStories.allMyStories);

  return (
    <div className="container__centered">
      {savedStories.length > 0 ? (
        <div>
          <h2 className="title">Mes histoires !</h2>
          <div className="flex margin-top_4">
            <div className="container-mes_histoires">
              {savedStories.map((savedStory) => (
                <CardSavedStory savedStory={savedStory} key={savedStory.id} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h2 className="title">Je n'ai créé aucune histoire sauvegardée !</h2>
      )}
    </div>
  );
}
