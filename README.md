# Juteberry: Landscape Collection Web Catalog

A high-performance, responsive **Next.js** storefront module designed to showcase the **Landscape Collection** of printed jute bags. This implementation uses **Glassmorphism** design principles to ensure technical specifications remain readable over rich material textures.

---

## 📁 Product Specifications

Sourced directly from the official manufacturing catalog, the Landscape Collection adheres to these industrial standards:

* [cite_start]**Dimensions:** $12(H) \times 12(W) \times 5(D)$ inches[cite: 14].
* [cite_start]**Material:** Laminated Natural Jute for enhanced durability and moisture resistance[cite: 9, 15].
* [cite_start]**Closure:** Integrated zipper attachment for secure storage[cite: 10].
* [cite_start]**Handle:** Natural Padded handles designed for heavy-duty use[cite: 12, 17].
* [cite_start]**Portability:** Specifically engineered as a light-weight solution for transporting goods[cite: 11].

---

## 🚀 Technical Features

### UI/UX Design
* [cite_start]**Fixed Texture Background:** Utilizes a high-resolution jute texture as a fixed background layer to emphasize product authenticity[cite: 1, 2].
* **Glassmorphism Text Cards:** Content is wrapped in `white/90` opacity containers with `backdrop-blur` to maintain AAA accessibility standards over complex backgrounds.
* **Responsive Grid:** A dynamic grid system that transitions from a single column on mobile to a 3-column layout on desktop.
* **Hover Animations:** Smooth CSS transitions on product images to simulate a "lift" effect for better user engagement.

### Performance
* **Next.js Image Optimization:** All bag assets are served via the `next/image` component to prevent layout shifts and optimize loading times.
* **Tailwind CSS Utility Architecture:** Zero-runtime CSS for lightning-fast page loads.

---

## 🎨 Design Portfolio

[cite_start]The collection features 10 unique prints inspired by natural landscapes[cite: 8]. Current digital assets include:

| Product Name | Visual Theme |
| :--- | :--- |
| **Palm Beach Sunset** | Tropical sunset with palm tree silhouettes |
| **Hot Air Balloons** | Multi-colored balloons over a green mountain range |
| **Mountain Lake** | Minimalist sun, mountains, and water scene |
| **Tropical Birds** | Vibrant red and blue birds with floral accents |
| **Pine Forest** | Geometric pine trees with colorful flora |
| **City Life** | Modern skyline silhouette |

---

## 🛠️ Installation & Setup

1. **Clone the Assets:** Save your product screenshots (e.g., `palm-beach.png`) and the background texture (`jute-texture.png`) in the `/public` directory.
2. **Environment Setup:**
   ```bash
   npm install
   npm run dev