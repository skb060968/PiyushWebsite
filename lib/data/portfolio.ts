export type SubProject = {
  title: string
  thumbnail: string
  images: string[]
  description: string[]
}

export type CategoryData = {
  title: string
  thumbnail: string
  projects: Record<string, SubProject>
}

export const portfolioData: Record<string, CategoryData> = {
  kidswear: {
    title: "Kidswear",
    thumbnail: "/images/portfolio/kidswear/thumbnail.jpg",
    projects: {
      project1: {
        title: "Lookbook",
        thumbnail: "/images/portfolio/kidswear/project1/thumbnail.jpg",
        images: [
          "/images/portfolio/kidswear/project1/image1.jpg",
          "/images/portfolio/kidswear/project1/image2.jpg",
        ],
        description: [
          "A playful kidswear lookbook inspired by modern Indian silhouettes.",
          "Soft fabrics, expressive styling, and vibrant colour palettes.",
        ],
      },
      project2: {
        title: "Campaign",
        thumbnail: "/images/portfolio/kidswear/project2/thumbnail.jpg",
        images: [
          "/images/portfolio/kidswear/project2/image1.jpg",
          "/images/portfolio/kidswear/project2/image2.jpg",
        ],
        description: [
          "A festive kidswear campaign designed for commercial storytelling.",
          "Balanced composition with strong visual narrative.",
        ],
      },
    },
  },

  menswear: {
    title: "Menswear",
    thumbnail: "/images/portfolio/menswear/thumbnail.jpg",
    projects: {
      project1: {
        title: "Lookbook",
        thumbnail: "/images/portfolio/menswear/project1/thumbnail.jpg",
        images: [
          "/images/portfolio/menswear/project1/image1.jpg",
          "/images/portfolio/menswear/project1/image2.jpg",
        ],
        description: [
          "Contemporary menswear styling with structured silhouettes.",
          "Designed for editorial and fashion campaigns.",
        ],
      },
    },
  },

  womenswear: {
    title: "Womenswear",
    thumbnail: "/images/portfolio/womenswear/thumbnail.jpg",
    projects: {
      project1: {
        title: "Campaign",
        thumbnail: "/images/portfolio/womenswear/project1/thumbnail.jpg",
        images: [
          "/images/portfolio/womenswear/project1/image1.jpg",
          "/images/portfolio/womenswear/project1/image2.jpg",
        ],
        description: [
          "Elegant womenswear campaign rooted in Indian craftsmanship.",
          "Flowing silhouettes paired with modern aesthetics.",
        ],
      },
    },
  },
}
