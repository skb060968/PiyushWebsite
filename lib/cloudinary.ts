// Cloudinary configuration for image management
// To use this, sign up at https://cloudinary.com and get your credentials

export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
}

// Helper function to generate Cloudinary URLs
export const getCloudinaryUrl = (publicId: string, transformations?: string) => {
  const baseUrl = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload`
  
  if (transformations) {
    return `${baseUrl}/${transformations}/${publicId}`
  }
  
  return `${baseUrl}/${publicId}`
}

// Common transformations for different image types
export const imageTransformations = {
  hero: 'w_1920,h_1080,c_fill,q_auto,f_auto',
  portfolio: 'w_800,h_1000,c_fill,q_auto,f_auto',
  thumbnail: 'w_400,h_300,c_fill,q_auto,f_auto',
  about: 'w_600,h_700,c_fill,q_auto,f_auto',
}

// Example usage:
// const heroImage = getCloudinaryUrl('piyush-bholla/hero-background', imageTransformations.hero)