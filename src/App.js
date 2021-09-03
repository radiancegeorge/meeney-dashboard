
import './App.css';
import {
    BrowserRouter as Roter,
    Route,
    Switch
} from "react-router-dom"
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Roter>
          <div className="container">
            <Switch>
              <Route exact path="/" render={Home} />
            </Switch>
          </div>
      </Roter>
    </div>
  );
}

export default App;
