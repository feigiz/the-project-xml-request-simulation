const mainContent = document.getElementById("main_content");
// window.onload(show_log_in());
// document.addEventListener('DOMContentLoaded', show_log_in());
window.onload = show_log_in();
window.addEventListener("hashchange", poppin);
// window.addEventListener('hashchange', poppin());

function show_sign_up() {


    let currentPage = "sign_up";
    // document.querySelector('.active').classList.remove('active');
    // document.getElementById(currentPage).classList.add('active');
    // console.log(currentPage)
    history.pushState({}, currentPage, `#${currentPage}`);


    // document.getElementById(currentPage).dispatchEvent(app.show);


    // location.hash.replace('#', '');


    // let currentPage = "sign_up";    
    // history.pushState({}, currentPage, `#${currentPage}`);
    // let hash = location.hash.replace('#', '');
    // document.querySelector('.active').classList.remove('active');
    // document.getElementById(hash).classList.add('active');
    // console.log(hash)

    mainContent.innerHTML = document.getElementById("sign_up").innerHTML;
    let sign_up_btn = document.getElementById('sign_up_btn');

    // sign_up_btn.addEventListener("click", signup);
    document.getElementById("switch_to_log_in").addEventListener("click", show_log_in);
}

function show_log_in() {

    let currentPage = "log_in";
    // document.querySelector('.active').classList.remove('active');
    // document.getElementById(currentPage).classList.add('active');
    console.log(currentPage)


    history.pushState({}, currentPage, `#${currentPage}`);
    // document.getElementById(currentPage).dispatchEvent(app.show);

    // location.hash.replace('#', '');



    // let currentPage = "log_in";
    // history.pushState({}, currentPage, `#${currentPage}`);
    // let hash = location.hash.replace('#', '');
    // document.querySelector('.active').classList.remove('active');
    // document.getElementById(hash).classList.add('active');
    // console.log(hash)

    mainContent.innerHTML = document.getElementById("log_in").innerHTML;
    let login_btn = document.getElementById('log_in_btn');
    // login_btn.addEventListener("click", login);
    document.getElementById("switch_to_sign_up").addEventListener("click", show_sign_up);
}

function show_main() {


    let currentPage = 'main';
    // document.querySelector('.active').classList.remove('active');
    // document.getElementById(currentPage).classList.add('active');
    console.log(currentPage)


    history.pushState({}, currentPage, `#${currentPage}`);
    // document.getElementById(currentPage).dispatchEvent(app.show);

    // location.hash.replace('#', '');


    // let currentPage = "main";
    // history.pushState({}, currentPage, `#${currentPage}`);
    // let hash = location.hash.replace('#', '');
    // document.querySelector('.active').classList.remove('active');
    // document.getElementById(hash).classList.add('active');
    // console.log(hash)
    // document.getElementById(hash).dispatchEvent(app.show);


    mainContent.innerHTML = document.getElementById("main").innerHTML;
    document.getElementById("add_product_btn").addEventListener("click", add_product);
    document.getElementById("delete_product_btn").addEventListener("click", delete_product);
    document.getElementById("show_list_btn").addEventListener("click", show_list);
    document.getElementById("show_category_btn").addEventListener("click", show_category);
    document.getElementById("log_out").addEventListener('click', log_out);
}

function poppin() {
    // console.log(location.hash, 'popstate event');
    // let hash = location.hash.replace('#', '');
    // document.querySelector('.active').classList.remove('active');
    // document.getElementById(hash).classList.add('active');
    // console.log(hash)
    // document.getElementById(hash).dispatchEvent(app.show);
    let hash = location.hash.replace('#', '');
    switch (hash) {
        case "log_in":

            show_log_in();
            break;
        case "sign_up":
            show_sign_up()
            break;
        case "main":
            // alert(localStorage.getItem(JSON.stringify('current_User')))            
            let is_there_current_user = localStorage.getItem(JSON.stringify("current_User"));

            if (is_there_current_user)
                show_main();
            break;
    };
}

function log_out() {
    // localStorage.removeItem(JSON.stringify("current_User"));
    localStorage.removeItem("current_User");
    show_log_in();
}

//לטפל בחיצים והיסטריה//////////////////////////////////////////////////////////////////







