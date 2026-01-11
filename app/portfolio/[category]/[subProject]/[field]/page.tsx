"use client"

import { portfolioData } from "@/lib/data/portfolio"

export async function generateStaticParams() {
  const params: { category: string; subProject: string; field: string }[] = []

  for (const category of Object.keys(portfolioData)) {
    const projects = portfolioData[category].projects
    for (const subProject of Object.keys(projects)) {
      const fields = projects[subProject].fields
      for (const field of Object.keys(fields)) {
        params.push({ category, subProject, field })
      }
    }
  }

  return params
}

export default function FieldDetailPage({ params }: { params: { category: string; subProject: string; field: string } }) {
  const { category, subProject, field } = params
  const fieldData = portfolioData[category]?.projects?.[subProject]?.fields?.[field]

  if (!fieldData) {
    return <div className="pt-16">Field not found</div>
  }

  return (
    <div className="pt-16">
      <section className="section-padding bg-fashion-gray">
        <div className="container-max">
          <h1 className="font-serif text-4xl font-bold text-fashion-black">{fieldData.title}</h1>
          <p className="text-gray-700 mt-4 max-w-3xl">{fieldData.description}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fieldData.images.length === 0 ? (
            <p className="text-gray-600">No images added yet for this field.</p>
          ) : (
            fieldData.images.map((src, i) => (
              <img key={i} src={src} alt={`${fieldData.title} ${i}`} className="rounded-lg shadow-sm" />
            ))
          )}
        </div>
      </section>
    </div>
  )
}