import Card from '@mui/material/Card';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { AddRestaurantModal } from './AddRestaurantModal';
import React from 'react';

export interface SideBarProps {
  onSort: (sortKey: string, order: string) => void;
}

export const SideBar = (prop: SideBarProps) => {
  const { onSort } = prop;

  const [currentValue, setCurrentValue] = React.useState<string>('Name');

  return (
    <Card sx={{ borderRadius: '1rem' }}>
      <FormControl>
        <AddRestaurantModal />
        <Typography align="left" fontWeight="bold" gutterBottom variant="h5" component="div">
          Sort
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Name"
          name="radio-buttons-group"
          value={currentValue}
          onChange={(event) => {
            setCurrentValue(event.target.value);
            onSort(event.target.value, 'asc');
          }}
        >
          <FormControlLabel value="Name" control={<Radio color="secondary" />} label="Name" />
          <FormControlLabel
            value="Date"
            control={<Radio color="secondary" />}
            label="Latest Date"
          />
        </RadioGroup>
      </FormControl>
    </Card>
  );
};
