/***********************
AUTHOR: Tonmoy Talukder
***********************/

//--------------- Updating Products Price on Cart ---------------
function updateCost(updateCost, amount) {
    //debugger;

    const productCost = document.getElementById(updateCost);
    const newProductCost = amount;
    productCost.innerText = newProductCost;
}
//----------------------------------------------------------------

//----------------- Price calculation on the cart -------------
function totalPriceValue() {
    //debugger;

  const totalPrice = document.getElementById("total-price");
  let totalPriceInt = parseInt(totalPrice.innerText);

  const bestPrice = document.getElementById("best-price");
  const bestPriceInt = parseInt(bestPrice.innerText);
  console.log(bestPriceInt);

  const memoryPrice = document.getElementById("extra-memory-cost");
  const memoryPriceInt = parseInt(memoryPrice.innerText);
  console.log(memoryPriceInt);

  const storagePrice = document.getElementById("extra-storage-cost");
  const storagePriceInt = parseInt(storagePrice.innerText);
  console.log(storagePriceInt);

  const deliveryCharge = document.getElementById("delivery-charge");
  const deliveryChargeInt = parseInt(deliveryCharge.innerText);
  console.log(deliveryChargeInt);

  totalPriceInt =  bestPriceInt + memoryPriceInt + storagePriceInt + deliveryChargeInt;
  console.log(totalPriceInt);
  totalPrice.innerText = totalPriceInt;

  const totalFinalPrice = document.getElementById("total-after-coupon");
  let totalFinalPriceInt = parseInt(totalFinalPrice.innerText);
  totalFinalPrice.innerText = totalPriceInt;
  console.log(totalFinalPriceInt);
}
//------------------------------------------------------------

// ------------ Coupon Code Apply To Get 20% Discount -----------------
document.getElementById("coupon-apply").addEventListener("click", function () {
  
  const totalPrice = document.getElementById("total-price");
  let totalPriceInt = parseInt(totalPrice.innerText);
  const totalFinalPrice = document.getElementById("total-after-coupon");
  totalFinalPrice.innerText = totalPriceInt;
  
  // get Coupon Code
  const couponField = document.getElementById("coupon-code");
  let couponCode = couponField.value;
  if (couponCode == "stevekaku") {
    totalFinalPrice.innerText = totalPriceInt - ((totalPriceInt*20)/100);
    console.log(totalFinalPrice.innerText);
  }
  couponField.value = "";
  console.log(couponField.value);
});
// ---------------------------------------------------------------------

// -------------Function For Update Cart Prices -------------------
function updateMemoryPrice(price) {
    const newMemoryPrice = 0;
    let memoryPrice = 0;
    memoryPrice = newMemoryPrice + price;
    totalPriceValue();
    return memoryPrice;
}

function updateStoragePrice(price) {
    const newStoragePrice = 0;
    let storagePrice = 0;
    storagePrice = newStoragePrice + price;
    totalPriceValue();
    return storagePrice;
}

function updateDeliveryCharge(price) {
    const newDeliveryCharge = 0;
    let deliveryCharge = 0;
    deliveryCharge = newDeliveryCharge + price;
    totalPriceValue();
    return deliveryCharge;
}
//-----------------------------------------------------------------

//-----------------------------------------------
// Memory Cost
document
  .getElementById("memory-8-gb")
  .addEventListener("click", function () {
    updateCost("extra-memory-cost", 0);
    updateMemoryPrice(0);
    totalPriceValue();
  });

document
  .getElementById("memory-16-gb")
  .addEventListener("click", function () {
    updateCost("extra-memory-cost", 180);
    updateMemoryPrice(180);
    totalPriceValue();
  });

  // Storage Cost
document
.getElementById("ssd-256-gb")
.addEventListener("click", function () {
updateCost("extra-storage-cost", 0);
updateStoragePrice(0);
});

document
.getElementById("ssd-512-gb")
.addEventListener("click", function () {
updateCost("extra-storage-cost", 100);
updateStoragePrice(100);
});

document
.getElementById("ssd-1-tb")
.addEventListener("click", function () {
updateCost("extra-storage-cost", 180);
updateStoragePrice(180);;
});

// Delivery Cost
document
  .getElementById("general-delivery")
  .addEventListener("click", function () {
    updateCost("delivery-charge", 0);
    updateDeliveryCharge(0);
  });

document
  .getElementById("speedy-delivery")
  .addEventListener("click", function () {
    updateCost("delivery-charge", 20);
    updateDeliveryCharge(20);
  });
//-----------------------------------------------

//------------------ Button Select Color ------------------

// Memory Price Buttons
function borderA(){
  document.getElementById("memory-8-gb").style.boxShadow = "0 3px 10px rgb(5 05 5 / 1)";
  document.getElementById("memory-16-gb").style.boxShadow = "0 3px 10px rgb(5 05 5 / 0.0)"
}
function borderB(){
  document.getElementById("memory-8-gb").style.boxShadow = "0 3px 10px rgb(5 05 5 / 0.0)";
  document.getElementById("memory-16-gb").style.boxShadow = "0 3px 10px rgb(5 05 5 / 1)";
}

// Storage Price Buttons
function borderC(){
  document.getElementById("ssd-256-gb").style.boxShadow = "0 3px 10px rgb(5 05 5 / 1.0)";
  document.getElementById("ssd-512-gb").style.boxShadow = "0 3px 10px rgb(5 05 5 / 0.0)";
  document.getElementById("ssd-1-tb").style.boxShadow = "0 3px 10px rgb(5 05 5 / 0.0)";
}
function borderD(){
  document.getElementById("ssd-256-gb").style.boxShadow = "0 3px 10px rgb(5 05 5 / 0.0)";
  document.getElementById("ssd-512-gb").style.boxShadow = "0 3px 10px rgb(5 05 5 / 1.0)";
  document.getElementById("ssd-1-tb").style.boxShadow = "0 3px 10px rgb(5 05 5 / 0.0)";
}
function borderE(){
  document.getElementById("ssd-256-gb").style.boxShadow = "0 3px 10px rgb(5 05 5 / 0.0)";
  document.getElementById("ssd-512-gb").style.boxShadow = "0 3px 10px rgb(5 05 5 / 0.0)";
  document.getElementById("ssd-1-tb").style.boxShadow = "0 3px 10px rgb(5 05 5 / 1.0)";
}

// Delivery Charge Buttons
function borderF(){
  document.getElementById("general-delivery").style.boxShadow = "0 3px 10px rgb(5 05 5 / 1.0)";
  document.getElementById("speedy-delivery").style.boxShadow = "0 3px 10px rgb(5 05 5 / 0.0)";
}
function borderG(){
  document.getElementById("general-delivery").style.boxShadow = "0 3px 10px rgb(5 05 5 / 0.0)";
  document.getElementById("speedy-delivery").style.boxShadow = "0 3px 10px rgb(5 05 5 / 1.0)";
}

//---------------------------------------------------------
//_____________________________________END__________________________________________