let cartItems = document.querySelectorAll('.cart-item')

for (let i = 0; i < cartItems.length; i++) {
    let cartItem = cartItems[i]
    cartItem.index = i
    cartItem.totalQuantity = 1
    cartItem.totalQuantityText = cartItem.querySelector('.total-quantity')
    cartItem.addQuantityButton = cartItem.querySelector('#quantity-up')
    cartItem.subtractQuantityButton = cartItem.querySelector('#quantity-down')
    cartItem.removeButton = cartItem.querySelector('.remove')

    cartItem.addQuantityButton.addEventListener("click", function(){
        console.log('Adding')
        cartItem.totalQuantity++
        cartItem.totalQuantityText.textContent = 'Quantity: '+ cartItem.totalQuantity
    })

    cartItem.subtractQuantityButton.addEventListener("click", function(){
        console.log('Subtracting')
        cartItem.totalQuantity--
        if (cartItem.totalQuantity < 0) {
            cartItem.totalQuantity = 0
        }
        else {
            cartItem.totalQuantityText.textContent = 'Quantity: '+ cartItem.totalQuantity
        }
    })

    cartItem.removeButton.addEventListener("click", function(){
        let itemToRemove = cartItem.removeButton.parentElement
        itemToRemove.remove()
    })
}
