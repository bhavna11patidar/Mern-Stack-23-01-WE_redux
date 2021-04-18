import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './Components/Scripts/Auth/Register';
import Login from './Components/Scripts/Auth/Login';
import Store from './Store';
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Route exact path="/" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Router>
    </Provider>
  );
}

export default App;
