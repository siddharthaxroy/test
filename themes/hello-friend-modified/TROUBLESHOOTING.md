# Troubleshooting — CSS Not Loading

## Quick Fixes

### 1. Clear Browser Cache
Press **Ctrl+Shift+Delete** (Windows/Linux) or **Cmd+Shift+Delete** (Mac) to open the cache clearing dialog:
- Select "Cached images and files"
- Click "Clear now"
- Reload page: **Ctrl+R** or **Cmd+R**

### 2. Restart Hugo Server
If you've made changes to the theme:
```bash
# Stop Hugo (press Ctrl+C)
# Then restart:
hugo server
```

### 3. Verify File Exists
Check that the CSS file is in the correct location:
```bash
ls -lh themes/hello-friend/static/assets/style.css
```

Should show a file (~17KB)

## Debugging Steps

### Step 1: Check in Browser Developer Tools

1. Open DevTools: Press **F12**
2. Go to **Network** tab
3. Reload the page: **Ctrl+R**
4. Look for `style.css` in the list
   - If **red/404**: File not found (path issue)
   - If **green/200**: File loaded (CSS might have errors)
   - If **missing**: CSS not requested (HTML issue)

### Step 2: Check Applied Styles

1. Open DevTools: Press **F12**
2. Go to **Elements** tab
3. Right-click on the page title
4. Click "Inspect"
5. Look at the "Styles" panel on the right
   - You should see `style.css` listed
   - Check if `font-family: 'Playfair Display'` is applied

### Step 3: Check Console for Errors

1. Open DevTools: Press **F12**
2. Go to **Console** tab
3. Look for any red error messages about CSS or fonts
4. Common issues:
   - `Failed to load resource: 404` → File not found
   - `CORS error` → Font loading issue
   - `Mixed content` → HTTP/HTTPS mismatch

## Common Issues & Fixes

### Issue: CSS Returns 404 (Not Found)

**Problem:** The file `style.css` returns a 404 error

**Cause:** Hugo can't find the file at `static/assets/style.css`

**Solution:**
1. Verify file exists: `ls themes/hello-friend/static/assets/style.css`
2. Check spelling exactly matches
3. Make sure file is in `static/` folder, NOT `assets/`
4. Restart Hugo server: `hugo server`

### Issue: Fonts Not Loading (Google Fonts)

**Problem:** Text appears in default font, not Playfair Display or Merriweather

**Cause:** Google Fonts CDN not loading

**Solution:**
1. Check internet connection
2. Open DevTools > Network > filter by "fonts"
3. Reload page
4. Check if Google Fonts requests succeed (look for `googleapis.com` or `gstatic.com`)
5. If failing:
   - Check firewall/proxy settings
   - Wait a few seconds
   - Try a different browser

### Issue: Some CSS Works, Some Doesn't

**Problem:** Colors apply but fonts don't, or layout is wrong but colors work

**Cause:** Partial CSS loading (cache issue, or only some rules apply)

**Solution:**
1. Hard refresh: **Ctrl+Shift+R** (clears all cache)
2. Clear browser cache completely
3. Close and reopen browser
4. Try incognito/private mode

### Issue: Page Has No Style At All (Plain Text)

**Problem:** Page is completely unstyled (no colors, fonts, spacing)

**Cause:** CSS file not loading

**Solution:**
1. Open DevTools > Network tab
2. Reload page
3. Is `style.css` listed? 
   - NO → CSS path is wrong
   - YES but 404 → File doesn't exist
   - YES and 200 → But CSS empty or broken

**If 404:** Check file path in `layouts/partials/head.html`
- Should be: `<link rel="stylesheet" href="/assets/style.css">`

**If shows 200 but no styling:**
- File might be corrupted
- Recreate CSS file
- Check CSS file isn't empty: `wc -l themes/hello-friend/static/assets/style.css`

## Verify CSS File Integrity

Check that CSS file has content:

```bash
# Check file size (should be ~17KB)
ls -lh themes/hello-friend/static/assets/style.css

# Check it's not empty (should show many lines)
wc -l themes/hello-friend/static/assets/style.css

# Check it has our modifications (should show Playfair Display, Merriweather)
grep -c "Playfair Display" themes/hello-friend/static/assets/style.css
# Should return: 4 or more
```

## File Locations - Make Sure You're Using Correct Files

✅ **DO use and edit:**
- `themes/hello-friend/static/assets/style.css` ← Main CSS file (edit for color changes)
- `themes/hello-friend/layouts/partials/head.html` ← Links CSS
- `themes/hello-friend/layouts/partials/header.html` ← Header HTML
- `themes/hello-friend/layouts/partials/footer.html` ← Footer HTML

❌ **DON'T edit these (they won't apply):**
- `themes/hello-friend/assets/css/` ← Source files (need webpack compilation)
- `themes/hello-friend/assets/css/main.css` ← Not used (requires build)
- `themes/hello-friend/assets/css/variables.css` ← Not used (requires build)

## Test with Example Site

The safest way to test is with the example site:

```bash
cd themes/hello-friend/exampleSite
hugo server
# Visit http://localhost:1313
```

If this works, your issue is with your site's `config.toml` settings.

## Nuclear Option - Complete Cache Clear

If nothing else works:

```bash
# Kill Hugo server (Ctrl+C)

# Clear Hugo cache
rm -rf resources/

# Clear browser cache (F12 > Application > Clear Storage > Clear All)

# Restart Hugo
hugo server

# Hard refresh in browser: Ctrl+Shift+R
```

## Still Not Working?

Create a minimal test file:

1. Create `test.html` in your site root:
```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/assets/style.css">
</head>
<body>
<h1>Test Title</h1>
<p>Test paragraph</p>
</body>
</html>
```

2. Start Hugo and visit:
```
http://localhost:1313/test.html
```

3. Open DevTools and check if CSS loads

## Advanced Debugging

### Check Hugo Build Output
```bash
hugo server -v
# Look for lines about:
# - "static" folder being served
# - Any errors about CSS files
```

### Check Hugo Configuration
Make sure `config.toml` has:
```toml
theme = "hello-friend"
```

Not:
```toml
theme = "hello-friend-modified"  # ✗ Wrong if folder named hello-friend
```

### Verify Theme Recognition
```bash
# Hugo should list available themes
hugo list all
# Look for: hello-friend in the output
```

## Still Stuck?

1. **Check the Network tab** in DevTools - this is the most reliable indicator
2. **Look at the Page Source** (Ctrl+U) - check if stylesheet link is in `<head>`
3. **Check file permissions** - is the CSS file readable?
   ```bash
   ls -l themes/hello-friend/static/assets/style.css
   # Should show: -rw-r--r-- or similar (readable)
   ```

---

**Most Common Fix:** Clear browser cache (Ctrl+Shift+Delete) and hard refresh (Ctrl+Shift+R)

**Second Most Common Fix:** Restart Hugo server (Ctrl+C then `hugo server`)

**Verify It Works:** Open DevTools (F12) > Network tab > reload > look for `style.css` returning 200 status
