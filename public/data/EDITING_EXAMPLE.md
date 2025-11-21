# Quick Editing Examples

## Example 1: Change Hero Section Text

**Before:**
```json
"hero": {
  "title": "Piyush Bholla",
  "subtitle": "Indian Fashion Stylist & Creative Director",
  "description": "Celebrating the timeless elegance of Indian fashion with contemporary flair"
}
```

**After (Your Changes):**
```json
"hero": {
  "title": "Your Name",
  "subtitle": "Your Professional Title",
  "description": "Your tagline or description"
}
```

## Example 2: Update Contact Information

**Before:**
```json
"contact": {
  "email": "hello@piyushbabu.com",
  "phone": "+1 (555) 123-4567",
  "location": "New York, NY (Travel Available)",
  "instagram": "@piyushbhollafashion"
}
```

**After (Your Changes):**
```json
"contact": {
  "email": "your@email.com",
  "phone": "+91 98765 43210",
  "location": "Mumbai, India",
  "instagram": "@yourusername"
}
```

## Example 3: Edit a Testimonial

**Before:**
```json
{
  "name": "Priya Sharma",
  "role": "Bollywood Actress",
  "content": "Piyush Bholla has an incredible understanding...",
  "rating": 5
}
```

**After (Your Changes):**
```json
{
  "name": "Your Client Name",
  "role": "Their Title/Role",
  "content": "Their testimonial text here...",
  "rating": 5
}
```

## Example 4: Update Service Pricing

**Before:**
```json
{
  "title": "Bridal Styling",
  "pricing": "Starting from ₹75,000",
  "duration": "3-5 days"
}
```

**After (Your Changes):**
```json
{
  "title": "Bridal Styling",
  "pricing": "Starting from ₹1,00,000",
  "duration": "5-7 days"
}
```

## Example 5: Change About Statistics

**Before:**
```json
"stats": {
  "experience": {
    "label": "Experience",
    "value": "8+ Years"
  },
  "projects": {
    "label": "Projects",
    "value": "200+ Completed"
  }
}
```

**After (Your Changes):**
```json
"stats": {
  "experience": {
    "label": "Experience",
    "value": "10+ Years"
  },
  "projects": {
    "label": "Projects",
    "value": "300+ Completed"
  }
}
```

## Tips for Editing

1. **Keep the structure** - Don't remove the quotes or commas
2. **Only change values** - The text after the colon
3. **Save the file** - Use Ctrl+S or Cmd+S
4. **Refresh browser** - See your changes instantly
5. **Use a JSON validator** - If unsure, paste your JSON at jsonlint.com

## Common Mistakes to Avoid

❌ **Don't do this:**
```json
"title": Piyush Bholla  // Missing quotes
```

✅ **Do this:**
```json
"title": "Piyush Bholla"  // Correct
```

❌ **Don't do this:**
```json
"title": "Piyush Bholla"  // Missing comma
"subtitle": "Stylist"
```

✅ **Do this:**
```json
"title": "Piyush Bholla",  // Has comma
"subtitle": "Stylist"
```
