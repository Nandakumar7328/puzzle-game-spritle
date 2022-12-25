import { Component } from 'react'
import {withRouter,Link} from 'react-router-dom'
import './index.css' 

class Header extends Component {  
 onClickLogout = () => {
       localStorage.removeItem("Email")
       localStorage.removeItem("Password")
       const {history} = this.props
       history.replace('/login')
    }
    render(){
    return(
      <nav className='header-container'>
        <Link to="/" className='link'>
        <h1 className='logo'>SPR<span className='it'>IT</span>LE</h1>
        </Link>
        <div className='nav-sub-container'>
            <Link to="/account">
            <img className='avatar' src='https://res.cloudinary.com/duv0mhzrm/image/upload/v1665994997/Avatar_hzuzbt.png' alt='account'/>
            </Link>
            <button onClick={this.onClickLogout} type='button' className='btn-lagout'>Logout</button>
        </div>
      </nav>
    )
    }
}

export default withRouter(Header)