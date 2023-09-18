import './style.css'

function createHeader() {
  const header = document.createElement('header');

  const logo = document.createElement('h1');
  logo.innerText = "Medieval Chicken";
  logo.classList.add('logo');

}

function initializeWebsite() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());

  
}
