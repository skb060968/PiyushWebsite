// lib/data/portfolio.ts

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

// Utility function to prepend the GitHub Pages base path
const BASE_PATH = "/PiyushWebsite"
const withBasePath = (path: string) => `${BASE_PATH}/${path}`

export const portfolioData: Record<string, CategoryData> = {

  kidswear: {
    title: "Kidswear",
    thumbnail: withBasePath("images/portfolio/kidswear/thumbnail.jpg"),

    projects: {


      project1: {
        title: "Lookbook",
        thumbnail: withBasePath("images/portfolio/kidswear/project1/thumbnail.jpg"),
        images: [
          withBasePath("images/portfolio/kidswear/project1/image1.jpg"),
          withBasePath("images/portfolio/kidswear/project1/image2.jpg"),
        ],
        description: [
          "A playful kidswear lookbook inspired by modern Indian silhouettes.",
          "Soft fabrics, expressive styling, and vibrant colour palettes.",
        ],
      },


      project2: {
        title: "Campaign",
        thumbnail: withBasePath("images/portfolio/kidswear/project2/thumbnail.jpg"),
        images: [
          withBasePath("images/portfolio/kidswear/project2/image1.jpg"),
          withBasePath("images/portfolio/kidswear/project2/image2.jpg"),
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
    thumbnail: withBasePath("images/portfolio/menswear/thumbnail.jpg"),

    projects: {


      project1: {
        title: "Formals",
        thumbnail: withBasePath("images/portfolio/menswear/project1/thumbnail.jpg"),
        images: [
          withBasePath("images/portfolio/menswear/project1/image1.jpg"),
          withBasePath("images/portfolio/menswear/project1/image2.jpg"),
        ],
        description: [
          "Contemporary menswear styling with structured silhouettes.",
          "Designed for editorial and fashion campaigns.",
        ],
      },


       project2: {
        title: "Casuals",
        thumbnail: withBasePath("images/portfolio/menswear/project2/thumbnail.jpg"),
        images: [
          withBasePath("images/portfolio/menswear/project2/image1.jpg"),
          withBasePath("images/portfolio/menswear/project2/image2.jpg"),
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
    thumbnail: withBasePath("images/portfolio/womenswear/thumbnail.jpg"),

    projects: {


      project1: {
        title: "Bridal",
        thumbnail: withBasePath("images/portfolio/womenswear/project1/thumbnail.jpg"),
        images: [
          withBasePath("images/portfolio/womenswear/project1/image1.jpg"),
          withBasePath("images/portfolio/womenswear/project1/image2.jpg"),
        ],
        description: [
          "Elegant womenswear campaign rooted in Indian craftsmanship.",
          "Flowing silhouettes paired with modern aesthetics.",
        ],
      },


      project2: {
        title: "Ethnic",
        thumbnail: withBasePath("images/portfolio/womenswear/project2/thumbnail.jpg"),
        images: [
          withBasePath("images/portfolio/womenswear/project2/image1.jpg"),
          withBasePath("images/portfolio/womenswear/project2/image2.jpg"),
        ],
        description: [
          "Elegant womenswear campaign rooted in Indian craftsmanship.",
          "Flowing silhouettes paired with modern aesthetics.",
        ],
      },


    },

  },

}