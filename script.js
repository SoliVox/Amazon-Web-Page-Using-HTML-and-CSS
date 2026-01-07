// Amazon Frontend JavaScript
'use strict';

// Utility function for element selection
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => parent.querySelectorAll(selector);

// Smooth scroll to top functionality
document.addEventListener('DOMContentLoaded', () => {
  
  // Back to top button
  const backTopBtn = $('.backTop');
  backTopBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Search functionality
  const searchIcon = $('.search');
  const searchInput = $('.search_box input');
  
  const performSearch = () => {
    const query = searchInput?.value.trim();
    if (query) {
      console.log('Searching for:', query);
      alert(`Searching for: ${query}`);
      // In a real application, this would trigger a search
    }
  };

  searchIcon?.addEventListener('click', performSearch);
  searchInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });

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
      // Don't prevent default for all-menu-btn as it's handled separately
      if (!this.classList.contains('all-menu-btn')) {
        e.preventDefault();
        if (this.textContent.trim()) {
          console.log('Navigating to: ' + this.textContent.trim());
          // In a real application, this would navigate to different sections
        }
      }
    });
  });

  // All Categories Menu functionality
  const allMenuBtn = document.querySelector('.all-menu-btn');
  const allCategoriesMenu = document.getElementById('allCategoriesMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenuBtn = document.getElementById('closeMenuBtn');

  // Open All Categories Menu
  if (allMenuBtn) {
    allMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (allCategoriesMenu && menuOverlay) {
        allCategoriesMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    });
  }

  // Close Menu function
  function closeAllCategoriesMenu() {
    if (allCategoriesMenu && menuOverlay) {
      allCategoriesMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    }
  }

  // Close menu with close button
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeAllCategoriesMenu);
  }

  // Close menu when clicking overlay
  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeAllCategoriesMenu);
  }

  // Close menu with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && allCategoriesMenu && allCategoriesMenu.classList.contains('active')) {
      closeAllCategoriesMenu();
    }
  });

  // Category items click handler
  const categoryLinks = document.querySelectorAll('.categories-list a');
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const categoryName = this.textContent.trim();
      console.log('Category selected: ' + categoryName);
      alert('Navigating to: ' + categoryName);
      closeAllCategoriesMenu();
      // In a real application, this would navigate to category pages
    });
  });

  // Location availability check functionality
  const locationCheck = document.querySelector('.location-check');
  if (locationCheck) {
    locationCheck.addEventListener('click', function() {
      const pincode = prompt('Enter your pincode to check product availability:', '800020');
      if (pincode && pincode.trim() !== '') {
        // Validate pincode (simple 6-digit validation)
        if (/^\d{6}$/.test(pincode)) {
          alert(`✓ Checking availability for pincode: ${pincode}\n\nProducts are available for delivery to this location!`);
          // Update the main location display
          const mainLocation = document.querySelector('.set_location .first-line');
          if (mainLocation) {
            mainLocation.textContent = `Delivering to ${pincode}`;
          }
        } else {
          alert('Please enter a valid 6-digit pincode.');
        }
      }
    });
  }

  // Quick links functionality
  $$('.quickLink ul a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Quick link clicked:', link.textContent.trim());
      // In a real application, this would navigate to fashion categories
    });
  });

  // Console welcome message
  console.log('%c Welcome to Amazon Clone! ', 'background: #232f3e; color: #fff; font-size: 16px; padding: 10px;');
  console.log('%c This is a frontend demo ', 'background: #febd69; color: #000; font-size: 14px; padding: 5px;');
});
