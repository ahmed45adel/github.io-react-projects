import './App.css';
import Counter from './components/Counter/Counter';
import NavBar from './components/NavBar/NavBar';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from './components/HomePage/HomePage';
import Todo from './components/ToDo/ToDo';


function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={Counter} path="/counter" />
          <Route component={Shop} path="/shop" exact />
          <Route component={Product} path="/shop/:id" />
          <Route component={Todo} path="/todo" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
