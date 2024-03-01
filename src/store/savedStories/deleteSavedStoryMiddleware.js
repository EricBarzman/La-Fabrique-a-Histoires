/* eslint-disable camelcase */
/**
 * Supprime la ou les sauvegardes de l'utilisateur
 */
const deleteSavedStoryMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  // const targetId = state.myStories.selectedMyStoryId;
  const { token } = state.user;
  const targetId = action.payload;
  if (action.type === 'DELETE_ALL_SAVED_STORIES') {
    fetch('http://localhost:3000/users/saved_stories', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        // eslint-disable-next-line prettier/prettier
        'authorization': `${token}`,
      },
    });
  }

  if (action.type === 'DELETE_ONE_SAVED_STORY') {
    fetch(`http://localhost:3000/users/saved_stories/${targetId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        // eslint-disable-next-line prettier/prettier
        'authorization': `${token}`,
      },
    });
  }

  next(action);
};

export default deleteSavedStoryMiddleware;