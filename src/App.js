import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Login from './component/Login';
import AppIns from './component/AppIns';

function App() {
  return (
    <Router>
          <Routes>
              <Route path='/' element = {<Login/>} index />
              <Route path='/app' element={<AppIns/>} />
          </Routes>
    </Router>
  );
}

export default App;
