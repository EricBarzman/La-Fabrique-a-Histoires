import { updateListStories } from './gameOptionsSlice';

/**
 * Va chercher sur l'API en BACK les données superficielles de TOUTES les histoires, sans leurs blocks
 * et met à jour le state de la slice gameOptions
 */
const fetchAllStoriesMiddleware = (store) => (next) => (action) => {
  if (action.type === 'FETCH_ALL_STORIES') {
    fetch('http://localhost:3000/stories')
      .then((response) => response.json())
      .then((data) => store.dispatch(updateListStories(data)));
  }
  next(action);
};

export default fetchAllStoriesMiddleware;
