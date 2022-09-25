import './App.css';
import Home from './Home';
import SignupLogin from './SignupLogin';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<SignupLogin />} />
        {/* <Route exact path='/:rid' element={<SignupLogin />} /> */}
        <Route path='/home/*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
