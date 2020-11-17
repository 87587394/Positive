var str = "https://www.baidu.com?name=zhufeng&age=10&id=14";

function qz(str) {
    var res = str.split("?");
    var ab = res[1].split(/=| |&/)
    var obj = {};
    for (var i = 0; i < ab.length; i += 2) {
        obj[ab[i]] = ab[i + 1];
    }
    console.log(obj)
    
}
qz(str)
