import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger,SplitText} from "gsap/all";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";
import Luxury from "./components/Luxury.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <NavBar/>
            <Hero/>
           {/*<Cocktails/>*/}
            <About/>
            <Luxury/>
            <Art/>
            <Menu/>
            <Contact/>
        </main>

    )
}
export default App
