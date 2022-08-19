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
