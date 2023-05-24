

  // Cart counter variable
  let cartCount = 0;

  // Function to add item to cart
  function addToCart(button) {
    button.disabled = true; // Disable the "Add to cart" button
    button.nextElementSibling.disabled = false; // Enable the "Remove from cart" button
    cartCount++; // Increment cart count
    updateCartBadge(); // Update the cart badge
  }

  // Function to remove item from cart
  function removeFromCart(button) {
    button.disabled = true; // Disable the "Remove from cart" button
    button.previousElementSibling.disabled = false; // Enable the "Add to cart" button
    cartCount--; // Decrement cart count
    updateCartBadge(); // Update the cart badge
  }

  // Function to update the cart badge
  function updateCartBadge() {
    const cartBadge = document.getElementById("cart-badge");
    cartBadge.textContent = cartCount.toString(); // Update the badge value
  }

