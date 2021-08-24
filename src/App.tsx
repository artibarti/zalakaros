import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/home';
import { AppNavbar } from './components/nav-bar';
import "./App.css";

function App() {
  return (
    <div className="p-0 m-0">
      <AppNavbar />
      <Home />
    </div>
  );
}

export default App;
