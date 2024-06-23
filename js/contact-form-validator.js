const modal = document.querySelector('.backdrop');

const validator = new JustValidate('#contact-form');
validator
  .addField('#user-name', [{ rule: 'required' }])
  .addField('#user-email', [{ rule: 'required' }, { rule: 'email' }])
  .addField('#country', [{ rule: 'required' }])
  .addField('#company-name', [{ rule: 'required' }])
  .addField(
    '#user-tel',
    [
      { rule: 'required', errorMessage: 'FullJopa' },
      {
        rule: 'customRegexp',
        value: /[0-9+ ()-]{8,20}/gi,
        errorMessage: 'Invalid field',
      },
    ],
    {
      errorFieldCssClass: 'custom-errors-container123',
      successMessage: 'Everything looks good!',
    }
  )
  .addField('#datetime', [{ rule: 'required' }])
  .addField('#terms-conditions', [{ rule: 'required' }])
  .onSuccess(event => {
    modal.classList.toggle('is-hidden');

    emailjs.sendForm('service_pnqld1g', 'contact_form', '#contact-form').then(
      () => {
        console.log('SUCCESS!');
        window.location.reload();
      },
      error => {
        console.log('FAILED...', error);
      }
    );
  });
