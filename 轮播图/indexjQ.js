let data;
function getData() {
    $.ajax({
        url: "./banner.json",
        async: false,
        success: function (res) {
            data = res;

        }
    });
}
getData();
function render() {
    let img = ``;
    let p = ``;
    $.each(data, (item, index) => {
        let imgs = ``;
        let lis = ``;
        $.each(data, function (index, item) {
            imgs += `<img src="${item.img}" alt="">`
            lis += `<li></li>`;
        });
        imgs += `<img src="${data[0].img}" alt="">`
        $('#wrapper').html(imgs);
        $('#list').html(lis);
    })
}
render()
let step = 0;
function automove(index) {
    step++;
    typeof index === 'undefined' ? null : step = index;
    if (step >= data.length + 1) {
        wrapper.style.left = 0 + 'px'
        step = 1;
    }
    change()
    $('#wrapper').animate({ left: -1000 * step }, 1000)
}
let timer = setInterval(automove, 3000);
function change() {
    if (step == data.length) {
        $('#list li').eq(0).addClass('active').siblings().removeClass('active')
    }
    $('#list li').eq(step).addClass('active').siblings().removeClass('active');

}
change();
$('#outer').mousemove(function () {
    clearInterval(timer)
})
$('#outer').mouseout(function () {
    timer = setInterval(automove, 3000)
})
$('#list li').click(function () {
    let num = $(this).index();
    automove(num)
})
$('#left').click(function () {
    if (step <= 0) {
        step = 4
    }
    automove(--step);
})
$('#right').click(function () {
    automove()
})

