
const Calculator = {//creates an object to keep track of values
    Display_Value:'0',//this displays 0 on the screen
    First_Operand: null,//this will hold the first operand for any expressions, set to null for now.
    Wait_Second_Operand: false,//checks whether or not the second operand has been input.
    operator: null,//holds the operator, set to null for now
};

function Input_Digit(digit) {//modifies value each time a button is clicked
    const {Display_Value, Wait_Second_Operand} = Calculator;
    if (Wait_Second_Operand===true){//checking to see if Wait_Second_Operand is true and set Display_Value to the key that was clicked.
        Calculator.Display_Value=digit;
        Calculator.Wait_Second_Operand=false;
    }   else {
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;//overwrites Display_Value if current value is 0, otherwise adds onto it.
    }
}
function Input_Decimal(dot) {//this section handles decimal points
    if (Calculator.Wait_Second_Operand===true) return;//ensures accidental clicking of decimal point doesn't cause bugs in operation
    if (!Calculator.Display_Value.includes(dot)) {//if the Display_Value doesn't contain a decimal point...
        Calculator.Display_Value+=dot;//...add the decimal point
    }
}
function Handle_Operator(Next_Operator) {//this section handles operators
    const {First_Operand, Display_Value, operator} = Calculator
    const Value_of_Input=parseFloat(Display_Value); //When an operator key is pressed, we convert the current number displayed on the screen to a number, and then
    //store the result in Calculator.First_Operand if it doesn't already exist.
    if (operator && Calculator.Wait_Second_Operand) {//checks if an operator already exists, and if Wait_Second_Operand is true, then updates the operator and exits the function
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand==null){
        Calculator.First_Operand = Value_of_Input;
    }   else if (operator) {//checks to see if an operator already exists
            const Value_Now = First_Operand || 0;
            let result = Perform_Calculation[operator](Value_Now, Value_of_Input);//if operator exists, property lookup is performed for the operator in the Perform_calculation object
            //and the function that matches the operator is executed.
            result = Number(result).toFixed(9)//here we add a fixed amount of numbers after the decimal
            result = (result*1).toString()//this will remove any trailing 0s.
            Calculator.Display_Value=parseFloat(result);
            Calculator.First_Operand=parseFloat(result);
        }
        Calculator.Wait_Second_Operand = true;
        Calculator.operator = Next_Operator;
}
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
function Update_Display() {//this function updates the screen with the contents of Display_Value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}
Update_Display();

const keys = document.querySelector('.calculator-keys');//this section monitors button clicks
keys.addEventListener('click', (event) => {
    const {target} = event;//the target variable is an object that represents the element that was clicked
    if (!target.matches('button')) {//if the element that was clicked on is not a button...
        return;//...exit the function
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {//ensures AC clears numbers from Calculator
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})
