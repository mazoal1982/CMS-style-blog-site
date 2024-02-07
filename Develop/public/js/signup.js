


async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#signup-email").value.trim();
    const password = document.querySelector("#password").value.trim();
    if(!username){
        console.log("no username")
    }
    if(!email){
        console.log("no email")
    }
    if(!password){
        console.log("no password")
    }
    if (username && email && password) {

        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password,
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
    else {
        // tell the user we need info
        alert("You must supply a user name and a password");
    }

}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
