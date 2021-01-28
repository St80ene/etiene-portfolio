document.addEventListener(
  'scroll',
  function () {
    var scrollTop =
      document.documentElement['scrollTop'] || document.body['scrollTop'];
    var scrollBottom =
      (document.documentElement['scrollHeight'] ||
        document.body['scrollHeight']) - document.documentElement.clientHeight;
    scrollPercent = (scrollTop / scrollBottom) * 100 + '%';
    document
      .getElementById('_progress')
      .style.setProperty('--scroll', scrollPercent);
  },
  { passive: true }
);

const typeEffect = document.getElementById('type-effect');

const typewriter = new Typewriter(typeEffect, {
  loop: true,
});

typewriter
  .typeString('Hello World!')
  .pauseFor(1000)
  .deleteAll()
  .typeString(`I'm Etiene Essenoh`)
  .pauseFor(1000)
  .deleteAll()
  .typeString('A Frontend Developer')
  .pauseFor(1000)
  .start();

window.onload = function () {
  displayProject();
};

const projectList = [
  {
    name: 'Fast Food Fast App landing page ',
    links: 'https://fast-food-fast.netlify.app/',
  },
  {
    name: 'Xpider Landing page',
    links: 'https://xpider-landing-page.netlify.app',
  },
  {
    name: 'JavaScript Digital Clock',
    links: 'https://javascript-digital-clock.netlify.app/',
  },
  {
    name: 'Frontend Mentor Clock App',
    links: 'https://frontend-mentor-clock-app.netlify.app',
  },
  {
    name: 'Team Avengers Project Landing page',
    links: 'https://teamavengers-project-page.netlify.app/',
  },
  {
    name: 'List of World countries',
    links: 'https://st80ene.github.io/Js-Minna-task-10/',
  },
  {
    name: 'Emergency Lagos Police Numbers',
    links: 'https://lagos-police-emergency-numbers.netlify.app/',
  },
];

const generateProjectLists = (name, link) =>
  `<li>${name} <a class="project-links" href="${link}">view</a></li>`;

const displayProject = () => {
  let projects = '';
  for (let i = 0; i < projectList.length; i++) {
    const lists = generateProjectLists(
      projectList[i].name,
      projectList[i].links
    );
    projects += lists;
  }
  document.getElementById('project-list').innerHTML = projects;
};
