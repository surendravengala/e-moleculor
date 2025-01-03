// Top Bar Slider
function initializeSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderTexts = document.querySelectorAll('.slider-text');
    let currentIndex = 0;

    function slideText() {
        currentIndex = (currentIndex + 1) % sliderTexts.length;
        sliderContainer.style.transform =  `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(slideText, 3000);
}

// Cart Functionality
function initializeCart() {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    const cartNotification = document.querySelector('.cart .notification');
    let cartCount = 0;

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartNotification.textContent = cartCount;
            cartNotification.style.display = 'block';
        });
    });
}

// Wishlist Functionality
function initializeWishlist() {
    const wishlistIcons = document.querySelectorAll('.wishlist-icon');
    const wishlistNotification = document.querySelector('.wishlist .notification');
    let wishlistCount = 0;

    wishlistIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            wishlistCount++;
            wishlistNotification.textContent = wishlistCount;
            wishlistNotification.style.display = 'block';
        });
    });
}

// Add this to your existing script.js
function initializeNewDropsPage() {
    // Wishlist functionality
    const wishlistButtons = document.querySelectorAll('.wishlist-icon');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            updateWishlistCount();
        });
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update cart notification
            const cartNotification = document.querySelector('.cart .notification');
            const currentCount = parseInt(cartNotification.textContent);
            cartNotification.textContent = currentCount + 1;
            cartNotification.style.display = 'block';
            
            // Optional: Add animation or feedback
            button.textContent = 'Added to Cart';
            setTimeout(() => {
                button.textContent = 'Add to Cart';
            }, 2000);
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
    initializeCart();
    initializeWishlist();
    if (document.querySelector('.new-drops-page')) {
        initializeNewDropsPage();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const closeMenu = document.querySelector('.close-menu');

    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('active');
    });

    // Close menu when clicking the close button
    closeMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.remove('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdownMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            dropdownMenu.classList.remove('active');
        }
    });

    // Prevent dropdown from closing when clicking inside it
    dropdownMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Profile Card Functionality
document.addEventListener('DOMContentLoaded', function() {
    const profileIcon = document.querySelector('.icon.profile');
    const profileCard = document.querySelector('.profile-card');

    if (profileIcon && profileCard) {
        // Toggle profile card
        profileIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
        });

        // Close profile card when clicking outside
        document.addEventListener('click', function(e) {
            if (!profileCard.contains(e.target) && !profileIcon.contains(e.target)) {
                profileIcon.classList.remove('active');
            }
        });

        // Prevent card from closing when clicking inside
        profileCard.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // Handle mobile responsiveness
        function adjustProfileCard() {
            if (window.innerWidth <= 768) {
                document.body.style.overflow = profileIcon.classList.contains('active') ? 'hidden' : '';
            }
        }

        window.addEventListener('resize', adjustProfileCard);
        profileIcon.addEventListener('click', adjustProfileCard);
    }
});