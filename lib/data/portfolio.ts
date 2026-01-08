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
          "This kidswear project explores playful silhouettes combined with thoughtful detailing, designed to celebrate movement, comfort, and individuality. The styling reflects a balance between contemporary fashion sensibilities and child-friendly functionality.",
          "Soft fabrics, relaxed fits, and a vibrant yet controlled colour palette form the visual language of the collection. Each look is crafted to feel expressive without being overwhelming, allowing the personality of the child to remain at the centre.",
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
          "This kidswear project explores playful silhouettes combined with thoughtful detailing, designed to celebrate movement, comfort, and individuality. The styling reflects a balance between contemporary fashion sensibilities and child-friendly functionality.",
          "Soft fabrics, relaxed fits, and a vibrant yet controlled colour palette form the visual language of the collection. Each look is crafted to feel expressive without being overwhelming, allowing the personality of the child to remain at the centre.",
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
          "This Menswear project explores playful silhouettes combined with thoughtful detailing, designed to celebrate movement, comfort, and individuality. The styling reflects a balance between contemporary fashion sensibilities and child-friendly functionality.",
          "Soft fabrics, relaxed fits, and a vibrant yet controlled colour palette form the visual language of the collection. Each look is crafted to feel expressive without being overwhelming, allowing the personality of the child to remain at the centre.",
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
          "This Menswear project explores playful silhouettes combined with thoughtful detailing, designed to celebrate movement, comfort, and individuality. The styling reflects a balance between contemporary fashion sensibilities and child-friendly functionality.",
          "Soft fabrics, relaxed fits, and a vibrant yet controlled colour palette form the visual language of the collection. Each look is crafted to feel expressive without being overwhelming, allowing the personality of the child to remain at the centre.",
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
          "This Womenswear project explores playful silhouettes combined with thoughtful detailing, designed to celebrate movement, comfort, and individuality. The styling reflects a balance between contemporary fashion sensibilities and child-friendly functionality.",
          "Soft fabrics, relaxed fits, and a vibrant yet controlled colour palette form the visual language of the collection. Each look is crafted to feel expressive without being overwhelming, allowing the personality of the child to remain at the centre.",
          "The project focuses on storytelling through natural poses and effortless styling, creating imagery that feels joyful, authentic, and timeless. It is intended for lookbooks and campaigns that value both design integrity and emotional connection.",
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
          "This Womenswear project explores playful silhouettes combined with thoughtful detailing, designed to celebrate movement, comfort, and individuality. The styling reflects a balance between contemporary fashion sensibilities and child-friendly functionality.",
          "Soft fabrics, relaxed fits, and a vibrant yet controlled colour palette form the visual language of the collection. Each look is crafted to feel expressive without being overwhelming, allowing the personality of the child to remain at the centre.",
          "The project focuses on storytelling through natural poses and effortless styling, creating imagery that feels joyful, authentic, and timeless. It is intended for lookbooks and campaigns that value both design integrity and emotional connection.",
        ],
      },


    },

  },

}