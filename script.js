// Amazon Frontend JavaScript

// Smooth scroll to top functionality
document.addEventListener('DOMContentLoaded', function() {
  
  // Back to top button
  const backTopBtn = document.querySelector('.backTop');
  if (backTopBtn) {
    backTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Search functionality
  const searchIcon = document.querySelector('.search');
  const searchInput = document.querySelector('.search_box input');
  
  if (searchIcon && searchInput) {
    searchIcon.addEventListener('click', function() {
      if (searchInput.value.trim() !== '') {
        alert('Searching for: ' + searchInput.value);
        // In a real application, this would trigger a search
      }
    });

    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && searchInput.value.trim() !== '') {
        alert('Searching for: ' + searchInput.value);
        // In a real application, this would trigger a search
      }
    });
  }

  // Sign in button
  const signInBtn = document.querySelector('.newcustomer button');
  if (signInBtn) {
    signInBtn.addEventListener('click', function() {
      alert('Sign in functionality would be implemented here');
      // In a real application, this would open a sign-in modal or redirect
    });
  }

  // Add hover effects to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'none';
    });
  });

  // Location update functionality
  const locationBtn = document.querySelector('.set_location');
  if (locationBtn) {
    locationBtn.addEventListener('click', function() {
      const newLocation = prompt('Enter your pincode:', '800020');
      if (newLocation) {
        const locationText = this.querySelector('.first-line');
        if (locationText) {
          locationText.textContent = `Delivering to ${newLocation}`;
        }
      }
    });
  }

  // Shopping cart counter (example)
  let cartCount = 0;
  const cartBtn = document.querySelector('.cart');
  
  // Add a cart badge
  if (cartBtn && !cartBtn.querySelector('.cart-count')) {
    const cartBadge = document.createElement('span');
    cartBadge.className = 'cart-count';
    cartBadge.textContent = cartCount;
    cartBadge.style.cssText = `
      position: absolute;
      top: 5px;
      right: 5px;
      background-color: #f08804;
      color: white;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      font-size: 11px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    cartBtn.style.position = 'relative';
    cartBtn.appendChild(cartBadge);
  }

  // Shop Now / See More buttons functionality
  const shopButtons = document.querySelectorAll('.card > a');
  shopButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const cardHeading = this.parentElement.querySelector('.cardHeading');
      if (cardHeading) {
        alert('Viewing: ' + cardHeading.textContent);
      }
      // In a real application, this would navigate to a product page
    });
  });

  // Menu bar items
  const menuItems = document.querySelectorAll('.menuBar ul a');
  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      if (this.textContent.trim()) {
        console.log('Navigating to: ' + this.textContent.trim());
        // In a real application, this would navigate to different sections
      }
    });
  });

  // Quick links functionality
  const quickLinks = document.querySelectorAll('.quickLink ul a');
  quickLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Quick link clicked: ' + this.textContent);
      // In a real application, this would navigate to fashion categories
    });
  });

  // Console welcome message
  console.log('%c Welcome to Amazon Clone! ', 'background: #232f3e; color: #fff; font-size: 16px; padding: 10px;');
  console.log('%c This is a frontend demo ', 'background: #febd69; color: #000; font-size: 14px; padding: 5px;');
});

// Add search input if it doesn't exist
window.addEventListener('load', function() {
  const searchBox = document.querySelector('.search_box');
  if (searchBox && !searchBox.querySelector('input')) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search Amazon.in';
    searchBox.insertBefore(input, searchBox.querySelector('.camera_search'));
  }
});
