const form = document.querySelector("form");
const formCard = document.querySelector(".form-card");
const successCard = document.querySelector(".success-card");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  successCard.querySelector("strong").innerHTML = email;

  formCard.style.display = "none";
  successCard.style.display = "grid";
});

const dismiss = successCard.querySelector("button");

dismiss.addEventListener("click", () => {
  successCard.style.display = "none";
  formCard.style.display = "grid";
});
