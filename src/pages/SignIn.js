import React, {useState} from "react";
import { Link } from "react-router-dom"

function SignIn() {
    const baseUrl = "";
    const loginValues = {
        usernameOrEmail: "",
        password: "",
    }
    const [login, setLogin] = useState(loginValues);
    const handleChange = (e) => {
        setLogin(
            {
                ...login,
                [e.target.name]: [e.target.value]
            }
        );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            usernameOrEmail:login.usernameOrEmail[0],
            password:login.password[0]
        }
        console.log(userData);
        // axios.post(baseURL, userData,{
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }})
        //     .then((res) =>{ console.log(res.status, res.data)})
        //     .catch(err => console.log(err));
    }

  return (
    <div className="bg-blue-400 h-screen w-screen self-center items-center p-5 flex">
        <form className='border-8 p-8 rounded-2xl m-8 bg-white border-white h-4/8 w-2/4 mx-auto shadow-xl shadow-blue-700' onSubmit={handleSubmit}>
            <div className="flex flex-col h-full">
                <h1 className='text-4xl text-center'>Login</h1>
                <div className='m-5 h-4/5'>
                    <span style={{color: "red"}}>*</span>
                    <input type="text" name="usernameOrEmail" placeholder='email or username' onChange={handleChange}
                        className='border-2 border-gray-200 rounded bg-gray-100 h-full w-full'/>
                </div>
                <div className='m-5'>
                    <span style={{color: "red"}}>*</span>
                    <input type="password" name="password" placeholder='password' onChange={handleChange}
                           className='border-2 border-gray-200 rounded bg-gray-100 h-full w-full'/>
                </div>
                <div className='m-5'>
                    <button type="button" className="p-2 bg-blue-400 rounded-2xl w-full hover:bg-blue-700" onClick={handleSubmit}>
                        login
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SignIn;
