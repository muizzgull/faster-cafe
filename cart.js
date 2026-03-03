const products = [
    { id: 1, name: "Patty Burger", price: 320, image: "patty-burger.png", category: "Burgers" },
    { id: 2, name: "Crunch Burger", price: 320, image: "cruch-burger.png", category: "Burgers" },
    { id: 3, name: "Grilled Burger", price: 490, image: "grilled-burger.png", category: "Burgers" },
    { id: 4, name: "Grilled King Burger", price: 650, image: "grilled-king-burger.png", category: "Burgers" },
    { id: 5, name: "Zinger Burger", price: 390, image: "zinger-burger.png", category: "Burgers" },
    { id: 6, name: "Monster Fillet", price: 550, image: "monster-fillet-burger.png", category: "Burgers" },
    { id: 7, name: "Double Decker", price: 650, image: "doube-decker-burger.png", category: "Burgers" },
    { id: 8, name: "Chicken Tikka", price: 1090, image: "chicken-tikka.jpeg", category: "Pizza" },
    { id: 9, name: "Chicken Fajita", price: 1090, image: "chicken-fajita-pizza.jpeg", category: "Pizza" },
    { id: 10, name: "Faster Special Pizza", price: 1250, image: "faster-special-pizza.jpeg", category: "Pizza" },
    { id: 11, name: "Chicken Mexican Pizza", price: 1150, image: "chicken-mexican-pizza.jpeg", category: "Pizza" },
    { id: 12, name: "Hot & Spicy Pizza", price: 1150, image: "hot-n-spicy-pizza.jpeg", category: "Pizza" },
    { id: 13, name: "Super Supreme Pizza", price: 1150, image: "super-supreme-pizza.jpeg", category: "Pizza" },
    { id: 14, name: "BBQ Lover Pizza", price: 1150, image: "bbq-lover-pizza.jpeg", category: "Pizza" },
    { id: 15, name: "Cheese Lover Pizza", price: 1150, image: "cheese-lover-pizza.jpeg", category: "Pizza" },
    { id: 904, name: "Malai Pizza", price: 1150, image: "malai-pizza.jpeg", category: "Signature Pizza" },
    { id: 905, name: "Doner Pizza", price: 1150, image: "doner-pizza.jpeg", category: "Signature Pizza" },
    { id: 906, name: "Kebab Crust Pizza", price: 1150, image: "kebab-crust-pizza.jpeg", category: "Signature Pizza" },
    { id: 907, name: "Behari Pizza", price: 1150, image: "behari-kebab-pizza.jpeg", category: "Signature Pizza" },
    { id: 908, name: "Crown Crust Pizza", price: 1150, image: "crown-crust-pizza.jpeg", category: "Signature Pizza" },
    { id: 101, name: "Chicken Shawarma", price: 260, image: "chicken-shawarma.PNG", category: "Shawarmas" },
    { id: 102, name: "Zinger Shawarma", price: 390, image: "zinger-chicken-shawarma.PNG", category: "Shawarmas" },
    { id: 103, name: "Grilled Shawarma", price: 390, image: "grilled-chicken-shawarma.PNG", category: "Shawarmas" },
    { id: 104, name: "Open Chicken Shawarma", price: 490, image: "open-chicken-shawarma.PNG", category: "Shawarmas" },
    { id: 201, name: "Chicken Paratha Roll", price: 290, image: "chicken-paratha.png", category: "Paratha Rolls" },
    { id: 202, name: "Zinger Paratha Roll", price: 400, image: "zinger-paratha.png", category: "Paratha Rolls" },
    { id: 203, name: "Grilled Paratha Roll", price: 430, image: "grilled-paratha.png", category: "Paratha Rolls" },
    { id: 2001, name: "Deal 1: <br> 1 Patty Burger + 1 Fries + Drink", price: 430, image: "deal1.PNG", category: "Deals" },
    { id: 2002, name: "Deal 2: <br> 1 Zinger Burger + 1 Fries + Drink", price: 550, image: "deal2.PNG", category: "Deals" },
    { id: 2003, name: "Deal 3: <br> 1 Grilled Burger + 1 Fries + Drink", price: 650, image: "deal3.PNG", category: "Deals" },
    { id: 2004, name: "Deal 4: <br> 2 Zinger Burgers + 2 Fries + 2 Drinks", price: 990, image: "deal4.PNG", category: "Deals" },
    { id: 2005, name: "Deal 5: <br> 2 Grilled Burgers + 2 Fries + 2 Drinks", price: 1150, image: "deal5.PNG", category: "Deals" },
    { id: 2006, name: "Deal 6: <br> 4 Zinger Burgers + 1 Fries + 1.5L", price: 1850, image: "deal6.PNG", category: "Deals" },
    { id: 3001, name: "Special Deal 1: <br> 2 Pizza Fries + 2 Drinks", price: 1050, image: "special-deal1.png", category: "Special Deals" },
    { id: 3002, name: "Special Deal 2: <br> 2 Small Pizzas + 2 Drinks", price: 1050, image: "special-deal2.jpeg", category: "Special Deals" },
    { id: 3003, name: "Special Deal 3: <br> 3 Crunch Burgers + 1L Drink ", price: 1050, image: "special-deal3.png", category: "Special Deals" },
    { id: 3004, name: "Special Deal 4: <br> 4 Shawarmas + 1L Drink", price: 1050, image: "special-deal4.png", category: "Special Deals" },
    { id: 3005, name: "Special Deal 5: <br> 2 Patty Burgers + 1 Fries", price: 590, image: "special-deal5.png", category: "Special Deals" },
    { id: 3006, name: "Special Deal 6: <br> 1 Monster Fillet + Drink", price: 650, image: "special-deal6.jpeg", category: "Special Deals" },
    { id: 4001, name: "Pizza Deal 1: <br> 1 Medium Pizza + 1 Drink(500 ml)", price: 1090, image: "pizza-deal1.jpeg", category: "Pizza Deals" },
    { id: 4002, name: "Pizza Deal 2: <br> 1 Large Pizza + 1 Liter Drink", price: 1590, image: "pizza-deal2.jpeg", category: "Pizza Deals" },
    { id: 4003, name: "Pizza Deal 3: <br> 2 Medium + 5 hot Wings + 1.5 liter Drink", price: 2590, image: "pizza-deal3.jpeg", category: "Pizza Deals" },
    { id: 4004, name: "Pizza Deal 4: <br> 1 XL + 10 Wings + 1.5 Liter Drink", price: 2820, image: "pizza-deal4.jpeg", category: "Pizza Deals" },
    { id: 4005, name: "Pizza Deal 5: <br> 2 Large + 1.5 Liter Drink", price: 2990, image: "pizza-deal5.jpeg", category: "Pizza Deals" },
    { id: 4006, name: "Pizza Deal 6: <br> 1 Small Pizza + 1 Drink(NR)", price: 650, image: "pizza-deal1.jpeg", category: "Pizza Deals" },
    { id: 251, name: "Chicken Wrap", price: 550, image: "chicken-wrap.png", category: "Wraps" },
    { id: 252, name: "Grilled Fillet Wrap", price: 550, image: "grilled-fillet-wrap.png", category: "Wraps" },
    { id: 253, name: "Zinger Wrap", price: 490, image: "zinger-wrap.png", category: "Wraps" },
    { id: 451, name: "Plain Fries", price: 250, image: "fries.PNG", category: "Fries" },
    { id: 452, name: "Loaded Fries", price: 650, image: "loaded-fries.PNG", category: "Fries" },
    { id: 453, name: "Pizza Fries", price: 490, image: "pizza-fries.PNG", category: "Fries" },
    { id: 601, name: "Chicken Hot Wings", price: 350, image: "chicke-wings.PNG", category: "Hot Wings" },
    { id: 602, name: "Oven Baked Wings", price: 350, image: "chicken-baked-wings.PNG", category: "Hot Wings" },
    { id: 603, name: "Honey Wings", price: 390, image: "chicken-honey-wings.PNG", category: "Hot Wings" },
    { id: 604, name: "Malai Wings", price: 390, image: "chicken-malai-wings.PNG", category: "Hot Wings" },
    { id: 701, name: "Chicken Nuggets", price: 300, image: "chicken-nuggets.PNG", category: "Nuggets" },
    { id: 703, name: "Chicken Strips", price: 420, image: "chicken-strips.PNG", category: "Chicken Strips" },
    { id: 801, name: "NR - Drink", price: 90, image: "nr-drink.jpeg", category: "Drinks" },
    { id: 802, name: "Half Liter Drink", price: 140, image: "half-liter-drink.jpeg", category: "Drinks" },
    { id: 803, name: "1 Liter Drink", price: 180, image: "one-liter-drink.jpeg", category: "Drinks" },
    { id: 804, name: "1.5 Liter Drink", price: 250, image: "one-5-liter-drink.jpeg", category: "Drinks" },
    { id: 805, name: "Mint Margarita", price: 250, image: "mint-margaritta.png", category: "Drinks" },
    { id: 806, name: "Strawberry Lime", price: 150, image: "strawberry-lime.png", category: "Drinks" },
    { id: 807, name: "Fresh Lime", price: 200, image: "fresh-lime.png", category: "Drinks" },
    // { id: 804, name: "NR - Drink", price: 90, image: "nr-drink.jpeg", category: "Drinks" },
    // { id: 805, name: "Half Liter Drink", price: 140, image: "half-liter-drink.jpeg", category: "Drinks" },
    // { id: 806, name: "1 Liter Drink", price: 180, image: "one-liter-drink.jpeg", category: "Drinks" },
    // { id: 807, name: "1.5 Liter Drink", price: 250, image: "fresh-lime.png", category: "Drinks" },
    { id: 403, name: "Cheese Stick", price: 320, image: "cheese-stick.png", category: "Others" },
    { id: 404, name: "Alfredo Pasta", price: 350, image: "pasta.png", category: "Others" }
];

let cart = JSON.parse(localStorage.getItem('faster_cafe_cart')) || [];
let currentItem = null;

function injectNavbar() {
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (!navPlaceholder) return;
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    navPlaceholder.innerHTML = `
    <header class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-[1000] border-b border-gray-100 px-4 md:px-6 py-4">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="index.html">
                <img class="w-32 md:w-48" src="logo.png" alt="FASTER CAFE">
            </a>
            <nav class="flex gap-4 md:gap-8 items-center font-bold text-[10px] md:text-xs uppercase tracking-widest">
                <a href="index.html" class="hover:text-[#E72229] transition">Home</a>
                <a href="orders.html" class="hover:text-[#E72229] transition">Orders</a>
                <a href="cart.html" class="relative flex items-center gap-2 hover:text-[#E72229] transition">
                    Cart <span id="cart-count" class="bg-[#E72229] text-white text-[8px] md:text-[10px] w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full">${cartCount}</span>
                </a>
            </nav>
        </div>
    </header>`;
}

function displayProducts(category = 'All') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        const bText = btn.innerText.replace(/[^\x00-\x7F]/g, "").trim().toLowerCase();
        const sCat = category.toLowerCase();
        
        btn.classList.remove('active-cat');
        btn.classList.add('text-gray-400');

        const isMatch = 
            bText === sCat || 
            (sCat === 'signature pizza' && bText === 'signature') || 
            (sCat === 'paratha rolls' && bText === 'paratha') || 
            (sCat === 'special deals' && bText === 'special') || 
            (sCat === 'hot wings' && bText === 'wings') ||
            (sCat === 'chicken strips' && bText === 'strips') || 
            (sCat === 'deals' && bText === 'deals');

        if (isMatch) {
            btn.classList.add('active-cat');
            btn.classList.remove('text-gray-400');
        }
    });

    let htmlContent = "";
    
    // Custom order for categories when "All" is selected
    const categoryOrder = [
        "Pizza", "Signature Pizza", "Burgers", "Deals", "Special Deals", 
        "Pizza Deals", "Fries", "Nuggets", "Hot Wings", "Chicken Strips", 
        "Wraps", "Shawarmas", "Paratha Rolls", "Drinks", "Others"
    ];

    const cats = category === 'All' ? categoryOrder : [category];
    
    cats.forEach(cat => {
        const filtered = products.filter(p => p.category === cat);
        if (filtered.length > 0) {
            htmlContent += `<div class="col-span-full mt-28 md:mt-48 mb-4 md:mb-6"><h2 class="text-xl md:text-3xl font-black italic uppercase border-l-4 md:border-l-8 border-[#E72229] pl-3 md:pl-4 text-black">${cat}</h2></div>`;
            htmlContent += filtered.map(product => {
                const needsModal = ["Pizza", "Signature Pizza", "Hot Wings", "Nuggets", "Chicken Strips"].includes(product.category) || (product.category === "Fries" && product.name !== "Loaded Fries");
                return `
                <div class="bg-white p-3 md:p-6 rounded-[25px] md:rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col justify-between h-full">
                    <div class="h-32 md:h-48 flex items-center justify-center overflow-hidden mb-3 rounded-2xl">
                        <img src="${product.image}" class="max-h-full w-auto object-cover transition duration-500" onerror="this.src='https://via.placeholder.com/300?text=Food'">
                    </div>
                    <div>
                        <h3 class="text-xs md:text-lg font-black uppercase italic leading-tight mb-1 line-clamp-2">${product.name}</h3>
                        <p class="text-gray-400 text-[7px] md:text-[9px] font-black uppercase mb-2">${product.category}</p>
                        <p class="text-[#E72229] font-black text-sm md:text-xl">${needsModal ? 'From ' : ''}Rs. ${product.price}</p>
                        <button onclick="handleAddToCart(${product.id})" class="mt-3 w-full bg-black text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[8px] md:text-[10px] hover:bg-[#E72229] transition uppercase">
                            ${needsModal ? 'SELECT' : 'ADD'}
                        </button>
                    </div>
                </div>`;
            }).join('');
        }
    });
    grid.innerHTML = htmlContent;
}

function handleAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    const needsModal = ["Pizza", "Signature Pizza", "Hot Wings", "Nuggets", "Chicken Strips"].includes(product.category) || (product.category === "Fries" && product.name !== "Loaded Fries");
    if (needsModal) openModal(product); else addToCart(productId);
}

function openModal(product) {
    currentItem = product; 
    const modal = document.getElementById('pizza-modal'), optionsContainer = document.getElementById('pizza-options');
    document.getElementById('modal-pizza-name').innerText = product.name;
    let opt = "";
    
    if (product.category === "Pizza") {
        opt = `${renderOption('Small', 590)} ${renderOption('Medium', 1090, true)} ${renderOption('Large', 1590)} ${renderOption('X-Large', 2190)}`;
    } else if (product.category === "Signature Pizza") {
        opt = `${renderOption('Medium', 1150, true)} ${renderOption('Large', 1650)} ${renderOption('X-Large', 2250)}`;
    } else if (product.category === "Hot Wings") {
        if (product.name.includes("Honey") || product.name.includes("Malai")) {
            opt = `${renderOption('5 Pcs', 390, true)} ${renderOption('10 Pcs', 790)}`;
        } else {
            opt = `${renderOption('5 Pcs', 350, true)} ${renderOption('10 Pcs', 690)}`;
        }
    } else if (product.category === "Fries") {
        opt = product.name === "Pizza Fries" ? `${renderOption('Regular', 490, true)} ${renderOption('Large', 790)}` : `${renderOption('Regular', 250, true)} ${renderOption('Large', 350)}`;
    } else if (product.category === "Nuggets") {
        opt = `${renderOption('5 Pieces', 350, true)} ${renderOption('10 Pieces', 650)}`;
    } else if (product.category === "Chicken Strips") {
        opt = `${renderOption('3 Pieces', 450, true)} ${renderOption('5 Pieces', 690)}`;
    }
    
    optionsContainer.innerHTML = opt;
    modal.classList.replace('hidden', 'flex'); 
    setTimeout(() => modal.querySelector('.modal-content').classList.remove('scale-90', 'opacity-0'), 10);
}

function renderOption(label, price, checked = false) {
    return `<label class="flex items-center justify-between p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl cursor-pointer border-2 border-transparent has-[:checked]:border-[#E72229] transition"><div class="flex items-center gap-2 md:gap-3"><input type="radio" name="item-choice" value="${label}" data-price="${price}" ${checked ? 'checked' : ''} class="w-4 h-4 accent-[#E72229]"><span class="font-bold text-[10px] md:text-sm uppercase">${label}</span></div><span class="font-black text-[#E72229] text-xs md:text-base">Rs. ${price}</span></label>`;
}

function closePizzaModal() { const modal = document.getElementById('pizza-modal'); modal.querySelector('.modal-content').classList.add('scale-90', 'opacity-0'); setTimeout(() => modal.classList.replace('flex', 'hidden'), 300); }

function confirmPizzaSelection() {
    const s = document.querySelector('input[name="item-choice"]:checked'); if (!s) return;
    const newItem = { ...currentItem, id: `${currentItem.id}-${s.value}`, name: `${currentItem.name} (${s.value})`, price: parseInt(s.getAttribute('data-price')), quantity: 1 };
    const ex = cart.find(i => i.id === newItem.id); if (ex) ex.quantity += 1; else cart.push(newItem);
    save(); closePizzaModal(); showToast(`${newItem.name} Added!`);
}

function addToCart(productId) {
    const p = products.find(i => i.id === productId); const ex = cart.find(i => i.id === productId);
    if (ex) ex.quantity += 1; else cart.push({ ...p, quantity: 1 });
    save(); showToast(`${p.name} Added!`);
}

function save() { localStorage.setItem('faster_cafe_cart', JSON.stringify(cart)); if (document.getElementById('cart-count')) document.getElementById('cart-count').innerText = cart.reduce((s, i) => s + i.quantity, 0); }

function showToast(msg) {
    const t = document.getElementById('toast'); if (!t) return;
    t.querySelector('span').innerText = msg; t.classList.replace('hidden', 'flex'); t.classList.replace('opacity-0', 'opacity-100');
    setTimeout(() => { t.classList.replace('opacity-100', 'opacity-0'); setTimeout(() => t.classList.replace('flex', 'hidden'), 300); }, 2000);
}