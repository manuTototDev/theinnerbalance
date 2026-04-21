class Drawer {
  constructor(id, backdropId, closeId, openSelectors) {
    this.drawer = document.getElementById(id);
    this.backdrop = document.getElementById(backdropId);
    this.closeBtn = document.getElementById(closeId);
    
    if (!this.drawer) return;

    this.openTriggers = document.querySelectorAll(openSelectors);
    
    this.init();
  }

  init() {
    this.openTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
      });
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.close());
    }
  }

  open() {
    this.drawer.setAttribute('aria-hidden', 'false');
    this.drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.drawer.setAttribute('aria-hidden', 'true');
    this.drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Init mobile menu
  new Drawer('mobile-menu', 'mobile-menu-backdrop', 'close-mobile-menu', '#open-mobile-menu');
  
  // Init search overlay
  new Drawer('search-overlay', 'search-backdrop', 'close-search', '#open-search');
  
  // Init mini cart (if using drawer)
  if (document.getElementById('mini-cart')) {
    new Drawer('mini-cart', 'mini-cart-backdrop', 'close-mini-cart', '#cart-icon');
  }
});
