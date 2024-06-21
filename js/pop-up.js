const form = document.getElementById('contact-form');
const modal = document.querySelector('.backdrop');
const popupTrigger = document.getElementById('popup-trigger');

const checkFormValidity = () => {
  const isValid = form.checkValidity();
  if (isValid) {
    toggleModal();
  }
};

popupTrigger.addEventListener('click', checkFormValidity);

const toggleModal = () => modal.classList.toggle('is-hidden');
