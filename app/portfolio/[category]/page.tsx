import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/data/portfolio"

type Props = {
  params: { category: string }
}

export default function CategoryPage({ params }: Props) {
  const category = portfolioData[params.category as keyof typeof portfolioData]

  if (!category) notFound()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link
        href="/portfolio"
        className="text-sm text-gray-500 hover:underline mb-6 inline-block"
      >
        ← Back to Portfolio
      </Link>

      <h1 className="text-3xl font-semibold mb-10">{category.title}</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(category.projects).map(([slug, project]) => (
          <Link
            key={slug}
            href={`/portfolio/${params.category}/${slug}`}
            className="group block"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-3 text-lg font-medium">{project.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
