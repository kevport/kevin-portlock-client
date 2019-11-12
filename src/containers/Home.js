import React from "react";
import "./Home.css";
import HomeImg from "./home.jpg";

var sectionStyle = {
    //width: "100%",
    //height: "400px",
    backgroundImage: `url(${HomeImg})`,
    //backgroundSize: "cover",
    //backgroundPosition: "center center no-repeat"
};

class Home extends React.Component {
    render() {
        return (
            <section id="intro" style={ sectionStyle } className="intro-section pb-2">
                <div className="container text-center">
                    <h1 data-animate="fadeInDown" className="animated fadeInDown text-shadow mb-5">Kevin Portlock, Web Solutions</h1>
                    <p data-animate="slideInUp" className="animated slideInUp h3 text-shadow text-400">
                        <i>"Grind some Java and JavaScript in to some HTML and CSS to give yourself a beautiful and efficient web solution"</i>.</p>
                </div>
            </section>
        );
    }
}

export default Home;