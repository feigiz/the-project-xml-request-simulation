const mainContent = document.getElementById("main_content");
// window.onload(show_log_in());
window.onload = show_log_in();


function show_sign_up() {
    mainContent.innerHTML = document.getElementById("sign_up").innerHTML;
    let sign_up_btn = document.getElementById('sign_up_btn');
    // sign_up_btn.addEventListener("click", signup);
    document.getElementById("switch_to_log_in").addEventListener("click", show_log_in);
}

function show_log_in() {
    mainContent.innerHTML = document.getElementById("log_in").innerHTML;
    let login_btn = document.getElementById('log_in_btn');
    // login_btn.addEventListener("click", login);
    document.getElementById("switch_to_sign_up").addEventListener("click", show_sign_up);
}

function show_main() {
    mainContent.innerHTML = document.getElementById("main").innerHTML;
    document.getElementById("add_product_btn").addEventListener("click", add_product);
    document.getElementById("delete_product_btn").addEventListener("click", delete_product);
    document.getElementById("show_list_btn").addEventListener("click", show_list);
    document.getElementById("show_category_btn").addEventListener("click", show_category);
}



//לטפל בחיצים והיסטריה//////////////////////////////////////////////////////////////////
