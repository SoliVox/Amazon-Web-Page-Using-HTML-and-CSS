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
  const signInBtn = $('.newcustomer button');
  signInBtn?.addEventListener('click', () => {
    alert('Sign in functionality would be implemented here');
    // In a real application, this would open a sign-in modal or redirect
  });

  // Location update functionality
  const locationBtn = $('.set_location');
  locationBtn?.addEventListener('click', function() {
    const newLocation = prompt('Enter your pincode:', '800020');
    if (newLocation) {
      const locationText = this.querySelector('.first-line');
      if (locationText) locationText.textContent = `Delivering to ${newLocation}`;
    }
  });

  // Shop Now / See More buttons functionality
  $$('.card > a').forEach(button => {
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
  $$('.menuBar ul a').forEach(item => {
    item.addEventListener('click', function(e) {
      if (!this.classList.contains('all-menu-btn')) {
        e.preventDefault();
        console.log('Navigating to:', this.textContent.trim());
        // In a real application, this would navigate to different sections
      }
    });
  });

  // All Categories Menu functionality
  const allMenuBtn = $('.all-menu-btn');
  const allCategoriesMenu = $('#allCategoriesMenu');
  const menuOverlay = $('#menuOverlay');
  const closeMenuBtn = $('#closeMenuBtn');

  // Open All Categories Menu
  allMenuBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    allCategoriesMenu?.classList.add('active');
    menuOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close Menu function
  const closeAllCategoriesMenu = () => {
    allCategoriesMenu?.classList.remove('active');
    menuOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeMenuBtn?.addEventListener('click', closeAllCategoriesMenu);
  menuOverlay?.addEventListener('click', closeAllCategoriesMenu);

  // Close menu with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && allCategoriesMenu && allCategoriesMenu.classList.contains('active')) {
      closeAllCategoriesMenu();
    }
  });

  // Category items click handler
  $$('.categories-list a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const categoryName = link.textContent.trim();
      console.log('Category selected:', categoryName);
      alert('Navigating to: ' + categoryName);
      closeAllCategoriesMenu();
      // In a real application, this would navigate to category pages
    });
  });

  // Location availability check functionality
  $('.location-check')?.addEventListener('click', () => {
    const pincode = prompt('Enter your pincode to check product availability:', '800020');
    if (pincode?.trim() && /^\d{6}$/.test(pincode)) {
      alert(`✓ Checking availability for pincode: ${pincode}\n\nProducts are available for delivery to this location!`);
      const mainLocation = $('.set_location .first-line');
      if (mainLocation) mainLocation.textContent = `Delivering to ${pincode}`;
    } else if (pincode) {
      alert('Please enter a valid 6-digit pincode.');
    }
  });

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
