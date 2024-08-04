import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card, CardMedia, Divider, Popover, Rating, SxProps, TextField, Theme } from '@mui/material';
import { ImageUpload } from '../assets/ImageUpload';
import { RestaurantCardProps } from './RestaurantCard';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import { RestaurantRating } from '../interfaces/RestaurantInterface';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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

export const ViewEditRestaurantModal = (props: RestaurantCardProps) => {
  const [open] = React.useState(true);
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [isEditMode, setIsEditMode] = React.useState(false);
  const { id, onClickCallback, ...restOfProps } = props;
  const [editableFields, setEditableFields] = React.useState<Omit<RestaurantCardProps, 'onClickCallback'>>({
    id, ...restOfProps
  });
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    onClickCallback(id, false);

  };

  const onVertIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setPopoverOpen(true);
  };

  const onImageRemove = () => {
    setEditableFields(
      {
        ...editableFields,
        images: [],
      }
    )
  }
  const onDelete = () => {
    setDialogOpen(true);
  }

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverOpen(false);
  };

  const renderEdit = () => {
    return (
      <>
        <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2" paddingTop={2}>
          Restaurant Name
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          required
          id="outlined-required"
          label="Required"
          value={editableFields.name}
          onChange={(event) => {
            setEditableFields({
              ...editableFields,
              name: event?.target?.value,
            })
          }}
        />
        <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2" paddingTop={2}>
          Address
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          id="outlined-required"
          value={editableFields.address}
          onChange={(event) => {
            setEditableFields({
              ...editableFields,
              address: event?.target?.value,
            })
          }}
        />
        <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2" paddingTop={2}>
          Rating
        </Typography>
        <Rating
          name="simple-controlled"
          value={editableFields.rating}
          onChange={(_event, newValue) => {
            setEditableFields({
              ...editableFields,
              rating: newValue as RestaurantRating,
            })
          }}
        />
        <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2" paddingTop={2}>
          Description
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          value={editableFields.description}
          multiline
          rows={4}
          id="outlined-required"
          onChange={(event) => {
            setEditableFields({
              ...editableFields,
              description: event?.target?.value,
            })
          }}
        />
        <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2" paddingTop={2}>
          Uploaded Image
        </Typography>
        {
          editableFields.images?.length ?
            <Card key={id} sx={{ maxWidth: 345, borderRadius: '1rem', position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 1,
                  right: 1,
                  zIndex: 1,
                }}
              >
                <Button onClick={onImageRemove}>
                  <CloseIcon />
                </Button>
              </Box>
              <CardMedia
                sx={{ height: 140 }}
                image={editableFields.images[0]}
                title={restOfProps.name}
              />
            </Card>
            : null}
        <ImageUpload />
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={() => setIsEditMode(false)}> Update</Button>
        </Box>
      </>
    )
  }

  const renderDialog = () => {
    return (
      <Dialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this restaurant?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This process cannot be reversed and the data will not be recoverable in future
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='secondary' onClick={() => {
            setDialogOpen(false);
          }}>Cancel</Button>
          <Button color='secondary' onClick={() => {
            setDialogOpen(false);
            setPopoverOpen(false);
            onClickCallback(id, false);
          }} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  const renderView = () => {
    return (
      <>
        <CardMedia
          sx={{ height: 140 }}
          image={restOfProps.images.length ? restOfProps.images[0] : ''}
          title={restOfProps.name}
        />
        <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2" paddingTop={1}>
          {editableFields.name}
        </Typography>
        <Box alignItems="center" display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
          <Rating
            readOnly
            name="simple-controlled"
            value={restOfProps.rating}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2" paddingTop={1}>
            {new Date(restOfProps.dateAdded).toLocaleDateString()}
          </Typography>
        </Box>
        <Divider />
        <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2" paddingTop={1}>
          Description
        </Typography>
        <Typography id="modal-modal-title" component="h2">
          {restOfProps.description}
        </Typography>
        <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2" paddingTop={1}>
          Address
        </Typography>
        <Typography id="modal-modal-title" component="h2">
          {restOfProps.address}
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={onVertIconClick}>
            <MoreVertIcon />
          </Button>
          <Popover
            open={popoverOpen}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Button color="secondary" onClick={() => [setIsEditMode(true), setPopoverOpen(false)]}> Edit</Button>
            <Divider />
            <Button color="secondary" onClick={() => onDelete()}> Delete</Button>
          </Popover>
          {renderDialog()}
        </Box>
      </>

    )
  }

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isEditMode ? renderEdit() : renderView()}
        </Box>
      </Modal >
    </Box>
  );
}