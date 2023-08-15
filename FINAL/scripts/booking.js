/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost = 0;
let dailyRate = 35;
let dayCounter = 0;
let days = document.querySelectorAll('li.blue-hover');
let clearButton = document.getElementById('clear-button');
let halfButton = document.getElementById('half');
let fullButton = document.getElementById('full');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


function colorChange(event){
    let button = event.target;
    if (!button.classList.contains('clicked')){
        button.classList.add('clicked');
        dayCounter++;
    }
    else {
        button.classList.remove('clicked');
        if (dayCounter > 0){
            dayCounter--;
        }
    }
    calculate();
}

for (let i = 0; i < days.length; i++) {
    days[i].addEventListener("click", colorChange);
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function clear(){
    for (let i = 0; i < days.length; i++) {
        days[i].classList.remove('clicked');
    }
    dayCounter = 0;
    calculate();
}

clearButton.addEventListener('click', clear);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


function half(){
    dailyRate = 20;
    if (!halfButton.classList.contains('clicked') && fullButton.classList.contains('clicked')){
        halfButton.classList.add('clicked');
        fullButton.classList.remove('clicked');
        calculate();
    }
}

halfButton.addEventListener('click', half);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


function full(){
    dailyRate = 35;
    if (!fullButton.classList.contains('clicked') && halfButton.classList.contains('clicked')){
        fullButton.classList.add('clicked');
        halfButton.classList.remove('clicked');
        calculate();
    }
}

fullButton.addEventListener('click', full);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    let calculatedCost = document.getElementById('calculated-cost');
    cost = dayCounter * dailyRate;
    calculatedCost.innerHTML = cost.toString();
}