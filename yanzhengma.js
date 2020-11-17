let codeBox = document.getElementById('box');
function createCode() {
    let area = '0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
    let text = "";
    for (var i = 1; i <= 4; i++) {
        let em = Math.round(Math.random() * (61 - 0) + 0);
        let char = area[em];
        if (!text.toUpperCase().includes(char.toUpperCase())) {
            text =text + char;
        }
        else {
            i--;
        }
        
        
    }
    codeBox.innerText = text;
}
createCode();
codeBox.onclick = createCode;



