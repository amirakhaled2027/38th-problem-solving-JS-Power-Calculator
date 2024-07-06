//Create a function that takes voltage and current and returns the calculated power.

function calculatedPower(voltage, current) {
    let power = voltage * current;
    return power;
}
console.log(calculatedPower(480, 20));