import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/data/portfolio"

export function generateStaticParams() {
  return Object.keys(portfolioData).map((category) => ({
    category,
  }))
}

export default function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const category = portfolioData[params.category]
  if (!category) return notFound()

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50 rounded-lg">
      {/* Back link */}
      <div className="mb-6">
        <Link
          href="/portfolio"
          className="
            text-sm
            text-gray-600
            hover:text-yellow-500
            active:text-yellow-600
            transition-colors
            duration-300
          "
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Category Heading */}
      <h1 className="text-4xl font-bold my-10 text-fashion-black tracking-wide text-center">
        {category.title}
      </h1>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.entries(category.projects).map(([slug, project]) => (
          <Link
            key={slug}
            href={`/portfolio/${params.category}/${slug}`}
            className="group block overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-xl transition duration-300"
          >
            {/* Thumbnail */}
            <div className="overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Project Title */}
            <div className="p-6 text-center">
              <h2
                className="
                  text-lg
                  font-semibold
                  text-fashion-black
                  group-hover:text-yellow-500
                  transition-colors
                  duration-300
                "
              >
                {project.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
