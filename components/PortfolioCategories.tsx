import Image from "next/image"
import Link from "next/link"

import { portfolio } from "@/lib/data/portfolio"
import { portfolioProjects } from "@/lib/data/portfolioProjects"
import { getImagePath } from "@/lib/utils"

type Props = {
  heading?: string
  description?: string
}

export default function PortfolioCategories({
  heading = portfolio.heading,
  description = portfolio.description
}: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-fashion-black mb-6">
            {heading}
          </h2>
          {description && (
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
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
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={getImagePath(project.thumbnail)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <h3 className="font-serif text-xl font-semibold text-fashion-black text-center">
                  {project.title}
                </h3>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
