document.getElementById("signupForm").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;

    const gender = document.querySelector('input[name="gender"]:checked');
    const interests = document.querySelectorAll('input[name="interests"]:checked');
    const country = document.getElementById("country").value;
    const comments = document.getElementById("comments").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill out name, email, and password.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (phone.length < 10) {
        alert("Phone number must be at least 10 digits.");
        return;
    }

    let interestsArray = [];
    interests.forEach(i => interestsArray.push(i.value));

    const formData = {
        name,
        email,
        password,
        phone,
        date,
        gender: gender ? gender.value : "",
        interests: interestsArray,
        country,
        comments
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            document.getElementById("resultMessage").textContent = response.message;

            document.getElementById("signupForm").reset();
        }
    };

    xhr.send(JSON.stringify(formData));
}