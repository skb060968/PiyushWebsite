import Link from "next/link"
import Image from "next/image"
import { content } from "@/lib/data"
import { getImagePath } from "@/lib/utils"

export default function About() {
  const { about } = content

  return (
    <section className="section-padding bg-fashion-gray">
      <div className="container-max">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/"
            className="
              text-sm
              text-gray-600
              hover:text-yellow-500
              active:text-yellow-600
              transition-colors
              duration-300
            "
          >
            ← Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition">
            <Image
              src={getImagePath("images/about/piyush2.jpg")}
              alt="Piyush Bholla"
              width={600}
              height={700}
              className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-fashion-gold rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-serif text-lg font-bold">PG</span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-fashion-black mb-6">
                {about.heading}
              </h2>
              <div className="w-20 h-1 bg-fashion-gold mb-6"></div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {about.paragraph1}
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {about.paragraph2}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4
                  className="
                    font-serif
                    text-xl
                    font-semibold
                    text-fashion-black
                    hover:text-yellow-500
                    transition-colors
                    duration-300
                    mb-2
                  "
                >
                  {about.stats.experience.label}
                </h4>
                <p className="text-gray-600">{about.stats.experience.value}</p>
              </div>
              <div>
                <h4
                  className="
                    font-serif
                    text-xl
                    font-semibold
                    text-fashion-black
                    hover:text-yellow-500
                    transition-colors
                    duration-300
                    mb-2
                  "
                >
                  {about.stats.projects.label}
                </h4>
                <p className="text-gray-600">{about.stats.projects.value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
