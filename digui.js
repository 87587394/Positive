function fn(x, y) {
    var total = 0;
    for (var i = x; i <= y; i++) {
        total += i;
    }
    return total
}
console.log(fn(1, 100))

function dg(num) {
    if (num > 100) {
        return 0;
    }
    return num + dg(num + 1);

}
console.log(dg(1))

function dy(num) {
    if (num > 10uo'
    ) {
        return 
    }
    console.log(num);
    dy(num + 1);
}   
dy(1)
