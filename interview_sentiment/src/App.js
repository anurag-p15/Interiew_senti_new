import logo from './logo.svg';
import './App.css';
import Body from './Home/body';
import Login from './Login/login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from './Dashboard/dashboard';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Body />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
