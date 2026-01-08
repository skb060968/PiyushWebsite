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
        {project.images.map((img, index) => (
          <div
            key={img}
            className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <img
              src={img}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
            {project.description[index] && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 p-4 rounded-lg shadow text-center max-w-md">
                <p className="text-gray-800 leading-relaxed">
                  {project.description[index]}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Extra text paragraphs if more than images */}
      {project.description.length > project.images.length && (
        <div className="max-w-3xl mx-auto mt-12 space-y-6 text-gray-700 leading-relaxed">
          {project.description
            .slice(project.images.length)
            .map((para, index) => (
              <p key={index}>{para}</p>
            ))}
        </div>
      )}
    </section>
  )
}