import { Play } from 'lucide-react'

export default function VideoSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-fashion-black mb-6">
            Watch My Work
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get an inside look at my Indian fashion styling process and see how I bring traditional elegance to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/ZGX4iP0fk1s"
              title="Piyush Bholla Fashion - Styling Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Experience the artistry behind Indian fashion styling and see how tradition meets contemporary elegance.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Play className="w-4 h-4 mr-2" />
                <span>Behind the Scenes</span>
              </div>
              <div>•</div>
              <div>Styling Process</div>
              <div>•</div>
              <div>Indian Fashion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}