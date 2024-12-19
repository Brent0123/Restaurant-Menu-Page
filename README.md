# BOURBON Restaurant Interactive Menu

This project creates an interactive menu for BOURBON Restaurant with features for searching, filtering, adding to cart, and toggling between light and dark themes.

## Features
- **Interactive Menu**: Users can view a list of menu items categorized by type.
- **Search**: Ability to search menu items.
- **Filter**: Filter items by categories like appetizers, main course, desserts, and drinks.
- **Cart Management**: Add items to a shopping cart, view the total, and remove items from the cart.
- **Theme Toggle**: Switch between light and dark themes for better user experience.

## Project Structure
.
├── index.html
├── styles.css
├── app.js
├── db.json
└── README.md

## Installation
To get started with this project, follow these steps:

1. **Clone the Repository** or download the files to your local machine.
2. **Set Up a Local Server**: Use tools like `live-server`, `http-server`, or Python's `http.server` to serve the files. This is necessary to avoid CORS issues when fetching `db.json`.

## Running the Project
- Open your browser and navigate to the URL where your local server is running.

## Technologies Used
- **HTML5** for structuring the page.
- **CSS3** for styling, including responsive design elements.
- **ECMAScript 6 (ES6)** with modern JavaScript features for functionality.
- **JSON** for menu data storage.

## Usage
### Menu Items
- Admins can edit `db.json` to add or modify menu items. 
- Categories can be filtered using the buttons provided in the UI.

### Shopping Cart
- Add items to the cart by clicking the "Add to Cart" buttons.
- Remove items from the cart with the "Remove" buttons.
- View the total price dynamically as items are added or removed.

### Search and Filter
- Use the search input to find items by name.
- Filter items by category using the category buttons.

### Theme Switching
- Toggle between light and dark themes using the theme button.

## Development Notes
- The JavaScript is modular, with functions for rendering the menu, updating the cart, toggling themes, filtering, and searching.
- The `DOMContentLoaded` event is used to ensure all DOM elements are loaded before attaching event listeners.
- Event delegation is used for dynamically added 'Add to Cart' and 'Remove from Cart' buttons for efficiency.

## Contributing
1. **Fork this repository** to make your changes.
2. **Create a new branch** for each feature or bug fix (`git checkout -b new-feature`).
3. **Commit your changes** (`git commit -m 'Add some feature'`).
4. **Push to the branch** (`git push origin new-feature`).
5. **Create a new Pull Request**.

## License
This project is open source and available under the [MIT License](LICENSE).

---

Feel free to explore, modify, and contribute to the project. If you run into any issues or have suggestions, please open an issue or raise a pull request.