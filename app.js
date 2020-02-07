// Buy Button - Event - add-to-card

let productCountEl = document.getElementById("product-count");
let addToCardButtons = document.querySelectorAll(".add-to-card")

for (let i = 0;i<addToCardButtons.length; i++) {
	addToCardButtons[i].addEventListener("click",function() {
		productCountEl.textContent = +productCountEl.textContent + 1;
	})
}

// SLIDER - SLICK Library - https://kenwheeler.github.io/slick/

$('.slick').slick({
	dots:true,
	})

// Wish Button - Event - Add-to-favorite

let addToFavorites = document.querySelectorAll(".icon-favorites");

for (let i = 0;i<addToFavorites.length; i++) {
	addToFavorites[i].addEventListener("click", function() {
  		if (this.classList.contains("liked")) {
    		this.classList.remove("liked");
  			} else this.classList.add("liked");
	})
}

// Product-quantity on catalog item

let decrementButtons = document.querySelectorAll(".decrement-button");
let incrementButtons = document.querySelectorAll(".increment-button");
let productQuantityInput = document.querySelectorAll(".product-quantity-input");


for (let i = 0;i<incrementButtons.length; i++) {
  incrementButtons[i].addEventListener("click", function() {
      let currentValue = +productQuantityInput[i].value;
      let nextValue = currentValue + 1;
      productQuantityInput[i].value = nextValue;

      disableEnableButtons(nextValue,i); 
  })
}

for (let i = 0;i<decrementButtons.length; i++) {
  decrementButtons[i].addEventListener("click", function() {
  		let currentValue = +productQuantityInput[i].value;
  		let nextValue = currentValue - 1;
  		productQuantityInput[i].value = nextValue;

      disableEnableButtons(nextValue,i);
  })
}

function disableEnableButtons(count,a) {
    if (count <=1) {
        decrementButtons[a].disabled = true;
        incrementButtons[a].disabled = false;
      } 
      else if (count >=10) {
        decrementButtons[a].disabled = false;
        incrementButtons[a].disabled = true;
      } else {
        incrementButtons[a].disabled = false;
        decrementButtons[a].disabled = false;
      }
  } 


