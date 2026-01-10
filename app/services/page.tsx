"use client"

import Link from "next/link"
import { Sparkles, Scissors, Ruler, Users, Briefcase, Leaf } from "lucide-react"
import { content } from "@/lib/data"

const iconMap: { [key: string]: any } = {
  "Creative Design": Sparkles,
  "Technical Design": Ruler,
  "Production & Sourcing": Scissors,
  "Styling & Personal Services": Users,
  "Consulting & Brand Development": Briefcase,
  "Specialized Services": Leaf,
}

export default function Services() {
  const { servicesPage } = content

  const serviceCategories = [
    { title: "Creative Design", description: "...", features: [...] },
    { title: "Technical Design", description: "...", features: [...] },
    { title: "Production & Sourcing", description: "...", features: [...] },
    { title: "Styling & Personal Services", description: "...", features: [...] },
    { title: "Consulting & Brand Development", description: "...", features: [...] },
    { title: "Specialized Services", description: "...", features: [...] },
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-fashion-black mb-6">
            {servicesPage.heroTitle || "Services Offered"}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {servicesPage.heroDescription || "Comprehensive fashion design and styling services covering the full creative journey."}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => {
              const IconComponent = iconMap[service.title] || Sparkles
              const slug = service.title.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")
              return (
                <div
                  key={index}
                  id={slug}
                  className="scroll-mt-24 bg-fashion-gray p-8 rounded-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-100 transition-all duration-300 space-y-6"
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

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Sparkles className="w-4 h-4 text-fashion-gold mr-2" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* ... unchanged ... */}

      {/* CTA Section */}
      {/* ... unchanged ... */}
    </div>
  )
}