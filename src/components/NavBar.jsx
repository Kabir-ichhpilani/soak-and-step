import {navLinks} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

const NavBar = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        const timeteen = gsap.timeline({
            ScrollTrigger: {
                trigger: "nav",
                start: "bottom top",

                scrub: true,
            }
        });
        timeteen.fromTo('nav',{backgroundColor: "transparent"},
            {backgroundColor:"#f5f5dc50",
                backdropFilter: "blur(10px)",
                duration: 1, ease: "power1.inOut",
            });
    })
    return (
        <nav>
            <div>
            <a href="#home" className="flex items-center gap-2 h-10 w-10">
                <img src="/images/logo.png"  className="[filter:invert(1)_brightness(0)_contrast(100%)]"/>
                <p>SOAK & STEP</p>

            </a>
            <ul>
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                    ))}
            </ul>
            </div>
        </nav>
    )
}
export default NavBar
