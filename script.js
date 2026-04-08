document.addEventListener('DOMContentLoaded', () => {
    // 1. Generate Stars
    generateStars();

    // 2. Add Mousemove Listener for Cursor Glow & Parallax
    const cursorGlow = document.getElementById('cursor-glow');
    const starLayers = document.querySelectorAll('.stars-layer');

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const moveX = (mouseX / window.innerWidth) - 0.5;
        const moveY = (mouseY / window.innerHeight) - 0.5;

        // Cursor Glow effect
        cursorGlow.style.background = `radial-gradient(
            circle 100px at ${mouseX}px ${mouseY}px, 
             rgba(68, 66, 66, 0.25) 2%, 
            rgba(75, 73, 74, 0.15) 20%, 
            transparent 90%
        )`;

        // Parallax Star Movement
        starLayers.forEach(layer => {
            const strength = parseFloat(layer.getAttribute('data-parallax'));
            const translateX = moveX * strength * 50; 
            const translateY = moveY * strength * 50;
            layer.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    });

    // 3. Seamless Dropdown Redirect Logic
    // --- C. Seamless Dropdown Redirect Logic ---
const goButton = document.getElementById('go-button');
const pageSelector = document.getElementById('page-selector');

goButton.addEventListener('click', () => {
    const selectedUrl = pageSelector.value;
    
    if (selectedUrl) {
        // Use window.open with '_blank' to open in a new tab!
        window.open(selectedUrl, '_blank');
    } else {
        alert("Please select a task from the list first!");
    }
});
});

/**
 * Generates hundreds of stars across multiple depth layers.
 */
function generateStars() {
    const starLayers = document.querySelectorAll('.stars-layer');
    const totalStars = 250; 

    for (let i = 0; i < totalStars; i++) {
        const layerIndex = Math.floor(Math.random() * 3);
        const layer = starLayers[layerIndex];

        const star = document.createElement('div');
        star.classList.add('star');

        let baseSize = 1;
        if (layerIndex === 1) baseSize = 1.5; 
        if (layerIndex === 2) baseSize = 2;   

        const size = baseSize + Math.random() * 1.5; 

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Stretch generation area to avoid blank edges
        star.style.top = `${-10 + Math.random() * 120}%`;
        star.style.left = `${-10 + Math.random() * 120}%`;

        star.style.animationDuration = `${3 + Math.random() * 5}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;

        layer.appendChild(star);
    }
}