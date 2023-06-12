
let categories = ['breads', 'milk products', 'fruits & vegetables', 'meat, poultry & fish', 'frozen goods', 'baking products', 'canned foods', 'dry goods', 'cleaning products', 'disposables', 'drinks', 'hygiene'];

function add_product(event) {
    // event.preventDefault();
    //אפשר שיצור רק פעם אחת?
    let container = document.getElementById("add_product_form");

    document.getElementById("add_product_btn").disabled = true;


    //name
    let label_name = document.createElement("label");
    label_name.innerText = "product name:";
    let name = document.createElement("input");
    name.id = "product_name";
    label_name.htmlFor = "product_name";
    name.required = "true";

    //ctg
    let label_ctg = document.createElement("label");
    label_ctg.innerText = "category:";
    let ctg = document.createElement("select");
    ctg.id = "product_ctg";
    label_ctg.htmlFor = "product_ctg";
    ctg.required = "true";
    categories.forEach(function (item) {
        let option = document.createElement('option');
        option.text = item;
        ctg.appendChild(option);
    });

    //price
    let label_price = document.createElement("label");
    label_price.innerText = "price:";
    let price = document.createElement("input");
    price.id = "product_price";
    price.type = "number";
    price.min = 0; price.step = 0.1;
    label_price.htmlFor = "product_price";
    price.required = "true";

    //amount
    let label_amount = document.createElement("label");
    label_amount.innerText = "amount:";
    let amount = document.createElement("input");
    amount.id = "product_amount";
    amount.type = "number";
    amount.min = 0;
    label_amount.htmlFor = "product_amount";
    amount.required = "true";

    //send
    let send = document.createElement("button");
    send.id = "send_new_product_btn";
    send.type = "submit";
    send.innerText = "add";
    container.append(label_name, name, label_ctg, ctg, label_price, price, label_amount, amount, send);
}

function delete_product() {

}
function show_list() {
    document.getElementById("show_list_btn").disabled = true;
    let request = new FXMLHttpRequest();
    let user_info = JSON.parse(localStorage.getItem("current_User")).email;

    request.open(0, "GET", "api/products/" + user_info);
    let response_n = request.send();

    let list_table = document.getElementById("list_table");
    let row = document.createElement("tr");
    let headers = ["name", "category", "price", "amount"];
    for (let k = 0; k < headers.length; k++) {
        let header = document.createElement("th");
        header.innerText = headers[k];
        row.appendChild(header);
    }
    list_table.append(row);
    let table_data;
    for (let j = 0; j < response_n[1].length; j++) {
        row = document.createElement("tr");
        table_data = document.createElement("td");
        table_data.innerText = response_n[1][j].name;
        table_data.className = "name_column";
        row.appendChild(table_data);
        table_data = document.createElement("td");
        table_data.innerText = response_n[1][j].category;
        row.appendChild(table_data);
        table_data = document.createElement("td");
        table_data.innerText = response_n[1][j].price;
        row.appendChild(table_data);
        table_data = document.createElement("td");
        table_data.innerText = response_n[1][j].amount;
        row.appendChild(table_data);

        list_table.appendChild(row);
    }
}


function show_category() {
    document.getElementById("show_category_btn").disabled = true;
    let choose_category = document.createElement("select");
    choose_category.id = "choose_category";
    choose_category.required = "true";
    categories.forEach(function (item) {
        let option = document.createElement('option');
        option.text = item;
        choose_category.appendChild(option);
    });
    let container = document.getElementById("category_to_get");

    let send = document.createElement("button");
    send.id = "get_by_ctg_btn";
    send.type = "submit";
    send.innerText = "get";
    container.append(choose_category, send);
}

function post() {
    let product = new Product(document.getElementById("product_name").value, document.getElementById("product_ctg").value, document.getElementById("product_price").value, document.getElementById("product_amount").value);
    let request = new FXMLHttpRequest();
    let user_info = JSON.parse(localStorage.getItem("current_User")).email;
    request.open(product, "POST", "api/products/" + user_info);
    request.send();
    // if (request.status == 200) { 
    //     show_main();
    // }

}

function get() {
    // event.preventDefault
    let request = new FXMLHttpRequest();
    let user_info = JSON.parse(localStorage.getItem("current_User")).email;
    let category_to_get = document.getElementById("choose_category").value;
    request.open(0, "GET", "api/products/" + user_info + "/" + category_to_get);
    let response_n = request.send();
    if (response_n[1] == null) {
        document.getElementById("fail_message").innerText = "no products found";
    }
    else {
        let list_table = document.getElementById("list_table");
        let row = document.createElement("tr");
        let headers = ["name", "category", "price", "amount"];
        for (let k = 0; k < headers.length; k++) {
            let header = document.createElement("th");
            header.innerText = headers[k];
            row.appendChild(header);
        }
        //row.append(document.createElement("th").innerText = "name", document.createElement("th").innerText = "category", document.createElement("th").innerText = "price", document.createElement("th").innerText = "amount");
        list_table.append(row);
        // appendChild(list_table);
        let table_data;
        for (let j = 0; j < response_n[1].length; j++) {
            // list_table("response recieved " + response_n[1][j].name);
            row = document.createElement("tr");
            table_data = document.createElement("td");
            table_data.innerText = response_n[1][j].name;
            table_data.className = "name_column";
            row.appendChild(table_data);
            table_data = document.createElement("td");
            table_data.innerText = response_n[1][j].category;
            row.appendChild(table_data);
            table_data = document.createElement("td");
            table_data.innerText = response_n[1][j].price;
            row.appendChild(table_data);
            table_data = document.createElement("td");
            table_data.innerText = response_n[1][j].amount;
            row.appendChild(table_data);
            list_table.appendChild(row);
        }
    }
}

//!!!!!!!!!!!!!!!
// function send_request(){

// }