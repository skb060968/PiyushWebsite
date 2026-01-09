"use client"

import Link from "next/link"
import { Camera, Users, Sparkles, Briefcase, Clock, DollarSign } from 'lucide-react'
import { content } from '@/lib/data'

const iconMap: { [key: string]: any } = {
  'Bridal Styling': Sparkles,
  'Saree Styling': Camera,
  'Celebrity Styling': Users,
  'Ethnic Wear Consulting': Briefcase,
}

export default function Services() {
  const { services: servicesData, servicesPage, process, pricing } = content

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-fashion-black mb-6">
            {servicesPage.heroTitle}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {servicesPage.heroDescription}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesData.items.map((service, index) => {
              const IconComponent = iconMap[service.title] || Sparkles
              return (
                <div
                  key={index}
                  className="bg-fashion-gray p-8 rounded-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-100 transition-all duration-300 space-y-6"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-fashion-black">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-fashion-black mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <Sparkles className="w-4 h-4 text-fashion-gold mr-2" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="text-sm">{service.pricing}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-fashion-black text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
              {servicesPage.processHeading}
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {servicesPage.processDescription}
            </p>
          </div>

          {/* Timeline layout */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start relative">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center relative md:flex-1">
                {/* Circle */}
                <div className="w-16 h-16 bg-fashion-gold rounded-full flex items-center justify-center mb-4 shadow relative z-10">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>

                {/* Connecting line */}
                {index < process.length - 1 && (
                  <>
                    {/* Vertical line for mobile */}
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-full bg-gray-600 md:hidden"></div>
                    {/* Horizontal line for desktop */}
                    <div className="hidden md:block absolute top-8 left-full w-full border-t-2 border-gray-600"></div>
                  </>
                )}

                {/* Title + Description */}
                <h3 className="font-serif text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-fashion-black mb-6">
              {servicesPage.pricingHeading}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {servicesPage.pricingDescription}
            </p>
          </div>

          <div className="bg-fashion-gray p-8 rounded-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl font-semibold text-fashion-black mb-4">
                  {servicesPage.includedHeading}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {pricing.included.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-fashion-gold" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-fashion-black mb-4">
                  {servicesPage.additionalHeading}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {pricing.additional.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-fashion-gold" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              {servicesPage.ctaText}
            </p>

            <Link
              href="/contact"
              className="btn-primary inline-block px-8 py-3 rounded-lg text-lg font-semibold
                bg-fashion-gold text-white shadow-md 
                hover:bg-yellow-600 hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300"
            >
              {servicesPage.ctaButton1}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}