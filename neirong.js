
var box = document.getElementById('box');
var btn = box.getElementsByTagName('li');
var con = box.getElementsByTagName('div');
function fn(w) {
    for (var i = 0; i < btn.length; i++){
        btn[i].className = "";
        con[i].className = "";
    }
    btn[w].className = "openon";
    con[w].className = "openon";
}
for (let n = 0; n < btn.length; n++){
    btn[n].onclick = function () {
        fn(n);
    }
}
