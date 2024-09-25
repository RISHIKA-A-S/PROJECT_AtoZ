// Function to display a greeting message based on the current time
function displayGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    alert(greeting);
}

// Function to calculate the sum of the two numbers
function calculate() {
    
    const firstNumber = parseFloat(document.getElementById('first-number').value);
    const secondNumber = parseFloat(document.getElementById('second-number').value);

    
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById('result').innerText = 'Please enter valid numbers';
        return;
    }

    
    const sum = firstNumber + secondNumber;
    document.getElementById('result').innerText = sum;
}

// Function to change the color of the button when clicked
function changeColor() {
    const button = document.querySelector('.color-button');
    button.classList.toggle('clicked');
}
