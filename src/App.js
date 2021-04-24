import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './Components/Scripts/Auth/Register';
import Login from './Components/Scripts/Auth/Login';
import Dashboard from './Components/Scripts/dashboard/Dashboard';
import Store from './Store';
import Header from './Components/Scripts/dashboard/Header';
import AddCategory from './Components/Scripts/dashboard/category/AddCategory';
import ViewCategory from './Components/Scripts/dashboard/category/ViewCategory';
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Header></Header>
        <Route exact path="/" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/add-category" component={AddCategory}/>
        <Route exact path="/view-category" component={ViewCategory}/>
      </Router>
    </Provider>
  );
}

export default App;
