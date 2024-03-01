/* eslint-disable prettier/prettier */
import { deleteUser, updateUser } from './userSlice';

const userMiddleware = (store) => (next) => (action) => {
  const body = action.payload;

  const state = store.getState();
  const { token } = state.user;

  if (action.type === 'UPDATE_USER') {
    console.log('This is mw logs /!');
    fetch(`http://localhost:3000/users/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `${token}`,
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        store.dispatch(updateUser(data));
      });
  }

  if (action.type === 'DELETE_USER') {
    console.log('This is mw logs / DELETE!');
    fetch(`http://localhost:3000/users/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `${token}`,
      },
    })
      .then((res) => {
        console.log('This is mw logs / DELETE!', res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        store.dispatch(deleteUser(data));
      });
  }
  return next(action);
};
export default userMiddleware;
