import React from "react";
import { Link } from "react-router-dom"

function SignIn() {
  return (
    <div className="bg-blue-400 h-screen w-screen flex flex-col  self-center items-center p-5">
      <div className="col-12">
        <h1>Création d'un compte</h1>
        <form>
            <div>
                Nom complet : <span style={{color: "red"}}>*</span>
                <input type="text" name="nom" maxLength={30}/>
            </div>
            <div>
                Email : <span style={{color: "red"}}>*</span>
                <input  type="text" name="email"/>
            </div>
            <div>
                Password: <span style={{color: "red"}}>*</span>
                <input  type="password" name="password"/>
            </div>
            <br></br>
            <br/>
            <p> <span className="text-danger">
                {formErrors.termsOfUse}
                {formErrors.value}
                {formErrors.licence}
                {formErrors.email}
                </span>
                <span className="text-success">{formErrors.success}</span>
            </p>
            <button type="button" className="">
                Inscrivez-vous
            </button>
        </form>
            </div>
    </div>
  )
}

export default SignIn;
