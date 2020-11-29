// function fn(name,age) {
//     this.name = name;
//     this.age = age;
// }
function _new(F) {
    let arg = Array.from(arguments).slice(1);//将arg除第一项构造函数外的变量转为数组赋值给arg
    let obj = Object.create(fn.prototype);//让实例__proto__指向原型的prototype
    fn.apply(obj,arg);//改变fn中this指向obj,并将arg作为实参并且让fn执行
    return obj;//输出地址为obj,
}
// let f1 = _new(fn,'zed',22) fn可指向任何构造函数,f1指向_new的return的obj的地址且f1_proto__==fn.prototype
console.log(f1)