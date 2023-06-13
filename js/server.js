//type :
//call db :get
//return data
// class server {
// sendRequst(method){

// }
function sendRequst_s(data, method, url) {
    let response_DB = null;
    let url_array = url.split('/');
    let kind = url_array[1];
    let user_information = url_array[2];
    let category_to_get = url_array[3];
    // try {
        switch (method) {
            case "POST":

                POST(data, kind, user_information);
                // alert(status);
                // network.return(status)
                //return error
                break;
            case "GET":
                response_DB = GET(kind, user_information, category_to_get);
                return response_DB;
                // if (response_DB[0] == true) {
                //     return [200, response_DB[1]];
                // }
                ////////////////////////////////////return of object
                break;
            case "DELETE":
                DELETE(data, kind, user_information);
                break;
            // case "PUT":
            //     break;
            default:
        }
    // }
    // catch (status) {
    //     if (status == 404 || status == 500) {
    //         return { "false", []};
    //     }
    // }
}