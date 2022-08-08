const experiences = [
  {
    id: 1,
    name: "Summer practice",
    department: "Front-end",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident repudiandae atque  earum, nobis eum consequatur sint maiores tempora soluta architecto aspernatur iure repellat quidem dolor ullam vitae? Ipsa, necessitatibus.",
    company: "Endava",
    startDate: "2022-07-11",
    endDate: "2022-07-11",
    // endDate: new Date("2022-07-11"),
  },
  {
    id: 2,
    name: "Internship2",
    department: "department name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident repudiandae atque earum, nobis eum consequatur sint maiores tempora soluta architecto aspernatur iure repellat quidem dolor ullam vitae? Ipsa, necessitatibus.",
    company: "xxxxxx",
    startDate: "2020-06-12",
    endDate: "2022-08-10",
  },
  {
    id: 2,
    name: "Internship",
    department: "department name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident repudiandae atque earum, nobis eum consequatur sint maiores tempora soluta architecto aspernatur iure repellat quidem dolor ullam vitae? Ipsa, necessitatibus.",
    company: "xxxxxx",
    startDate: "2020-05-12",
    endDate: "2021-08-12",
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
  const descriptionExp = document.createElement("p");
  descriptionExp.innerText = experience.description;
  const showMoreBtn = document.createElement("button");
  showMoreBtn.innerHTML = '<i class="arrow"></i>';
  showMoreBtn.id = "readMoreBtn";
  descriptionExp.classList = "description-experience";
  const companyExp = document.createElement("p");
  companyExp.innerText = experience.company;
  const startDateExp = document.createElement("p");
  startDateExp.innerText = "Start date: " + experience.startDate;
  const endDateExp = document.createElement("p");
  endDateExp.innerText = "End Date: " + experience.endDate;

  showMoreBtn.addEventListener("click", toggle);

  experienceField.appendChild(nameExp);
  experienceField.appendChild(departmentExp);
  experienceField.appendChild(companyExp);
  experienceField.appendChild(startDateExp);
  experienceField.appendChild(endDateExp);
  experienceField.appendChild(descriptionExp);
  experienceField.appendChild(showMoreBtn);

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
    return 1;
  } else if (d1.getUTCFullYear() < d2.getUTCFullYear()) {
    return -1;
  } else if (d1.getUTCFullYear() === d2.getUTCFullYear()) {
    if (d1.getUTCMonth() > d2.getUTCMonth()) {
      return 1;
    } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
      return -1;
    } else if (d1.getUTCMonth() === d2.getUTCMonth()) {
      if (d1.getUTCDay() > d2.getUTCDate()) {
        return 1;
      } else if (d1.getUTCDay() < d2.getUTCDate()) {
        return -1;
      } else {
        return 0;
      }
    }
  }
}

populateExperienceContainer(experiences.sort(byDateDay));

// Show more/less
const box = document.querySelector(".experience");

let isOpen;
document.querySelector("button").addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    box.classList.add("open");
    // const lessText = descr.substring(0, 50);
    // descr.innerText = lessText;
  } else {
    box.classList.remove("open");
  }
});
// const descr = document.getElementsByClassName("description-experience");
// const descText = descr.innerText;
// const lessText = descr.substring(0, 50);
// descr.innerText = lessText;
// console.log(lessText);

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
    }
  }
}
