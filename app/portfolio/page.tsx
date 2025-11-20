'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    title: 'Elegant Contemporary Fusion',
    category: 'Contemporary Fashion',
    image: '/images/portfolio/Project1/thumbnail.jpeg',
    description: 'A beautiful blend of traditional handloom fabrics with modern silhouettes, featuring delicate pleating and ruffled details that create a timeless yet contemporary look.'
  }
]

const categories = ['All', 'Contemporary Fashion']

export default function Portfolio() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)
  
  const count = filteredItems.length
  
  // Determine grid layout based on number of projects
  const getGridClass = () => {
    if (count === 1) return 'grid grid-cols-1 max-w-xl mx-auto'
    if (count === 2) return 'grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8'
    if (count === 3) return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' // 3+ uses standard 3-column grid
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-fashion-black mb-6">
            Portfolio
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive showcase of Indian fashion styling work across bridal, saree styling, celebrity looks, and festival wear, 
            demonstrating expertise in traditional and contemporary ethnic fashion.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-fashion-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className={getGridClass()}>
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group cursor-pointer"
                onClick={() => router.push(`/portfolio/${item.id}`)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-fashion-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}