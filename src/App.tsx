import './App.css'
import { mockRestaurantDataList } from './mocks/RestaurantData.mock'
import { RestaurantsView } from './pages/RestaurantsView'
import { SideBar } from './components/SideBar'
import { Grid } from '@mui/material'

function App() {
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  // const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  // const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <h1>Restaurants Visited (by yours truely)</h1>
      <Grid container spacing={2} p={1} m={1} gap={2}>
        <Grid xs={2}>
          <SideBar />
        </Grid>
        <Grid xs={8}>
          <RestaurantsView restaurantList={mockRestaurantDataList} />
        </Grid>
      </Grid>
      {/* <Grid container spacing={2} p={1} m={1} gap={2}>
        <Grid item xs={isSmallScreen ? 12 : 2}>
          <SideBar />
        </Grid>
        <Grid item xs={isSmallScreen ? 12 : isMediumScreen ? 8 : 10}>
          <RestaurantsView restaurantList={mockRestaurantDataList} />
        </Grid>
      </Grid> */}
    </>
  )
}

export default App
