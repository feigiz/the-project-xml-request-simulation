// function POST(userName, data, s_request){
//     localStorage.setItem(userName, JSON.stringify(data));
//     s_request.status = 200;
// }
// function break_up_url(url) {
//     let url_array = url.split('/');
//     let kind = url_array[1];
//     let user_information = url_array[2];
// }
function POST(data, url) {
    // localStorage.setItem(JSON.stringify("list for " + email), JSON.stringify(data))
    // return "";

    let url_array = url.split('/');
    let kind = url_array[1];
    let user_information = url_array[2];
    let products = JSON.parse(localStorage.getItem(JSON.stringify(kind + " " + user_information)));
    if (products == null)
        products = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == data.name) {
            //*
            let old_amount = Number(products[i].amount);
            let new_amount = Number(data.amount);
            let total = Number(new_amount + old_amount);
            data.amount = total;
            products.splice(i, 1);
        }
    }
    products.push(data);
    localStorage.setItem(JSON.stringify(kind + " " + user_information), JSON.stringify(products));
    // throw -1;
    return [true];
}

function GET(url) {
    let url_array = url.split('/');
    let kind = url_array[1];
    let user_information = url_array[2];
    // if(url_array[3] == null) {
    //     return [true, JSON.parse(localStorage.getItem(JSON.stringify(kind + " " + user_information)))];
    // }
    // else{
    //     let category_products = [];
    //     let products = JSON.parse(localStorage.getItem(JSON.stringify(kind + " " + user_information)));
    //     for (let i = 0; i < products.length; i++) {
    //         if(products[i].category == url_array[3]){
    //             category_products.push(products[i]);
    //             return [true, category_products];
    //         }
    //     }
    // }

    if (url_array[3] == null) {
        return [true, JSON.parse(localStorage.getItem(JSON.stringify(kind + " " + user_information)))];
    }
    else {
        let category_products = [];
        let products = JSON.parse(localStorage.getItem(JSON.stringify(kind + " " + user_information)));
        for (let i = 0; i < products.length; i++) {
            if (products[i].category == url_array[3]) {
                category_products.push(products[i]);
            }
        }
        return [true, category_products];
    }
}

function DELETE() {

}

// function OPEN(userName) {
//     // localStorage.
// }