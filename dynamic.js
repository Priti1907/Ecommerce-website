// dynamic.js

document.addEventListener('DOMContentLoaded', () => {
    // Sample data for demonstration; replace this with actual data source
    const itemData = {
        'T-shirt': {
            title: "Levi's T-Shirt",
            price: "from $30 / T-shirts",
            image: "Image/T-shirt.png",
        },
        'shoes': {
            title: "Adidas Originals",
            price: "from $150 / shoes",
            image: "Image/shoes.png",
        },
        'women-T-shirt': {
            title: "Women's T-Shirt",
            price: "from $300 / T-Shirt",
            image: "Image/women-T-shirt.png",
        },
        'palmAngels': {
            title: "Palm Angels",
            price: "from $230 / Jackets",
            image: "Image/palmAngels.png",
        },
        'Shirt': {
            title: "T-shirts",
            price: "from $230 / T-shirt Womens",
            image: "Image/shirt.png",
        }
    };

    // Get the item ID from the URL query string
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get('item');

    // Get the item data from the itemData object
    const item = itemData[itemId];

    if (item) {
        // Update the HTML elements with item details
        document.getElementById('itemTitle').textContent = item.title;
        document.getElementById('itemPrice').textContent = item.price;
        document.getElementById('itemImage').src = item.image;
    } else {
        // Handle case where item data is not found
        document.getElementById('itemTitle').textContent = "Item Not Found";
        document.getElementById('itemPrice').textContent = "";
        document.getElementById('itemImage').src = "Image/not-found.png";
    }
});
