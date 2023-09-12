// script.js

document.getElementById("convertButton").addEventListener("click", function() {
    const celsiusInput = document.getElementById("celsiusInput").value;
    if (!isNaN(celsiusInput)) {
        const fahrenheit = (celsiusInput * 9/5) + 32;
        document.getElementById("resultValue").textContent = fahrenheit.toFixed(2);
    } else {
        document.getElementById("resultValue").textContent = "Invalid Input";
    }
});