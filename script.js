// Cantidad
let qty = 1;
const qtySpan = document.getElementById('qty');
const totalPriceSpan = document.querySelector('.total');
const price = 199.99;

document.getElementById('plus').addEventListener('click', () => {
  qty++;
  qtySpan.textContent = qty;
  totalPriceSpan.textContent = (price * qty).toFixed(2) + " د.ل";
});
document.getElementById('minus').addEventListener('click', () => {
  if(qty>1) qty--;
  qtySpan.textContent = qty;
  totalPriceSpan.textContent = (price * qty).toFixed(2) + " د.ل";
});

// Galería
const mainImg = document.getElementById('mainImg');
const thumbs = document.querySelectorAll('.thumbnails img');
thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    mainImg.src = thumb.src;
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

// Modal
const modal = document.getElementById('modal');
const buyBtn = document.getElementById('buyBtn');
const cancelBtn = document.getElementById('cancelBtn');
const sendBtn = document.getElementById('sendBtn');

buyBtn.addEventListener('click', () => modal.style.display = 'flex');
cancelBtn.addEventListener('click', () => modal.style.display = 'none');

sendBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();

  if(!name || !phone || !address){
    alert('يرجى تعبئة جميع الحقول');
    return;
  }

  const mensaje = `
طلب شراء مكبر صوت القرآن الكريم
الكمية: ${qty}
الاسم الكامل: ${name}
رقم الهاتف: ${phone}
العنوان الكامل: ${address}
  `;

  const url = `https://wa.me/34643640757?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
  modal.style.display = 'none';

  // Reset form
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('address').value = '';
});
