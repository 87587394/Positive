let ary = [];
function getData() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'data.json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.response);
            console.log(data)
            render(data);
            ary = data;
        }
    }
    xhr.send()
}
getData();
function render(data = []) {
    let str = ``;
    data.forEach(item => {
        str += `<li class="phone_info">
        <img src="${item.img}" alt="">
        <p class="name">${item.title}</p>
        <P class="time">${item.time}</P>
        <p class="PR"><span class="price">${item.price}元</span><span class="num">${item.hot}</span></p>
    </li>`
    })
    phone.innerHTML = str;

}
let btn_up = document.getElementsByClassName('btn_up');
let btn_down = document.getElementsByClassName('btn_down');
let way = { 0: 'time', 1: 'hot', 2: 'price' }
for (let i = 0; i < btn_up.length; i++) {
    btn_up[i].xx = way[i];
    btn_up[i].onclick = function () {
        var res = this.xx;
        if (res != 'time') {
            let temp = ary.sort(function (a, b) {
                return a[res] - b[res];
            })
            render(temp);
        }
        else {
            let temp = ary.sort(function (a, b) {
                return a[res].replace(/-/g, "") - b[res].replace(/-/g, "");
            })
            render(temp);
        }
    }
}
for (let i = 0; i < btn_up.length; i++) {
    btn_down[i].xx = way[i];
    btn_down[i].onclick = function () {
        var res = this.xx;
        if (res != 'time') {
            let temp = ary.sort(function (a, b) {
                return b[res] - a[res];
            })
            render(temp);
        }
        else {
            let temp = ary.sort(function (a, b) {
                return b[res].replace(/-/g, "") - a[res].replace(/-/g, "");
            })
            render(temp);
        }
    }
}

var time = '20171020'
console.log(time.replace(/-/g,""))