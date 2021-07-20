import { noteLinks, projectLinks } from "./links.js";
const homeBtn = document.querySelector('.homeView');
const projectsBtn = document.querySelector('.projectsView');

const displayLinks = (e) => {
  let classView;

  if (!e) {
    classView = 'homeView';
  } else {
    classView = e.target.classList.value;
  };

  const links = classView === 'homeView' ? noteLinks : projectLinks;
  const parentElement = document.getElementById('container');
  parentElement.innerHTML = '';

  const ulElem = document.createElement('UL');

  for (let i = 0; i < links.length; i++) {
    const liElem = document.createElement('LI');
    const aElem = document.createElement('A');
    aElem.setAttribute('href', links[i].url);
    aElem.innerText = links[i].label;
    liElem.appendChild(aElem);
    ulElem.appendChild(liElem);
  };

  let message = '';
  let finalMsg = '';
  if (classView === 'homeView') {
    message = `<p>Hi! I'm Adrian, here you'll find some notes and projects I made on my journey learning JavaScript.</p>
    <p>If you want to see more of my work here is the link to my <a href="https://github.com/lea19019">GitHub</a> account.</p>`;
    finalMsg = `<p>Note: The projects 'To Do App' and 'Country Mania' (links above) had a higher degree of complexity, and specially 
    'Country Mania' which you'll on its own repository in my GitHub account, it contains a detailed explanation of the project, go give
    it a look 😉</p>`;
  } else {
    message = `
    <p>Here you'll find some projects and exercises I made during my jorney. I explore concepts like consuming API, manipulating the DOM and practicing other JS concepts.</p>`;
  }
  const pElem = document.createElement('P');
  pElem.innerHTML = message;
  const fElem = document.createElement('P');
  fElem.innerHTML = finalMsg;
  parentElement.appendChild(pElem);
  parentElement.appendChild(ulElem);
  parentElement.appendChild(fElem);
}

homeBtn.addEventListener('click', displayLinks);
projectsBtn.addEventListener('click', displayLinks);

displayLinks();