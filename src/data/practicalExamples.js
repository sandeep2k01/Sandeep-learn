// Maps lesson title → { lang, title, code } for the live playground
export const PRACTICAL_EXAMPLES = {

'HTML Essentials (Refresher)': {
lang: 'html', title: 'Build a semantic product card',
code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Inter, sans-serif; padding: 20px; background: #f5f5f5 }
    article { background: white; border-radius: 12px; padding: 20px; max-width: 300px; box-shadow: 0 2px 12px rgba(0,0,0,.08) }
    header h2 { margin: 0 0 8px; font-size: 18px }
    p { color: #666; font-size: 14px; line-height: 1.6; margin: 0 0 12px }
    footer { display: flex; justify-content: space-between; align-items: center }
    strong { font-size: 20px; color: #1a1a2e }
    button { background: #7c6fff; color: white; border: none; padding: 8px 18px; border-radius: 8px; cursor: pointer; font-weight: 600 }
  </style>
</head>
<body>
  <article>
    <header>
      <h2>Sony Earbuds WF-1000XM5</h2>
    </header>
    <p>Industry-leading noise cancellation with 30hr battery life.</p>
    <footer>
      <strong>₹12,990</strong>
      <button>Add to Cart</button>
    </footer>
  </article>
</body>
</html>`,
},

'CSS Essentials (Refresher)': {
lang: 'html', title: 'Build a responsive Flexbox navbar',
code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0 }
    body { font-family: Inter, sans-serif; background: #f5f5f5 }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 32px;
      background: #1a1a2e;
      color: white;
    }
    .logo { font-weight: 800; font-size: 18px; color: #7c6fff }
    .links { display: flex; gap: 24px; list-style: none }
    .links a { color: #ccc; text-decoration: none; font-size: 14px; transition: color .2s }
    .links a:hover { color: white }
    .btn { background: #7c6fff; padding: 8px 18px; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer; border: none; color: white }
  </style>
</head>
<body>
  <nav>
    <div class="logo">ShopIndia</div>
    <ul class="links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Cart</a></li>
    </ul>
    <button class="btn">Sign In</button>
  </nav>
  <div style="padding:40px 32px; color:#333">
    <h1 style="font-size:28px;margin-bottom:8px">Welcome!</h1>
    <p style="color:#666">This nav uses <code>justify-content: space-between</code> + <code>align-items: center</code>.</p>
  </div>
</body>
</html>`,
},

'CSS Box Model & Units': {
lang: 'html', title: 'See how padding/margin/border affect layout',
code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; padding: 20px; background: #1e1e2e; color: #cdd6f4 }
    .box {
      width: 200px;
      height: 80px;
      background: rgba(124,111,255,.3);
      border: 3px solid #7c6fff;
      padding: 20px;
      margin: 30px auto;
      border-radius: 8px;
      text-align: center;
      line-height: 40px;
      font-weight: 700;
    }
    /* Try changing these values! */
    .box-2 {
      width: 200px;
      background: rgba(74,222,128,.2);
      border: 3px solid #4ade80;
      padding: 5px;    /* small padding */
      margin: 10px auto;
      border-radius: 8px;
      text-align: center;
    }
  </style>
</head>
<body>
  <p>Box 1: padding:20px (large space inside)</p>
  <div class="box">Content here</div>
  <p>Box 2: padding:5px (tight space inside)</p>
  <div class="box-2">Content here</div>
  <p>Open DevTools (F12) → Inspector to see the box model diagram!</p>
</body>
</html>`,
},

'Variables & Data Types': {
lang: 'js', title: 'Variables in action — run and experiment',
code: `// 🔥 Run this and try changing values!

// const = never changes
const productName = "Sony Earbuds";
const price = 12990;
const inStock = true;

// let = can change
let cartCount = 0;
cartCount = cartCount + 1;

// Automatic type detection
console.log(typeof productName); // → string
console.log(typeof price);       // → number
console.log(typeof inStock);     // → boolean

// Template literal (backtick string)
console.log(\`\${productName} costs ₹\${price}\`);
console.log(\`Cart has \${cartCount} item(s)\`);

// ❌ This would throw an error - try uncommenting:
// productName = "JBL";  // Assignment to constant variable!`,
},

'Functions': {
lang: 'js', title: 'Build a working discount calculator',
code: `// Regular function
function getDiscountedPrice(price, discountPercent) {
  const discount = price * (discountPercent / 100);
  return price - discount;
}

// Arrow function version
const formatPrice = (amount) => \`₹\${amount.toLocaleString('en-IN')}\`;

// Using them together:
const originalPrice = 12990;
const discounted = getDiscountedPrice(originalPrice, 15);

console.log("Original:", formatPrice(originalPrice));
console.log("After 15% off:", formatPrice(discounted));
console.log("You save:", formatPrice(originalPrice - discounted));

// Try different discounts:
[5, 10, 20, 30].forEach(pct => {
  const final = getDiscountedPrice(originalPrice, pct);
  console.log(\`\${pct}% off → \${formatPrice(final)}\`);
});`,
},

'Conditions & Loops': {
lang: 'js', title: 'Filter products with real conditions',
code: `const products = [
  { name: "Earbuds", price: 1299, inStock: true, category: "audio" },
  { name: "Charger", price: 799, inStock: false, category: "accessories" },
  { name: "Headphones", price: 2499, inStock: true, category: "audio" },
  { name: "Cable", price: 299, inStock: true, category: "accessories" },
  { name: "Speaker", price: 3999, inStock: false, category: "audio" },
];

// Condition: show only what's in stock AND under ₹2000
const affordable = products.filter(p => p.inStock && p.price < 2000);
console.log("In stock & under ₹2000:");
affordable.forEach(p => console.log(\`  • \${p.name} — ₹\${p.price}\`));

// Switch for category label
function getEmoji(category) {
  switch(category) {
    case "audio": return "🎵";
    case "accessories": return "🔌";
    default: return "📦";
  }
}

console.log("\\nAll products with emoji:");
products.forEach(p => {
  const status = p.inStock ? "✅" : "❌";
  console.log(\`\${getEmoji(p.category)} \${p.name} \${status}\`);
});`,
},

'Arrays & Objects': {
lang: 'js', title: 'Real array transformations — map, filter, reduce',
code: `const cart = [
  { name: "Earbuds", price: 1299, qty: 1 },
  { name: "Cable", price: 299, qty: 3 },
  { name: "Charger", price: 799, qty: 2 },
];

// map: transform each item
const itemTotals = cart.map(item => ({
  name: item.name,
  total: item.price * item.qty
}));
console.log("Item totals:", JSON.stringify(itemTotals));

// reduce: sum all totals
const grandTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
console.log("Grand total: ₹" + grandTotal);

// filter: remove if qty > 1
const singleItems = cart.filter(item => item.qty === 1);
console.log("Single quantity items:", singleItems.map(i => i.name));

// Chaining: most expensive single-purchase items
const mostExpensive = [...cart]
  .sort((a, b) => b.price - a.price)
  .slice(0, 2)
  .map(i => i.name);
console.log("Top 2 by price:", mostExpensive);`,
},

'Closures & Scope': {
lang: 'js', title: 'Build a real counter with closures',
code: `// Closure: inner function remembers outer function's variables
function makeCounter(startValue = 0, step = 1) {
  let count = startValue;  // 👈 this is "closed over"
  
  return {
    increment: () => { count += step; return count; },
    decrement: () => { count -= step; return count; },
    reset: () => { count = startValue; return count; },
    value: () => count,
  };
}

const cartCounter = makeCounter(0, 1);
console.log("Add item:", cartCounter.increment()); // 1
console.log("Add item:", cartCounter.increment()); // 2
console.log("Add item:", cartCounter.increment()); // 3
console.log("Remove:", cartCounter.decrement());   // 2

// Two counters are INDEPENDENT — separate closures!
const wishlistCounter = makeCounter(0, 1);
wishlistCounter.increment();
wishlistCounter.increment();

console.log("Cart:", cartCounter.value());      // 2
console.log("Wishlist:", wishlistCounter.value()); // 2

// Step counter — increases by 5 each time
const pointsCounter = makeCounter(0, 5);
console.log("Points:", pointsCounter.increment()); // 5
console.log("Points:", pointsCounter.increment()); // 10`,
},

'Async JS & Fetch': {
lang: 'js', title: 'Fetch real product data from a live API',
code: `// Fetching from a real free API!
async function fetchProducts() {
  console.log("Fetching products...");
  
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=3");
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const products = await response.json();
    
    products.forEach(p => {
      console.log(\`📦 \${p.title.slice(0, 40)}...\`);
      console.log(\`   Price: $\${p.price} | Category: \${p.category}\`);
    });
    
    // Find the cheapest
    const cheapest = products.reduce((min, p) => p.price < min.price ? p : min);
    console.log(\`\\n💰 Cheapest: \${cheapest.title.slice(0,30)} — $\${cheapest.price}\`);
    
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

fetchProducts();`,
},

'ES6 Classes': {
lang: 'js', title: 'Build a Product class with inheritance',
code: `class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.inCart = false;
  }

  addToCart() {
    this.inCart = true;
    return \`\${this.name} added to cart!\`;
  }

  getDiscounted(percent) {
    return this.price * (1 - percent / 100);
  }

  toString() {
    return \`\${this.name} (₹\${this.price}) [\${this.category}]\`;
  }
}

// Inheritance — extends Product
class DigitalProduct extends Product {
  constructor(name, price, downloadSize) {
    super(name, price, 'digital');
    this.downloadSize = downloadSize;
  }

  toString() {
    return \`\${super.toString()} — \${this.downloadSize}MB download\`;
  }
}

const earbuds = new Product("Earbuds Pro", 1299, "audio");
const ebook = new DigitalProduct("React Guide", 299, 24);

console.log(earbuds.toString());
console.log(earbuds.addToCart());
console.log(\`20% off: ₹\${earbuds.getDiscounted(20)}\`);
console.log(ebook.toString());
console.log(earbuds instanceof Product); // true
console.log(ebook instanceof Product);   // true (inheritance!)`,
},

'DOM Manipulation': {
lang: 'html', title: 'Interactive shopping cart DOM manipulation',
code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Inter,sans-serif; padding: 20px; background: #f5f5f5 }
    #cart { background: white; border-radius: 12px; padding: 20px; max-width: 360px; box-shadow: 0 2px 12px rgba(0,0,0,.08) }
    h2 { margin: 0 0 16px; color: #1a1a2e }
    .item { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee }
    .item:last-of-type { border-bottom: none }
    button { padding: 6px 14px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 12px }
    .add-btn { background: #7c6fff; color: white }
    .remove-btn { background: #fee2e2; color: #991b1b }
    #total { font-size: 18px; font-weight: 800; color: #7c6fff; margin-top: 16px }
  </style>
</head>
<body>
  <div id="cart">
    <h2>🛒 Shopping Cart</h2>
    <div id="items"></div>
    <div id="total">Total: ₹0</div>
  </div>
  <br>
  <button class="add-btn" onclick="addItem()">+ Add Random Item</button>

  <script>
    const products = [
      { name: "Earbuds", price: 1299 },
      { name: "Charger", price: 799 },
      { name: "Cable", price: 299 },
      { name: "Stand", price: 1499 },
    ];
    let cart = [];

    function addItem() {
      const product = products[Math.floor(Math.random() * products.length)];
      cart.push({ ...product, id: Date.now() });
      render();
    }

    function removeItem(id) {
      cart = cart.filter(i => i.id !== id);
      render();
    }

    function render() {
      const container = document.getElementById('items');
      container.innerHTML = cart.map(item => \`
        <div class="item">
          <span>\${item.name}</span>
          <span>₹\${item.price}</span>
          <button class="remove-btn" onclick="removeItem(\${item.id})">✕</button>
        </div>
      \`).join('');
      
      const total = cart.reduce((s, i) => s + i.price, 0);
      document.getElementById('total').textContent = \`Total: ₹\${total.toLocaleString('en-IN')}\`;
    }

    render();
  </script>
</body>
</html>`,
},

'Events': {
lang: 'html', title: 'Event delegation on a product list',
code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Inter,sans-serif; padding: 20px; background: #f5f5f5 }
    .product { display: flex; justify-content: space-between; align-items: center; background: white; padding: 14px 18px; border-radius: 10px; margin-bottom: 8px; box-shadow: 0 1px 4px rgba(0,0,0,.06); transition: transform .15s }
    .product:hover { transform: translateY(-2px) }
    .product-name { font-weight: 600; color: #1a1a2e }
    .product-price { color: #7c6fff; font-weight: 700 }
    .btn { padding: 6px 14px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 12px; margin-left: 8px }
    .cart-btn { background: #7c6fff; color: white }
    .wish-btn { background: #fee2e2; color: #991b1b }
    #log { background: #1e1e2e; color: #4ade80; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; margin-top: 16px; min-height: 60px }
  </style>
</head>
<body>
  <div id="product-list">
    <div class="product" data-id="1" data-price="1299">
      <div><div class="product-name">Earbuds</div></div>
      <div>
        <span class="product-price">₹1,299</span>
        <button class="btn cart-btn" data-action="cart">🛒 Add</button>
        <button class="btn wish-btn" data-action="wish">❤️ Wish</button>
      </div>
    </div>
    <div class="product" data-id="2" data-price="799">
      <div><div class="product-name">Charger</div></div>
      <div>
        <span class="product-price">₹799</span>
        <button class="btn cart-btn" data-action="cart">🛒 Add</button>
        <button class="btn wish-btn" data-action="wish">❤️ Wish</button>
      </div>
    </div>
  </div>
  <div id="log">Events will appear here...</div>

  <script>
    // One listener handles ALL buttons via event delegation
    document.getElementById('product-list').addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      
      const product = e.target.closest('.product');
      const name = product.querySelector('.product-name').textContent;
      const action = btn.dataset.action;
      const log = document.getElementById('log');
      
      const msg = action === 'cart'
        ? \`🛒 Added "\${name}" to cart\`
        : \`❤️ Added "\${name}" to wishlist\`;
      
      log.textContent = msg + '\\n' + log.textContent;
    });
  </script>
</body>
</html>`,
},

'TypeScript Basics': {
lang: 'js', title: 'TypeScript concepts in plain JS (with type checks)',
code: `// TypeScript compiles to JavaScript — let's see what it enforces:

// In TS you'd write: function greet(name: string): string
// Here we simulate type validation:
function greet(name) {
  if (typeof name !== 'string') throw new TypeError(\`Expected string, got \${typeof name}\`);
  return \`Hello, \${name}!\`;
}

// In TS: interface Product { name: string; price: number; inStock: boolean }
function validateProduct(product) {
  if (typeof product.name !== 'string') throw new TypeError('name must be string');
  if (typeof product.price !== 'number') throw new TypeError('price must be number');
  if (typeof product.inStock !== 'boolean') throw new TypeError('inStock must be boolean');
  return true;
}

// Valid usage:
console.log(greet("Sandeep"));
console.log(validateProduct({ name: "Earbuds", price: 1299, inStock: true }));

// What TS would catch:
try { greet(42); }       catch(e) { console.error("TS error:", e.message); }
try { validateProduct({ name: "Earbuds", price: "free", inStock: true }); }
catch(e) { console.error("TS error:", e.message); }

// TypeScript's real power: autocomplete + compile-time safety
// These errors would be caught BEFORE you even run the code!`,
},

'React Mini-Project: Movie Search App': {
lang: 'js', title: 'Simulate useState + fetch pattern (plain JS)',
code: `// This is the JS logic behind your React Movie Search

// Simulating React state
let state = { query: '', loading: false, movies: [], error: null };

function setState(updates) {
  state = { ...state, ...updates };
  render();
}

function render() {
  if (state.loading) { console.log("⏳ Loading..."); return; }
  if (state.error) { console.error("❌ Error:", state.error); return; }
  if (!state.movies.length && state.query) { console.log("🔍 No results for:", state.query); return; }
  state.movies.forEach(m => console.log(\`🎬 \${m.title} (\${m.year})\`));
}

// Simulating the search effect
async function searchMovies(query) {
  if (!query.trim()) return;
  setState({ loading: true, error: null, movies: [] });
  
  try {
    // Using a real API endpoint
    const res = await fetch(\`https://api.tvmaze.com/search/shows?q=\${query}\`);
    const data = await res.json();
    const movies = data.slice(0, 4).map(item => ({
      title: item.show.name,
      year: item.show.premiered?.slice(0, 4) || 'N/A',
    }));
    setState({ movies, loading: false, query });
  } catch(e) {
    setState({ error: e.message, loading: false });
  }
}

// Simulate typing in the search box:
searchMovies("Breaking Bad");`,
},

'Capstone Project: GitHub Profile Explorer': {
lang: 'js', title: 'Fetch real GitHub user data right now',
code: `// Your capstone uses this exact API!
async function getGitHubProfile(username) {
  console.log(\`Fetching GitHub profile for: \${username}\`);
  
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(\`https://api.github.com/users/\${username}\`),
      fetch(\`https://api.github.com/users/\${username}/repos?sort=stars&per_page=5\`)
    ]);
    
    if (!userRes.ok) throw new Error(\`User "\${username}" not found\`);
    
    const user = await userRes.json();
    const repos = await reposRes.json();
    
    console.log("👤 Profile:");
    console.log(\`  Name: \${user.name || user.login}\`);
    console.log(\`  Bio: \${user.bio || 'No bio'}\`);
    console.log(\`  Followers: \${user.followers} | Repos: \${user.public_repos}\`);
    
    console.log("\\n⭐ Top repos:");
    repos.slice(0, 3).forEach(r => {
      console.log(\`  \${r.name} — ⭐\${r.stargazers_count} \${r.language ? '| ' + r.language : ''}\`);
    });
    
  } catch(e) {
    console.error("Error:", e.message);
  }
}

// Try different usernames:
getGitHubProfile("torvalds");`,
},

};
