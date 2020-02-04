import React from 'react';
import './App.css';

function App() {


 const ba = { photo:"/photo.jpg",

 Name:{firstName:"abderrahmen", lastName:"jendoubi"},

 profileLink: ""
 }
 let a =<div></div>
 if (ba.profileLink === "")
 {
 a=<div></div>
 }
 else
 {
   a=<button>zezeze</button>
 }
 
  return (
    <div>
    <img style={{width: "10%", marginLeft: "45%"}} alt="" src={ba.photo}></img>
    <h1 style={{ marginLeft: "45%"}}>{ba.Name.firstName}</h1>
    <h1 style={{ marginLeft: "45%"}}>{ba.Name.lastName}</h1>
    {a}
    </div>
  );
}

export default App;
