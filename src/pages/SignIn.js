import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const baseURL = "https://localhost:3001/api/login";

function SignIn() {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        identifier: "",
        password: "",
    });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!login.identifier || !login.password) {
            setError("Please fill in all fields.");
            return;
        }

        setError("");
        const userData = {
            identifier: login.identifier,
            password: login.password
        }
        try {
            const response = await axios.post(baseURL, userData);
            localStorage.setItem('token', response.data.token);
            if(localStorage.getItem('token')){
                navigate('/');
            }

        } catch (err) {
            setError("Invalid login credentials. Please try again.");
            console.error("Error occured", err);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-blue-400">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Sign In</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="identifier"
                            className="block text-sm font-medium text-gray-600 mb-1">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            id="identifier"
                            name="identifier"
                            value={login.identifier}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your username or email" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                name="password"
                                value={login.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password" />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-600">
                                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                        Sign In
                    </button>
                </form>
                <p className="text-sm text-gray-500 text-center mt-4">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default SignIn;
