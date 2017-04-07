function Order (name, pizza) {
  this.name = name;
  this.pizza = pizza;
}

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
  var addToppings = 0;
  this.toppings.forEach(function(topping){
    addToppings += 1
  });
  this.cost += addToppings;
};






$(document).ready(function(){
  $("#show-pizza-choice").hide();

  $("#submit-button").click(function(){
    $("#show-pizza-choice").show();
    $("#show-pizza-choice ul").text("")
    var userNameInput = $("input[name=name]").val();
    var pizzaSize = $("input[name=size]:checked").val();

    var pizzaToppings = [];
    $("input[name=toppings]:checked").each(function(){
      pizzaToppings.push($(this).val());
    });


    var newPizza = new Pizza(pizzaSize,pizzaToppings);
    newPizza.toppings = pizzaToppings;
    newPizza.getSizeCost();

    var newOrder = new Order(userNameInput, newPizza);
    newOrder.pizza = newPizza;
    console.log(newOrder);


    $("#show-pizza-choice").html(
      "<h3>" + "You Have Selected A:" + "</h3>" +
      "<p>" + newPizza.size + " pizza </p>" +
      "<h3>" + "With These Toppings:" + "</h3>" +
      "<ul></ul>")

      newPizza.toppings.forEach(function(topping){
      $("#show-pizza-choice ul").append("<li>" + topping + "</li>");
    });

  });

});
