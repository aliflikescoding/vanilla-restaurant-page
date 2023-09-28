function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createCard('Vanilla Manila', 'Vanilla that is grown in the Philipines and then added to our delicious ice cream', './images/ice_cream_vanilla.jpg'));
    menu.appendChild(createCard('Chocolate bucket', 'The best quality chocolate turned into our unique dairy ice cream', './images/ice_cream_chocolate.jpg'));
    menu.appendChild(createCard('Strawberry Merry', 'The best quality strawberry turned into our unique dairy ice cream', './images/ice_cream_straw.jpg'));

    return menu;
}

function createCard(name, desc, img_path) {
    const card = document.createElement('div');
    card.classList.add('card');

    /* area 1 */
    const area1 = document.createElement('div');
    area1.classList.add('card-area-one');
    const title = document.createElement('h2');
    title.textContent = `${name}`;
    const description = document.createElement('p');
    description.textContent = `${desc}`;
    area1.appendChild(title);
    area1.appendChild(description);
    card.appendChild(area1)

    /* area 2 */
    const area2 = document.createElement('div');
    area2.classList.add('card-area-two');
    const image = document.createElement('img');
    image.src = `${img_path}`;
    area2.appendChild(image);
    card.appendChild(area2)

    return card;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;