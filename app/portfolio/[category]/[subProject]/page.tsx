import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/data/portfolio"

export function generateStaticParams() {
  const params: { category: string; subProject: string }[] = []

  Object.entries(portfolioData).forEach(([category, data]) => {
    Object.keys(data.projects).forEach((subProject) => {
      params.push({ category, subProject })
    })
  })

  return params
}

export default function ProjectDetailPage({
  params,
}: {
  params: { category: string; subProject: string }
}) {
  const category = portfolioData[params.category]
  if (!category) return notFound()

  const project = category.projects[params.subProject]
  if (!project) return notFound()

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 bg-gray-50 rounded-lg">
      {/* Back link */}
      <Link
        href={`/portfolio/${params.category}`}
        className="text-sm text-gray-500 hover:text-fashion-gold transition-colors duration-300"
      >
        ← Back to {category.title}
      </Link>

      {/* Project Title */}
      <h1 className="text-4xl font-bold my-10 text-fashion-black tracking-wide text-center">
        {project.title}
      </h1>

      {/* Overlay Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image 1 + Textbox */}
        {project.images[0] && (
          <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
            {project.description[0] && (
              <div className="absolute bottom-6 left-6 bg-white/80 p-4 rounded-lg shadow">
                <p className="text-gray-800 leading-relaxed">{project.description[0]}</p>
              </div>
            )}
          </div>
        )}

        {/* Image 2 + Textbox */}
        {project.images[1] && (
          <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition">
            <img
              src={project.images[1]}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
            {project.description[1] && (
              <div className="absolute top-6 right-6 bg-white/80 p-4 rounded-lg shadow">
                <p className="text-gray-800 leading-relaxed">{project.description[1]}</p>
              </div>
            )}
          </div>
        )}

        {/* Image 3 + Textbox */}
        {project.images[2] && (
          <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition md:col-span-2">
            <img
              src={project.images[2]}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
            {project.description[2] && (
              <div className="absolute bottom-6 right-6 bg-white/80 p-6 rounded-lg shadow max-w-lg">
                <p className="text-gray-800 leading-relaxed">{project.description[2]}</p>
              </div>
            )}
          </div>
        )}

        {/* Optional Image 4 (full width hero) */}
        {project.images[3] && (
          <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition md:col-span-2">
            <img
              src={project.images[3]}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
      </div>
    </section>
  )
}