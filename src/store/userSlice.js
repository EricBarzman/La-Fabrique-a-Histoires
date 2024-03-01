import { createSlice } from '@reduxjs/toolkit';

const loadingState = () => {
  try {
    const serializedState = localStorage.getItem('user');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const initialState = loadingState() || {
  logged: false,
  firstname: '',
  lastname: '',
  avatar_path: '',
  mail: '',
  token: null,
  loginError: null, // Ajout d'une propriété loginError pour gérer les erreurs de connexion
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleSuccessfulLogin: (state, action) => {
      const newState = {
        ...state,
        logged: true,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        mail: action.payload.mail,
        password: action.payload.password,
        token: action.payload.token,
        loginError: null,
      };
      localStorage.setItem('user', JSON.stringify(newState.user));
      return newState;
    },

    updateUser(state, action) {
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        ...action.payload,
      };
    },

    handleLogout: (state) => {
      state.logged = false;
      state.firstname = '';
      state.lastname = '';
      state.mail = '';
      state.avatar_path = '';
      state.token = '';
      localStorage.removeItem('user'); // supprimer les données utilisateur du stockage local
      return state;
    },

    handleLoginError: (state) => {
      return {
        ...state,
        logged: false, // Mettre à false pour indiquer que l'utilisateur n'est pas connecté
        loginError: "L'email et/ou le mot de passe ne correspondent pas.",
      };
    },

    resetLoginError(state) {
      state.loginError = null;
    },

    resetLoginForm: (state) => {
      const newState = {
        ...state,
        mail: initialState.mail,
        password: initialState.password,
        loginError: null,
      };
      localStorage.setItem('user', JSON.stringify(newState));
      return newState;
    },

    newUser: (state, action) => {
      const { mail, firstname, lastname, password, avatar } = action.payload;

      // Je prépare le nouveau message a ajouter au state
      const newUser = {
        mail,
        firstname,
        lastname,
        password,
        avatar,
      };
      state.users.push(newUser);
    },

    deleteUser: (state) => {
      state.logged = false; // mettre à jour l'état de connexion
      state.firstname = ''; // remettre à zéro les infos utilisateur
      state.lastname = '';
      state.mail = '';
      state.token = '';
      state.password = '';
      localStorage.removeItem('user'); // supprimer les données utilisateur du stockage local

      return state;
    },
  },
});

export const {
  handleSuccessfulLogin,
  resetLoginForm,
  handleLogout,
  handleLoginError,
  resetLoginError,
  createUser,
  updateUser,
  deleteUser,
} = userSlice.actions;

export default userSlice.reducer;
