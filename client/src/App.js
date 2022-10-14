import './App.css';
import Home from './Home';
import SignupLogin from './SignupLogin';
import ReferringMiddlePage from './ReferringMiddlePage'
import { Params } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<SignupLogin />} />
        {/* <Route exact path='/:rid' element={<SignupLogin />} /> */}
        <Route path='/home/*' element={<Home />} />
        <Route path='/refer/:rid' element={<ReferringMiddlePage />} />
      </Routes>
    </div>
  );
}

export default App;
