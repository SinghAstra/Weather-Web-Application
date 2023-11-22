import { WeatherProvider } from './Context';
import Home from './pages/Home';
import Weather from './pages/Weather';
import { Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <WeatherProvider>
      <div>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </WeatherProvider>
  )
}

export default App
