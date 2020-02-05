// Buy Button - Event - add-to-card

let productCountEl = document.getElementById("product-count");
console.log(productCountEl);

let addToCardButtons = document.querySelectorAll(".add-to-card")
console.log(addToCardButtons);

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
console.log(addToFavorites);

for (let i = 0;i<addToFavorites.length; i++) {
	addToFavorites[i].addEventListener("click", function() {
  		if (this.classList.contains("active")) {
    		this.classList.remove("active");
  			} else this.classList.add("active");
	})
}