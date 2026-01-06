import Image from "next/image"
import { notFound } from "next/navigation"

import { portfolioProjects } from "@/lib/data/portfolioProjects"
import { getImagePath } from "@/lib/utils"

type Params = {
  params: {
    category: keyof typeof portfolioProjects
    subProject: string
  }
}

export function generateStaticParams() {
  const params: { category: string; subProject: string }[] = []

  Object.entries(portfolioProjects).forEach(([category, categoryData]) => {
    Object.keys(categoryData.subProjects).forEach((subProject) => {
      params.push({ category, subProject })
    })
  })

  return params
}

export default function SubProjectPage({ params }: Params) {
  const { category, subProject } = params

  const categoryData = portfolioProjects[category]
  if (!categoryData) {
    notFound()
  }

  const project = categoryData.subProjects[subProject]
  if (!project) {
    notFound()
  }

  return (
    <section className="min-h-screen px-6 py-20 md:px-12 lg:px-24">
      {/* Title */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="text-3xl font-light tracking-wide">
          {project.title}
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl space-y-20">
        {/* Description */}
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          {project.fullDescription}
        </p>

        {/* Images */}
        <div className="space-y-20">
          {project.images.map((src, index) => (
            <div
              key={index}
              className={`relative mx-auto aspect-[3/4] w-full max-w-3xl ${
                index % 2 === 0 ? "" : "md:ml-auto"
              }`}
            >
              <Image
                src={getImagePath(src)}
                alt={`${project.title} image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
