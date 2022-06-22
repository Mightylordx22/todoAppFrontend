import {
  Box,
  Fade,
  Grid,
  IconButton,
  Stack,
  TextareaAutosize,
  Tooltip,
  Typography,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../../Redux/actions';
import { useEffect, useRef, useState } from 'react';

export const Note = ({ index, note }) => {
  const [isEditing, setEditing] = useState(false);
  const [text, setText] = useState(note.message);
  const TIMEOUT_DELAY = 600;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { deleteNote, updateNote } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    if (isEditing) {
      inputRef.current.selectionStart = inputRef.current.value.length;
      inputRef.current.selectionEnd = inputRef.current.value.length;
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleLeave = () => {
    setEditing(false);
    updateNote(user.email, note.id, text);
  };

  const handleKeyDown = (event) => {
    const input = event.keyCode;
    console.log(input);
    if (
      (input >= 48 && input <= 90) ||
      (input >= 96 && input <= 111) ||
      (input >= 186 && input <= 222)
    ) {
      setText((note.message += event.key));
    }
    if (input === 8) {
      setText((note.message = note.message.slice(0, -1)));
    }
    if (input === 46) {
      setText((note.message = note.message.slice(0, -1)));
    }
    if (input === 32) {
      setText((note.message += ' '));
    }
    if (input === 13 || input === 27 || input === 9) {
      handleLeave();
    }
  };

  const inputRef = useRef(null);
  return (
    <Fade
      in={true}
      timeout={
        index === 0 ? index + TIMEOUT_DELAY : (index + 1) * TIMEOUT_DELAY
      }
    >
      <Grid item xs={12} sm={6} md={4}>
        <Box position='absolute'>
          <Tooltip title={``} sx={{ color: '#EE5353' }}>
            <IconButton onClick={() => deleteNote(user.email, note.id)}>
              <CancelIcon style={{ fontSize: '0.9em' }} />
            </IconButton>
          </Tooltip>
        </Box>
        <Stack
          backgroundColor='#F5FFD2'
          p={1}
          height={'200px'}
          borderRadius={2}
        >
          {isEditing ? (
            <TextareaAutosize
              onBlur={() => handleLeave()}
              ref={inputRef}
              minRows={15}
              value={text}
              onKeyDown={(e) => handleKeyDown(e)}
              pattern='[A-Za-z]'
              style={{
                marginTop: 25,
                resize: 'none',
                backgroundColor: 'inherit',
                border: 'none',
                margin: 0,
                fontFamily: 'Montserrat',
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: 1.5,
                letterSpacing: '0.00938em',
                overflow: 'scroll',
                padding: '8px',
                wordWrap: 'break-all',
              }}
            />
          ) : (
            <Typography
              variant='body1'
              overflow={'scroll'}
              p={1}
              onClick={() => setEditing(true)}
              sx={{
                paddingTop: 3,
                height: '100%',
                wordBreak: 'break-all',
              }}
            >
              {text}
            </Typography>
          )}
        </Stack>
      </Grid>
    </Fade>
  );
};
