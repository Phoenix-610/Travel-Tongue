// Common script for all pages

// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Initialize sparkle effect
    initSparkleEffect();
});

// Sparkle Effect
function initSparkleEffect() {
    const canvas = document.getElementById('sparkle-canvas');
    const ctx = canvas.getContext('2d');
    let sparkles = [];
    let mouseX = -100;
    let mouseY = -100;
    
    // Resize canvas to match window size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Track mouse movement
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create new sparkles at mouse position
        createSparkles(mouseX, mouseY, 2);
    });
    
    // Create sparkle particles
    function createSparkles(x, y, count) {
        const colors = ['#FFF', '#FFFACD', '#FFDAB9', '#FFE4B5', '#FFEFD5'];
        
        for (let i = 0; i < count; i++) {
            sparkles.push({
                x: x + (Math.random() * 20 - 10),
                y: y + (Math.random() * 20 - 10),
                size: Math.random() * 3 + 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: Math.random() * 2 + 1,
                opacity: 1,
                direction: Math.random() * Math.PI * 2
            });
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw each sparkle
        for (let i = 0; i < sparkles.length; i++) {
            const sparkle = sparkles[i];
            
            // Update position
            sparkle.x += Math.cos(sparkle.direction) * sparkle.speed;
            sparkle.y += Math.sin(sparkle.direction) * sparkle.speed;
            
            // Update opacity
            sparkle.opacity -= 0.02;
            
            // Draw sparkle
            if (sparkle.opacity > 0) {
                ctx.beginPath();
                ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
                ctx.fillStyle = sparkle.color;
                ctx.globalAlpha = sparkle.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            } else {
                // Remove faded sparkles
                sparkles.splice(i, 1);
                i--;
            }
        }
        
        // Add a few random sparkles occasionally
        if (Math.random() < 0.05) {
            createSparkles(Math.random() * canvas.width, Math.random() * canvas.height, 1);
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}