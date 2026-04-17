# Quick Start — Ready to Use (No Build Required)

This modified hello-friend theme is **ready to use immediately**. No webpack, npm, or build tools required.

## What You Need

- Hugo (download from https://gohugo.io/installation/)
- A text editor
- That's it!

## Installation

### Step 1: Copy the Theme
```bash
cp -r hello-friend-modified /path/to/your-hugo-site/themes/hello-friend
```

### Step 2: Create Hugo Site Config
Create `config.toml` in your Hugo site root:

```toml
baseurl = "/"
languageCode = "en-us"
theme = "hello-friend"
paginate = 5

[params]
  contentTypeName = "post"
  defaultTheme = "light"
  showMenuItems = 2
  showReadingTime = false

[languages]
  [languages.en]
    title = "My Research Lab"
    subtitle = "A subtitle for my site"
    keywords = "research, lab"
    copyright = ""
    
    [languages.en.params.logo]
      logoText = "My Lab"
      logoHomeLink = "/"
    
    [languages.en.menu]
      [[languages.en.menu.main]]
        identifier = "about"
        name = "About"
        url = "/about"
      [[languages.en.menu.main]]
        identifier = "research"
        name = "Research"
        url = "/research"
```

### Step 3: Create Content
```bash
hugo new posts/my-first-post.md
```

### Step 4: Run Development Server
```bash
hugo server
```

Visit `http://localhost:1313` in your browser.

## What's Included

✅ **Pre-compiled CSS** — All CSS is ready to use, no build step needed
✅ **Typography System** — Playfair Display, Merriweather, Work Sans, Poppins
✅ **Rutgers Maroon Color Scheme** — #CC0033 primary accent
✅ **Dark Header** — Professional dark design (#1a1a1a)
✅ **Dark Footer** — Four-column layout (#0d0d0d)
✅ **Responsive Design** — Works on all devices
✅ **Google Fonts** — All fonts load from CDN

## Customization

### Change Colors

Edit `themes/hello-friend/static/assets/style.css` and find the `:root` section:

```css
:root {
  /* Primary Colors */
  --scarlet: #CC0033;        /* Change this to any color */
  --scarlet-dark: #aa0028;   /* Hover color */
  
  /* Light Theme Colors */
  --background: #f8f8f8;     /* Page background */
  --header: #1a1a1a;         /* Header background */
  --color: #202B30;          /* Primary text */
  --color-secondary: #5D7E8C;/* Secondary text */
  
  /* Footer & Dark Areas */
  --footer: #0d0d0d;         /* Footer background */
}
```

Change any hex value and reload your browser (Ctrl+Shift+Delete to clear cache).

### Change Fonts

The fonts are imported from Google Fonts at the top of `style.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Playfair+Display:wght@400;700&family=Poppins:wght@400;500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap');
```

To use different fonts:
1. Visit https://fonts.google.com/
2. Select your fonts and copy the import URL
3. Replace the @import line above
4. Update the font-family declarations in the CSS (search for `font-family:`)

### Customize Header & Footer

Edit the layout files:
- **Header:** `themes/hello-friend/layouts/partials/header.html`
- **Footer:** `themes/hello-friend/layouts/partials/footer.html`

## Building for Production

```bash
hugo
```

This creates the `public/` folder with your complete website.

### Deploy to Netlify

1. Push to GitHub
2. Connect repository on netlify.com
3. Set Build Command: `hugo`
4. Set Publish Directory: `public`
5. Deploy!

### Deploy to Traditional Hosting

1. Run: `hugo`
2. Upload `public/` folder via FTP/SFTP

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Performance

- **Fonts:** Google Fonts CDN (cached globally)
- **CSS:** Single file (~50KB pre-gzip, ~15KB gzipped)
- **JavaScript:** Minimal (menu toggle only)
- **Build time:** < 1 second for 100 pages
- **Page load:** ~300ms with all assets

## File Structure

```
your-hugo-site/
├── config.toml                    ← Site configuration
├── content/
│   └── posts/
│       └── my-first-post.md      ← Your content in markdown
├── themes/
│   └── hello-friend/              ← This theme
│       ├── static/assets/
│       │   └── style.css          ✅ READY TO USE (pre-compiled)
│       ├── layouts/
│       │   ├── partials/
│       │   │   ├── header.html
│       │   │   ├── footer.html
│       │   │   └── ...
│       │   └── _default/
│       └── ...
└── public/                        ← Generated website (after hugo build)
```

## Troubleshooting

### Fonts Not Loading
- Check internet connection (Google Fonts requires CDN)
- Clear browser cache: Ctrl+Shift+Delete
- Wait a few seconds for fonts to load

### Colors Not Updating
- Clear browser cache
- Make sure you're editing the right CSS file
- Check file path: `themes/hello-friend/static/assets/style.css`

### Navigation Not Showing
- Check your `config.toml` menu items match your content
- Ensure markdown files exist in the `content/` directory

### Layout Issues
- Test on different screen sizes
- Check responsive CSS in `style.css`
- Look for media query rules (`@media`)

## What to Do Next

1. **Customize** `config.toml` with your site information
2. **Create content** in `content/posts/` (markdown files)
3. **Update colors** in `static/assets/style.css` if needed
4. **Edit header/footer** in `layouts/partials/`
5. **Run** `hugo server` to preview
6. **Build** with `hugo` when ready
7. **Deploy** the `public/` folder

## Need Help?

- Hugo docs: https://gohugo.io/documentation/
- Hello Friend theme: https://github.com/panr/hugo-theme-hello-friend
- CSS customization: See DESIGN-MODIFICATIONS.md in this theme

---

**You're ready to go!** Start by running `hugo server` and visiting http://localhost:1313 🚀
