const inputMessage = document.getElementById("message");
const inpFName = document.getElementById("fname");
const inpLName = document.getElementById("lname");
const inpEmail = document.getElementById("email");
const inpPhone = document.getElementById("phone");
const remembMe = document.getElementById("rememberme");

const submitBtn = document.getElementById("submit-contact");

function loadFunction() {
  const storedValue = JSON.parse(localStorage.getItem("inputVal"));
  console.log(storedValue);
  if (storedValue) {
    inputMessage.value = storedValue.message;
    inpFName.value = storedValue.firstname;
    inpLName.value = storedValue.lastname;
    inpEmail.value = storedValue.email;
    inpPhone.value = storedValue.phone;
  } else {
    inputMessage.value = "";
  }
}

submitBtn.addEventListener("click", function () {
  const key = "inputVal";
  let arr = {
    message: inputMessage.value,
    firstname: inpFName.value,
    lastname: inpLName.value,
    email: inpEmail.value,
    phone: inpPhone.value,
  };
  const value = JSON.stringify(arr);
  console.log(value, key);

  if (key && value) {
    if (remembMe.checked) {
      localStorage.setItem(key, value);
      loadFunction();
    } else {
      localStorage.setItem(key, "");
    }
  }
});
