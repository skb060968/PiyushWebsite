import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/data/portfolio"

type Props = {
  params: { category: string; subProject: string }
}

export default function ProjectDetailPage({ params }: Props) {
  const category = portfolioData[params.category as keyof typeof portfolioData]
  const project = category?.projects[
    params.subProject as keyof typeof category.projects
  ]

  if (!category || !project) notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link
        href={`/portfolio/${params.category}`}
        className="text-sm text-gray-500 hover:underline mb-6 inline-block"
      >
        ← Back to {category.title}
      </Link>

      <h1 className="text-3xl font-semibold mb-6">{project.title}</h1>

      {/* Editorial text */}
      <div className="prose max-w-none mb-12">
        {project.description.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Image gallery */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${project.title} image ${i + 1}`}
            className="w-full rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  )
}
