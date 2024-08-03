import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { mockRestaurantDataList } from './mocks/RestaurantData.mock'
import { RestaurantView } from './pages/RestaurantsView'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <RestaurantView restaurantList={mockRestaurantDataList} />
    </>
  )
}

export default App