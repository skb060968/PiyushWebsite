import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/data/portfolio"

export function generateStaticParams() {
  const params: { category: string; subProject: string }[] = []

  for (const category of Object.keys(portfolioData)) {
    const projects = portfolioData[category].projects
    for (const subProject of Object.keys(projects)) {
      params.push({ category, subProject })
    }
  }

  return params
}

export default function ProjectPage({
  params,
}: {
  params: { category: string; subProject: string }
}) {
  const { category, subProject } = params
  const projectData = portfolioData[category]?.projects?.[subProject]

  if (!projectData) return notFound()

  return (
    <div className="pt-16">
      <div className="container-max mb-6">
        {/* Back link to Category */}
        <Link
          href={`/portfolio/${category}`}
          className="
            text-sm
            text-gray-600
            hover:text-yellow-500
            active:text-yellow-600
            transition-colors
            duration-300
          "
        >
          ← Back to {category}
        </Link>
      </div>

      {/* Project Heading */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max">
          <h1 className="font-serif text-4xl font-bold text-fashion-black">
            {projectData.title}
          </h1>
          {projectData.description.map((desc, i) => (
            <p key={i} className="text-gray-700 mt-4 max-w-3xl">
              {desc}
            </p>
          ))}
        </div>
      </section>

      {/* Grid of Fields */}
      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(projectData.fields).map(([fieldKey, field]) => (
            <Link
              key={fieldKey}
              href={`/portfolio/${category}/${subProject}/${fieldKey}`}
              className="group block rounded-lg shadow hover:shadow-lg transition"
            >
              {/* Field Thumbnail */}
              <img
                src={field.thumbnail}
                alt={`${field.title} thumbnail`}
                className="w-full h-64 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4 text-center">
                <h3
                  className="
                    font-serif
                    text-xl
                    font-semibold
                    text-fashion-black
                    group-hover:text-yellow-500
                    transition-colors
                    duration-300
                  "
                >
                  {field.title}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {field.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
