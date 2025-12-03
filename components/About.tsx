import Image from 'next/image'
import content from '@/public/data/content.json'
import { getImagePath } from '@/lib/utils'

export default function About() {
  const { about } = content
  
  return (
    <section className="section-padding bg-fashion-gray">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src={getImagePath('images/about/piyush.jpeg')}
              alt="Piyush Bholla"
              width={600}
              height={700}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              priority
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-fashion-gold rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-lg font-bold">PG</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-fashion-black mb-6">
                {about.heading}
              </h2>
              <div className="w-20 h-1 bg-fashion-gold mb-6"></div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              {about.paragraph1}
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              {about.paragraph2}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="font-serif text-xl font-semibold text-fashion-black mb-2">{about.stats.experience.label}</h4>
                <p className="text-gray-600">{about.stats.experience.value}</p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-fashion-black mb-2">{about.stats.projects.label}</h4>
                <p className="text-gray-600">{about.stats.projects.value}</p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-fashion-black mb-2">{about.stats.clients.label}</h4>
                <p className="text-gray-600">{about.stats.clients.value}</p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-fashion-black mb-2">{about.stats.awards.label}</h4>
                <p className="text-gray-600">{about.stats.awards.value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}