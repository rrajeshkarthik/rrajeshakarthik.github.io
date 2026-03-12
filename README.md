# Rajesh Karthik – Personal Portfolio Website

A refined, dark-luxury personal portfolio website built for GitHub Pages deployment.

## 🚀 Deploying to GitHub Pages

### Option A — New Repository
1. Create a new GitHub repository named `rajeshkarthik.github.io` (for root domain) **or** any name (for subdomain like `username.github.io/portfolio`)
2. Upload all files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `RajeshKarthik_Resume_2026.docx` *(for the download button)*
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. Your site will be live at `https://rajeshkarthik.github.io` within a few minutes.

### Option B — Via Git (recommended)
```bash
git init
git add .
git commit -m "Initial portfolio deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
Then enable Pages in repository Settings.

---

## 📸 Replacing the Profile Photo

1. Add a professional photo named `photo.jpg` (or any format) to the root folder.
2. In `index.html`, find the `<div class="about-photo-placeholder">` block and replace it with:
```html
<img src="photo.jpg" alt="Rajesh Karthik" class="about-photo-img" />
```
3. Add this CSS to `style.css`:
```css
.about-photo-img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  object-position: top;
  border: 1px solid var(--border);
}
```

---

## 📅 Connecting a Calendar Booking System

### Calendly
1. Create a free account at [calendly.com](https://calendly.com)
2. Copy your booking link (e.g. `https://calendly.com/yourname/discovery`)
3. In `index.html`, find `.booking-embed` and replace the placeholder div with:
```html
<iframe src="https://calendly.com/yourname/discovery" width="100%" height="600" style="border:none;"></iframe>
```

### Cal.com (open-source alternative)
Follow the same process at [cal.com](https://cal.com)

---

## ✉️ Enabling the Contact Form

### Formspree (easiest, free tier available)
1. Go to [formspree.io](https://formspree.io) and create a form
2. Copy your endpoint URL (e.g. `https://formspree.io/f/xyzabc`)
3. In `script.js`, replace the `setTimeout` mock with:
```javascript
const data = new FormData(this);
fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: data })
  .then(() => { btn.textContent = 'Sent ✓'; note.textContent = "Thank you! I'll be in touch soon."; });
```

---

## ✏️ Updating Blog Posts

The blog section uses placeholder articles. To link to real posts:
- Point `href="#"` links to your Medium, LinkedIn articles, or a `/blog/` subdirectory
- Or create separate `blog-post-1.html` files and link to those

---

## 🎨 Customisation

Key CSS variables in `style.css`:
```css
--gold:  #c9a84c   /* accent / highlight colour */
--dark:  #141414   /* section backgrounds */
--black: #0d0d0d   /* page background */
```
Change these to adjust the entire colour theme.

---

**Built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no dependencies. Instant load, GitHub Pages ready.**
