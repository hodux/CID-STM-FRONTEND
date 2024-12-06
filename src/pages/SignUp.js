import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Signup() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordNotMatch, setPasswordNotMatch] = useState("");

  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setEmailError(validateEmail(inputEmail) ? "" : "Please enter a valid email address.");
  };

  const handlePassword1Change = (e) => {
    const inputPassword = e.target.value;
    setPassword1(inputPassword);
    setPasswordError(validatePassword(inputPassword) ? "" : "Password must be at least 8 characters, include a number, a letter, and a special character.");
  };

  const handlePassword2Change = (e) => {
    const inputPassword = e.target.value;
    setPassword2(inputPassword);
    setPasswordNotMatch(inputPassword === password1 ? "" : "Passwords do not match.");
  };

  const togglePasswordVisibility1 = () => setPasswordVisible1(!passwordVisible1);
  const togglePasswordVisibility2 = () => setPasswordVisible2(!passwordVisible2);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Create Your Account</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full px-4 py-2 border ${
                emailError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              } rounded-lg`}
              placeholder="Enter your email"
            />
            <p className="text-sm text-red-500 mt-1">{emailError}</p>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible1 ? "text" : "password"}
                id="password"
                value={password1}
                onChange={handlePassword1Change}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility1}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                <FontAwesomeIcon icon={passwordVisible1 ? faEyeSlash : faEye} />
              </button>
            </div>
            <p className="text-sm text-red-500 mt-1">{passwordError}</p>
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible2 ? "text" : "password"}
                id="confirm-password"
                value={password2}
                onChange={handlePassword2Change}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility2}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                <FontAwesomeIcon icon={passwordVisible2 ? faEyeSlash : faEye} />
              </button>
            </div>
            <p className="text-sm text-red-500 mt-1">{passwordNotMatch}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
