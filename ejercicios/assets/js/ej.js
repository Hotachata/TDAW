function prob1(){
    let num = document.getElementById("input").value;
    let res = document.getElementById("res");
    if (num%2==0) {
        res.value="Par";
        console.log("Par");
    } else {
        res.value="Impar";
        console.log("Impar");
    }
}

function prob2(){
    let num = document.getElementById("input").value;
    let pa = document.getElementById("parent");
    let array = [];
    for (let i = 1; i <= 12; i++) {
        array.push(num*i);
	    let p = document.createElement('p');
	    p.textContent = num + " x " + i + " = " + num*i;
	    pa.appendChild(p);
    }
    console.log(array);
}

function prob3(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let res = document.getElementById("res");
    let mult=0;
    let array = [];

    for (let i = 1; i <= num2; i++) {
        array.push(num1);
        // res.value += num1 + " + ";
        mult = mult+num1;
    }
    console.log(array);
    res.value = array.join(" + ") + " = " + mult;
}

function prob4(){
    let array = document.getElementById("input").value;
    let res = document.getElementById("res");
    array = array.split(" ");
    res.value=Math.max(...array);
}

function prob5(){
    let a = document.getElementById("vec1").value;
    let b = document.getElementById("vec2").value;
    let res = document.getElementById("res");
    let c = [];
    a=a.split(" ");
    b=b.split(" ");
    if (a.length==b.length) {
        for (let i = 0; i < a.length; i++) {
            c[i] = Number(a[i]) + Number(b[i]);
        }
        res.value = c;
    } else {
        res.value="Los vectores deben ser del mismo tamaño";
    }
}

function prob6(){
    
}