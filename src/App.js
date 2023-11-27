import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
import WeatherDetailPage from './pages/WeatherDetailPage'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/weather" Component={WeatherPage} />
        <Route path="/weather/details" Component={WeatherDetailPage} />
      </Routes>
    </Router>
  );
}

export default App;
