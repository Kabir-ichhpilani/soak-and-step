import React from 'react'

import {Heart, Sparkles, Star} from "lucide-react";

const Menu = () => {
    return (
        <div>
            <section className="py-16 lg:py-24 ">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className=" text-4xl md:text-5xl font-extralight heading text-black mb-6">Why Choose Soak & Step</h2>
                        <p className="text-lg  max-w-3xl mx-auto leading-relaxed">
                            Experience the perfect blend of artisanal craftsmanship, sustainable practices, and timeless design
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Handwoven Luxury */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-serif text-2xl font-extralight text-black mb-4">Handwoven Luxury</h3>
                            <p className=" leading-relaxed">
                                Each rug is meticulously crafted by skilled artisans using traditional techniques passed down through
                                generations.
                            </p>
                        </div>

                        {/* Soft & Sustainable */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-serif text-2xl font-extralight text-black mb-4">Soft & Sustainable</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We source only the finest natural fibers and eco-friendly materials, ensuring both comfort and
                                environmental responsibility.
                            </p>
                        </div>

                        {/* Crafted with Care */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Star className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-serif text-2xl font-extralight text-black mb-4">Crafted with Care</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every piece is infused with passion and attention to detail, creating heirloom-quality rugs that tell a
                                story.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Menu
