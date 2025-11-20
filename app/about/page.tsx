import Image from 'next/image'
import { Award, Users, Camera, Sparkles } from 'lucide-react'

const achievements = [
  {
    icon: Award,
    title: 'Best Indian Fashion Stylist',
    year: '2023',
    organization: 'Indian Fashion Awards'
  },
  {
    icon: Camera,
    title: 'Excellence in Bridal Styling',
    year: '2022',
    organization: 'Bridal Fashion Council'
  },
  {
    icon: Users,
    title: 'Bollywood Stylist Recognition',
    year: '2021',
    organization: 'Film Fashion Guild'
  },
  {
    icon: Sparkles,
    title: 'Traditional Wear Innovation',
    year: '2020',
    organization: 'Ethnic Fashion Council'
  }
]

const experience = [
  {
    year: '2016-Present',
    role: 'Senior Indian Fashion Stylist & Creative Director',
    company: 'Freelance',
    description: 'Leading Indian fashion styling projects for Bollywood celebrities, luxury ethnic wear brands, and bridal clients.'
  },
  {
    year: '2014-2016',
    role: 'Ethnic Wear Stylist',
    company: 'Gaurav Couture',
    description: 'Specialized in bridal and ethnic wear styling for high-end Indian fashion campaigns.'
  },
  {
    year: '2012-2014',
    role: 'Assistant Stylist',
    company: 'Filmfare Magazine',
    description: 'Supported senior stylists on Bollywood celebrity shoots and Indian fashion editorials.'
  }
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-fashion-black mb-6">
                About Piyush Bholla
              </h1>
              <div className="w-20 h-1 bg-fashion-gold mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                A passionate Indian fashion stylist and creative director with over 8 years of experience
                in celebrating the beauty of traditional Indian wear. My journey began with a deep love
                for our rich cultural heritage and the timeless elegance of ethnic fashion.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                I believe that Indian fashion is more than just clothing—it's a celebration of our culture,
                traditions, and artistry. Every saree drape, every bridal ensemble, and every ethnic look
                I create tells a story of grace, tradition, and contemporary elegance.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/about/Piyush.jpg"
                alt="Piyush Bholla - About Page"
                width={600}
                height={900}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-fashion-black mb-8">
              My Philosophy
            </h2>
            <blockquote className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-8">
              "Indian fashion is not just about following trends—it's about honoring our heritage
              while creating contemporary magic. Every saree drape, every jewelry piece, and every
              ethnic ensemble should celebrate our culture while empowering the wearer."
            </blockquote>
            <p className="text-gray-600 text-lg">
              This philosophy guides every decision I make, from the initial concept to the final styling touches.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-fashion-black text-center mb-12">
            Professional Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {experience.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 mb-8 last:mb-0">
                <div className="md:w-1/4">
                  <span className="text-fashion-gold font-semibold text-lg">
                    {item.year}
                  </span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-xl font-semibold text-fashion-black mb-2">
                    {item.role}
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">
                    {item.company}
                  </p>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-fashion-black text-center mb-12">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-fashion-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-fashion-black mb-2">
                  {achievement.title}
                </h3>
                <p className="text-fashion-gold font-medium mb-1">
                  {achievement.year}
                </p>
                <p className="text-gray-600 text-sm">
                  {achievement.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="section-padding bg-fashion-black text-white">
        <div className="container-max">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">
                Creative Skills
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Traditional Draping Techniques</li>
                <li>• Color Coordination</li>
                <li>• Cultural Styling</li>
                <li>• Bridal Concept Development</li>
                <li>• Ethnic Wear Curation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">
                Technical Skills
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Saree Draping (15+ styles)</li>
                <li>• Bridal Styling</li>
                <li>• Jewelry Coordination</li>
                <li>• Celebrity Styling</li>
                <li>• Wedding Planning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">
                Industry Knowledge
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Indian Fashion History</li>
                <li>• Regional Textile Knowledge</li>
                <li>• Traditional Craftsmanship</li>
                <li>• Bollywood Fashion Trends</li>
                <li>• Ethnic Wear Market</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}