import Link from 'next/link'
import { content } from '@/lib/data'

export default function Hero() {
  const { hero } = content
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/ZGX4iP0fk1s?autoplay=1&mute=1&loop=1&playlist=ZGX4iP0fk1s&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          title="Piyush Bholla Fashion Background Video"
          allow="autoplay; encrypted-media"
          className="w-full h-full object-cover scale-150"
          style={{ 
            minWidth: '100%', 
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100vh',
            objectFit: 'cover'
          }}
        ></iframe>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          {hero.title}
        </h1>
        <p className="text-xl sm:text-2xl mb-4 font-light tracking-wide">
          {hero.subtitle}
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          {hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/portfolio" className="btn-primary">
            {hero.primaryButtonText}
          </Link>
          <Link href="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-fashion-black">
            {hero.secondaryButtonText}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}