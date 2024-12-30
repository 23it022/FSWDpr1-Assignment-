const cart = [];


const addProduct = (product) => {
    cart.push(product);
    updateCartDisplay();
};


const calculateTotal = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
};


const removeProduct = (productName) => {
    const index = cart.findIndex(product => product.productName === productName);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartDisplay();
    }
};


const updateCartDisplay = () => {
    const cartList = document.getElementById('cartList');
    const totalCostElement = document.getElementById('totalCost');
    

    cartList.innerHTML = '';
    

    cart.forEach(({ productName, price, quantity }) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Product: ${productName}, Price: $${price.toFixed(2)}, Quantity: ${quantity}`;
        cartList.appendChild(listItem);
    });
    

    const totalCost = calculateTotal();
    totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
};


document.getElementById('addProductBtn').addEventListener('click', () => {
    const productName = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    
    if (productName && !isNaN(price) && !isNaN(quantity)) {
        addProduct({ productName, price, quantity });

        document.getElementById('productName').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value = '';
    } else {
        alert('Please enter valid product details.');
    }
});