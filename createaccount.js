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

function btnLogin(){
userame = document.getElementsByName('username')[0].value;
name = document.getElementsByName('name')[0].value;
lastname = document.getElementsByName('lastname')[0].value;
telephone =document.getElementsByName('telephone')[0].value;
email = document.getElementsByName('email')[0].value;
passwod = document.getElementsByName('password')[0].value;
makePostRequest( { username,name,lastname,telephone,email, password }, 'https://nodejs-1.wasieacuna.repl.co/api/login', (msg) => {
  if(msg.code === 200) {
    alert("Logged in success!");
    localStorage.setItem('token', msg.token)
    window.location.href='login.html';
  } else {
    alert('create account failed')
  }
})
};


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
  });
