import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Login from './component/Login';
import AppIns from './component/AppIns';
import AuthProvider from './AuthProvider';

function App() {
  return (
    <Router>
          <AuthProvider>
            <Routes>
                <Route path='/' element = {<Login/>} index />
                <Route path='/app/*' element={<AppIns/>} />
            </Routes>
          </AuthProvider>
    </Router>
  );
}

export default App;
