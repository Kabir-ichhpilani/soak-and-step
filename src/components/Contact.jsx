import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: "power1.inOut"
        })

        timeline
            .from(titleSplit.words, {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .from('#contact h3, #contact p', {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .to('#f-right-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            }).to('#f-left-leaf', {
            y: '-50', duration: 1, ease: 'power1.inOut'
        }, '<')
    })

    return (
        <footer id="contact">


            <div className="content">
                <h2>Where to Find Us</h2>

                <div>
                    <h3>Our Address</h3>
                    <p>Soak & Step</p>
                    <p>Panipat-132103, Haryana, India</p>
                </div>

                <div>
                    <h3>Contact Us</h3>

                    <p>contact@soakandstep.com</p>
                </div>

                <div>
                    <h3>Manufactured By</h3>
                    <p>Himvikas Industries</p>
                    <p>Jattal Road, Panipat-132103</p>
                </div>

                <div>
                    <h3>Socials</h3>
                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <img src={social.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact
