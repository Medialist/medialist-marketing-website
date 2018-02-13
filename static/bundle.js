var forms = document.querySelectorAll('[data-id=email-form]')

Array.prototype.forEach.call(forms, function (form) {
  form.addEventListener('submit', function (evt) {
    evt.preventDefault()
    const emailInput = this.querySelector('[name=email]')
    emailInput.value.trim()
    fetch(form.action + '?noRedirect=true', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: form
    }).then(function(response) {
      if (response.ok) {
        form.classList.add('submit-ok')
        if (window.intercomSettings) {
          window.intercomSettings.email = emailInput.value
        }
        form.reset()
        setTimeout(clearFormFeedback, 3000)
      } else {
        throw new Error('Network response was not ok.')
      }
    }).catch(function (err) {
      form.classList.add('submit-error')
      console.error(err)
    })
  })
})

function clearFormFeedback () {
  Array.prototype.forEach.call(forms, function (form) {
    form.classList.remove('submit-ok')
    form.classList.remove('submit-error')
  })
}
