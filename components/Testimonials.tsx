"use client"

import Link from "next/link"
import { Star } from 'lucide-react'
import { content } from '@/lib/data'

export default function Testimonials() {
  const { testimonials: testimonialsData } = content

  return (
    <section className="section-padding bg-fashion-black text-white">
      <div className="container-max">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            {testimonialsData.heading}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {testimonialsData.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.items.map((testimonial, index) => (
            <div key={index} className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
              
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-fashion-gold fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <h4 className="font-semibold text-white mb-1">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            {testimonialsData.ctaText}
          </p>

          <Link
            href="/contact"
            className="btn-secondary border-white text-white hover:bg-white hover:text-fashion-black
              inline-block px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            {testimonialsData.ctaButtonText}
          </Link>
        </div>

      </div>
    </section>
  )
}
