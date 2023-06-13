let categories = ['breads', 'milk products', 'fruits & vegetables', 'meat, poultry & fish', 'frozen goods', 'baking products', 'canned foods', 'dry goods', 'cleaning products', 'disposables', 'drinks', 'hygiene'];

function add_product(event) {
    // event.preventDefault();
    //אפשר שיצור רק פעם אחת?
    let container = document.getElementById("add_product_form");

    document.getElementById("add_product_btn").disabled = true;
    document.getElementById("list_table").innerHTML = null;
    document.getElementById("category_to_get").innerHTML = null;
    
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

function get_ctg(event) {
    event.preventDefault();
    let user_info = JSON.parse(localStorage.getItem("current_User")).email;
    let category_to_get = document.getElementById("choose_category").value;
    document.getElementById("category_to_get").innerHTML = null;
    document.getElementById("show_category_btn").disabled = false;
    get("api/products/" + user_info + "/" + category_to_get, "show client");
}

function get(url, purpose) {
    let list_table = document.getElementById("list_table");
    list_table.innerHTML = null;
    document.getElementById("fail_message").innerHTML = null;
    let request = new FXMLHttpRequest();
    request.open(null, "GET", url);
    request.onreadystatechange = () => {
        if (request.status == 200) {
            if (purpose == "show client") {
                show_list_to_client(request.response.data, list_table);
            }
            else {
                return request.response.data;
            }
        }
        else {
            document.getElementById("fail_message").innerText = "ERROR: failed to get product list";
        }
    }
    request.send();
}

function show_list() {
    document.getElementById("category_to_get").innerHTML = null;
    let user_info = JSON.parse(localStorage.getItem("current_User")).email;
    get("api/products/" + user_info, "show client");
    
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
    let list_table = document.getElementById("list_table");
    list_table.innerHTML = null;

}

function post(event) {
    event.preventDefault();
    let product = new Product(document.getElementById("product_name").value, document.getElementById("product_ctg").value, document.getElementById("product_price").value, document.getElementById("product_amount").value);
    document.getElementById("add_product_form").innerHTML = null;
    document.getElementById("add_product_btn").disabled = false;
    let request = new FXMLHttpRequest();
    let user_info = JSON.parse(localStorage.getItem("current_User")).email;
    request.onreadystatechange = () => {
        if (request.status == 200) {
            console.log("product added successfully");
        }
        else {
            document.getElementById("fail_message").innerText = "ERROR: failed to add product";
        }
    }
    request.open(product, "POST", "api/products/" + user_info);
    request.send();
}



function show_list_to_client(data, list_table) {
    if (data.length < 1) {
        document.getElementById("fail_message").innerText = "no products found under this category";
    }
    else {

        let row = document.createElement("tr");
        let headers = ["name", "category", "price", "amount"];
        for (let k = 0; k < headers.length; k++) {
            let header = document.createElement("th");
            header.innerText = headers[k];
            row.appendChild(header);
        }
        list_table.append(row);
        let table_data;
        for (let j = 0; j < data.length; j++) {
            row = document.createElement("tr");
            table_data = document.createElement("td");
            table_data.innerText = data[j].name;
            table_data.className = "name_column";
            row.appendChild(table_data);
            table_data = document.createElement("td");
            table_data.innerText = data[j].category;
            row.appendChild(table_data);
            table_data = document.createElement("td");
            table_data.innerText = data[j].price;
            row.appendChild(table_data);
            table_data = document.createElement("td");
            table_data.innerText = data[j].amount;
            row.appendChild(table_data);
            list_table.appendChild(row);
        }
    }
}
