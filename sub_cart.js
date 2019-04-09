"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Ryan Burkhart
   Date: 4/5/19  

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

//setupcart will be the first thing the page loads
window.onload = setupCart;

function setupCart() {
      var addButtons = document.getElementsByClassName("addButton");

      for (var i = 0; i < addButtons.length; i++) {
            document.addEventListener("onclick", addItem);
      }
}

//the loop & function goes through all the functions waiting for you to click and once you click the next function & loop & if's process it

function addItem(e) {
      var foodItem = e.nextElementSibling.value;
      var foodID = foodItem.getAttribute("id");
      var foodDescription = foodItem.cloneNode(true);
      var cartBox = document.getElementById("cart");
      var duplicateOrder = false;

      for (var i = 0; i < cartBox.length; i++) {
            if (cartBox.childNodes == foodID) {
                  cartBox.firstChild += 1;
            }
      }

      if (duplicateOrder !== false) {
            var orderCount = document.createElement("span");
            orderCount = "1";
            foodDescription += orderCount;
            foodDescription.appendChild(cartBox);
      }
}

//all of this basically just processes what you click & adds it into your shopping cart & allows you to order