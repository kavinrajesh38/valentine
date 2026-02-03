function moveButton() {
    const btn = document.getElementById('noButton');
    
    // We subtract a bit more (50-100px) to make sure it doesn't go off-screen
    const maxWidth = window.innerWidth - btn.offsetWidth;
    const maxHeight = window.innerHeight - btn.offsetHeight;

    // Generate random coordinates
    const x = Math.random() * maxWidth;
    const y = Math.random() * maxHeight;

    // Apply the new position
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    
    // This part is crucial for mobile:
    btn.style.position = 'fixed'; 
}
function celebrate() {
    document.getElementById('question').innerText = "yayay! see you on the 14th! 🥰";
    document.getElementById('display-image').src = "https://peanuts.store/cdn/shop/files/PNTS-SNP_37_101791_MF.jpg?v=1725008854";
    document.querySelector('.buttons').style.display = 'none';
}
