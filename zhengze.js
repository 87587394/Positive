let str = 'asd123123aa434';
let reg = /\d{3}/g
console.log(reg.exec(str))

let str = '2020-11-11';
console.log(str.replace(/-/g, ''));
let str = '{5}年{6}月{7}日';
var res = /({\d+})/g;
console.log(str.match(res));
console.log(res.exec(str))

function myMatch(reg) {
    if (!reg.global) {
        return reg.exec(this)
    }
    let obj{
        big: [];
    small: [];
}
let Iterator = this.matchAll(reg);
for ()
}
String.prototype.myMatch = myMatch;


let str = '';
str[0] = 1;
console.log(str)

let time = '2020-1-2';
let arg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/g
time = time.replace(arg, function (...ary) {
    return ary[1] + '年' + ary[2] + '月' + ary[3] + '日';
})
console.log(time);

let str = 'good good study,day day up!'
let reg = /\b([a-zA-Z])([a-z])*\b/g
str = str.replace(reg, function (...ary) {
    // let [a, b] = ary;
    // // a = a.substring(1)
    // b = b.toUpperCase()
    // return b+a.slice(1);
    console.log(ary)
})
console.log(str)


let url = 'http://www.baidu.com?name=erYa&age=18#inde12_x';
String.prototype.queryUrlParams = function () {
    let reg = /([^?=&#]+)=([^?=&#]+)/g;
    let obj = {}
    this.replace(reg, function (...ary) {
        let [, a, b] = ary;
        obj[a] = b;
    })
    this.replace(/#(\w+)/g, function (...ary) {

        obj.hash = ary[1]
    })
    console.log(obj)
}
url.queryUrlParams()




let time = '2019-12-3 12:10:10';
function mytime(temp = '{0}年{1}月{2}日{3}时{4}分{5}秒') {
    let arg = this.match(/\d+/g);
    // console.log(ary)
    temp = temp.replace(/\{(\d)\}/g, function (...ary) {
        let [, a] = ary;
        let bb = arg[a] || '00'
        bb = bb.length < 2 ? "0" + bb : bb;
        return bb
    })
    return temp;
}
String.prototype.mytime = mytime;
console.log(time.mytime('{0}~{1}~{2}~{3}~{4}~{5}'))

let reg = /^(\+|\-)?([0-9]|[1-9]\d+)(\.\d+)?$/;
console.log(reg.test('+2.13'))


let password = /^\w{6,18}$/;
console.log(password.test('assas_2sar12sasaf'));


let name = /^[\u4E00-\u9FA5]{2,4}(\.[\u4E00-\u9FA5]){0,4}$/;
console.log(name.test('啊啊啊啊.啊.啊'))

let IDcard = /^([1-9])(\d{5})(19\d{2}|20\d{2})(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])(\d{2})(\d)(\d|X)$/;
console.log(IDcard.test('111111191111111121'));
let res = IDcard.exec('111111191111111111');
let sex = '男'
if (res[6] % 2 !== 0) {
    sex = '女'
}
console.log(res[3] + '年' + res[4] + '月' + res[6] + '日');
console.log(sex); 
