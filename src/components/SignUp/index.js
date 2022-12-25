import {Component} from 'react'
import emailjs from '@emailjs/browser';
import './index.css'

class SignUp extends Component {
    state = {profile:"",username:"",dateOfBirth:"",email:"",address:"",phoneNumber:"",password:"" , confirmPassword:""} 

    
    onSubmitAccoutDetails = event => {
        event.preventDefault()
        const {profile,username,dateOfBirth,email,address,phoneNumber,password,confirmPassword} = this.state 
        localStorage.clear()
        
        if (password === confirmPassword){
            console.log("Correct")
            const userAccountDetails = 
               { result : [ {username:username},
                {dateOfBirth:dateOfBirth},
                {email:email},
                {address:address},
                {phoneNumber:phoneNumber},
                {password:password},
                {profile:profile} 
               ]
               }
               emailjs.sendForm('service_qpebd4r', 'template_cd89qhj', event.target, 'lFKbxeuECl8alAjcV')
               .then((result) => {
                   console.log(result.text);
               }, (error) => {
                   console.log(error.text);
               });
            const convertUserData = []
            convertUserData.push(userAccountDetails)
            localStorage.setItem("UserAccountData",JSON.stringify(convertUserData))
          const  {history} = this.props 
          history.replace("/login")


        }else{

            console.log("Wrong")
        }

    }
    
    
    onChangeProfile = event => {
        
        this.setState({profile:event.target.value})        
    }

    onChangeUsername = event => {
       this.setState({username:event.target.value})
    }

    onChangeDateOfBirth = event => {
        this.setState({dateOfBirth:event.target.value})
    }

    onChangeEmail = event => {
        this.setState({email:event.target.value})
    }

    onChangeAddress = event => {
        this.setState({address:event.target.value})
    }

    onChangePhoneNumber = event => {
        this.setState({phoneNumber:event.target.value})
    }

    onChangePassword = event => {
        this.setState({password:event.target.value})
    }

    onChangeConfirmPassword = event => {
        this.setState({confirmPassword:event.target.value})
    }

    render(){
        const {username,dateOfBirth,email,address,phoneNumber,password,confirmPassword} = this.state
      

        return(
           <div className='sign-up-main-container'>
            <h1 className='sign-up-main-hreading'>Create<span className='spr'> SPR</span><span className='it'>IT</span><span className='spr'>LE </span>Game Account</h1>
            <form className='sign-up-form-container' onSubmit={this.onSubmitAccoutDetails}>
            <div className='label-input-container'>
              <label htmlFor='username' className='label-para'>USERNAME<span className='mandatory'> *</span></label>
              <input value={username} onChange={this.onChangeUsername} placeholder='Username' id='username' type="text" className='input-sign-up'/>
              </div>
              <div className='label-input-container'>
              <label htmlFor='dob' className='label-para'>DOB<span className='mandatory'> *</span></label>
              <input value={dateOfBirth} onChange={this.onChangeDateOfBirth} placeholder='DOB'  id='dob' type="date" className='input-sign-up'/>
              </div>
              <div className='label-input-container'>
              <label htmlFor='email' className='label-para'>EMAIL<span className='mandatory'> *</span></label>
              <input onChange={this.onChangeEmail} value={email} placeholder='Email' id='email' type="email" className='input-sign-up'/>
              </div>
              <div className='label-input-container'>
              <label htmlFor='address' className='label-para'>ADDRESS</label>
              <input value={address} onChange={this.onChangeAddress} placeholder='Address' id='address' type="text" className='input-sign-up'/>
              </div>
              <div className='label-input-container'>
              <label htmlFor='phonenumber' className='label-para'>PHONE NUMBER<span className='mandatory'> *</span></label>
              <input value={phoneNumber} onChange={this.onChangePhoneNumber} placeholder='Phone Number' id='phonenumber' type="number" className='input-sign-up'/>
              </div>
              <div className='label-input-container'>
              <label htmlFor='password' className='label-para'>PASSWORD<span className='mandatory'> *</span></label>
              <input value={password} onChange={this.onChangePassword} placeholder='Password' id='password' type="password" className='input-sign-up'/>
              </div>
              <div className='label-input-container'>
              <label htmlFor='passwordre' className='label-para'>CONFORM PASSWORD<span className='mandatory'> *</span></label>
              <input value={confirmPassword} onChange={this.onChangeConfirmPassword} placeholder='Password' id='passwordre' type="password" className='input-sign-up'/>
              </div>
              <div className='label-input-container'>
              <label htmlFor='userprofile' className='label-para'>USER PROFILE</label>
              
              <input onChange={this.onChangeProfile} accept='image/png' className='profile' placeholder='User Profile' id='userprofile' type="file" />
              </div>
              
              <button className='submit-btn' type='submit'>Submit</button>
            </form>
           </div>
        )
    }
}

export default SignUp