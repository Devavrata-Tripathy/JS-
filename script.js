const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];

function changeColor(){
    r = Math.floor(Math.random() * 7);
    document.body.style.backgroundColor = colors[r];
}
let counter = 0;
function ctrInc(){
    document.getElementById('demo').innerHTML= counter + 1;
    counter = counter + 1;
}

function ctrDec(){
    document.getElementById('demo').innerHTML= counter - 1;
    counter = counter - 1;
}