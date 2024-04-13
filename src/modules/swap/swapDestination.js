document.getElementById("flightSwap").addEventListener("click", (e) => {
  e.preventDefault();
  let origin = document.querySelector("#origin");
  let destination = document.querySelector("#destination");

  let fromValue = origin.value;
  let toValue = destination.value;

  origin.value = toValue;
  destination.value = fromValue;
});
