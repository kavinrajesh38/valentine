function moveButton() {
    const btn = document.getElementById('noButton');
    // Keeps the button within the visible screen area
    const x = Math.random() * (window.innerWidth - btn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight - 20);
    
    btn.style.position = 'fixed'; // Ensures it floats over everything
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

function celebrate() {
    document.getElementById('question').innerText = "yayay! see you on the 14th! 🥰";
    document.getElementById('display-image').src = "https://peanuts.store/cdn/shop/files/PNTS-SNP_37_101791_MF.jpg?v=1725008854";
    document.querySelector('.buttons').style.display = 'none';
}
