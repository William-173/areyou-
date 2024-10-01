const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const resetBtn = document.getElementById('resetBtn');

// Function to generate a random position for the button
function getRandomPosition() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    // Generate random coordinates within the screen boundaries
    const randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));

    return { x: randomX, y: randomY };
}

// When "Yes" button is clicked
yesBtn.addEventListener('click', () => {
    // Change the text and background
    question.textContent = "GAYYYYYY U GAY LOLLLLL 🫵😂";
    document.body.classList.add('rainbow');
    
    // Add laughter emojis
    let laughter = "😂🫵😂🫵😂🫵😂🫵";
    let laughterDisplay = document.createElement("h2");
    laughterDisplay.textContent = laughter;
    laughterDisplay.style.color = "white";
    laughterDisplay.style.fontSize = "3rem";
    laughterDisplay.style.marginTop = "20px";
    document.getElementById('content').appendChild(laughterDisplay);
    
    // Hide buttons and show reset button
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    resetBtn.style.display = "block";
});

// When "No" button is clicked, make it run away
noBtn.addEventListener('click', () => {
    const { x, y } = getRandomPosition();

    // Move the "No" button to a random position
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Reset button functionality
resetBtn.addEventListener('click', () => {
    // Reset everything back to default
    question.textContent = "Are you gay?";
    document.body.classList.remove('rainbow');
    yesBtn.style.display = "inline-block";
    noBtn.style.display = "inline-block";
    noBtn.style.position = "static";
    resetBtn.style.display = "none";

    // Remove any added elements
    let laughterDisplay = document.querySelector('h2');
    if (laughterDisplay) laughterDisplay.remove();
});
