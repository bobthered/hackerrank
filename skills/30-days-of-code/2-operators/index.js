// convert percents into decimals
tip_percent /= 100;
tax_percent /= 100;

// calculate total percents
const total_percent = tip_percent + tax_percent;

// calculate total cost
const total_cost = meal_cost * (1 + total_percent);

// return rounded cost
console.log(Math.round(total_cost));
