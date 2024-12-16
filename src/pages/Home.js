import React from "react";
import image from "../Assets/Images/téléchargement.png"

function Home() {
  return (
    <div className="bg-blue-400 h-screen flex flex-col  self-center items-center p-5">
      <div className="m-8 h-2/6 w-2/6" >
        <img className="h-full w-full" src={image} alt="apiImage"/>
      </div>
      <div className="text-2xl text-white border-4 rounded-lg p-3 text-center">
        Bienvenue dans le Travail Pratique Finale du cours Collecte et interpretation de données.
      </div>
    </div>
  );
}

export default Home;
