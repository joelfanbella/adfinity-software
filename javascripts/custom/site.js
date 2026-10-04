document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.querySelector('.menu-trigger');
  const menu = document.querySelector('.navigation-menu');
  const header = document.querySelector('.masthead');

  if (trigger && menu) {
    trigger.addEventListener('click', () => {
      const open = trigger.classList.toggle('active');
      menu.classList.toggle('active');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        trigger.classList.remove('active');
        menu.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  document.querySelectorAll('[data-offer-more]').forEach((btn) => {
    const block = btn.closest('.offer-block');
    const extras = block ? block.querySelectorAll('.is-extra') : [];
    if (!extras.length) {
      btn.hidden = true;
      return;
    }
    btn.textContent = `+${extras.length} More`;
    btn.addEventListener('click', () => {
      const open = block.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Show less' : `+${extras.length} More`;
    });
  });
});
