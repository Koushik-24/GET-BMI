let history = [];

function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let unit = document.getElementById('unit').value;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid weight and height.';
        return;
    }

    if (unit === 'imperial') {
        weight *= 0.453592;
        height *= 2.54;
    }

    let bmi = weight / Math.pow(height / 100, 2);

    let resultElement = document.getElementById('result');
    let category = getBMICategory(bmi);
    resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}<br>Category: ${category}`;

    switch (category) {
        case 'Underweight':
            resultElement.innerHTML += '<br>Consider consulting with a nutritionist to ensure you are getting enough nutrients.';
            break;
        case 'Normal Weight':
            resultElement.innerHTML += '<br>Great job! Maintain a balanced diet and regular exercise for overall health.';
            break;
        case 'Overweight':
            resultElement.innerHTML += '<br>Consider incorporating more physical activity and a balanced diet.';
            break;
        case 'Obesity':
            resultElement.innerHTML += '<br>It is advisable to consult with a healthcare professional for personalized advice.';
            break;
    }
}



document.getElementById('weight').addEventListener('input', updateRealTimeBMI);
document.getElementById('height').addEventListener('input', updateRealTimeBMI);
document.getElementById('unit').addEventListener('input', updateRealTimeBMI);

function updateRealTimeBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let unit = document.getElementById('unit').value;
    let bmi = calculateBMIValue(weight, height, unit);

    let realTimeResultElement = document.getElementById('real-time-result');
    realTimeResultElement.innerHTML = `Real-time BMI: ${bmi.toFixed(2)}`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal Weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}
