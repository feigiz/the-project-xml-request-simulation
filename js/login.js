
function login(event) {
    event.preventDefault();
    let email = document.getElementById('email_login').value;
    let password = document.getElementById('psw_login').value;
    // if (password == "" || email == "") {}
    if (localStorage.getItem(JSON.stringify("user " + email)) == null) {
        alert("you need to sign up");
        show_sign_up();
    }
    else {
        let user = JSON.parse(localStorage.getItem(JSON.stringify("user " + email)));
        if (password == user.password) {
            // localStorage.removeItem("current_User");
            localStorage.setItem("current_User", JSON.stringify(user));
            show_main();
        }
        else {
            alert('incorrect password, try again');
        }
    }
}

function signup(event) {
    event.preventDefault();
    let email = document.getElementById('email_sign_up').value;
    let password = document.getElementById('psw_sign_up').value;
    let password_Verify = document.getElementById('psw_sign_up_verify').value;
    let name = document.getElementById('name_sign_up').value;
    if (localStorage.getItem(JSON.stringify("user " + email)) != null) {
        alert("you need to log in");
        show_log_in();
    }
    else if (password != password_Verify) {
        alert("password verification failed");
        document.getElementById('psw_sign_up').value = null;
        document.getElementById('psw_sign_up_verify').value = null;
    }
    //למה צריך את השורה הבאה?
    // else if (password == "" || email == "" || name == "") {}
    else {
        let currentUser = new User(email, password, name);
        localStorage.setItem(JSON.stringify("user " + email), JSON.stringify(currentUser));
        localStorage.setItem("current_User", JSON.stringify(currentUser));
        show_main();
    }
}


//שיהיה דרך השרת
