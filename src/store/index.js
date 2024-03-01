import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import gameSlice from './gameSlice';
import gameOptionsSlice from './gameOptionsSlice';
import authMiddleware from './authMiddleware';
import fetchAllStoriesMiddleware from './fetchAllStoriesMiddleware';
import fetchStoryMiddleware from './fetchStoryMiddleware';
import saveStoryMiddleWare from './savedStories/saveStoryMiddleware';
import fetchSavedStoryMiddleware from './savedStories/fetchSavedStoryMiddleware';
import deleteSavedStoryMiddleware from './savedStories/deleteSavedStoryMiddleware';
import myStoriesSlice from './myStoriesSlice';
import fetchThemesMiddleware from './fetchThemesMiddleware';
import userMiddleware from './userMiddleware';

const store = configureStore({
  reducer: {
    user: userSlice,
    game: gameSlice,
    gameOptions: gameOptionsSlice,
    myStories: myStoriesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authMiddleware,
      fetchAllStoriesMiddleware,
      fetchThemesMiddleware,
      fetchStoryMiddleware,
      saveStoryMiddleWare,
      fetchSavedStoryMiddleware,
      deleteSavedStoryMiddleware,
      userMiddleware
    ),
});

export default store;
