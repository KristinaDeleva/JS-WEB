var RequestI = /** @class */ (function () {
    function RequestI(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined,
            this.fulfilled = false;
    }
    return RequestI;
}());
var myData = new RequestI('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
