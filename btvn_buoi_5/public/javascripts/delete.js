const deleteBtns = document.querySelectorAll('.delete');
let itemArray = JSON.parse(localStorage.getItem('item-array'));

function update() {
    let numberOfItems = itemArray.filter(d => d.quantity !== 0);
    console.log(numberOfItems);
}

update();

deleteBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btn.parentElement.remove();
        itemArray[index].quantity = 0;
        // Update localStorage 
        localStorage.setItem('item-array', JSON.stringify(itemArray));
        history.back();
    })
})