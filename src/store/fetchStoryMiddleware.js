import { updateCurrentStory, loadBlock, updateField } from './gameSlice';

/**
 * @param {selectedStoryId} store
 * Va chercher sur l'API en BACK toutes les données pour UNE histoire, avec ses blocks, et leurs choix
 * et met à jour la currentStory, le currentBlock dans le state de la slice game
 */
const fetchStoryMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const storyId = state.gameOptions.selectedStoryId;

  if (action.type === 'FETCH_STORY') {
    fetch(`http://localhost:3000/stories/${storyId}`)
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(updateCurrentStory(data));
        const firstBlock = data.blocks.find((block) => block.type === 'start');
        store.dispatch(loadBlock(firstBlock));
      });
  }

  if (action.type === 'FETCH_STORY_WITHOUT_PROGRESSION_UPDATE') {
    fetch(`http://localhost:3000/stories/${storyId}`)
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(updateCurrentStory(data));
      });
  }

  next(action);
};

export default fetchStoryMiddleware;
