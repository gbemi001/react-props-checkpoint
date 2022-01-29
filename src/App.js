import React from "react";
import {ProfileComponent} from "./profile/ProfileComponent.js";
import gbemiYoloye from "./profile/gbemiYoloye.jpg"
import './App.css';
import { ImageComponent } from "./profile/ImageComponent.js";

function App() {
  const handleName = e =>{
    e.preventDefault();
    alert("Hello, Gbemi here" );
  }
  return (
    <div className="App">
      <ImageComponent>{gbemiYoloye}</ImageComponent>
      <ProfileComponent fullName = "Yoloye Oluwagbemi" handleName = {handleName} profession = "Football Coach" bio = "Learned Full Stack JS at GoMyCode"/>
    </div>
  );
}

export default App;
