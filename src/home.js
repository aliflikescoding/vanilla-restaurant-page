function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

    /* image area */

  const imageArea = document.createElement('div');
  imageArea.classList.add('image-area');
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
  title.textContent = "I love IceCream"

  textArea.appendChild(title);

  /* about us area */
  


  return home;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;