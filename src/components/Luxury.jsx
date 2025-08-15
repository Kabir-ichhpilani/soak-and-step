

const Luxury = () => {

    return (
        <section>
            <div id="about">
                <div className="md:px-0 mb-30 -mt-20 px-5">
                    <div >
                        <h1 className="font-serif text-xl md:text-2xl lg:text-5xl font-normal text-black leading-tight">
                            From playful patterns for little feet to the plush elegance of our{" "}
                            <span className="text-transparent bg-gradient-to-r from-yellow to-black bg-clip-text">
     luxury rabbit fur collection
  </span>
                            , there’s a{" "}<span className="heading text-transparent bg-gradient-to-r from-yellow to-black bg-clip-text">Soak & Step</span>  rug for every stage of life.
                        </h1>

                    </div>

                </div>
                <div className="pt-15 -mb-20">


                <div className="top-grid">
                    <div className="md:col-span-3">
                        <div   className="noisy">
                            <img src= "/images/r1.avif"/>
                        </div>
                    </div>
                    <div className="md:col-span-6">
                        <div className="noisy">
                            <img src= "/images/r2.webp"/>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div className="noisy">
                            <img src= "/images/r3.jpg"/>
                        </div>
                    </div>
                </div>
                <div className="bottom-grid">
                    <div className="md:col-span-8">
                        <div className="noisy">
                            <img src= "/images/r4.webp"/>
                        </div>
                    </div>
                    <div className="md:col-span-4">
                        <div className="noisy">
                            <img src= "/images/r5.webp"/>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </section>
    )
}
export default Luxury;
