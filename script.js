// Wheel element
let container = document.querySelector(".container");
// Spin button
let btn = document.getElementById("spin");
let number;

btn.onclick = function () {
  if (!number) {
    number = 360; // Set initial rotation to land on "8"
  } else {
    number += Math.ceil(Math.random() * 1000); // Generate random rotation
  }

  //For rotation styling
  container.style.transform = "rotate(" + number + "deg)";

  // Delay the alert until the wheel stops spinning
  setTimeout(function () {
    let result = getWheelResult(number);
    showAlert(result);
  }, 5000);
};

// Function to get the result based on the wheel's position
function getWheelResult(rotation) {
  let degrees = rotation % 360;
  let result;
  if (degrees > 337.5 || degrees >= 0  && degrees < 22.5) {
    result = "try again";
  } else if (degrees >= 22.5 && degrees < 67.5) {
    result = "80% off";
  } else if (degrees >= 67.5 && degrees < 112.5) {
    result = "60% off";
  } else if (degrees >= 112.5 && degrees < 157.5) {
    result = "50% off";
  } else if (degrees >= 157.5 && degrees < 202.5) {
    result = "30% off";
  } else if (degrees >= 202.5 && degrees < 247.5) {
    result = "40% off";
  } else if (degrees >= 247.5 && degrees < 292.5) {
    result = "20% off";
  } else {
    result = "10% off";
  }

  return result;
}

// Function to show the alert message
function showAlert(result) {
  alert("Congratulations! You won " + result);
}
