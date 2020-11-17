let codeBox = document.getElementById('box');
function createCode() {
    let area = '0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
    let text = "";
    while(text.length < 4) {
        let em = Math.round(Math.random() * (61 - 0) + 0);
        let char = area[em];
        if (!text.toUpperCase().includes(char.toUpperCase())) {
            text = text + char;
        }
    }

    codeBox.innerText = text;
}
createCode();
codeBox.onclick = createCode;



