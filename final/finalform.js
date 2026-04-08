document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const country = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const artist = document.getElementById('artist').value;
    
    if (!age || !country || !genre || !artist) {
        alert("You need an age, country, genre and artist.");
        return;
    }

    const formData = {
        age: age,
        country: country,
        genre: genre,
        artist: artist
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('myForm').innerHTML = '';
            document.getElementById('message').innerHTML = response.message;
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.")
        }
    };
    xhr.send(JSON.stringify(formData));
});