# NeoCyber Café Website Template

This is a premium, Apple-themed static website for a Cyber Café. It is built with HTML, Tailwind CSS (CDN), and Vanilla JavaScript. No backend or build tools are required.

## 🚀 How to Run
1.  Simply double-click `index.html` to open it in your browser.
2.  Navigate through the pages using the menu.

## 🎨 How to Customize

### 1. Change Branding (Name, Phone, Address)
-   **Company Name**: Search for "NeoCyber Café" in all HTML files and replace it with your café name.
-   **Phone Number**: Open `contact.html` and update the number in the "Call Us" card and the `href="tel:..."` link.
-   **WhatsApp**:
    -   In `index.html` (Hero CTA & Floating Button): Update `href="https://wa.me/..."` with your number (e.g., `https://wa.me/919876543210`).
    -   In `contact.html` (Copy to WhatsApp button): Open `main.js` and change the `phoneNumber` variable on line ~135.

### 2. Update Pricing
-   Open `pricing.html`.
-   Edit the text inside the `<h2>` and `<div>` tags (e.g., `₹30`, `₹50`).
-   Update the "Add-ons" table rows securely.

### 3. Replace Images
-   **Hero Image**: In `index.html`, find `<img>` inside the "Hero Image Mockup" section. Change the `src` URL to your own image path (e.g., `images/cafe-interior.jpg`).
-   **Gallery**: In `gallery.html`, replace the Unsplash URLs with your own photos.
    -   Ensure your images are roughly the same aspect ratio for the best grid look.
    -   You can add more images by copying the `<div class="gallery-item ...">` blocks.

### 4. Color Scheme
-   The site uses Tailwind classes. The primary accent color is `apple-blue` (defined in the `<script>` tag in `<head>`).
-   To change the blue accent: Edit the `colors: { 'apple-blue': ... }` value in the `<script>` config in **every HTML file**.

## 📂 File Structure
-   `index.html` - Homepage
-   `services.html` - Service listings
-   `pricing.html` - Pricing cards & tables
-   `gallery.html` - Image grid with filter & lightbox
-   `contact.html` - Contact form & map
-   `styles.css` - Custom animations & scrollbars
-   `main.js` - Interactive logic (Mobile menu, Gallery filter, Form handling)
