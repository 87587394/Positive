function fn(x, y) {
    console.log(this.name, x + y)
}
let obj = { name: 'zed' };
// fn.call(obj,10,20)==>zed 30 封装 changeThis 使得 changethis(fn,obj,10,20)出现一样的结果
function changeThis(f, obj) {
    let arr = Array.from(arguments).slice(2);
    obj.f = fn;
    obj.f(...arr);
    delete obj.f

}
changeThis(fn, obj, 10, 20);
let ary = [1, 2, 5, 6]
max=Math.max(...ary)
// max = Math.max.apply(null,ary);
console.log(max);