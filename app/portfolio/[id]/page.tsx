import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getImagePath } from '@/lib/utils'

export function generateStaticParams() {
  return [
    { id: '1' }
  ]
}

const projectData = {
  1: {
    id: 1,
    title: 'Elegant Contemporary Fusion',
    category: 'Contemporary Fashion',
    detailedDescription: 'This collection celebrates the beauty of handcrafted textiles and contemporary design. The featured pieces showcase natural fabrics with intricate pleating techniques, delicate ruffled collars, and thoughtful color combinations. The white cotton blouse with its Victorian-inspired neckline pairs beautifully with the warm terracotta pinafore dress, creating a look that\'s both nostalgic and modern.\n\nEach piece demonstrates attention to detail in construction and finishing, with adjustable straps and carefully placed seams that ensure both comfort and style. The natural breathability of the cotton fabric makes these pieces perfect for all-day wear, while the structured silhouettes maintain a polished appearance from morning to evening.\n\nThe color palette draws inspiration from earth tones and natural elements, creating a versatile wardrobe foundation that can be mixed and matched effortlessly. The terracotta hue brings warmth and sophistication, while the crisp white provides a fresh, clean contrast that never goes out of style.\n\nThis styling approach works perfectly for casual gatherings, creative workspaces, or anyone seeking a refined yet approachable aesthetic that honors traditional craftsmanship while embracing contemporary fashion sensibilities. Whether you\'re attending a weekend brunch, working in a creative studio, or simply enjoying a day out, these pieces offer the perfect balance of comfort, style, and timeless elegance.',
    images: [
      '/images/portfolio/Project1/image1.jpeg',
      '/images/portfolio/Project1/image2.jpeg'
    ]
  }
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectData[parseInt(params.id) as keyof typeof projectData]

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/portfolio" className="text-fashion-gold hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Back Button */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container-max">
          <Link 
            href="/portfolio"
            className="flex items-center gap-2 text-gray-600 hover:text-fashion-black transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </section>

      {/* Project Header */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-fashion-black mb-6">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Alternating Content */}
      <section className="section-padding bg-white">
        <div className="container-max space-y-20">
          
          {/* First Section - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={getImagePath(project.images[0].startsWith('/') ? project.images[0].slice(1) : project.images[0])}
                alt={`${project.title} - Image 1`}
                width={600}
                height={750}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-fashion-black">
                The Collection
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {project.detailedDescription.split('\n\n')[0]}
              </p>
            </div>
          </div>

          {/* Second Section - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 lg:order-1">
              <h2 className="font-serif text-2xl font-semibold text-fashion-black">
                Design Details
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {project.detailedDescription.split('\n\n')[1] || project.detailedDescription.split('\n\n')[0]}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg lg:order-2">
              <Image
                src={getImagePath(project.images[1].startsWith('/') ? project.images[1].slice(1) : project.images[1])}
                alt={`${project.title} - Image 2`}
                width={600}
                height={750}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}