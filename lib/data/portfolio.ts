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
          "",
          "",
          "The project focuses on storytelling through natural poses and effortless styling, creating imagery that feels joyful, authentic, and timeless. It is intended for lookbooks and campaigns that value both design integrity and emotional connection.",
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
          "",
          "",
          "The project focuses on storytelling through natural poses and effortless styling, creating imagery that feels joyful, authentic, and timeless. It is intended for lookbooks and campaigns that value both design integrity and emotional connection.",
        ],
      },


 project3: {
        title: "wonderland",
        thumbnail: withBasePath("images/portfolio/kidswear/project3/thumbnail.jpg"),
        images: [
          withBasePath("images/portfolio/kidswear/project3/image1.jpg"),
          withBasePath("images/portfolio/kidswear/project3/image2.jpg"),
        ],
        description: [
          "",
          "",
          "The project focuses on storytelling through natural poses and effortless styling, creating imagery that feels joyful, authentic, and timeless. It is intended for lookbooks and campaigns that value both design integrity and emotional connection.",
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
          "",
          "",
          "The project focuses on storytelling through natural poses and effortless styling, creating imagery that feels joyful, authentic, and timeless. It is intended for lookbooks and campaigns that value both design integrity and emotional connection.",
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
          "",
          "",
          "The project focuses on storytelling through natural poses and effortless styling, creating imagery that feels joyful, authentic, and timeless. It is intended for lookbooks and campaigns that value both design integrity and emotional connection.",
        ],
      },

  project3: {
        title: "Ethnic",
        thumbnail: withBasePath("images/portfolio/menswear/project3/thumbnail.jpg"),
        images: [
          withBasePath("images/portfolio/menswear/project3/image1.jpg"),
          withBasePath("images/portfolio/menswear/project3/image2.jpg"),
        ],
        description: [
          "",
          "",
          "The project focuses on storytelling through natural poses and effortless styling, creating imagery that feels joyful, authentic, and timeless. It is intended for lookbooks and campaigns that value both design integrity and emotional connection.",
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
          "",
          "",
          "The project focuses on storytelling through natural poses and effortless styling, creating imagery that feels joyful, authentic, and timeless. It is intended for lookbooks and campaigns that value both design integrity and emotional connection.",
        ],
      },


      project2: {
        title: "Partywear",
        thumbnail: withBasePath("images/portfolio/womenswear/project2/thumbnail.jpg"),
        images: [
          withBasePath("images/portfolio/womenswear/project2/image1.jpg"),
          withBasePath("images/portfolio/womenswear/project2/image2.jpg"),
        ],
        description: [
          "",
          "",
          "The project focuses on storytelling through natural poses and effortless styling, creating imagery that feels joyful, authentic, and timeless. It is intended for lookbooks and campaigns that value both design integrity and emotional connection.",
        ],
      },

project3: {
        title: "Glamour",
        thumbnail: withBasePath("images/portfolio/womenswear/project3/thumbnail.jpg"),
        images: [
          withBasePath("images/portfolio/womenswear/project3/image1.jpg"),
          withBasePath("images/portfolio/womenswear/project3/image2.jpg"),
        ],
        description: [
          "",
          "",
          "The project focuses on storytelling through natural poses and effortless styling, creating imagery that feels joyful, authentic, and timeless. It is intended for lookbooks and campaigns that value both design integrity and emotional connection.",
        ],
      },



    },

  },

}