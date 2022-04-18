let FoodItem = document.getElementById("food-items")
const foodAmount = document.querySelector("#food-amount")
const Amal = document.querySelector("#Amala")
const Croacker = document.querySelector("#Fish")
const FoodItemsCow = document.getElementById("food-items-cow")
const FoodAmountCow = document.getElementById("food-amount-cow")
const FoodItemsFish = document.getElementById("food-items-fish")
const FoodAmountFish = document.getElementById("food-amount-fish")
const fee = document.querySelector("#feesa")
const wrap = 500
const legg = 900
const fishh = 600
Amal.addEventListener('click', function(){
     FoodItem.textContent = "Amala"
     foodAmount.textContent = wrap
     fee.textContent = wrap
    console.log("To test Amala")
})

function lego(){
    FoodItemsCow.textContent = "Cow Leg"
    FoodAmountCow.textContent = legg
    fee.textContent = legg + wrap
    console.log("I am great!")
}

Croacker.addEventListener('click', function(){
    FoodItemsFish.textContent = "Croaker"
    FoodAmountFish.textContent = fishh
    console.log("I am great!")
})

