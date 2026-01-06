import Link from "next/link"
import { notFound } from "next/navigation"

import { portfolioProjects } from "@/lib/data/portfolioProjects"

type Props = {
  params: {
    category: keyof typeof portfolioProjects
  }
}

export function generateStaticParams() {
  return Object.keys(portfolioProjects).map((category) => ({
    category
  }))
}

export default function CategoryPage({ params }: Props) {
  const { category } = params
  const categoryData = portfolioProjects[category]

  if (!categoryData) {
    notFound()
  }

  const subProjects = Object.entries(categoryData.subProjects)

  return (
    <section className="min-h-screen px-6 py-20 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-light tracking-wide">
          {categoryData.title}
        </h1>
      </div>

      {/* Sub Projects */}
      <div className="mx-auto grid max-w-4xl gap-12 sm:grid-cols-2">
        {subProjects.map(([key, subProject]) => (
          <Link
            key={key}
            href={`/portfolio/${category}/${key}`}
            className="group block text-center"
          >
            <div className="rounded-lg border border-muted p-12 transition-colors group-hover:border-foreground">
              <h2 className="text-lg font-light tracking-wide">
                {subProject.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
