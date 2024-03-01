import { loadMyStories } from '../myStoriesSlice';

/**
 * Récupère toutes les sauvegardes d'un utilisateur
 */
const fetchSavedStoryMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const { token } = state.user;
  if (action.type === 'FETCH_SAVED_STORIES') {
    fetch('http://localhost:3000/users/saved_stories', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        // eslint-disable-next-line prettier/prettier
        'authorization': `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(loadMyStories(data));
      });
  }
  next(action);
};

export default fetchSavedStoryMiddleware;
