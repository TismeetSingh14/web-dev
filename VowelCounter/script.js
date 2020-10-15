// const cont = document.getElementsByClassName('answers');
const ele = document.getElementById('input');
const ans = document.getElementById('answer');
const pres = document.getElementById('premise');

function counter() {

    let vowels = "aeiouAEIOU";
    let count = 0;
    var txt = ele.value;

    if (txt == "") {
        alert("Enter some text");
        return;
    }

    for (var i = 0; i < txt.length; i++) {
        if (vowels.indexOf(txt[i]) !== -1) {
            count += 1;
        }
    }


    ele.value = "";
    pres.innerHTML = "The number of vowels in '" + txt + "' :"
    ans.innerHTML = count;
}