# Content Management Guide

## Overview
This website uses `content.json` to manage all text content dynamically. You can update any text on the website by simply editing this JSON file.

## How to Update Content

1. Open `public/data/content.json`
2. Find the section you want to update
3. Edit the text values
4. Save the file
5. Refresh your website - changes will appear automatically!

## File Structure

### Site Information
- `siteInfo`: Site name, tagline, copyright

### Homepage Sections
- `hero`: Main hero section text and buttons
- `about`: About section on homepage
- `featuredWork`: Featured work section
- `testimonials`: Client testimonials

### Pages
- `aboutPage`: Full about page content
- `servicesPage`: Services page content
- `portfolio`: Portfolio page content
- `contact`: Contact page content

### Data Collections
- `portfolioProjects`: Array of 4 portfolio projects (can add more)
- `services.items`: Array of service offerings
- `experience`: Professional experience timeline
- `achievements`: Awards and recognition
- `skills`: Skills organized by category
- `process`: 5-step process workflow
- `faq`: Frequently asked questions

## Adding New Portfolio Projects

To add a new project, copy this template and add it to the `portfolioProjects` array:

```json
{
  "id": 5,
  "title": "Your Project Title",
  "category": "Project Category",
  "thumbnail": "/images/portfolio/Project5/thumbnail.jpeg",
  "description": "Short description for listing page",
  "client": "Client Name",
  "year": "2024",
  "location": "Location",
  "fullDescription": "Detailed project description",
  "images": [
    "/images/portfolio/Project5/image1.jpeg",
    "/images/portfolio/Project5/image2.jpeg",
    "/images/portfolio/Project5/image3.jpeg"
  ]
}
```

## Tips

- Keep text concise and clear
- Maintain consistent tone across sections
- Update image paths if you change image locations
- Test changes on your local development server before deploying
- Keep a backup of the original content.json file

## Need Help?

If you encounter any issues or need to add new sections, contact your developer.
