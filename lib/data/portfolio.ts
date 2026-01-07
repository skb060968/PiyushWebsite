export const portfolioData = {
  kidswear: {
    title: "Kidswear",
    projects: {
      project1: {
        title: "Kidswear Lookbook",
        thumbnail: "/images/portfolio/kidswear/project1/thumbnail.jpg",
        description: [
          "This kidswear lookbook explores playful proportions, soft textures, and a cheerful color palette designed for everyday comfort.",
          "The styling focuses on ease of movement while maintaining a strong visual identity, blending contemporary silhouettes with timeless details.",
          "Each look has been curated to reflect a balance between fashion-forward styling and practical wearability."
        ],
        images: [
          "/images/portfolio/kidswear/project1/image1.jpg",
          "/images/portfolio/kidswear/project1/image2.jpg"
        ]
      },
      project2: {
        title: "Kidswear Campaign",
        thumbnail: "/images/portfolio/kidswear/project2/thumbnail.jpg",
        description: [
          "This campaign highlights expressive styling through layered garments and dynamic compositions.",
          "The visual narrative celebrates childhood energy, spontaneity, and individuality."
        ],
        images: [
          "/images/portfolio/kidswear/project2/image1.jpg",
          "/images/portfolio/kidswear/project2/image2.jpg"
        ]
      }
    }
  },

  menswear: {
    title: "Menswear",
    projects: {
      project1: {
        title: "Menswear Lookbook",
        thumbnail: "/images/portfolio/menswear/project1/thumbnail.jpg",
        description: [
          "A modern menswear lookbook focusing on clean tailoring and subtle texture play.",
          "The styling emphasizes structure, proportion, and refined layering."
        ],
        images: [
          "/images/portfolio/menswear/project1/image1.jpg",
          "/images/portfolio/menswear/project1/image2.jpg"
        ]
      }
    }
  },

  womenswear: {
    title: "Womenswear",
    projects: {
      project1: {
        title: "Womenswear Editorial",
        thumbnail: "/images/portfolio/womenswear/project1/thumbnail.jpg",
        description: [
          "This editorial explores fluid silhouettes and soft draping with a contemporary aesthetic.",
          "Each look is styled to highlight movement, texture, and understated elegance."
        ],
        images: [
          "/images/portfolio/womenswear/project1/image1.jpg",
          "/images/portfolio/womenswear/project1/image2.jpg"
        ]
      }
    }
  }
} as const
