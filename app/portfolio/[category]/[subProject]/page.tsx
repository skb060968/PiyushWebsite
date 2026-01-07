import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/data/portfolioData"

export function generateStaticParams() {
  const params: { category: string; subProject: string }[] = []

  Object.entries(portfolioData).forEach(([category, data]) => {
    Object.keys(data.projects).forEach((subProject) => {
      params.push({ category, subProject })
    })
  })

  return params
}


type Props = {
  params: {
    category: string
    subProject: string
  }
}

export default function ProjectDetailPage({ params }: Props) {
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

      <h1 className="text-3xl font-light mt-6 mb-4">
        {project.title}
      </h1>

      <p className="text-gray-600 max-w-3xl mb-10">
        {project.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.images.map((src) => (
          <img
            key={src}
            src={`/${src}`}
            alt={project.title}
            className="w-full h-auto rounded"
          />
        ))}
      </div>
    </section>
  )
}
