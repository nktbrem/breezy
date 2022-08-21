//------------------------------LANGUAGES-----------------------------//
const langBtn = document.getElementById('languages-btn');
langBtn.addEventListener('click', () => {
    langBtn.nextElementSibling.classList.toggle('languages__list-show')
})

//------------------------------MOBILE MENU-----------------------------//

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

//------------------------------PLAY VIDEO-----------------------------//

const videoPlayBtn = document.getElementById('video-play');
const videoThumbnail = document.getElementById('video-thumbnail');
const videoPlayer = document.getElementById('video-iframe');
videoPlayBtn.addEventListener('click', () => {
    videoThumbnail.classList.add('video-active');
    videoPlayBtn.classList.add('video-active');
    let videoSrc = videoPlayer.getAttribute('src') + '?autoplay=1';
    videoPlayer.setAttribute('src', videoSrc);
})


//------------------------------FAQ ACCORDIONS-----------------------------//

const accordionTitles = document.querySelectorAll('.accordion__title');

accordionTitles.forEach(accordionTitle => {
    accordionTitle.addEventListener('click', event => {
        accordionTitle.classList.toggle('accordion__title-active');
        const accordionBody = accordionTitle.nextElementSibling;
        if (accordionTitle.classList.contains('accordion__title-active')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
        } else {
            accordionBody.style.maxHeight = 0 + 'px';
        }
    })
})


//------------------------------MODAL-----------------------------//
const openModal = document.querySelectorAll('[data-contact]');
const body = document.querySelector('body')
const modal = document.getElementById('modal');
const close = document.getElementById('modal-close');

const modalForm = document.querySelector('.modal__form')
const modalComplete = document.querySelector('.modal__complete')
const submit = document.getElementById('modal-submit')

openModal.forEach(btn => {
    btn.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile-show');
        modal.classList.add('modal-show');
        body.classList.add('modal-open')
    })
})

close.addEventListener('click', () => {
    modal.classList.remove('modal-show');
    body.classList.remove('modal-open');

    //RESET FORM
    modalForm.classList.remove('modal__form-hidden')
    modalComplete.classList.add('complete-hidden')
})

//Close when click outside of modal
document.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('modal-show');
        body.classList.remove('modal-open')
        modalForm.classList.remove('modal__form-hidden')
        modalComplete.classList.add('complete-hidden')
    }
})


// FORM VALIDATION NEEDED
submit.addEventListener('click', () => {
    modalForm.classList.add('modal__form-hidden')
    modalComplete.classList.remove('complete-hidden')
})


submit.onclick = function () {
    modalForm.classList.add('modal__form-hidden')
    modalComplete.classList.remove('complete-hidden')
}

//------------------------------STORES CARDS-----------------------------//

let storesArr = [
    {
        'logoUrl': '../../img/stores/breezy.png',
        'description': 'Short description of this item that focuses on the benefits or success it brings your customer.',
        'url': 'https://www.breezy.by',
        'country': 'ukr'
    },
    {
        'logoUrl': '../../img/stores/i-store.png',
        'description': 'Short description of this item that focuses on the benefits or success it brings your customer.',
        'url': 'https://www.i-store.by',
        'country': 'ukr'
    },
    {
        'logoUrl': '../../img/stores/21vek.png',
        'description': 'Short description of this item that focuses on the benefits or success it brings your customer.',
        'url': 'https://www.21vek.by',
        'country': 'ukr'
    },
    {
        'logoUrl': '../../img/stores/5el.png',
        'description': 'Short description of this item that focuses on the benefits or success it brings your customer.',
        'url': 'https://www.5element.by',
        'country': 'ukr'
    }
]

const storesBlock = document.getElementById('stores');
const countryBtns = document.querySelectorAll('[data-country]');

countryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        countryBtns.forEach(btn => {
            btn.classList.remove('locations__item-active');
        })
        btn.classList.add('locations__item-active');
        storesBlock.innerHTML = '';
        insertCards(btn.dataset.country)
    })
})


function insertCards(country) {
    if (country === 'all') {
        storesArr.map((store) => {
            storesBlock.innerHTML += `
  <li class="card">
    <div class="card__logo">
      <img class="card__img" src="${store.logoUrl}" alt="Store Image"/>
    </div>
    <p class="card__description">${store.description}</p>
    <a class="card__url" href="${store.url}" target="_blank">${store.url}</a>
  </li>
  `;
        });
    } else {
        const selectedCountry = storesArr.filter(store => store.country === country);
        selectedCountry.map((store) => {
            storesBlock.innerHTML += `
  <li class="card">
    <div class="card__logo">
      <img class="card__img" src="${store.logoUrl}" alt="Store Image"/>
    </div>
    <p class="card__description">${store.description}</p>
    <a class="card__url" href="${store.url}" target="_blank">${store.url}</a>
  </li>
  `;
        });
    }
}

insertCards('all');














































