document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.contacts__form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.name', [{
      rule: 'minLength',
      value: 3,
      errorsContainer: '.errors-container',
      errorMessage: "Name is too short"
    },
    {
      rule: 'maxLength',
      value: 10,
      errorMessage: "Name is too long"
    },
    ])
    .addField('.tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Number not 10 digits',
    }]);
})
