# 🌙 مكة المكرمة - Discover Makkah

**موقع سياحي ثنائي اللغة لعرض معالم مكة المكرمة**

A modern, bilingual (Arabic/English) responsive landing page showcasing the landmarks and historical sites of Makkah, built with pure HTML, CSS, and JavaScript.

## ✨ المميزات / Features

### 🌐 ثنائي اللغة / Bilingual Support
- دعم كامل للغة العربية والإنجليزية
- تبديل فوري للغة مع الحفاظ على تفضيلات المستخدم
- دعم RTL/LTR تلقائي
- Full Arabic and English support
- Instant language switching with user preferences
- Automatic RTL/LTR support

### 🎨 التصميم / Design
- **الألوان / Color Scheme**: أزرق وأصفر عصري وحديث
- تصميم متجاوب بالكامل يعمل على جميع الأجهزة
- **Modern Blue & Yellow Color Scheme**
- Fully responsive design for all devices

### 📱 Responsive Design
- Mobile-first approach
- Works seamlessly on phones, tablets, and desktops
- Hamburger menu for mobile devices
- Touch-friendly interface

### 🏛️ Sections Included

#### 1. Hero Section
- Full-width panoramic background
- Bilingual headlines and descriptions
- Call-to-action button
- Smooth scroll indicator

#### 2. Religious Landmarks / المعالم الدينية
- 🕋 The Grand Mosque (المسجد الحرام)
- 🕐 Clock Tower Museum (متحف برج الساعة)
- 🕋 Kiswa Factory (مصنع كسوة الكعبة)
- 📖 Holy Qur'an Museum (متحف القرآن الكريم)

#### 3. Cultural & Historical Sites / المعالم الثقافية والتاريخية
- 🕌 Hira Cultural District (منطقة حراء الثقافية)
- 🏔 Hira Cave (غار حراء)
- 🪨 Thawr Cave (غار ثور)
- 🕌 Al-Jinn Mosque (مسجد الجن)

#### 4. Museums & Exhibitions / المتاحف والمعارض
- 🕯 International Exhibition & Museum of Prophet's Biography
- 🌙 Revelation Exhibition (معرض الوحي)
- 🕍 Two Holy Mosques Exhibition (معرض الحرمين)

#### 5. Mount of Mercy & Pilgrimage / جبل الرحمة والحج والعمرة
- Information about Hajj and Umrah
- Historical significance

#### 6. Interactive Map / الخريطة التفاعلية
- Google Maps integration
- Centered on Makkah
- Shows major landmark locations

#### 7. Contact Section / قسم التواصل
- Contact form (Name, Email, Message)
- Email and website links
- Form validation
- Success feedback

## 🚀 Quick Start

### 1. Files Structure
```
makah1/
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

### 2. Run Locally

#### Option 1: Simple Server
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Then open: http://localhost:8000
```

#### Option 2: Direct Open
Simply double-click `index.html` to open in your browser.

### 3. Deploy

Upload all files to any web hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting

## 🎯 Features Breakdown

### JavaScript Features
- ✅ Language switching with localStorage persistence
- ✅ Smooth scrolling navigation
- ✅ Mobile menu toggle
- ✅ Scroll animations
- ✅ Header scroll effects
- ✅ Form validation
- ✅ Back-to-top button
- ✅ Intersection Observer for animations
- ✅ Contact form submission handling

### CSS Features
- ✅ CSS Custom Properties (Variables)
- ✅ Flexbox & CSS Grid layouts
- ✅ Smooth transitions and animations
- ✅ Box shadows and gradient effects
- ✅ RTL/LTR support
- ✅ Mobile-responsive design
- ✅ Modern card designs
- ✅ Custom form styling

### HTML Features
- ✅ Semantic HTML5
- ✅ ARIA labels for accessibility
- ✅ Data attributes for translations
- ✅ SEO-friendly structure
- ✅ Google Fonts integration

## 🎨 Color Palette

### Primary Colors
- **Deep Blue**: `#1E40AF`
- **Bright Blue**: `#3B82F6`
- **Light Blue**: `#60A5FA`
- **Dark Blue**: `#1E3A8A`

### Accent Colors
- **Bright Yellow**: `#FCD34D`
- **Golden Yellow**: `#F59E0B`
- **Pale Yellow**: `#FEF3C7`

## 🔧 Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-blue: #1E40AF;
    --primary-yellow: #FCD34D;
    /* ... more variables */
}
```

### Add/Edit Landmarks
Modify the HTML structure in `index.html` within the landmarks sections.

### Change Content
All bilingual content is stored in JavaScript object `translations` in `script.js`.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox, grid, animations
- **Vanilla JavaScript**: No frameworks, pure JS
- **Google Fonts**: Tajawal (Arabic) & Poppins (English)
- **Google Maps**: Embedded map

## 📝 Notes

- All images are placeholder gradients (you can replace with actual images)
- Google Maps API key is embedded in the iframe (free tier)
- Form submission is simulated (connect to backend as needed)
- All animations are CSS-based for better performance

## 🌟 Credits

Designed and developed based on tourism best practices for showcasing Makkah landmarks.

### References
- [Royal Commission for Makkah](https://www.rcmc.gov.sa/discover-makkah/makkah-landmarks)
- Information sourced from RCMC official website

## 📄 License

Free to use for educational and commercial purposes.

---

**Made with ❤️ for Makkah**

*Built with pure HTML, CSS, and JavaScript - No frameworks required!*

