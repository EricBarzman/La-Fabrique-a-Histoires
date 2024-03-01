import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  allStories: [],
  allThemes: [],
  selectedLevelId: 0,
  selectedThemeId: 0,
  selectedStoryId: 0,
};

const gameOptionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    updateListStories: (state, action) => {
      return {
        ...state,
        allStories: action.payload,
      };
    },

    updateLevel: (state, action) => {
      const levelId = action.payload;
      return {
        ...state,
        selectedLevelId: levelId,
      };
    },

    updateThemes: (state, action) => {
      return {
        ...state,
        allThemes: action.payload,
      };
    },

    updateState: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const { updateListStories, updateThemes, updateLevel, updateState } =
  gameOptionsSlice.actions;
export default gameOptionsSlice.reducer;
