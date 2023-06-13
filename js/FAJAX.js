
class FXMLHttpRequest {
    constructor() {
        this.data = null;
        this.method = "";
        this.url = "";
        this.readyState = 0;
        this.status = 0;
        this.response = null;
        this.onreadystatechange = ()=>{};
    }

    open(data, method, URI) {
        this.data = data;
        this.method = method;
        this.url = URI;
        this.readyState = 1;
    }

    send() {
        // this.readyState = 2;
        //    /*let result = */network.sendRequst(this.data, this.method, this.url, this.readyState);
        // let response_s = sendRequst_n(this.data, this.method, this.url, this.readyState);
        this.response = sendRequst_n(this.data, this.method, this.url);
        if(this.response){
            this.readyState = 4;
            this.status = this.response.status;
        }
        if(this.readyState == 4){
            this.onreadystatechange();
        }

        // if (response_s[0] == 200)
        //     this.readyState = 4;
        // else
        //     this.readyState = 0;
        /////////////////////////////////////////////////////////////
        // return [this.readyState, response_s[1]];
        // return response_s;
        //לא נכון
    }

    // return(readyState) {
    //     if(readyState == 4 && this.status) {

    //     }
    // }


}

//להסתכל ב:
//https://www.w3schools.com/js/js_ajax_http.asp