const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

products.forEach(productItem => {
    productItem.querySelectorAll('.product__quantity-control').forEach(control => {
        control.addEventListener('click', () => {
            let count = Number.parseInt(productItem.querySelector('.product__quantity-value').innerText);
            switch (control.innerText) {
                case ("-"):
                    count--;
                    (count < 1) ? count = 1 : count;
                    productItem.querySelector('.product__quantity-value').innerText = count;
                break;
                case ("+"):
                    count++;
                    productItem.querySelector('.product__quantity-value').innerText = count;
                break;
            }
        });
    });
    productItem.querySelector('.product__add').addEventListener('click', () => {
        let itemFlag = true;
        let productId = productItem.dataset.id;
        let productImgSrc = productItem.getElementsByTagName('img')[0].getAttribute('src');
        let countAdd = Number.parseInt(productItem.querySelector('.product__quantity-value').innerText);
        let goodsCount = cart.childElementCount;
        if (goodsCount > 0) {
            const cartList = cart.querySelectorAll('.cart__product');
            for (let cartItem of cartList) {
                if (cartItem.dataset.id === productId) { 
                    let cartProductCount = Number.parseInt(cartItem.querySelector('.cart__product-count').innerText);
                    cartItem.querySelector('.cart__product-count').innerText = cartProductCount + countAdd;
                    itemFlag = false;
                }
            }
        }
        if (itemFlag) {
            cart.insertAdjacentHTML('beforeEnd',
                `<div class="cart__product" data-id="${productId}">
                    <img class="cart__product-image" src="${productImgSrc}">
                    <div class="cart__product-count">${countAdd}</div>
                </div>`
            );
        }
        productItem.querySelector('.product__quantity-value').innerText = 1;
    })
});