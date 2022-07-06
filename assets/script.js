let cartItems = document.querySelectorAll('.cart-item') // Collect all cart items into an array

// This loop creates all necessary variables and event listeners for each cart item
for (let i = 0; i < cartItems.length; i++) {
    let cartItem = cartItems[i]
    cartItem.totalQuantity = 1
    cartItem.totalQuantityText = cartItem.querySelector('.total-quantity')
    cartItem.addQuantityButton = cartItem.querySelector('#quantity-up')
    cartItem.subtractQuantityButton = cartItem.querySelector('#quantity-down')
    cartItem.removeButton = cartItem.querySelector('.remove')

    // Variables for total price
    cartItem.productInfo = cartItem.querySelector('.product-info')
    cartItem.priceInfo = cartItem.productInfo.querySelector('P').textContent // Collects price as a string
    cartItem.price = cartItem.priceInfo.split(' ') // Seperates the price string into an array of words
    cartItem.price = parseFloat(cartItem.price[0].slice(1)) // Grabs the word with the price info, removes the $ sign and converts to a numerical value
    cartItem.totalPrice = cartItem.querySelector(".total-price")
    cartItem.totalPrice.append(document.createElement('p'))
    cartItem.totalPriceValue = cartItem.totalPrice.querySelector('p')
    cartItem.totalPriceValue.textContent = "$" + cartItem.price // Displays the initial price total

    // Add Button
    cartItem.addQuantityButton.addEventListener("click", function(){
        cartItem.totalQuantity++
        cartItem.totalQuantityText.textContent = 'Quantity: '+ cartItem.totalQuantity
        let currentTotal = cartItem.totalQuantity * cartItem.price // Calculates price total after increasing quantity
        cartItem.totalPriceValue.textContent = "$" + currentTotal //Updates new price total
    })

    // Subtract Button
    cartItem.subtractQuantityButton.addEventListener("click", function(){
        cartItem.totalQuantity--
        if (cartItem.totalQuantity < 0) {
            cartItem.totalQuantity = 0 // Ensures the quantity never drops below zero
        }
        else {
            cartItem.totalQuantityText.textContent = 'Quantity: '+ cartItem.totalQuantity
            let currentTotal = cartItem.totalQuantity * cartItem.price // Calculates price total after decreasing quantity
            cartItem.totalPriceValue.textContent = "$" + currentTotal //Updates new price total
        }
    })

    // Remove Button
    cartItem.removeButton.addEventListener("click", function(){
        let itemToRemove = cartItem.removeButton.parentElement
        itemToRemove.remove()
    })

}
