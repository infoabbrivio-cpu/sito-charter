document.getElementById('year').textContent = new Date().getFullYear();
// Simple parallax-ish effect
document.querySelectorAll('.hero-bg img').forEach((img,i)=>{setTimeout(()=>{img.style.transform='scale(1.05)'},300*i)});