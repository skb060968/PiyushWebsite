import { Camera, Users, Sparkles, Briefcase, Clock, DollarSign } from 'lucide-react'
import content from '@/public/data/content.json'

const iconMap: { [key: string]: any } = {
  'Bridal Styling': Sparkles,
  'Saree Styling': Camera,
  'Celebrity Styling': Users,
  'Ethnic Wear Consulting': Briefcase
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
                <div key={index} className="bg-fashion-gray p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-fashion-black">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-fashion-black mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-fashion-gold rounded-full mr-3"></div>
                          {feature}
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-fashion-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
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
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-fashion-black mb-4">
                  {servicesPage.additionalHeading}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {pricing.additional.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              {servicesPage.ctaText}
            </p>
            <button className="btn-primary mr-4">
              {servicesPage.ctaButton1}
            </button>
            <button className="btn-secondary">
              {servicesPage.ctaButton2}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}