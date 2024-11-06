const formPage = document.getElementById('form-page')
const successPage = document.getElementById('success-page')
const emailInput = document.getElementById('email')

const handleSubmit = (e) => {
  e.preventDefault()
  const formData = Object.fromEntries(new FormData(e.target))
  const emailData = formData.email.trim()
  const errorMessage = document.getElementById('errorMessage')
  const submittedEmail = document.querySelector('.submitted-email')
    //validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if(!emailRegex.test(emailData)) {
    errorMessage.classList.add('block')
    errorMessage.classList.remove('hidden')
    emailInput.classList.add('error')
  } else {
    errorMessage.classList.add('hidden')
    errorMessage.classList.remove('block')
    emailInput.classList.remove('error')
    formPage.style.display = 'none'
    successPage.style.display = "flex"
    submittedEmail.innerHTML = emailData
  }
}

  const handleDismiss = () => {
    successPage.style.display = 'none'
    formPage.style.display = 'flex'
    emailInput.value = ''
}