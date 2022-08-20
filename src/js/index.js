//MOBILE MENU

const mobileMenu = document.getElementById('mobile-menu');
const burgerOpen = document.getElementById('burger-open');
const burgerClose = document.getElementById('burger-close');

burgerOpen.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-show');
    body.classList.add('modal-open');
})

burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-show');
    body.classList.remove('modal-open');
})


// FAQ ACCORDIONS

const accordionTitles = document.querySelectorAll('.accordion__title');

accordionTitles.forEach(accordionTitle => {
    accordionTitle.addEventListener('click', event => {
        accordionTitle.classList.toggle('accordion__title-active');
        const accordionBody = accordionTitle.nextElementSibling;
        console.log(accordionBody);
        if (accordionTitle.classList.contains('accordion__title-active')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
        } else {
            accordionBody.style.maxHeight = 0 + 'px';
        }
    })
})


//MODAL

const body = document.querySelector('body')
const modal = document.getElementById('modal');
const headerBtn = document.getElementById('header-btn');
const storesBtn = document.getElementById('stores-btn');
const close = document.getElementById('modal-close');

const modalForm = document.querySelector('.modal__form')
const modalComplete = document.querySelector('.modal__complete')
const submit = document.getElementById('modal-submit')


headerBtn.onclick = function() {
    modal.classList.add('modal-show');
    body.classList.add('modal-open')

}
storesBtn.onclick = function() {
    modal.classList.add('modal-show');
    body.classList.add('modal-open');
}

close.onclick = function() {
    modal.classList.remove('modal-show');
    body.classList.remove('modal-open');

    //RESET FORM
    modalForm.classList.remove('modal__form-hidden')
    modalComplete.classList.add('complete-hidden')
}

document.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove('modal-show');
        body.classList.remove('modal-open')
    }
}

// FORM VALIDATION NEEDED

submit.onclick = function () {
    modalForm.classList.add('modal__form-hidden')
    modalComplete.classList.remove('complete-hidden')
}

//STORES

let storesArr = [
    {
        'logoUrl': '../../img/stores/breezy.png',
        'description' : 'Short description of this item that focuses on the benefits or success it brings your customer.',
        'url': 'https://www.breezy.by',
        'country': 'ukr'
    },
    {
        'logoUrl': '../../img/stores/i-store.png',
        'description' : 'Short description of this item that focuses on the benefits or success it brings your customer.',
        'url': 'https://www.i-store.by',
        'country': 'ukr'
    },
    {
        'logoUrl': '../../img/stores/21vek.png',
        'description' : 'Short description of this item that focuses on the benefits or success it brings your customer.',
        'url': 'https://www.21vek.by',
        'country': 'ukr'
    },
    {
        'logoUrl': '../../img/stores/5el.png',
        'description' : 'Short description of this item that focuses on the benefits or success it brings your customer.',
        'url': 'https://www.5element.by',
        'country': 'ukr'
    }
]

const storesBlock = document.getElementById('stores');
const allBtn = document.getElementById('all');
const ukrBtn = document.getElementById('ukr');
const blrBtn = document.getElementById('blr');
const kzBtn = document.getElementById('kz');
const cprBtn = document.getElementById('cpr');
//OR ADD DATA ATTRIBUTES TO BUTTONS

allBtn.addEventListener('click', () => {
    insertCards(storesArr);
})

// function sortCards(arr, country) {
//     let sortedArr = arr.forEach(store => {
//         store.filter
//     })
// }
//
// function insertCards(country) {
//     if(country.length === 0) {
//         storesBlock.map((...) => {....})
//     } else {
//         const selectedCountry = storesBlock.find(store => store.country === country);
//
//         selectedCountry.map((...) => {...})
//     }
// }
//
// arr.map((store) => {
//     storesBlock.innerHTML += `
//   <li class="card">
//     <div class="card__logo">
//       <img src="${store.image}" alt="Store Image"/>
//     </div>
//     <p class="card__description">${store.description}</p>
//     <a href="${store.link}" target="_blank">${store.link}</a>
//   </li>
//   `;
// });

// storesBlock.innerHTML = ''


storesArr.forEach(store => {
        let card = document.createElement('li');
        card.classList.add('card');
        let logo = document.createElement('div');
        logo.classList.add('card__logo');
        let logoImg = document.createElement('img');
        logoImg.setAttribute('src', store.logoUrl)
        let text = document.createElement('p');
        text.classList.add('card__description');
        text.textContent = store.description;
        let url = document.createElement('a');
        url.classList.add('card__url');
        url.textContent = store.url;
        url.setAttribute('href', store.url);
        url.setAttribute('target', '_blank');
        url.setAttribute('rel', 'noopener noreferrer');

        logo.append(logoImg);
        card.append(logo, text, url);
        storesBlock.append(card)
    })














































