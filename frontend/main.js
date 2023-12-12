const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");

// Function to fetch all products and display them
async function fetchProducts() {
  try {
    const response = await fetch("/products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }
}

// Function to display products
function displayProducts(products) {
  productList.innerHTML = "";
  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.textContent = `Product: ${product.name}, Price: ${product.price}`;
    productList.appendChild(productItem);
  });
}

// Event listener for form submission
productForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;

  try {
    const response = await fetch("/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: productName, price: productPrice }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Product added:", result);
      fetchProducts(); // Refresh product list after adding a new product
    } else {
      console.error("Failed to add product");
    }
  } catch (error) {
    console.error("Error adding product:", error.message);
  }
});

// Fetch and display products on page load
window.addEventListener("load", () => {
  fetchProducts();
});
