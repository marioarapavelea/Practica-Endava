const experiences = [
  {
    id: 1,
    name: "Summer practice",
    department: "Front-end",
    company: "Endava \n\n",
    startDate: "2022-07-11",
    endDate: "2022-07-11",
    description:
      ' <br> <p>Programming Languages:</p> <p>JavaScript, HTML, CSS </p> <br> <p>Projects:</p> <ul style="list-style-type: none; "><li><a href="./todolist.html" style="text-decoration: none;">To-do List</a></li> <li><a href="./login.html" style="text-decoration: none;  ">Login</a></li></ul> ',
  },

  {
    id: 2,
    name: "Education",
    department: "High School",
    description: "<br>Programming Languages: <p> C++</p>",

    company: "CNGC Năsăud, BN \n\n",
    startDate: "2014-07-12",
    endDate: "2019-06-10",
  },
  {
    id: 2,
    name: "Education",
    department: " Faculty of Automation and Computer Science\n Automation",
    description:
      " <br>Programing Languages: <p>C, C#, MySQL, Java, MATLAB</p> ",
    company: "Technical University of Cluj-Napoca \n\n",
    startDate: "2019-07-14",
    endDate: "2023-06-12",
  },
];

console.log(experiences);

function generateExperienceSection(experience) {
  const experienceField = document.createElement("div");
  experienceField.classList = "experience";

  const nameExp = document.createElement("h2");
  nameExp.innerText = experience.name;
  nameExp.classList = "exp-name";
  const departmentExp = document.createElement("p");
  departmentExp.innerText = experience.department;
  departmentExp.classList = "dep-name";
  const descriptionExp = document.createElement("p");
  descriptionExp.innerHTML = experience.description;

  descriptionExp.classList = "description-experience";
  const companyExp = document.createElement("p");
  companyExp.innerText = experience.company;
  const startDateExp = document.createElement("p");
  startDateExp.innerText = "Start date: " + experience.startDate;
  const endDateExp = document.createElement("p");
  endDateExp.innerText = "End Date: " + experience.endDate;

  experienceField.append(
    nameExp,
    departmentExp,
    companyExp,
    startDateExp,
    endDateExp,
    descriptionExp
  );

  return experienceField;
}

function populateExperienceContainer(experienceElem) {
  const experienceContainer = document.getElementById("container-experience");

  experienceElem.forEach(function (experienceObj, index) {
    const experCard = generateExperienceSection(experienceObj);
    experienceContainer.appendChild(experCard);
  });
}

// Sort by date

function byDateDay(a, b) {
  const d1 = new Date(a.endDate);
  const d2 = new Date(b.endDate);
  if (d1.getUTCFullYear() > d2.getUTCFullYear()) {
    return -1;
  } else if (d1.getUTCFullYear() < d2.getUTCFullYear()) {
    return 1;
  } else if (d1.getUTCFullYear() === d2.getUTCFullYear()) {
    if (d1.getUTCMonth() > d2.getUTCMonth()) {
      return -1;
    } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
      return 1;
    } else if (d1.getUTCMonth() === d2.getUTCMonth()) {
      if (d1.getUTCDay() > d2.getUTCDate()) {
        return -1;
      } else if (d1.getUTCDay() < d2.getUTCDate()) {
        return 1;
      } else {
        return 0;
      }
    }
  }
}

populateExperienceContainer(experiences.sort(byDateDay));

// Search
function searchFunction() {
  let input = document.getElementById("search").value;
  input = input.toLowerCase();
  let expBox = document.getElementsByClassName("experience");

  for (let i = 0; i < expBox.length; i++) {
    if (!expBox[i].innerHTML.toLowerCase().includes(input)) {
      expBox[i].style.display = "none";
    } else {
      expBox[i].style.display = "list-item";
      expBox[i].style.listStyleType = "none";
    }
  }
}
