import { Routes, Route } from 'react-router-dom';
import CreatCompt from './views/CreatCompt';
import Login from './views/Login';
import './App.css';
import Accueil from './views/Accueil';
import ListeMessage from './Components/ListeMessage.jsx'
import Profil from './Components/Profil';
import MyProfil from './Components/MyProfil.jsx';
import Search from './Components/Search.jsx'
import Setting from './Components/Setting.jsx';


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
