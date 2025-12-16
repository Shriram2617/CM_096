const form = document.getElementById("cardForm");
const successMessage = document.getElementById("successMessage");
const userName = document.getElementById("userName");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const address = document.getElementById("address").value.trim();
  const income = document.getElementById("income").value.trim();

  if (!name || !email || !mobile || !address || !income) {
    alert("Please fill all fields");
    return;
  }

  if (mobile.length !== 10) {
    alert("Mobile number must be 10 digits");
    return;
  }

  if (income <= 0) {
    alert("Income must be greater than 0");
    return;
  }

  const userData = {
    name,
    email,
    mobile,
    address,
    income
  };

  localStorage.setItem("creditCardUser", JSON.stringify(userData));

  form.classList.add("hidden");
  successMessage.classList.remove("hidden");
  userName.innerText = `Welcome, ${name}! Your onboarding is complete.`;
});