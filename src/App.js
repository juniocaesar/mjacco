import "./App.css";
import Sidebar from './components/Sidebar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <Router>

      <Sidebar />
      </Router>
    </div>
  );
}
export default App;

