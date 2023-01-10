function updateProducts(product , price , isIncreasing){
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;

    }

    else if(isIncreasing == false && productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

    // update product total 
    const productTotal = document.getElementById(product + "-total");
    product.innerText  = productNumber * price;
    
    // calculate total 
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 399.99;
    const caseTotal = getInputValue('case') * 499.99;
    const centerTotal = getInputValue('center') * 699.99;
    const lastTotal = getInputValue('last') * 599.99;
    const totalPrice = phoneTotal + caseTotal + centerTotal + lastTotal;

    // update on the HTML 

    document.getElementById('total-price').innerText = totalPrice;
};


// increase and decrease for phone product

document.getElementById('phone-plus').addEventListener('click',() => {
    updateProducts('phone', 399.99, true)
});

document.getElementById('phone-minus').addEventListener('click',() => {
    updateProducts('phone', 399.99, false)
});

// increase and decrease for case product

document.getElementById('case-plus').addEventListener('click',() => {
    updateProducts('case', 499.99, true)
});

document.getElementById('case-minus').addEventListener('click',() => {
    updateProducts('case', 499.99, false)
});

// increase and decrease for center product

document.getElementById('center-plus').addEventListener('click',() => {
    updateProducts('center', 499.99,true)
});

document.getElementById('center-minus').addEventListener('click',() => {
    updateProducts('center', 499.99,false)
});

// increase and decrease for last product

document.getElementById('last-plus').addEventListener('click',() => {
    updateProducts('last', 499.99,true)
});

document.getElementById('last-minus').addEventListener('click',() => {
    updateProducts('last', 499.99,false)
});