# Pippit Fitness Website

A clone of the Taliyah Joelle Fitness website, customized with your own photo and an image uploader feature.

## Features

1. **Custom Hero Image**: Your photo (`main-image.png`) is displayed as the main fitness model image
2. **Image Uploader**: Simple interface to upload and replace the hero image without editing code
3. **Responsive Design**: Works on desktop, tablet, and mobile devices
4. **Same Color Scheme**: Uses a similar color palette to the original website (coral pink, white, dark gray)
5. **Complete Structure**: All sections from the original website:
   - Hero section with call-to-action
   - "Ready to begin?" section with circular buttons
   - Elite Membership features
   - Client results gallery
   - About Me section with credentials
   - App promotion
   - Footer with social links

## How to Use

### Initial Setup
1. Place your main image in the project folder as `main-image.png`
2. Open `index.html` in any modern web browser
3. The website will load with your image as the hero image

### Changing the Hero Image
1. In the hero section, find the "Update Main Image" box
2. Click the "Upload Image" button
3. Select a new image file (JPEG, PNG, etc., max 5MB)
4. The image will immediately replace the current hero image
5. The image is saved in browser's localStorage, so it persists across page refreshes

### Customization
- Edit `style.css` to change colors, fonts, or layout
- Edit `index.html` to update text content
- Replace external image URLs (buttons, icons) with your own hosted versions for production

## File Structure
```
pippit-fitness-website/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── main-image.png      # Your hero image
├── original.html      # Downloaded original HTML (reference)
├── original.css       # Downloaded original CSS (reference)
└── README.md          # This file
```

## Technologies Used
- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (for image uploader functionality)
- Font Awesome icons
- Google Fonts (Montserrat and Lato)

## Browser Support
- Chrome, Firefox, Safari, Edge (modern versions)
- Mobile browsers (iOS Safari, Chrome for Android)

## Notes
– The website uses some images from the original site (buttons, doodle icons, logos). For a production site, download and host these locally.
– The image uploader saves images to browser localStorage, which has size limitations. For permanent storage, a backend would be needed.
– The color scheme is based on common fitness website aesthetics; adjust in `:root` CSS variables.

## Future Enhancements
1. Backend integration for permanent image storage
2. Contact form with email functionality
3. User authentication for member areas
4. Payment integration for membership subscriptions
5. Blog or content management system

## Credits
Based on the design of Taliyah Joelle Fitness (https://www.taliyahjoellefitness.com/)
Created with Claude Code