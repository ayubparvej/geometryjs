
// function triangleLength() {

//     const tb = document.getElementById('triangle-b');
//     const tbValue = tb.value;
//     const base = parseFloat(tbValue);


//     const th = document.getElementById('triangle-h');
//     const thValue = th.value;
//     const height = parseFloat(thValue);

//     const area = 0.5 * base * height;

//     const h2 = document.createElement('h2');
//     h2.innerText = 'The area of the triangle is ' + area;

//     document.getElementById('triangle-area').appendChild(h2);

// }


function triangleLength() {
    const base = getInputValueByID('triangle-b')
    const height = getInputValueByID('triangle-h')

}

function getInputValueByID(inputValue) {

    const tb = document.getElementById(inputValue);
    const tbValue = tb.value;
    const base = parseFloat(tbValue);
    return base;
}

function setInnerText(innerTextValue) {
    const text = document.getElementById(innerTextValue);

}