import './App.css'
import { mockRestaurantDataList } from './mocks/RestaurantData.mock'
import { RestaurantsView } from './pages/RestaurantsView'
import { SideBar } from './components/SideBar'
import { Grid, ThemeProvider, Typography, useMediaQuery } from '@mui/material'
import theme from './theme'

function App() {
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.between('xs', 'md'));

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Restaurants Visited</Typography>
      <Typography>By yours truely</Typography>
      <Grid container spacing={2} p={1} m={1} gap={2} direction={isMobileOrTablet ? 'column' : 'row'}>
        <Grid xs={isMobileOrTablet ? 12 : 2}>
          <SideBar />
        </Grid>
        <Grid xs={isMobileOrTablet ? 12 : 8}>
          <RestaurantsView restaurantList={mockRestaurantDataList} />
        </Grid>
      </Grid>
    </ThemeProvider >
  )
}

export default App
