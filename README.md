# Rainbow Handicraft Nepal

Responsive multi-page static storefront for GitHub Pages.

## Pages
Home, Men, Women, Kids, Essential, Fashion, Home Decoration, Classic, About Us, Trending.

## The easiest way to add products
Read **ADD-PRODUCTS-FIRST-READ-ME.txt** first. All product information is in one clearly marked `const products = [...]` section near the top of `app.js`. Add the photo to `assets/products/`, then add one product block. A single product can belong to multiple categories by listing them in its `categories` array.

## Configure before launch
- Change `WHATSAPP_NUMBER` and `CALL_NUMBER` near the top of `app.js`.
- Replace the sample Facebook, Instagram, TikTok and YouTube URLs in `SOCIAL_LINKS`.
- Update the Google Maps location in the iframe and directions link if needed.
- Replace sample product image URLs with your own paths such as `assets/products/red-bag.jpg`.

## Publish with GitHub Pages
1. Create a GitHub repository.
2. Upload all files and folders in this package to the repository root.
3. Go to **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
5. Wait for the Pages deployment to finish.

## Important
This is a static website and works with GitHub Pages. Product updates are made by editing `app.js` and uploading the photos to GitHub. It does not have an online CMS/admin upload panel, database, inventory sync or card payments. Orders are handled by WhatsApp and phone.
