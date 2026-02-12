document.getElementById('magic-btn').addEventListener('click', function() {
    const messages = [
        "Kuromi says: 'Keep being a rebel!'",
        "Baku is cheering for you!",
        "Ready to cause some mischief?",
        "Black and pink looks good on you."
    ];
    
    // Pick a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    const messageElement = document.getElementById('message');
    messageElement.textContent = randomMessage;
    
    // Add a little shake effect to the image
    const img = document.getElementById('kuromi-img');
    img.style.transform = "translateY(-10px)";
    setTimeout(() => {
        img.style.transform = "translateY(0)";
    }, 200);
});
