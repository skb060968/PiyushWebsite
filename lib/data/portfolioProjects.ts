export type SubProject = {
  title: string
  fullDescription: string
  images: string[]
}

export type CategoryProject = {
  title: string
  thumbnail: string
  subProjects: {
    project1: SubProject
    project2: SubProject
  }
}

export type PortfolioProjects = {
  kidswear: CategoryProject
  menswear: CategoryProject
  womenswear: CategoryProject
}

export const portfolioProjects: PortfolioProjects = {
  kidswear: {
    title: "Kidswear",
    thumbnail: "images/portfolio/kidswear/thumbnail.jpg",
    subProjects: {
      project1: {
        title: "Kidswear Project One",
        fullDescription:
          "This is a dummy description for Kidswear Project One. It represents a detailed narrative of the concept, inspiration, styling approach, and execution. Replace this text later with real content.",
        images: [
          "images/portfolio/kidswear/project1/image1.jpg",
          "images/portfolio/kidswear/project1/image2.jpg"
        ]
      },
      project2: {
        title: "Kidswear Project Two",
        fullDescription:
          "This is a dummy description for Kidswear Project Two. It can describe a campaign, editorial, or creative exploration within the kidswear category.",
        images: [
          "images/portfolio/kidswear/project2/image1.jpg",
          "images/portfolio/kidswear/project2/image2.jpg"
        ]
      }
    }
  },

  menswear: {
    title: "Menswear",
    thumbnail: "images/portfolio/menswear/thumbnail.jpg",
    subProjects: {
      project1: {
        title: "Menswear Project One",
        fullDescription:
          "Dummy content for Menswear Project One. This section will eventually include detailed styling notes, visual storytelling, and conceptual direction.",
        images: [
          "images/portfolio/menswear/project1/image1.jpg",
          "images/portfolio/menswear/project1/image2.jpg"
        ]
      },
      project2: {
        title: "Menswear Project Two",
        fullDescription:
          "Dummy content for Menswear Project Two. Ideal for a campaign or editorial style presentation with strong visuals.",
        images: [
          "images/portfolio/menswear/project2/image1.jpg",
          "images/portfolio/menswear/project2/image2.jpg"
        ]
      }
    }
  },

  womenswear: {
    title: "Womenswear",
    thumbnail: "images/portfolio/womenswear/thumbnail.jpg",
    subProjects: {
      project1: {
        title: "Womenswear Project One",
        fullDescription:
          "Dummy description for Womenswear Project One. Replace this with a detailed explanation of the design language and visual mood.",
        images: [
          "images/portfolio/womenswear/project1/image1.jpg",
          "images/portfolio/womenswear/project1/image2.jpg"
        ]
      },
      project2: {
        title: "Womenswear Project Two",
        fullDescription:
          "Dummy description for Womenswear Project Two. This content supports long-form storytelling paired with imagery.",
        images: [
          "images/portfolio/womenswear/project2/image1.jpg",
          "images/portfolio/womenswear/project2/image2.jpg"
        ]
      }
    }
  }
}
