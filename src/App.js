// To store data
// localStorage.setItem('Name', 'Rahul');
// To retrieve data
// localStorage.getItem('Name');
// To clear a specific item
// localStorage.removeItem('Name');
// To clear the whole data stored in localStorage
// localStorage.clear();
// @media only screen and (min-width: 600px) for tab
//@media only screen and (min-width: 768px)  for desktop
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Account from './components/Account'
import './App.css'

const App = () => (
  <>
  <Switch>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/create-account' component={SignUp}/>
    <ProtectedRoute exact path='/' component={Home}/>
    <ProtectedRoute exact path='/account' component={Account}/>
  </Switch>
  </>
)

export default App