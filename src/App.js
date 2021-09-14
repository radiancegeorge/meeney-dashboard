import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import Trending from "./pages/Trending";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Switch>
            <ProtectedRoute exact path="/page" component={Home} />
            <ProtectedRoute exact path="/" component={Trending} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
