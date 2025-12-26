const header = document.querySelector('#header');
const menuHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > menuHeight) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});