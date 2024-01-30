



function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    
    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
      alert('All form fields must be filled in');
      return;
    }
    const formData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
    };

    console.log(formData);
    
    form.reset();
  }

