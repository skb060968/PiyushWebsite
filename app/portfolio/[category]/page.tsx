import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/data/portfolio"

export function generateStaticParams() {
  return Object.keys(portfolioData).map((category) => ({
    category
  }))
}

export default function CategoryPage({
  params
}: {
  params: { category: string }
}) {
  const category = portfolioData[params.category]
  if (!category) return notFound()

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <Link
        href="/portfolio"
        className="text-sm text-gray-500 hover:underline"
      >
        ← Back to Portfolio
      </Link>

      <h1 className="text-3xl font-light my-8">{category.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

            <h2 className="mt-4 text-lg">{project.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  )
}
