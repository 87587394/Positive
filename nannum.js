function fn() {
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        var a = Number(arguments[i]);
        if (!isNaN(a)) {
            res = res + a;
        }
        
    }
    return res;
}
console.log(fn(1, 2, "5","5px"));

