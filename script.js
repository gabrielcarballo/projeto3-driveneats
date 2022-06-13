let mealSelected, beverageSelected, dessertSelected = false;

function selectingMeal(){
   const select = document.querySelector(".individual-meal-box");
   if (select !== null){
    select.classList.remove("selected");
   }
   select.classList.add("selected");
}







if (document.querySelector(".individual-meal-box").classList.contains("selected") && 
document.querySelector(".individual-beverage-box").classList.contains("selected") && 
document.querySelector(".individual-meal-box").classList.contains("selected") === true){
	document.querySelector(".waiting-choose").classList.add("hidden")
}

function closeCart(){

}