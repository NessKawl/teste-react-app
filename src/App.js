import './App.css';

// 2 - reaproveitando estrutura
import { Outlet } from 'react-router-dom';

// 4 - Navegando entre páginas
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
