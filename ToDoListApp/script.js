const clear = document.querySelector(".clear");
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin"
const LINE_THROUGH = "lineThrough";

const options = {weekday:"long",month:"short",day:"numeric"};
const today = new Date();


let LIST,id;
let data = localStorage.getItem("TODO");
if(data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}

else {
    LIST = [];
    ID = 0;
}

function loadList(array) {
    array.forEach(function(item){
        addToDo(item.name,item.id,item.done,item.trash);
    });
}

clear.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
});

const myDate = today.toLocaleDateString("en-US",options);
dateElement.innerHTML = "<b>" + `${myDate}` + "</b>";

function addToDo(todo,id,done,trash){
    if(trash) {
        return ;
    }

    const DONE = done? CHECK:UNCHECK;
    const LINE = done? LINE_THROUGH:"";
    const item = `<li class = "item">
                    <i class="fa ${DONE} co" job="complete" id = "${id}"></i>
                    <p class="text ${LINE}">${todo}</p>
                    <i class="fa fa-trash-o de" job="delete" id = "${id}"></i>
                  </li>`;

    const position = "beforeend";

    list.insertAdjacentHTML(position,item);
}

document.addEventListener("keyup",function(even) {
    if(event.keyCode == 13)
    {
        const todo = input.value;

        if(todo){
            addToDo(todo,id,false,false);

            LIST.push({
                name:todo,
                id:id,
                done:false,
                trash:false
            })

            localStorage.setItem("TODO",JSON.stringify(LIST));
            id++;
        }

        input.value = "";
    }
});


function completed(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done?false:true;
}

function deleted(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

list.addEventListener("click",function(event)
{
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){
        completed(element);
    }

    else if(elementJob == "delete") {
        deleted(element);
    }

    localStorage.setItem("TODO",JSON.stringify(LIST));
});