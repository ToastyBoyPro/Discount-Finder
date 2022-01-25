//Exercise 2 - if else -------------------------------------------------------------------------------------------------------

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

let ageInput = document.getElementById("age-input") //accesses input element in HTML
let ageBtn = document.getElementById("age-btn") //accesses button element in HTML
let customerDiscount = document.getElementById("customer-discount") //accesses p element in HTML

ageBtn.addEventListener("click", () => {
  let age = ageInput.value //pulls age input from user to use in functions
  let discountReturn = discount() //stores return value of discount function
  let priceReturn = price() //stores return value of price function
  
  function discount() { // determines the category of discount based on user age
    if(age < 6) {
      return "free"
    } else if(age >= 6 && age <= 17) {
      return "child discount"
    } else if(age >= 18 && age <= 26) {
      return "student discount"
    } else if(age >= 27 && age <= 66) {
      return "full price"
    } else {
      return "senior citizen discount"
    }
  }
  
  function price() { // determines the output string based on user age
    if(age < 6) {
      return "Since you are " + age + ", you get " + discountReturn + " admission."
    } else if((age >= 6 && age <= 26) || (age > 66)) {
      return "Since you are " + age + ", you receive the " + discountReturn + "."
    } else {
      return "Since you are " + age + ", you pay the " + discountReturn + "."
    }
  }
  customerDiscount.textContent = priceReturn // outputs result from price() to the webpage
  console.log(priceReturn) // added to test if code works properly
})