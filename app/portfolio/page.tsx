import Link from "next/link"
import { portfolioData } from "@/lib/data/portfolioData"


export default function PortfolioPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-10">Portfolio</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {Object.entries(portfolioData).map(([slug, category]) => (
          <Link
            key={slug}
            href={`/portfolio/${slug}`}
            className="group block"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={Object.values(category.projects)[0].thumbnail}
                alt={category.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-4 text-xl font-medium">{category.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
