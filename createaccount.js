document.addEventListener("DOMContentLoaded", function () {
    const createButton = document.getElementById("btnLogin");

    const makePostRequest = async (data, endpoint, callback) => {



      const sent = await fetch(endpoint, {
        method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        try {
          const response = await sent.json()
            callback(response)
        } catch (error) {
            console.log(error)
            callback(error)
        }
    }
    

    createButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the form from submitting
      makePostRequest( { username,name,lastName,number,email,password }, 'https://nodejs-1.wasieacuna.repl.co/api/login', (msg) => {
      const emailInput = document.querySelector('input[name="email"]');
      const emailValue = emailInput.value;

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        alert("Please enter a valid email address.");
        return; // Stop execution if validation fails
      }

      const passwordInput = document.querySelector('input[name="password"]');
      const passwordValue = passwordInput.value;

      // Check password strength (at least 8 characters with uppercase, lowercase, digit)
      if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(passwordValue)) {
        alert("Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, and one digit.");
        return; // Stop execution if validation fails
    }
    
      // Display success message
     // alert("Form submitted successfully!");
     Swal.fire({
        icon: 'success',
        title: 'Form Submitted!',
        text: 'Your form data has been successfully submitted.',
        timer: 3000, //  (3 seconds)
        showConfirmButton: true 
      });
      // Redirect to the login page after form submission
      setTimeout(function () {
      window.location.href = "index.html"; // Replace "login.html" with your login page's URL
    }, 3000); // Redirect after 3 seconds
    });
  });
  });
