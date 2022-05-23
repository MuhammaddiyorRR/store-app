const store = document.querySelector(".store");
const modal = document.querySelector(".modal_bg");
const openCart = document.querySelector(".go_to_cart");
const ourProducts = document.querySelector(".our_products");
const myCart = document.querySelector(".myCart");
const icon = document.querySelector(".icon");
const myCartBtn = document.querySelector(".my-cart");
const productsLink = document.querySelector(".nav-link");
const inc = document.querySelector(".inc");
const dec = document.querySelector(".dec");

const num = document.querySelector(".num");

let total = 0

let cart = [];
let quantity = num.value;
num.value = 100;
// console.log(n)
inc.addEventListener("click", () => {
  // alert("Hello World")
  quantity++;
  num.value = quantity;
  // alert(quantity);
});
dec.addEventListener("click", () => {
  // alert("Hello World")
  quantity--;
  num.value = quantity;
  // alert(quantity);
});

store.addEventListener("click", closeModal);
openCart.addEventListener("click", goToCart);
icon.addEventListener("click", addToCart);
myCartBtn.addEventListener("click", goToCart);
productsLink.addEventListener("click", goToCart);

function addToCart() {
  // cart.push()
  modal.classList.remove("hidden");

  console.log("hello");
}

function closeModal() {
  modal.classList.add("hidden");
}
function goToCart() {
  modal.classList.add("hidden");
  ourProducts.classList.add("hidden");
  myCart.classList.remove("hidden");
  //   alert("Hello World!");
}
