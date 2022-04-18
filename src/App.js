import './App.css';
import ListaPage from './pages/ListaPage';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <LoginPage />
        <ListaPage />
      </div>
    </div>
  );
}

export default App;
