import Topbar from "./componets/topbar/Topbar";
import Intro from "./componets/intro/Intro"
import Experience from "./componets/experience/Experience"
import Works from "./componets/works/Works"
import Contact from "./componets/contact/Contact"
import Menu from "./componets/menu/Menu"
import "./app.scss"
import React, {useState} from 'react'



function App() {
  const[menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen ={menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen ={menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className= "sections">
        <Intro/>
        <Experience/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
