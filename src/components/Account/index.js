import { Component } from 'react'
import Header  from '../Header'
import './index.css' 

class Account extends Component {
     state = {userData:[]}

     componentDidMount(){
      this.getUserData()
     }

     getUserData = async() => {
       const userId = localStorage.getItem("userId")
       const url = `https://spritle.onrender.com/user/${userId}`
       const options = {
        method:"GET"
       }
       const response = await fetch(url,options)
       const data = await response.json()
       if (response.ok === true){
        this.setState({userData:data})
       }
     }

     onClickDeleteAccount = async() => {
      const userId = localStorage.getItem("userId")
      const url = `https://spritle.onrender.com/delete/${userId}`
      const options = {
        method:"DELETE"
       }
        await fetch(url,options)
        localStorage.clear()
        const {history} = this.props 
        history.replace("/login")
       
     }

  render(){
    const {userData} = this.state 
    const {username,email,password,phonenumber} = userData 
    return(
      <div className='account-container'>
       <Header/>
       <div className='account-sub-container'>
       <img className='avatar-account' src='https://res.cloudinary.com/duv0mhzrm/image/upload/v1665994997/Avatar_hzuzbt.png' alt='account'/>
       <hr className='line'/>
       <h1 className='account-heading'><span className='question'>Username: </span>{username}</h1>
       <h1 className='account-heading'><span className='question'>EmailId: </span>{email}</h1>
       <h1 className='account-heading'><span className='question'>Password: </span>{password}</h1>
       <h1 className='account-heading'><span className='question'>Phone Number: </span>{phonenumber}</h1>
       <button onClick={this.onClickDeleteAccount} type='button' className='delete-btn'>Delete</button>
       </div>
      </div>
    )
  }
}


export default Account