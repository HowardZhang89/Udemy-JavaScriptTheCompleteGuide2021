const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNumber, 
    newResult){
        const logEntry={
            operation: operationIdentifier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntries);
}

function calculateResult(calculationType){
    const enteredNumber = getUserInput();
    if(
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calcualtionType !== 'DIVIDE' ||
        !enteredNumber // same as enteredNumber === 0. falsy value. Only 0 is falsy.
    ){
        return;
    }
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    }else if(calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    }else if(calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*'
    }else if(calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    // Else block is not mandatory 

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(mathOperator, initialResult, enteredNumber, currentResult);
}

function add(){
    calculateResult('ADD');
}

function subtract(){
    calculateResult('SUBTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)

