import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const RegisterPage = () => {

    const {handleUserRegister} = useAuth()

    const [credentials, setcredentials] = useState({
        name:'',
        email:'',
        password1:'',
        password2:''
    })

    const handleInputChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        setcredentials({...credentials, [name]:value})

    }
  return (
    <div className="auth--container">
        <div className="form--wrapper">
       <pre>                                  <img src="https://mailmeteor.com/logos/assets/PNG/Google_Chat_Logo_512px.png" alt="Chat Icon" width={200} class='center'/></pre> 
            <form onSubmit={(e) => {handleUserRegister(e, credentials)}}>
                <div className="feild--wrapper">
                    <label>Name:</label>
                    <input
                       type="text"
                       required
                       name="name"
                       placeholder="Enter your name..."
                       value={credentials.name}
                       onChange={handleInputChange}
                    />
                </div>
                <br></br>
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
                       name="password1"
                       placeholder="Enter password..."
                       value={credentials.password1}
                       onChange={handleInputChange}
                    />
                </div>
                <br></br>
                <div className="feild--wrapper">
                    <label>Confirm Password:</label>
                    <input
                       type="password"
                       required
                       name="password2"
                       placeholder="Confirm your password..."
                       value={credentials.password2}
                       onChange={handleInputChange}
                    />
                </div>

                <div className="feild--wrapper">
                    <br></br><input className="btn btn--lg btn--main" type="submit" value="Register"/>
                </div>
            </form>
            <p>Already have a account? Login <Link to="/login">here</Link></p>
        </div>
    </div>
  )
}

export default RegisterPage