const form = document.getElementById('myForm');
const loader = document.querySelector('.loader');
const alert = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  loader.style.display = 'block';

  fetch('https://formsubmit.co/hiltonvidz15@gmail.com', {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json',
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    loader.style.display = 'none';
    alert.style.display = 'block';
    alert.textContent = 'Form submitted successfully!';
    form.reset();
  })
  .catch((error) => {
    loader.style.display = 'none';
    alert.style.display = 'block';
    alert.textContent = 'Error submitting form!';
    alert.classList.remove('alert-success');
    alert.classList.add('alert-danger');
    console.error('Error submitting form:', error);
  });
});
