let area = document.getElementsByClassName("result_p")[0];

function insert(symbol) {
    area.innerHTML+=symbol;
}

function erase() {
    area.innerHTML=area.innerHTML.substring(0,area.innerHTML.length-1);
}

function delete_all() {
    area.innerHTML="";
}

function result() {
    if(area.innerHTML.length!=0)
        area.innerHTML=eval(area.innerHTML);
    else
        console.log("Пустая строка!");
}