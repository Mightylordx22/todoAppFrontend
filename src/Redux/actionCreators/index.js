import { LOGIN_USER, ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actionList';
import axios from 'axios';

export const newUserData = (userData) => {
  return (dispatch) => {
    axios.get(`/api/v1/notes?email=${userData}`).then((res) => {
      dispatch({
        type: LOGIN_USER,
        user: res.data,
      });
    });
  };
};

export const deleteNote = (email, id) => {
  return (dispatch) => {
    axios
      .delete(`/api/v1/notes`, { data: { id: id, email: email } })
      .then((res) => {
        dispatch({
          type: DELETE_NOTE,
          user: res.data,
        });
      });
  };
};

export const addNote = (email) => {
  return (dispatch) => {
    axios
      .post(`/api/v1/notes`, { email: email, message: '' })
      .then((res) => {
        dispatch({
          type: ADD_NOTE,
          user: res.data,
        });
      });
  };
};

export const updateNote = (email, id, message) => {
  return (dispatch) => {
    axios
      .put(`/api/v1/notes`, { id: id, email: email, message: message })
      .then((res) => {
        dispatch({
          type: EDIT_NOTE,
          user: res.data,
        });
      });
  };
}