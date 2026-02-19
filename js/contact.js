document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Selecting inputs and error spans
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const msg = document.getElementById('msg');

    const nameErr = document.getElementById('nameErr');
    const emailErr = document.getElementById('emailErr');
    const msgErr = document.getElementById('msgErr');

    let isValid = true;

    // 1. Name Validation
    if (name.value.trim() === "") {
        nameErr.innerText = "Name is required.";
        name.style.borderColor = "#cc0000";
        isValid = false;
    } else {
        nameErr.innerText = "";
        name.style.borderColor = "#ddd";
    }

    // 2. Email Validation (Strict Gmail/Email Pattern)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === "") {
        emailErr.innerText = "Email is required.";
        email.style.borderColor = "#cc0000";
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailErr.innerText = "Please enter a valid email address (e.g., user@gmail.com).";
        email.style.borderColor = "#cc0000";
        isValid = false;
    } else {
        emailErr.innerText = "";
        email.style.borderColor = "#ddd";
    }

    // 3. Message Validation
    if (msg.value.trim() === "") {
        msgErr.innerText = "Message cannot be empty.";
        msg.style.borderColor = "#cc0000";
        isValid = false;
    } else if (msg.value.trim().length < 10) {
        msgErr.innerText = "Message must be at least 10 characters long.";
        msg.style.borderColor = "#cc0000";
        isValid = false;
    } else {
        msgErr.innerText = "";
        msg.style.borderColor = "#ddd";
    }

    // Final Action
    if (isValid) {
        alert("Success! Your message has been sent.");
        this.reset(); // Clears the form
        // Reset borders to normal
        [name, email, msg].forEach(el => el.style.borderColor = "#ddd");
    }
});