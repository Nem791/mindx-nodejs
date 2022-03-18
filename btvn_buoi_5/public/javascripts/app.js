const formCart = document.getElementById('form-cart');
console.log(formCart);

// const sentPriceInput = document.getElementById('sent-price');
// const sentQuantityInput = document.getElementById('sent-quantity');
const sentArrayInput = document.getElementById('sent-array');
const sentArrayObjectsInput = document.getElementById('sent-array-objects');

// console.log(uniqueSet);

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // sentPriceInput.value = Number(displayCash.innerText);
    // sentQuantityInput.value = Number(displayQuantity.innerText);
    // sentArrayInput.value = JSON.stringify([...uniqueSet]);
    sentArrayObjectsInput.value = JSON.stringify(itemArray);

    formCart.submit();

});

