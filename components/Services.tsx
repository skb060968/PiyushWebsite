import { Camera, Users, Sparkles, Briefcase } from 'lucide-react'
import content from '@/public/data/content.json'

const iconMap: { [key: string]: any } = {
  'Bridal Styling': Sparkles,
  'Saree Styling': Camera,
  'Celebrity Styling': Users,
  'Ethnic Wear Consulting': Briefcase
}

export default function Services() {
  const { services: servicesData } = content
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-fashion-black mb-6">
            {servicesData.heading}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {servicesData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-fashion-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            {servicesData.ctaText}
          </p>
          <button className="btn-primary">
            {servicesData.ctaButtonText}
          </button>
        </div>
      </div>
    </section>
  )
}