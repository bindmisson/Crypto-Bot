import './App.css';
import AdminSignup from './AdminSignup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminPanel from './AdminPanel';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Routes> */}
      <AdminPanel />
        {/* <AdminSignup /> */}
        {/* <Route path='/' element={<AdminSignup />} /> */}
      {/* </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App