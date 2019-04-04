class RequestI {
    public method: string;
    public uri: string;
    public version: string;
    public message: string;
    public response: undefined;
    public fulfilled: false;

    constructor(method: string,
        uri: string, version: string, message: string,) {
            this.method = method;
            this.uri = uri;
            this.version = version;
            this.message = message;
            this.response= undefined, 
            this.fulfilled= false
    }
}

let myData = new RequestI('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);