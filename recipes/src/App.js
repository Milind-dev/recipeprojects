import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Localfiles from './components/foodsearch/LocalFiles';
import Dashboards from './components/Dashboard/Dashboards';
import Register from './components/Auth/Register';
import Logins from './components/Auth/Login';
import mainheaderimg from "./asset/images/recipeheaderimg.jpeg"

function App() {
  return (
    <div className="App">
     <p style={{width:"142px",borderRadius:"1vh",margin:"2vh",boxShadow:"3vh 1vh 3vh"}} className='searchheader'>Search Food Apis</p>
    <img style={{width:"142px",borderRadius:"1vh",margin:"2vh",boxShadow:"3vh 1vh 3vh"}} src={mainheaderimg} alt="food img" />
      <Router>
        <Routes>
          <Route exact path='/localfile' element={<Localfiles />} />
          <Route exact path='/' element={<Dashboards />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Logins />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
