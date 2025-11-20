# Portfolio Images

This directory contains images for portfolio projects.

## Structure

Each project has its own folder (Project1 through Project10):
- `Project1/` - Images for Project 1
- `Project2/` - Images for Project 2
- ... and so on

## Image Naming Convention

For each project folder, add images with the following names:
- `thumbnail.jpg` - Main thumbnail image shown on portfolio grid
- `image1.jpg` - First detail image
- `image2.jpg` - Second detail image
- `image3.jpg` - Third detail image

You can add more images as needed (image4.jpg, image5.jpg, etc.)

## Replacing Placeholder Images

Currently, the site uses Unsplash placeholder images. To use your own images:

1. Add your images to the respective project folders
2. Update the image paths in:
   - `app/portfolio/page.tsx` (for thumbnail images)
   - `app/portfolio/[id]/page.tsx` (for detail page images)

Example:
```typescript
// Change from:
image: 'https://images.unsplash.com/...'

// To:
image: '/images/portfolio/Project1/thumbnail.jpg'
```
