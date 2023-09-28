import './style.css'
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
  const header = document.createElement('header');

  const logoArea = document.createElement('div');
  logoArea.classList.add('logo-area');
  const logo = document.createElement('h1');
  logo.innerText = "icecreamUscream";
  logo.classList.add('logo');
  // <i class="fa-solid fa-ice-cream"></i>
  const logoIcon = document.createElement('i');
  logoIcon.classList.add('fa-solid', 'fa-ice-cream', 'logo-icon');
  logoArea.appendChild(logoIcon);
  logoArea.appendChild(logo);
  header.appendChild(logoArea);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.classList.add("underline-animation");
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });
  homeButton.innerHTML = "Home";
  nav.appendChild(homeButton);

  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.classList.add("underline-animation");
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });
  menuButton.innerHTML = "Menu";
  nav.appendChild(menuButton);

  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.classList.add("underline-animation");
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });
  contactButton.innerHTML = "Contact";
  nav.appendChild(contactButton);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");

  const gitHubArea = document.createElement("div");
  const gitHubText = document.createElement("h1");
  gitHubText.textContent = "aliflikescoding";
  gitHubArea.appendChild(gitHubText);
  // <i class="fa-brands fa-github"></i>
  const gitHubLogo = document.createElement('i');
  gitHubLogo.classList.add('git-hub-logo');
  gitHubLogo.classList.add('fa-brands', 'fa-github');
  gitHubArea.appendChild(gitHubLogo);
  gitHubArea.classList.add('git-hub-area');
  footer.appendChild(gitHubArea);

  return footer;
}

function appendFontAwesome() {
  const headElement = document.head;
  const linkElement = document.createElement('link');

  linkElement.rel = 'stylesheet';
  linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
  linkElement.integrity = 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==';
  linkElement.crossOrigin = 'anonymous';
  linkElement.referrerPolicy = 'no-referrer';

  headElement.appendChild(linkElement);
}

function initializeWebsite() {
  const content = document.getElementById('content');
  appendFontAwesome();

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
}

export default initializeWebsite;