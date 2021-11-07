import "./App.css";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App p-0 m-0 overflow-x-hidden ">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
