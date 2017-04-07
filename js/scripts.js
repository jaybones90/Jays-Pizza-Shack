function Pizza(size, toppings, cost) {
  this.size = size;
  this.toppings = 0;
  this.cost = 0;
}

Pizza.prototype.getSizeCost = function() {
    this.cost = 14;
  if (this.size === "medium") {
    this.cost += 4;
  } else if (this.size === "large") {
    this.cost += 8;
  }
  if (this.toppings.length <= 2) {
    this.cost += 2
  } else if (this.toppings.length <= 4){
    this.cost += 4
  } else if (this.toppings.length <= 6) {
    this.cost += 6
  }
};






$(document).ready(function(){
  // $("#show-pizza-choice").hide();

  $("#submit-button").click(function(){
    $("#show-pizza-choice").show();
    var pizzaSize = $("input[name=size]:checked").val();

    var pizzaToppings = [];
    $("input[name=toppings]:checked").each(function(){
      pizzaToppings.push($(this).val());
    });

    var newPizza = new Pizza(pizzaSize,pizzaToppings)
    newPizza.toppings = pizzaToppings;
    newPizza.getSizeCost();
    console.log(newPizza);



    $("#show-pizza-choice p").text("a " + newPizza.size + " pizza");





  });







});
