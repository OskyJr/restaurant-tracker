import './App.css';
import { mockRestaurantDataList } from './mocks/RestaurantData.mock';
import { RestaurantsView } from './pages/RestaurantsView';
import { SideBar } from './components/SideBar';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import theme from './theme';
import { RestaurantCardProps } from './components/RestaurantCard';
import React, { useEffect } from 'react';

function App() {
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const [renderDataList, setRenderDataList] =
    React.useState<RestaurantCardProps[]>(mockRestaurantDataList);
  // code here is just to simulate the sorting as there is no backend
  // sorting will be done in backend directly when calling the endpoint via a query param
  // ie GET somebackend-domain/restaurants?sort%3Ddate%26order%3Dasc (ie sort entries by date via ascending)
  /*****************************************************************************************/
  const [sortBy, setSortBy] = React.useState({ sortKey: 'Name' });
  const onSortCallback = (sortKey: string) => {
    setSortBy({
      sortKey,
    });
  };

  const sortHelper = () => {
    if (sortBy?.sortKey) {
      const sortedList = mockRestaurantDataList;
      sortBy?.sortKey === 'Name'
        ? sortedList.sort((a: RestaurantCardProps, b: RestaurantCardProps) =>
            a.name.localeCompare(b.name)
          )
        : sortedList.sort((a: RestaurantCardProps, b: RestaurantCardProps) =>
            a.dateAdded.localeCompare(b.dateAdded)
          );
      setRenderDataList(sortedList);
      setSortBy({
        sortKey: '',
      });
    }
  };

  useEffect(() => {
    sortHelper();
  }, []);

  useEffect(() => {
    sortHelper();
  }, [sortBy]);
  /*****************************************************************************************/

  return (
    <>
      <Typography variant="h1">Restaurants Visited</Typography>
      <Typography>By yours truely</Typography>
      <Grid
        container
        spacing={2}
        p={1}
        m={1}
        gap={2}
        direction={isMobileOrTablet ? 'column' : 'row'}
      >
        <Grid xs={isMobileOrTablet ? 12 : 2}>
          <SideBar onSort={onSortCallback} />
        </Grid>
        <Grid xs={isMobileOrTablet ? 12 : 8}>
          <RestaurantsView restaurantList={renderDataList} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
