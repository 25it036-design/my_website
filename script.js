// Smooth scroll to donor form
document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#donate').scrollIntoView({
        behavior: 'smooth'
    });
});

// Form validation and success message
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.elements[0].value.trim();
    const age = form.elements[1].value.trim();
    const blood = form.elements[2].value.trim();
    const phone = form.elements[3].value.trim();

    if (name === "" || age === "" || blood === "" || phone === "") {
        alert("Please fill all the fields!");
        return;
    }

    if (age < 18 || age > 60) {
        alert("Age must be between 18 and 60 to donate blood.");
        return;
    }

    if (phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    alert("Thank you for registering as a donor! ❤️");
    form.reset();
});
