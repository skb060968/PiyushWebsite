import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bollywood Actress',
    content: 'Piyush Bholla has an incredible understanding of Indian fashion. He styled me for my wedding and every look was absolutely perfect. His expertise in traditional wear is unmatched.',
    rating: 5
  },
  {
    name: 'Rajesh Khanna',
    role: 'Fashion Designer',
    content: 'Working with Piyush Bholla on our ethnic wear campaigns has been amazing. He brings out the best in every outfit and understands the cultural significance beautifully.',
    rating: 5
  },
  {
    name: 'Anita Desai',
    role: 'Bride Client',
    content: 'Piyush Bholla made my dream wedding look come true. From selecting the perfect lehenga to the final styling, everything was flawless. I felt like a princess!',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-fashion-black text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            What Clients Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hear from the brands, publications, and individuals who have experienced the transformative power of exceptional styling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
                <h4 className="font-semibold text-white mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Join the growing list of satisfied clients who trust Piyush Bholla Fashion for their Indian styling needs.
          </p>
          <button className="btn-secondary border-white text-white hover:bg-white hover:text-fashion-black">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}