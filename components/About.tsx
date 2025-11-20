import Image from 'next/image'

export default function About() {
  return (
    <section className="section-padding bg-fashion-gray">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/about/piyush.jpeg"
              alt="Piyush Bholla"
              width={600}
              height={700}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-fashion-gold rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-lg font-bold">SD</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-fashion-black mb-6">
                About Piyush Bholla
              </h2>
              <div className="w-20 h-1 bg-fashion-gold mb-6"></div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              With over 8 years of experience in Indian fashion styling, I've had the privilege of working with Bollywood celebrities, fashion designers, and brides to create stunning looks that celebrate our rich cultural heritage.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              My approach combines traditional Indian aesthetics with contemporary styling, always honoring the cultural significance while adding modern flair. Whether it's a bridal lehenga, elegant saree draping, or festival ethnic wear, I believe every outfit should tell a story of grace and tradition.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="font-serif text-xl font-semibold text-fashion-black mb-2">Experience</h4>
                <p className="text-gray-600">8+ Years</p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-fashion-black mb-2">Projects</h4>
                <p className="text-gray-600">200+ Completed</p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-fashion-black mb-2">Clients</h4>
                <p className="text-gray-600">50+ Brands</p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-fashion-black mb-2">Awards</h4>
                <p className="text-gray-600">15+ Recognitions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}