// ═════════════════════════════════════════════════════════════
// HOLLOW CREEK FARM - WEBSITE FUNCTIONALITY
// ═════════════════════════════════════════════════════════════

// ─── Cart Management ────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartBadge() {
  const cartCount = document.getElementById('cartCount');
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = total;
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(itemId, name, price) {
  const existingItem = cart.find(item => item.id === itemId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: itemId, name, price, quantity: 1 });
  }
  
  updateCartBadge();
  showCartNotification(name);
}

function showCartNotification(itemName) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    z-index: 1001;
    animation: slideIn 0.3s ease-out;
    font-weight: 600;
    letter-spacing: 0.3px;
  `;
  notification.textContent = `✓ ${itemName} added to cart`;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out forwards';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// ─── Reveal Animation on Scroll ─────────────────────────────────
function initRevealAnimation() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach(reveal => {
    reveal.style.opacity = '0';
    reveal.style.transform = 'translateY(20px)';
    reveal.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(reveal);
  });
}

// ─── Form Validation & Submission ──────────────────────────────
function validateAndSend(e) {
  e.preventDefault();
  
  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('formMsg');
  
  formMsg.className = '';
  formMsg.textContent = '';
  
  if (!fname || !lname || !email || !subject || !message) {
    formMsg.className = 'form-message error';
    formMsg.textContent = '⚠ Please fill in all fields.';
    return;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMsg.className = 'form-message error';
    formMsg.textContent = '⚠ Please enter a valid email address.';
    return;
  }
  
  formMsg.className = 'form-message success';
  formMsg.textContent = '✓ Message sent successfully! We\'ll be in touch soon.';
  
  setTimeout(() => {
    document.getElementById('contactForm').reset();
    formMsg.textContent = '';
  }, 3000);
}

// ─── Newsletter Subscription ────────────────────────────────────
function subscribeUser(e) {
  e.preventDefault();
  
  const form = e.target;
  const email = form.querySelector('input[type="email"]').value;
  
  if (email) {
    const input = form.querySelector('input');
    const originalPlaceholder = input.placeholder;
    input.placeholder = '✓ Thank you for subscribing!';
    input.value = '';
    input.style.color = '#2e7d32';
    
    setTimeout(() => {
      input.placeholder = originalPlaceholder;
      input.style.color = '';
    }, 3000);
  }
}

// ─── Modal Management ──────────────────────────────────────────
function openModal() {
  const modal = document.getElementById('eventModal');
  if (modal) {
    modal.classList.add('open');
  }
}

function closeModal() {
  const modal = document.getElementById('eventModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

function submitRegistration(e) {
  e.preventDefault();
  
  const name = e.target.querySelector('input[type="text"]').value;
  const email = e.target.querySelector('input[type="email"]').value;
  
  if (name && email) {
    alert(`Thank you ${name}! Registration confirmed. We'll send details to ${email}.`);
    closeModal();
    e.target.reset();
  }
}

// ─── Event Registration Modal Setup ─────────────────────────────
function setupEventModalListeners() {
  const registerBtn = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent.includes('Register'));
  
  if (registerBtn) {
    registerBtn.addEventListener('click', openModal);
  }
}

// ─── Smooth Scroll for Anchor Links ────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#top') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
        }
      }
    });
  });
}

// ─── Navbar Scroll Shadow Effect ───────────────────────────────
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
    } else {
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
    }
  });
}

// ─── Initialize Everything ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initRevealAnimation();
  initSmoothScroll();
  initNavbarScroll();
  setupEventModalListeners();
  updateCartBadge();
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});

// ─── Close modal when clicking outside ─────────────────────────
document.addEventListener('click', (e) => {
  const modal = document.getElementById('eventModal');
  if (modal && e.target === modal) {
    closeModal();
  }
});

// ─── CSS Animations ───────────────────────────────────────────
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
