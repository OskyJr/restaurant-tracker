import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Rating, SxProps, TextField, Theme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ImageUpload } from '../assets/ImageUpload';

const style: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  borderRadius: '0.5rem',
};

export const AddRestaurantModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box p={2}>
      <Button variant="contained" color='secondary' onClick={handleOpen}>
        <AddIcon />
        New
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2" padding={1}>
            Restaurant Name
          </Typography>
          <TextField
            required
            id="outlined-required"
            label="Required"
          />
          <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2" padding={1}>
            Address
          </Typography>
          <TextField
            id="outlined-required"
          />
          <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2" padding={1}>
            Rating
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(_event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2" padding={1}>
            Description
          </Typography>
          <TextField
            multiline
            rows={4}
            id="outlined-required"
          />
          <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2" padding={1}>
            Upload Image
          </Typography>
          <ImageUpload />
          <Box display="flex" justifyContent="flex-end">
            <Button color="secondary" onClick={handleClose}> Submit</Button>
          </Box>
        </Box>
      </Modal >
    </Box>
  );
}