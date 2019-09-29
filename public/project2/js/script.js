if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else {
    ready()
}
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    
    var qtyInputs = document.getElementsByClassName('cart-qty-input')
    for (var i = 0; i < qtyInputs.length; i++) {
        var input = qtyInputs[i]
        input.addEventListener('change', qtyChanged)
    }
    
    var addToCartBtns = document.getElementsByClassName('shop-item-btn')
    for (var i = 0; i < addToCartBtns.length; i++) {
            var button = addToCartBtns[i]
            button.addEventListener('click', addToCartClicked)
    }
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyClicked)
}

function buyClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function qtyChanged (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('item-title')[0].innerText
    var price = shopItem.getElementsByClassName('item-price')[0].innerText
    var imgSrc = shopItem.getElementsByClassName('img-top')[0].src
    addItemToCart(title, price, imgSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imgSrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = ` 
        <div class="cart-item cart-column">
            <img class="cart-item-img" src="${imgSrc}">
            <span class="cart-item-title"> ${title} </span>
        </div>
        <span class="cart-price cart-column"> ${price} </span>
        <div class="cart-qty cart-column">
            <input type="number" class="cart-qty-input" value="1">
            <button type="button" class="btn btn-danger"> Remove </button>
        </div> `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-qty-input')[0].addEventListener('change', qtyChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    var tax = 0
    var subTotal = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-qty-input')[0]
        var price =parseFloat(priceElement.innerText.replace('$', ''))
        var qty = quantityElement.value
        total = total + (price * qty)
        tax = (total / 100)*9.25
        subTotal = total + tax
    }
    total = Math.round(total * 100) / 100
    tax = Math.round(tax * 100) / 100
    subTotal = Math.round(subTotal * 100) / 100
    
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    document.getElementsByClassName('cart-tax-total')[0].innerText = '$' + tax
    document.getElementsByClassName('sub-total-price')[0].innerText = '$' + subTotal
}

