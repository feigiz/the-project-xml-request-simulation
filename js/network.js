// class network {
//     sendRequst(data, method, url) {
//         server.sendRequst(data, method, url);
// //call server
//     }
// }

function sendRequst_n(data, method, url) {
    // server.sendRequst(data, method, url);
    let response = null;
    return sendRequst_s(data, method, url);
    //call server
}

// function respond(response) {
//     let state = this.state;
//     alert(state);
//     if (response.state == true) {
//         this.state = 4;
//     }
//     if(state != this.state){
//         this.onreadystatechange(response);
//     }
// }
