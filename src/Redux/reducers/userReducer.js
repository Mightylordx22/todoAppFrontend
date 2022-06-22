import { LOGIN_USER, DELETE_NOTE, ADD_NOTE, EDIT_NOTE } from '../actionList';

const userReducer = (state = { email: 'adam@adam.com' }, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...action.user };
    case DELETE_NOTE:
      return { ...action.user };
    case ADD_NOTE:
      return { ...action.user };
    case EDIT_NOTE:
      return { ...action.user };
    default:
      return state;
  }
};

export default userReducer;
