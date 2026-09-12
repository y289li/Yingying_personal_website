function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".threebar-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");    

}

// -------------WeChat QR Code--------------------------
const modal = document.getElementById('qr-modal');
const openBtn = document.getElementById('open-qr');
const closeBtn = modal.querySelector('.qr-close');

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('open'); // click backdrop to close
});

// ---------------------- wait to load new pages ---------------------------------

function Goto(url) {
  document.body.classList.add('fade-out');
  const style = getComputedStyle(document.body);
  const duration = parseFloat(style.transitionDuration) * 1000; 
  setTimeout(() => { window.location.href = url; }, duration);
}

