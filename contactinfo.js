const inputMessage = document.getElementById("message");
const inputSubj = document.getElementById("subj");
const submitBtn = document.getElementById("submit-contact");

function loadFunction() {
  const k = localStorage.length - 1;
  const keyL = localStorage.key(k);
  const storedValue = localStorage.getItem(keyL);
  console.log(storedValue);
  if (storedValue) {
    inputMessage.value = storedValue;
  } else {
    inputMessage.value = "";
  }
}

submitBtn.addEventListener("click", function () {
  const key = inputSubj.value;
  const value = inputMessage.value;

  console.log(key);
  console.log(value);

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
