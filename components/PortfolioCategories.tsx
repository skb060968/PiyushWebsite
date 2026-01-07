import Link from "next/link"
import { portfolio } from "@/lib/data/portfolio"

export default function PortfolioCategories() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-light mb-10">
          {portfolio.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.categories.map((category) => (
            <Link
              key={category}
              href={`/portfolio/${category.toLowerCase()}`}
              className="group block border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center">
                <span className="text-xl tracking-wide uppercase text-gray-700 group-hover:text-black transition">
                  {category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
