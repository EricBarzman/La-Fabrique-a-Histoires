import { handleSuccessfulLogin, handleLoginError } from './userSlice';

const authMiddleware = (store) => (next) => (action) => {
  const body = action.payload;
  if (action.type === 'SIGN_IN') {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  if (action.type === 'SUBMIT_LOGIN') {
    // Je fait un call API vers le serveur avec fetch
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // J'envoi au serveur l'mail et le password qui sont dans state
        mail: action.payload.mail,
        password: action.payload.password,
      }),
    })
      .then((res) => {
        switch (res.status) {
          case 200:
            return res.json();
          case 401:
            console.error('Erreur : connexion non autorisée front');
            store.dispatch(handleLoginError());
            return null;
          default:
            console.error('Erreur lors de la connexion front :', res.status);
            store.dispatch(handleLoginError());
            return null;
        }
      })
      .then((data) => {
        if (data && data.token) {
          // Stocker le token dans le localStorage
          localStorage.setItem('token', data.token);
          // Mettre à jour le state avec les données de l'utilisateur
          const loginAction = handleSuccessfulLogin(data);
          store.dispatch(loginAction);
        } else {
          console.error('Token non trouvé dans la réponse');
          store.dispatch(handleLoginError());
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la connexion :', error);
        store.dispatch(handleLoginError());
      });
  }

  return next(action);
};

export default authMiddleware;
