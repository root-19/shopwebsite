const makePostRequest = async (data, endpoint, callback) => {
  const sent = await fetch(endpoint, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });
  try {
      const response = await sent.json();
      callback(response);
  } catch (error) {
      console.log(error);
      callback(error);
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const btnCreate = document.getElementById('btnLogin');

  btnCreate.addEventListener('click', async function() {
      const form = document.getElementById('login');
      const username = form.username.value;
      const name = form.name.value;
      const lastname = form.lastname.value;
      const telephone = form.telephone.value;
      const email = form.email.value;
      const password = form.password.value;

      if (username && name && lastname && telephone && email && password) {
          const registrationData = {
              username,
              name,
              lastname,
              telephone,
              email,
              password
          };

          makePostRequest(registrationData, 'https://your-api-endpoint/register', (response) => {
              if (response.success) {
                  alert('User registered successfully');
                  // Redirect to a confirmation page or login page
                  window.location.href = 'confirmation.html';
              } else {
                  alert('Registration failed');
              }
          });
      } else {
          alert('Please fill out all fields');
      }
  });
});
