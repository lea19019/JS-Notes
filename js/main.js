const links = [
  {
    label: "Week 01 notes",
    url: "week1/index.html"
  },
  {
    label: "Week 02 notes",
    url: "week2/index.html"
  },
  {
    label: "Week 03 notes",
    url: "week3/index.html"
  }
]

let itemsList =  document.querySelector('.list-link');

for (let index = 0; index < links.length; index++) {
  let listItem = document.createElement('LI');
  let linkWeek = document.createElement('A');
  linkWeek.setAttribute('href', links[index]['url']);
  linkWeek.innerText = links[index]['label'];
  listItem.appendChild(linkWeek);

  document.querySelector('.list-links').appendChild(listItem);
}