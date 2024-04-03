$(document).ready(function () {
  jQuery("#form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
      username: {
        required: true,
        minlength: 3,
      },
      password_confirm: {
        equalTo: "#password",
      },
    },
    messages: {
      name: {
        required: "Please Enter Name *",
        minlength: 3,
      },
      email: {
        required: "Email is required *",
        email: "Use a valid Email Format *",
      },
      password: {
        required: "Password is required *",
        minlength: "Length must be more than 5 *",
      },
      username: {
        required: "Enter the Username *",
        minlength: "Must be little longer",
      },
      password_confirm: {
        equalTo: "Passowrd must be same",
      },
    },
  });
});
