var titles = new Array();
var texts = new Array();

function newTitle() {
    var name = "Title" + titles.length;
    var newTitle = document.createElement('input');
    newTitle.setAttribute("type", "text")
    newTitle.setAttribute("placeholder", name)
    newTitle.setAttribute("class", "title")
    newTitle.setAttribute("id", name)
    var workSpace = document.getElementById('workSpace');
    titles.push(name)

    workSpace.appendChild(newTitle);
}

function newText() {
    var name = "Text" + texts.length;

    var newTitle = document.createElement('textarea');
    newTitle.setAttribute("placeholder", name)
    newTitle.setAttribute("class", "text")
    newTitle.setAttribute("id", name)
    var workSpace = document.getElementById('workSpace');
    texts.push(name)

    workSpace.appendChild(newTitle);
}

function Delete() {
    var len = titles.length - 1;
    var x = document.getElementById("Text" + len);
    var y = document.getElementById("Title" + len);
    x.remove();
    y.remove();
    titles.pop();
    texts.pop();
    console.log(x);
}

function ClearAll() {
    var len = titles.length - 1;
    var x = document.getElementById("Text" + len);
    var y = document.getElementById("Title" + len);
    x.remove();
    y.remove();
    titles.pop();
    texts.pop();
    console.log(x);
}

function ClearAll() {
    var len1 = titles.length - 1;
    var len2 = texts.length - 1;
    while (len1 != -1 || len2 != -1) {
        len1 = titles.length - 1;
        len2 = texts.length - 1;
        var x = document.getElementById("Title" + len1);
        var y = document.getElementById("Text" + len2);
        if (len1 != -1) {
            x.remove();
            titles.pop();
        }
        if (len2 != -1) {
            y.remove();
            texts.pop();
        }
    }
}