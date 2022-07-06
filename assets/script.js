let cartItems = document.querySelectorAll('.cart-item')

for (let i = 0; i < cartItems.length; i++) {
    let cartItem = cartItems[i]
    cartItem.index = i
    cartItem.totalQuantity = 1
    cartItem.totalQuantityText = cartItem.querySelector('.total-quantity')
    cartItem.productInfo = cartItem.querySelector('.product-info')
    cartItem.addQuantityButton = cartItem.querySelector('#quantity-up')
    cartItem.subtractQuantityButton = cartItem.querySelector('#quantity-down')
    cartItem.removeButton = cartItem.querySelector('.remove')

    cartItem.priceInfo = cartItem.productInfo.querySelector('P').textContent
    cartItem.price = cartItem.priceInfo.split(' ')
    cartItem.price = parseFloat(cartItem.price[0].slice(1))
    cartItem.totalPrice = cartItem.querySelector(".total-price")
    cartItem.totalPrice.append(document.createElement('p'))
    cartItem.totalPrice.querySelector('p').textContent = "$" + cartItem.price


    cartItem.addQuantityButton.addEventListener("click", function(){
        console.log('Adding')
        cartItem.totalQuantity++
        cartItem.totalQuantityText.textContent = 'Quantity: '+ cartItem.totalQuantity
        let currentTotal = cartItem.totalQuantity*cartItem.price
        cartItem.totalPrice.querySelector('p').textContent = "$" + currentTotal
    })

    cartItem.subtractQuantityButton.addEventListener("click", function(){
        console.log('Subtracting')
        cartItem.totalQuantity--
        if (cartItem.totalQuantity < 0) {
            cartItem.totalQuantity = 0
        }
        else {
            cartItem.totalQuantityText.textContent = 'Quantity: '+ cartItem.totalQuantity
            let currentTotal = cartItem.totalQuantity*cartItem.price
            cartItem.totalPrice.querySelector('p').textContent = "$" + currentTotal
        }
    })

    cartItem.removeButton.addEventListener("click", function(){
        let itemToRemove = cartItem.removeButton.parentElement
        itemToRemove.remove()
    })

    console.log(cartItem.totalPrice.children)

}
