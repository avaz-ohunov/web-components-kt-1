
'use strict';


// Массив с данными контактов
const contacts = [
    {
        img: 'media/vadim.jpg',
        name: 'Апанасенко Вадим',
        email: 'ApanasenkoVA22@st.ithub.ru',
        phone: '+7(555)-123-45-67'
    },
    {
        img: 'media/david.jpg',
        name: 'Гаспарян Давид',
        email: 'GasparyanDA22@st.ithub.ru',
        phone: '+7(555)-987-65-43'
    },
    {
        img: 'media/nastya.jpg',
        name: 'Воробьёва Анастасия',
        email: 'VorobyevaAA22@st.ithub.ru',
        phone: '+7(555)-654-32-10'
    }
];


const template = document.getElementById('contact-card');


// Метод генерации контактой карточки
function createContactCard(contact) {
    const clone = template.content.cloneNode(true);

    clone.querySelector('img').src = contact.img;
    clone.querySelector('.name').textContent = contact.name;
    
    clone.querySelector('.email').textContent = contact.email;
    clone.querySelector('.email').setAttribute(
        'href', `mailto:${contact.email}`
    );
    
    clone.querySelector('.phone').textContent = contact.phone;
    clone.querySelector('.phone').setAttribute(
        'href', `tel:${contact.phone}`
    );

    document.body.appendChild(clone);
}


// Через цикл пробегаемся по массиву и создаём карточки
for(const contact of contacts) {
    createContactCard(contact);
}
