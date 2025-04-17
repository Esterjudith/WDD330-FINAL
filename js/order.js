export function initOrder() {
    const cart = [];
    const cartList = document.getElementById("cart");
  
    document.querySelectorAll("[data-add]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.getAttribute("data-add");
        cart.push(item);
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
      });
    });
  
    const submitBtn = document.querySelector("[data-submit]");
    submitBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Cart is empty");
      } else {
        alert("Order submitted: " + cart.join(", "));
        cart.length = 0;
        cartList.innerHTML = "";
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", initOrder);