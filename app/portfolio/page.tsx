import Link from "next/link"

const categories = [
  {
    id: "kidswear",
    title: "Kidswear",
    thumbnail: "images/portfolio/kidswear/thumbnail.jpg",
  },
  {
    id: "menswear",
    title: "Menswear",
    thumbnail: "images/portfolio/menswear/thumbnail.jpg",
  },
  {
    id: "womenswear",
    title: "Womenswear",
    thumbnail: "images/portfolio/womenswear/thumbnail.jpg",
  },
]

export default function PortfolioPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-light mb-12">Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/portfolio/${category.id}`}
            className="group block"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={`/${category.thumbnail}`}
                alt={category.title}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h2 className="mt-4 text-lg tracking-wide uppercase">
              {category.title}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  )
}
