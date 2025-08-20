document.getElementById('year').textContent = new Date().getFullYear();
// FAQ toggle
document.querySelectorAll('.faq .item').forEach(item=>{
  const q=item.querySelector('.q');const a=item.querySelector('.a');
  q.addEventListener('click',()=>{a.style.display=a.style.display==='block'?'none':'block'});
});
