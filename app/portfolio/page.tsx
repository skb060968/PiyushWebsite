import Link from "next/link"
import { portfolioData } from "@/lib/data/portfolio"

export default function PortfolioPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50 rounded-lg">
      {/* Section Heading */}
      <h1 className="text-4xl font-bold text-center mb-16 text-fashion-black tracking-wide">
        Portfolio
      </h1>

      {/* Grid of Portfolio Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {Object.entries(portfolioData).map(([slug, category]) => (
          <Link
            key={slug}
            href={`/portfolio/${slug}`}
            className="group block overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-xl transition duration-300"
          >
            {/* Thumbnail */}
            <div className="overflow-hidden">
              <img
                src={category.thumbnail}
                alt={category.title}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 text-center">
              <h2 className="text-xl uppercase tracking-wide text-fashion-black font-semibold group-hover:text-fashion-gold transition-colors duration-300">
                {category.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}