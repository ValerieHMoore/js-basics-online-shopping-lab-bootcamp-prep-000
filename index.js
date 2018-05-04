var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function generateCartItem(itemName) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addToCart(item) {
 // write your code here
  var itemObject = generateCartItem(item);
  getCart().push(itemObject)
  return item + " has been added to your cart."
   }
 
function viewCart() {
 var item = getCart()[0]
 var second = getCart()[1]
 var third = getCart()[2]
 if (getCart().length === 1) {
 return `In your cart, you have ${item.itemName} at $${item.itemPrice}.`}
  else if (getCart().length === 0) {
     return "Your shopping cart is empty."}
  else if (getCart().length === 2) {
    return `In your cart, you have ${item.itemName} at $${item.itemPrice}, and ${second.itemName} at $${second.itemPrice}.`}
  else {
    return `In your cart, you have ${item.itemName} at $${item.itemPrice}, ${second.itemName} at $${second.itemPrice}, and ${third.itemName} at $${third.itemPrice}.`}
  }

function total() {
 var item = getCart()[0]
 var totalCart = []
 for (let i = 0; i < getCart().length; i++) {
  totalCart.push(item.itemPrice[i]) 
 } 
const reducer = (accumulator, currentValue) => accumulator + currentValue;
return (parseInt(totalCart.reduce(reducer)));
  }

function removeFromCart(item) {
  // write your code here
  
}

function placeOrder(cardNumber) {
  // write your code here
  
}
