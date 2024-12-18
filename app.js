document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById("menu-items");
    const cartContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const themeButton = document.getElementById("theme-btn");
    const searchInput = document.getElementById("search");
    const checkoutButton = document.getElementById("checkout-btn");

    let menuData = [
        { "id": 1, "name": "Bruschetta", "category": "appetizers", "price": 8.99 },
        { "id": 2, "name": "Margherita Pizza", "category": "main-course", "price": 12.99 },
        { "id": 3, "name": "Tiramisu", "category": "desserts", "price": 6.99 },
        { "id": 4, "name": "Lemonade", "category": "drinks", "price": 3.99 },
        { "id": 5, "name": "Pasta Carbonara", "category": "main-course", "price": 14.99 }
    ];
    
    let cart = [];

    // Render menu items
    function renderMenuItems(items) {
        menuContainer.innerHTML = "";
        items.forEach(item => {
            const div = document.createElement("div");
            div.className = "menu-item";
            div.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
            `;
            menuContainer.appendChild(div);
        });
    }

    // Add to cart
    function addToCart(id) {
        const item = menuData.find(item => item.id === id);
        if (item) {
            cart.push(item);
            updateCart();
        } else {
            console.error('Item not found in menu data');
        }
    }

    // Update cart display
    function updateCart() {
        cartContainer.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            const li = document.createElement("li");
            li.className = "cart-item";
            li.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                <button class="remove-from-cart" data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(li);
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    // Remove from cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    // Filter menu
    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const category = e.target.dataset.category;
            const filteredItems = category === "all" ? menuData : menuData.filter(item => item.category === category);
            renderMenuItems(filteredItems);
        });
    });

    // Search functionality
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredItems = menuData.filter(item => item.name.toLowerCase().includes(searchTerm));
        renderMenuItems(filteredItems);
    });

    // Theme switcher
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            document.documentElement.style.setProperty('--text-color', '#fff');
        } else {
            document.documentElement.style.setProperty('--text-color', '#333');
        }
    });

    // Initial render
    renderMenuItems(menuData);

    // Event delegation for dynamic content
    menuContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            addToCart(parseInt(event.target.dataset.id));
        }
    });

    cartContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-from-cart')) {
            removeFromCart(parseInt(event.target.dataset.index));
        }
    });

    // Checkout functionality (placeholder)
    checkoutButton.addEventListener("click", () => {
        alert("Checkout process would start here. Total: $" + totalPriceElement.textContent);
    });
});