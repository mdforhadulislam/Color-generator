const body = document.querySelector('body');
body.style.background = "#32d9dd"
body.style.fontFamily = "Montserrat"
body.style.margin = "0px"
body.style.padding = "0px"

// root section select
const root = document.querySelector("#root");
root.style.width = " 100%";
root.style.height = "100vh";
root.style.display = "grid";
root.style.alignContent = 'center';
root.style.justifyContent = 'center';
root.style.alignItems = 'center';


// div create function
const div__create__function = (idName, parentsName) => {
    const create__div = document.createElement("div");
    create__div.setAttribute("id", idName);
    parentsName.append(create__div);
};

// p tag create function
const p__create__function = (parentsName) => {
    const create__div = document.createElement("p");
    parentsName.append(create__div);
};

// button
div__create__function("button", root);
//seclect the button
const button__div = document.querySelector("#button");
p__create__function(button__div);
button__div.style.padding = "20px 30px"
button__div.style.margin = "30px "
button__div.style.display = "inline-block"
button__div.style.background = "black"
button__div.style.color = "white"
button__div.style.transform = "translate(0%, 50%)"
button__div.style.borderRadius = "8px"
button__div.style.boxShadow = "0px 0px 10px #3f3f3f"
button__div.style.cursor = " pointer";
button__div.style.userSelect = " none";

// select the p tag
const button__div__p = document.querySelector('p')
button__div__p.innerHTML = "GENERATE  COLOR"
button__div__p.style.fontSize = "35px"
button__div__p.style.fontWeight = "700"
button__div__p.style.margin = "0px"
button__div__p.style.display = "inline-block"


// display color code code
div__create__function("output", root);
const output__div = document.querySelector('#output')
output__div.innerHTML = "#32d9dd"
output__div.style.fontSize = "25px"
output__div.style.fontWeight = "600"
output__div.style.padding = " 15px 20px";
output__div.style.background = "white";
output__div.style.textAlign = " center";
output__div.style.borderRadius = "10px"
output__div.style.margin = "30px"
output__div.style.boxShadow = "0px 0px 10px #3f3f3f"


// color genarator functionality 
button__div.onclick = () => {
    const hexa__number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color__code = '#'
    for (let i = 0; i < 6; i++) {
        const reandom__number = Math.round(Math.random() * 15);
        const color = hexa__number[reandom__number]
        color__code += color
    }
    console.log(color__code);
    output__div.innerHTML = color__code
    output__div.style.color = color__code
    body.style.background = color__code
}