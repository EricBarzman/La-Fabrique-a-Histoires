import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  allMyStories: [],
  currentMyStoryId: 0,
};

const myStoriesSlice = createSlice({
  name: 'myStories',
  initialState,
  reducers: {
    loadMyStories: (state, action) => {
      return {
        ...state,
        allMyStories: action.payload,
      };
    },
    selectMyStory: (state, action) => {
      return {
        ...state,
        currentMyStoryId: action.payload,
      };
    },
  },
});

export const { loadMyStories } = myStoriesSlice.actions;
export default myStoriesSlice.reducer;
