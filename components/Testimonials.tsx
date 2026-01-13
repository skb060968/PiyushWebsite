"use client"

import Link from "next/link"
import { Star } from 'lucide-react'
import { content } from '@/lib/data'

export default function Testimonials() {
  const { testimonials: testimonialsData } = content

  return (
    // Changed background to light theme
    <section className="section-padding bg-white text-gray-800">
      <div className="container-max px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            {testimonialsData.heading}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {testimonialsData.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.items.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
              
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-fashion-gold fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            {testimonialsData.ctaText}
          </p>

          <Link
            href="/contact"
            className="btn-secondary border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white
              inline-block px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            {testimonialsData.ctaButtonText}
          </Link>
        </div>

      </div>
    </section>
  )
}
