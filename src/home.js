function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  /* <i class="fa-solid fa-arrow-down"></i> */
  const arrow = document.createElement('i');
  arrow.classList.add('fa-solid', 'fa-arrow-down', 'arrow-down', 'up-down-animation');
  home.appendChild(arrow);

  /* image area */

  const imageArea = document.createElement('div');
  imageArea.classList.add('image-area', 'fade-in-bottom');
  home.appendChild(imageArea);

  const image1 = document.createElement('img');
  image1.classList.add('image1');
  image1.src = 'images/ice.png';
  imageArea.appendChild(image1);
  const image2 = document.createElement('img');
  image2.classList.add('image2');
  image2.src = 'images/vector.png';
  imageArea.appendChild(image2);

  const textArea = document.createElement('div');
  textArea.classList.add('text-area');
  home.appendChild(textArea);

  const title = document.createElement('h1');
  title.textContent = "I love IceCream\n do you?";
  title.classList.add('appear-from-background');

  textArea.appendChild(title);

  /* about us area */

  home.appendChild(generateAboutUs());

  return home;
}

function generateAboutUs() {
  const aboutUs = document.createElement('div');
  aboutUs.classList.add('about-us', 'fade-in-bottom');
  
  const title = document.createElement('h1');
  title.textContent = "Who are we?";
  aboutUs.appendChild(title);
  const text = document.createElement('p');
  text.textContent = "We are an environmentally friendly dairy based Ice Cream company based in Spring Field, Arizona.\n We are passionate about Ice Cream and Ensure only the best for our products.\n We also ensure enough pay for our employees\n lorem ipsum si amet. donde esta el biblio teka, para , saya suka es krim, ik houdt van ice cream, watashi ice cream ga suki desu";
  aboutUs.appendChild(text);

  return aboutUs;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;