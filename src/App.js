import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ProfileComp from './components/ProfileComp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/profile' component={ProfileComp} />
        </Switch>
      </BrowserRouter>
      <footer className="container mt-5 footer">
          <div className="text-center">
              Copyright &copy; 2021 IIT BHU Team - Hell Yeah
          </div>
      </footer>
    </div>
  );
}

export default App;