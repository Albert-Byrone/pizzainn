let price ;
let crust_price;
let tooping_price ;
let total = 0

function GetPizza (name,size,crust,topping,total){
  this.name = name;
  this.size = size;
  this.crust= crust;
  this.topping = topping;
  this.total = total;
};
// proceed button
$(document).ready(function(){
  $("button.proceed").click(function(){
    let pName = $(".name selected:option").val();
    let pSize = $("#size option:selected").val();
    let pCrust = $("#crust option:selected").val();
    let pTopping = [];

    $.each($("input[name='toppings']:checked"),function(){
      pTopping.push($(this).val());
    })

    switch(pSize){
      case "0":
        price= 0;
        break;
      case 'large':
        price = 1500;
        break;
      case "medium":
        price = 950;
        break;
      case "small":
        price = 700;
      default:
        console.log("error");
    }

    switch(pCrust){
      case "0":
        c_price = 0;
        break;
      case "Crispy":
        c_price = 300;
        break;
      case "Stuffed":
        c_price = 200;
        break;
      case "Gluten-free":
        c_price = 250;
        break;
      case "Flatbread":
        c_price = 300;
      case "Focaccia":
        c_price = 200;
        break;
      default:
        console.log("error");
    }

  let topping_value = pTopping.length * 50;

  if((pSize == "0") && (pCrust == "0")){
    $("button.proceed").show();
    $("#info").show();
    $("div.choice").hide();
    alert("Please select the Pizza size and crust");
  }
  else {

    $("button.proceed").hide();
    $("#info").show();
    $("div.choice").slideDown(1200);
  }

  total = price + c_price + topping_value;
  })
})
