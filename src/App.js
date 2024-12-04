import image from "./Assets/Images/téléchargement.png"
function App() {
  return (
    <div className="bg-blue-400 h-screen w-screen flex flex-col  self-center items-center p-5">
      <div className="m-8 h-2/6 w-2/6" >
        <img className="h-full w-full" src={image} alt="apiImage"/>
      </div>
      <div className="text-2xl text-white border-4 rounded-lg p-3 text-center">
        Bienvenue dans le Travail Pratique Finale du cours Collecte et interpretation de données.
      </div>
      <div>
        <button className="bg-gray-300 rounded-l-lg rounded-br-lg m-8 p-5 text-white hover:bg-gray-900">Signin</button>
        <button className="bg-gray-300 rounded-r-lg rounded-tl-lg m-8 p-5 hover:bg-gray-900 text-white">Signup</button>
      </div>
    </div>
  );
}
export default App;
