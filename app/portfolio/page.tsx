import Link from "next/link"
import { portfolioData } from "@/lib/data/portfolio"

export default function PortfolioPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-light mb-12">Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {Object.entries(portfolioData).map(([slug, category]) => (
          <Link
            key={slug}
            href={`/portfolio/${slug}`}
            className="group block overflow-hidden rounded-lg border hover:shadow-lg transition"
          >
            <div className="overflow-hidden">
              <img
                src={category.thumbnail}
                alt={category.title}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6 text-center">
              <h2 className="text-xl uppercase tracking-wide">
                {category.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
