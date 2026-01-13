// app/portfolio/page.tsx
import { portfolioData } from "@/lib/data/portfolio"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-white">
      <div className="container-max flex-grow">
        {/* Back link to site home */}
        <div className="mb-6">
          <Link
            href="/"
            className="
              text-blue-600
              hover:text-yellow-500
              active:text-yellow-600
              transition-colors
              duration-300
            "
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="font-serif text-4xl font-bold text-fashion-black mb-8">
          Portfolio
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          {Object.entries(portfolioData).map(([categoryKey, category]) => (
            <Link
              key={categoryKey}
              href={`/portfolio/${categoryKey}`}
              className="block rounded-lg shadow hover:shadow-lg transition"
            >
              <Image
                src={category.thumbnail}
                alt={`${category.title} thumbnail`}
                width={400}
                height={300}
                className="rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="font-serif text-xl font-semibold text-fashion-black">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
