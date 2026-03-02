// --- PRODUCT DATABASE ---
const products = [
    { id: 1, name: "Patty Burger", price: 320, image: "patty-burger.png", category: "Burgers" },
    { id: 2, name: "Crunch Burger", price: 320, image: "cruch-burger.png", category: "Burgers" },
    { id: 3, name: "Grilled Burger", price: 490, image: "grilled-burger.png", category: "Burgers" },
    { id: 4, name: "Grilled King Burger", price: 650, image: "grilled-king-burger.png", category: "Burgers" },
    { id: 5, name: "Zinger Burger", price: 390, image: "zinger-burger.png", category: "Burgers" },
    { id: 6, name: "Monster Fillet", price: 550, image: "monster-fillet-burger.png", category: "Burgers" },
    { id: 7, name: "Double Decker", price: 650, image: "doube-decker-burger.png", category: "Burgers" },

    { id: 8, name: "Chicken Tikka", price: 1090, image: "chicken-tikka-pizza.PNG", category: "Pizza" },
    { id: 9, name: "Chicken Fajita", price: 1090, image: "chicken-fajita-pizza.PNG", category: "Pizza" },
    { id: 10, name: "Faster Special Pizza", price: 1250, image: "faster-special-pizza.PNG", category: "Pizza" },
    { id: 11, name: "Chicken Mexican Pizza", price: 1150, image: "chicken-mexican-pizza.PNG", category: "Pizza" },
    { id: 12, name: "Hot & Spicy Pizza", price: 1150, image: "hot-n-spicy-pizza.PNG", category: "Pizza" },
    { id: 13, name: "Super Supreme Pizza", price: 1150, image: "super-supreme-pizza.PNG", category: "Pizza" },
    { id: 14, name: "BBQ Lover Pizza", price: 1150, image: "bbq-lover-pizza.PNG", category: "Pizza" },
    { id: 15, name: "Cheese Lover Pizza", price: 1150, image: "cheese-lover-pizza.PNG", category: "Pizza" },

    { id: 904, name: "Malai Pizza", price: 1150, image: "malai-pizza.PNG", category: "Signature Pizza" },
    { id: 905, name: "Doner Pizza", price: 1150, image: "doner-pizza.PNG", category: "Signature Pizza" },
    { id: 906, name: "Kebab Crust Pizza", price: 1150, image: "kebab-crust-pizza.PNG", category: "Signature Pizza" },
    { id: 907, name: "Behari Pizza", price: 1150, image: "behari-kebab-pizza.PNG", category: "Signature Pizza" },
    { id: 908, name: "Crown Crust Pizza", price: 1150, image: "crown-crust-pizza.PNG", category: "Signature Pizza" },

    { id: 101, name: "Chicken Shawarma", price: 260, image: "chicken-shawarma.PNG", category: "Shawarmas" },
    { id: 102, name: "Zinger Shawarma", price: 390, image: "chicken-shawarma.PNG", category: "Shawarmas" },
    { id: 103, name: "Grilled Shawarma", price: 390, image: "chicken-shawarma.PNG", category: "Shawarmas" },
    { id: 104, name: "Open Chicken Shawarma", price: 490, image: "chicken-shawarma.PNG", category: "Shawarmas" },

    { id: 201, name: "Chicken Paratha Roll", price: 290, image: "chicken-paratha.png", category: "Paratha Rolls" },
    { id: 202, name: "Zinger Paratha Roll", price: 400, image: "chicken-paratha.png", category: "Paratha Rolls" },
    { id: 203, name: "Grilled Paratha Roll", price: 430, image: "chicken-paratha.png", category: "Paratha Rolls" },

    { id: 2001, name: "Deal 1: <br> 1 Patty Burger + 1 Fries + 1 Reg Drink", price: 430, image: "deal1.PNG", category: "Deals" },
    { id: 2002, name: "Deal 2: <br> 1 Zinger Brger + 1 Fries + 1 Reg Drink", price: 550, image: "deal2.PNG", category: "Deals" },
    { id: 2003, name: "Deal 3: <br> 1 Grilled Burger + 1 Fries + 1 Reg Drink", price: 650, image: "deal3.PNG", category: "Deals" },
    { id: 2004, name: "Deal 4: <br> 2 Zinger Burgers + 1 Fries + 2 NR Drinks", price: 990, image: "deal4.PNG", category: "Deals" },
    { id: 2005, name: "Deal 5: <br> 2 Grilled Burgers + 1 Fries + 2 NR Drinks", price: 1150, image: "deal5.PNG", category: "Deals" },
    { id: 2006, name: "Deal 6: <br> 4 Zinger Burgers + 1 Fries + 1.5 Ltr Drink(1)", price: 1850, image: "deal6.PNG", category: "Deals" },
    
    { id: 3001, name: "Special Deal 1: <br> 2 Pizza Fries + 2 NR Drinks", price: 1050, image: "special-deal1.jpeg", category: "Special Deals" },
    { id: 3002, name: "Special Deal 2: <br> 2 Small Pizzas + 2 Nr Drinks", price: 1050, image: "special-deal2.jpeg", category: "Special Deals" },
    { id: 3003, name: "Special Deal 3: <br> 3 Crunch Burgers + 1 Ltr Drink ", price: 1050, image: "special-deal3.jpeg", category: "Special Deals" },
    { id: 3004, name: "Special Deal 4: <br> 4 Shawarmas + 1 Ltr Drink", price: 1050, image: "special-deal4.jpeg", category: "Special Deals" },
    { id: 3005, name: "Special Deal 5: <br> 2 Patty Burgers + 1 Fries", price: 590, image: "special-deal5.jpeg", category: "Special Deals" },
    { id: 3006, name: "Special Deal 6: <br> 1 Monster Fillet Burger + 1 NR Drink", price: 650, image: "special-deal6.jpeg", category: "Special Deals" },

    { id: 4001, name: "Pizza Deal 1: <br> 1 Medium Pizza + 1 Drink(500ml)", price: 1090, image: "pizza-deal1.PNG", category: "Pizza Deals" },
    { id: 4002, name: "Pizza Deal 2: <br> 1 Large Pizza + 1 Ltr Drink", price: 1590, image: "pizza-deal2.PNG", category: "Pizza Deals" },
    { id: 4003, name: "Pizza Deal 3: <br> 2 Medium Pizza + 5 Hot Wings + 1.5 Ltr Drink", price: 2590, image: "pizza-deal3.PNG", category: "Pizza Deals" },
    { id: 4004, name: "Pizza Deal 4: <br> 1 XL Pizza + 10 Wings + 1.5 Ltr Drink", price: 2820, image: "pizza-deal4.PNG", category: "Pizza Deals" },
    { id: 4005, name: "Pizza Deal 5: <br> 2 Large Pizza + 1.5 Ltr Drink", price: 2990, image: "pizza-deal5.PNG", category: "Pizza Deals" },
    { id: 4006, name: "Pizza Deal 6: <br> 1 Small Pizza + 1 Drink(NR)", price: 650, image: "pizza-deal1.PNG", category: "Pizza Deals" },

    { id: 251, name: "Chicken Wrap", price: 550, image: "chicken-wrap.png", category: "Wraps" },
    { id: 252, name: "Grillet Fillet Wrap", price: 550, image: "chicken-wrap.png", category: "Wraps" },
    { id: 253, name: "Breaded Fillet Wrap", price: 550, image: "chicken-wrap.png", category: "Wraps" },
    
    { id: 451, name: "Plain Fries", price: 250, image: "fries.PNG", category: "Fries" },
    { id: 452, name: "Loaded Fries", price: 650, image: "pizza-fries.PNG", category: "Fries" },
    { id: 453, name: "Pizza Fries", price: 490, image: "pizza-fries.PNG", category: "Fries" },

    { id: 601, name: "Chicken Hot Wings", price: 350, image: "hot-wings.PNG", category: "Hot Wings" },
    { id: 602, name: "Oven Baked Wings", price: 350, image: "hot-wings.PNG", category: "Hot Wings" },
    { id: 603, name: "Honey Wings", price: 390, image: "hot-wings.PNG", category: "Hot Wings" },
    { id: 604, name: "Malai Wings", price: 390, image: "hot-wings.PNG", category: "Hot Wings" },

    { id: 701, name: "Chicken Nuggets - 5 pcs", price: 300, image: "nuggets.PNG", category: "Nuggets" },
    { id: 702, name: "Chicken Nuggets - 10 pcs", price: 590, image: "nuggets.PNG", category: "Nuggets" },
    { id: 703, name: "Chicken Strips - 5 pcs", price: 420, image: "chicken-strips.PNG", category: "Chicken Strips" },
    { id: 704, name: "Chicken Strips - 10 pcs", price: 790, image: "chicken-strips.PNG", category: "Chicken Strips" },

    { id: 801, name: "Mint Margarita", price: 250, image: "mint-margaritta.png", category: "Drinks" },
    { id: 802, name: "Fresh Lime", price: 250, image: "fresh-lime.png", category: "Drinks" },
    { id: 803, name: "Strawberry Lime", price: 250, image: "strawberry-lime.png", category: "Drinks" },

    { id: 403, name: "Alfredo Pasta", price: 350, image: "pasta.png", category: "Others" },
    { id: 404, name: "Cheese Stick", price: 320, image: "cheese-stick.png", category: "Others" }
];

let cart = JSON.parse(localStorage.getItem('faster_cafe_cart')) || [];
let currentItem = null;

function injectNavbar() {
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (!navPlaceholder) return;
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    navPlaceholder.innerHTML = `
    <header class="fixed top-0 w-full bg-white/90 backdrop-blur-md z-[100] border-b border-gray-100 px-6 py-4">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="index.html" class="text-2xl font-black text-[#E72229] italic tracking-tighter">FASTER<span class="text-black">CAFE</span></a>
            <nav class="flex gap-8 items-center font-bold text-xs uppercase tracking-widest">
                <a href="index.html" class="hover:text-[#E72229] transition">Home</a>
                <a href="orders.html" class="hover:text-[#E72229] transition">Orders</a>
                <a href="cart.html" class="relative flex items-center gap-2 hover:text-[#E72229] transition">
                    Cart <span id="cart-count" class="bg-[#E72229] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">${cartCount}</span>
                </a>
            </nav>
        </div>
    </header>`;
}

function displayProducts(category = 'All') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        const btnText = btn.innerText.trim().toLowerCase();
        const searchCat = category.toLowerCase();
        
        btn.classList.remove('active-cat', 'text-[#E72229]', 'border-[#E72229]');
        btn.classList.add('text-gray-400');

        if (btnText === searchCat || 
           (searchCat === 'signature pizza' && btnText === 'signature') ||
           (searchCat === 'paratha rolls' && btnText === 'paratha') ||
           (searchCat === 'special deals' && btnText === 'special') ||
           (searchCat === 'pizza deals' && btnText === 'pizza deals') ||
           (searchCat === 'hot wings' && btnText === 'wings')) {
            btn.classList.add('active-cat');
            btn.classList.remove('text-gray-400');
        }
    });

    let htmlContent = "";
    const cats = category === 'All' ? [...new Set(products.map(p => p.category))] : [category];

    cats.forEach(cat => {
        const filtered = products.filter(p => p.category === cat);
        if (filtered.length > 0) {
            htmlContent += `<div class="col-span-full mt-10 mb-6"><h2 class="text-3xl font-black italic uppercase border-l-8 border-[#E72229] pl-4 text-black">${cat}</h2></div>`;
            htmlContent += filtered.map(product => {
                const needsModal = ["Pizza", "Signature Pizza", "Hot Wings", "Nuggets", "Chicken Strips"].includes(product.category) || (product.category === "Fries" && product.name !== "Loaded Fries");
                const priceLabel = needsModal ? `From Rs. ${product.price}` : `Rs. ${product.price}`;

                // CHECK IF IMAGE SHOULD BE BIGGER
                const isBig = ["Others", "Drinks", "Wraps", "Paratha Rolls"].includes(product.category);
                const imgContainerClass = isBig ? "h-54" : "h-54";
                const imgClass = isBig ? "w-64 h-full object-cover" : "w-32 object-contain";

                return `
                <div class="bg-white p-6 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                    <div class="${imgContainerClass} flex items-center justify-center overflow-hidden mb-4 rounded-3xl">
                        <img src="${product.image}" class="${imgClass} group-hover:scale-110 transition duration-500" onerror="this.src='https://via.placeholder.com/300?text=Food'">
                    </div>
                    <h3 class="text-lg font-black uppercase italic leading-tight mb-1">${product.name}</h3>
                    <p class="text-gray-400 text-[9px] font-black uppercase tracking-widest mb-2">${product.category}</p>
                    <p class="text-[#E72229] font-black text-xl">${priceLabel}</p>
                    <button onclick="handleAddToCart(${product.id})" class="mt-4 w-full bg-black text-white py-4 rounded-2xl font-black text-[10px] hover:bg-[#E72229] transition uppercase">
                        ${needsModal ? 'SELECT OPTIONS' : 'ADD TO CART'}
                    </button>
                </div>`;
            }).join('');
        }
    });
    grid.innerHTML = htmlContent;
}

// REST OF THE FUNCTIONS REMAIN THE SAME
function handleAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    const needsModal = ["Pizza", "Signature Pizza", "Hot Wings", "Nuggets", "Chicken Strips"].includes(product.category) || (product.category === "Fries" && product.name !== "Loaded Fries");
    if (needsModal) { openModal(product); } else { addToCart(productId); }
}

function openModal(product) {
    currentItem = product;
    const modal = document.getElementById('pizza-modal');
    const optionsContainer = document.getElementById('pizza-options');
    document.getElementById('modal-pizza-name').innerText = product.name;
    let optionsHtml = "";
    if (product.category === "Pizza") { optionsHtml = `${renderOption('Small', 590)} ${renderOption('Medium', 1090, true)} ${renderOption('Large', 1590)} ${renderOption('X-Large', 2190)}`; } 
    else if (product.category === "Signature Pizza") { optionsHtml = `${renderOption('Medium', 1150, true)} ${renderOption('Large', 1650)} ${renderOption('X-Large', 2250)}`; } 
    else if (product.category === "Hot Wings") { if(product.name.includes("Honey") || product.name.includes("Malai")) { optionsHtml = `${renderOption('Small', 390, true)} ${renderOption('Large', 790)}`; } else { optionsHtml = `${renderOption('5 Pieces', product.price, true)} ${renderOption('10 Pieces', 690)}`; } } 
    else if (product.category === "Fries") { if(product.name === "Pizza Fries") { optionsHtml = `${renderOption('Regular', 490, true)} ${renderOption('Large', 790)}`; } else if (product.name === "Plain Fries") { optionsHtml = `${renderOption('Regular', 250, true)} ${renderOption('Large', 350)}`; } } 
    else if (product.category === "Nuggets") { optionsHtml = `${renderOption('5 Pieces', 350, true)} ${renderOption('10 Pieces', 650)}`; } 
    else if (product.category === "Chicken Strips") { optionsHtml = `${renderOption('3 Pieces', 450, true)} ${renderOption('5 Pieces', 690)}`; }
    optionsContainer.innerHTML = optionsHtml;
    modal.classList.remove('hidden'); modal.classList.add('flex');
    setTimeout(() => modal.querySelector('.modal-content').classList.remove('scale-90', 'opacity-0'), 10);
}

function renderOption(label, price, checked = false) {
    return `
        <label class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl cursor-pointer border-2 border-transparent has-[:checked]:border-[#E72229] has-[:checked]:bg-red-50 transition">
            <div class="flex items-center gap-3">
                <input type="radio" name="item-choice" value="${label}" data-price="${Math.round(price)}" ${checked ? 'checked' : ''} class="w-5 h-5 accent-[#E72229]">
                <span class="font-bold text-sm uppercase">${label}</span>
            </div>
            <span class="font-black text-[#E72229]">Rs. ${Math.round(price)}</span>
        </label>`;
}

function closePizzaModal() {
    const modal = document.getElementById('pizza-modal');
    modal.querySelector('.modal-content').classList.add('scale-90', 'opacity-0');
    setTimeout(() => { modal.classList.add('hidden'); modal.classList.remove('flex'); }, 300);
}

function confirmPizzaSelection() {
    const selected = document.querySelector('input[name="item-choice"]:checked');
    if (!selected) return;
    const choice = selected.value;
    const price = parseInt(selected.getAttribute('data-price'));
    const uniqueId = `${currentItem.id}-${choice}`;
    const newItem = { ...currentItem, id: uniqueId, name: `${currentItem.name} (${choice})`, price: price, quantity: 1 };
    const existing = cart.find(item => item.id === uniqueId);
    if (existing) existing.quantity += 1; else cart.push(newItem);
    save(); closePizzaModal(); showToast(`${newItem.name} Added!`);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity += 1; else cart.push({ ...product, quantity: 1 });
    save(); showToast(`${product.name} Added!`);
}

function save() {
    localStorage.setItem('faster_cafe_cart', JSON.stringify(cart));
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) cartCountEl.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.querySelector('span').innerText = msg;
        toast.classList.replace('hidden', 'flex');
        toast.classList.replace('opacity-0', 'opacity-100');
        setTimeout(() => {
            toast.classList.replace('opacity-100', 'opacity-0');
            setTimeout(() => toast.classList.replace('flex', 'hidden'), 300);
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    injectNavbar();
    if (document.getElementById('product-grid')) displayProducts('All');
});