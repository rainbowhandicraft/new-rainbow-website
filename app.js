// Rainbow Handicraft Nepal - static catalogue with WhatsApp and call enquiries.
const WHATSAPP_NUMBER = "9779829144499";
const CALL_NUMBER = "+9779829144499";
const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=100064868913271",
  instagram: "https://www.instagram.com/rainbowhandicraftnepal/",
  tiktok: "https://www.tiktok.com/@rainbowhandicraftpkr",
};
const categories = ["Men","Women","Kids","Essential","Fashion","Home Decoration","Classic","Trending"];

// ============================================================
// PRODUCT CATALOGUE — ONLY EDIT THIS SECTION
// ============================================================
const products = [
  {
    id: 1, 
    name: "file Bag", 
    price: "", 
    categories: ["Women", "Classic", "Essential", "Trending"], 
    tag: "Favourite", 
    description: "A handcrafted colourful file bag with our cotton.",
    images: [
      "assets/products/classic/file_bag/1.png",
      "assets/products/classic/file_bag/2.png",
      "assets/products/classic/file_bag/3.png",
      "assets/products/classic/file_bag/4.png",
      "assets/products/classic/file_bag/b.png",
      "assets/products/classic/file_bag/a.png",
    ]
  },
	{
    id: 2, 
    name: "Double Bag", 
    price: "", 
    categories: ["Women", "Fashion", "Classic"], 
    description: "A colourful double bag with a handcrafted finish.",
    images: [
      "assets/products/classic/double_bag/1.png",
      "assets/products/classic/double_bag/2.png",
      "assets/products/classic/double_bag/3.png",
      "assets/products/classic/double_bag/4.png",
      "assets/products/classic/double_bag/5.png",
      "assets/products/classic/double_bag/6.png",
    ]
  },
	{
    id: 3, 
    name: "Normal School Bag", 
    price: "", 
    categories: ["Classic", "Kids", "Men", "Women", "Fashion", "Trending"],
    description: "A colourful normal school bag with a handcrafted finish.",
    images: [
      "assets/products/classic/normal_school_bag/1.png",
      "assets/products/classic/normal_school_bag/2.png",
      "assets/products/classic/normal_school_bag/3.png",
      "assets/products/classic/normal_school_bag/4.png",
      "assets/products/classic/normal_school_bag/5.png",
      "assets/products/classic/normal_school_bag/d.png",
    ]
  },
	{
    id: 4, 
    name: "Strap Bag", 
    price: "", 
    categories: ["Classic", "Men", "Fashion", "Women", "Essential"], 
    tag: "New", 
    description: "A colourful strap bag with a handcrafted finish.",
    images: [
      "assets/products/classic/strap_bag/1.png",
      "assets/products/classic/strap_bag/2.png",
      "assets/products/classic/strap_bag/3.png",
      "assets/products/classic/strap_bag/4.png",
      "assets/products/classic/strap_bag/5.png",]
  },
	{
    id: 5, 
    name: "Baby School Bag", 
    price: "", 
    categories: ["Essential" , "kids", "Fashion", "Men", "Trending"], 
    tag: "Favourite", 
    description: "Useful color baby school bag with a handcrafted finish.",
    images: [
      "assets/products/essential/baby_school_bag/1.png",
      "assets/products/essential/baby_school_bag/2.png",
      "assets/products/essential/baby_school_bag/3.png",
      "assets/products/essential/baby_school_bag/4.png",
      "assets/products/essential/baby_school_bag/b.png",
      "assets/products/essential/baby_school_bag/a.png",]
  },
	{
    id: 6, 
    name: "Cross Pocket School Bag", 
    price: "", 
    categories: ["Essential", "Men", "Women", "Fashion", "Classic", , "Trending"], 
    description: "A colourful cross pocket school bag with a handcrafted finish.",
    images: [
      "assets/products/essential/cross_pocket_school_bag/3.png",
      "assets/products/essential/cross_pocket_school_bag/2.png",
      "assets/products/essential/cross_pocket_school_bag/1.png",
      "assets/products/essential/cross_pocket_school_bag/b.png",
      "assets/products/essential/cross_pocket_school_bag/c.png",
      "assets/products/essential/cross_pocket_school_bag/d.png",]
  },
	{
    id: 7, 
    name: "Laptop Cover", 
    price: "", 
    categories: ["Essential", "Women", "Men", "Classic", "Fashion", "Trending"], 
    description: "A laptop cover in different sizes with a handcrafted finish.",
    images: [
      "assets/products/essential/laptop_cover/1.png",
      "assets/products/essential/laptop_cover/2.png",
      "assets/products/essential/laptop_cover/4.png",
      "assets/products/essential/laptop_cover/3.png",
      "assets/products/essential/laptop_cover/c.png",
      "assets/products/essential/laptop_cover/d.png",]
  },
	{
    id: 8, 
    name: "Nanu Bag", 
    price: "", 
    categories: ["Essential", "Women", "Fashion", "Classic", "Trending"], 
    description: "A nanu bag with a handcrafted finish.",
    images: [
      "assets/products/essential/nanu_bag/1.png",
      "assets/products/essential/nanu_bag/2.png",
      "assets/products/essential/nanu_bag/4.png",
      "assets/products/essential/nanu_bag/3.png",
      "assets/products/essential/nanu_bag/c.png",
      "assets/products/essential/nanu_bag/d.png",]
  },
	{
    id: 9, 
    name: "Rucksack Bag", 
    price: "", 
    categories: ["Essential", "Women", "Classic", "Fashion", "Trending"], 
    description: "A rucksack bag with a handcrafted finish.",
    images: [
      "assets/products/essential/rucksack_bag/6.png",
      "assets/products/essential/rucksack_bag/2.png",
      "assets/products/essential/rucksack_bag/4.png",
      "assets/products/essential/rucksack_bag/3.png",
      "assets/products/essential/rucksack_bag/c.png",
      "assets/products/essential/rucksack_bag/d.png",]
  },
	
	{
    id: 10, 
    name: "Side File Bag", 
    price: "", 
    categories: ["Essential", "Women", "Men", "Fashion", "Classic", "Trending"], 
    description: "A file bag with a handcrafted finish.",
    images: [
      "assets/products/essential/side_file_bag/1.png",
      "assets/products/essential/side_file_bag/2.png",
      "assets/products/essential/side_file_bag/4.png",
      "assets/products/essential/side_file_bag/e.png",
      "assets/products/essential/side_file_bag/c.png",
      "assets/products/essential/side_file_bag/d.png",]
  },
	{
    id: 11, 
    name: "Small BackCarry Bag", 
    price: "", 
    categories: ["Essential", "Kids", "Men", "Fashion", "Classic", "Trending"], 
    description: "A Backcarry bag with a handcrafted finish.",
    images: [
      "assets/products/essential/smallbackcarry_bag/1.png",
      "assets/products/essential/smallbackcarry_bag/2.png",
      "assets/products/essential/smallbackcarry_bag/4.png",
      "assets/products/essential/smallbackcarry_bag/e.png",
      "assets/products/essential/smallbackcarry_bag/c.png",
      "assets/products/essential/smallbackcarry_bag/d.png",]
  },
	{
    id: 12, 
    name: "Tie Shopping Bag", 
    price: "", 
    categories: ["Essential", "Women", "Classic", "Fashion", "Trending"], 
    description: "A shopping bag with a handcrafted finish.",
    images: [
      "assets/products/essential/tie_shopping_bag/1.png",
      "assets/products/essential/tie_shopping_bag/2.png",
      "assets/products/essential/tie_shopping_bag/4.png",
      "assets/products/essential/tie_shopping_bag/e.png",
      "assets/products/essential/tie_shopping_bag/c.png",
      "assets/products/essential/tie_shopping_bag/d.png",]
  },
	
	{
    id: 13, 
    name: "Travelling Bag", 
    price: "", 
    categories: ["Essential", "Classic", "Fashion", "Women", "Men", "Trending"], 
    description: "A traveling bag with multiple pocket in a cotton material.",
    images: [
      "assets/products/essential/travelling_bag/4.png",
      "assets/products/essential/travelling_bag/2.png",
      "assets/products/essential/travelling_bag/1.png",
      "assets/products/essential/travelling_bag/e.png",
      "assets/products/essential/travelling_bag/c.png",
      "assets/products/essential/travelling_bag/d.png",]
  },
	{
    id: 14, 
    name: "Tripple Purse", 
    price: "", 
    categories: ["Essential", "Classic", "Fashion", "Women", "Trending"], 
    description: "A Tripple purse in a multiple sized with a cotton material.",
    images: [
      "assets/products/essential/tripple_purse/b.png",
      "assets/products/essential/tripple_purse/2.png",
      "assets/products/essential/tripple_purse/1.png",
      "assets/products/essential/tripple_purse/a.png",
      "assets/products/essential/tripple_purse/3.png",
      "assets/products/essential/tripple_purse/5.png",]
  },
	{
    id: 15, 
    name: "Two Pocket Rucksack Purse", 
    price: "", 
    categories: ["Essential", "Classic", "Fashion", "Women", "Trending"], 
    description: "Multi-pocket rucksack Bag in a cotton material.",
    images: [
      "assets/products/essential/two_pocket_rucksack_bag/1.png",
      "assets/products/essential/two_pocket_rucksack_bag/2.png",
      "assets/products/essential/two_pocket_rucksack_bag/1.png",
      "assets/products/essential/two_pocket_rucksack_bag/b.png",
      "assets/products/essential/two_pocket_rucksack_bag/3.png",
      "assets/products/essential/two_pocket_rucksack_bag/a.png",]
  },
	
	{
    id: 16, 
    name: "A Bag", 
    price: "", 
    categories: ["Essential", "Classic", "Fashion", "Women", "Men", "Trending"], 
    description: "Multi-pocket backcarry Bag in a cotton material.",
    images: [
      "assets/products/fashion/a_bag/1.png",
      "assets/products/fashion/a_bag/2.png",
      "assets/products/fashion/a_bag/3.png",
      "assets/products/fashion/a_bag/4.png",
      "assets/products/fashion/a_bag/a.png",
      "assets/products/fashion/a_bag/5.png",]
  },
	{
    id: 17, 
    name: "Everest Bag", 
    price: "", 
    categories: ["Classic", "Fashion", "Women", "Men", "Trending"], 
    description: "A Everest Shaped handmade cotton backcarry bag.",
    images: [
      "assets/products/fashion/everest_bag/1.png",
      "assets/products/fashion/everest_bag/2.png",
      "assets/products/fashion/everest_bag/3.png",
      "assets/products/fashion/everest_bag/4.png",
      "assets/products/fashion/everest_bag/a.png",
      "assets/products/fashion/everest_bag/c.png",]
  },
	{
    id: 18, 
    name: "Lorry Bag", 
    price: "", 
    categories: ["Classic", "Fashion", "Women", "Men", "Trending"], 
    description: "A Everest Shaped handmade cotton backcarry bag.",
    images: [
      "assets/products/fashion/lorry_bag/2.png",
      "assets/products/fashion/lorry_bag/1.png",
      "assets/products/fashion/lorry_bag/3.png",
      "assets/products/fashion/lorry_bag/4.png",
      "assets/products/fashion/lorry_bag/a.png",
      "assets/products/fashion/lorry_bag/5.png",]
  },
	{
    id: 19, 
    name: "Lunch Bag", 
    price: "", 
    categories: ["Classic", "Fashion", "Women", "Trending"], 
    description: "A handmade lunch cotton handcarry bag.",
    images: [
      "assets/products/fashion/lunch_bag/2.png",
      "assets/products/fashion/lunch_bag/1.png",
      "assets/products/fashion/lunch_bag/3.png",
      "assets/products/fashion/lunch_bag/b.png",
      "assets/products/fashion/lunch_bag/c.png",
      "assets/products/fashion/lunch_bag/d.png",]
  },
	{
    id: 20, 
    name: "RG Bag", 
    price: "", 
    categories: ["Classic", "Fashion", "Women","Men", "Trending"], 
    description: "A handmade RG cotton  bag.",
    images: [
      "assets/products/fashion/rg_bag/2.png",
      "assets/products/fashion/rg_bag/1.png",
      "assets/products/fashion/rg_bag/3.png",
      "assets/products/fashion/rg_bag/b.png",
      "assets/products/fashion/rg_bag/c.png",
      "assets/products/fashion/rg_bag/d.png",]
  },
	{
    id: 21, 
    name: "Rose Bag", 
    price: "", 
    categories: ["Classic", "Fashion", "Women","Men", "Trending"], 
    description: "A handmade backcarry cotton  bag.",
    images: [
      "assets/products/fashion/rose_bag/2.png",
      "assets/products/fashion/rose_bag/1.png",
      "assets/products/fashion/rose_bag/3.png",
      "assets/products/fashion/rose_bag/b.png",
      "assets/products/fashion/rose_bag/c.png",
      "assets/products/fashion/rose_bag/d.png",]
  },
	
	{
    id: 22, 
    name: "Elephant Doll", 
    price: "", 
    categories: ["Classic", "Fashion", "Kids", "Home Decoration"], 
    description: "A cotton elephant doll.",
    images: [
      "assets/products/homedecoration/elephant_doll/a.png",
      "assets/products/homedecoration/elephant_doll/1.png",
      "assets/products/homedecoration/elephant_doll/2.png",
      "assets/products/homedecoration/elephant_doll/b.png",
      "assets/products/homedecoration/elephant_doll/c.png",
      "assets/products/homedecoration/elephant_doll/d.png",]
  },
	{
    id: 23, 
    name: "Ross Bag", 
    price: "", 
    categories: ["Classic", "Fashion", "Kids", "Trending"], 
    description: "A cotton elephant doll.",
    images: [
      "assets/products/kids/rose_bag/a.png",
      "assets/products/kids/rose_bag/1.png",
      "assets/products/kids/rose_bag/2.png",
      "assets/products/kids/rose_bag/b.png",
      "assets/products/kids/rose_bag/c.png",
      "assets/products/kids/rose_bag/d.png",]
  },
	{
    id: 24, 
    name: "Dinner Matt", 
    price: "", 
    categories: ["Classic", "Home Decoration", "Trending"], 
    description: "A beautiful handcrafted dinner mat.",
    images: [
      "assets/products/homedecoration/dinner_mat/1.png",]
  }
	
];

// Set default image for cards
products.forEach(p => { 
  p.category = p.categories.join(" · "); 
  p.image = p.images && p.images.length ? p.images[0] : "";
});

// Shuffle products
for (let i = products.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [products[i], products[j]] = [products[j], products[i]];
}

const img = {
  bag: "assets/products/classic/strap_bag/1.png",
  tote: "assets/products/kids/elephant_doll/a.png", 
  purse: "assets/products/women/nanu_bag/2.png",
  basket: "assets/products/essential/cross_pocket_school_bag/3.png", 
  decor: "assets/products/homedecoration/dinner_mat/1.png", 
  scarf: "assets/products/fashion/lorry_bag/3.png",
  wallet: "assets/products/essential/laptop_cover/3.png", 
  mat: "assets/products/essential/travelling_bag/4.png"
};

// ============================================================
// MODELLING & REELS ARRAYS
// ============================================================
const modellingImages = [
  "assets/modeling/modelling-1.png",
  "assets/modeling/modelling-2.png",
  "assets/modeling/modelling-3.png",
  "assets/modeling/modelling-4.png"
];


const reels = [
  { src: "assets/video/reels1.mp4", poster: "assets/video/reels1.png", title: "" },
  { src: "assets/video/reels2.mp4", poster: "assets/video/reels2.png", title: "" },
  { src: "assets/video/reels3.mp4", poster: "assets/video/reels3.png", title: "" },
  { src: "assets/video/reels4.mp4", poster: "assets/video/reels4.png", title: "" }
];

const navItems=[["Home","index.html"],["Men","men.html"],["Women","women.html"],["Kids","kids.html"],["Essential","essential.html"],["Fashion","fashion.html"],["Home Decoration","home-decoration.html"],["Classic","classic.html"],["Trending","trending.html"],["About Us","about.html"]];
const page=document.body.dataset.page;

// HEADER
document.getElementById("site-header").innerHTML=`<div class="announcement">HANDCRAFTED WITH CARE IN NEPAL &nbsp; · &nbsp; ENQUIRE AND ORDER DIRECTLY WITH US</div><header class="header"><div class="header-inner"><a class="brand" href="index.html"><img src="assets/logo.png" alt="Rainbow Handicraft logo"><span><strong>Rainbow Handicraft</strong><small>POKHARA · NEPAL</small></span></a><button class="menu-toggle" id="menu-toggle" aria-label="Open navigation">☰</button><nav class="nav" id="nav">${navItems.map(([n,u])=>`<a href="${u}" class="${(page==="home"&&n==="Home")||(page===n.toLowerCase().replaceAll(" ","-"))?"active":""}">${n}</a>`).join("")}</nav><div class="header-actions"><a class="icon-btn" href="tel:${CALL_NUMBER}" aria-label="Call us" title="Call us">☎</a><a class="icon-btn" href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener" aria-label="WhatsApp us" title="WhatsApp us">☏</a><button class="icon-btn" id="theme-toggle" aria-label="Toggle dark mode">☾</button></div></div></header>`;

// FOOTER
document.getElementById("site-footer").innerHTML=`<footer class="footer"><div class="footer-main"><div class="footer-brand-col"><img class="footer-logo" src="assets/logo.png" alt="Rainbow Handicraft"><h3 style="margin-top:16px">Made with colour.<br>Made with care.</h3><p>Discover thoughtfully crafted bags, accessories and home pieces from Rainbow Handicraft Nepal, Pokhara.</p><div class="social-links"><a href="${SOCIAL_LINKS.facebook}" target="_blank" rel="noopener" aria-label="Facebook">f</a><a href="${SOCIAL_LINKS.instagram}" target="_blank" rel="noopener" aria-label="Instagram">◎</a><a href="${SOCIAL_LINKS.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">♪</a></div><p class="social-caption">Follow Rainbow Handicraft on social media</p></div><div><h3>Explore</h3>${navItems.slice(0,8).map(([n,u])=>`<a href="${u}">${n}</a>`).join("")}</div><div><h3>How to Order</h3><a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener">1. Message us on WhatsApp</a><a href="tel:${CALL_NUMBER}">2. Call to check availability</a><a href="trending.html">3. Explore new arrivals</a><a href="about.html">4. Get to know our store</a><p class="footer-address">We confirm price, colour, availability and delivery directly with you.</p></div><div class="footer-map-col"><h3>Find our store</h3><p>Visit Rainbow Handicraft in Lakeside, Pokhara.</p><div class="footer-map"><iframe title="Map showing Lakeside, Pokhara, Nepal" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10968.681405019672!2d83.9534384!3d28.2122408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399594e26bfcc4e7%3A0xd0e60f6c5ce9ce7c!2sRainbow%20Handicraft%20Udhyog!5e1!3m2!1sen!2snp!4v1793512241977!5m2!1sen!2snp" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div><a class="map-link" href="https://www.google.com/maps/search/?api=1&query=Pokhara-6%2C+Lakeside%2C+Pokhara%2C+Nepal" target="_blank" rel="noopener">Open Google Maps ↗</a></div></div><div class="footer-bottom">© ${new Date().getFullYear()} RAINBOW HANDICRAFT NEPAL · POKHARA-6, LAKESIDE · ALL RIGHTS RESERVED</div></footer>`;

const main=document.getElementById("app-main");

function productCard(p){
  return `<article class="product-card" data-open-product="${p.id}" tabindex="0" role="button" aria-label="View ${p.name}">
    <div class="product-image">
      <img loading="lazy" src="${p.image}" alt="${p.name}">
      ${p.tag?`<span class="tag">${p.tag}</span>`:""}
      <span class="view-hint">View ${p.images.length} photos ↗</span>
    </div>
    <div class="product-info">
      <div class="product-category">${p.category}</div>
      <h3>${p.name}</h3>
      <div class="price"></div>
      <div class="product-actions"><span class="view-link">View product details ↗</span></div>
    </div>
  </article>`;
}

function renderProducts(list){return list.length?list.map(productCard).join(""):`<div class="empty">No products found. Try another search or filter.</div>`}

function toolbar(){return `<div class="products-toolbar"><div class="search-box"><input id="product-search" type="search" placeholder="Search handcrafted products..."></div><select id="category-filter"><option value="">All categories</option>${categories.map(c=>`<option>${c}</option>`).join("")}</select><select id="sort-filter"><option value="featured">Sort: Featured</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="az">Name: A to Z</option></select></div>`}

function gridSection(title,desc,list=products){return `<section class="section"><div class="section-head"><div><div class="eyebrow">THE HANDMADE EDIT</div><h2>${title}</h2><p>${desc}</p></div></div>${toolbar()}<div class="product-grid" id="product-grid">${renderProducts(list)}</div></section>`}

// MODELLING SECTION
function modellingSection(){
  if(!modellingImages.length) return "";
  return `<section class="section modelling-section">
    <div class="section-head"><div><div class="eyebrow">IN THE SPOTLIGHT</div><p>Our products worn and styled — see them in real life.</p></div></div>
    <div class="modelling-grid">
      ${modellingImages.map((src,i)=>`<a href="${src}" target="_blank" class="modelling-tile"><img loading="lazy" src="${src}" alt="Modelling photo ${i+1}"></a>`).join("")}
    </div>
  </section>`;
}

// REELS SECTION
function reelsSection(){
  if(!reels.length) return "";
  return `<section class="section reels-section">
    <div class="section-head"><div><div class="eyebrow">WATCH & SHOP</div><p>Behind the craft, new collections and store moments.</p></div></div>
    <div class="reels-grid">
      ${reels.map(r=>`<div class="reel-card">
        <video controls playsinline preload="none" poster="${r.poster}">
          <source src="${r.src}" type="video/mp4">
        </video>
        <div class="reel-caption">${r.title}</div>
      </div>`).join("")}
    </div>
  </section>`;
}

if(page==="home"){
 main.innerHTML=`<section class="hero"><div class="hero-panel"><div class="hero-copy"><div class="eyebrow">HANDMADE IN POKHARA, NEPAL </div><h1>Carry a little<br>piece of art.</h1><p>Handcrafted woven bags empowering women in Pokhara, Nepal </p><a class="btn light" href="women.html">Explore the collection ↗</a></div></div></section>
 <section class="section"><div class="section-head"><div><div class="eyebrow">SHOP BY CATEGORY</div><h2>Find your kind of handicraft products.</h2><p>Browse every collection and discover something special.</p></div></div><div class="category-grid">${[["Women",img.purse,"women.html"],["Men",img.bag,"men.html"],["Kids",img.tote,"kids.html"],["Essential",img.mat,"essential.html"],["Fashion",img.scarf,"fashion.html"],["Home Decoration",img.decor,"home-decoration.html"],["Classic",img.basket,"classic.html"],["Trending",img.wallet,"trending.html"]].map(([n,i,u])=>`<a class="category-card" href="${u}"><img loading="lazy" src="${i}" alt="${n}"><span>${n} ↗</span></a>`).join("")}</div></section>
 ${gridSection("Fresh finds & customer favourites","The product selection is mixed whenever the page is refreshed. Select any item to view details and contact us to order.",products.slice(0,12))}
 ${modellingSection()}
 ${reelsSection()}
 <section class="section visit-section"><div class="visit-copy"><div class="eyebrow">COME SAY HELLO</div><h2 class="page-title">Find us in Lakeside, Pokhara.</h2><p>Have a question about a product? Visit our store, call us or send a WhatsApp message. We will be happy to help.</p><div class="visit-actions"><a class="btn" href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener">WhatsApp us</a><a class="btn outline" href="tel:${CALL_NUMBER}">Call the store</a></div><a class="map-link dark-map-link" href="https://maps.app.goo.gl/E5p5BrX8nFAW7aJRA" target="_blank" rel="noopener">Get directions on Google Maps ↗</a></div><div class="home-map"><iframe title="Rainbow Handicraft area map, Lakeside Pokhara" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10968.681405019672!2d83.9534384!3d28.2122408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399594e26bfcc4e7%3A0xd0e60f6c5ce9ce7c!2sRainbow%20Handicraft%20Udhyog!5e1!3m2!1sen!2snp!4v1793512241977!5m2!1sen!2snp" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div></section>`;
}else if(page==="about"){
 main.innerHTML=`<section class="page-banner"><div class="eyebrow">OUR STORY</div><h1 class="page-title">A world woven with colour.</h1><p>Rainbow Handicraft Nepal · Pokhara-6, Lakeside</p></section><section class="section"><div class="about-layout"><img src="assets/modeling/13.png" alt="Handcrafted home accessories"><div><div class="eyebrow">HELLO FROM POKHARA</div><h2 class="page-title">Craft, colour and everyday creativity.</h2><p>Rainbow Handicraft Nepal is a home for distinctive handcrafted bags, accessories, essentials and decorative pieces. We believe the little details make everyday life special, and that handmade objects bring warmth, personality and character to the spaces and routines we love.</p><p>Explore our collections, discover something you love, and get in touch with us for product details and orders.</p><a class="btn" href="women.html">Discover the collection</a></div></div></section><section class="section" id="contact"><div class="features"><div class="feature"><b>Visit us</b><p>Pokhara-6, Lakeside, Nepal</p></div><div class="feature"><b>Message us</b><p>WhatsApp enquiries and orders are welcome.</p><a class="btn" href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">Chat on WhatsApp</a></div><div class="feature"><b>Call our store</b><p>Speak with us about products and availability.</p><a class="btn" href="tel:${CALL_NUMBER}">Call now</a></div></div></section>`;
}else{
 const title=navItems.find(([n,u])=>u.replace(".html","").replace("index","home")===page)?.[0]||"Collection";
 const list=page==="trending"?products.filter(p=>p.categories.includes("Trending")||["Bestseller","Popular"].includes(p.tag)):products.filter(p=>p.categories.some(c=>c.toLowerCase().replaceAll(" ","-")===page));
 main.innerHTML=`<section class="page-banner"><div class="eyebrow">RAINBOW HANDICRAFT NEPAL</div><h1 class="page-title">${title} Collection</h1><p>Handpicked pieces, made to bring colour to your everyday.</p></section>${gridSection("Explore "+title,"Find something special in our "+title.toLowerCase()+" collection.",list)}`;
}

function currentPageProducts(){
  if(page==="trending")return products.filter(p=>p.categories.includes("Trending")||["Bestseller","Popular"].includes(p.tag));
  if(page==="home-decoration")return products.filter(p=>p.categories.includes("Home Decoration"));
  if(page==="home"||page==="about")return products;
  return products.filter(p=>p.categories.some(c=>c.toLowerCase().replaceAll(" ","-")===page));
}

function attachFilters(){
  const search = document.getElementById("product-search");
  if(!search) return;

  const cat = document.getElementById("category-filter");
  const sort = document.getElementById("sort-filter");

  function update(){

    // Start with the selected category globally,
    // or use the current page's products by default.
    let list;

    if(cat.value){
      list = products.filter(p =>
        p.categories.includes(cat.value) ||
        (cat.value === "Trending" &&
          ["Bestseller", "Popular"].includes(p.tag))
      );
    } else {
      list = currentPageProducts().slice();
    }

    // Search across all relevant products
    const q = search.value.toLowerCase().trim();

    list = list.filter(p =>
      (p.name + " " + p.category + " " + p.description)
        .toLowerCase()
        .includes(q)
    );

    // Sorting
    if(sort.value === "low"){
      list.sort((a,b) => a.price - b.price);
    }

    if(sort.value === "high"){
      list.sort((a,b) => b.price - a.price);
    }

    if(sort.value === "az"){
      list.sort((a,b) => a.name.localeCompare(b.name));
    }

    // Update product display
    document.getElementById("product-grid").innerHTML =
      renderProducts(list);

    bindProductCards();
  }

  search.addEventListener("input", update);
  cat.addEventListener("change", update);
  sort.addEventListener("change", update);
}

// MULTI-IMAGE GALLERY MODAL
function openProduct(id){
  const p=products.find(x=>x.id===Number(id));
  if(!p)return;
  const message=encodeURIComponent(`Hello Rainbow Handicraft! I am interested in: ${p.name}). Is it available?`);
  const thumbsHTML = p.images.map((imgSrc, i) => 
    `<img src="${imgSrc}" class="gallery-thumb ${i===0?'active':''}" data-src="${imgSrc}" alt="View ${i+1}" onclick="changeMainImage(this)">`
  ).join("");

  document.getElementById("modal-content").innerHTML=`
    <div class="modal-product">
      <div class="gallery-container">
        <div class="gallery-thumbs">${thumbsHTML}</div>
        <img id="main-product-image" src="${p.images[0]}" alt="${p.name}" class="main-gallery-image">
      </div>
      <div class="modal-info">
        <div class="eyebrow">${p.category}</div>
        <h2 class="page-title">${p.name}</h2>
        
        <p>${p.description}</p>
        <p class="muted">To order, ask about availability, colours or sizes, contact us directly.</p>
        <div class="modal-actions">
          <a class="btn" href="https://wa.me/${WHATSAPP_NUMBER}?text=${message}" target="_blank" rel="noopener">WhatsApp to order</a>
          <a class="btn outline" href="tel:${CALL_NUMBER}">Call to order</a>
        </div>
      </div>
    </div>`;
    
  const modal=document.getElementById("product-modal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
}

window.changeMainImage = function(thumb) {
  document.getElementById("main-product-image").src = thumb.dataset.src;
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function bindProductCards(){
  document.querySelectorAll("[data-open-product]").forEach(card=>{
    card.addEventListener("click",()=>openProduct(card.dataset.openProduct));
    card.addEventListener("keydown",e=>{
      if(e.key==="Enter"||e.key===" "){e.preventDefault();openProduct(card.dataset.openProduct)}
    })
  })
}

attachFilters();
bindProductCards();

document.getElementById("menu-toggle").onclick=()=>document.getElementById("nav").classList.toggle("open");
document.getElementById("theme-toggle").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("rh-dark",document.body.classList.contains("dark"))};
if(localStorage.getItem("rh-dark")==="true")document.body.classList.add("dark");

document.querySelector(".modal-close").onclick=()=>{const m=document.getElementById("product-modal");m.classList.remove("open");m.setAttribute("aria-hidden","true")};
document.getElementById("product-modal").onclick=e=>{if(e.target.id==="product-modal"){e.currentTarget.classList.remove("open");e.currentTarget.setAttribute("aria-hidden","true")}};
document.addEventListener("keydown",e=>{if(e.key==="Escape"){document.getElementById("product-modal").classList.remove("open");document.getElementById("product-modal").setAttribute("aria-hidden","true")}});

window.addEventListener("load",()=>setTimeout(()=>document.getElementById("preloader").classList.add("hide"),550));
// Scroll to Top Logic
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}