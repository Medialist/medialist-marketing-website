function handleAllEmailForms () {
  var forms = document.querySelectorAll('[data-id=email-form]')

  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault()

      const emailInput = this.querySelector('[name=email]')
      emailInput.value.trim()

      fetch(form.action + '?noRedirect=true', {
        method: 'POST',
        mode: 'cors',
        body: new FormData(form)
      }).then(function(response) {
        if (response.ok) {
          handleSendOk(form, emailInput.value)
        } else {
          throw new Error('Network response was not ok.')
        }
      }).catch(function (err) {
        form.classList.add('submit-error')
        console.error(err)
      })
    })
  })
}

function handleSendOk (form, email) {
  form.classList.add('submit-ok')
  if (window.intercomSettings) {
    window.intercomSettings.email = email
  }
  form.reset()
  setTimeout(clearFormFeedback.bind(null, form), 3000)
}

function clearFormFeedback (form) {
  form.classList.remove('submit-ok')
  form.classList.remove('submit-error')
}

handleAllEmailForms()
