let count = 0;
let count1 = 0;
let right = document.getElementById("rightled");
let left = document.getElementById("leftled");

function addone(){
count += 1;
right.textContent = count;
}

function addtwo(){
    count += 2;
    right.textContent = count;
}

function addthree(){
    count += 3;
    right.textContent = count;
}

function addone1(){
    count1 += 1;
    left.textContent = count1;
}

function addtwo1(){
    count1 += 2;
    left.textContent = count1;
}

function addthree1(){
 count1 += 3;
    left.textContent = count1;
}

function reset(){
    count= 0;
    count1 = 0;
    right.textContent = count;
    left.textContent = count1;
}
