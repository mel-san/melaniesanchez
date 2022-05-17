import "./topbar.scss"
import React from "react"
import {MailOutline, GitHub} from "@material-ui/icons"
export default function Topbar({menuOpen,setMenuOpen}){
    return(
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className ="left">
                    <a href ="#intro" className="logo">
                         Melanie Sanchez 
                    </a>

                    <div className="itemContainer">
                        <MailOutline className = "icon"/>
                        <span>melaniesanchez@nevada.unr.edu</span>
                        <GitHub className = "icon"/>
                        <span>mel-san</span>
                    </div>

                </div>
                <div className = "right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>

                </div>


            </div>
        </div>
    )
}