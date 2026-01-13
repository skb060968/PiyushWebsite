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
    {
      title: "Creative Design",
      description:
        "Transforming ideas into captivating visuals, blending artistry with fashion storytelling to create designs that inspire and resonate.",
      features: [
        "Concept development & mood boards",
        "Sketching and digital illustration",
        "Trend forecasting & inspiration research",
        "Fabric and color story creation",
      ],
    },
    {
      title: "Technical Design",
      description:
        "Precision-driven expertise that ensures every garment is production-ready, balancing creativity with technical accuracy.",
      features: [
        "Pattern making & grading",
        "Technical flats & CAD drawings",
        "Measurement specs & fit analysis",
        "Garment construction detailing",
      ],
    },
    {
      title: "Production & Sourcing",
      description:
        "Streamlined production and sourcing solutions that deliver quality, efficiency, and sustainability across the supply chain.",
      features: [
        "Vendor identification & management",
        "Material sourcing & sampling",
        "Production scheduling & oversight",
        "Quality assurance & compliance checks",
      ],
    },
    {
      title: "Styling & Personal Services",
      description:
        "Personalized styling experiences that celebrate individuality, helping clients express themselves with confidence and elegance.",
      features: [
        "Wardrobe consultation",
        "Event styling & look curation",
        "Personal shopping assistance",
        "Seasonal outfit planning",
      ],
    },
    {
      title: "Consulting & Brand Development",
      description:
        "Strategic guidance to shape and elevate fashion brands, aligning creative vision with market impact.",
      features: [
        "Brand identity creation",
        "Market positioning strategies",
        "Collection planning & merchandising",
        "Marketing & campaign consultation",
      ],
    },
    {
      title: "Specialized Services",
      description:
        "Unique offerings that add depth and distinction to fashion projects, from sustainability to artisan collaborations.",
      features: [
        "Sustainable fashion consulting",
        "Custom embroidery & embellishment",
        "Collaborations with artisans",
        "Limited edition capsule collections",
      ],
    },
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
            {servicesPage.heroDescription ||
              "Comprehensive fashion design and styling services covering the full creative journey."}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => {
              const IconComponent = iconMap[service.title] || Sparkles
              const slug = service.title
                .toLowerCase()
                .replace(/ & /g, "-")
                .replace(/\s+/g, "-")
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
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600"
                      >
                        <Sparkles className="w-4 h-4 text-fashion-gold mr-2" />{" "}
                        {feature}
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
<section className="section-padding bg-white text-gray-800">
  <div className="container-max px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
        {servicesPage.processHeading || "Our Process"}
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        {servicesPage.processDescription || "A structured journey from consultation to delivery, ensuring every detail is perfected."}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
      {["Consultation", "Concept", "Curation", "Styling", "Delivery"].map((step, index) => (
        <div key={index} className="text-center">
          <div className="w-16 h-16 bg-fashion-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow">
            <span className="text-white font-bold text-lg">{index + 1}</span>
          </div>
          <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">{step}</h3>
        </div>
      ))}
    </div>
  </div>
</section>


  {/* CTA Section */}
  <section className="section-padding bg-white">
    <div className="container-max text-center">
      <p className="text-gray-600 mb-6">
        {servicesPage.ctaText || "Ready to elevate your style or brand?"}
      </p>
      <Link
        href="/contact"
        className="btn-primary inline-block px-8 py-3 rounded-lg text-lg font-semibold
          bg-fashion-gold text-white shadow-md 
          hover:bg-yellow-600 hover:shadow-xl hover:-translate-y-1 
          transition-all duration-300"
      >
        {servicesPage.ctaButton1 || "Book a Consultation"}
      </Link>
    </div>
  </section>

  </div>
     
  )
}