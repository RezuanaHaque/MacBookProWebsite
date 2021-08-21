// for hiding the promo code invalid 
document.getElementById('invalidPromo').style.display = "none";

/* for appling the promocode when no button is clicked. It means the promocode will be applicable for only all the initial va;ues of base price,base memory, base stoarage and free delivery */
const total_price = document.getElementById('totalPrice');
const promo_price = document.getElementById('promoPrice');
promocode();

// memory buttons
document.getElementById('mem8gb').addEventListener('click', function () {
    memoryextra(false);
});
document.getElementById('mem16gb').addEventListener('click', function () {
    memoryextra(true);
});
function memoryextra(isextraMemoryory) {
    const extra_mem = document.getElementById('extraMemory');
    if (isextraMemoryory == false) {
        extra_mem.innerText = 0;
    }
    else {
        extra_mem.innerText = 180;
    }
    calculatetotal();
}

// storage buttons
document.getElementById('storage256gb').addEventListener('click', function () {
    storageextra('256GB');

});
document.getElementById('storage512gb').addEventListener('click', function () {
    storageextra('512GB');

});
document.getElementById('storage1tb').addEventListener('click', function () {
    storageextra('1TB');

});

function storageextra(isextraStorage) {
    const extra_storage = document.getElementById('extraStorage');
    if (isextraStorage == '256GB') {
        extra_storage.innerText = 0;
    }
    if (isextraStorage == '512GB') {
        extra_storage.innerText = 100;
    }
    if (isextraStorage == '1TB') {
        extra_storage.innerText = 180;
    }
    calculatetotal();
}

// delivery charges
document.getElementById('freeDelivery').addEventListener('click', function () {
    deliveryextra(false, 'extraDelivery');
});
document.getElementById('deliveryCharge').addEventListener('click', function () {
    deliveryextra(true, 'extraDelivery');
});
function deliveryextra(isdeliveryCharge, field) {
    const delivery_charge = document.getElementById(field);
    if (isdeliveryCharge == false) {
        delivery_charge.innerText = 0;
    }
    else {
        delivery_charge.innerText = 20;
    }
    calculatetotal();
}

// total payment
function calculatetotal() {
    const base_price = document.getElementById('basePrice').innerText;
    const extra_mem = document.getElementById('extraMemory').innerText;
    const extra_storage = document.getElementById('extraStorage').innerText;
    const delivery_charge = document.getElementById('extraDelivery').innerText;
    const total_price = document.getElementById('totalPrice');
    total_price.innerText = parseFloat(base_price) + parseFloat(extra_mem) + parseFloat(extra_storage) + parseFloat(delivery_charge);
    const promo_price = document.getElementById('promoPrice');
    promo_price.innerText = total_price.innerText;
    promocode();
}

// promo code application
function promocode() {
    document.getElementById('promobtn').addEventListener('click', function () {
        const promo = document.getElementById('promoInput');
        const promo_input = document.getElementById('promoInput').value;
        const promo_code = 'stevekaku';
        if (promo_input == promo_code) {
            const total_price_value = parseFloat(total_price.innerText);
            const discountmoney = total_price_value * .2;
            const discounted_price = total_price_value - discountmoney;
            promo_price.innerText = discounted_price;
            document.getElementById('invalidPromo').style.display = "none";
            promo.value = '';

        }
        else {
            document.getElementById('invalidPromo').style.display = "block";
            promo.value = '';

        }
    });
}