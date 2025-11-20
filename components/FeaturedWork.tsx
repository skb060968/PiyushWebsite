import Image from 'next/image'
import Link from 'next/link'

// All available projects
const allProjects = [
  {
    id: 1,
    title: 'Elegant Contemporary Fusion',
    category: 'Contemporary Fashion',
    image: '/images/portfolio/Project1/thumbnail.jpeg',
    description: 'A beautiful blend of traditional handloom fabrics with modern silhouettes, featuring delicate pleating and ruffled details that create a timeless yet contemporary look.'
  }
]

// Featured project (showing Project1)
const featuredProjects = [allProjects[0]]

export default function FeaturedWork() {
  const count = featuredProjects.length
  
  // Determine grid layout based on number of projects
  const getGridClass = () => {
    if (count === 1) return 'grid grid-cols-1 max-w-xl mx-auto'
    if (count === 2) return 'grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8'
    if (count === 3) return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' // 4 or more
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-fashion-black mb-6">
            Featured Work
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A curated selection of my most impactful Indian fashion styling projects, showcasing expertise in traditional and contemporary ethnic wear.
          </p>
        </div>

        <div className={`${getGridClass()} mb-12`}>
          {featuredProjects.map((project) => (
            <Link 
              key={project.id} 
              href={`/portfolio/${project.id}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={720}
                  height={480}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View Project</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-semibold text-fashion-black">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio" className="btn-primary">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}