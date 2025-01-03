class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const products = [
    new Product("Laptop", 999.99, 5),
    new Product("Smartphone", 499.99, 10),
    new Product("Tablet", 299.99, 0),
    new Product("Smartwatch", 199.99, 3)
];

// Task 1: Calculate the total inventory value
function calculateTotalInventoryValue(products) {
    let totalValue = 0;
    for (let product of products) {
        totalValue += product.price * product.quantity;
    }
    return totalValue.toFixed(2);
}

// Task 2: Find the most expensive product
function findMostExpensiveProduct(products) {
    let mostExpensiveProduct = products[0];
    for (let product of products) {
        if (product.price > mostExpensiveProduct.price) {
            mostExpensiveProduct = product;
        }
    }
    return mostExpensiveProduct.name;
}

// Task 3: Check if a product is in stock
function isProductInStock(productName, products) {
    for (let product of products) {
        if (product.name === productName) {
            return product.quantity > 0;
        }
    }
    return false;
}

// Task 4: Sort products by price or quantity
function sortProducts(products, sortBy, ascending = true) {
    return products.sort((a, b) => {
        if (sortBy === 'price') {
            return ascending ? a.price - b.price : b.price - a.price;
        } else if (sortBy === 'quantity') {
            return ascending ? a.quantity - b.quantity : b.quantity - a.quantity;
        }
    });
}

// Example usage:

console.log("Total Inventory Value:", calculateTotalInventoryValue(products));
console.log("Most Expensive Product:", findMostExpensiveProduct(products));
console.log("Is 'Headphones' in stock?", isProductInStock("Headphones", products));
console.log("Products Sorted by Price (Ascending):", sortProducts(products, 'price'));
console.log("Products Sorted by Quantity (Descending):", sortProducts(products, 'quantity', false));
