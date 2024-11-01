$("#pitch-form").on('submit',function (event) {
    var subject = document.getElementById("form-subject").value;
    var email = document.getElementById("form-email").value;

    alert("The email '" + subject + "' created by " + email + " has been sent succesfully.");
});