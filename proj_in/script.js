function changeworld() {
    document.getElementById("para").textContent = "THANK YOU FOR YOUR FEEDBACK";
}

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

function my_fun(){
    author.src="rishika.jpg";
    
}