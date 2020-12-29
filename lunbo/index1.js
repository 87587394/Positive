
let data = null;
let wrapper = document.getElementById('wrapper');
function getData() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', './banner.json', false)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = JSON.parse(xhr.response);
        }
    }
    xhr.send()
}
getData()
function render() {
    let warp = ``
    let lis = ``;
    data.forEach((item, index) => {
        warp += `<li>
        <img src="${item.img}" alt="">
      </li>`
        lis += `<li></li>`
    }
    )
    warp += `<li><img src="${data[0].img}" alt=""> </li>`
    wrapper.innerHTML = warp
    list.innerHTML = lis

}
render();
temp = 0;
function pmd(index) {
    temp++;
    typeof index === 'undefined' ? null : temp = index;
    if (temp > data.length + 1) {
        temp = 1;
        wrapper.style.left = 0 + 'px';
    }
    fos()
    utils.animate(wrapper, { left: temp * -800 }, 2000)
}
let timer = setInterval(() => {
    pmd()
}, 3000);

let liss = document.querySelectorAll('#list li')
function fos() {
    for (let i = 0; i < liss.length; i++) {
        if (i === temp) {
            liss[i].classList.add('active')
        }
        else {
            liss[i].classList.remove('active')
        }
        if (temp == data.length) {
            liss[0].classList.add('active')
        }
    }
}
fos()
let jiaodian = function () {
    for (let i = 0; i < liss.length; i++) {
        liss[i].onclick = function () {
            pmd(i)
        }
    }
}
jiaodian()
right.onclick = function () {
    if (temp >= data.length) {
        temp = -1
    }
    pmd(++temp)
}
left.onclick = function () {
    if (temp <= 0) {
        temp = 5
    }
    pmd(--temp)
}