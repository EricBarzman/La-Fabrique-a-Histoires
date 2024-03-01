import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  currentStory: {},
  characterGender: '',
  characterName: '',
  savedStoryName: '',
  currentBlock: {},
  blockProgression: [],
  progressionIndex: 0,
  isStoryFinished: false,
  isAlreadySavedAndFinished: false,
  savedStoryId: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // Charge l'histoire à jouer
    updateCurrentStory: (state, action) => {
      return {
        ...state,
        currentStory: action.payload,
      };
    },
    // Met à jour les champs (characterGender, characterName, savedStoryName)
    updateField: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
    // met à jour le currentBlock, ainsi que la blockProgression
    loadBlock: (state, action) => {
      return {
        ...state,
        currentBlock: action.payload,
        blockProgression: [...state.blockProgression, action.payload.alphanum],
      };
    },

    resetGameSlice: (state) => {
      return {
        ...state,
        currentStory: {},
        characterGender: '',
        characterName: '',
        savedStoryName: '',
        currentBlock: {},
        blockProgression: [],
        progressionIndex: 0,
        isStoryFinished: false,
        isAlreadySavedAndFinished: false,
        savedStoryId: 0,
      };
    },
  },
});

export const { updateCurrentStory, updateField, loadBlock, resetGameSlice } =
  gameSlice.actions;
export default gameSlice.reducer;
