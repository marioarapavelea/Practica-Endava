const inputMessage = document.getElementById("message");
const inpFName = document.getElementById("fname");
const inpLName = document.getElementById("lname");
const inpEmail = document.getElementById("email");
const inpPhone = document.getElementById("phone");

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
    localStorage.setItem(key, value);
    location.reload();
  }
});

// Remember me
const remembMe = document.getElementById("rememberme");
const firstname = document.getElementById("fname").value;
const lastname = document.getElementById("lname").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;

if (localStorage.checkbox && localStorage.checkbox !== "") {
  remembMe.setAttribute("checked", "checked");
  firstname.value = localStorage.user;
} else {
  remembMe.removeAttribute("checked");
  firstname.value = "";
}

function rememberMeFcn() {
  if (remembMe.checked && firstname.value !== "") {
    localStorage.username = firstname.value;
    localStorage.checkbox = remembMe.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}
