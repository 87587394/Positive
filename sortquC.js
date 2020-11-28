
?
console.log(f1.getX)
console.log(f1.getX==f2.getX);//0
console.log(f1.getY==f2.getY);//1
console.log(f1.__proto__.getY==Fn.prototype.getY);//1
console.log(f1.__proto__.getX==f2.getX);//0
console.log(f1.getX===Fn.prototype.getX);//0
console.log(f1.constructor);//Fn
console.log(Fn.prototype.__proto__.constructor);//object
f1.getX();//100
f1.__proto__.getX();//un
f2.getY();//200
Fn.prototype.getY();//un