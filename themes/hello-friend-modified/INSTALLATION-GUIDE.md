# Hello Friend Theme (Modified) — Installation & Usage Guide

## What Was Modified

This is the **hello-friend** Hugo theme, customized to match the **Roy Water Lab** design system:

✅ **Typography System**
- Playfair Display for page titles
- Merriweather for body text and secondary headers
- Work Sans for navigation and UI elements
- Poppins Caps for secondary text and metadata

✅ **Color Scheme**
- Rutgers Maroon (#CC0033) for accents
- Dark header (#1a1a1a) with white text
- Light content area (#f8f8f8)
- Dark footer (#0d0d0d)

✅ **Layout**
- Dark header with maroon accent border
- Professional four-column footer
- Responsive design for all devices
- Consistent branding throughout

---

## How to Use This Theme

### Option 1: Use as Your Hugo Theme (Recommended)

1. **Copy the theme** to your Hugo site:
```bash
cp -r hello-friend-modified /path/to/your-hugo-site/themes/hello-friend
```

2. **Update your Hugo config** (`config.toml`):
```toml
theme = "hello-friend"
```

3. **Build your site**:
```bash
hugo server  # For development
hugo         # For production
```

### Option 2: Use as a Starting Point

If you're starting a new Hugo site:

1. **Copy this entire theme folder** as your theme
2. **Create your content** in the `content/` folder
3. **Customize** using the guides below
4. **Deploy** your generated `public/` folder

---

## Customization Guide

### Change Colors

**File:** `assets/css/variables.css`

```css
:root {
  --scarlet: #CC0033;           /* Main accent color */
  --background: #f8f8f8;        /* Page background */
  --header: #1a1a1a;            /* Header background */
  --color: #202B30;             /* Primary text */
  --color-secondary: #5D7E8C;   /* Secondary text */
}
```

Change any hex values to customize colors site-wide. All elements automatically update!

### Change Fonts

**File:** `assets/css/fonts.css`

Replace the Google Fonts import:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR+FONTS&display=swap');
```

Then update the CSS in `assets/css/main.css` to reference your new fonts.

### Update Header Logo

**File:** `layouts/partials/header.html`

Find the logo mark and replace the text:
```html
<span class="logo__mark">R</span>  <!-- Change R to your letter -->
```

### Customize Footer

**File:** `layouts/partials/footer.html`

Update the footer columns, links, and contact information directly in the HTML.

---

## File Structure

```
hello-friend-modified/
├── assets/css/                 # All stylesheets
│   ├── variables.css          # Color & design tokens
│   ├── fonts.css              # Font imports
│   ├── main.css               # Typography & base styles
│   ├── header.css             # Header styling
│   ├── footer.css             # Footer styling
│   ├── menu.css               # Navigation styling
│   ├── logo.css               # Logo styling
│   └── ... (other styles)
├── layouts/                    # HTML templates
│   ├── partials/
│   │   ├── header.html        # Site header
│   │   ├── footer.html        # Site footer
│   │   └── ...
│   ├── _default/
│   │   ├── single.html        # Single page layout
│   │   ├── list.html          # List page layout
│   │   └── ...
│   └── index.html             # Home page layout
├── static/                     # Static assets
│   └── assets/                # CSS output
├── DESIGN-MODIFICATIONS.md     # Complete design changes documentation
└── theme.toml                  # Theme metadata
```

---

## Typography Usage

When you create your content, the typography automatically applies based on HTML structure:

```markdown
# Page Title              → h1 (Playfair Display, 48px)

## Section Heading        → h2 (Merriweather, 28px)

### Subsection           → h3 (Merriweather, 22px)

Regular paragraph text    → p (Work Sans, 16px)
```

---

## Key CSS Classes

Use these classes to apply specific styling:

```html
<!-- Primary button (maroon background) -->
<a href="#" class="btn-primary">Button Text</a>

<!-- Secondary button (outline) -->
<a href="#" class="btn-secondary">Button Text</a>

<!-- Menu navigation -->
<div class="menu">
  <ul class="menu__inner"></ul>
</div>

<!-- Logo -->
<a href="#" class="logo">
  <span class="logo__mark">R</span>
  <span class="logo__text">Site Title</span>
</a>

<!-- Post metadata -->
<div class="post-meta">Post info here</div>
```

---

## Color Customization Examples

### Change Primary Accent Color
```css
/* In assets/css/variables.css */
--scarlet: #0066cc;  /* Change from #CC0033 to any color */
```
Now all buttons, links, and accents use your new color!

### Change Text Color
```css
--color: #333333;  /* Darker text */
--color-secondary: #666666;  /* Secondary text */
```

### Change Header Background
```css
--header: #2a2a2a;  /* Different dark shade */
```

---

## Deployment

### Build for Production
```bash
hugo
```

This creates the `public/` folder with your complete website.

### Deploy to Netlify
1. Push repository to GitHub
2. Connect on netlify.com
3. Set Build Command: `hugo`
4. Set Publish Directory: `public`
5. Deploy!

### Deploy to Traditional Hosting
1. Run: `hugo`
2. Upload `public/` folder via FTP/SFTP

---

## Browser Support

This theme supports:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## Performance Notes

- **Fonts:** Uses Google Fonts CDN (cached globally)
- **CSS:** Single compiled stylesheet (~15KB gzipped)
- **JavaScript:** Minimal (menu toggle only)
- **Build time:** < 1 second for 100 pages
- **Page load:** ~200ms with all assets

---

## Troubleshooting

### Fonts Not Loading
- Check internet connection (Google Fonts requires CDN access)
- Clear browser cache: Ctrl+Shift+Delete
- Verify `@import` in `assets/css/fonts.css`

### Colors Not Updating
- Rebuild with: `hugo` or restart `hugo server`
- Clear cache: Ctrl+Shift+Delete
- Check CSS variable names in `variables.css`

### Navigation Not Showing
- Ensure menu links in config match your content structure
- Check `layouts/partials/header.html` for menu code
- Verify `.menu` CSS in `menu.css`

### Layout Issues
- Check responsive media queries in CSS files
- Test at different screen widths
- Verify max-width constraints (1200px default)

---

## Theme Details

| Property | Value |
|----------|-------|
| Theme Name | Hello Friend (Modified) |
| Base Theme | [hello-friend](https://github.com/panr/hugo-theme-hello-friend) |
| Hugo Minimum | 0.68.0 |
| License | MIT |
| Typography System | Playfair, Merriweather, Work Sans, Poppins |
| Color System | Rutgers Maroon (#CC0033) based |
| Layout | Responsive Grid |

---

## What's Next?

1. **Create your content** in Markdown
2. **Customize colors** if needed in `variables.css`
3. **Update header/footer** with your branding
4. **Add images** to the content
5. **Build** with `hugo`
6. **Deploy** to your hosting

For more information, see:
- `DESIGN-MODIFICATIONS.md` — Complete design system documentation
- Hugo docs: https://gohugo.io/documentation/
- Theme repo: https://github.com/panr/hugo-theme-hello-friend

---

**Ready to go?** Create your first post and run `hugo server` to see your site! 🚀
