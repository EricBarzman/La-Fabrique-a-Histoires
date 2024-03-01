import { updateThemes } from './gameOptionsSlice';

/**
 * Va chercher sur l'API en BACK les données de tous les thèmes
 */
const fetchThemesMiddleware = (store) => (next) => (action) => {
  if (action.type === 'FETCH_THEMES') {
    fetch('http://localhost:3000/themes')
      .then((response) => response.json())
      .then((data) => store.dispatch(updateThemes(data)));
  }
  next(action);
};

export default fetchThemesMiddleware;
