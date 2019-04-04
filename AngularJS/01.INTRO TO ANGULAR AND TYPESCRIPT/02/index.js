var Ticket = /** @class */ (function () {
    function Ticket(destinationName, price, status) {
        this.destinationName = destinationName;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function tickets(arr, criteria) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var data = arr_1[_i];
        var tokens = data.split('|');
        var destinationName = tokens[0];
        var price = Number(tokens[1]);
        var status_1 = tokens[2];
        var ticket = new Ticket(destinationName, price, status_1);
        result.push(ticket);
    }
    return result.sort(function (a, b) { return (a.criteria > b.criteria ? 1 : -1); });
}
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'destination'));
