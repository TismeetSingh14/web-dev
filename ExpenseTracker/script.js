const btn = document.getElementById("buttonShow").addEventListener('click',loadData);
const ele = document.getElementById('expenseTable');
function loadData(){
    var res = new XMLHttpRequest();
    res.open('GET','data.json',true);

    res.onload = function(){
        if(this.status == 200){
            var user = JSON.parse(this.responseText);
            var output = '';
            for(var i = 0; i < 5;i++) {
                var name = user[i].Name;
                var type = user[i].Type;
                var date = user[i].Date;
                var amount = user[i].Amount;
                output += '<tr><td>' +`${name}` + '</td><td>' +`${type}` + '</td><td>' +`${date}` + '</td><td>' +`${amount}` + '</td></tr>';
    
            }
            ele.innerHTML += output;
        }
    }

    res.send();
}

const btn2 = document.getElementById("buttonSave").addEventListener('click',showData);

function showData(){
    const ele1 = document.getElementById('name').value;
    const ele2 = document.getElementById('type').value;
    const ele3 = document.getElementById('date').value;
    const ele4 = document.getElementById('amount').value;
    var output= ""
    output += '<tr><td>' +`${ele1}` + '</td><td>' +`${ele2}` + '</td><td>' +`${ele3}` + '</td><td>' +`${ele4}` + '</td></tr>';
    ele.innerHTML += output;
}