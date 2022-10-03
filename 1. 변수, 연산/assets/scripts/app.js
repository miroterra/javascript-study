const defaultResult = 0;
let currentResult = defaultResult;
let logEntries;

/** 입력 필드에서 입력값 가져오는 함수 */
function getUserNumberInput() {
  return parseInt(userInput.value);
}

/** 결과값 위에 연산 과정을 보여주는 함수 */
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // vendor.js 에서 가져옴
}

/** 콘솔에 배열로써 값들의 상황을 알려주는 함수 */
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

/** 각각의 연산자에 대한 결과값을 호출하는 함수 */
function calculateResult(calculationType) {
  // 조건 검사
  if (
    (calculationType !== 'ADD' && calculationType !== 'SUBTRACT' && calculationType !== 'MULTIPLY' && calculationType !== 'DEVIDE') ||
    !enteredNumber
  ) {
    return;
  }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculateResult === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculateResult === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculateResult === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

/** 더하기 함수 */
function add() {
  calculateResult('ADD');
}

/** 빼기 함수  */
function subtract() {
  calculateResult('SUBTRACT');
}

/** 곱하기 함수 */
function multiply() {
  calculateResult('MULTIPLY');
}

/** 나누기 함수 */
function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
