import { Routes, Route } from 'react-router-dom';
import CreatCompt from './views/CreatCompt';
import Login from './views/Login';
import './App.css';
import Accueil from './views/Accueil';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<CreatCompt />} />
        <Route path='/login' element={<Login />} />
        <Route path='/accueil' element={<Accueil/>}/>
      </Routes>
    </div>
  );
}

export default App;
