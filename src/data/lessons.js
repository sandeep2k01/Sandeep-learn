// Auto-extracted from sandeep-learns6.html
export const LESSONS = [

// ───────────────────────── PHASE 0: HTML ESSENTIALS ─────────────────────────
{
  track:'htmlcss', phase:'Phase 0 — HTML & CSS Refresher', title:'HTML Essentials (Refresher)',
  desc:'A fast refresher, not a full course — assuming you\'ve touched HTML before. Covers exactly what shows up in every project ahead: semantic structure, forms, and the accessibility basics interviewers actually ask about.',
  badge:'b-blue', badgeText:'Refresher — quick, not a full course',
  react:'JSX is just HTML syntax rules with a few differences (className instead of class, every tag must close). Solid HTML habits transfer directly.',
  steps:[
    {
      tag:'explain', title:'Semantic HTML',
      chat:[
        {who:'m',code:`<span class="cm">&lt;!-- Non-semantic — works, but means nothing --&gt;</span>\n&lt;div class=<span class="str">"header"</span>&gt;...&lt;/div&gt;\n\n<span class="cm">&lt;!-- Semantic — the tag itself describes its role --&gt;</span>\n&lt;header&gt;...&lt;/header&gt;\n&lt;nav&gt;...&lt;/nav&gt;\n&lt;main&gt;...&lt;/main&gt;\n&lt;footer&gt;...&lt;/footer&gt;`},
        {who:'m',text:'Semantic tags help screen readers, SEO, and other developers understand your page structure at a glance — interviewers notice when you use them.'}
      ]
    },
    {
      tag:'question', title:'Why semantic tags matter',
      chat:[{who:'m',text:'Why is <code>&lt;nav&gt;</code> better than <code>&lt;div class="nav"&gt;</code> for the exact same visual result? 🎯'}],
      ph:'Because...',
      words:['screen reader','accessibility','meaning','seo','understand','describe'],
      good:'Right — screen readers and search engines understand &lt;nav&gt; immediately, while a div needs a class name to mean anything. ✓',
      hint:'Think about a screen reader user, or a search engine crawler — can they tell what a &lt;div&gt; is for, without reading its class name?'
    },
    {
      tag:'explain', title:'Forms + accessibility basics',
      chat:[
        {who:'m',code:`&lt;form&gt;\n  &lt;label for=<span class="str">"email"</span>&gt;Email&lt;/label&gt;\n  &lt;input id=<span class="str">"email"</span> type=<span class="str">"email"</span> required /&gt;\n  &lt;button type=<span class="str">"submit"</span>&gt;Submit&lt;/button&gt;\n&lt;/form&gt;\n\n&lt;img src=<span class="str">"logo.png"</span> alt=<span class="str">"BuyFlux logo"</span> /&gt;`},
        {who:'m',text:'<code>label for=</code> must match the input\'s <code>id</code> — this is what lets a screen reader (or a click on the label) connect them. <code>alt</code> on images is required for accessibility, not optional decoration.'}
      ]
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`&lt;label for=<span class="str">"qty"</span>&gt;Quantity&lt;/label&gt;\n&lt;input ____=<span class="str">"qty"</span> type=<span class="str">"number"</span> /&gt;`},
        {who:'m',text:'Fill in the missing attribute name so this input is correctly linked to its label. 🎯'}
      ],
      ph:'____',
      words:['id'],
      good:'Yes — <code>id="qty"</code>, matching the label\'s <code>for="qty"</code>. ✓',
      hint:'The label uses for="qty" — what attribute on the input needs to match that exact value?'
    }
  ],
  notes:[
    {icon:'📌',text:'Use semantic tags (header, nav, main, footer, section, article) instead of divs wherever a fitting tag exists.',copy:'Write: prefer semantic tags over generic divs'},
    {icon:'📌',text:'Every input needs a linked label (matching for/id), and every image needs a meaningful alt text.',copy:'Write: label for= matches input id=, images need alt'}
  ],
  tasks:[
    'Rebuild one existing HTML page using semantic tags instead of divs',
    'Add a form with at least 2 inputs, each with a properly linked label',
    'Add meaningful alt text to every image on the page',
    'Push to GitHub: git commit -m "refresher: HTML essentials"'
  ],
  tip:'Interview Q: "What is semantic HTML and why does it matter?" It describes content meaning, not just appearance — improving accessibility, SEO, and code readability for other developers.',
  next:'CSS Essentials (Refresher)'
},

// ───────────────────────── PHASE 0: CSS ESSENTIALS ─────────────────────────
{
  track:'htmlcss', phase:'Phase 0 — HTML & CSS Refresher', title:'CSS Essentials (Refresher)',
  desc:'A fast refresher on the CSS you\'ll lean on constantly: Flexbox for laying things out in a row/column, Grid for 2D layouts, and responsive design so your projects don\'t break on mobile.',
  badge:'b-blue', badgeText:'Refresher — quick, not a full course',
  react:'Every component you build in React still needs CSS to actually look like something — these layout skills apply directly inside JSX, just with className instead of class.',
  steps:[
    {
      tag:'explain', title:'Flexbox — 1D layout',
      chat:[
        {who:'m',code:`.navbar {\n  display: flex;\n  justify-content: space-between; <span class="cm">/* spreads items left/right */</span>\n  align-items: center;             <span class="cm">/* centers vertically */</span>\n  gap: 16px;                       <span class="cm">/* space between items */</span>\n}`},
        {who:'m',text:'<code>display: flex</code> turns on Flexbox. <code>justify-content</code> controls the main axis (usually horizontal), <code>align-items</code> controls the cross axis (usually vertical).'}
      ]
    },
    {
      tag:'question', title:'Flexbox vs Grid',
      chat:[{who:'m',text:'When would you reach for CSS Grid instead of Flexbox? 🎯'}],
      ph:'Grid is better when...',
      words:['2d','rows and columns','both directions','grid','layout','two'],
      good:'Right — Grid handles rows AND columns together (2D layout), while Flexbox is best for laying things out in a single row or column (1D). ✓',
      hint:'Flexbox is one direction at a time (a row, or a column). What does Grid let you control that Flexbox doesn\'t — think rows AND columns together.'
    },
    {
      tag:'explain', title:'Responsive design',
      chat:[
        {who:'m',code:`.product-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n@media (max-width: 768px) {\n  .product-grid {\n    grid-template-columns: repeat(1, 1fr); <span class="cm">/* stack into 1 column on mobile */</span>\n  }\n}`},
        {who:'m',text:'<code>@media (max-width: 768px)</code> applies styles only below that screen width — the core tool for making layouts mobile-friendly.'}
      ]
    },
    {
      tag:'modify', title:'Modify the code',
      chat:[
        {who:'m',code:`.cart-row {\n  display: flex;\n  justify-content: space-between;\n}`},
        {who:'m',text:'On mobile (below 600px), you want .cart-row to stack vertically instead of side-by-side. Write the media query that changes flex-direction to column below 600px. 🎯'}
      ],
      ph:'@media (max-width: 600px) { .cart-row { flex-direction: column; } }',
      words:['max-width: 600px','flex-direction: column'],
      good:'Right — <code>@media (max-width: 600px) { .cart-row { flex-direction: column; } }</code> ✓',
      hint:'Wrap the rule in @media (max-width: 600px) { ... }, and inside, set flex-direction to column.'
    }
  ],
  notes:[
    {icon:'📌',text:'Flexbox = 1D layout (row OR column). Grid = 2D layout (rows AND columns together).',copy:'Write: Flexbox = 1D, Grid = 2D'},
    {icon:'📌',text:'@media (max-width: Npx) { ... } applies styles only below that screen width — core tool for responsive design.',copy:'Write: @media for responsive breakpoints'}
  ],
  tasks:[
    'Build a navbar using Flexbox with space-between',
    'Build a 3-column product grid using CSS Grid',
    'Add a media query that collapses the grid to 1 column below 768px',
    'Test it by resizing your browser window narrow',
    'Push to GitHub: git commit -m "refresher: CSS essentials"'
  ],
  tip:'Interview Q: "How would you center a div both horizontally and vertically?" display: flex; justify-content: center; align-items: center; — the most commonly asked CSS question of all.',
  next:'CSS Box Model & Units'
},

// ───────────────────────── PHASE 0: BOX MODEL & UNITS ─────────────────────────
{
  track:'htmlcss', phase:'Phase 0 — HTML & CSS Refresher', title:'CSS Box Model & Units',
  desc:'Why padding/margin behave unexpectedly, and which unit to reach for. Skip this and you\'ll hit confusing sizing bugs on literally every project ahead.',
  badge:'b-blue', badgeText:'Fixes the #1 source of layout confusion',
  react:'Every styled component you build — cards, buttons, inputs — runs into box-sizing and unit choices immediately. This isn\'t optional knowledge.',
  steps:[
    {
      tag:'explain', title:'The box model',
      chat:[
        {who:'m',code:`.card {\n  width: <span class="nm">200</span>px;\n  padding: <span class="nm">20</span>px;\n  border: <span class="nm">2</span>px solid <span class="str">#ccc</span>;\n}\n<span class="cm">/* By default, the rendered box is 200 + 20+20 (padding) + 2+2 (border) = 244px wide! */</span>`},
        {who:'m',text:'Every element is content → padding → border → margin, stacked outward. By default, padding and border ADD to your specified width — surprising the first time you hit it.'}
      ]
    },
    {
      tag:'explain', title:'box-sizing: border-box',
      chat:[
        {who:'m',code:`* {\n  box-sizing: border-box;\n}\n<span class="cm">/* Now width: 200px means the TOTAL box is 200px, padding/border included */</span>`},
        {who:'m',text:'Almost every real project adds <code>* { box-sizing: border-box; }</code> at the very top of their CSS — it makes sizing behave the way you\'d intuitively expect.'}
      ]
    },
    {
      tag:'question', title:'Why border-box everywhere',
      chat:[{who:'m',text:'Why do most real CSS files start with * { box-sizing: border-box; }? 🎯'}],
      ph:'Because without it...',
      words:['add','grow','bigger','unexpected','padding','border','total'],
      good:'Right — without it, padding and border keep adding to your declared width, making elements grow unexpectedly bigger than you specified. ✓',
      hint:'Re-read the first example — what happened to the 200px card once padding and border were added?'
    },
    {
      tag:'explain', title:'Which unit to use',
      chat:[
        {who:'m',code:`.title { font-size: <span class="nm">2</span>rem; }      <span class="cm">/* relative to root font size — scales well */</span>\n.card  { padding: <span class="nm">16</span>px; }       <span class="cm">/* fixed — good for borders, small consistent gaps */</span>\n.hero  { width: <span class="nm">100</span>%; }         <span class="cm">/* relative to parent */</span>\n.banner{ height: <span class="nm">100</span>vh; }       <span class="cm">/* relative to the full viewport height */</span>`},
        {who:'m',text:'<code>rem</code> for font sizes (respects user\'s browser settings), <code>%</code>/<code>vh</code>/<code>vw</code> for layout that should scale with the screen, <code>px</code> for small fixed details like a 1px border.'}
      ]
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`.section {\n  min-height: <span class="nm">100</span>____; <span class="cm">/* should always fill the full screen height */</span>\n}`},
        {who:'m',text:'Fill in the unit that makes this always equal the full visible screen height. 🎯'}
      ],
      ph:'____',
      words:['vh'],
      good:'Yes — <code>vh</code> (viewport height). 100vh = 100% of the visible screen height. ✓',
      hint:'It\'s the unit relative to the viewport\'s height, mentioned in the example above.'
    }
  ],
  notes:[
    {icon:'📌',text:'Box model order: content → padding → border → margin. Add * { box-sizing: border-box; } to every project.',copy:'Write: box-sizing: border-box on everything'},
    {icon:'📌',text:'rem for font sizes, %/vh/vw for scalable layout, px for small fixed details.',copy:'Write: rem=font, %/vh/vw=scalable layout, px=fixed details'}
  ],
  tasks:[
    'Add * { box-sizing: border-box; } to the top of an existing project\'s CSS and observe what changes',
    'Convert all font-size declarations in one project from px to rem',
    'Build one section that\'s exactly 100vh tall',
    'Push to GitHub: git commit -m "refresher: CSS box model and units"'
  ],
  tip:'Interview Q: "What does box-sizing: border-box do?" It makes width/height include padding and border, instead of adding them on top — almost always set globally in real projects.',
  next:'CSS Positioning & Interactive States'
},

// ───────────────────────── PHASE 0: POSITIONING & INTERACTIVE STATES ─────────────────────────
{
  track:'htmlcss', phase:'Phase 0 — HTML & CSS Refresher', title:'CSS Positioning & Interactive States',
  desc:'How to make a sticky navbar, a dropdown, or a modal — and how to make buttons feel alive with hover/focus states and transitions. Shows up in nearly every project ahead.',
  badge:'b-blue', badgeText:'Needed for navbars, modals, dropdowns, and polish',
  react:'A modal or dropdown in a React app still relies entirely on plain CSS positioning underneath — React just controls when it shows up.',
  steps:[
    {
      tag:'explain', title:'Positioning values',
      chat:[
        {who:'m',code:`.navbar  { position: sticky; top: <span class="nm">0</span>; }      <span class="cm">/* sticks to top once you scroll past it */</span>\n.modal   { position: fixed; top: <span class="nm">50</span>%; left: <span class="nm">50</span>%; } <span class="cm">/* pinned to the viewport, ignores scroll */</span>\n.badge   { position: absolute; top: <span class="nm">-8</span>px; right: <span class="nm">-8</span>px; } <span class="cm">/* positioned relative to nearest positioned parent */</span>`},
        {who:'m',text:'<code>relative</code> = normal flow but offsettable. <code>absolute</code> = positioned relative to the nearest ancestor that has <code>position</code> set (not static). <code>fixed</code> = relative to the screen, ignores scrolling. <code>sticky</code> = normal until a scroll threshold, then sticks.'}
      ]
    },
    {
      tag:'question', title:'absolute needs a parent',
      chat:[{who:'m',text:'For .badge { position: absolute } to position correctly relative to its card (not the whole page), what does the parent .card element need? 🎯'}],
      ph:'.card needs...',
      words:['position: relative','relative','position'],
      good:'Right — the parent needs <code>position: relative</code> (or any non-static value) — otherwise the absolute child positions relative to the whole page. ✓',
      hint:'absolute looks for the nearest ANCESTOR with a position value set. If none exists, what does it fall back to — the whole page?'
    },
    {
      tag:'explain', title:'Hover, focus, and transitions',
      chat:[
        {who:'m',code:`.btn {\n  background: <span class="str">#5b4de8</span>;\n  transition: background <span class="nm">0.2</span>s ease, transform <span class="nm">0.2</span>s ease;\n}\n.btn:hover {\n  background: <span class="str">#4a3dd0</span>;\n  transform: translateY(<span class="nm">-1</span>px);\n}\n.btn:focus {\n  outline: <span class="nm">2</span>px solid <span class="str">#a89fff</span>; <span class="cm">/* never remove focus outlines — accessibility */</span>\n}`},
        {who:'m',text:'<code>transition</code> makes property changes animate smoothly instead of snapping instantly. <code>:focus</code> styling matters for keyboard/accessibility users — never set <code>outline: none</code> without replacing it with something visible.'}
      ]
    },
    {
      tag:'modify', title:'Modify the code',
      chat:[
        {who:'m',code:`.card {\n  background: <span class="str">white</span>;\n}\n.card:hover {\n  background: <span class="str">#f5f5f5</span>;\n}`},
        {who:'m',text:'Right now this hover change snaps instantly. Add a transition so the background fades smoothly over 0.2 seconds. Type the new .card rule. 🎯'}
      ],
      ph:'.card { background: white; transition: background 0.2s ease; }',
      words:['transition'],
      good:'Right — add <code>transition: background 0.2s ease;</code> to the base .card rule (not the :hover rule). ✓',
      hint:'transition goes on the BASE state, not the :hover state — it tells the browser how to animate any change.'
    }
  ],
  notes:[
    {icon:'📌',text:'position: relative (offsettable, normal flow), absolute (relative to positioned ancestor), fixed (relative to screen), sticky (sticks after a scroll point).',copy:'Write: relative/absolute/fixed/sticky meanings'},
    {icon:'📌',text:'Put transition on the base state, change the property in :hover/:focus. Never remove :focus outlines without replacing them.',copy:'Write: transition on base state, never remove focus outline'}
  ],
  tasks:[
    'Build a sticky navbar that sticks to the top on scroll',
    'Build a small notification badge positioned absolutely on a card corner',
    'Add a smooth hover transition to every button in one existing project',
    'Confirm every interactive element has a visible :focus state (try tabbing through your page)',
    'Push to GitHub: git commit -m "refresher: CSS positioning and interactive states"'
  ],
  tip:'Interview Q: "Difference between relative, absolute, fixed, and sticky positioning?" Be ready to define all 4 in one breath — this is asked almost word-for-word in frontend interviews.',
  next:'HTML & CSS Interview Questions'
},

// ───────────────────────── PHASE 0: HTML & CSS INTERVIEW QUESTIONS ─────────────────────────
{
  track:'htmlcss', phase:'Phase 0 — HTML & CSS Refresher', title:'HTML & CSS Interview Questions',
  desc:'Review, not new material. The HTML/CSS questions that come up as quick warm-up questions before the JS/React parts of an interview.',
  badge:'b-red', badgeText:'Review — quick recall, not new content',
  react:'These are usually asked before the React-specific questions, as a warm-up.',
  steps:[
    {
      tag:'explain', title:'Specificity & the cascade',
      chat:[
        {who:'m',text:'When two CSS rules target the same element, the more SPECIFIC selector wins, regardless of order. Roughly, from weakest to strongest: element selectors (p) → class selectors (.card) → id selectors (#header) → inline styles → !important.'},
        {who:'m',text:'If specificity is EQUAL, the rule that appears LAST in the file wins. This is "the cascade" — it\'s why your CSS rule sometimes "doesn\'t apply" even though it looks correct.'}
      ]
    },
    {
      tag:'challenge', title:'Rapid review',
      chat:[
        {who:'m',text:'Answer out loud, no notes: (1) What does box-sizing: border-box do? (2) Difference between em and rem? (3) Difference between absolute and fixed positioning? (4) What is specificity? (5) How do you center a div?'},
        {who:'m',text:'Which ONE of these 5 do you feel least confident about right now? 🎯'}
      ],
      ph:'I feel least confident about...',
      words:['box-sizing','em','rem','absolute','fixed','specificity','center'],
      good:'Good — naming your weak spot honestly is the point of this checkpoint. Re-read that lesson\'s notes before moving on to JavaScript.',
      hint:'No wrong answer — just pick whichever you\'d hesitate to explain to a stranger right now.'
    }
  ],
  notes:[{icon:'📌',text:'em is relative to the PARENT element\'s font size (compounds when nested). rem is relative to the ROOT html font size (predictable, doesn\'t compound) — this is why rem is usually preferred.',copy:'Write: em=relative to parent, rem=relative to root'}],
  tasks:[
    'Write your own one-sentence answer to all 5 questions above from memory',
    'Find 5 more common CSS interview questions online and answer them in your notebook',
    'Re-read the notes for whichever topic felt weakest'
  ],
  tip:'These HTML/CSS questions are usually quick warm-ups before the real JS/React discussion — fast, confident answers here build momentum for the rest of the interview.',
  next:'Variables & Data Types'
},

// ───────────────────────── 0: VARIABLES ─────────────────────────
{
  track:'js', phase:'Phase 1 — JavaScript Foundations', title:'Variables & Data Types',
  desc:'A variable is a named box that stores data. This is the very first thing every JS file does — and the foundation every later topic builds on.',
  badge:'b-green', badgeText:'Foundation — everything else depends on this',
  react:'Every React component starts with variables and data — props are just values passed into a function, and state (useState) is a variable that React watches for changes.',
  steps:[
    {
      tag:'explain', title:'What problem do variables solve?',
      chat:[
        {who:'m',text:'HTML stores content in tags — like <code>&lt;h1&gt;Hello&lt;/h1&gt;</code>. But what if the content needs to <em>change</em>, like a cart count going from 0 to 3? HTML can\'t do that. JavaScript stores changing data in <strong>variables</strong>.'},
        {who:'m',text:'3 keywords exist: <code>var</code>, <code>let</code>, <code>const</code>. We skip <code>var</code> — old and buggy. Modern JS uses only <code>let</code> and <code>const</code>.'}
      ]
    },
    {
      tag:'explain', title:'See it in action',
      chat:[
        {who:'m',code:`<span class="cm">// STRING — any text. Always wrapped in quotes.</span>\n<span class="kw">const</span> productName = <span class="str">"Wireless Earbuds"</span>;\n\n<span class="cm">// NUMBER — no quotes needed.</span>\n<span class="kw">let</span> price = <span class="nm">1299</span>;\n\n<span class="cm">// BOOLEAN — only ever true or false.</span>\n<span class="kw">const</span> inStock = <span class="kw">true</span>;`},
        {who:'m',text:'<code>const</code> = fixed reference, can\'t be reassigned. <code>let</code> = value can be updated later. Default rule: start with <code>const</code>, switch to <code>let</code> only when you know the value changes.'}
      ]
    },
    {
      tag:'question', title:'Quick check — let vs const',
      chat:[{who:'m',text:'What is the difference between <code>let</code> and <code>const</code>? Answer in your own words. 🎯'}],
      ph:'let is for... const is for...',
      words:['change','constant','cant','cannot','fixed','same','update','modify','reassign'],
      good:'Exactly right! <code>const</code> = value is fixed. <code>let</code> = value can be updated. ✓',
      hint:'Think of the word "constant" — stays the same. So const = stays the same, let = can change. Try again.'
    },
    {
      tag:'modify', title:'Modify the code',
      chat:[
        {who:'m',code:`<span class="kw">const</span> productName = <span class="str">"Earbuds"</span>;\n<span class="kw">const</span> price = <span class="nm">1299</span>;\nprice = <span class="nm">999</span>; <span class="cm">// 🐛 this line crashes</span>`},
        {who:'m',text:'This code throws "Assignment to constant variable." Type the ONE-WORD fix — which keyword should <code>price</code> use instead of <code>const</code>? 🎯'}
      ],
      ph:'Change const to ___',
      words:['let'],
      good:'Right — change <code>const price</code> to <code>let price</code>. Now reassigning works because the value is allowed to change. ✓',
      hint:'price needs to change later, so it can\'t be const. What\'s the other keyword we learned?'
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">const</span> product = {\n  name: <span class="str">"Charger"</span>,\n  ____: <span class="nm">799</span>,\n  inStock: <span class="kw">true</span>\n};\nconsole.<span class="fn">log</span>(product.price); <span class="cm">// should print 799</span>`},
        {who:'m',text:'Fill in the blank key name so <code>product.price</code> works. Just type the missing word. 🎯'}
      ],
      ph:'____',
      words:['price'],
      good:'Correct — the key must be named <code>price</code> to match <code>product.price</code>. ✓',
      hint:'Look at the line below the object: it accesses <code>product.price</code>. The key name must match exactly.'
    }
  ],
  notes:[
    {icon:'📌',text:'<code>const</code> = value never changes. <code>let</code> = value can change. Never use <code>var</code>.',copy:'Write: const for fixed, let for changing'},
    {icon:'📌',text:'3 basic types: <strong>String</strong> (text), <strong>Number</strong> (no quotes), <strong>Boolean</strong> (true/false)',copy:'Write: String="text", Number=42, Boolean=true/false'},
    {icon:'📌',text:'An <strong>object</strong> groups data: <code>const obj = { key: value }</code>. Access with <code>obj.key</code>',copy:'Write: object = {}, access with dot notation'}
  ],
  tasks:[
    'Open VS Code. Create a file called lesson1-variables.js',
    'Create a product object with 6 properties: name, price, inStock, category, rating, brand',
    'console.log each property using dot notation',
    'Try changing a const property — read the error message in terminal',
    'Change the price using let — confirm it works with console.log',
    'Push to GitHub: git commit -m "lesson 1: variables"'
  ],
  tip:'Interview Q: "Difference between let, const and var?" — var is function-scoped with hoisting issues. let/const are block-scoped. const can\'t be reassigned. Always prefer const.',
  next:'Functions'
},
// ───────────────────────── 1: FUNCTIONS ─────────────────────────
{
  track:'js', phase:'Phase 1 — JavaScript Foundations', title:'Functions',
  desc:'Functions are the most important concept in all of JavaScript. A React component is literally just a function. Master this and React will feel natural.',
  badge:'b-red', badgeText:'React is impossible without this',
  react:'A React component is just a function that returns JSX. Props are the parameters. The component re-running on every render is exactly like calling a function again with new arguments.',
  steps:[
    {
      tag:'explain', title:'Why functions exist',
      chat:[
        {who:'m',text:'Imagine BuyFlux has 50 products, each needing a 10% discount calculation. Write it once per product — copy-pasted 50 times. Now the discount changes to 15%. You\'d need to update it in 50 places. Functions solve this: write the logic once, use it everywhere, change it in one place.'}
      ]
    },
    {
      tag:'explain', title:'Anatomy of a function',
      chat:[
        {who:'m',code:`<span class="cm">// DEFINE — write the recipe once</span>\n<span class="kw">function</span> <span class="fn">getDiscountedPrice</span>(price, discount) {\n  <span class="kw">const</span> saving = price * discount / <span class="nm">100</span>;\n  <span class="kw">return</span> price - saving;\n}\n\n<span class="cm">// CALL — use it whenever you need it</span>\n<span class="fn">getDiscountedPrice</span>(<span class="nm">1299</span>, <span class="nm">10</span>);  <span class="cm">// → 1169.1</span>`},
        {who:'m',text:'<code>price</code> and <code>discount</code> are <strong>parameters</strong>. <code>return</code> sends the result back.'}
      ]
    },
    {
      tag:'question', title:'Trace through the logic',
      chat:[{who:'m',text:'Work out on paper: what does <code>getDiscountedPrice(999, 20)</code> return? Show your calculation. 🎯'}],
      ph:'saving = 999 * 20 / 100 = ___, return 999 - ___ = ___',
      words:['799','799.2','800'],
      good:'Correct! saving = 199.8, result = 799.2. ✓',
      hint:'saving = 999 × 20 ÷ 100 = ??? Then: 999 − saving = ???'
    },
    {
      tag:'explain', title:'Arrow functions — the React way',
      chat:[
        {who:'m',code:`<span class="cm">// Same thing, arrow function style</span>\n<span class="kw">const</span> <span class="fn">greet</span> = (name) => {\n  <span class="kw">return</span> <span class="str">"Hello, "</span> + name;\n};\n\n<span class="cm">// Short form</span>\n<span class="kw">const</span> <span class="fn">greet</span> = (name) => <span class="str">"Hello, "</span> + name;`},
        {who:'m',text:'Arrow functions use <code>=></code> instead of the word <code>function</code>, and live in a <code>const</code>.'}
      ]
    },
    {
      tag:'modify', title:'Modify the code',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">getTotal</span>(price, qty) {\n  <span class="kw">return</span> price * qty;\n}`},
        {who:'m',text:'Rewrite <code>getTotal</code> as an arrow function stored in a const. Type the full line. 🎯'}
      ],
      ph:'const getTotal = (price, qty) => ...',
      words:['const gettotal','=>'],
      good:'Nice — <code>const getTotal = (price, qty) => price * qty;</code> works perfectly. ✓',
      hint:'Pattern: <code>const name = (params) => expression;</code>'
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">const</span> isExpensive = (price) => price > ____;\nconsole.<span class="fn">log</span>(isExpensive(<span class="nm">1500</span>)); <span class="cm">// should print true</span>`},
        {who:'m',text:'What number goes in the blank so that 1500 returns true but 800 would return false? 🎯'}
      ],
      ph:'____',
      words:['1000','999'],
      good:'Yes — any threshold between 800 and 1500 works, e.g. 1000. ✓',
      hint:'Pick a number smaller than 1500 but bigger than 800.'
    }
  ],
  notes:[
    {icon:'📌',text:'A function: <strong>define once</strong>, <strong>call many times</strong>',copy:'Write: define = recipe, call = use recipe'},
    {icon:'📌',text:'Arrow function syntax: <code>const name = (params) => { return value; }</code>',copy:'Write: const fn = (p) => { return p; }'},
    {icon:'📌',text:'React components = arrow functions that return JSX.',copy:'Write: React component = arrow function returning JSX'}
  ],
  tasks:[
    'Create lesson2-functions.js',
    'Write addToCart(name, price) that logs "Added [name] — ₹[price] to cart"',
    'Rewrite addToCart as an arrow function',
    'Write calculateTotal(p1, p2, p3) — returns the sum',
    'Write isExpensive(price) — returns true if price > 1000',
    'Push to GitHub: git commit -m "lesson 2: functions"'
  ],
  tip:'Interview Q: "Difference between regular function and arrow function?" Arrow functions don\'t have their own <code>this</code> — they inherit it from the parent scope.',
  next:'The this Keyword'
},

// ───────────────────────── NEW: THE THIS KEYWORD ─────────────────────────
{
  track:'js', phase:'Phase 1 — JavaScript Foundations', title:'The this Keyword',
  desc:'One of the most asked — and most confusing — JS interview questions. this changes meaning depending on HOW a function is called, not where it\'s written. Worth getting solid now, right after Functions, while it\'s fresh.',
  badge:'b-red', badgeText:'Classic interview question — confuses most beginners',
  react:'Class components (older React code you\'ll still see) bind this constantly. Even in modern React, understanding this is what makes "why doesn\'t my event handler work" debuggable.',
  steps:[
    {
      tag:'explain', title:'this depends on how you call it',
      chat:[
        {who:'m',code:`<span class="kw">const</span> user = {\n  name: <span class="str">"Sandeep"</span>,\n  greet() {\n    console.<span class="fn">log</span>(<span class="str">"Hi, "</span> + this.name);\n  }\n};\nuser.<span class="fn">greet</span>(); <span class="cm">// "Hi, Sandeep" — this = user, because user.greet() called it</span>\n\n<span class="kw">const</span> greetFn = user.greet;\n<span class="fn">greetFn</span>(); <span class="cm">// "Hi, undefined" — this is now undefined/global, NOT user!</span>`},
        {who:'m',text:'<code>this</code> is decided at CALL time, based on what\'s to the left of the dot — not where the function was defined. Same function, different <code>this</code>, depending on how it\'s called.'}
      ]
    },
    {
      tag:'question', title:'Why does it break when reassigned?',
      chat:[{who:'m',text:'In the example above, why does greetFn() lose track of "user" even though it\'s the exact same function? 🎯'}],
      ph:'Because this is decided by...',
      words:['call','how','left of the dot','not where defined','calling'],
      good:'Right — this is set by HOW the function is called, not where it was written. Calling it as greetFn() with nothing before the dot means there\'s no object to bind this to. ✓',
      hint:'Look at what\'s different between user.greet() and greetFn() — what\'s missing in the second call?'
    },
    {
      tag:'explain', title:'Arrow functions don\'t have their own this',
      chat:[
        {who:'m',code:`<span class="kw">const</span> user = {\n  name: <span class="str">"Sandeep"</span>,\n  delayedGreet() {\n    setTimeout(() => {\n      console.<span class="fn">log</span>(<span class="str">"Hi, "</span> + this.name); <span class="cm">// arrow function — inherits this from delayedGreet</span>\n    }, <span class="nm">1000</span>);\n  }\n};\nuser.<span class="fn">delayedGreet</span>(); <span class="cm">// "Hi, Sandeep" — works correctly</span>`},
        {who:'m',text:'This is exactly why arrow functions are usually safer inside objects/callbacks — they don\'t create their own <code>this</code>, they borrow it from the surrounding code where they were written.'}
      ]
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">const</span> cart = {\n  items: [<span class="str">"Earbuds"</span>, <span class="str">"Charger"</span>],\n  printItems() {\n    this.items.<span class="fn">forEach</span>(____ {\n      console.<span class="fn">log</span>(this.items.length); <span class="cm">// should correctly print 2, twice</span>\n    });\n  }\n};`},
        {who:'m',text:'Fill in the missing arrow function syntax (with no parameters needed for this example, just the arrow) so "this" still correctly refers to cart inside the callback. 🎯'}
      ],
      ph:'(item) => {',
      words:['=>'],
      good:'Right — using an arrow function here means "this" still correctly points to cart, instead of becoming undefined like a regular function would inside forEach. ✓',
      hint:'A regular function() passed to forEach would lose track of "this". Which function type keeps it?'
    }
  ],
  notes:[
    {icon:'📌',text:'this is set by HOW a function is called (what\'s before the dot), not where it was written.',copy:'Write: this depends on how called, not where defined'},
    {icon:'📌',text:'Arrow functions don\'t have their own this — they inherit it from the surrounding scope. This makes them safer inside callbacks.',copy:'Write: arrow functions inherit this from outer scope'}
  ],
  tasks:[
    'Create lesson-this.js',
    'Write an object with a method using this, call it normally, then call it after reassigning to a variable — observe the difference',
    'Fix a broken callback by switching a regular function to an arrow function so this still works',
    'Push to GitHub: git commit -m "lesson: the this keyword"'
  ],
  tip:'Interview Q: "What does this refer to inside an arrow function?" Whatever this was in the surrounding (enclosing) scope — arrow functions never create their own this.',
  next:'ES6 Classes'
},

// ───────────────────────── NEW: ES6 CLASSES ─────────────────────────
{
  track:'js', phase:'Phase 1 — JavaScript Foundations', title:'ES6 Classes',
  desc:'Classes are JavaScript\'s blueprint syntax for creating many similar objects. You\'ll see this in real codebases and it comes up in interviews — and it ties directly into the this you just learned.',
  badge:'b-amber', badgeText:'Real codebases use this — and it builds on this',
  react:'Older React code uses class components extensively (you\'ll still see them in legacy projects/interviews), and the constructor/this pattern here is exactly what those looked like before hooks existed.',
  steps:[
    {
      tag:'explain', title:'A basic class',
      chat:[
        {who:'m',code:`<span class="kw">class</span> Product {\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n  }\n  getLabel() {\n    <span class="kw">return</span> \`\${this.name} — ₹\${this.price}\`;\n  }\n}\n\n<span class="kw">const</span> earbuds = <span class="kw">new</span> Product(<span class="str">"Earbuds"</span>, <span class="nm">1299</span>);\nconsole.<span class="fn">log</span>(earbuds.<span class="fn">getLabel</span>()); <span class="cm">// "Earbuds — ₹1299"</span>`},
        {who:'m',text:'<code>constructor</code> runs automatically when you use <code>new</code> — it sets up the object\'s starting properties. Methods defined in a class automatically have <code>this</code> bound to the instance.'}
      ]
    },
    {
      tag:'question', title:'Why use a class instead of a plain function?',
      chat:[{who:'m',text:'If you needed to create 50 similar product objects, why might a class be cleaner than writing 50 separate object literals? 🎯'}],
      ph:'A class is better because...',
      words:['blueprint','reuse','consistent','same shape','template','repeat'],
      good:'Right — a class is a reusable blueprint, guaranteeing every instance has the same shape and behavior, instead of repeating object literal code 50 times. ✓',
      hint:'Think back to why we use functions instead of copy-pasting logic — classes solve the same kind of repetition problem, but for creating objects.'
    },
    {
      tag:'explain', title:'Inheritance with extends',
      chat:[
        {who:'m',code:`<span class="kw">class</span> DigitalProduct <span class="kw">extends</span> Product {\n  constructor(name, price, downloadLink) {\n    <span class="kw">super</span>(name, price); <span class="cm">// calls Product's constructor</span>\n    this.downloadLink = downloadLink;\n  }\n}\n\n<span class="kw">const</span> ebook = <span class="kw">new</span> DigitalProduct(<span class="str">"JS Guide"</span>, <span class="nm">299</span>, <span class="str">"link.com"</span>);\nconsole.<span class="fn">log</span>(ebook.<span class="fn">getLabel</span>()); <span class="cm">// inherited from Product — still works!</span>`},
        {who:'m',text:'<code>extends</code> lets one class build on another. <code>super(...)</code> calls the parent\'s constructor — required before you can use <code>this</code> in a child class.'}
      ]
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">class</span> Animal {\n  constructor(name) { this.name = name; }\n}\n<span class="kw">class</span> Dog ____ Animal {\n  constructor(name) {\n    ____(name);\n  }\n}`},
        {who:'m',text:'Fill both missing keywords: one to make Dog inherit from Animal, one to call Animal\'s constructor. 🎯'}
      ],
      ph:'class Dog extends Animal { constructor(name) { super(name); } }',
      words:['extends','super'],
      good:'Right — <code>class Dog extends Animal</code> and <code>super(name)</code> inside the constructor. ✓',
      hint:'extends connects the two classes. super(...) calls the parent constructor — you saw both in the DigitalProduct example.'
    }
  ],
  notes:[
    {icon:'📌',text:'class + constructor(){} = a blueprint for creating consistent objects. new ClassName(...) creates an instance.',copy:'Write: class = blueprint, new = create instance'},
    {icon:'📌',text:'extends + super(...) = inheritance. The child class gets everything the parent has, plus its own additions.',copy:'Write: extends + super() = inheritance'}
  ],
  tasks:[
    'Create lesson-classes.js',
    'Write a Product class with a constructor and one method',
    'Create 3 instances and call the method on each',
    'Write a second class that extends Product, adding one new property',
    'Push to GitHub: git commit -m "lesson: ES6 classes"'
  ],
  tip:'Interview Q: "What is the difference between a class and a regular object?" A class is a reusable template for creating many objects with the same shape; an object literal is just one single instance.',
  next:'Arrays & Objects'
},

// ───────────────────────── 3: ARRAYS ─────────────────────────
{
  track:'js', phase:'Phase 1 — JavaScript Foundations', title:'Arrays & Objects',
  desc:'Arrays store lists of things. In a real app your entire product catalog is one array of objects. map(), filter(), forEach() are tools you\'ll use every day in React.',
  badge:'b-amber', badgeText:'map() and filter() are used every day in React',
  react:'products.map(p => <ProductCard {...p} />) is literally how React renders any list. filter() is how search bars and category filters work.',
  steps:[
    {
      tag:'explain', title:'What is an array?',
      chat:[
        {who:'m',code:`<span class="kw">const</span> products = [\n  { name: <span class="str">"Earbuds"</span>, price: <span class="nm">1299</span>, inStock: <span class="kw">true</span> },\n  { name: <span class="str">"Charger"</span>,  price: <span class="nm">799</span>,  inStock: <span class="kw">true</span> }\n];\nproducts[<span class="nm">0</span>].name <span class="cm">// "Earbuds" — index starts at 0</span>`},
        {who:'m',text:'Arrays start at <strong>index 0</strong> — this trips up every beginner.'}
      ]
    },
    {
      tag:'question', title:'Indexing check',
      chat:[{who:'m',text:'Given the array above with a third item added, how do you get the name of the third product? 🎯'}],
      ph:'products[?].name',
      words:['products[2].name','[2].name','products[2]'],
      good:'Correct — <code>products[2].name</code>. Third item = index 2. ✓',
      hint:'Count from 0: first=[0], second=[1], third=[?].'
    },
    {
      tag:'explain', title:'map() — transform every item',
      chat:[
        {who:'m',code:`<span class="kw">const</span> names = products.<span class="fn">map</span>((p) => p.name);\n<span class="cm">// names = ["Earbuds", "Charger"] — new array, same length</span>`},
        {who:'m',text:'map() never changes the original array — it always returns a new one.'}
      ]
    },
    {
      tag:'question', title:'Use filter()',
      chat:[{who:'m',text:'Write the filter line to get only products with price greater than 1000. 🎯'}],
      ph:'const expensive = products.filter((p) => ...)',
      words:['> 1000','price > 1000','>1000','p.price > 1000'],
      good:'<code>products.filter((p) => p.price > 1000)</code> — correct! ✓',
      hint:'Pattern: <code>products.filter((p) => p.price OPERATOR VALUE)</code>'
    },
    {
      tag:'modify', title:'Modify the code',
      chat:[
        {who:'m',code:`<span class="kw">const</span> inStockNames = products.<span class="fn">map</span>((p) => p.name);`},
        {who:'m',text:'This gets the names of ALL products, including out-of-stock ones. Modify it to only get names of products where <code>inStock</code> is true — you\'ll need TWO array methods chained. Type the new line. 🎯'}
      ],
      ph:'products.filter(...).map(...)',
      words:['filter','.map'],
      good:'Right — <code>products.filter(p => p.inStock).map(p => p.name)</code>. Filter first, then map. ✓',
      hint:'Chain filter() before map(): first keep the in-stock ones, then transform to names.'
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">const</span> total = products.____((sum, p) => sum + p.price, <span class="nm">0</span>);\n<span class="cm">// adds up every product's price into one number</span>`},
        {who:'m',text:'Which array method adds everything into one final value? Fill the blank. 🎯'}
      ],
      ph:'____',
      words:['reduce'],
      good:'Yes — <code>reduce()</code> combines all items into a single value, like a running total. ✓',
      hint:'map keeps the same length, filter shrinks it. This one combines everything into ONE value — that\'s reduce().'
    }
  ],
  notes:[
    {icon:'📌',text:'Array index starts at 0. <code>arr[0]</code> = first item.',copy:'Write: array index starts at 0'},
    {icon:'📌',text:'<code>map()</code> = transform every item → new array of same length. Used to render lists in React.',copy:'Write: map = transform, returns new array'},
    {icon:'📌',text:'<code>filter()</code> = keep items where condition is true → smaller array.',copy:'Write: filter = keep matching items'},
    {icon:'📌',text:'Chain them: <code>products.filter(...).map(...)</code>',copy:'Write: filter then map = filter first, transform second'}
  ],
  tasks:[
    'Create lesson3-arrays.js',
    'Create an array of 4 product objects',
    'Use map() to print just the names',
    'Use filter() to get only inStock products',
    'Chain filter().map() to get names of in-stock products only',
    'Push to GitHub: git commit -m "lesson 3: arrays and map filter"'
  ],
  tip:'React interview: "How do you render a list?" Answer: <code>array.map((item) => &lt;Component key={item.id} /&gt;)</code>. The <code>key</code> prop is required and must be unique.',
  next:'Template Literals & Destructuring'
},
// ───────────────────────── NEW: TEMPLATE LITERALS & DESTRUCTURING ─────────────────────────
{
  track:'js', phase:'Phase 1 — JavaScript Foundations', title:'Template Literals & Destructuring',
  desc:'Two small syntax upgrades that you will see in almost every line of real JS and React code from here on. Worth learning properly now, before they show up unexplained later.',
  badge:'b-blue', badgeText:'Shows up constantly in real code',
  react:'JSX uses {expressions} constantly, and destructuring props — function ProductCard({ name, price }) — is the standard way React components receive data.',
  steps:[
    {
      tag:'explain', title:'Template literals',
      chat:[
        {who:'m',code:`<span class="kw">const</span> name = <span class="str">"Sandeep"</span>;\n<span class="kw">const</span> price = <span class="nm">1299</span>;\n\n<span class="cm">// Old way</span>\nconsole.<span class="fn">log</span>(<span class="str">"Hi "</span> + name + <span class="str">", price is ₹"</span> + price);\n\n<span class="cm">// Template literal — backticks, not quotes</span>\nconsole.<span class="fn">log</span>(<span class="str">\`Hi \${name}, price is ₹\${price}\`</span>);`},
        {who:'m',text:'Backticks (<code>\`</code>) let you drop variables directly inside <code>${...}</code> — no more <code>+</code> chains.'}
      ]
    },
    {
      tag:'question', title:'Rewrite with a template literal',
      chat:[{who:'m',text:'Rewrite this using a template literal: <code>"Cart total: ₹" + total</code>. Type the full line. 🎯'}],
      ph:'`Cart total: ₹${total}`',
      words:['${total}','`cart total'],
      good:'Right — <code>`Cart total: ₹${total}`</code> ✓',
      hint:'Use backticks, and wrap the variable in ${ }.'
    },
    {
      tag:'explain', title:'Destructuring',
      chat:[
        {who:'m',code:`<span class="kw">const</span> product = { name: <span class="str">"Earbuds"</span>, price: <span class="nm">1299</span>, inStock: <span class="kw">true</span> };\n\n<span class="cm">// Old way</span>\n<span class="kw">const</span> name = product.name;\n<span class="kw">const</span> price = product.price;\n\n<span class="cm">// Destructuring — pull values out in one line</span>\n<span class="kw">const</span> { name, price } = product;`},
        {who:'m',text:'Works on arrays too: <code>const [first, second] = ["a","b"]</code>.'}
      ]
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">ProductCard</span>(____) {\n  <span class="kw">return</span> &lt;div&gt;{name} — ₹{price}&lt;/div&gt;;\n}\n<span class="cm">// called as: ProductCard({ name: "Earbuds", price: 1299 })</span>`},
        {who:'m',text:'Fill in the parameter so name and price are available directly, without writing props.name. 🎯'}
      ],
      ph:'____',
      words:['{ name, price }','{name, price}','{name,price}'],
      good:'Right — destructuring the parameter: <code>function ProductCard({ name, price })</code>. ✓',
      hint:'Destructure right inside the function parameters: { name, price }.'
    }
  ],
  notes:[
    {icon:'📌',text:'Template literals: backticks + <code>${variable}</code> — no more string concatenation with +.',copy:'Write: backticks, ${} for variables'},
    {icon:'📌',text:'Destructuring: <code>const { key } = obj</code> pulls values out in one line. Works on arrays with [ ] too.',copy:'Write: destructure objects with {}, arrays with []'}
  ],
  tasks:[
    'Create lesson-templates.js',
    'Rewrite 3 string-concatenation lines using template literals',
    'Destructure name, price, inStock out of a product object in one line',
    'Destructure the first 2 items out of an array',
    'Push to GitHub: git commit -m "lesson: template literals and destructuring"'
  ],
  tip:'Interview Q: "What is destructuring used for?" Cleanly extracting values from objects/arrays without repetitive dot access — especially common for React props.',
  next:'Spread & Rest Operators'
},
// ───────────────────────── NEW: SPREAD & REST OPERATORS ─────────────────────────
{
  track:'js', phase:'Phase 1 — JavaScript Foundations', title:'Spread & Rest Operators',
  desc:'The three-dot syntax (...) that you will use constantly for copying arrays/objects without mutating them — directly tied back to the "never mutate" rule from earlier.',
  badge:'b-amber', badgeText:'Required for safe React state updates',
  react:'setItems([...items, newItem]) and setUser({ ...user, name: "New" }) are the standard React patterns for updating array/object state without mutating it.',
  steps:[
    {
      tag:'explain', title:'Spread — copy and expand',
      chat:[
        {who:'m',code:`<span class="kw">const</span> nums = [<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>];\n<span class="kw">const</span> moreNums = [...nums, <span class="nm">4</span>, <span class="nm">5</span>];\n<span class="cm">// moreNums = [1,2,3,4,5] — original nums untouched</span>\n\n<span class="kw">const</span> product = { name: <span class="str">"Earbuds"</span>, price: <span class="nm">1299</span> };\n<span class="kw">const</span> updated = { ...product, price: <span class="nm">999</span> };\n<span class="cm">// updated = { name: "Earbuds", price: 999 } — new object</span>`},
        {who:'m',text:'Spread copies everything out, then you can add or override fields after it.'}
      ]
    },
    {
      tag:'question', title:'Order matters',
      chat:[{who:'m',text:'In <code>{ ...product, price: 999 }</code>, why does price end up as 999 and not the original 1299? 🎯'}],
      ph:'Because...',
      words:['after','later','override','last','order'],
      good:'Right — properties listed after the spread override the spread ones. Order matters. ✓',
      hint:'JS reads object properties left to right — whichever value comes LAST for a key wins.'
    },
    {
      tag:'explain', title:'Rest — gather the remaining',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">total</span>(...prices) {\n  <span class="kw">return</span> prices.<span class="fn">reduce</span>((sum, p) => sum + p, <span class="nm">0</span>);\n}\n<span class="fn">total</span>(<span class="nm">100</span>, <span class="nm">200</span>, <span class="nm">300</span>); <span class="cm">// prices = [100, 200, 300]</span>`},
        {who:'m',text:'Same <code>...</code> symbol, opposite job: gathers any number of arguments into one array.'}
      ]
    },
    {
      tag:'modify', title:'Modify the code',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">addToCart</span>(cart, item) {\n  cart.<span class="fn">push</span>(item); <span class="cm">// 🐛 mutates the original array</span>\n  <span class="kw">return</span> cart;\n}`},
        {who:'m',text:'Fix this so it returns a NEW array using spread, instead of mutating with push. Type the new return line. 🎯'}
      ],
      ph:'return [...cart, item];',
      words:['...cart'],
      good:'Right — <code>return [...cart, item];</code> creates a new array instead of mutating. ✓',
      hint:'Spread the existing cart into a new array literal, then add item after it.'
    }
  ],
  notes:[
    {icon:'📌',text:'Spread (...) copies an array/object out — used to add/update without mutating.',copy:'Write: spread = copy out, safe updates'},
    {icon:'📌',text:'Rest (...) in function parameters gathers extra arguments into one array — opposite direction from spread.',copy:'Write: rest = gather into array'}
  ],
  tasks:[
    'Create lesson-spread-rest.js',
    'Use spread to add an item to an array without mutating it',
    'Use spread to update one field of an object without mutating it',
    'Write a sum(...nums) function using rest parameters',
    'Push to GitHub: git commit -m "lesson: spread and rest operators"'
  ],
  tip:'Interview Q: "How do you update one field of a state object in React without losing the rest?" setUser({ ...user, field: newValue }) — spread first, override second.',
  next:'Conditions & Loops'
},
// ───────────────────────── 5: CONDITIONS ─────────────────────────
{
  track:'js', phase:'Phase 1 — JavaScript Foundations', title:'Conditions & Loops',
  desc:'Conditions control what your code does based on what\'s true. Together with loops, they power almost every interactive feature.',
  badge:'b-blue', badgeText:'Used in every feature you\'ll ever build',
  react:'Ternaries are how React shows/hides UI: {inStock ? "Add to Cart" : "Out of Stock"}. map() replaces most manual loops when rendering lists.',
  steps:[
    {
      tag:'explain', title:'if/else',
      chat:[
        {who:'m',code:`<span class="kw">const</span> rating = <span class="nm">4.2</span>;\n<span class="kw">if</span> (rating >= <span class="nm">4.5</span>) {\n  console.<span class="fn">log</span>(<span class="str">"Excellent"</span>);\n} <span class="kw">else if</span> (rating >= <span class="nm">3</span>) {\n  console.<span class="fn">log</span>(<span class="str">"Good"</span>);\n} <span class="kw">else</span> {\n  console.<span class="fn">log</span>(<span class="str">"Poor"</span>);\n}`}
      ]
    },
    {
      tag:'question', title:'Trace it through',
      chat:[{who:'m',text:'What would the code above log for rating = 4.2? Walk through it step by step. 🎯'}],
      ph:'It would log: "___" because...',
      words:['good','good"'],
      good:'"Good" — 4.2 is not >= 4.5 but IS >= 3. ✓',
      hint:'Check condition 1: is 4.2 >= 4.5? No. Check condition 2: is 4.2 >= 3? Yes.'
    },
    {
      tag:'explain', title:'Ternary operator',
      chat:[
        {who:'m',code:`<span class="kw">const</span> label = inStock ? <span class="str">"Add to Cart"</span> : <span class="str">"Out of Stock"</span>;\n<span class="cm">// In React JSX this is everywhere:</span>\n<span class="cm">// &lt;button&gt;{inStock ? "Add to Cart" : "Out of Stock"}&lt;/button&gt;</span>`}
      ]
    },
    {
      tag:'modify', title:'Modify the code',
      chat:[
        {who:'m',code:`<span class="kw">let</span> label;\n<span class="kw">if</span> (price > <span class="nm">1000</span>) {\n  label = <span class="str">"Premium"</span>;\n} <span class="kw">else</span> {\n  label = <span class="str">"Budget"</span>;\n}`},
        {who:'m',text:'Rewrite this whole block as a single ternary line. 🎯'}
      ],
      ph:'const label = price > 1000 ? ... : ...',
      words:['? "premium"',"? 'premium'",'premium'],
      good:'<code>const label = price > 1000 ? "Premium" : "Budget"</code> ✓',
      hint:'Pattern: <code>condition ? valueIfTrue : valueIfFalse</code>'
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">for</span> (<span class="kw">const</span> product ____ products) {\n  console.<span class="fn">log</span>(product.name);\n}`},
        {who:'m',text:'Fill the missing keyword that loops through every item in the array. 🎯'}
      ],
      ph:'____',
      words:['of'],
      good:'Yes — <code>for (const product of products)</code>. ✓',
      hint:'The modern loop keyword that means "for each item in".'
    }
  ],
  notes:[
    {icon:'📌',text:'Ternary: <code>condition ? valueIfTrue : valueIfFalse</code> — used constantly in React JSX.',copy:'Write: condition ? trueVal : falseVal'},
    {icon:'📌',text:'Use <code>===</code> not <code>==</code> in JavaScript — avoids type coercion bugs.',copy:'Write: always === never =='}
  ],
  tasks:[
    'Create lesson4-conditions.js',
    'Write getProductLabel(inStock) using a ternary',
    'Write applyDiscount(price, isMember) — 15% off for members',
    'Loop through a products array with for...of, log name and price',
    'Write getRating(score) — "Excellent" / "Good" / "Poor"',
    'Push to GitHub: git commit -m "lesson 4: conditions and loops"'
  ],
  tip:'Interview Q: "Difference between == and ===?" == does type coercion, === checks value AND type. Always use ===.',
  next:'Switch Statements & Error Handling'
},
// ───────────────────────── NEW: SWITCH & ERROR HANDLING ─────────────────────────
{
  track:'js', phase:'Phase 1 — JavaScript Foundations', title:'Switch Statements & Error Handling',
  desc:'switch is a cleaner alternative to long if/else chains. try/catch is how you handle things that might fail — both come up constantly in real apps.',
  badge:'b-blue', badgeText:'Cleaner branching + safer code',
  react:'try/catch wraps every fetch call inside useEffect. switch is commonly used to render different UI based on a status like "loading" / "success" / "error".',
  steps:[
    {
      tag:'explain', title:'switch statement',
      chat:[
        {who:'m',code:`<span class="kw">switch</span> (status) {\n  <span class="kw">case</span> <span class="str">"loading"</span>:\n    console.<span class="fn">log</span>(<span class="str">"Please wait..."</span>);\n    <span class="kw">break</span>;\n  <span class="kw">case</span> <span class="str">"success"</span>:\n    console.<span class="fn">log</span>(<span class="str">"Loaded!"</span>);\n    <span class="kw">break</span>;\n  <span class="kw">default</span>:\n    console.<span class="fn">log</span>(<span class="str">"Unknown status"</span>);\n}`},
        {who:'m',text:'Without <code>break</code>, execution "falls through" into the next case — a common bug. <code>default</code> catches anything unmatched.'}
      ]
    },
    {
      tag:'question', title:'Why break matters',
      chat:[{who:'m',text:'What would happen if you removed the <code>break;</code> after the "loading" case? 🎯'}],
      ph:'Without break...',
      words:['fall','continue','run','next','through','both'],
      good:'Right — it would "fall through" and also run the success case\'s code. break stops that. ✓',
      hint:'Without break, JS keeps running the cases below it too, instead of stopping.'
    },
    {
      tag:'explain', title:'try/catch revisited',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">divide</span>(a, b) {\n  <span class="kw">try</span> {\n    <span class="kw">if</span> (b === <span class="nm">0</span>) <span class="kw">throw new</span> <span class="fn">Error</span>(<span class="str">"Cannot divide by zero"</span>);\n    <span class="kw">return</span> a / b;\n  } <span class="kw">catch</span> (err) {\n    console.<span class="fn">log</span>(<span class="str">"Error:"</span>, err.message);\n    <span class="kw">return null</span>;\n  }\n}`},
        {who:'m',text:'<code>throw new Error(...)</code> creates a custom error you control — not just ones JS throws automatically.'}
      ]
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">getDiscount</span>(percent) {\n  <span class="kw">if</span> (percent < <span class="nm">0</span> || percent > <span class="nm">100</span>) {\n    ____ <span class="kw">new</span> <span class="fn">Error</span>(<span class="str">"Invalid percent"</span>);\n  }\n  <span class="kw">return</span> percent;\n}`},
        {who:'m',text:'Fill the missing keyword that creates and raises this error. 🎯'}
      ],
      ph:'____',
      words:['throw'],
      good:'Yes — <code>throw new Error("Invalid percent")</code>. ✓',
      hint:'It\'s the keyword used right before "new Error" in the previous example.'
    }
  ],
  notes:[
    {icon:'📌',text:'switch needs break after each case, or execution falls through into the next one.',copy:'Write: switch + break per case + default fallback'},
    {icon:'📌',text:'throw new Error("message") creates a custom error; try/catch catches it with err.message.',copy:'Write: throw new Error(), catch with err.message'}
  ],
  tasks:[
    'Create lesson-switch-errors.js',
    'Write getStatusMessage(status) using switch with at least 3 cases + default',
    'Write a function that throws a custom error for invalid input',
    'Wrap a call to that function in try/catch and log the error message',
    'Push to GitHub: git commit -m "lesson: switch and error handling"'
  ],
  tip:'Interview Q: "How do you handle errors in async code?" try/catch around await calls, plus checking response.ok before trusting the data.',
  next:'Closures & Scope'
},
// ───────────────────────── 9: CLOSURES ─────────────────────────
{
  track:'js', phase:'Phase 1 — JavaScript Foundations', title:'Closures & Scope',
  desc:'Closures are one of the most asked interview topics for JS/React roles. The concept is simple once you see it: how JS "remembers" variables.',
  badge:'b-red', badgeText:'Asked in almost every frontend interview',
  react:'React\'s useState is built on closures — the setter function "remembers" which state variable it belongs to, even across re-renders.',
  steps:[
    {
      tag:'explain', title:'Scope',
      chat:[
        {who:'m',code:`<span class="kw">const</span> appName = <span class="str">"BuyFlux"</span>;  <span class="cm">// Global</span>\n\n<span class="kw">function</span> <span class="fn">showCart</span>() {\n  <span class="kw">const</span> cartCount = <span class="nm">3</span>;   <span class="cm">// Local — only inside showCart</span>\n}\nconsole.<span class="fn">log</span>(cartCount); <span class="cm">// ✗ ERROR</span>`}
      ]
    },
    {
      tag:'question', title:'Why does it error?',
      chat:[{who:'m',text:'Why does the last line throw an error? 🎯'}],
      ph:'The last line fails because...',
      words:['inside','function','local','scope','only','defined','access','outside'],
      good:'Exactly — cartCount only exists inside showCart. Outside the function, it\'s gone. That\'s scope. ✓',
      hint:'cartCount is created inside showCart(). Can code outside the function see what\'s inside?'
    },
    {
      tag:'explain', title:'Closures',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">makeCounter</span>() {\n  <span class="kw">let</span> count = <span class="nm">0</span>;\n  <span class="kw">return function</span>() {\n    count = count + <span class="nm">1</span>;\n    <span class="kw">return</span> count;\n  };\n}\n<span class="kw">const</span> counter1 = <span class="fn">makeCounter</span>();\nconsole.<span class="fn">log</span>(<span class="fn">counter1</span>()); <span class="cm">// 1</span>\nconsole.<span class="fn">log</span>(<span class="fn">counter1</span>()); <span class="cm">// 2</span>`},
        {who:'m',text:'The inner function "remembers" <code>count</code> even after makeCounter has finished running.'}
      ]
    },
    {
      tag:'question', title:'Explain the magic',
      chat:[{who:'m',text:'Why does counter1 still have access to count after makeCounter() finishes running? 🎯'}],
      ph:'counter1 still has access to count because...',
      words:['remember','closure','inner','reference','scope','keeps','holds','access'],
      good:'The inner function "closes over" count — it keeps a reference to it even after makeCounter finishes. That\'s a closure. ✓',
      hint:'The inner function was created inside makeCounter, so it has a permanent link to its variables.'
    }
  ],
  notes:[
    {icon:'📌',text:'<strong>Closure</strong> = inner function that remembers variables from its outer function, even after the outer function finishes.',copy:'Write: closure = inner function remembers outer variables'},
    {icon:'📌',text:'Interview answer: "A closure is a function that has access to its outer scope even after the outer function returns."',copy:'Write this definition word for word'}
  ],
  tasks:[
    'Create lesson6-closures.js',
    'Write makeCounter() that returns an increment function — test it logs 1,2,3',
    'Create counter1 and counter2 — prove they have separate counts',
    'Push to GitHub: git commit -m "lesson 6: closures and scope"'
  ],
  tip:'Interview Q: "What is a closure?" Give the definition, then the counter example — this answer reliably impresses interviewers.',
  next:'ES6 Modules (import/export)'
},
// ───────────────────────── NEW: ES6 MODULES ─────────────────────────
{
  track:'js', phase:'Phase 1 — JavaScript Foundations', title:'ES6 Modules (import/export)',
  desc:'Real projects split code across many files. Modules are how one file shares code with another — this is exactly what every React project structure relies on.',
  badge:'b-blue', badgeText:'Every React project is built from modules',
  react:'Every single React component file uses export default and import — this lesson is literally how all your future App.jsx, ProductCard.jsx etc. files talk to each other.',
  steps:[
    {
      tag:'explain', title:'Named exports',
      chat:[
        {who:'m',code:`<span class="cm">// mathUtils.js</span>\n<span class="kw">export function</span> <span class="fn">add</span>(a, b) { <span class="kw">return</span> a + b; }\n<span class="kw">export function</span> <span class="fn">subtract</span>(a, b) { <span class="kw">return</span> a - b; }\n\n<span class="cm">// app.js</span>\n<span class="kw">import</span> { add, subtract } <span class="kw">from</span> <span class="str">"./mathUtils.js"</span>;\nconsole.<span class="fn">log</span>(<span class="fn">add</span>(<span class="nm">2</span>, <span class="nm">3</span>)); <span class="cm">// 5</span>`},
        {who:'m',text:'Named exports use <code>{ }</code> on import and must match the exported name exactly.'}
      ]
    },
    {
      tag:'explain', title:'Default exports',
      chat:[
        {who:'m',code:`<span class="cm">// ProductCard.js</span>\n<span class="kw">export default function</span> <span class="fn">ProductCard</span>(props) { <span class="cm">/* ... */</span> }\n\n<span class="cm">// App.js — no curly braces, can rename freely</span>\n<span class="kw">import</span> ProductCard <span class="kw">from</span> <span class="str">"./ProductCard.js"</span>;`},
        {who:'m',text:'A file can have only ONE default export, but many named exports.'}
      ]
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="cm">// cartUtils.js</span>\n____ <span class="kw">function</span> <span class="fn">getCartTotal</span>(cart) { <span class="kw">return</span> cart.<span class="fn">reduce</span>((s,i)=>s+i.price,<span class="nm">0</span>); }\n\n<span class="cm">// app.js</span>\n<span class="kw">import</span> { getCartTotal } <span class="kw">from</span> <span class="str">"./cartUtils.js"</span>;`},
        {who:'m',text:'Fill in the missing keyword needed before "function" so this can be imported with curly braces. 🎯'}
      ],
      ph:'____',
      words:['export'],
      good:'Yes — <code>export function getCartTotal(...)</code>. ✓',
      hint:'Whatever you want another file to import must be marked with this keyword first.'
    },
    {
      tag:'challenge', title:'Mixing both export styles',
      chat:[
        {who:'m',text:'A real file often has ONE default export plus several named ones — e.g. a component file that default-exports the component, but also named-exports a helper function it uses.'},
        {who:'m',text:'Write the import line for a file that default-exports ProductCard AND named-exports formatPrice, in a single import statement. 🎯'}
      ],
      ph:'import ProductCard, { formatPrice } from "./ProductCard.js";',
      words:['{ formatprice }','{formatprice}'],
      good:'Right — <code>import ProductCard, { formatPrice } from "./ProductCard.js";</code> Default export has no braces, named exports do, both in one line. ✓',
      hint:'Default import comes first with no braces, then a comma, then the named import inside { }.'
    }
  ],
  notes:[
    {icon:'📌',text:'Named export: <code>export function x(){}</code> → import with <code>{ x }</code>. Many per file.',copy:'Write: named export = { } on import, many allowed'},
    {icon:'📌',text:'Default export: <code>export default function x(){}</code> → import without { }. Only one per file.',copy:'Write: default export = no { } on import, only one'}
  ],
  tasks:[
    'Create mathUtils.js with 2 named exported functions',
    'Import and use both functions in a separate app.js file',
    'Create one file with a default export and import it without curly braces',
    'Push to GitHub: git commit -m "lesson: ES6 modules"'
  ],
  tip:'Interview Q: "Named vs default export — when do you use which?" Default for a file\'s main thing (like a component), named for utility functions you might export several of from one file.',
  next:'DOM Manipulation'
},
// ───────────────────────── 10: DOM ─────────────────────────
{
  track:'dom', phase:'Phase 1 — JavaScript Foundations', title:'DOM Manipulation',
  desc:'The DOM is how JavaScript "sees" and changes a web page. Before React abstracts this away, you need to understand what it\'s doing underneath.',
  badge:'b-blue', badgeText:'React does this for you — but you must know how it works',
  react:'React builds a virtual DOM and updates the real DOM for you. Knowing manual DOM methods (querySelector, textContent) helps you understand exactly what React is automating.',
  steps:[
    {
      tag:'explain', title:'Selecting and changing elements',
      chat:[
        {who:'m',code:`<span class="kw">const</span> title = document.<span class="fn">querySelector</span>(<span class="str">"#title"</span>);\ntitle.textContent = <span class="str">"New heading"</span>;\ntitle.style.color = <span class="str">"red"</span>;\n\n<span class="kw">const</span> btn = document.<span class="fn">querySelector</span>(<span class="str">".buy-btn"</span>);\nbtn.classList.<span class="fn">add</span>(<span class="str">"active"</span>);`},
        {who:'m',text:'<code>querySelector</code> finds one element using a CSS-style selector. Then you change its text, style, or classes directly.'}
      ]
    },
    {
      tag:'question', title:'Selector syntax',
      chat:[{who:'m',text:'To select an element with class "card", what string would you pass to querySelector? 🎯'}],
      ph:'document.querySelector("___")',
      words:['.card'],
      good:'Right — <code>.card</code>. Dot prefix for class, # prefix for id, same as CSS. ✓',
      hint:'Same rules as CSS selectors: class selectors start with a dot.'
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">const</span> card = document.<span class="fn">createElement</span>(<span class="str">"div"</span>);\ncard.____ = <span class="str">"Earbuds — ₹1299"</span>;\ndocument.body.<span class="fn">appendChild</span>(card);`},
        {who:'m',text:'Fill in the missing property name that sets text inside the new element. 🎯'}
      ],
      ph:'____',
      words:['textcontent','innerhtml'],
      good:'Yes — <code>textContent</code> (or innerHTML). ✓',
      hint:'It\'s the same property used in the first example to change the title text.'
    }
  ],
  notes:[
    {icon:'📌',text:'<code>querySelector</code> finds one element by CSS-style selector. <code>querySelectorAll</code> finds all matches.',copy:'Write: querySelector = find one, querySelectorAll = find many'},
    {icon:'📌',text:'<code>createElement</code> + <code>appendChild</code> = build and insert new elements with JS.',copy:'Write: createElement then appendChild'}
  ],
  tasks:[
    'Create a basic dom.html + dom.js',
    'Select an element by id and change its text',
    'Select all elements with a class and loop through them changing their style',
    'Use createElement + appendChild to add a new card to the page',
    'Push to GitHub: git commit -m "lesson 7: DOM manipulation"'
  ],
  tip:'Interview Q: "What is the DOM?" Answer: a tree-like JS representation of the HTML page that lets code read and change the page after load.',
  next:'Events'
},
// ───────────────────────── 11: EVENTS ─────────────────────────
{
  track:'dom', phase:'Phase 1 — JavaScript Foundations', title:'Events',
  desc:'Events are how your code reacts to user actions — clicks, typing, form submissions. Every interactive feature starts with an event listener.',
  badge:'b-blue', badgeText:'Foundation for React event handlers',
  react:'addEventListener becomes onClick={...} in JSX — same idea, React just wires it up for you with cleaner syntax.',
  steps:[
    {
      tag:'explain', title:'addEventListener',
      chat:[
        {who:'m',code:`<span class="kw">const</span> btn = document.<span class="fn">querySelector</span>(<span class="str">"#buy-btn"</span>);\nbtn.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, () => {\n  console.<span class="fn">log</span>(<span class="str">"Added to cart!"</span>);\n});`},
        {who:'m',text:'The second argument is a function that runs every time the event fires.'}
      ]
    },
    {
      tag:'question', title:'Reading input values',
      chat:[{who:'m',text:'If you have an <code>&lt;input id="search"&gt;</code>, what property gives you what the user typed? 🎯'}],
      ph:'document.querySelector("#search").___',
      words:['value'],
      good:'Right — <code>.value</code> holds the current text in an input. ✓',
      hint:'Inputs store their text in a specific property used everywhere — it\'s called .value.'
    },
    {
      tag:'modify', title:'Modify the code',
      chat:[
        {who:'m',code:`btn.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, () => {\n  console.<span class="fn">log</span>(<span class="str">"clicked"</span>);\n});`},
        {who:'m',text:'Modify this so it logs the search input\'s current value instead of "clicked". Assume the input has id="search". 🎯'}
      ],
      ph:'console.log(document.querySelector("#search").value)',
      words:['queryselector','.value'],
      good:'Correct — <code>console.log(document.querySelector("#search").value)</code> ✓',
      hint:'Select the input first, then read its .value property inside console.log.'
    }
  ],
  notes:[{icon:'📌',text:'<code>addEventListener("click", fn)</code> runs fn every time the element is clicked.',copy:'Write: addEventListener(event, function)'}],
  tasks:[
    'Add a button and input to an HTML page',
    'Log "clicked" when the button is clicked',
    'Log the input\'s value every time the user types (use the "input" event)',
    'Prevent a form from refreshing the page on submit using event.preventDefault()',
    'Push to GitHub: git commit -m "lesson 8: events"'
  ],
  tip:'Interview Q: "How does React handle events differently from vanilla JS?" React uses synthetic events with camelCase handlers (onClick) attached directly in JSX, but the underlying concept is the same.',
  next:'Async JS & Fetch'
},
// ───────────────────────── 7: ASYNC ─────────────────────────
{
  track:'js', phase:'Phase 1 — JavaScript Foundations', title:'Async JS & Fetch',
  desc:'Every real app talks to a server. Async JavaScript is how you do that without freezing the browser. Hard for beginners, but essential for React.',
  badge:'b-red', badgeText:'Essential — all real apps fetch data from servers',
  react:'useEffect + fetch is how React components load data from a server. async/await inside useEffect is one of the most common patterns you\'ll write.',
  steps:[
    {
      tag:'explain', title:'Why async is needed',
      chat:[{who:'m',text:'JavaScript runs one line at a time. If fetching data takes 2 seconds and JS "waits" for it, the entire page freezes — no clicks, no scrolling. Async lets JS start a task, keep running other code, and come back when it\'s ready.'}]
    },
    {
      tag:'explain', title:'async/await + fetch',
      chat:[
        {who:'m',code:`<span class="kw">async function</span> <span class="fn">getProducts</span>() {\n  <span class="kw">try</span> {\n    <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://fakestoreapi.com/products"</span>);\n    <span class="kw">const</span> data = <span class="kw">await</span> res.<span class="fn">json</span>();\n    console.<span class="fn">log</span>(data);\n  } <span class="kw">catch</span> (err) {\n    console.<span class="fn">log</span>(<span class="str">"Fetch failed:"</span>, err.message);\n  }\n}`},
        {who:'m',text:'<code>await</code> pauses just that function until the Promise resolves — the rest of the page keeps running.'}
      ]
    },
    {
      tag:'question', title:'Why try/catch?',
      chat:[{who:'m',text:'Why do we wrap fetch in try/catch instead of letting errors crash the app? 🎯'}],
      ph:'try/catch matters because...',
      words:['error','crash','handle','fail','network','catch','gracefully'],
      good:'Exactly — networks fail. try/catch lets you handle it gracefully instead of crashing the whole app. ✓',
      hint:'What happens to the user\'s experience if fetch fails and nothing catches the error?'
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">async function</span> <span class="fn">getOne</span>(id) {\n  <span class="kw">const</span> res = ____ <span class="fn">fetch</span>(<span class="str">\`https://fakestoreapi.com/products/\${id}\`</span>);\n  <span class="kw">return</span> res.<span class="fn">json</span>();\n}`},
        {who:'m',text:'Fill the missing keyword needed before fetch() inside an async function. 🎯'}
      ],
      ph:'____',
      words:['await'],
      good:'Yes — <code>await</code>. ✓',
      hint:'It\'s the keyword that pairs with async and pauses until the Promise resolves.'
    },
    {
      tag:'explain', title:'What async/await is actually built on: Promises',
      chat:[
        {who:'m',code:`<span class="cm">// async/await is syntactic sugar over this exact thing — a Promise:</span>\n<span class="fn">fetch</span>(<span class="str">"https://fakestoreapi.com/products"</span>)\n  .<span class="fn">then</span>(res => res.<span class="fn">json</span>())\n  .<span class="fn">then</span>(data => console.<span class="fn">log</span>(data))\n  .<span class="fn">catch</span>(err => console.<span class="fn">log</span>(<span class="str">"Failed:"</span>, err.message));`},
        {who:'m',text:'A Promise represents a value that will exist LATER. <code>.then()</code> runs once it succeeds, <code>.catch()</code> runs if it fails. await is just a cleaner way to write the exact same .then() chain — interviewers often ask about both forms.'}
      ]
    },
    {
      tag:'explain', title:'The event loop, briefly',
      chat:[
        {who:'m',text:'JavaScript runs on a single thread — it can only do ONE thing at a time. So how does fetch() not freeze the page for 2 seconds? The browser hands the slow network request off to itself, and JS keeps running other code. When the response is ready, it gets placed in a queue, and the "event loop" checks that queue between tasks and runs your .then()/await code when it\'s JS\'s turn again.'},
        {who:'m',text:'This is why a console.log AFTER a fetch call can actually run BEFORE the fetched data logs — the fetch hasn\'t finished yet, so JS moved on and came back to it later.'}
      ]
    },
    {
      tag:'question', title:'Why nothing freezes',
      chat:[{who:'m',text:'In one sentence: why doesn\'t a slow fetch() call freeze the rest of your JavaScript? 🎯'}],
      ph:'Because...',
      words:['hands off','queue','later','keep running','event loop','meanwhile'],
      good:'Right — the browser handles the slow request separately, JS keeps running other code in the meantime, and the event loop runs your callback once the response is ready. ✓',
      hint:'JS doesn\'t literally wait and do nothing — what keeps happening to the rest of your code while the network request is in progress?'
    }
  ],
  notes:[
    {icon:'📌',text:'async/await is cleaner syntax over Promises — an async function always returns a Promise.',copy:'Write: async/await = cleaner Promises'},
    {icon:'📌',text:'Always wrap fetch in try/catch — networks fail.',copy:'Write: always try/catch around fetch'},
    {icon:'📌',text:'The event loop lets JS hand off slow tasks (like network requests) and keep running, coming back to them when ready — this is why async code doesn\'t freeze the page.',copy:'Write: event loop = hand off slow tasks, come back later'}
  ],
  tasks:[
    'Create lesson5-async.js',
    'Write getProducts() that fetches https://fakestoreapi.com/products',
    'Log just the title and price of each product using map()',
    'Add try/catch — log "Fetch failed" if it fails',
    'Push to GitHub: git commit -m "lesson 5: async fetch"'
  ],
  tip:'Interview Q: "Promise vs async/await?" They\'re the same thing — async/await is cleaner syntax built on Promises.',
  next:'Revision: JavaScript Core'
},
// ───────────────────────── NEW: REVISION — JAVASCRIPT CORE ─────────────────────────
{
  track:'js', phase:'Phase 1 — JavaScript Foundations', title:'Revision: JavaScript Core',
  desc:'No new concepts here — pure recall practice. You\'ve covered 12 JS lessons. Before building the phase project, prove to yourself you actually remember the early ones, not just the most recent.',
  badge:'b-amber', badgeText:'Retrieval practice — nothing new, just recall',
  react:'Struggling to recall something here means it would also be shaky inside a React component using it — better to find that out now than mid-project.',
  steps:[
    {
      tag:'question', title:'Recall: Variables (lesson 1)',
      chat:[{who:'m',text:'Without looking back: what is the difference between let and const? 🎯'}],
      ph:'let is for... const is for...',
      words:['change','constant','cant','cannot','fixed','reassign'],
      good:'Correct — still solid. ✓',
      hint:'If you\'re unsure, that\'s useful information. Go re-skim Lesson 1\'s notes, then come back and answer from memory.'
    },
    {
      tag:'question', title:'Recall: Arrays (lesson 3)',
      chat:[{who:'m',text:'Without looking back: what\'s the difference between map() and filter()? 🎯'}],
      ph:'map ... filter ...',
      words:['transform','keep','same length','smaller','condition'],
      good:'Correct — still solid. ✓',
      hint:'One transforms every item (same length out). One removes items that don\'t match a condition (shorter result).'
    },
    {
      tag:'question', title:'Recall: Closures (lesson 8)',
      chat:[{who:'m',text:'Without looking back: in one sentence, what is a closure? 🎯'}],
      ph:'A closure is...',
      words:['remember','inner','outer','function','access','scope'],
      good:'Correct — still solid. ✓',
      hint:'It\'s an inner function that keeps access to variables from its outer function, even after that outer function has finished running.'
    },
    {
      tag:'question', title:'Recall: Async (lesson 12)',
      chat:[{who:'m',text:'Without looking back: why do we wrap fetch() in try/catch? 🎯'}],
      ph:'Because...',
      words:['fail','error','network','crash','handle'],
      good:'Correct — still solid. ✓',
      hint:'Networks are unreliable — what happens to your app if a fetch fails and nothing catches it?'
    }
  ],
  notes:[{icon:'📌',text:'If any of these felt shaky, that topic needs a 10-minute re-read before you start the Quiz App — weak fundamentals will surface as confusing bugs mid-project instead of a clean lesson.',copy:'Write down which topic felt weakest just now'}],
  tasks:[
    'For any question above you hesitated on, re-open that lesson and re-read its notes',
    'Re-do one self-check question from your weakest lesson, from memory, without looking',
    'Update today\'s journal entry with which topic needs more practice'
  ],
  tip:'This is exactly how spaced repetition works: forcing recall before you\'ve fully forgotten something is what actually builds long-term memory — re-reading alone doesn\'t.',
  next:'JS Mini-Project: Quiz App'
},
// ───────────────────────── NEW: JS MINI-PROJECT — QUIZ APP ─────────────────────────
{
  track:'project', phase:'Phase 1 — JavaScript Foundations', title:'JS Mini-Project: Quiz App',
  desc:'Your JavaScript phase checkpoint. Build a complete multiple-choice quiz app using ONLY plain JS — variables, functions, arrays/objects, conditions, DOM, events, and async (optionally fetching questions from an API). No framework yet — this proves the fundamentals are solid before React.',
  badge:'b-pink', badgeText:'Checkpoint — combines everything from Phase 1',
  react:'Notice how much manual DOM work this takes — re-rendering the question, tracking score, updating the UI by hand. React exists specifically to automate everything you\'re about to do manually here.',
  steps:[
    {
      tag:'explain', title:'The brief',
      chat:[
        {who:'m',text:'Build quiz.html + quiz.js. Store questions as an array of objects: { question, options: [...], correctAnswer }. Show one question at a time, track the score, and show a final result screen.'},
        {who:'m',text:'This is intentionally a "put it all together" project — nothing here is a brand-new concept, it\'s every Phase 1 lesson working together.'}
      ]
    },
    {
      tag:'question', title:'Plan your state',
      chat:[{who:'m',text:'Before coding: what variables do you need to track across the whole quiz (not just one question)? Name at least 3. 🎯'}],
      ph:'currentQuestionIndex, score, ...',
      words:['score','current','index','question','answer'],
      good:'Good — something like currentQuestionIndex, score, and the questions array itself are the core pieces of state you\'ll track. ✓',
      hint:'Think about what changes as the user progresses: which question they\'re on, how many they got right...'
    }
  ],
  notes:[{icon:'📌',text:'A project like this always starts with deciding what data needs to be tracked over time, before writing any DOM code.',copy:'Write: plan your tracked variables before coding'}],
  tasks:[
    'Create quiz.html + quiz.js',
    'Create an array of 5+ question objects: { question, options, correctAnswer }',
    'Render the current question and its options to the page',
    'On answer click, check correctness and update the score using a function',
    'Move to the next question, or show a final score screen using conditions',
    'Add a "Restart Quiz" button that resets all tracked state',
    '(Stretch) Fetch questions from a free trivia API instead of a hardcoded array',
    'Push to GitHub: git commit -m "JS mini-project: quiz app"'
  ],
  tip:'In an interview, be ready to explain HOW you tracked state manually here — it sets up the perfect comparison when you\'re later asked "what does useState do that a plain variable can\'t?"',
  next:'Components & JSX',
  rubric:[
    'I built this without copy-pasting from an old lesson — I typed every line myself',
    'My quiz correctly tracks score across multiple questions',
    'Clicking an answer gives correct feedback (right/wrong) without page errors',
    'A final results screen appears showing the score out of total questions',
    'I can explain, out loud, how my score variable updates without looking at my code'
  ]
},
// ───────────────────────── 13: REACT COMPONENTS ─────────────────────────
{
  track:'react', phase:'Phase 2 — React', title:'Components & JSX',
  desc:'A React component is a function that returns JSX (HTML-like syntax inside JS). Everything you\'ve learned about functions applies directly here.',
  badge:'b-green', badgeText:'Your JS foundation pays off starting now',
  react:'This lesson IS the React connection — components are just the functions you already know, returning markup instead of values.',
  steps:[
    {
      tag:'explain', title:'Your first component',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">ProductCard</span>(props) {\n  <span class="kw">return</span> (\n    &lt;div className=<span class="str">"card"</span>&gt;\n      &lt;h3&gt;{props.name}&lt;/h3&gt;\n      &lt;p&gt;₹{props.price}&lt;/p&gt;\n    &lt;/div&gt;\n  );\n}\n\n<span class="cm">// Used like: &lt;ProductCard name="Earbuds" price={1299} /&gt;</span>`},
        {who:'m',text:'<code>props</code> is just the function\'s parameter — the same concept you already know, with a new name.'}
      ]
    },
    {
      tag:'question', title:'Props as parameters',
      chat:[{who:'m',text:'If props are just parameters, what JS concept does <code>&lt;ProductCard name="Earbuds" /&gt;</code> correspond to — calling a function with arguments, or defining one? 🎯'}],
      ph:'It corresponds to...',
      words:['call','calling','arguments','invoke'],
      good:'Right — using a component in JSX is just calling that function with arguments (props). ✓',
      hint:'You\'re not writing the function here, you\'re USING it — which JS action is that?'
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">PriceTag</span>(props) {\n  <span class="kw">return</span> &lt;span&gt;₹{props.____}&lt;/span&gt;;\n}\n<span class="cm">// Used as: &lt;PriceTag amount={799} /&gt;</span>`},
        {who:'m',text:'Fill the missing prop name so it displays the amount passed in. 🎯'}
      ],
      ph:'____',
      words:['amount'],
      good:'Yes — <code>props.amount</code> matches the <code>amount={799}</code> passed in. ✓',
      hint:'Match the name exactly as used where the component is called: amount={799}.'
    },
    {
      tag:'challenge', title:'Nesting components',
      chat:[
        {who:'m',text:'Real UIs are built from small components placed inside bigger ones — e.g. a ProductCard rendered inside a ProductList. This is composition, the core idea behind every React app\'s structure.'},
        {who:'m',text:'If ProductList receives a products array as a prop, what JS method from your Arrays lesson would you use inside it to render one ProductCard per item? 🎯'}
      ],
      ph:'products.???((p) => <ProductCard ... />)',
      words:['map'],
      good:'Right — <code>products.map((p) => &lt;ProductCard key={p.id} {...p} /&gt;)</code>. Same map() from JS, now producing JSX instead of plain values. ✓',
      hint:'You already learned this exact method for transforming every item in an array — same method, just now it returns JSX per item.'
    }
  ],
  notes:[
    {icon:'📌',text:'A component = a function that returns JSX.',copy:'Write: component = function returning JSX'},
    {icon:'📌',text:'<code>props</code> = the function\'s parameters, passed as attributes in JSX.',copy:'Write: props = parameters passed as attributes'}
  ],
  tasks:[
    'Set up a React app (Vite recommended): npm create vite@latest',
    'Create ProductCard.jsx that takes name and price as props',
    'Render 3 ProductCards with different props in App.jsx',
    'Push to GitHub: git commit -m "lesson 9: components and JSX"'
  ],
  tip:'Interview Q: "What is JSX?" A syntax extension that lets you write HTML-like code inside JavaScript, compiled into React.createElement() calls under the hood.',
  next:'Props Deep Dive'
},
// ───────────────────────── NEW: PROPS DEEP DIVE ─────────────────────────
{
  track:'react', phase:'Phase 2 — React', title:'Props Deep Dive',
  desc:'You\'ve seen props briefly already — now go deeper: default values, passing functions as props, and the rule that props are always read-only.',
  badge:'b-green', badgeText:'Builds directly on Components & JSX',
  react:'This lesson is pure React — props are how parent and child components communicate, in both directions (data down, callbacks back up).',
  steps:[
    {
      tag:'explain', title:'Default props + passing functions',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">Button</span>({ label = <span class="str">"Click me"</span>, onClick }) {\n  <span class="kw">return</span> &lt;button onClick={onClick}&gt;{label}&lt;/button&gt;;\n}\n\n<span class="cm">// Parent passes a function DOWN as a prop</span>\n&lt;Button label=<span class="str">"Add to Cart"</span> onClick={() => console.log(<span class="str">"clicked!"</span>)} /&gt;`},
        {who:'m',text:'<code>= "Click me"</code> is a default value, used only if no label prop is passed. Functions can be props too — this is how a child tells its parent "something happened."'}
      ]
    },
    {
      tag:'question', title:'Props are read-only',
      chat:[{who:'m',text:'Why can\'t a component do <code>props.price = 999</code> inside itself to change a prop? 🎯'}],
      ph:'Because...',
      words:['read','only','immutable','parent','owns','change','mutate'],
      good:'Right — props are owned by the parent. A child should never mutate them directly; that\'s what state and callback props are for. ✓',
      hint:'Who created and passed down this value — the parent or the child? Should the child be allowed to silently change something it doesn\'t own?'
    },
    {
      tag:'modify', title:'Modify the code',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">AddToCartButton</span>() {\n  <span class="kw">return</span> &lt;button onClick={() => console.log(<span class="str">"add"</span>)}&gt;Add&lt;/button&gt;;\n}`},
        {who:'m',text:'Modify this so the click handler is passed IN as a prop called onAdd, instead of being hardcoded inside. Type the new function signature + button line. 🎯'}
      ],
      ph:'function AddToCartButton({ onAdd }) { return <button onClick={onAdd}>Add</button>; }',
      words:['{ onadd }','onclick={onadd}'],
      good:'Right — <code>function AddToCartButton({ onAdd }) { return &lt;button onClick={onAdd}&gt;Add&lt;/button&gt;; }</code> ✓',
      hint:'Destructure onAdd from props, then use it directly as the onClick value.'
    }
  ],
  notes:[
    {icon:'📌',text:'Props can be values OR functions. Functions-as-props let a child notify its parent of events.',copy:'Write: props can be values or functions (callbacks)'},
    {icon:'📌',text:'Never mutate props inside a component — they belong to the parent.',copy:'Write: props are read-only, never mutate'}
  ],
  tasks:[
    'Build a Button component that accepts label and onClick as props',
    'Give label a default value and test it by omitting the prop',
    'Build a ProductCard that accepts an onAddToCart function prop and calls it on click',
    'Push to GitHub: git commit -m "lesson: props deep dive"'
  ],
  tip:'Interview Q: "How does a child component communicate back to its parent?" By calling a function that was passed down as a prop — data flows down, events flow back up via callbacks.',
  next:'useState'
},
// ───────────────────────── 14: useSTATE ─────────────────────────
{
  track:'react', phase:'Phase 2 — React', title:'useState',
  desc:'useState gives a component memory that persists between renders. This is how React turns your DOM/events knowledge into reactive, automatic UI updates.',
  badge:'b-red', badgeText:'The most-used React hook — must be solid',
  react:'Remember closures from JS? useState\'s setter function "remembers" which variable to update across renders — that\'s a closure at work, just like makeCounter().',
  steps:[
    {
      tag:'explain', title:'useState basics',
      chat:[
        {who:'m',code:`<span class="kw">import</span> { useState } <span class="kw">from</span> <span class="str">"react"</span>;\n\n<span class="kw">function</span> <span class="fn">Counter</span>() {\n  <span class="kw">const</span> [count, setCount] = <span class="fn">useState</span>(<span class="nm">0</span>);\n  <span class="kw">return</span> (\n    &lt;button onClick={() => <span class="fn">setCount</span>(count + <span class="nm">1</span>)}&gt;\n      Count: {count}\n    &lt;/button&gt;\n  );\n}`},
        {who:'m',text:'<code>useState(0)</code> returns an array: [currentValue, setterFunction]. Calling the setter triggers a re-render with the new value.'}
      ]
    },
    {
      tag:'question', title:'Why not a plain variable?',
      chat:[{who:'m',text:'Why can\'t you just use <code>let count = 0</code> and update it with <code>count = count + 1</code> instead of useState? 🎯'}],
      ph:'A plain variable doesn\'t work because...',
      words:['rerender','render','update','screen','rebuild','react','know'],
      good:'Exactly — React has no way to know a plain variable changed, so it won\'t re-render the UI. useState tells React "this changed, please redraw." ✓',
      hint:'Changing a plain JS variable doesn\'t tell React anything happened. How would React know to update the screen?'
    },
    {
      tag:'modify', title:'Modify the code',
      chat:[
        {who:'m',code:`<span class="kw">const</span> [name, setName] = <span class="fn">useState</span>(<span class="str">""</span>);\n&lt;input value={name} /&gt;`},
        {who:'m',text:'This input never updates because nothing calls setName. Add the missing onChange handler so typing updates the state. Type the full input line. 🎯'}
      ],
      ph:'<input value={name} onChange={...} />',
      words:['onchange','setname(e.target.value)'],
      good:'Right — <code>&lt;input value={name} onChange={(e) => setName(e.target.value)} /&gt;</code> ✓',
      hint:'You need an onChange prop that calls setName with the new typed value: e.target.value.'
    }
  ],
  notes:[
    {icon:'📌',text:'<code>const [value, setValue] = useState(initial)</code> — array destructuring of [current, setter].',copy:'Write: useState returns [value, setter]'},
    {icon:'📌',text:'Calling the setter triggers a re-render. Never mutate state directly.',copy:'Write: setter triggers re-render, never mutate directly'}
  ],
  tasks:[
    'Build a Counter component with increment/decrement buttons',
    'Build a controlled text input that shows live character count',
    'Build a toggle button that switches text between "Show" and "Hide"',
    'Push to GitHub: git commit -m "lesson 10: useState"'
  ],
  tip:'Interview Q: "Why does calling the state setter cause a re-render?" Because React schedules a re-render whenever state changes, comparing old and new virtual DOM to update only what changed.',
  next:'More React Hooks: useRef & useContext'
},

// ───────────────────────── NEW: MORE REACT HOOKS ─────────────────────────
{
  track:'react', phase:'Phase 2 — React', title:'More React Hooks: useRef & useContext',
  desc:'useState handles most needs, but two more hooks come up constantly in real apps and interviews: useRef for accessing things directly, and useContext for sharing data without passing props through every level.',
  badge:'b-amber', badgeText:'Used in almost every real React app',
  react:'This is pure React — these hooks solve real problems useState can\'t: focusing an input directly, or avoiding passing the same prop through 5 layers of components.',
  steps:[
    {
      tag:'explain', title:'useRef — a value that doesn\'t cause re-renders',
      chat:[
        {who:'m',code:`<span class="kw">import</span> { useRef } <span class="kw">from</span> <span class="str">"react"</span>;\n\n<span class="kw">function</span> <span class="fn">SearchBox</span>() {\n  <span class="kw">const</span> inputRef = <span class="fn">useRef</span>(<span class="kw">null</span>);\n\n  <span class="kw">function</span> <span class="fn">focusInput</span>() {\n    inputRef.current.<span class="fn">focus</span>(); <span class="cm">// directly access the real DOM input</span>\n  }\n\n  <span class="kw">return</span> (\n    &lt;&gt;\n      &lt;input ref={inputRef} /&gt;\n      &lt;button onClick={focusInput}&gt;Focus the input&lt;/button&gt;\n    &lt;/&gt;\n  );\n}`},
        {who:'m',text:'<code>useRef(null)</code> creates a box (<code>.current</code>) that persists across renders but, unlike state, changing it does NOT trigger a re-render. Attaching <code>ref={inputRef}</code> gives you direct access to that DOM element.'}
      ]
    },
    {
      tag:'question', title:'useRef vs useState',
      chat:[{who:'m',text:'Why would you use useRef instead of useState to track something like "has this component mounted before"? 🎯'}],
      ph:'Because useRef...',
      words:['rerender','no render','does not cause','without triggering','update screen'],
      good:'Right — useRef lets you store a value across renders WITHOUT causing a re-render every time it changes, unlike useState. Good for tracking things the UI doesn\'t need to reflect. ✓',
      hint:'What\'s the one thing useState always does when you call its setter, that you might NOT want for some tracked values?'
    },
    {
      tag:'explain', title:'useContext — skip prop drilling',
      chat:[
        {who:'m',code:`<span class="kw">const</span> ThemeContext = React.<span class="fn">createContext</span>(<span class="str">"light"</span>);\n\n<span class="kw">function</span> <span class="fn">App</span>() {\n  <span class="kw">return</span> (\n    &lt;ThemeContext.Provider value=<span class="str">"dark"</span>&gt;\n      &lt;Toolbar /&gt; <span class="cm">/* no need to pass theme as a prop through every level */</span>\n    &lt;/ThemeContext.Provider&gt;\n  );\n}\n\n<span class="kw">function</span> <span class="fn">DeepButton</span>() {\n  <span class="kw">const</span> theme = <span class="fn">useContext</span>(ThemeContext); <span class="cm">// reads it directly, no matter how deep</span>\n  <span class="kw">return</span> &lt;button className={theme}&gt;Click&lt;/button&gt;;\n}`},
        {who:'m',text:'Without Context, "theme" would need to be passed as a prop through every component in between, even ones that don\'t use it — that\'s called prop drilling. Context lets any descendant read the value directly.'}
      ]
    },
    {
      tag:'question', title:'What problem does Context solve?',
      chat:[{who:'m',text:'In one sentence, what problem is useContext specifically designed to avoid? 🎯'}],
      ph:'It avoids...',
      words:['prop drilling','passing props through','every level','intermediate'],
      good:'Right — it avoids "prop drilling," where you\'d otherwise have to pass a prop down through many components that don\'t even use it themselves. ✓',
      hint:'It\'s named directly in the explanation above — passing the same prop through several middle components that don\'t need it.'
    }
  ],
  notes:[
    {icon:'📌',text:'useRef(initial) gives you a .current box that persists across renders WITHOUT causing a re-render when it changes. Common use: direct DOM access (focus, scroll).',copy:'Write: useRef = persists across renders, no re-render on change'},
    {icon:'📌',text:'useContext lets any descendant component read a value directly, skipping prop drilling through every level in between.',copy:'Write: useContext avoids prop drilling'}
  ],
  tasks:[
    'Build an input with a "Focus" button using useRef',
    'Build a simple ThemeContext (light/dark) and read it with useContext in a deeply nested component',
    'Push to GitHub: git commit -m "lesson: useRef and useContext"'
  ],
  tip:'Interview Q: "When would you use useContext over passing props?" When several components in between don\'t need the value themselves — Context avoids forcing them to pass it along anyway.',
  next:'Conditional Rendering & Lists & Keys'
},
// ───────────────────────── NEW: CONDITIONAL RENDERING & LISTS/KEYS ─────────────────────────
{
  track:'react', phase:'Phase 2 — React', title:'Conditional Rendering & Lists & Keys',
  desc:'How to show/hide UI based on data, and how to safely render lists. The "key" prop is one of the most common React mistakes beginners make — get it right here.',
  badge:'b-amber', badgeText:'Two of the most common React patterns',
  react:'This is the bridge from your earlier ternary and map() lessons straight into JSX — same logic, now controlling what appears on screen.',
  steps:[
    {
      tag:'explain', title:'Conditional rendering',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">Status</span>({ inStock }) {\n  <span class="kw">return</span> (\n    &lt;div&gt;\n      {inStock ? &lt;span&gt;In Stock&lt;/span&gt; : &lt;span&gt;Out of Stock&lt;/span&gt;}\n      {inStock && &lt;button&gt;Add to Cart&lt;/button&gt;}\n    &lt;/div&gt;\n  );\n}`},
        {who:'m',text:'<code>condition && &lt;Thing /&gt;</code> renders Thing only if condition is true — renders nothing otherwise.'}
      ]
    },
    {
      tag:'explain', title:'Rendering lists with keys',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">ProductList</span>({ products }) {\n  <span class="kw">return</span> (\n    &lt;ul&gt;\n      {products.<span class="fn">map</span>((p) => (\n        &lt;li key={p.id}&gt;{p.name} — ₹{p.price}&lt;/li&gt;\n      ))}\n    &lt;/ul&gt;\n  );\n}`},
        {who:'m',text:'<code>key</code> must be unique per item and stable across re-renders — usually an id, never the array index if items can reorder.'}
      ]
    },
    {
      tag:'question', title:'Why keys matter',
      chat:[{who:'m',text:'Why shouldn\'t you use the array index as the key if the list can be reordered or filtered? 🎯'}],
      ph:'Using index breaks because...',
      words:['change','reorder','mismatch','wrong','confuse','identity','track'],
      good:'Right — if items reorder, the index no longer matches the same item, so React can mismatch state/DOM nodes between renders. ✓',
      hint:'If you delete the first item, every other item\'s index shifts down by one — does React still know which item is which?'
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`{inStock ____ &lt;span className=<span class="str">"badge"</span>&gt;New!&lt;/span&gt;}`},
        {who:'m',text:'Fill the missing operator so this badge shows up only when inStock is true. 🎯'}
      ],
      ph:'____',
      words:['&&'],
      good:'Yes — <code>&&</code>. ✓',
      hint:'Same operator used in the first example to conditionally show the "Add to Cart" button.'
    }
  ],
  notes:[
    {icon:'📌',text:'Ternary for either/or rendering: <code>{cond ? A : B}</code>. && for show/nothing: <code>{cond && A}</code>.',copy:'Write: ternary = either/or, && = show or nothing'},
    {icon:'📌',text:'Every list item needs a unique, stable <code>key</code> — use an id, never the array index for reorderable lists.',copy:'Write: key = unique stable id, not index'}
  ],
  tasks:[
    'Build a Status component showing "In Stock"/"Out of Stock" with a ternary',
    'Add a "New!" badge that only shows with && when a prop is true',
    'Render a list of 5+ products using map(), with key={p.id}',
    'Add an empty-state message that shows only when the list is empty',
    'Push to GitHub: git commit -m "lesson: conditional rendering and lists"'
  ],
  tip:'Interview Q: "Why does React need a key prop on list items?" It helps React identify which items changed, were added, or removed between renders, instead of re-rendering everything.',
  next:'Forms & Controlled Inputs'
},
// ───────────────────────── NEW: FORMS & CONTROLLED INPUTS ─────────────────────────
{
  track:'react', phase:'Phase 2 — React', title:'Forms & Controlled Inputs',
  desc:'Almost every real app has a form somewhere. React forms work differently from plain HTML forms — state controls the input value, not the DOM.',
  badge:'b-amber', badgeText:'Needed for almost every real app',
  react:'This connects your useState lesson directly to a real use case — every keystroke updates state, and state drives what\'s shown on screen.',
  steps:[
    {
      tag:'explain', title:'Controlled input',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">SearchBar</span>() {\n  <span class="kw">const</span> [term, setTerm] = <span class="fn">useState</span>(<span class="str">""</span>);\n  <span class="kw">return</span> (\n    &lt;input\n      value={term}\n      onChange={(e) => <span class="fn">setTerm</span>(e.target.value)}\n      placeholder=<span class="str">"Search products..."</span>\n    /&gt;\n  );\n}`},
        {who:'m',text:'"Controlled" means React state is the single source of truth for the input\'s value — not the DOM itself.'}
      ]
    },
    {
      tag:'explain', title:'Handling form submit',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">handleSubmit</span>(e) {\n  e.<span class="fn">preventDefault</span>(); <span class="cm">// stop the page from refreshing</span>\n  console.<span class="fn">log</span>(<span class="str">"Submitted:"</span>, term);\n}\n\n&lt;form onSubmit={handleSubmit}&gt;\n  &lt;input value={term} onChange={(e) => setTerm(e.target.value)} /&gt;\n  &lt;button type=<span class="str">"submit"</span>&gt;Search&lt;/button&gt;\n&lt;/form&gt;`}
      ]
    },
    {
      tag:'question', title:'Why preventDefault?',
      chat:[{who:'m',text:'What would happen if you removed e.preventDefault() from handleSubmit? 🎯'}],
      ph:'Without preventDefault...',
      words:['refresh','reload','page','default','browser'],
      good:'Right — the browser would do its default behavior of reloading the page, wiping your React state. ✓',
      hint:'Forms have a default browser behavior on submit — what does a plain HTML form normally do when submitted?'
    }
  ],
  notes:[
    {icon:'📌',text:'Controlled input: value={state}, onChange updates state. React state is the source of truth.',copy:'Write: controlled = value from state, onChange updates it'},
    {icon:'📌',text:'Always call e.preventDefault() in onSubmit to stop the default page reload.',copy:'Write: e.preventDefault() in form submit handlers'}
  ],
  tasks:[
    'Build a controlled SearchBar with live character count below it',
    'Build a small form (name + email) using controlled inputs',
    'Handle onSubmit with preventDefault, log the form data',
    'Add simple validation: disable the submit button if a field is empty',
    'Push to GitHub: git commit -m "lesson: forms and controlled inputs"'
  ],
  tip:'Interview Q: "What is a controlled component?" An input whose value is driven by React state rather than the DOM\'s own internal state — value + onChange together.',
  next:'useEffect'
},
// ───────────────────────── 15: useEFFECT ─────────────────────────
{
  track:'react', phase:'Phase 2 — React', title:'useEffect',
  desc:'useEffect runs code in response to renders — most commonly, fetching data when a component first loads. This connects directly back to your Async JS lesson.',
  badge:'b-red', badgeText:'How React components fetch data',
  react:'This IS the React home of everything you learned in Async JS — fetch + async/await now lives inside useEffect.',
  steps:[
    {
      tag:'explain', title:'Fetching on load',
      chat:[
        {who:'m',code:`<span class="kw">import</span> { useState, useEffect } <span class="kw">from</span> <span class="str">"react"</span>;\n\n<span class="kw">function</span> <span class="fn">ProductList</span>() {\n  <span class="kw">const</span> [products, setProducts] = <span class="fn">useState</span>([]);\n\n  <span class="fn">useEffect</span>(() => {\n    <span class="kw">async function</span> <span class="fn">load</span>() {\n      <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://fakestoreapi.com/products"</span>);\n      <span class="kw">const</span> data = <span class="kw">await</span> res.<span class="fn">json</span>();\n      <span class="fn">setProducts</span>(data);\n    }\n    <span class="fn">load</span>();\n  }, []);\n\n  <span class="kw">return</span> &lt;div&gt;{products.<span class="fn">map</span>(p => &lt;p key={p.id}&gt;{p.title}&lt;/p&gt;)}&lt;/div&gt;;\n}`},
        {who:'m',text:'The empty array <code>[]</code> at the end means "run this effect only once, when the component first mounts."'}
      ]
    },
    {
      tag:'question', title:'The dependency array',
      chat:[{who:'m',text:'What would happen if you removed the <code>[]</code> entirely from useEffect? 🎯'}],
      ph:'Without [], the effect would...',
      words:['every','rerender','loop','infinite','again','repeat'],
      good:'Right — it would run after EVERY render, and since setProducts triggers a re-render, you\'d get an infinite loop. ✓',
      hint:'Without a dependency array, useEffect runs after every single render. What happens if the effect itself causes a re-render?'
    },
    {
      tag:'explain', title:'Cleanup functions',
      chat:[
        {who:'m',code:`<span class="fn">useEffect</span>(() => {\n  <span class="kw">const</span> timer = <span class="fn">setInterval</span>(() => console.<span class="fn">log</span>(<span class="str">"tick"</span>), <span class="nm">1000</span>);\n\n  <span class="kw">return</span> () => {\n    <span class="fn">clearInterval</span>(timer); <span class="cm">// cleanup — runs before the effect re-runs, or on unmount</span>\n  };\n}, []);`},
        {who:'m',text:'If a function is returned from inside useEffect, React calls it right before the effect runs again, and when the component unmounts. This is how you cancel timers, subscriptions, or in-flight requests.'}
      ]
    },
    {
      tag:'question', title:'Why cleanup matters',
      chat:[{who:'m',text:'If you don\'t clean up a setInterval when the component unmounts, what problem does that cause? 🎯'}],
      ph:'Without cleanup...',
      words:['leak','keep running','memory','still','exist','gone'],
      good:'Right — the timer keeps running forever in the background even after the component is gone, wasting memory and possibly causing errors trying to update state that no longer exists. This is called a memory leak. ✓',
      hint:'The component is gone from the screen, but did anything tell setInterval to stop? What keeps running in the background?'
    }
  ],
  notes:[
    {icon:'📌',text:'<code>useEffect(fn, [])</code> = run once on mount. <code>useEffect(fn, [dep])</code> = run when dep changes. No array = run every render.',copy:'Write: [] = once, [dep] = on change, none = every render'},
    {icon:'📌',text:'fetch inside useEffect needs its own async function — useEffect\'s callback itself can\'t be async directly.',copy:'Write: define async fn inside useEffect, then call it'}
  ],
  tasks:[
    'Build ProductList that fetches from https://fakestoreapi.com/products on mount',
    'Add a loading state shown while data is fetching',
    'Add an error state shown if the fetch fails',
    'Push to GitHub: git commit -m "lesson 11: useEffect"'
  ],
  tip:'Interview Q: "What\'s the dependency array for?" It controls when the effect re-runs — empty = once, with values = whenever those values change, omitted = every render (usually a mistake).',
  next:'Custom Hooks'
},

// ───────────────────────── NEW: CUSTOM HOOKS ─────────────────────────
{
  track:'react', phase:'Phase 2 — React', title:'Custom Hooks',
  desc:'Custom hooks let you extract and reuse stateful logic between components. Instead of copy-pasting the same useEffect + useState fetch pattern into every component, you write it once in a hook and reuse it everywhere. This is the single biggest jump from junior to mid-level React dev.',
  badge:'b-red', badgeText:'Junior-to-mid jump — asked in almost every interview',
  react:'Custom hooks ARE React — they are just functions that use useState/useEffect internally and return whatever the component needs. The naming convention (must start with "use") lets React apply its rules to them.',
  steps:[
    {
      tag:'explain', title:'Why custom hooks exist',
      chat:[
        {who:'m',text:'Imagine MovieSearch and UserSearch both need: a loading state, an error state, a fetch that re-runs when a query changes. Without a custom hook you copy-paste 15 identical lines into each component. A custom hook extracts that logic into one place.'},
        {who:'m',code:`// useFetch.js — write once, use in any component\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const controller = new AbortController();\n    async function load() {\n      try {\n        setLoading(true);\n        const res = await fetch(url, { signal: controller.signal });\n        if (!res.ok) throw new Error('Request failed');\n        setData(await res.json());\n      } catch (err) {\n        if (err.name !== 'AbortError') setError(err.message);\n      } finally { setLoading(false); }\n    }\n    load();\n    return () => controller.abort(); // cleanup cancels in-flight request\n  }, [url]);\n\n  return { data, loading, error };\n}\n\n// Usage — entire fetch + loading + error in 1 line:\nconst { data, loading, error } = useFetch(url);`}
      ]
    },
    {
      tag:'question', title:'Why AbortController matters',
      chat:[{who:'m',text:'If a user types "san" and immediately types "sandeep", two fetch requests fire. Without AbortController, why can the UI end up showing results for "san" instead of "sandeep"? Explain the race. 🎯'}],
      ph:'Because the response for "san" could...',
      words:['last','arrive','race','order','old','stale','after'],
      good:'Right — if the "san" response arrives AFTER the "sandeep" response (slow network), it overwrites the state last, so the UI shows stale "san" results. AbortController cancels the old request before it can do that. ✓',
      hint:'Two requests are in-flight. Which one resolves first on a slow connection — the short query or the long one? What happens when the slower one arrives and calls setData?'
    },
    {
      tag:'explain', title:'useDebounce — stop network flooding',
      chat:[
        {who:'m',code:`// useDebounce.js\nfunction useDebounce(value, delay = 500) {\n  const [debounced, setDebounced] = useState(value);\n\n  useEffect(() => {\n    const timer = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(timer); // cancel on every new keystroke\n  }, [value, delay]);\n\n  return debounced;\n}\n\n// MovieSearch — only ONE request fires, 500ms after user stops typing\nconst [query, setQuery] = useState('');\nconst debouncedQuery = useDebounce(query, 500);\nconst { data, loading } = useFetch(\`https://api.example.com?q=\${debouncedQuery}\`);`},
        {who:'m',text:'Typing "batman" without debounce fires 6 API calls (b, ba, bat...). With debounce it fires exactly 1 — after you stop for 500ms. On a rate-limited API like OMDb or GitHub (60 req/hr unauthenticated), this prevents being locked out during a live interview demo.'}
      ]
    },
    {
      tag:'modify', title:'Modify the code',
      chat:[
        {who:'m',code:`// Current — fetches on EVERY keystroke\nconst [query, setQuery] = useState('');\nuseEffect(() => { fetchMovies(query); }, [query]);`},
        {who:'m',text:'Add useDebounce so the fetch fires only after 500ms of no typing. Write the two new lines needed and what changes in the dependency array. 🎯'}
      ],
      ph:'const debouncedQuery = useDebounce(query, 500);  ...  [debouncedQuery]',
      words:['debounced','debouncedquery','debounce'],
      good:'Right — you create debouncedQuery with useDebounce, then the dependency array watches debouncedQuery instead of query directly. Effect only fires 500ms after typing stops. ✓',
      hint:'You need a new variable from useDebounce, then put THAT variable in the [] instead of query.'
    }
  ],
  notes:[
    {icon:'📌',text:'Custom hook = a function whose name starts with "use" that contains useState/useEffect. Extract any repeated stateful logic into one.',copy:'Write: custom hook = function starting with use, returns values'},
    {icon:'📌',text:'AbortController inside useFetch cancels in-flight requests when the URL changes — prevents race condition bugs.',copy:'Write: return () => controller.abort() to cancel old requests'},
    {icon:'📌',text:'useDebounce delays a value until the user stops changing it — prevents flooding a rate-limited API with a request per keystroke.',copy:'Write: debounce = wait until user stops typing, then fire'}
  ],
  tasks:[
    'Create src/hooks/useFetch.js — implement useFetch(url) returning { data, loading, error }',
    'Refactor any existing component that has raw useEffect + fetch to use useFetch instead',
    'Create src/hooks/useDebounce.js — implement useDebounce(value, delay)',
    'Wire both hooks in MovieSearch: debounce the search query, pass debounced value to useFetch URL',
    'Open DevTools Network tab and type quickly — confirm only 1 request fires per 500ms pause',
    'Push to GitHub: git commit -m "custom hooks: useFetch and useDebounce"'
  ],
  tip:'Interview Q: "What is a custom hook?" A function starting with "use" that encapsulates reusable stateful logic. Use one whenever you catch yourself copy-pasting the same useState/useEffect pattern into multiple components.',
  next:'React Router'
},

// ───────────────────────── NEW: REACT ROUTER ─────────────────────────
{
  track:'react', phase:'Phase 2 — React', title:'React Router',
  desc:'Every real React app needs more than one page — a home page, a product page, a cart page. React Router is the standard way to handle that without reloading the whole page.',
  badge:'b-red', badgeText:'Virtually every real React app needs this',
  react:'This lesson IS React-specific — single-page apps use React Router to fake multiple "pages" by swapping components based on the URL, with no full page reload.',
  steps:[
    {
      tag:'explain', title:'Basic routing setup',
      chat:[
        {who:'m',code:`<span class="kw">import</span> { BrowserRouter, Routes, Route, Link } <span class="kw">from</span> <span class="str">"react-router-dom"</span>;\n\n<span class="kw">function</span> <span class="fn">App</span>() {\n  <span class="kw">return</span> (\n    &lt;BrowserRouter&gt;\n      &lt;nav&gt;\n        &lt;Link to=<span class="str">"/"</span>&gt;Home&lt;/Link&gt;\n        &lt;Link to=<span class="str">"/products"</span>&gt;Products&lt;/Link&gt;\n      &lt;/nav&gt;\n      &lt;Routes&gt;\n        &lt;Route path=<span class="str">"/"</span> element={&lt;Home /&gt;} /&gt;\n        &lt;Route path=<span class="str">"/products"</span> element={&lt;Products /&gt;} /&gt;\n      &lt;/Routes&gt;\n    &lt;/BrowserRouter&gt;\n  );\n}`},
        {who:'m',text:'<code>Link</code> changes the URL WITHOUT a full page reload — that\'s the entire point. <code>Route</code> decides which component shows for which URL path.'}
      ]
    },
    {
      tag:'question', title:'Link vs a tag',
      chat:[{who:'m',text:'Why use &lt;Link to="/products"&gt; instead of a plain &lt;a href="/products"&gt;? 🎯'}],
      ph:'Because a plain <a> tag would...',
      words:['reload','refresh','whole page','lose state','full page'],
      good:'Right — a plain &lt;a&gt; tag triggers a full page reload, wiping out all your React state. Link swaps the view instantly without reloading anything. ✓',
      hint:'What does clicking a normal HTML link always do to the browser, that you specifically don\'t want in a single-page app?'
    },
    {
      tag:'explain', title:'Dynamic route params',
      chat:[
        {who:'m',code:`&lt;Route path=<span class="str">"/products/:id"</span> element={&lt;ProductDetail /&gt;} /&gt;\n\n<span class="cm">// Inside ProductDetail.jsx:</span>\n<span class="kw">import</span> { useParams } <span class="kw">from</span> <span class="str">"react-router-dom"</span>;\n<span class="kw">function</span> <span class="fn">ProductDetail</span>() {\n  <span class="kw">const</span> { id } = <span class="fn">useParams</span>(); <span class="cm">// reads "id" straight from the URL</span>\n  <span class="kw">return</span> &lt;div&gt;Showing product #{id}&lt;/div&gt;;\n}`},
        {who:'m',text:'<code>:id</code> in the path is a placeholder. <code>useParams()</code> reads whatever value was actually in the URL — this is how a single ProductDetail component handles every product, not just one.'}
      ]
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`&lt;Route path=<span class="str">"/users/:username"</span> element={&lt;Profile /&gt;} /&gt;\n\n<span class="cm">// inside Profile.jsx:</span>\n<span class="kw">const</span> { ____ } = <span class="fn">useParams</span>();`},
        {who:'m',text:'Fill in the missing variable name that matches the :username placeholder in the path. 🎯'}
      ],
      ph:'____',
      words:['username'],
      good:'Right — <code>const { username } = useParams();</code> — the destructured name must match the :placeholder exactly. ✓',
      hint:'The name inside { } must exactly match the text after the colon in the route path: :username.'
    }
  ],
  notes:[
    {icon:'📌',text:'BrowserRouter wraps the app, Routes + Route map URL paths to components, Link navigates without reloading.',copy:'Write: BrowserRouter > Routes > Route, Link for navigation'},
    {icon:'📌',text:':param in a path + useParams() lets one component handle infinite dynamic URLs (e.g. every product page).',copy:'Write: :param + useParams() = dynamic routes'}
  ],
  tasks:[
    'Install react-router-dom and set up BrowserRouter in your app',
    'Create at least 3 routes: Home, a list page, and a detail page',
    'Add a Link-based nav bar to move between them',
    'Add a dynamic route with a :param and read it using useParams()',
    'Push to GitHub: git commit -m "lesson: react router"'
  ],
  tip:'Interview Q: "How does client-side routing differ from traditional page navigation?" No full page reload — the JS swaps which component renders based on the URL, keeping the app state intact and feeling instant.',
  next:'Revision: React Core'
},
// ───────────────────────── NEW: REVISION — REACT CORE ─────────────────────────
{
  track:'react', phase:'Phase 2 — React', title:'Revision: React Core',
  desc:'No new concepts — pure recall. You\'ve covered 6 React lessons. Confirm you remember the early ones before combining everything into the phase project.',
  badge:'b-amber', badgeText:'Retrieval practice — nothing new, just recall',
  react:'This whole lesson IS the React check — if these don\'t come back from memory, the project will feel harder than it should.',
  steps:[
    {
      tag:'question', title:'Recall: Components & Props',
      chat:[{who:'m',text:'Without looking back: what are props, in your own words? 🎯'}],
      ph:'Props are...',
      words:['parameter','pass','data','parent','child'],
      good:'Correct — still solid. ✓',
      hint:'They\'re the same idea as a function parameter — values (or functions) passed into a component from its parent.'
    },
    {
      tag:'question', title:'Recall: useState',
      chat:[{who:'m',text:'Without looking back: why can\'t you just use a plain JS variable instead of useState? 🎯'}],
      ph:'Because...',
      words:['rerender','render','know','react','update','screen'],
      good:'Correct — still solid. ✓',
      hint:'React has no way to know a plain variable changed — it would never redraw the screen.'
    },
    {
      tag:'question', title:'Recall: Lists & Keys',
      chat:[{who:'m',text:'Without looking back: why does every list item need a unique key? 🎯'}],
      ph:'Because...',
      words:['identify','track','reorder','mismatch','identity'],
      good:'Correct — still solid. ✓',
      hint:'It helps React tell which items changed, were added, or removed between renders.'
    }
  ],
  notes:[{icon:'📌',text:'If anything felt shaky, re-read that lesson now — weak React fundamentals make the Movie Search project feel confusing instead of straightforward.',copy:'Write down which React topic needs more practice'}],
  tasks:[
    'Re-open any lesson you hesitated on above and re-read its notes',
    'From memory, write one new example of a ternary used in JSX, different from the lesson examples',
    'Update your journal with what still feels shaky before starting the project'
  ],
  tip:'Recall practice like this is far more effective than re-reading — your brain has to actually retrieve the answer, which is what builds it into long-term memory.',
  next:'React Mini-Project: Movie Search App'
},
// ───────────────────────── 17: PROJECT — MOVIE SEARCH ─────────────────────────
{
  track:'project', phase:'Phase 2 — React', title:'React Mini-Project: Movie Search App',
  desc:'Your end-of-phase checkpoint: combine every React concept so far — components, props, useState, useEffect, conditional rendering, and lists — into one real app that talks to a live API.',
  badge:'b-blue', badgeText:'Independent project — full API integration',
  react:'This is the complete loop: user input (events) → state (useState) → effect (useEffect + fetch) → rendered list (map). Every concept from this whole roadmap, together.',
  steps:[
    {tag:'explain', title:'The brief', chat:[{who:'m',text:'Use the OMDb API (free key) or a similar free movie API. A search input updates state on every keystroke; useEffect re-fetches results whenever the search term changes.'}]},
    {
      tag:'question', title:'Dependency array choice',
      chat:[{who:'m',text:'Your useEffect should re-fetch whenever the search term changes. What goes in the dependency array? 🎯'}],
      ph:'useEffect(() => {...}, [___])',
      words:['searchterm','search','term','query'],
      good:'Right — put the search term variable in the dependency array so the effect re-runs whenever it changes. ✓',
      hint:'Whatever variable holds the typed text needs to be inside the [] so React knows to re-run the effect when it changes.'
    }
  ],
  notes:[{icon:'📌',text:'Put any state the effect depends on inside the dependency array — that\'s what "depends on" means.',copy:'Write: dependency array = what the effect depends on'}],
  tasks:[
    'Create MovieSearch.jsx',
    'Search input updates state on every keystroke',
    'useEffect fetches matching movies whenever the search term changes',
    'Show loading state while fetching, "No results" if empty',
    'Render movie posters + titles in a grid',
    'Push to GitHub: git commit -m "project: movie search app"'
  ],
  tip:'Interview Q: "How would you debounce a search input?" Mention setTimeout/clearTimeout to delay the fetch until the user stops typing — a common follow-up question on this exact project.',
  next:'TypeScript Basics',
  rubric:[
    'I built this without copy-pasting from an old lesson — I typed every line myself',
    'Typing in the search box actually triggers new results without a page reload',
    'A loading state shows while waiting, and disappears once results arrive',
    'An empty search or a typo shows a clear "no results" message, not a blank screen or crash',
    'I can explain, out loud, why my useEffect dependency array has what it has'
  ]
},
// ───────────────────────── 19: TYPESCRIPT ─────────────────────────
{
  track:'ts', phase:'Phase 3 — TypeScript', title:'TypeScript Basics',
  desc:'TypeScript adds types on top of JavaScript, catching bugs before you run the code. Many React jobs expect at least basic TypeScript.',
  badge:'b-amber', badgeText:'Increasingly required in job listings',
  react:'Typed props (interface Props {...}) replace guessing what a component expects — TypeScript will warn you the moment you pass the wrong prop type.',
  steps:[
    {
      tag:'explain', title:'Basic types',
      chat:[
        {who:'m',code:`<span class="kw">let</span> price: number = <span class="nm">1299</span>;\n<span class="kw">let</span> name: string = <span class="str">"Earbuds"</span>;\n<span class="kw">let</span> inStock: boolean = <span class="kw">true</span>;\n\n<span class="kw">interface</span> Product {\n  name: string;\n  price: number;\n  inStock: boolean;\n}\n\n<span class="kw">function</span> <span class="fn">ProductCard</span>(props: Product) {\n  <span class="kw">return</span> &lt;div&gt;{props.name}&lt;/div&gt;;\n}`},
        {who:'m',text:'<code>interface</code> describes the shape of an object — exactly what props a component expects.'}
      ]
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">getDiscount</span>(price: number, percent: ____): number {\n  <span class="kw">return</span> price - (price * percent / <span class="nm">100</span>);\n}`},
        {who:'m',text:'Fill the missing type for the percent parameter. 🎯'}
      ],
      ph:'____',
      words:['number'],
      good:'Yes — <code>number</code>. ✓',
      hint:'percent is a numeric value, same type as price.'
    },
    {
      tag:'explain', title:'Typing arrays + type inference',
      chat:[
        {who:'m',code:`<span class="kw">const</span> names: string[] = [<span class="str">"Earbuds"</span>, <span class="str">"Charger"</span>];\n<span class="kw">const</span> prices: number[] = [<span class="nm">1299</span>, <span class="nm">799</span>];\n\n<span class="cm">// You don't ALWAYS have to write the type — TS often infers it</span>\n<span class="kw">let</span> total = <span class="nm">0</span>;  <span class="cm">// TS infers this is "number" automatically</span>\ntotal = <span class="str">"oops"</span>; <span class="cm">// ❌ TS error — can't assign string to a number</span>`},
        {who:'m',text:'<code>type[]</code> means "an array of that type." TypeScript also infers types automatically from the initial value — you don\'t need to annotate everything by hand.'}
      ]
    },
    {
      tag:'modify', title:'Modify the code',
      chat:[
        {who:'m',code:`<span class="kw">function</span> <span class="fn">getTotal</span>(prices) {\n  <span class="kw">return</span> prices.<span class="fn">reduce</span>((sum, p) => sum + p, <span class="nm">0</span>);\n}`},
        {who:'m',text:'This function has no types at all. Add a type to the prices parameter so it only accepts an array of numbers, and add a return type. Type the new function signature line. 🎯'}
      ],
      ph:'function getTotal(prices: number[]): number {',
      words:['number[]'],
      good:'Right — <code>function getTotal(prices: number[]): number {</code> ✓',
      hint:'Use the array type syntax you just learned: number[]. The return type goes after the closing parenthesis.'
    }
  ],
  notes:[{icon:'📌',text:'TypeScript types: string, number, boolean, arrays (string[]), and interface for object shapes.',copy:'Write: basic types + interface for object shapes'}],
  tasks:[
    'Convert one existing JS file to .ts and add types to every variable',
    'Write an interface Product and use it to type a function parameter',
    'Convert ProductCard.jsx to ProductCard.tsx with a typed Props interface',
    'Push to GitHub: git commit -m "lesson 12: typescript basics"'
  ],
  tip:'Interview Q: "Why use TypeScript?" Catches type errors at compile time instead of runtime, improves autocomplete, and documents what data shapes your functions expect.',
  next:'Typing Props & State'
},
// ───────────────────────── NEW: TYPING PROPS & STATE ─────────────────────────
{
  track:'ts', phase:'Phase 3 — TypeScript', title:'Typing Props & State',
  desc:'Now apply TypeScript directly to React: typed props with interfaces, and typed useState. This is where TypeScript starts actually catching real bugs in your components.',
  badge:'b-red', badgeText:'Where TS and React meet',
  react:'This lesson is the direct fusion of your Props Deep Dive and useState lessons with TypeScript on top — exactly what real React+TS codebases look like.',
  steps:[
    {
      tag:'explain', title:'Typed props',
      chat:[
        {who:'m',code:`<span class="kw">interface</span> ButtonProps {\n  label: string;\n  onClick: () => void;\n}\n\n<span class="kw">function</span> <span class="fn">Button</span>({ label, onClick }: ButtonProps) {\n  <span class="kw">return</span> &lt;button onClick={onClick}&gt;{label}&lt;/button&gt;;\n}`},
        {who:'m',text:'<code>() => void</code> means "a function that takes no arguments and returns nothing" — the type of most click handlers.'}
      ]
    },
    {
      tag:'explain', title:'Typed useState',
      chat:[
        {who:'m',code:`<span class="kw">const</span> [count, setCount] = <span class="fn">useState</span>&lt;number&gt;(<span class="nm">0</span>);\n<span class="kw">const</span> [name, setName] = <span class="fn">useState</span>&lt;string&gt;(<span class="str">""</span>);\n<span class="kw">const</span> [user, setUser] = <span class="fn">useState</span>&lt;User | null&gt;(<span class="kw">null</span>);`},
        {who:'m',text:'The <code>&lt;type&gt;</code> after useState tells TypeScript what the state will hold — very useful when the initial value is null but will later hold real data.'}
      ]
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">interface</span> CardProps {\n  name: string;\n  price: ____;\n  onAdd: () => void;\n}`},
        {who:'m',text:'Fill in the correct type for price. 🎯'}
      ],
      ph:'____',
      words:['number'],
      good:'Yes — <code>number</code>. ✓',
      hint:'Price is a numeric value, not text.'
    }
  ],
  notes:[
    {icon:'📌',text:'Type props with an interface, then use it as the function parameter type: <code>function X(props: XProps)</code>.',copy:'Write: interface for props, used as param type'},
    {icon:'📌',text:'Type useState explicitly with <code>useState<Type>(initial)</code>, especially when initial is null.',copy:'Write: useState<Type>(initial) when needed'}
  ],
  tasks:[
    'Convert Button.jsx to Button.tsx with a typed ButtonProps interface',
    'Convert ProductCard to TS with a Product interface for its props',
    'Type a useState<number> counter and a useState<string[]> list',
    'Push to GitHub: git commit -m "lesson: typing props and state"'
  ],
  tip:'Interview Q: "How do you type a component\'s props in TypeScript?" Define an interface describing the shape, then use it as the parameter type — often combined with React.FC<Props> as an alternative style.',
  next:'Interfaces & Types'
},
// ───────────────────────── NEW: INTERFACES & TYPES ─────────────────────────
{
  track:'ts', phase:'Phase 3 — TypeScript', title:'Interfaces & Types',
  desc:'A closer look at modeling real data shapes — optional fields, union types, and arrays of typed objects. This is what makes TypeScript genuinely useful on a real project.',
  badge:'b-red', badgeText:'Real-world data modeling',
  react:'This is exactly how you\'d describe the shape of data coming back from an API (like GitHub user data) before rendering it.',
  steps:[
    {
      tag:'explain', title:'Optional fields & unions',
      chat:[
        {who:'m',code:`<span class="kw">interface</span> Product {\n  name: string;\n  price: number;\n  discount?: number;       <span class="cm">// optional — may not exist</span>\n  status: <span class="str">"in-stock"</span> | <span class="str">"out-of-stock"</span>;  <span class="cm">// union — only these 2 values allowed</span>\n}`},
        {who:'m',text:'<code>?</code> marks a field optional. The <code>|</code> (union) restricts a value to one of a fixed set — TypeScript will error if you assign anything else.'}
      ]
    },
    {
      tag:'explain', title:'Arrays of typed objects',
      chat:[
        {who:'m',code:`<span class="kw">const</span> products: Product[] = [\n  { name: <span class="str">"Earbuds"</span>, price: <span class="nm">1299</span>, status: <span class="str">"in-stock"</span> },\n  { name: <span class="str">"Charger"</span>, price: <span class="nm">799</span>, status: <span class="str">"out-of-stock"</span> }\n];`},
        {who:'m',text:'<code>Product[]</code> means "an array where every item matches the Product interface." TypeScript will flag any item missing a required field.'}
      ]
    },
    {
      tag:'question', title:'Optional vs union',
      chat:[{who:'m',text:'What\'s the difference between marking a field optional (?) and giving it a union type (|)? 🎯'}],
      ph:'Optional means... union means...',
      words:['exist','missing','restrict','fixed','values','present'],
      good:'Right — optional (?) means the field might not be present at all. Union (|) means the field IS present, but restricted to specific allowed values. ✓',
      hint:'One controls WHETHER a field exists. The other controls WHAT VALUES a field (that does exist) can hold.'
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">interface</span> ApiStatus {\n  state: <span class="str">"loading"</span> ____ <span class="str">"success"</span> ____ <span class="str">"error"</span>;\n}`},
        {who:'m',text:'Fill in the missing symbol used twice to allow any one of these 3 string values. 🎯'}
      ],
      ph:'____',
      words:['|'],
      good:'Yes — the union symbol <code>|</code>. ✓',
      hint:'Same symbol from the "in-stock" | "out-of-stock" example earlier.'
    }
  ],
  notes:[
    {icon:'📌',text:'Optional field: <code>field?: type</code> — might not exist.',copy:'Write: ?: marks optional fields'},
    {icon:'📌',text:'Union type: <code>"a" | "b" | "c"</code> — restricts to specific allowed values.',copy:'Write: | restricts to a fixed set of values'}
  ],
  tasks:[
    'Write an interface for a GitHub user: login, avatar_url, bio (optional), public_repos',
    'Write a union type for a request status: "idle" | "loading" | "success" | "error"',
    'Type an array of 3 objects matching your GitHub user interface',
    'Push to GitHub: git commit -m "lesson: interfaces and types"'
  ],
  tip:'Interview Q: "How would you type the result of an API call?" Define an interface matching the response shape, mark uncertain fields optional, and type the fetch result as that interface.',
  next:'Generics & Utility Types'
},

// ───────────────────────── NEW: GENERICS & UTILITY TYPES ─────────────────────────
{
  track:'ts', phase:'Phase 3 — TypeScript', title:'Generics & Utility Types',
  desc:'The last core TypeScript skill: writing reusable typed code with generics, and using the built-in utility types real codebases lean on constantly. Both come up directly in interviews.',
  badge:'b-red', badgeText:'Standard TypeScript interview topic',
  react:'Hooks like useState<T> are themselves generic functions — this is why you write useState<number> or useState<Product[]>. Understanding generics demystifies that syntax completely.',
  steps:[
    {
      tag:'explain', title:'Why generics exist',
      chat:[
        {who:'m',code:`<span class="cm">// Without generics — locked to one type, or loses safety with "any"</span>\n<span class="kw">function</span> <span class="fn">firstItem</span>(arr: any[]): any { <span class="kw">return</span> arr[<span class="nm">0</span>]; }\n\n<span class="cm">// With a generic — works for ANY type, and stays type-safe</span>\n<span class="kw">function</span> <span class="fn">firstItem</span>&lt;T&gt;(arr: T[]): T { <span class="kw">return</span> arr[<span class="nm">0</span>]; }\n\nfirstItem([<span class="nm">1</span>,<span class="nm">2</span>,<span class="nm">3</span>]);        <span class="cm">// T becomes number</span>\nfirstItem([<span class="str">"a"</span>,<span class="str">"b"</span>]);       <span class="cm">// T becomes string</span>`},
        {who:'m',text:'<code>&lt;T&gt;</code> is a placeholder type — TypeScript figures out what T actually is each time you call the function, and keeps you type-safe either way, unlike <code>any</code> which gives up on checking entirely.'}
      ]
    },
    {
      tag:'question', title:'Generic vs any',
      chat:[{who:'m',text:'What\'s the key difference between using a generic &lt;T&gt; and just typing something as "any"? 🎯'}],
      ph:'any gives up type-checking, but a generic...',
      words:['still','type','safe','specific','remembers','consistent'],
      good:'Right — a generic still enforces type safety (TypeScript tracks exactly what T is each call), while "any" turns off type checking completely. ✓',
      hint:'"any" means TypeScript stops checking entirely. Does a generic also stop checking, or does it just adapt to whatever type is passed in?'
    },
    {
      tag:'explain', title:'Utility types',
      chat:[
        {who:'m',code:`<span class="kw">interface</span> Product { name: string; price: number; inStock: boolean; }\n\n<span class="kw">type</span> ProductPreview = Pick&lt;Product, <span class="str">"name"</span> | <span class="str">"price"</span>&gt;;\n<span class="cm">// { name: string; price: number; } — only those 2 fields</span>\n\n<span class="kw">type</span> ProductDraft = Partial&lt;Product&gt;;\n<span class="cm">// { name?: string; price?: number; inStock?: boolean; } — every field optional</span>`},
        {who:'m',text:'<code>Pick&lt;Type, Keys&gt;</code> builds a smaller type from specific fields. <code>Partial&lt;Type&gt;</code> makes every field optional — useful for things like a draft/edit form before all fields are filled in.'}
      ]
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`<span class="kw">interface</span> Product { name: string; price: number; inStock: boolean; }\n\n<span class="cm">// build a type with every field EXCEPT inStock</span>\n<span class="kw">type</span> ProductInfo = ____&lt;Product, <span class="str">"inStock"</span>&gt;;`},
        {who:'m',text:'Fill in the utility type that removes specific fields instead of picking them. 🎯'}
      ],
      ph:'____',
      words:['omit'],
      good:'Yes — <code>Omit&lt;Product, "inStock"&gt;</code> — the opposite of Pick, it keeps everything EXCEPT the listed fields. ✓',
      hint:'Pick keeps only the listed fields. What\'s the opposite operation called — removing the listed fields instead?'
    }
  ],
  notes:[
    {icon:'📌',text:'Generics &lt;T&gt; let one function/type work with any type while staying fully type-safe — unlike "any" which gives up checking.',copy:'Write: generics = type-safe + reusable, any = no safety'},
    {icon:'📌',text:'Pick&lt;Type, Keys&gt; keeps only listed fields. Omit&lt;Type, Keys&gt; keeps everything except listed fields. Partial&lt;Type&gt; makes every field optional.',copy:'Write: Pick=keep some, Omit=remove some, Partial=all optional'}
  ],
  tasks:[
    'Write a generic function getLast<T>(arr: T[]): T that returns the last item of any array',
    'Build a Product interface, then create a ProductPreview type using Pick',
    'Create a ProductDraft type using Partial, and one using Omit',
    'Push to GitHub: git commit -m "lesson: generics and utility types"'
  ],
  tip:'Interview Q: "What are generics and why use them?" They let you write one reusable function/type that works correctly across many types, without sacrificing type safety the way "any" does.',
  next:'Revision: TypeScript Core'
},
// ───────────────────────── NEW: REVISION — TYPESCRIPT CORE ─────────────────────────
{
  track:'ts', phase:'Phase 3 — TypeScript', title:'Revision: TypeScript Core',
  desc:'No new concepts — pure recall before the TypeScript project. Quick check that the typing rules actually stuck.',
  badge:'b-amber', badgeText:'Retrieval practice — nothing new, just recall',
  react:'This combines straight into the typed Expense Tracker project next.',
  steps:[
    {
      tag:'question', title:'Recall: Typed props',
      chat:[{who:'m',text:'Without looking back: how do you type a component\'s props? 🎯'}],
      ph:'You define...',
      words:['interface','type','param','props'],
      good:'Correct — still solid. ✓',
      hint:'Define an interface describing the shape, then use it as the function\'s parameter type.'
    },
    {
      tag:'question', title:'Recall: Optional vs union',
      chat:[{who:'m',text:'Without looking back: what does a question mark (?) after a field name mean, vs a pipe (|) between values? 🎯'}],
      ph:'? means... | means...',
      words:['optional','missing','exist','restrict','fixed values'],
      good:'Correct — still solid. ✓',
      hint:'? = the field might not be present at all. | = the field IS present, but limited to a fixed set of values.'
    }
  ],
  notes:[{icon:'📌',text:'If either felt shaky, re-read Typing Props & State or Interfaces & Types now before starting the project.',copy:'Write down which TS rule still feels shaky'}],
  tasks:[
    'Re-open any TypeScript lesson you hesitated on and re-read its notes',
    'From memory, write one new interface for a "Task" object with at least one optional field',
    'Update your journal with what still feels shaky before starting the project'
  ],
  tip:'TypeScript questions in interviews are almost always this exact format — "what does this symbol/keyword mean" — so quick recall here pays off directly.',
  next:'useReducer for State Management'
},
// ───────────────────────── NEW: useReducer ─────────────────────────
{
  track:'react', phase:'Phase 3 — TypeScript', title:'useReducer for State Management',
  desc:'When state has multiple related pieces that change together — like an expenses list, a loading flag, and an error message — useReducer keeps all the logic clean in one place. It is the direct stepping stone to Redux and Zustand, and interviewers specifically test whether you know when to use it over useState.',
  badge:'b-amber', badgeText:'useState grows up — required for complex state',
  react:'useReducer is built into React. Every Redux and Zustand store uses the same dispatch-action pattern. Learn it once and every state management library becomes readable.',
  steps:[
    {
      tag:'explain', title:'The problem with many useStates',
      chat:[
        {who:'m',text:'An Expense Tracker with useState needs: setExpenses, setLoading, setError, setFilter — four separate setters scattered across the component. When you add an expense, you might call two or three of them at once. They can get out of sync. useReducer groups ALL of that into one place.'},
        {who:'m',code:`// useReducer pattern\nconst initialState = { expenses: [], filter: 'all' };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'ADD_EXPENSE':\n      return { ...state, expenses: [...state.expenses, action.payload] };\n    case 'DELETE_EXPENSE':\n      return { ...state, expenses: state.expenses.filter(e => e.id !== action.payload) };\n    case 'SET_FILTER':\n      return { ...state, filter: action.payload };\n    default:\n      return state;\n  }\n}\n\n// In the component:\nconst [state, dispatch] = useReducer(reducer, initialState);\n\n// Adding an expense:\ndispatch({ type: 'ADD_EXPENSE', payload: { id: Date.now(), title: 'Coffee', amount: 3.5 } });`}
      ]
    },
    {
      tag:'question', title:'What does dispatch do?',
      chat:[{who:'m',text:'When you call dispatch({ type: "ADD_EXPENSE", payload: newExpense }), what does React do next — and what does the reducer function receive? 🎯'}],
      ph:'React calls the reducer with...',
      words:['reducer','current state','action','state','returns'],
      good:'Right — React calls reducer(currentState, action), the reducer returns the new state, and React re-renders with that new state. dispatch is just a way to send an action to the reducer. ✓',
      hint:'Think of reducer as a function that takes TWO arguments — what are they? And what does it return?'
    },
    {
      tag:'explain', title:'Why this matters for the Expense Tracker',
      chat:[
        {who:'m',text:'With useReducer your entire state logic lives in the reducer function — easy to test in isolation, easy to read, and impossible to accidentally update half the state. You can also export the reducer and test it with plain JS without rendering any component.'},
        {who:'m',code:`// Typed version for Expense Tracker (TypeScript)\ninterface Expense { id: number; title: string; amount: number; category: string; }\ntype State = { expenses: Expense[]; filter: string; };\ntype Action =\n  | { type: 'ADD_EXPENSE'; payload: Expense }\n  | { type: 'DELETE_EXPENSE'; payload: number }\n  | { type: 'SET_FILTER'; payload: string };\n\nfunction reducer(state: State, action: Action): State {\n  switch (action.type) {\n    case 'ADD_EXPENSE': return { ...state, expenses: [...state.expenses, action.payload] };\n    case 'DELETE_EXPENSE': return { ...state, expenses: state.expenses.filter(e => e.id !== action.payload) };\n    case 'SET_FILTER': return { ...state, filter: action.payload };\n    default: return state;\n  }\n}`},
        {who:'m',text:'The TypeScript union type on Action is called a discriminated union — TypeScript narrows the payload type automatically based on which type string you dispatch. This is industry-standard pattern you will see in every typed Redux codebase.'}
      ]
    },
    {
      tag:'fill', title:'Fill the missing code',
      chat:[
        {who:'m',code:`case 'DELETE_EXPENSE':\n  return { ...state, expenses: state.expenses.____(e => e.id !== action.payload) };`},
        {who:'m',text:'What array method removes the expense whose id matches action.payload, returning a new array? 🎯'}
      ],
      ph:'____',
      words:['filter'],
      good:'Right — filter() keeps all expenses where the id does NOT match, effectively deleting the one that does. ✓',
      hint:'You want to keep everything EXCEPT the one matching the id — which array method keeps items based on a condition?'
    }
  ],
  notes:[
    {icon:'📌',text:'useReducer(reducer, initialState) — dispatch({ type, payload }) sends an action; reducer returns the next state.',copy:'Write: dispatch sends action, reducer returns new state'},
    {icon:'📌',text:'Use useReducer over useState when: multiple state values change together, or when the next state depends on complex logic.',copy:'Write: useReducer when state is complex or interdependent'},
    {icon:'📌',text:'TypeScript discriminated unions on Action types let TS narrow payload types automatically per action.',copy:'Write: union Action types = TS knows payload per type'}
  ],
  tasks:[
    'Refactor a component that uses 3+ separate useStates into a single useReducer',
    'Write a reducer with ADD, DELETE, and SET_FILTER cases',
    'Add a TypeScript discriminated union type for the Action',
    'Test the reducer as a pure function in isolation (no React needed — just call reducer(state, action) directly)',
    'Push to GitHub: git commit -m "useReducer: complex state management"'
  ],
  tip:'Interview Q: "When would you use useReducer over useState?" When multiple state values are interdependent or when the update logic is complex enough that scattering setX calls makes the component hard to follow. Also useful when you want to extract and test state logic independently.',
  next:'TypeScript Mini-Project: Expense Tracker (Typed)'
},
// ───────────────────────── 16: PROJECT — EXPENSE TRACKER ─────────────────────────
{
  track:'ts', phase:'Phase 3 — TypeScript', title:'TypeScript Mini-Project: Expense Tracker (Typed)',
  desc:'Your end-of-phase checkpoint: rebuild the Expense Tracker idea but fully typed — typed props, typed state, and an interface describing every expense. This proves you can use TypeScript for real, not just in isolated examples.',
  badge:'b-blue', badgeText:'Independent project — useState end to end',
  react:'This is pure React state management practice — no API needed yet, so you can focus entirely on getting state updates right.',
  steps:[
    {tag:'explain', title:'The brief', chat:[{who:'m',text:'Build an ExpenseTracker.tsx component. Define an interface Expense { id: number; title: string; amount: number }. Type your useState as useState<Expense[]>([]). A form adds a new expense. A list renders them with delete buttons. A total is calculated and displayed live.'}]},
    {
      tag:'question', title:'Updating array state',
      chat:[{who:'m',text:'To add a new expense to state, would you write setExpenses(expenses.push(newOne)) or setExpenses([...expenses, newOne])? Which is correct, and why? 🎯'}],
      ph:'The correct one is ___ because...',
      words:['spread','...expenses','new array','mutate'],
      good:'Right — <code>setExpenses([...expenses, newOne])</code>. push() mutates the original array, which breaks React\'s ability to detect the change. ✓',
      hint:'Remember the "never mutate" rule from the Shopping Cart project — which option creates a brand new array?'
    }
  ],
  notes:[{icon:'📌',text:'Always update array state with a new array: <code>setItems([...items, newItem])</code>, never .push().',copy:'Write: spread into new array, never push directly'}],
  tasks:[
    'Create ExpenseTracker.jsx',
    'State: expenses array of {id, title, amount}',
    'Form with title + amount inputs, adds to state on submit',
    'Render the list, with a delete button per row using filter()',
    'Show a live total using reduce()',
    'Push to GitHub: git commit -m "project: expense tracker"'
  ],
  tip:'This project is a great portfolio piece — small enough to finish, real enough to demo confidently in an interview.',
  next:'Git & GitHub',
  rubric:[
    'I built this without copy-pasting from an old lesson — I typed every line myself',
    'My Expense interface has no TypeScript errors when I add a new expense',
    'Adding and deleting an expense updates the live total correctly',
    'I tried passing the wrong type into a typed prop or state setter on purpose, and TypeScript caught it',
    'I can explain, out loud, why I typed useState the way I did'
  ]
},
// ───────────────────────── 20: GIT & GITHUB ─────────────────────────
{
  track:'git', phase:'Phase 4 — Git, Deployment & Job Ready', title:'Git & GitHub',
  desc:'You\'ve been committing after every lesson — now make sure you actually understand what those commands do, and learn branches and pull requests for real-world workflows.',
  badge:'b-amber', badgeText:'Every job uses Git daily',
  react:'No direct React link — this is the workflow skill every team expects regardless of framework.',
  steps:[
    {
      tag:'explain', title:'The core workflow',
      chat:[
        {who:'m',code:`git status        <span class="cm"># see what changed</span>\ngit add .         <span class="cm"># stage all changes</span>\ngit commit -m "message"  <span class="cm"># save a snapshot</span>\ngit push          <span class="cm"># upload to GitHub</span>\n\ngit checkout -b feature-cart   <span class="cm"># create + switch to a new branch</span>\ngit checkout main              <span class="cm"># switch back</span>`}
      ]
    },
    {
      tag:'question', title:'Why branches?',
      chat:[{who:'m',text:'Why would you create a separate branch instead of committing new feature work directly to main? 🎯'}],
      ph:'Branches matter because...',
      words:['isolate','break','safe','separate','main','stable','test'],
      good:'Right — branches let you build/test a feature without breaking the stable main branch. ✓',
      hint:'What happens if your half-finished feature breaks main, and someone else needs to deploy right now?'
    },
    {
      tag:'explain', title:'Merge conflicts',
      chat:[
        {who:'m',text:'A merge conflict happens when Git can\'t automatically combine two changes — usually because two branches edited the exact same lines of the same file. Git marks the conflicting section with <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, and <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> markers right inside the file.'},
        {who:'m',text:'You manually edit the file to keep the correct lines, delete the conflict markers, then <code>git add</code> + <code>git commit</code> to finish the merge.'}
      ]
    },
    {
      tag:'question', title:'Why conflicts happen',
      chat:[{who:'m',text:'Why does a merge conflict NOT mean something is broken or that you did something wrong? 🎯'}],
      ph:'A conflict just means...',
      words:['same lines','two','changed','both','overlap','decide'],
      good:'Right — it just means two people (or two branches) both changed the same lines, and Git needs a human to decide which version to keep. It\'s completely normal on a real team. ✓',
      hint:'Two branches both touched the exact same lines — Git genuinely can\'t guess which change you want kept. That\'s all a conflict means.'
    }
  ],
  notes:[{icon:'📌',text:'Workflow: branch → commit → push → pull request → merge into main.',copy:'Write: branch, commit, push, PR, merge'}],
  tasks:[
    'Create a new repo on GitHub and clone it locally',
    'Create a feature branch, make a small change, commit it',
    'Push the branch and open a Pull Request on GitHub',
    'Merge the PR and delete the branch',
    'Write a clear README.md for one of your existing projects'
  ],
  tip:'Interview Q: "Walk me through your Git workflow." Branch per feature, small commits with clear messages, PR for review, merge to main — say this confidently.',
  next:'Deployment (Vercel)'
},
// ───────────────────────── 21: DEPLOYMENT ─────────────────────────
{
  track:'git', phase:'Phase 4 — Git, Deployment & Job Ready', title:'Deployment (Vercel)',
  desc:'A project sitting only on your laptop doesn\'t count as a portfolio piece. Deploy your React projects so you can share a live link.',
  badge:'b-amber', badgeText:'A live link is worth more than a GitHub repo alone',
  react:'Vercel is built specifically for React/Next.js projects — connecting your GitHub repo gives automatic deployments on every push.',
  steps:[
    {tag:'explain', title:'Deploy in 3 steps', chat:[{who:'m',text:'1) Push your project to GitHub. 2) Go to vercel.com, sign in with GitHub, import the repo. 3) Vercel auto-detects a Vite/React project and deploys it — you get a live URL immediately.'}]},
    {
      tag:'question', title:'Why deploy every project?',
      chat:[{who:'m',text:'Why is a deployed live link more valuable to show a recruiter than just a GitHub repo link? 🎯'}],
      ph:'A live link is better because...',
      words:['see','try','demo','click','run','recruiter','instant'],
      good:'Right — recruiters can instantly try the app themselves without setting up the code locally. ✓',
      hint:'Would a busy recruiter rather clone and run your code, or click one link?'
    },
    {
      tag:'explain', title:'Environment variables',
      chat:[
        {who:'m',text:'If a project uses an API key, you never hardcode it directly in your source code — anyone viewing your public GitHub repo would see it. Instead, store it as an environment variable.'},
        {who:'m',code:`<span class="cm">// .env file (never committed to GitHub — add it to .gitignore)</span>\nVITE_API_KEY=your_key_here\n\n<span class="cm">// used in code:</span>\n<span class="kw">const</span> key = import.meta.env.VITE_API_KEY;`},
        {who:'m',text:'On Vercel, you add the same variable in Project Settings → Environment Variables, so it works in production too.'}
      ]
    },
    {
      tag:'question', title:'Why never commit API keys',
      chat:[{who:'m',text:'Why is committing an API key directly into a public GitHub repo a real problem, not just bad practice? 🎯'}],
      ph:'Because anyone could...',
      words:['steal','use','abuse','public','see','misuse','bill'],
      good:'Right — anyone can see and use it from your public repo, potentially running up usage charges on your account or abusing the service. ✓',
      hint:'Your GitHub repo (if public) is visible to literally anyone on the internet — what could a stranger do with your live API key?'
    }
  ],
  notes:[
    {icon:'📌',text:'Deploy every finished project to Vercel and put the live link in your README and resume.',copy:'Write: deploy every project, link it everywhere'},
    {icon:'📌',text:'Never hardcode API keys — use environment variables (.env locally, Project Settings on Vercel) and add .env to .gitignore.',copy:'Write: API keys go in env variables, never in code'}
  ],
  tasks:[
    'Deploy your Quiz App to Vercel',
    'Deploy your Movie Search App to Vercel, with its API key stored as an environment variable',
    'Deploy your typed Expense Tracker to Vercel',
    'Add live links + screenshots to each project\'s README',
    'Double check none of your GitHub repos have a hardcoded API key in the commit history'
  ],
  tip:'Interview Q: "How do you deploy a React app?" Push to GitHub, connect the repo to Vercel/Netlify, it auto-builds and deploys on every push to main.',
  next:'JS Coding Problems'
},
// ───────────────────────── 22: JS CODING PROBLEMS ─────────────────────────
{
  track:'portfolio', phase:'Phase 4 — Git, Deployment & Job Ready', title:'JS Coding Problems',
  desc:'Practice the small coding challenges that show up in technical screens — built entirely from array methods, loops, and functions you already know.',
  badge:'b-red', badgeText:'Technical screen practice',
  react:'No direct React link — these build raw problem-solving speed, which matters in any live coding round.',
  steps:[
    {
      tag:'explain', title:'A worked example',
      chat:[
        {who:'m',code:`<span class="cm">// Find the most expensive product</span>\n<span class="kw">function</span> <span class="fn">mostExpensive</span>(products) {\n  <span class="kw">return</span> products.<span class="fn">reduce</span>((max, p) =>\n    p.price > max.price ? p : max\n  );\n}`}
      ]
    },
    {
      tag:'challenge', title:'Your turn',
      chat:[{who:'m',text:'Write the logic (in words first) to find the AVERAGE price of all products. What two steps does this need? 🎯'}],
      ph:'Step 1: ___, Step 2: ___',
      words:['sum','total','reduce','divide','length','count'],
      good:'Right — sum all prices (reduce), then divide by the count (products.length). ✓',
      hint:'Average always needs: total of all values ÷ how many values there are.'
    }
  ],
  notes:[{icon:'📌',text:'Most JS interview problems are array method combos: filter+map, reduce for totals/max/min, sort for ordering.',copy:'Write: most JS problems = array method combos'}],
  tasks:[
    'Write a function to find the cheapest product',
    'Write a function to count how many products are in stock',
    'Write a function to sort products by price (ascending)',
    'Write a function to remove duplicate values from an array',
    'Time yourself solving each in under 10 minutes'
  ],
  tip:'In live coding rounds, think out loud — explain your approach before typing. Interviewers care more about your reasoning than a perfect first attempt.',
  next:'Resume Review'
},
// ───────────────────────── 23: RESUME REVIEW ─────────────────────────
{
  track:'portfolio', phase:'Phase 4 — Git, Deployment & Job Ready', title:'Resume Review',
  desc:'Update your resume to reflect everything you\'ve built — not just listed skills, but real, deployed, demoable projects.',
  badge:'b-pink', badgeText:'Turn your projects into resume bullets',
  react:'No direct React link — this is about presenting your React work effectively.',
  steps:[
    {
      tag:'question', title:'Strong vs weak bullets',
      chat:[{who:'m',text:'Which is a stronger resume bullet: "Used React and JavaScript" or "Built and deployed a React expense tracker with live state-driven totals — [link]"? Why? 🎯'}],
      ph:'The stronger one is the second because...',
      words:['specific','proof','concrete','demo','link','evidence'],
      good:'Right — specific, demoable, linked work beats vague skill lists every time. Recruiters trust proof over claims. ✓',
      hint:'Which one can a recruiter actually click and verify?'
    }
  ],
  notes:[{icon:'📌',text:'Resume bullet formula: what you built + what it does + the impact/skill it demonstrates + a live link.',copy:'Write: built X that does Y, using Z — [link]'}],
  tasks:[
    'List every deployed project with a one-line description and live link',
    'Rewrite each resume bullet using the formula: built X that does Y using Z',
    'Add a "Projects" section above or alongside "Skills" if it isn\'t already',
    'Get one honest review of your resume from a friend or mentor'
  ],
  tip:'Recruiters skim resumes in seconds — lead with your strongest deployed project, not a list of buzzwords.',
  next:'Project Presentation'
},
// ───────────────────────── 24: PROJECT PRESENTATION ─────────────────────────
{
  track:'portfolio', phase:'Phase 4 — Git, Deployment & Job Ready', title:'Project Presentation',
  desc:'Practice explaining your projects out loud, clearly and confidently — this is exactly what happens in interviews when they say "walk me through one of your projects."',
  badge:'b-pink', badgeText:'Practice explaining, not just building',
  react:'Directly tests whether you understand WHY you wrote your React code the way you did — not just that it works.',
  steps:[
    {
      tag:'challenge', title:'The 3-part structure',
      chat:[
        {who:'m',text:'A strong project walkthrough has 3 parts: (1) the problem it solves, (2) how you built it — components/state/data flow, (3) one challenge you hit and how you fixed it.'},
        {who:'m',text:'Pick your strongest project. Write a 1-sentence answer for each of the 3 parts. 🎯'}
      ],
      ph:'1) Problem: ... 2) How: ... 3) Challenge: ...',
      words:['problem','component','state','challenge','fixed','built'],
      good:'Good structure — having these 3 answers ready for each project makes interviews far less stressful. ✓',
      hint:'Just fill in the 3 blanks for your Capstone Project or your typed Expense Tracker — keep each sentence short.'
    }
  ],
  notes:[{icon:'📌',text:'Practice structure: problem solved → how you built it → one real challenge and the fix.',copy:'Write: problem, how, challenge+fix'}],
  tasks:[
    'Write the 3-part walkthrough for your 2 strongest projects',
    'Say each walkthrough out loud, timed under 2 minutes',
    'Record yourself once and watch it back',
    'Practice answering "why did you structure it that way?" for one project'
  ],
  tip:'Interviewers remember confident, structured explanations far more than perfect code. Practice out loud — it feels awkward at first, then becomes natural.',
  next:'Frontend Interview Questions'
},
// ───────────────────────── 25: FRONTEND INTERVIEW QUESTIONS ─────────────────────────
{
  track:'portfolio', phase:'Phase 4 — Git, Deployment & Job Ready', title:'Frontend Interview Questions',
  desc:'The most common JS/frontend conceptual questions, collected from every lesson so far. If you\'ve done the lessons, you already know these — this is about recall under pressure.',
  badge:'b-red', badgeText:'Review, not new material',
  react:'These feed directly into the React-specific round next.',
  steps:[
    {
      tag:'challenge', title:'Rapid review',
      chat:[
        {who:'m',text:'Answer these out loud, no notes: (1) let vs const vs var? (2) What is a closure? (3) map vs filter vs reduce? (4) == vs ===? (5) What is the DOM?'},
        {who:'m',text:'Which one of these 5 do you feel LEAST confident about right now? Be honest — that\'s today\'s focus. 🎯'}
      ],
      ph:'I feel least confident about...',
      words:['closure','map','filter','reduce','dom','let','const','var','equal'],
      good:'Good — naming your weak spot honestly is the whole point of this checkpoint. Go re-read that lesson\'s notes before moving on.',
      hint:'There\'s no wrong answer here — just pick whichever one you\'d struggle to explain to a stranger right now.'
    }
  ],
  notes:[{icon:'📌',text:'Keep a running list of the questions you hesitate on — review that list the night before any interview.',copy:'Write: track your weak spots, review before interviews'}],
  tasks:[
    'Write your own one-sentence answer to all 5 questions above from memory',
    'Re-read the lesson notes for your weakest topic',
    'Find 10 more common JS interview questions online and answer them in your notebook',
    'Time yourself answering 5 random questions in under 5 minutes total'
  ],
  tip:'Interviewers often ask these as quick warm-up questions before live coding. Fast, confident answers build momentum for the rest of the interview.',
  next:'React Interview Questions'
},
// ───────────────────────── 26: REACT INTERVIEW QUESTIONS ─────────────────────────
{
  track:'portfolio', phase:'Phase 4 — Git, Deployment & Job Ready', title:'React Interview Questions',
  desc:'React-specific conceptual questions that test whether you understand the framework, not just JSX syntax.',
  badge:'b-red', badgeText:'React-specific — separate from general JS',
  react:'This entire lesson is the React connection layer.',
  steps:[
    {
      tag:'challenge', title:'Rapid review',
      chat:[
        {who:'m',text:'Answer out loud: (1) What is useState and why not a plain variable? (2) What does the useEffect dependency array control? (3) What are props? (4) Why does a list need a unique key? (5) What is the virtual DOM?'},
        {who:'m',text:'Pick the one you\'re least confident on and write a 1-sentence answer now. 🎯'}
      ],
      ph:'My answer to my weakest one is...',
      words:['usestate','useeffect','props','key','virtual','dom','render','state'],
      good:'Good — write the full answer in your notebook tonight using your own words, not a copied definition.',
      hint:'Pick whichever of the 5 you\'d hesitate on if asked right now, and attempt a short honest answer.'
    }
  ],
  notes:[{icon:'📌',text:'Virtual DOM in one line: a lightweight in-memory copy of the DOM that React diffs against the previous version to update only what changed.',copy:'Write: virtual DOM = diff & update only what changed'}],
  tasks:[
    'Write your own answers to all 5 questions above from memory',
    'Explain the difference between useState and useEffect to someone (or out loud to yourself)',
    'Find 10 more React interview questions online and answer them in your notebook'
  ],
  tip:'If asked "what happens when you call setState," walk through: React schedules a re-render → compares virtual DOM → updates only the changed real DOM nodes.',
  next:'Mock Interviews'
},
// ───────────────────────── 27: MOCK INTERVIEWS ─────────────────────────
{
  track:'portfolio', phase:'Phase 4 — Git, Deployment & Job Ready', title:'Mock Interviews',
  desc:'The final step before applying: simulate the real thing under time pressure, combining everything — concepts, project walkthroughs, and live problem-solving.',
  badge:'b-green', badgeText:'You are job-ready after this',
  react:'No new concept — this is where everything from this entire roadmap gets tested together.',
  steps:[
    {
      tag:'challenge', title:'Run a full mock',
      chat:[
        {who:'m',text:'Structure a 30-minute mock interview for yourself (or with a friend): 5 min — walk through one project. 10 min — answer 5 rapid concept questions. 15 min — solve one coding problem out loud, explaining your thinking.'},
        {who:'m',text:'After running one mock, what is the ONE thing you most need to improve before a real interview? 🎯'}
      ],
      ph:'The one thing I need to improve is...',
      words:['speed','confidence','explain','clear','nervous','practice','time'],
      good:'Good — write this down and spend extra focused practice time on exactly that gap before applying.',
      hint:'Was it speed, clarity of explanation, nerves, or a specific concept you blanked on?'
    }
  ],
  notes:[{icon:'📌',text:'Run at least 2-3 full mock interviews before real applications — discomfort here is cheaper than in a real interview.',copy:'Write: practice mocks before real interviews'}],
  tasks:[
    'Run one full 30-minute mock interview using the structure above',
    'Note exactly where you hesitated or got stuck',
    'Fix that ONE gap with focused practice (re-do a lesson, re-read notes, redo a project explanation)',
    'Run a second mock interview and compare how it felt',
    'You are ready to start applying — update your dashboard and celebrate this milestone 🎉'
  ],
  tip:'Confidence comes from repetition, not perfection. By your third mock interview, the format itself stops being scary — only the questions vary.',
  next:'Pre-Capstone Revision: Everything Together'
},
// ───────────────────────── NEW: PRE-CAPSTONE REVISION ─────────────────────────
{
  track:'portfolio', phase:'Phase 4 — Git, Deployment & Job Ready', title:'Pre-Capstone Revision: Everything Together',
  desc:'The last checkpoint before the capstone. Pure recall, mixing JavaScript, React, and TypeScript — exactly the kind of mixed-topic recall a real interview throws at you.',
  badge:'b-red', badgeText:'Final retrieval check before the capstone',
  react:'The capstone draws on every phase at once — this lesson proves you can move between JS, React, and TS recall without re-reading anything.',
  steps:[
    {
      tag:'challenge', title:'Mixed recall — no notes',
      chat:[
        {who:'m',text:'Answer all 4 from memory: (1) What\'s a closure? (2) Why does a list need a key in React? (3) What\'s the difference between optional (?) and union (|) in TypeScript? (4) Why do we wrap fetch in try/catch?'},
        {who:'m',text:'Which ONE of these 4 took you longest to recall? Be honest. 🎯'}
      ],
      ph:'The one that took longest was...',
      words:['closure','key','optional','union','fetch','try','catch'],
      good:'Good — re-read that one topic\'s notes tonight. Everything else is solid enough to build the capstone on.',
      hint:'No wrong answer — just name whichever of the 4 you hesitated on.'
    }
  ],
  notes:[{icon:'📌',text:'This is your last chance to patch a gap before it shows up inside the capstone project, where it\'s harder to isolate.',copy:'Write down your one weak spot and fix it before starting the capstone'}],
  tasks:[
    'Re-read the notes for whichever topic you hesitated on above',
    'Write one-sentence answers to all 4 questions in your notebook, from memory',
    'Only move to the capstone once you can answer all 4 without hesitating'
  ],
  tip:'This kind of rapid-fire mixed recall — jumping between JS, React, and TS without warning — is exactly what real interviews do. Getting comfortable with the jump matters as much as knowing each answer.',
  next:'API Caching & Rate Limit Safety'
},
// ───────────────────────── NEW: API CACHING ─────────────────────────
{
  track:'portfolio', phase:'Phase 4 — Git, Deployment & Job Ready', title:'API Caching & Rate Limit Safety',
  desc:'The GitHub public API allows only 60 unauthenticated requests per hour. In a live interview demo with your capstone app, searching 5-6 usernames will get you locked out and crash your demo. This lesson teaches you how to cache API responses so each unique request only fires once per session.',
  badge:'b-amber', badgeText:'Demo safety — never crash in a live interview',
  react:'In-memory caching is pure JavaScript. sessionStorage caching is Web API. Together they prevent redundant network calls — this is the same principle behind React Query\'s stale-while-revalidate strategy.',
  steps:[
    {
      tag:'explain', title:'The problem — rate limits kill live demos',
      chat:[
        {who:'m',text:'The GitHub API public limit is 60 requests per hour per IP. Your Capstone searches a username — that fires 2 requests (profile + repos). Search 5 people = 10 requests. Show the app to an interviewer while they ask you to try 10 usernames = 20 requests. After that, GitHub returns a 403 and your demo is broken.'},
        {who:'m',text:'The fix is simple: the first time you search "torvalds", store the result. The second time you search "torvalds", return the stored result instantly without hitting the network.'}
      ]
    },
    {
      tag:'explain', title:'In-memory cache with a Map',
      chat:[
        {who:'m',code:`// cache.js — a simple Map that lives as long as the tab is open\nconst cache = new Map();\n\nexport async function fetchWithCache(url) {\n  if (cache.has(url)) {\n    console.log('Cache hit:', url); // no network request\n    return cache.get(url);\n  }\n  const res = await fetch(url);\n  if (!res.ok) throw new Error('Request failed: ' + res.status);\n  const data = await res.json();\n  cache.set(url, data); // store for next time\n  return data;\n}\n\n// Usage in your component:\nconst profile = await fetchWithCache(\`https://api.github.com/users/\${username}\`);\nconst repos   = await fetchWithCache(\`https://api.github.com/users/\${username}/repos\`);`},
        {who:'m',text:'The Map lives in module scope — it persists across renders and component re-mounts. Any URL already fetched returns instantly from memory. Searching the same username twice only costs 1 API call, not 2.'}
      ]
    },
    {
      tag:'question', title:'Cache hit vs miss',
      chat:[{who:'m',text:'You search "torvalds" → not cached yet, fetch fires, result stored. You search "torvalds" again. What happens to the network request? 🎯'}],
      ph:'The second search...',
      words:['cache','skip','no request','hit','map','stored','return'],
      good:'Right — cache.has(url) is true, so fetchWithCache returns the stored data immediately and no network request fires at all. ✓',
      hint:'Look at the if statement at the top of fetchWithCache — what happens when cache.has(url) is true?'
    },
    {
      tag:'explain', title:'sessionStorage for persistence across refreshes',
      chat:[
        {who:'m',code:`// Persistent cache — survives page refresh, clears when tab closes\nexport async function fetchWithSessionCache(url) {\n  const stored = sessionStorage.getItem(url);\n  if (stored) return JSON.parse(stored); // instant, no network\n\n  const res = await fetch(url);\n  if (!res.ok) throw new Error(res.status);\n  const data = await res.json();\n  sessionStorage.setItem(url, JSON.stringify(data));\n  return data;\n}`},
        {who:'m',text:'sessionStorage survives page refresh (within the same tab) but clears when the tab closes. For an interview demo this is ideal — you refresh to reset your demo, and the cache resets too. Use in-memory Map when you want reset-on-refresh, sessionStorage when you want to survive refreshes.'}
      ]
    },
    {
      tag:'modify', title:'Modify the code',
      chat:[
        {who:'m',code:`// Current useFetch — no caching, fires network every time\nconst res = await fetch(url);\nconst data = await res.json();\nsetData(data);`},
        {who:'m',text:'Modify this so it checks sessionStorage first, and only fetches if the URL is not cached. Write the check + store lines. 🎯'}
      ],
      ph:'const stored = sessionStorage.getItem(url); if (stored) { setData(JSON.parse(stored)); return; }',
      words:['sessionStorage','getItem','parse','stored'],
      good:'Right — check sessionStorage.getItem(url) first. If stored, parse it and setData directly. If not, fetch, then sessionStorage.setItem(url, JSON.stringify(data)) after. ✓',
      hint:'sessionStorage.getItem(url) returns the stored string, or null if not found. Use JSON.parse() to turn the string back into an object.'
    }
  ],
  notes:[
    {icon:'📌',text:'In-memory Map cache: fast, resets on page refresh. sessionStorage cache: persists through refresh, clears on tab close.',copy:'Write: Map = in-memory, sessionStorage = persists in tab'},
    {icon:'📌',text:'Check cache BEFORE fetch. Store result AFTER successful fetch. Always handle the case where the cached value might be stale.',copy:'Write: check cache first, store after fetch'},
    {icon:'📌',text:'GitHub public API: 60 requests/hr unauthenticated. 2 requests per search. Cache prevents hitting the limit during a demo.',copy:'Write: cache GitHub responses to stay under rate limit'}
  ],
  tasks:[
    'Create src/utils/cache.js with the fetchWithCache function using a Map',
    'Replace all raw fetch() calls in your Capstone components with fetchWithCache',
    'Open DevTools Network tab, search a username twice — confirm only 1 request fires total',
    'Add a "Clear Cache" button for demo purposes (just calls cache.clear())',
    'Push to GitHub: git commit -m "caching: prevent API rate limit hits"'
  ],
  tip:'Interview Q: "How would you prevent redundant API calls?" This is the answer — client-side request memoisation. Bonus mention: React Query / TanStack Query does this automatically with a configurable stale time. Knowing the manual implementation shows you understand the concept behind the library.',
  next:'Capstone Project: GitHub Profile Explorer'
},
// ───────────────────────── 18: FINAL PROJECT — GITHUB PROFILE EXPLORER ─────────────────────────
{
  track:'project', phase:'Capstone', title:'Capstone Project: GitHub Profile Explorer',
  desc:'This is the payoff for every phase you completed: JavaScript, React, and TypeScript, combined into one real, resume-worthy app. Search any GitHub username and display their profile, repos, followers, and stats using the real GitHub API — no API key needed, instantly demoable.',
  badge:'b-pink', badgeText:'Capstone — built with JS + React + TypeScript together',
  react:'This project IS the React connection — every prior lesson feeds directly into this build: state for the search input, useEffect + fetch for the API call, map() to render the repo list, and conditional rendering for loading/error/empty states.',
  steps:[
    {tag:'explain', title:'The brief', chat:[
      {who:'m',text:'Use the free public GitHub API: <code>https://api.github.com/users/USERNAME</code> for profile info, and <code>https://api.github.com/users/USERNAME/repos</code> for their repositories. No auth required for basic use.'},
      {who:'m',text:'Build: a search input, a profile card (avatar, name, bio, followers, public repo count), and a list of their repos sorted by stars.'}
    ]},
    {
      tag:'question', title:'Plan your components', chat:[{who:'m',text:'Before coding, list at least 4 components this app needs (e.g. SearchBar, ProfileCard...). 🎯'}],
      ph:'SearchBar, ..., ..., ...',
      words:['searchbar','profilecard','repolist','repocard','header','search'],
      good:'Good breakdown — splitting into focused components like this is exactly how real apps are structured. ✓',
      hint:'Think about each visible piece of UI: a search bar, a profile card, a list of repos, maybe a repo card per item...'
    },
    {
      tag:'question', title:'Handling a bad username', chat:[{who:'m',text:'GitHub returns a 404 if the username doesn\'t exist. What should the user see on screen in that case? 🎯'}],
      ph:'Show a message like...',
      words:['not found','error','exist','invalid','message'],
      good:'Right — a clear "User not found" message beats a blank screen or a console error every time. ✓',
      hint:'Never leave the UI blank on an error — always show a clear message explaining what happened.'
    }
  ],
  notes:[
    {icon:'📌',text:'Plan your component tree before writing code — it prevents one giant messy file.',copy:'Write: plan components before coding'},
    {icon:'📌',text:'Always handle the 404/error case explicitly — check res.ok before parsing JSON.',copy:'Write: check res.ok, handle errors explicitly'}
  ],
  tasks:[
    'Sketch the component tree on paper first',
    'Build SearchBar — state-driven input with a search button',
    'Fetch https://api.github.com/users/USERNAME and render a ProfileCard (avatar, name, bio, followers, repo count)',
    'Fetch https://api.github.com/users/USERNAME/repos and render a sorted-by-stars repo list',
    'Show a loading state while fetching and a clear "User not found" message on 404',
    'Deploy is covered in the next phase — for now, run locally and try it with a few real usernames',
    'Push to GitHub: git commit -m "final project: GitHub Profile Explorer"'
  ],
  tip:'When presenting this in an interview, walk through your component tree and explain WHY you split it that way — structure matters more than perfect styling. Bonus: search your own GitHub username live during the demo.',
  next:'You are job ready 🎉',
  rubric:[
    'I built this without copy-pasting from an old lesson — I typed every line myself',
    'Searching a real GitHub username shows their actual profile and repos live',
    'Searching a username that does not exist shows a clear error, not a crash',
    'My code is split into more than one component, and I can explain why I split it that way',
    'It is deployed to a live URL I could hand to a recruiter right now',
    'I can walk through this project out loud, unscripted, in under 2 minutes'
  ]
},
];
