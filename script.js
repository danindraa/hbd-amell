function createBalloon(side) {
    const balloonColors = ['#ff5722', '#4caf50', '#2196f3', '#ffeb3b', '#9c27b0']; // Array warna balon
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    // Pilih warna acak dari array
    const randomColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.backgroundColor = randomColor; // Terapkan warna acak

    // Atur posisi balon ke kiri atau kanan
    if (side === 'left') {
        balloon.style.left = '10%'; // Atur posisi balon di kiri
    } else {
        balloon.style.right = '10%'; // Atur posisi balon di kanan
    }
    
    document.querySelector(".card").appendChild(balloon);
    
    // Tampilkan balon dan mulai animasi
    setTimeout(() => {
        balloon.style.display = 'block';
    }, 100); // Ganti delay menjadi 100ms untuk respons lebih cepat
    
    // Hapus balon setelah 5 detik
    setTimeout(() => {
        balloon.remove();
    }, 5000);
}

// Buat balon secara bersamaan di kiri dan kanan setiap detik
setInterval(() => {
    createBalloon('left');
    createBalloon('right');
}, 1000);
