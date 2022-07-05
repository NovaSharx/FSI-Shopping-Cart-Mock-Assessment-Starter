let totalQuantity = 1
let totalQuantityText = document.querySelector('.total-quantity')

let addQuantityButton = document.getElementById("quantity-up")
let subtractQuantityButton = document.getElementById("quantity-down")

addQuantityButton.addEventListener("click", function(){
    console.log('Adding')
    totalQuantity++

    totalQuantityText.textContent = 'Quantity: '+ totalQuantity
})

subtractQuantityButton.addEventListener("click", function(){
    console.log('Subtracting')
    totalQuantity--
    if (totalQuantity < 0){
        totalQuantity = 0
    }
    else {
        totalQuantityText.textContent = 'Quantity: '+ totalQuantity
    }
})

