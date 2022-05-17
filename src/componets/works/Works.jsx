import "./works.scss"
import React from "react"
import {useState} from "react"
export default function Works(){
    const [currentSlide,setCurrentSlide] = useState(0);

    const data = [
        {
          id: "1",
          icon: "assets/javaLogo.png",
          title: "Color Selector",
          desc:
            "Java swing Application that allows the user to select from a scroll selection of colors. When a color is selected,the user is able to change the RGB values and update the color",
          img:
            "assets/ColorSelector.png",
          link: 
          "https://github.com/mel-san/ColorSelector",
        },
        {
          id: "2",
          icon: "assets/C++.png",
          title: "Mock Car Agency",
          desc:
            "Terminal Based UI. Allows a user to read in information from a file, see available cars, their features, and enables them to rent cars/see the total price for a certain amount of days",
          img:
          "assets/MockCarAgency.png",
          link: 
          "https://replit.com/@MelanieSanchez2/Mock-Car-Agency#main.cpp",
        }
      ];

    const handleClick = (way) => {
        way == "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide -1: 1)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    return(
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className= "imgContainer">
                                    <img src = {d.icon} alt="Language Logo"/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <a href={d.link}>Source Code</a>
                            </div>
                         
                        </div>
                        <div className="right">
                            <img src= {d.img} alt="Project UI"/>
                            </div>   
                    </div>
                </div>
            
            ))}
            </div>


            <img src="assets/rightArrow.png" className="arrow left" alt="left arrow" onClick={() => handleClick("left")} />
            <img src="assets/rightArrow.png" className="arrow right" alt="right arrow" onClick={() => handleClick()} />

        </div>
    );
}