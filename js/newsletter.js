var newsletterform = document.getElementById("contactForm");
newsletterform.addEventListener("submit", function (event) {
  event.preventDefault();
  postEmail()
});

function postEmail() {
  var newsletterobject = "";
  var button = document.getElementById("sendMessageButton");
  button.disabled = true
  //get element like in the css
  var newsletterValue = newsletterform.querySelector("input[type=email]").value
  var NameValue = "NewsLetterUser"
  if (newsletterValue == "" || newsletterValue == null) {
    createHelpMessage("Please enter your email address.", "text-danger")
    button.disabled = false;
    return;
  } else if (!ValidateEmail(newsletterValue)) {
    createHelpMessage("Please enter a valid email address.", "text-danger")
    button.disabled = false;
    return;
  }
  newsletterobject = {
    Name: NameValue,
    Email: newsletterValue,
  }
  newsletterform.querySelector("input[type=email]").value = "";
  axios.post('https://contactmeinfosapi.herokuapp.com/contactinfos', newsletterobject)
    .then(function (response) {
      newsletterform.querySelector("input[type=email]").parentNode.remove()
      var divsuccess = document.getElementById("success")
      var divchild = document.createElement("div");
      divchild.classList.add("alert", "alert-success")
      divchild.innerHTML = "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" + "<strong>Thank you for subscription! </strong>"
      divsuccess.appendChild(divchild)
      button.remove()
      return;
    })
    .catch(function (error) {
      createHelpMessage("Error sending email to server.", "text-danger")
    }).then(function () {
      button.disabled = false
    });
}

function ValidateEmail(mail) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    return (true)
  }
  return (false)
}

function createHelpMessage(stringMessage, error) {
  var p = document.getElementById("helpblock");
  if (p.classList.length > 1) {
    p.classList[1] = null;
    p.innerHTML = "";
  }
  p.innerHTML="<ul role='alert'><li>"+stringMessage+ "</li></ul>"
  p.classList.add(error);
}