import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import AllRoutes from './AllRoutes';
function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
