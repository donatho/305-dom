var h2 = document.querySelector('#book-list h2');
h2.innerHTML = "India's Little Pig, The Book";

var fstli = document.querySelector('#book-list li:first-child .delete');

function changeColor(){
    var el = document.querySelectorAll("#book-list li .name");
    var meuarray = Array.from(el);
    for(var i=0; i<meuarray.length; i++){
        meuarray[i].style.backgroundColor = "red";
    }
}
fstli.addEventListener('click', changeColor);

/*Para selecionar mais de um elemento:
var el = document.querySelectorAll("#book-list");
    //retorna uma lista do tipo nodelist

//Para poder percorrer essa lista com for precisamos
converter para Array
var meuarray = Array.from(el);
for(var i=0; i<meuarray.length; i++){
    meuarray[i].style.backgroundColor = "red";
}*/