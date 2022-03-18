const addBtnArray = document.querySelectorAll('.add-btn');
const quantityInput = document.querySelectorAll('.quantity');
const quantityPrice = document.querySelectorAll('.price');
const displayQuantity = document.querySelector('.display-quantity');
const displayCash = document.querySelector('.display-cash');

// let loadPrice = Number(localStorage.getItem('price'));
let loadQuantity = Number(localStorage.getItem('quantity'));
let itemArray = JSON.parse(localStorage.getItem('item-array'));

// displayQuantity.innerText = (loadQuantity === undefined) ? 0 : loadQuantity;
// displayCash.innerText = (loadPrice === undefined) ? 0 : loadPrice;
itemArray = (itemArray === null) ? [] : itemArray;

function update() {
    let numberOfItems = itemArray.filter(d => d.quantity !== 0);
    console.log(numberOfItems);
    displayQuantity.innerText = numberOfItems.length;
}

update();

if (itemArray.length === 0) {
    addBtnArray.forEach((btn, index) => {
        itemArray.push({
            name: document.querySelectorAll('.title')[index].innerText,
            quantity: 0,
            price: Number(quantityPrice[index].innerText.replace('$', '').trim())
        })
    });

    localStorage.setItem('item-array', JSON.stringify(itemArray));
}

let sum = 0;

addBtnArray.forEach((btn, index) => {
    sum += Number(itemArray[index].quantity * itemArray[index].price);
    

    btn.addEventListener('click', () => {
        let quantity = Number(displayQuantity.innerText);
        let cash = Number(displayCash.innerText);
        let price = Number(quantityPrice[index].innerText.replace('$', '').trim());

        quantity += Number(quantityInput[index].value);
        cash += quantityInput[index].value * price;

        // Update vao array 
        itemArray[index].quantity += Number(quantityInput[index].value);
        
        
        // Hien thi No of items 
        // displayQuantity.innerText = numberOfItems;
        update();
        // Hien thi tong tien 
        displayCash.innerText = cash;

        // Save to localStorage 
        // localStorage.setItem('quantity', numberOfItems);
        // localStorage.setItem('price', cash);
        localStorage.setItem('item-array', JSON.stringify(itemArray));
        
    })
});

displayCash.innerText = sum;
// module.exports = update;