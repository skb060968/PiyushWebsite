import Link from "next/link"
import { portfolio } from "@/lib/data"

export default function PortfolioPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-light mb-10">{portfolio.heading}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolio.categories.map((category) => (
          <Link
            key={category}
            href={`/portfolio/${category.toLowerCase()}`}
            className="border rounded-lg p-12 text-center hover:shadow-lg transition"
          >
            <span className="text-xl uppercase tracking-wide">
              {category}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
