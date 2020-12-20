let data;
let getData = () => {
    $.ajax({
        url: "./banner.json",
        async: false,
        success: function (res) {
            data = res;
        }
    });
}
getData()
data = Array.from(data);
let render = () => {
    let img = ``;
    let lists = ``;
    data.forEach((item, index) => {

        img += `<li><a href="${item.link}"><img src="${item.img}" title="${item.desc}"></a></li>`;
        lists += `<li>0${++index}</li>`
    })
    $('#list').html(img);
    $('#First_fouce_list').html(lists);
}
render()
let step = 0;

let automove = () => {
    step++;
    step == 5 ? step = 0 : null;
    changeTig();
    let desc = data[step].desc;
    $('#desc').html(desc)
    $('#list li').eq(step).fadeIn(2000).siblings().fadeOut(2000);
}
let changeTig = () => {
    $('#First_fouce_list li').eq(step).addClass('active').siblings().removeClass('active')
}
automove()
changeTig();
$('#First_fouce_list li').click(function () {
    step=$(this).index()-1
    automove()
})
let timer = setInterval(automove, 3000);
$('.First_header').hover(()=>{
    clearInterval(timer); 
},()=>{
    timer=setInterval(automove, 3000);
})
