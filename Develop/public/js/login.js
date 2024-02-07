async function loginFormHandler(event) {

  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#Lpassword").value.trim();
if(!email){
    console.log("no email")
}
if(!password){
    console.log("no password")
}
  if (email && password) {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({
              email,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });
      
      // check the response status
      if (response.ok) {
          document.location.replace('/'); 
      } else {
          response.json()
          .then(data => {
              alert(data.message);
          })
      }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

