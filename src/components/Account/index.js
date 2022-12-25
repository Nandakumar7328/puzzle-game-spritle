import Header  from '../Header'
import './index.css' 

const Account = props => {
    const getData = localStorage.getItem("UserAccountData")
    const convert = JSON.parse(getData)
    const {email} = convert[0].result[2]
    const {username} = convert[0].result[0]
    const {dateOfBirth}  = convert[0].result[1]
    const {address} = convert[0].result[3]
   const onClickDeleteAccount = () => {
    localStorage.clear()
    const {history} = props 
    history.replace("/login")
   }

    return(
      <div className='account-container'>
       <Header/>
       <div className='account-sub-container'>
       <img className='avatar-account' src='https://res.cloudinary.com/duv0mhzrm/image/upload/v1665994997/Avatar_hzuzbt.png' alt='account'/>
       <hr className='line'/>
       <h1 className='account-heading'><span className='question'>Username: </span>{username}</h1>
       <h1 className='account-heading'><span className='question'>EmailId: </span>{email}</h1>
       <h1 className='account-heading'><span className='question'>Date of Birth: </span>{dateOfBirth}</h1>
       <h1 className='account-heading'><span className='question'>Address: </span>{address}</h1>
       <button onClick={onClickDeleteAccount} type='button' className='delete-btn'>Delete</button>
       </div>
      </div>
    )
}

export default Account