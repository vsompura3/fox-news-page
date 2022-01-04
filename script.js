const navToggle = document.querySelector('.menu-btn');
const nav = document.querySelector('.secondary-navigation');

navToggle.addEventListener('click', function () {
  const visibility = nav.getAttribute('data-visible');

  if (visibility === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});
