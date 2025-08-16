import { Star, Sparkles, Heart } from "lucide-react"
import ReactPlayer from 'react-player'
export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-#f5f5dc via-#f5f5dc to-yellow-95000 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-yellow blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-white blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-cyan-300 blur-xl animate-pulse delay-500"></div>
            </div>

            {/* Hero Content */}
            <div className="relative flex z-10 container mx-auto px-4 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 bg-yellow border border-black rounded-full px-4 py-2 text-black text-sm font-medium backdrop-blur-sm">
                            <Sparkles className="w-4 h-4"/>
                        </div>

                        {/* Main Headline */}
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                            Elevate Playtime with{" "}
                            <span className="text-transparent bg-gradient-to-r from-yellow to-black bg-clip-text">
                Luxurious Comfort
              </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl  leading-relaxed max-w-2xl">
                            Explore our collection of premium carpets designed for your little ones' dream rooms. Where
                            luxury meets
                            playfulness in perfect harmony.
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm ">
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-green-300"/>
                                Hypoallergenic Materials
                            </div>
                            <div className="flex items-center gap-2">
                                <Heart className="w-4 h-4 text-green-300"/>
                                Child-Safe Design
                            </div>
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-green-300"/>
                                Easy to Clean
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        {/*<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">*/}
                        {/*    <button*/}
                        {/*        size="lg"*/}
                        {/*        className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"*/}
                        {/*    >*/}
                        {/*        <Sparkles className="w-5 h-5 mr-2" />*/}
                        {/*        Discover the Magic*/}
                        {/*    </button>*/}
                        {/*    <button*/}
                        {/*        variant="outline"*/}
                        {/*        size="lg"*/}
                        {/*        className="border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 bg-transparent"*/}
                        {/*    >*/}
                        {/*        View Collection*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        {/* Trust indicators */}
                        {/*<div className="flex items-center gap-8 justify-center lg:justify-start text-cyan-300 text-sm">*/}
                        {/*    <div className="text-center">*/}
                        {/*        <div className="font-bold text-lg text-white">10,000+</div>*/}
                        {/*        <div>Happy Families</div>*/}
                        {/*    </div>*/}
                        {/*    <div className="text-center">*/}
                        {/*        <div className="font-bold text-lg text-white">5-Star</div>*/}
                        {/*        <div>Average Rating</div>*/}
                        {/*    </div>*/}
                        {/*    <div className="text-center">*/}
                        {/*        <div className="font-bold text-lg text-white">100%</div>*/}
                        {/*        <div>Safe Materials</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div>
                        <video
                            src="/videos/output.mp4"
                            autoPlay={true}
                            loop
                            muted
                            playsInline
                            width="100px"
                            height="20px !important"
                            className="rounded-lg  pl-15 relative object-center transform hover:rotate-1 rounded-2xl"
                        />
                    </div>


                </div>
                {/* Right Content - Hero Image */}


            </div>


            {/* Bottom wave decoration */}
        </main>
    )
}
