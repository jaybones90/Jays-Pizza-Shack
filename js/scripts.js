//BackEnd Logic
// -------------------------------create object constructor for "order" that will contain the users inputted name and their pizza order which is also an object
function Order (name, pizza) {
  this.name = name;
  this.pizza = [];
}
// --------------------------------- create object constructor for "pizza" that contains properties for the pizza size, the toppings, and the cost
function Pizza(size, toppings, cost) {
  this.size = size;
  this.toppings = 0;
  this.cost = 0;
}
// ----------------------------------------- create prototype for the pizza object to be able to calculate the cost of the pizza based on the users chosen size and amount of toppings
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



//Front End Logic
$(document).ready(function(){
  //----------------------------- hiding the div that will show the users pizza choice
  $("#show-pizza-choice").hide();


  $("#submit-button").click(function(){
    var userNameInput = $("input[name=name]").val();

    if (userNameInput === "") {
      $("#no-name-input").text("Please Enter A Name")
      return
    }
//--------------------------------------- show the div that contains info about the users pizza choice when they click the submit button
    $("#show-pizza-choice").show();
//--------------------------------hides all the user inputs and the submit button
    $("#user-inputs").hide();
//----------------------------------------clears the toppings list for the user display
    $("#show-pizza-choice ul").text("")
//------------------------------------------setting variables to contain the values of the users inputted name, pizza size, and toppings
    var pizzaSize = $("input[name=size]:checked").val();
    var pizzaToppings = [];
    $("input[name=toppings]:checked").each(function(){
      pizzaToppings.push($(this).val());
    });

//-------------------------------------- creates a new pizza object and sets the toppings and size properties as the users inputted choices
    var newPizza = new Pizza(pizzaSize,pizzaToppings);
    newPizza.toppings = pizzaToppings;
    newPizza.getSizeCost();
//--------------------------------------- creates a new order object and sets the name property as the users inputted name and sets the pizza property as the newly created pizza object which includes the users inputted pizza choices
    var newOrder = new Order(userNameInput, newPizza);
    newOrder.pizza.push(newPizza);
  



//------------------------------ displays to the user his pizza choice


    $("#show-pizza-choice ul").append("<li><span class=clickable>" + newOrder.name + "</span></li>")




    $(".clickable").click(function(){
      $("#show-pizza-choice").html(
        "<h1>" + "Hey " + newOrder.name + ", this is your pizza order:" + "</h1><hr><br>" +
        "<h2>" + "Size:" + "</h2>" +
        "<p class=display-pizza-text>" + newPizza.size + " pizza </p>" +
        "<h2>" + "Toppings:" + "</h2>" +
        "<div id=align-bullets>" +
          "<ul></ul>" +
        "</div>" +
        "<h2>" + "Price:" + "</h2>" +
        "<p class=display-pizza-text>" + "$" + newPizza.cost + "</p><br>")
        newPizza.toppings.forEach(function(topping){
          $("#show-pizza-choice ul").append("<li>" + topping + "</li>");
        });

    });

  });

});
