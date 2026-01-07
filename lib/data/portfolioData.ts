export type SubProject = {
  title: string
  thumbnail: string
  description: string
  images: string[]
}

export type CategoryData = {
  title: string
  projects: Record<string, SubProject>
}

export const portfolioData: Record<string, CategoryData> = {
  kidswear: {
    title: "Kidswear",
    projects: {
      project1: {
        title: "Lookbook",
        thumbnail: "images/portfolio/kidswear/project1/thumbnail.jpg",
        description:
          "A playful kidswear lookbook focused on comfort, color, and movement. Designed for modern lifestyles while preserving a youthful spirit.",
        images: [
          "images/portfolio/kidswear/project1/image1.jpg",
          "images/portfolio/kidswear/project1/image2.jpg",
        ],
      },
      project2: {
        title: "Campaign",
        thumbnail: "images/portfolio/kidswear/project2/thumbnail.jpg",
        description:
          "A vibrant kidswear campaign capturing energy and imagination through expressive styling and storytelling visuals.",
        images: [
          "images/portfolio/kidswear/project2/image1.jpg",
          "images/portfolio/kidswear/project2/image2.jpg",
        ],
      },
    },
  },

  menswear: {
    title: "Menswear",
    projects: {
      project1: {
        title: "Lookbook",
        thumbnail: "images/portfolio/menswear/project1/thumbnail.jpg",
        description:
          "Contemporary menswear styling blending tailored silhouettes with relaxed textures for a refined yet wearable look.",
        images: [
          "images/portfolio/menswear/project1/image1.jpg",
          "images/portfolio/menswear/project1/image2.jpg",
        ],
      },
      project2: {
        title: "Campaign",
        thumbnail: "images/portfolio/menswear/project2/thumbnail.jpg",
        description:
          "A bold menswear campaign emphasizing structure, mood, and confidence through strong visual narratives.",
        images: [
          "images/portfolio/menswear/project2/image1.jpg",
          "images/portfolio/menswear/project2/image2.jpg",
        ],
      },
    },
  },

  womenswear: {
    title: "Womenswear",
    projects: {
      project1: {
        title: "Lookbook",
        thumbnail: "images/portfolio/womenswear/project1/thumbnail.jpg",
        description:
          "Elegant womenswear lookbook showcasing flowing forms, refined palettes, and expressive styling.",
        images: [
          "images/portfolio/womenswear/project1/image1.jpg",
          "images/portfolio/womenswear/project1/image2.jpg",
        ],
      },
      project2: {
        title: "Campaign",
        thumbnail: "images/portfolio/womenswear/project2/thumbnail.jpg",
        description:
          "A fashion-forward womenswear campaign built around movement, mood, and visual storytelling.",
        images: [
          "images/portfolio/womenswear/project2/image1.jpg",
          "images/portfolio/womenswear/project2/image2.jpg",
        ],
      },
    },
  },
}
