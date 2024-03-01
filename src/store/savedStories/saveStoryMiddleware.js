/* eslint-disable camelcase */

/**
 * Crée une sauvegarde en BDD (saved_stories) d'une histoire
 * ou modifie les informations déjà existante
 */
const saveStoryMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  const { token } = state.user;
  const { game } = state;

  let character_name = null;
  if (game.characterName.length > 0) character_name = state.game.characterName;

  const body = {
    story_id: game.currentStory.id,
    saved_story_name: game.savedStoryName,
    block_progression: game.blockProgression,
    character_gender: game.characterGender,
    is_story_finished: game.isStoryFinished,
    character_name,
  };

  if (action.type === 'SAVE_STORY') {
    // Récupération des informations pour la sauvegarde

    fetch('http://localhost:3000/users/saved_stories', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        // eslint-disable-next-line prettier/prettier
        'authorization': `${token}`,
      },
      body: JSON.stringify(body),
    });
  }

  if (action.type === 'UPDATE_SAVED_STORY') {
    const targetId = action.payload;
    fetch(`http://localhost:3000/users/saved_stories/${targetId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        // eslint-disable-next-line prettier/prettier
        'authorization': `${token}`,
      },
      body: JSON.stringify(body),
    });
  }

  next(action);
};

export default saveStoryMiddleware;
