const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  const formData = event.target.elements;
  const formDataObject = {};

  for (let element of formData) {
    if (element.tagName === "INPUT") {
      formDataObject[element.name] = element.value;
    }
  }

  if (!formDataObject.email || !formDataObject.password) {
    alert("All fields must be filled out.");
    return;
  }

  console.log(formDataObject);
  loginForm.reset();
});
