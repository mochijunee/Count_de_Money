// Initialize:
function initialize() {
  numOfPennies = document.getElementById("pennies");
  numOfNickels = document.getElementById("nickels");
  numOfDimes = document.getElementById("dimes");
  numOfQuarters = document.getElementById("quarters");
  totalMoney = document.getElementById("total");
  pennies= 0;
  nickels = 0; 
  dimes = 0; 
  quarters = 0; 
  sum = 0;
  display();
}

// Display:
function display() {
  numOfPennies.innerHTML = pennies;
  numOfNickels.innerHTML = nickels;
  numOfDimes.innerHTML = dimes;
  numOfQuarters.innerHTML = quarters;
  calculateTotalMoney();
  totalMoney.innerHTML = sum;
}

// Add and Subtract 1 Penny
function addPenny() {
  pennies++;
  display();
}
function subtractPenny() {
  if (pennies != 0)
    pennies--
  display();
}

// Add and Subtract 1 Nickel
function addNickel() {
  nickels++;
  display();
}
function subtractNickel() {
  if (nickels != 0)
    nickels--
  display();
}

// Add and Subtract 1 Dime
function addDime() {
  dimes++;
  display();
}
function subtractDime() {
  if (dimes != 0)
    dimes--
  display();
}

// Add and Subtract 1 Quarter
function addQuarter() {
  quarters++;
  display();
}
function subtractQuarter() {
  if (quarters != 0)
    quarters--
  display();
}

// Calculate Total Money
function calculateTotalMoney() {
  sum = (quarters * .25) + (dimes *.1) + (nickels *.05) + (pennies * .01);
  sum = parseFloat(sum).toFixed(2);
}

//add a function to get the totals of each coin
