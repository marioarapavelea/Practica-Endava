const experiences = [
  {
    id: 1,
    name: "Summer practice",
    department: "Front-end",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident repudiandae atque earum, nobis eum consequatur sint maiores tempora soluta architecto aspernatur iure repellat quidem dolor ullam vitae? Ipsa, necessitatibus.",
    company: "Endava",
    startDate: "2022-07-11",
    endDate: "2022-07-11",
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
    endDate: "2020-08-12",
  },
];

function generateExperienceSection(experience) {
  const experienceField = document.createElement("div");
  experienceField.classList = "experience";

  const nameExp = document.createElement("h2");
  nameExp.innerText = experience.name;
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

function byDateDay(a, b) {
  const d1 = new Date(a.endDate);
  const d2 = new Date(b.endDate);
  if (d1.getUTCMonth() > d2.getUTCMonth()) {
    return 1;
  } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
    return -1;
  } else {
    return d2.getUTCDate() - d1.getUTCDate();
  }
}
populateExperienceContainer(experiences.sort(byDateDay));

// Show more/less
const box = document.querySelector(".experience");

let isOpen = false;
document.querySelector("button").addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    box.classList.add("open");
  } else {
    box.classList.remove("open");
  }
});
