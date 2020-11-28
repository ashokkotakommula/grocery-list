//new item insert handler
let arr = [];
let sno = 1;
function insertItem() {
    let name = document.getElementById('item-name-input');
    let price = document.getElementById('item-price-input');
    let total = document.querySelector("#total")
    let quantity = document.getElementById('item-quant-input')
   
    if(name.value === "" || price.value === "") {
        return
    }

    // let bdy = document.querySelector('#tle')
    
    // let dd = document.createElement('div');
    // bdy.appendChild(dd);

    let btnn = document.createElement('img');
    btnn.setAttribute('src', "https://res.cloudinary.com/du0xsvxag/image/upload/v1606548517/times-circle-solid_zbo14l.svg")
    
    
    let it = `${String(name.value)}`;
    
    let pr = `${Number(price.value)}`;

    let quan = `${Number(quantity.value)}`;
    
    btnn.addEventListener('click', function() {
        row.style.display = "none"
        let i = Number([cell4.innerHTML])
        let val = arr.indexOf(i)
        let sum = 0;
        arr.splice([val],1)
       for(let i=0;i<arr.length;i++ ) {
        sum += arr[i]
       }
       total.innerHTML =  `Grand Total: ₹ ${sum}, No of Items: ${arr.length}`;
    })
    
    
    
    let table = document.querySelector('#tab');
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    let cell4 = row.insertCell(3)
    let cell5 = row.insertCell(4);

    let tot = `${pr * quan}`;
    cell1.innerHTML = `${it}`;
    cell2.innerHTML = `${pr}`;
    cell3.innerHTML = `${quan}`
    cell4.innerHTML = `${tot}`
    cell5.appendChild(btnn) 


    arr.push(Number(tot))

    let gt = 0;
    for(let i=0;i<arr.length;i++) {
        gt += arr[i]
    }

    total.innerHTML = `Grand Total: ₹ ${gt}, No of Items: ${arr.length}`;

    name.value = null;
    price.value = null;
    quantity.value = null;
}

