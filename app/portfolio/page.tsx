import Image from "next/image"
import Link from "next/link"

import { portfolio } from "@/lib/data/portfolio"
import { portfolioProjects } from "@/lib/data/portfolioProjects"
import { getImagePath } from "@/lib/utils"

export default function PortfolioPage() {
  return (
    <section className="min-h-screen px-6 py-20 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-light tracking-wide">
          {portfolio.heading}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {portfolio.description}
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.categories.map((category) => {
          const project = portfolioProjects[category.id]

          if (!project) return null

          return (
            <Link
              key={category.id}
              href={`/portfolio/${category.id}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={getImagePath(project.thumbnail)}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <h2 className="mt-4 text-center text-lg font-light tracking-wide">
                {project.title}
              </h2>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
