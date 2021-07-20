if (document.querySelector('.menu-area')) {
    const navClassMenu = document.querySelector('.menu-area');
    navClassMenu.innerHTML = `
<ul>
    <li><a href="/index.html">JS Journey</a></li>
    <li><a href="/TodoApp/index.html">To Do App</a></li>
    <li><a href="https://lea19019.github.io/CountryMania/">Country Mania</a></li>
</ul>
`;
} else {
    const navIdMenu = document.getElementById('menu-area');
    navIdMenu.innerHTML = `
<ul>
    <li><button class="homeView">Home</button></li>
    <li><button class="projectsView">Projects</button></li>
    <li><a href="/TodoApp/index.html">To Do App</a></li>
    <li><a href="https://lea19019.github.io/CountryMania/">Country Mania</a></li>
</ul>
`;
}