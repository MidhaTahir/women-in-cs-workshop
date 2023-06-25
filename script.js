let UIamount = document.getElementById("amount");
let UIinterest = document.getElementById("interest");
let UIyears = document.getElementById("years");
let UImonthlyPayment = document.getElementById("monthly-payment");
let UItotalPayment = document.getElementById("total-payment");
let UItotalInterest = document.getElementById("total-interest");

document.getElementById("loan-form").addEventListener("submit", function (e) {
  //Hide results
  document.getElementById("results").style.display = "none";
  //Show loader
  document.getElementById("loading").style.display = "block";
  //call calculateResults after 2 sec
  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

function calculateResults(e) {
  let principal = parseFloat(UIamount.value);
  let calculatedInterest = parseFloat(UIinterest.value) / 100 / 12;
  let calculatedPayments = parseFloat(UIyears.value) * 12;
  //Compute Monthly Payment
  //Math.pow(base, exponent)
  let x = Math.pow(1 + calculatedInterest, calculatedPayments);
  let monthly = (principal * x * calculatedInterest) / (x - 1);

  //to check monthly is finite number
  if (isFinite(monthly)) {
    UImonthlyPayment.value = monthly.toFixed(2);
    UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
    UItotalInterest.value = (monthly * calculatedPayments - principal).toFixed(
      2
    );
    //Show results
    document.getElementById("results").style.display = "block";
    //Hide loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");
  }
}

function showError(msg) {
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "none";

  const errorDiv = document.createElement("div");
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  errorDiv.className = "alert alert-danger";
  //Create text node and append to div
  errorDiv.appendChild(document.createTextNode(msg));
  //insert error above heading
  card.insertBefore(errorDiv, heading);
  //Clear error after 4 seconds
  setTimeout(clearError, 4000);
}

function clearError() {
  document.querySelector(".alert").remove();
}

document.getElementById("clear").addEventListener("click", clear);

function clear(e) {
  setTimeout(function () {
    UIamount.value = "";
    UIyears.value = "";
    UIinterest.value = "";
    UImonthlyPayment.value = "";
    UItotalPayment.value = "";
    UItotalInterest.value = "";
    document.getElementById("results").style.display = "none";
  }, 500);
  // 0.5 sec or 500 ms
  e.preventDefault();
}
