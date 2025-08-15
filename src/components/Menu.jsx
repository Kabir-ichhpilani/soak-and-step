
import { allCocktails } from '../../constants/index.js'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Menu = () => {
    const contentRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
        gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
            xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
        })
        gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
            yPercent: 0, opacity: 100, ease: 'power1.inOut'
        })
        gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
            yPercent: 0, opacity: 100, ease: 'power1.inOut'
        })
    }, [currentIndex]);

    const totalCocktails = allCocktails.length;

    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails;

        setCurrentIndex(newIndex);
    }

    const getCocktailAt = (indexOffset) => {
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    return (
        <section id="menu" aria-labelledby="menu-heading">


            <h2 id="menu-heading" className="sr-only">
                Sample Carpets
            </h2>

            <div className="cocktail-tabs" aria-label="Cocktail Navigation">
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button key={cocktail.id} className={`
				${isActive
                            ? 'text-black border-black'
                            : 'text-black/50 border-black/50'}
			 `}	onClick={() => goToSlide(index)}
                        >
                            {cocktail.name}
                        </button>
                    )
                })}
            </div>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img
                            src="/images/right-arrow.png"
                            className="[filter:invert(1)_brightness(0)_contrast(100%)]"
                            alt="right-arrow"
                        />

                    </button>

                    <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img
                            src="/images/left-arrow.png"
                            className="[filter:invert(1)_brightness(0)_contrast(100%)]"
                            alt="right-arrow"
                        />

                    </button>
                </div>

                <div className="cocktail">
                    <img src={currentCocktail.image} alt={"hel"} className="object-contain"/>
                </div>

                <div className="recipe">
                    <div ref={contentRef} className="info">

                        <p id="title" className="text-black">{currentCocktail.name}</p>
                    </div>

                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Menu