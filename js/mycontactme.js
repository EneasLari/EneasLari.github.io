var form = document.getElementById("contactForm");
form.addEventListener("submit", function () {
    console.log("ON SUBMIT")
    // Make a request for a user with a given ID
    axios.post('http://localhost:3000/contactme',formtojsonformat())
        .then(function (response) {
            // handle success
            console.log("WE GOT IT");
            console.log(form);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
})

function formtojsonformat(){
    var jsonformat={
        name:"name",
        Email:"email@gmail.com"
    }
    return jsonformat;
}