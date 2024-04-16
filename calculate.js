
function triangleLength() {

    const tb = document.getElementById('triangle-b');
    const tbValue = tb.value;
    const base = parseFloat(tbValue);


    const th = document.getElementById('triangle-h');
    const thValue = th.value;
    const height = parseFloat(thValue);

    const area = 0.5 * tbValue * thValue;

    const h2 = document.createElement('h2');
    h2.innerText = 'The area of the triangle is ' + area;

    document.getElementById('triangle-area').appendChild(h2);




}