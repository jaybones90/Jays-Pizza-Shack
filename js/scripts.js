function Pizza(size, toppings, cost) {
  this.size = size;
  this.toppings = [];
  this.cost = cost;
}

Pizza.prototype.getTotalCost = function() {
  this.cost = 14;
    if (this.size === medium) {
    this.cost += 4;
  } else if (this.size === large)
    this.cost += 8;
};

Pizza.prototype.addUpToppings = function() {
  this.toppings.forEach(function(){
    return this.cost += 1;
  });
}



$(document).ready(function(){
  $("#submit-button").click(function(){
    var pizzaSize = $("input[name=size]:checked").val();

    var pizzaToppings = [];
    $("input[name=toppings]:checked").each(function(){
      pizzaToppings.push($(this).val());
    })
  

    var newPizza = new Pizza(pizzaSize,pizzaToppings)
    newPizza.size = pizzaSize;
    newPizza.toppings = pizzaToppings;
    console.log(newPizza);


    // var pizzaToppings = [];
    // $("input[name=toppings]:checked").each(function(topping) {
    //   pizzaToppings += $(this).val() + ","
    // });
    // pizzaToppings.split(" ")
    // console.log(pizzaToppings);





  });
});
