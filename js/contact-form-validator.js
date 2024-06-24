const modal = document.querySelector('.backdrop');

const validator = new JustValidate('#contact-form');
validator
  .addField(
    '#user-name',
    [
      { rule: 'required', errorMessage: '&#8613; El campo es obligatorio' },
      {
        rule: 'customRegexp',
        value: /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]{1,30}/gi,
        errorMessage: '&#8613; Campo no válido',
      },
    ],
    {
      successMessage: '¡Todo se ve bien!',
    }
  )
  .addField(
    '#user-email',
    [
      { rule: 'required', errorMessage: '&#8613; El campo es obligatorio' },
      { rule: 'email', errorMessage: '&#8613; Campo no válido' },
    ],
    {
      successMessage: '¡Todo se ve bien!',
    }
  )
  .addField(
    '#country',
    [
      { rule: 'required', errorMessage: '&#8613; El campo es obligatorio' },
      {
        rule: 'customRegexp',
        value: /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]{1,40}/gi,
        errorMessage: '&#8613; Campo no válido',
      },
    ],
    {
      successMessage: '¡Todo se ve bien!',
    }
  )
  .addField(
    '#company-name',
    [
      { rule: 'required', errorMessage: '&#8613; El campo es obligatorio' },
      {
        rule: 'customRegexp',
        value: /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]{1,40}/gi,
        errorMessage: '&#8613; Campo no válido',
      },
    ],
    {
      successMessage: '¡Todo se ve bien!',
    }
  )
  .addField(
    '#user-tel',
    [
      { rule: 'required', errorMessage: '&#8613; El campo es obligatorio' },
      {
        rule: 'customRegexp',
        value: /[0-9+ ()-]{8,20}/gi,
        errorMessage: '&#8613; Campo no válido',
      },
    ],
    {
      successMessage: '¡Todo se ve bien!',
    }
  )
  .addField(
    '#datetime',
    [{ rule: 'required', errorMessage: '&#8613; El campo es obligatorio' }],
    {
      errorMessage: '&#8613; Campo no válido',
      successMessage: '¡Todo se ve bien!',
    }
  )
  .addField(
    '#terms-conditions',
    [{ rule: 'required', errorMessage: '&#8613; El campo es obligatorio' }],
    {
      errorMessage: '&#8613; Campo no válido',
    }
  )

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
