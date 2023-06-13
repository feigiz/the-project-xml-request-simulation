function POST(data, kind, user_information) {
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
}

function GET(kind, user_information, category_to_get) {
    if (category_to_get == null) {
        return {"status":200, "data":JSON.parse(localStorage.getItem(JSON.stringify(kind + " " + user_information)))};
    }
    else {
        let category_products = [];
        let products = JSON.parse(localStorage.getItem(JSON.stringify(kind + " " + user_information)));
        for (let i = 0; i < products.length; i++) {
            if (products[i].category == category_to_get) {
                category_products.push(products[i]);
            }
        }
        return  {"status":200, "data":category_products};//*
        //לעשות אובייקט
    }
}

function DELETE() {

}

// function OPEN(userName) {
//     // localStorage.
// }