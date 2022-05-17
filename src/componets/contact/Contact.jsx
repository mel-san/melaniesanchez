import "./contact.scss"
import React from "react"
import {ContactMail} from "@material-ui/icons"

export default function Contact(){

    return (
        <div className= "contact" id = "contact">
            <div className="left">
                <div className="itemContainer">
                <ContactMail className = "icon"/>
                </div>
            </div>
            <div className = "right">
            <h1>Send me an messsage at: </h1>
            <h1>melaniesanchez@nevada.unr.edu</h1>
            </div>
        </div>
    )
}