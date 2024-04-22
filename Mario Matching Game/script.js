let chk1 = document.querySelector('#check1');
let chk2 = document.querySelector('#check2');
let chk3 = document.querySelector('#check3');
let reset = document.querySelector(".reset");

chk1.onclick = function(){
    if(chk1.checked === true){
        chk1.disaled = 'true';
    }
}
chk2.onclick = function(){
    if(chk2.checked === true){
        chk2.disaled = 'true';
    }
}
chk3.onclick = function(){
    if(chk3.checked === true){
        chk3.disaled = 'true';
    }
}

reset.onclick = function(){
    chk1.disaled = false;
    chk1.checked = false;

    chk2.disaled = false;
    chk2.checked = false;

    chk3.disaled = false;
    chk3.checked = false;

}