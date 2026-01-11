"use client"

import Link from "next/link"
import { portfolioData } from "@/lib/data/portfolio"

export async function generateStaticParams() {
  const params: { category: string; subProject: string }[] = []

  for (const category of Object.keys(portfolioData)) {
    const projects = portfolioData[category].projects
    for (const subProject of Object.keys(projects)) {
      params.push({ category, subProject })
    }
  }

  return params
}

export default function ProjectFieldsPage({ params }: { params: { category: string; subProject: string } }) {
  const { category, subProject } = params
  const projectData = portfolioData[category]?.projects?.[subProject]

  if (!projectData) {
    return <div className="pt-16">Project not found</div>
  }

  const fields = Object.entries(projectData.fields) // [slug, FieldData][]

  return (
    <div className="pt-16">
      <section className="section-padding bg-fashion-gray">
        <div className="container-max text-center">
          <h1 className="font-serif text-4xl font-bold text-fashion-black mb-6">
            {projectData.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a field to explore detailed content.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fields.map(([slug, field]) => (
            <Link
              key={slug}
              href={`/portfolio/${category}/${subProject}/${slug}`}
              className="block bg-fashion-gray p-6 rounded-lg hover:bg-gray-100 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-fashion-black">{field.title}</h3>
              <p className="text-gray-700 mt-2 line-clamp-3">{field.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}