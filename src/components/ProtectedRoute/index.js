import {Route, Redirect} from 'react-router-dom'
const ProtectedRoute = props => {
    const getEmail = localStorage.getItem("Email")
    const getPassword = localStorage.getItem("Password")
    console.log(getEmail)
  if (getEmail === null && getPassword === null)  {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute