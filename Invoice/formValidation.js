$(document).ready(function () {
  jQuery("#invoice-form").validate({
    rules: {
      comName: {
        required: true,
        minlength: 3,
      },
      address: {
        required: true,
      },
      city: {
        required: true,
      },
      mypin: {
        required: true,
        minlength: 6,
      },
      country: {
        required: true,
      },
      myPhone: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },

      // client side form validation
      clientName: {
        required: true,
        // lettersonly: true,
        minlength: 3,
      },
      clientAdd: {
        required: true,
      },
      clientCity: {
        required: true,
      },
      clientPin: {
        required: true,
        minlength: 6,
        maxlength: 6,
      },
      clientCountry: {
        required: true,
      },
      clientPhone: {
        required: true,
        maxlength: 10,
        minlength: 10,
      },
      // invoice Details..
      issueDate: {
        required: true,
      },
      invoiceNumber: {
        required: true,
      },
      referanceNumber: {
        required: true,
      },
      dueDate: {
        required: true,
      },

      // Items details...
      Item: {
        required: true,
      },
      description: {
        required: true,
      },
      Rate: {
        required: true,
      },
      Units: {
        required: true,
      },
    },
    messages: {
      comName: {
        required: "Company name required.*",
        minlength: "Atleast 3 letters required.",
      },
      address: {
        required: "This field is required.*",
      },
      city: {
        required: "City is Required.*",
      },
      mypin: {
        required: "Pin-Code missed.*",
      },
      // phone: {
      //   required: "required.*",
      // },
      country: {
        required: "Required.*",
      },

      // client side form validation
      clientName: {
        required: "Client Name Required.*",
        // lettersonly: "Only Characters allowed.*",
        minlength: "At least 3 letters required",
      },
      clientAdd: {
        required: "This field is required.*",
      },
      clientCity: {
        required: "City is Required.*",
      },
      clientPin: {
        required: "Pin-Code missed.*",
      },
      clientCountry: {
        required: "Required.*",
      },
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});
