import { noteLinks, projectLinks } from "./links.js";

let navMenu = document.querySelector('.menu-area');
let navUL = document.createElement('UL');
let homeMenu = document.createElement('LI');
let notesMenu = document.createElement('LI');
let projectsMenu = document.createElement('LI');
let notesUl = document.createElement('UL');
notesUl.classList.add('dropdown-1');
let projectsUl = document.createElement('UL');
projectsUl.classList.add('dropdown-2')

const createDropdown = (ul, linksData, menuTab) => {
  for (let index = 0; index < linksData.length; index++) {
    let linkList = document.createElement('LI');
    let linkWeek = document.createElement('A');
    linkWeek.setAttribute('href', linksData[index]['url']);
    linkWeek.innerText = linksData[index]['label'];
    linkList.appendChild(linkWeek);
    ul.appendChild(linkList);
    menuTab.appendChild(ul);
  };
};

const addLink = (menuTab, text, href = '#') => {
  let linkRef = document.createElement('A');
  let linkData = document.createTextNode(text);
  linkRef.appendChild(linkData);
  linkRef.href = href
  menuTab.appendChild(linkRef);
}
addLink(homeMenu, 'Home', '/index.html');
addLink(notesMenu, 'Notes');
addLink(projectsMenu, 'Projects');

createDropdown(notesUl, noteLinks, notesMenu);
createDropdown(projectsUl, projectLinks, projectsMenu);

navUL.appendChild(homeMenu);
navUL.appendChild(notesMenu);
navUL.appendChild(projectsMenu);
navMenu.appendChild(navUL);




