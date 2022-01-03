import "./intro.scss"

export default function Intro(){
    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className = "imgContainer">
                    <img src="assets/face.jpg" alt="Picture of Myself"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, My name is</h2>
                    <h1>Melanie Sanchez</h1>
                    <h3>Computer Science and Engineering Student</h3>
                    <h3>University of Nevada Reno</h3>
                </div>
                <a href="#experience">
                    <img src="assets/down.png" alt="down arrow"/>
                </a>
            </div>

        </div>
    )
}