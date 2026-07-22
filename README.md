# Thomas Ernest's Personal Website

Welcome to my personal about me website!

## 📍 Live Site
Your website is now live at: **https://thomas-ernest.github.io**

## 📋 What's Included

- **index.html** - Main landing page with about me, donation, and thank you sections
- **style.css** - Beautiful, responsive styling with light/dark mode support
- **script.js** - Dark mode toggle functionality
- **README.md** - This file

## 🎨 Features

✨ **Core Features:**
- Clean, modern design with gradient background
- Fully responsive (works on mobile, tablet, and desktop)
- Light/Dark mode toggle with local storage persistence
- About me section (short and concise)
- Donation section with reusable card pattern
- Thank you message
- Contact/Connect section with social links
- Professional footer

## 💳 Donation Methods - How to Add New Ones

The donation section uses a **reusable pattern** that makes it easy to add new payment methods. Simply copy this template and customize it:

```html
<div class="donation-card">
    <div class="donation-icon">ICON_HERE</div>
    <h3>Method Name</h3>
    <p>Short description</p>
    <a href="YOUR_LINK" target="_blank" class="donation-button">Button Text</a>
</div>
```

**Currently Supported Methods:**
1. PayPal
2. GitHub Sponsors
3. Cryptocurrency
4. Buy Me a Coffee

**Easy to add more:**
- Stripe
- Ko-fi
- Patreon
- Direct bank transfer
- Amazon Pay
- Any other payment method you prefer

Just add new donation cards using the same template!

## 📝 How to Customize

### 1. Edit Your Information
- Open `index.html` and replace "Thomas Ernest" with your name
- Update the "About Me" paragraph with your bio
- Update contact links (GitHub, LinkedIn, Email)

### 2. Customize Donation Links
- Replace the donation URLs with your actual links:
  - `https://paypal.me/thomasernest` → Your PayPal link
  - `https://github.com/sponsors/thomas-ernest` → Your GitHub profile
  - `https://buymeacoffee.com/thomasernest` → Your Buy Me a Coffee link
  - Add cryptocurrency wallet addresses

### 3. Add More Donation Methods
- Add new `<div class="donation-card">` blocks in the `.donation-methods` section
- Use the template above and customize the icon, name, and link

### 4. Change Colors
- Open `style.css` and modify the CSS variables in `:root`:
  - `--primary-color: #667eea` (blue)
  - `--secondary-color: #764ba2` (purple)
  - Change these to your preferred colors

### 5. Customize Thank You Message
- Edit the text in the `.thank-you` section in `index.html`
- Keep it warm and genuine!

## 🌙 Dark Mode

The site includes an automatic dark mode toggle:
- Click the 🌙/☀️ button in the top right
- Your preference is saved automatically
- The site respects system preferences on first visit

## 🚀 Deployment

Your site is automatically deployed by GitHub Pages. Any changes you make to this repository will be live within a few minutes!

## 💡 Next Steps

- [ ] Update all donation links with your actual accounts
- [ ] Add more donation methods as needed
- [ ] Customize colors to match your brand
- [ ] Add your social media links
- [ ] Update your email address
- [ ] Add more sections (projects, blog, gallery, etc.)
- [ ] Consider adding a custom domain (optional)

## 🔧 Technical Notes

- Pure HTML, CSS, and JavaScript (no dependencies)
- Local storage used for theme preference
- Fully accessible and SEO-friendly
- Lightweight and fast loading

---

Made with ❤️ by Thomas Ernest