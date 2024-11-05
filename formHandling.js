const handleSubmit = (e) => {
  e.preventDefault()
  const formData = Object.fromEntries(new FormData(e.target))
  const emailData = formData.email.trim()
  const errorMessage = document.getElementById('errorMessage')
  const emailInput = document.getElementById('email')
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
    // alert("success")
  }
}