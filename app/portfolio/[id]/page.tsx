import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getImagePath } from '@/lib/utils'

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' }
  ]
}

const projectData = {
  1: {
    id: 1,
    title: 'Elegant Contemporary Fusion',
    category: 'Contemporary Fashion',
    detailedDescription: 'This collection celebrates the beauty of handcrafted textiles and contemporary design. The featured pieces showcase natural fabrics with intricate pleating techniques, delicate ruffled collars, and thoughtful color combinations. The white cotton blouse with its Victorian-inspired neckline pairs beautifully with the warm terracotta pinafore dress, creating a look that\'s both nostalgic and modern.\n\nEach piece demonstrates attention to detail in construction and finishing, with adjustable straps and carefully placed seams that ensure both comfort and style. The natural breathability of the cotton fabric makes these pieces perfect for all-day wear, while the structured silhouettes maintain a polished appearance from morning to evening.',
    images: [
      '/images/portfolio/Project1/image1.jpeg',
      '/images/portfolio/Project1/image2.jpeg'
    ]
  },
  2: {
    id: 2,
    title: 'Royal Bridal Collection',
    category: 'Bridal Styling',
    detailedDescription: 'An opulent bridal styling project featuring traditional red and gold lehengas with intricate zardozi work, creating a regal and timeless bridal look. This bridal project was inspired by royal Rajasthani heritage.\n\nEvery element from the heavy lehenga to the traditional jewelry was carefully curated to create a majestic bridal ensemble that honored tradition while ensuring the bride felt like royalty.',
    images: [
      '/images/portfolio/Project2/image1.jpeg',
      '/images/portfolio/Project2/image2.jpeg'
    ]
  },
  3: {
    id: 3,
    title: 'Bollywood Red Carpet Glamour',
    category: 'Celebrity Fashion',
    detailedDescription: 'A stunning red carpet look featuring a contemporary saree with modern draping techniques, styled for a leading Bollywood actress at a major film awards ceremony.\n\nFor this high-profile red carpet appearance, we reimagined the traditional saree with a modern twist. The contemporary draping style combined with statement jewelry created a look that was both elegant and fashion-forward.',
    images: [
      '/images/portfolio/Project3/image1.jpeg',
      '/images/portfolio/Project3/image2.jpeg'
    ]
  },
  4: {
    id: 4,
    title: 'Festive Ethnic Elegance',
    category: 'Festival Wear',
    detailedDescription: 'A vibrant collection of festival wear styling featuring colorful lehengas, anarkalis, and sarees perfect for Diwali and wedding season celebrations.\n\nThis festive collection celebrates the joy and vibrancy of Indian festivals. Each outfit was styled to capture the essence of celebration while ensuring comfort and elegance.',
    images: [
      '/images/portfolio/Project4/image1.jpeg',
      '/images/portfolio/Project4/image2.jpeg'
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