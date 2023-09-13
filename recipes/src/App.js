import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Localfiles from './components/foodsearch/LocalFiles';
import Dashboards from './components/Dashboard/Dashboards';
import Register from './components/Auth/Register';
import Logins from './components/Auth/Login';

function App() {
  return (
    <div className="App">
     <p className='searchheader'>Search Food Apis</p>
      <Router>
        <Routes>
          <Route exact path='/localfile' element={<Localfiles />} />
          <Route exact path='/' element={<Dashboards />} />
          {/* <Route  path='/foodproducts' element={<FoodApiSearch />} /> */}
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Logins />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
