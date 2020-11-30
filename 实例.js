
function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
}
Foo.prototype.getName = function () {
    console.log(3);
}
var getName = function () {
    console.log(4);
}
function getName() {
    console.log(5);
}
Foo.getName();//2
getName(); //f4-f5中由于变量提升 f4名字提升f5全被提升,而后到f4重新赋值,4
Foo().getName();//执行foo,getName没有声明全局下getName为f1 1
getName(); //全局下为f1 1
new Foo.getName(); //f1=new foo.getName() Foo里有getName 执行为2
new Foo().getName();//var f1=new Foo() f1.getName()没有从原型上找 3
new new Foo().getName(); //3