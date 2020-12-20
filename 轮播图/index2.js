let outer = document.getElementById('outer');

let wrapper = document.getElementById('wrapper');
let data = null;
function getData() {
    let xhr = new XMLHttpRequest;
    xhr.open('get', './banner.json', false)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText);
            console.log(data)
        }
    }
    xhr.send()
}
getData();
function renderHtml() {
    let wrapperitems = ``;
    let listitem = ``;
    data.forEach((item, index) => {
        wrapperitems += `<li>
        <img src="${item.img}" alt="">
      </li>`;
        listitem += `<li></li>`;

    })
    wrapperitems += `<li><img src="${data[0].img}" alt=""> </li>`
    wrapper.innerHTML = wrapperitems;
    list.innerHTML = listitem;
}
renderHtml();
let step = 0;
function automove(index) {
    step++;
    typeof index == 'undefined' ? null : step = index;
    if (step >= data.length + 1) {
        wrapper.style.left = 0 + 'px'
        step = 1;
    }
    changeFocus()
    utils.animate(wrapper, { left: step * -800 }, 500)
}
let timer = setInterval(automove, 1000);

outer.onmousemove = function () {
    clearInterval(timer)
}
outer.onmouseout = function () {
    timer = setInterval(automove, 1000)
}
let lists = document.querySelectorAll('#list li');
function changeFocus() {
    for (let i = 0; i < data.length; i++) {
        if (step == i) {
            lists[i].classList.add('active')
        }
        else {
            lists[i].classList.remove('active')
        }
        if (step == data.length) {
            lists[0].classList.add('active')
        }
    }
}
changeFocus();
function jiaodian() {
    // for (let i = 0; i < lists.length; i++) {
    //     lists[i].onclick = function () {

    //         automove(i)
    //     }
    // }
    // lists.forEach((item,index) => {
    //     item.onclick = function () {  
    //         automove(index)
    //     }
    // })
    for (let key in lists) {
        lists[key].onclick = function () {
            automove(key)
        }
    }
}
jiaodian();

left.onclick = function () {
    if (step == 0) {
        step = 4
    }
    automove(--step)
}
right.onclick = function () {
    automove(++step)
}

