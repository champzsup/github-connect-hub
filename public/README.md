# PDF Reader Update Landing Page

This is a standalone HTML/CSS/JavaScript landing page that prompts users to update their PDF reader software.

## Files Included

- **index.html** - Main landing page with update prompt and progress indicator
- **install.html** - Detailed installation instructions page
- **styles.css** - All styling for both pages
- **script.js** - JavaScript functionality for download/update process
- **README.md** - This file

## Setup Instructions

### 1. Configure Download URL

You have two options to set where the installer file will be downloaded from:

**Option A: In the HTML page (User-friendly)**
1. Open `index.html` in a browser
2. Scroll down and click on "Configuration" to expand the section
3. Enter your installer download URL (e.g., `https://yourserver.com/pdf-reader-installer.exe`)
4. The URL will be saved for the current session

**Option B: In the JavaScript file (Permanent)**
1. Open `script.js` in a text editor
2. Find the `CONFIG` object at the top:
```javascript
const CONFIG = {
    downloadUrl: '', // Add your URL here
    simulateDownload: true
};
```
3. Replace the empty string with your download URL:
```javascript
const CONFIG = {
    downloadUrl: 'https://yourserver.com/pdf-reader-installer.exe',
    simulateDownload: false // Set to false when using real URL
};
```

### 2. Host the Files

Upload all files to your web server:
- If using Apache/Nginx: Upload to your web root directory
- If using cloud storage (S3, Azure, etc.): Upload and make files publicly accessible
- For testing: Open `index.html` directly in a browser (some features may be limited)

### 3. Customize Content

You can easily customize the page:

**Change the product name:**
- Edit text in `index.html` and `install.html`

**Update features list:**
- Find the `<ul class="features-list">` section in `index.html`
- Add/remove/edit `<li>` items

**Modify colors:**
- Open `styles.css`
- Search for color codes (e.g., `#f97316` for orange, `#dc2626` for red)
- Replace with your brand colors

**Add screenshots to installation guide:**
- Replace `<div class="screenshot-placeholder">` sections in `install.html`
- Use `<img src="path-to-screenshot.png" alt="Description">`

### 4. Testing

1. Open `index.html` in a web browser
2. Click "Update Now" to see the progress indicator
3. Click "Learn More" to view installation instructions
4. Test on different devices (desktop, tablet, mobile)

## Features

✅ **Responsive Design** - Works on all screen sizes
✅ **Progress Indicator** - Visual feedback during download
✅ **Configuration Panel** - Easy URL setup without code editing
✅ **Installation Guide** - Step-by-step instructions for users
✅ **System Requirements** - Clearly listed specifications
✅ **Troubleshooting Section** - Common issues and solutions
✅ **No Dependencies** - Pure HTML/CSS/JavaScript (no frameworks needed)

## Download Behavior

### Simulation Mode (Default)
When `simulateDownload: true` or no URL is configured:
- Shows a realistic progress bar animation
- No actual file is downloaded
- Perfect for testing and demonstration

### Real Download Mode
When a valid URL is configured and `simulateDownload: false`:
- Triggers actual file download
- Progress bar shows simulated progress (browser limitations)
- File downloads to user's default download folder

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## File Structure

```
/public/
├── index.html          # Main update page
├── install.html        # Installation guide
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md          # Documentation
```

## Customization Examples

### Change the gradient colors:
```css
/* In styles.css, find: */
.icon-circle {
    background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}

.btn-primary {
    background: linear-gradient(90deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

### Add your logo:
```html
<!-- In index.html, before the icon section: -->
<img src="your-logo.png" alt="PDF Reader Logo" style="max-width: 150px; margin-bottom: 2rem;">
```

### Change version number:
```html
<!-- Add to index.html heading section: -->
<p class="subtitle">
    Version 3.5.0 available - Update now!
</p>
```

## Security Notes

- Always use HTTPS for download URLs
- Validate and sanitize any user inputs
- Host on a secure web server
- Consider adding file hash verification for downloads
- Keep backup copies of installer files

## Support

For issues or questions:
1. Check the browser console for error messages
2. Verify your download URL is accessible
3. Test in different browsers
4. Ensure all files are uploaded to the same directory

## License

This template is free to use and modify for your projects.
