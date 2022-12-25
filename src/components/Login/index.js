import {Component} from 'react'
import { Link ,Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
    state = {email:'',password:'',erroMsg:'',isErrorShow:false}

    onSubmitUserDetails = event => {
        event.preventDefault()
        const {email,password} = this.state
        console.log(password)
        const getData = localStorage.getItem("UserAccountData")
        const convert = JSON.parse(getData)
        console.log(convert[0].result)
        const emailId = convert[0].result.filter(eachData => (eachData.email === email))
        const passwordUser = convert[0].result.filter(each => (each.password === password))
        
        if(emailId.length !== 0 && passwordUser.length !== 0 ){
            console.log("Login success")
            localStorage.setItem("Email",email)
            localStorage.setItem("Password",password)
            this.setState({isErrorShow:false})
        }else{
            console.log("Faild")
            this.setState({erroMsg:"Wrong Password or Email!",isErrorShow:true})
        }
       
    }

    onChangeEmail = event => {
        this.setState({email:event.target.value})
    }

    onChangePasswor = event => {
        this.setState({password:event.target.value})
    }

    render(){
        const getEmail = localStorage.getItem("Email")
    const getPassword = localStorage.getItem("Password")
    if (getEmail !== null && getPassword !== null)  {
        return <Redirect to="/" />
      }
        const {email,password,isErrorShow,erroMsg} = this.state
        return(
           <div className='login-main-container'>
              <form className='login-sub-container' onSubmit={this.onSubmitUserDetails}>
                <h1 className='login-main-heading'>Login</h1>
                <label  htmlFor='emailid' className='labele-heading'>Email</label>
                <input onChange={this.onChangeEmail} value={email} id='emailid'  className='input-container' type="text" placeholder="Enter Your Email"/>
                <label  htmlFor='password' className='labele-heading'>Password</label>
                <input onChange={this.onChangePasswor} value={password} id='password' className='input-container' type="password" placeholder="Enter Your Password"/>
                <button className='btn' type='submit'>Login</button>
                {isErrorShow && <p className='error'>*{erroMsg}</p>}
                <Link to="/create-account">
                <p className='create-account-para'>Create Your Account</p>
                </Link>
              </form>
           </div>
        )
    }
}

export default Login