//type :
//call db :get
//return data
// class server {
// sendRequst(method){

// }
function sendRequst_s(data, method, url) {
    let response_DB = null;
    switch (method) {
        case "POST":
            try {
                response_DB = POST(data, url);
            }
            catch (status) {
                alert(status);
                network.return(status)
            }
            break;
        case "GET":
            response_DB = GET(url);
            // if (response_DB[0] == true) {
            //     return [200, response_DB[1]];
            // }
            break;
        case "DELETE":
            DELETE(url);
            break;
        // case "PUT":
        //     break;
        default:
    }
    // DB.sendRequst(data, method, url);
    // }
    if (response_DB[0] == true) {
        return [200, response_DB[1]];
    }
    else
        return [400];

}
