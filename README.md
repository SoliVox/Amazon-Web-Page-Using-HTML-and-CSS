# Amazon Web Page Clone - HTML & CSS

A fully responsive Amazon India homepage clone built with HTML, CSS, and JavaScript. This project recreates the look and feel of Amazon's e-commerce platform with modern web development practices.

## 🌟 Features

- **Responsive Navigation Bar** - Complete header with logo, location selector, search bar, account menu, and shopping cart
- **Product Categories** - Multiple product cards showcasing different categories
- **Hero Banner** - Eye-catching hero section with gradient overlay
- **Interactive Elements** - Hover effects, clickable buttons, and smooth scrolling
- **Footer Section** - Multi-column footer with links and company information
- **Mobile Responsive** - Fully responsive design that works on all devices
- **Modern CSS** - Grid and Flexbox layouts for optimal performance

## 🚀 Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Grid, Flexbox, and animations
- **JavaScript** - Interactive functionality
- **Font Awesome 6** - Icons throughout the interface

## 📁 Project Structure

```
Amazon-Web-Page-Using-HTML-and-CSS/
│
├── index.html          # Main HTML file
├── style.css           # Complete styling
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── ASSETS_README.md    # Assets guide
│
├── assets/             # Product images folder
│   └── (Add product images here)
│
└── main-assets/        # Logo and icons folder
    └── (Add logo and flag images here)
```

## 🎨 Sections Included

1. **Navigation Bar**
   - Amazon logo
   - Location delivery selector
   - Search bar with category dropdown
   - Language/country selector
   - Account & Lists dropdown
   - Returns & Orders
   - Shopping cart

2. **Menu Bar**
   - All categories menu
   - Quick access links (Amazon miniTV, Sell, Best Sellers, etc.)
   - Location availability check

3. **Quick Links**
   - Amazon Fashion categories
   - 30-day returns policy banner

4. **Hero Section**
   - Large banner image with gradient overlay

5. **Product Cards** (8+ categories)
   - Smartwatches
   - Home decor
   - Headphones
   - Men's fashion
   - Home improvement
   - Computer accessories
   - Women's fashion
   - Home appliances
   - Kids' toys

6. **Sign In Section**
   - New customer registration prompt

7. **Footer**
   - Multi-column link sections
   - Country/language selector
   - Amazon services links
   - Legal information

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/SoliVox/Amazon-Web-Page-Using-HTML-and-CSS.git
   cd Amazon-Web-Page-Using-HTML-and-CSS
   ```

2. **Add Images**
   - Place product images in the `assets/` folder
   - Place logo and icons in the `main-assets/` folder
   - See the "Assets Guide" section below for detailed requirements
3. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):

     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

4. **View the Website**
4. **View the Website**
   - Navigate to `http://localhost:8000` (if using local server)
   - Or directly open the `index.html` file

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ✨ Interactive Features

- Smooth scroll to top button
- Hover effects on cards and navigation items
- Interactive search functionality
- Location update feature
- Shopping cart counter
- Clickable product cards
- Responsive menu items

## 🎯 Key CSS Features

- CSS Grid for card layouts
- Flexbox for navigation alignment
- CSS transitions and hover effects
- Media queries for responsiveness
- Linear gradients for visual appeal
- Box shadows for depth
- Border radius for modern look

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🖼️ Assets Guide

### Required Images

To complete the Amazon frontend, you need to add the following images to the respective folders:

#### Main Assets Folder (`main-assets/`)
- **logo.png** - Amazon logo (white version for dark backgrounds)
- **indian flag.png** - Indian flag icon for country selection

#### Assets Folder (`assets/`)

**Product Images:**

- **Watch.jpg** - Smartwatch product image
- **A1.jpg** to **A4.jpg** - Home decor, furnishings, storage, and lighting
- **B1.jpg** to **B4.jpg** - Headphones from different brands (boAt, boult, Noise, Zebronics)
- **C1.jpg** to **C4.jpg** - Men's fashion (clothing, footwear, watches, bags)
- **D1.jpg** to **D4.jpg** - Home improvement items
- **E1.jpg** to **E4.jpg** - Gaming and computer accessories
- **F1.jpg** to **F4.jpg** - Women's fashion (clothing, footwear, watches, jewelry)
- **G1.jpg** to **G4.jpg** - Home appliances (AC, refrigerator, microwave, washing machine)
- **H1.jpg** to **h4.jpg** - Kids' toys (bikes, sports, soft toys, indoor games)

### How to Add Images

1. Download or create the required images
2. Save them with the exact names listed above
3. Place them in the appropriate folder (`assets/` or `main-assets/`)
4. Recommended image dimensions:
   - Logo: 300x100px (transparent background)
   - Product images: 500x500px or larger
   - Hero banner: 3000x400px

### Alternative: Using Placeholder Images

If you want to test the layout without real images, you can use placeholder services:
- [Placeholder.com](https://via.placeholder.com/500x500)
- [Picsum Photos](https://picsum.photos/500/500)
- [Unsplash](https://unsplash.com) - High-quality free photos
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images and videos

**Note:** The hero banner already uses an Amazon CDN image URL, so the site will work immediately. Product cards will show broken image icons until you add the photos.

### Image Optimization Tips

- Make sure image file names match exactly (including case sensitivity)
- Optimize images for web (compress to reduce file size)
- Use JPEG for photos and PNG for logos/icons with transparency
- Consider using WebP format for better compression
- Recommended tools: TinyPNG, ImageOptim, Squoosh

## 📝 Customization

### Colors
Main colors used (can be customized in `style.css`):
- Primary Dark: `#131921`
- Secondary Dark: `#232f3e`
- Amazon Orange: `#febd69`
- Link Blue: `#007185`
- Background: `#e3e6e6`

### Fonts
- Default: Arial, sans-serif
- You can add custom fonts in the CSS file

### Images
- Update image paths in `index.html`
- Follow the Assets Guide above for image specifications

## 🚧 Future Enhancements

- [ ] Add product detail pages
- [ ] Implement working search functionality
- [ ] Add user authentication
- [ ] Create shopping cart functionality
- [ ] Add product filters and sorting
- [ ] Implement lazy loading for images
- [ ] Add animations and transitions
- [ ] Create additional pages (checkout, account, etc.)

## 📄 License

This project is for educational purposes only. Amazon and its logo are trademarks of Amazon.com, Inc. or its affiliates.

## 👨‍💻 Author

**SoliVox**
- GitHub: [@SoliVox](https://github.com/SoliVox)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📧 Contact

For any questions or feedback, please open an issue on GitHub.

---

**Note**: This is a clone for educational purposes. All rights to the Amazon brand and design belong to Amazon.com, Inc.

This is a Amazon  webpage made by using HTML and CSS. This is a part of frontend development practice.
