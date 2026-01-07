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
    <section className="max-w-5xl mx-auto px-6 py-20">
      <Link
        href={`/portfolio/${params.category}`}
        className="text-sm text-gray-500 hover:underline"
      >
        ← Back to {category.title}
      </Link>

      <h1 className="text-3xl font-light my-6">{project.title}</h1>

      <div className="max-w-3xl space-y-4 text-gray-600 mb-12">
        {project.description.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.images.map((img) => (
          <img
            key={img}
            src={img}
            alt={project.title}
            className="w-full rounded-lg"
          />
        ))}
      </div>
    </section>
  )
}
