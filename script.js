// Sample menu data
const menuData = [
    { id: 1, name: "Bruschetta", category: "Appetizers", price: 8, details: "Toasted bread with tomatoes", image: "" },
    { id: 2, name: "Grilled Chicken", category: "Main Course", price: 15, details: "Chicken with herbs", image: "" },
    { id: 3, name: "Cheesecake", category: "Desserts", price: 6, details: "Creamy cheesecake", image: "" },
    { id: 4, name: "Lemonade", category: "Drinks", price: 4, details: "Fresh lemonade", image: "" }
  ];
  
  let cart = [];
  let total = 0;
  
  // DOM Elements
  const menuSection = document.getElementById("menu-section");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const searchBar = document.getElementById("search-bar");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("close-modal");
  
  // Display Menu Items
  function displayMenu(data) {
    menuSection.innerHTML = "";
    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "menu-item";
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Category: ${item.category}</p>
        <p>$${item.price}</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
        <button onclick="showDetails(${item.id})">Details</button>
      `;
      menuSection.appendChild(div);
    });
  }
  
  // Add to Cart
  function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    cart.push(item);
    total += item.price;
    updateCart();
  }
  
  // Update Cart
  function updateCart() {
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(li);
    });
    cartTotal.textContent = total.toFixed(2);
  }
  
  // Search Items
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    const filtered = menuData.filter(item => item.name.toLowerCase().includes(query));
    displayMenu(filtered);
  });
  
  // Filter Categories
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;
      const filtered = category === "All" ? menuData : menuData.filter(item => item.category === category);
      displayMenu(filtered);
    });
  });
  
  // Show Details Modal
  function showDetails(id) {
    const item = menuData.find(i => i.id === id);
    document.getElementById("modal-title").textContent = item.name;
    document.getElementById("modal-details").textContent = item.details;
    document.getElementById("modal-price").textContent = `$${item.price}`;
    modal.classList.remove("hidden");
  }
  
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  // Initial Load
  displayMenu(menuData);
  