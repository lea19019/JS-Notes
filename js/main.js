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
  },
  {
    label: "Week 04 notes",
    url: "week4/index.html"
  },
  {
    label: "Week 05 notes",
    url: "week5/index.html"
  },
  {
    label: "Week 06 Midterm Checkin",
    url: "week6/index.html"
  },
  {
    label: "Week 07 ",
    url: "week7/index.html"
  },
  {
    label: "Week 08 ",
    url: "week8/index.html"
  },
  {
    label: "Week 09 ",
    url: "week9/index.html"
  }
]

let ol = document.querySelector('.list-links');

for (let index = 0; index < links.length; index++) {
  let listItem = document.createElement('LI');
  let linkWeek = document.createElement('A');
  linkWeek.setAttribute('href', links[index]['url']);
  linkWeek.innerText = links[index]['label'];
  listItem.appendChild(linkWeek);
  ol.appendChild(listItem);
  // document.querySelector('.list-links').appendChild(listItem);
}