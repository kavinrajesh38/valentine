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
    document.getElementById('display-image').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I1ejR0ZzR0ZzR0ZzR0ZzR0ZzR0ZzR0ZzR0ZzR0ZzR0ZzR0ZzZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UMon8TxS7TLY5vSuL1/giphy.gif";
    document.querySelector('.buttons').style.display = 'none';
}
