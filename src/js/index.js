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

//------------------------------ANCHOR-----------------------------//

const mobileAnchor = document.querySelectorAll('[data-anchor]');
mobileAnchor.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile-show');
        body.classList.remove('modal-open');
    })
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


//------------------------------ VIDEO MODAL-----------------------------//
const openVideoModal = document.querySelectorAll('[data-grade]');
const videoModal = document.getElementById('video-modal');
const closeVideoModal = document.getElementById('video-close');
const videoGrade = document.getElementById('video-grade');
const videoHeader = document.getElementById('video-header');


openVideoModal.forEach(btn => {
    btn.addEventListener('click', () => {
        insertVideo(btn.dataset.grade);
        videoModal.classList.add('video-show');
        body.classList.add('modal-open')
    })
})

closeVideoModal.addEventListener('click', () => {
    videoModal.classList.remove('video-show');
    body.classList.remove('modal-open');
})

//Close when click outside of modal
document.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        videoModal.classList.remove('video-show');
        body.classList.remove('modal-open')
    }
})

function insertVideo(grade) {
    if (grade === "aa") {
        videoHeader.innerHTML = `<div class="video__grade">A+</div>
            <div class="video__description">Как новый</div>`;
        videoGrade.innerHTML = `<iframe class="video__iframe" width="560" height="315" src="https://www.youtube.com/embed/wwpqxAuVU_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    if (grade === "a") {
        videoHeader.innerHTML = `<div class="video__grade">A</div>
            <div class="video__description">Отличное</div>`;
        videoGrade.innerHTML = `<iframe class="video__iframe" width="560" height="315" src="https://www.youtube.com/embed/wwpqxAuVU_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    if (grade === "b") {
        videoHeader.innerHTML = `<div class="video__grade">B</div>
            <div class="video__description">Хорошее</div>`;
        videoGrade.innerHTML = `<iframe class="video__iframe" width="560" height="315" src="https://www.youtube.com/embed/62P5ccEZcl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    if (grade === "c") {
        videoHeader.innerHTML = `<div class="video__grade">C</div>
            <div class="video__description">Приемлемое</div>`;
        videoGrade.innerHTML = `<iframe class="video__iframe" width="560" height="315" src="https://www.youtube.com/embed/hxRTh86DMf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
}


//------------------------------ZOOM GRADES-----------------------------//

$('.rate_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.rate_slider_nav'
});
$('.rate_slider_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.rate_slider',
    focusOnSelect: true
});


/**
 * blowup.js
 * Paul Krishnamurthy 2016
 *
 * https://paulkr.com
 * paul@paulkr.com
 */

$(function ($) {
    $.fn.blowup = function (attributes) {
        var $element = this;

        // If the target element is not an image
        if (!$element.is('img')) {
            console.log(
                '%c Blowup.js Error: ' + '%cTarget element is not an image.',
                'background: #FCEBB6; color: #F07818; font-size: 17px; font-weight: bold;',
                'background: #FCEBB6; color: #F07818; font-size: 17px;',
            );
            return;
        }

        // Constants
        var $IMAGE_URL = $element.attr('src');
        var NATIVE_IMG = new Image();
        NATIVE_IMG.src = $element.attr('src');

        // Default attributes
        var defaults = {
            round: true,
            width: 200,
            height: 200,
            background: 'transparent',
            shadow: '0 8px 17px 0 rgba(0, 0, 0, 0.2)',
            border: '6px solid #FFF',
            cursor: true,
            zIndex: 999999,
            scale: 1,
            customClasses: '',
        };

        // Update defaults with custom attributes
        var $options = $.extend(defaults, attributes);

        // Modify target image
        $element.on('dragstart', function (e) {
            e.preventDefault();
        });
        $element.css('cursor', $options.cursor ? 'crosshair' : 'none');

        // Create magnification lens element
        var lens = document.createElement('div');
        lens.id = 'BlowupLens';

        // Attack the element to the body
        $('body').append(lens);

        // Updates styles
        $blowupLens = $('#BlowupLens');

        $blowupLens.css({
            position: 'absolute',
            display: 'none',
            'pointer-events': 'none',
            zIndex: $options.zIndex,
            width: $options.width,
            height: $options.height,
            border: $options.border,
            background: $options.background,
            'border-radius': $options.round ? '50%' : 'none',
            'box-shadow': $options.shadow,
            'background-repeat': 'no-repeat',
        });

        // Add custom CSS classes
        $blowupLens.addClass($options.customClasses);

        // Show magnification lens
        $element.mouseenter(function () {
            $blowupLens.css('display', 'block');
        });

        // Mouse motion on image
        $element.mousemove(function (e) {
            // Lens position coordinates
            var lensX = e.pageX - $options.width / 2;
            var lensY = e.pageY - $options.height / 2;

            // Relative coordinates of image
            var relX = e.pageX - $(this).offset().left;
            var relY = e.pageY - $(this).offset().top;

            // Zoomed image coordinates
            var zoomX = -Math.floor(
                (relX / $element.width()) * (NATIVE_IMG.width * $options.scale) - $options.width / 2,
            );
            var zoomY = -Math.floor(
                (relY / $element.height()) * (NATIVE_IMG.height * $options.scale) - $options.height / 2,
            );

            var backPos = zoomX + 'px ' + zoomY + 'px';
            var backgroundSize =
                NATIVE_IMG.width * $options.scale + 'px ' + NATIVE_IMG.height * $options.scale + 'px';

            // Apply styles to lens
            $blowupLens.css({
                left: lensX,
                top: lensY,
                'background-image': 'url(' + encodeURI($IMAGE_URL) + ')',
                'background-size': backgroundSize,
                'background-position': backPos,
            });
        });

        // Hide magnification lens
        $element.mouseleave(function () {
            $blowupLens.css('display', 'none');
        });
    };
});

$(document).ready(function () {
    $('.js_zoom_img').each(function () {
        $(this).blowup({
            background: '#000',
        });
    });
});















































