/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from '@mui/material';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../Redux/actions';
import { useEffect } from 'react';
import { Note } from './Note/Note';

export const Notes = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { newUserData } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (user) {
      newUserData(user.email);
    }
  }, []);

  return (
    <Grid container spacing={3} p={2}>
      {user.notes &&
        user.notes.map((note, index) => (
          <Note index={index} note={note} key={index} />
        ))}
    </Grid>
  );
};
