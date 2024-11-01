$("#subscribe-form").on('submit', function (event) {
    var email = document.getElementById("form-email").value;

    alert("The email '" + email + "' has been succesfully subscribed to our newsletter.");
});