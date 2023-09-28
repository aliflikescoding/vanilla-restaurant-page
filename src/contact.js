function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    /* area1 */
    const area1 = document.createElement('div');
    area1.classList.add('ct-area-one');
    const title = document.createElement('h1');
    title.textContent = 'Visit Our Store!!!';

    const map = document.createElement('iframe');
    map.classList.add('map');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6502595.146296284!2d-119.306607!3d37.2691675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sid!4v1695871500399!5m2!1sen!2sid';
    map.width = '600';
    map.height = '450';
    map.style.border = '0';
    map.allowfullscreen = true;
    map.loading = 'lazy';
    map.referrerpolicy = 'no-referrer-when-downgrade';

    area1.appendChild(title);
    area1.appendChild(map);
    contact.appendChild(area1);
    
    return contact;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;