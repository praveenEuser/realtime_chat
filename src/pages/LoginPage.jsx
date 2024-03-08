import React,{useEffect, useState} from 'react'
import { useAuth } from '../utils/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

const LoginPage = () => {
    const {user, handleUserLogin} = useAuth()
    const navigate = useNavigate()

    const [credentials, setcredentials] = useState({
        email:'',
        password:''
    })

    useEffect(() =>{
    if(user){
        navigate('/')
    }
    }, [])

    const handleInputChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        setcredentials({...credentials, [name]:value})

    }

  return (
    <div className="auth--container">
        <div className="form--wrapper">
        <pre>                                  <img src="https://mailmeteor.com/logos/assets/PNG/Google_Chat_Logo_512px.png" alt="Chat Icon" width={200} class='center'/></pre> 
            <form onSubmit={(e) => {handleUserLogin(e, credentials)}}>
                <div className="feild--wrapper">
                    <label>Email:</label>
                    <input
                       type="email"
                       required
                       name="email"
                       placeholder="Enter your email..."
                       value={credentials.email}
                       onChange={handleInputChange}
                    />
                </div>
                <br></br>
                <div className="feild--wrapper">
                    <label>Password:</label>
                    <input
                       type="password"
                       required
                       name="password"
                       placeholder="Enter password..."
                       value={credentials.password}
                       onChange={handleInputChange}
                    />
                </div>

                <div className="feild--wrapper">
                    <br></br><input className="btn btn--lg btn--main" type="submit" value="Login"/>
                </div>
            </form>
            <p>Don't have a account? Register <Link to="/register">here</Link></p>
        </div>
    </div>
  )
}

export default LoginPage