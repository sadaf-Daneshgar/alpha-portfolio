const projectBtn = document.querySelectorAll('.btns');
const emailInput = document.querySelector('.email');
const submitBtn = document.querySelector('.f-btn');
const errorMassage = document.querySelector('.massage');

const projectDetails = [
  {
    name: 'Page to page Book Library',
    projectInformation: {
      org: 'Library',
      type: 'Full-stack Dev',
      year: '2024',
    },
    projectImage: 'image/library.jpg',
    projectDescription:
      'This project is a web application that allows users to reserve books from a library.The user can also see the list of books that are available in the library.',
    projectLanguages: ['Ruby on Rails', 'React-Redux', 'PostgreSQL', 'CSS'],
    projectLiveLink: 'https://page-to-page.onrender.com/',
    projectSourceCode:
      'https://github.com/sadaf-Daneshgar/Page-To-page-Library-Frontend',
    PorjectLiveSource: '<i class="fa-brands fa-github"></i>',
    ProjectLiveIcons: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    ProjectLiveText: 'See Live',
    ProjectSourceText: 'See Source',
  },
  {
    name: 'Recipe App',
    projectInformation: {
      org: 'Recipe',
      type: 'Full-stack Dev',
      year: '2024',
    },
    projectImage: 'image/recipe.png',
    projectDescription:
      'The Recipe app keeps track of all your recipes, ingredients, and inventory. You can add a comment and like each of food recipes.',
    projectLanguages: ['Ruby on Rails', 'React-Redux', 'PostgreSQL', 'CSS'],
    projectLiveLink: 'https://page-to-page.onrender.com/',
    projectSourceCode:
      'https://github.com/sadaf-Daneshgar/Page-To-page-Library-Frontend',
    PorjectLiveSource: '<i class="fa-brands fa-github"></i>',
    ProjectLiveIcons: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    ProjectLiveText: 'See Live',
    ProjectSourceText: 'See Source',
  },
  {
    name: 'Budget App',
    projectInformation: {
      org: 'Budget',
      type: 'Full-stack Dev',
      year: '2024',
    },
    projectImage: 'image/budget.PNG',
    projectDescription:
      'Project is about building a mobile web application where you have '
      + 'a list of transactions associated with a category, so that you can '
      + 'see how much money you spent and on what.',
    projectLanguages: ['Ruby on Rails', 'React-Redux', 'PostgreSQL', 'CSS'],
    projectLiveLink: 'https://budget-app-zipl.onrender.com/',
    projectSourceCode: 'https://github.com/sadaf-Daneshgar/budget_app',
    PorjectLiveSource: '<i class="fa-brands fa-github"></i>',
    ProjectLiveIcons: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    ProjectLiveText: 'See Live',
    ProjectSourceText: 'See Source',
  },
  {
    name: 'Contries Info',
    projectInformation: {
      org: 'Contries',
      type: 'Front-End Dev',
      year: '2024',
    },
    projectImage: 'image/country.PNG',
    projectDescription:
      'This project is a web application that allows users to see the '
      + 'list of countries and their information. The user can also search '
      + 'for a specific country and see the details of it.',
    projectLanguages: ['JavaScript', 'ECMAScript', 'CSS'],
    projectLiveLink: 'https://react-capstone-yu30.onrender.com/',
    projectSourceCode: 'https://github.com/sadaf-Daneshgar/react-capstone',
    PorjectLiveSource: '<i class="fa-brands fa-github"></i>',
    ProjectLiveIcons: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    ProjectLiveText: 'See Live',
    ProjectSourceText: 'See Source',
  },
  {
    name: "Space Travler's Hub",
    projectInformation: {
      org: 'Rocket',
      type: 'Front-End Dev',
      year: '2024',
    },
    projectImage: 'image/rocket.PNG',
    projectDescription:
      "Space Travelers' Hub, is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
    projectLanguages: ['ECMAScript', 'React-Redux', 'CSS'],
    projectLiveLink: 'https://react-group-capstone-qwsc.vercel.app/',
    projectSourceCode:
      'https://github.com/sadaf-Daneshgar/react-group-capstone',
    PorjectLiveSource: '<i class="fa-brands fa-github"></i>',
    ProjectLiveIcons: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    ProjectLiveText: 'See Live',
    ProjectSourceText: 'See Source',
  },
  {
    name: 'Conference Page',
    projectInformation: {
      org: 'Conference',
      type: 'Front-End Dev',
      year: '2024',
    },
    projectImage: 'image/confrance.PNG',
    projectDescription:
      'This project is a web application that allows users to see the '
      + 'list of conferences and their information. The user can also '
      + 'search for a specific conference and see the details of it.',
    projectLanguages: ['HTML', 'JAVASript', 'CSS'],
    projectLiveLink: 'https://page-to-page.onrender.com/',
    projectSourceCode:
      'https://github.com/sadaf-Daneshgar/Page-To-page-Library-Frontend',
    PorjectLiveSource: '<i class="fa-brands fa-github"></i>',
    ProjectLiveIcons: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    ProjectLiveText: 'See Live',
    ProjectSourceText: 'See Source',
  },
];

for (let index = 0; index < projectBtn.length; index += 1) {
  projectBtn[index].addEventListener('click', (e) => {
    e.preventDefault();
    const projectContainer = document.createElement('div');
    projectContainer.innerHTML = `
    <div class="container-fluid project-container">
  <div class="card shadow m-2" style="width: 40rem">
  <h4 class="card-title d-flex justify-content-between p-3">${projectDetails[index].name} 
   <i class="fas fa-times btn close-btn"></i></h4>
    <img class="card-img-top" src=${projectDetails[index].projectImage} alt="Card image" style="width:100%">
    <div class="card-body">
      <p class="card-text">${projectDetails[index].projectDescription}</p>
      <button type="button" class="btn btn-outline-info mb-2 mt-4">
              ${projectDetails[index].projectLanguages[0]}
            </button>
            <button type="button" class="btn btn-outline-info mb-2 mt-4">
                ${projectDetails[index].projectLanguages[1]}
            </button>
            <button type="button" class="btn btn-outline-info mb-2 mt-4">
              ${projectDetails[index].projectLanguages[2]}
            </button> <br/>
      <a href=${projectDetails[index].projectLiveLink} class="btn btn-primary">${projectDetails[0].ProjectLiveText} ${projectDetails[0].ProjectLiveIcons}</a>
      <a href=${projectDetails[index].projectSourceCode} class="btn btn-primary">${projectDetails[0].ProjectSourceText} ${projectDetails[0].PorjectLiveSource}</a>
    </div>
  </div>
</div>
    `;
    document.body.appendChild(projectContainer);
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      projectContainer.remove();
    });
  });
}

submitBtn.addEventListener('click', (e) => {
  const varyfiyEmail = /[A-Z]/.test(emailInput.value);
  if (varyfiyEmail === true) {
    errorMassage.innerHTML = 'All letters in the email should be lowercase';
    e.preventDefault();
  } else {
    errorMassage.innerHTML = 'Valid';
  }
});

function scrollH() {
  const navBar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navBar.classList.add('bg-light');
    } else {
      navBar.classList.add('bg-light');
    }
  });
}

scrollH();
document.activeElement('DOMContentLoaded', scrollH);
