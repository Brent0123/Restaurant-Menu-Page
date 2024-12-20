document.addEventListener('DOMContentLoaded', () => {
    // Selecting DOM elements
    const menuContainer = document.getElementById("menu-items");
    const cartContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const themeButton = document.getElementById("theme-btn");
    const searchInput = document.getElementById("search");
    const checkoutButton = document.getElementById("checkout-btn");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close");

    // Initial menu data, should be fetched from server in real scenarios
    let menuData = [
        { "id": 1, "name": "Bruschetta", "category": "appetizers", "price": 8.99 },
        { "id": 2, "name": "Margherita Pizza", "category": "main-course", "price": 12.99 },
        { "id": 3, "name": "Tiramisu", "category": "desserts", "price": 6.99 },
        { "id": 4, "name": "Lemonade", "category": "drinks", "price": 3.99 },
        { "id": 5, "name": "Pasta Carbonara", "category": "main-course", "price": 14.99 }
    ];
    
    let cart = [];

    // Function to render menu items
    function renderMenuItems(items) {
        menuContainer.innerHTML = "";
        items.forEach(item => {
            const div = document.createElement("div");
            div.className = "menu-item";
            // Creating buttons with data attributes for identification
            div.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                <button class="view-details" data-id="${item.id}">Details</button>
            `;
            menuContainer.appendChild(div);
        });
    }

    // Function to add item to cart
    function addToCart(id) {
        const item = menuData.find(item => item.id === id);
        if (item) {
            cart.push(item);
            updateCart();
        } else {
            console.error('Item not found in menu data');
        }
    }

    // Function to update cart display
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

    // Function to remove item from cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    // Event listener for filtering menu items
    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const category = e.target.dataset.category;
            const filteredItems = category === "all" ? menuData : menuData.filter(item => item.category === category);
            renderMenuItems(filteredItems);
        });
    });

    // Event listener for search functionality
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredItems = menuData.filter(item => item.name.toLowerCase().includes(searchTerm));
        renderMenuItems(filteredItems);
    });

    // Event listener for theme switching
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // Initial render of menu items
    renderMenuItems(menuData);

    // Event delegation for dynamic content
    menuContainer.addEventListener('click', function(event) {
        // Check if the clicked element is the add to cart button
        if (event.target.classList.contains('add-to-cart')) {
            addToCart(parseInt(event.target.dataset.id));
        } 
        // Check if the clicked element is the view details button
        else if (event.target.classList.contains('view-details')) {
            showDetails(parseInt(event.target.dataset.id));
        }
    });

    cartContainer.addEventListener('click', function(event) {
        // Check if the clicked element is the remove from cart button
        if (event.target.classList.contains('remove-from-cart')) {
            removeFromCart(parseInt(event.target.dataset.index));
        }
    });

    // Function to show item details in modal
    function showDetails(id) {
        const item = menuData.find(item => item.id === id);
        if (item) {
            modalTitle.textContent = item.name;
            modalDescription.textContent = `Category: ${item.category}\nPrice: $${item.price.toFixed(2)}\nDetails: This is a placeholder for more details about ${item.name}.`;
            modal.style.display = "block";
        }
    }

    // Event listener to close modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Event listener to close modal if clicked outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Checkout functionality (placeholder)
    checkoutButton.addEventListener("click", () => {
        alert("Checkout process would start here. Total: $" + totalPriceElement.textContent);
    });
});