
import { Star, Sparkles, Heart } from "lucide-react"

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-black to-yellow-95000 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-yellow blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-white blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-cyan-300 blur-xl animate-pulse delay-500"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-yellow border border-black rounded-full px-4 py-2 text-black text-sm font-medium backdrop-blur-sm">
                            <Sparkles className="w-4 h-4" />

                        </div>

                        {/* Main Headline */}
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Elevate Playtime with{" "}
                            <span className="text-transparent bg-gradient-to-r from-yellow to-white bg-clip-text">
                Luxurious Comfort
              </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl  leading-relaxed max-w-2xl">
                            Explore our collection of premium carpets designed for your little ones' dream rooms. Where luxury meets
                            playfulness in perfect harmony.
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm ">
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow" />
                                Hypoallergenic Materials
                            </div>
                            <div className="flex items-center gap-2">
                                <Heart className="w-4 h-4 text-yellow" />
                                Child-Safe Design
                            </div>
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-yellow" />
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

                    {/* Right Content - Hero Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/images/abt1.jpg"
                                alt="Luxury children's carpet in a beautifully designed bedroom"
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
                            <Heart className="w-6 h-6 text-red-500" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-cyan-500 rounded-full p-4 shadow-lg animate-pulse">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 120" className="w-full h-20 fill-blue-950/10">
                    <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
                </svg>
            </div>
        </main>
    )
}
