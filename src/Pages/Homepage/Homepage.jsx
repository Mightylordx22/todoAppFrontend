import { Button, Container, Slide, Typography } from '@mui/material';
import { Fragment } from 'react';
import { Notes } from '../Notes';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../Redux/actions';

export const Homepage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { addNote } = bindActionCreators(actionCreators, dispatch);

  return (
    <Fragment>
      <Container
        sx={{
          height: '50vh',
          backgroundColor: '#2F3037',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
        maxWidth='false'
      >
        <Slide direction='down' in={true} timeout={750}>
          <Container align='center' component='section'>
            <Typography
              variant='h1'
              noWrap
              sx={{
                fontWeight: 500,
                textTransform: 'uppercase',
                p: { xs: 0, md: 15 },
                pt: { xs: 10 },
                fontSize: { xs: '4rem', md: '6rem' },
              }}
              color='primary.white'
            >
              Notes
              <br />
              <Button onClick={() => addNote(user?.email)}>
                <Typography variant='body1' color='secondary' noWrap>
                  Click to add a note
                </Typography>
              </Button>
            </Typography>
          </Container>
        </Slide>
      </Container>
      <Notes />
    </Fragment>
  );
};
