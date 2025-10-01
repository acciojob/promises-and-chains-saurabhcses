// your JS code here
let Form = document.getElementById("myForm");
let Name = document.getElementById("name");
let age = document.getElementById("age");
let Button = document.getElementById("btn");

Form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (Name.value.trim() === "" || age.value.trim() === "") {
       alert("Please enter valid details");
        return;
    }
    let agepromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (parseInt(age.value.trim()) > 18) {
                resolve(`Welcome, ${Name.value}. You can vote.`);
            } else {
                reject(`Oh sorry ${Name.value}. You aren't old enough.`);
            }
        }, 4000);
    });

    // Handle promise
    agepromise
        .then((message) => alert(message))
        .catch((error) => alert(error));
});
