// Name
let name = document.querySelector(".userName .name");
const btnName = document.querySelector(".userName .btn");
const totalName = document.querySelector(".userName .result");

btnName.addEventListener("click", () => {
  name = name.value.toUpperCase();
  btnName.textContent = `${name}`;
  totalName.textContent = `Ну привет, ${name} ;-)`;
});

// Plus
const valuePlus = document.querySelector(".plus .number");
const btnPlus = document.querySelector(".plus .btn");
const btnPlusReset = document.querySelector(".plus .btnReset");
const totalPlus = document.querySelector(".plus .result");

btnPlus.addEventListener("click", () => {
  const res = Number(valuePlus.value);
  totalPlus.textContent =
    res === 36 ? `Правильно. Молодец!` : `Неправильно. Дурак!`;
});

btnPlusReset.addEventListener("click", () => {
  totalPlus.textContent = "-";
  valuePlus.value = "";
});

// Minus
const valueMinus = document.querySelector(".minus .number");
const btnMinus = document.querySelector(".minus .btn");
const btnMinusReset = document.querySelector(".minus .btnReset");
const totalMinus = document.querySelector(".minus .result");

btnMinus.addEventListener("click", () => {
  const res = Number(valueMinus.value);
  totalMinus.textContent =
    res === 7 ? `Правильно. Молодец!` : `Неправильно. Дурак!`;
});

btnMinusReset.addEventListener("click", () => {
  totalMinus.textContent = "-";
  valueMinus.value = "";
});

// Multiply
const valueMultiply = document.querySelector(".multiply .number");
const btnMultiply = document.querySelector(".multiply .btn");
const btnMultiplyReset = document.querySelector(".multiply .btnReset");
const totalMultiply = document.querySelector(".multiply .result");

btnMultiply.addEventListener("click", () => {
  const res = Number(valueMultiply.value);
  totalMultiply.textContent =
    res === 56 ? `Правильно. Молодец!` : `Неправильно. Дурак!`;
});

btnMultiplyReset.addEventListener("click", () => {
  totalMultiply.textContent = "-";
  valueMultiply.value = "";
});

// Split
const valueSplit = document.querySelector(".split .number");
const btnSplit = document.querySelector(".split .btn");
const btnSplitReset = document.querySelector(".split .btnReset");
const totalSplit = document.querySelector(".split .result");

btnSplit.addEventListener("click", () => {
  const res = Number(valueSplit.value);
  totalSplit.textContent =
    res === 6 ? `Правильно. Молодец!` : `Неправильно. Дурак!`;
});

btnSplitReset.addEventListener("click", () => {
  totalSplit.textContent = "-";
  valueSplit.value = "";
});

// Test

const valueNumberOne = document.querySelector("input[data-valueNamberOne]");
const valueNumberTwo = document.querySelector("input[data-valueNamberTwo]");
const btnTestPlus = document.querySelector("button[data-plus]");
const btnTestMinus = document.querySelector("button[data-minus]");
const btnTestMultiply = document.querySelector("button[data-multiply]");
const btnTestSplit = document.querySelector("button[data-split");
const totalTest = document.querySelector(".test .result");
let one;
let two;
let testResult;

btnTestPlus.addEventListener("click", () => {
  one = Number(valueNumberOne.value);
  two = Number(valueNumberTwo.value);
  testResult = one + two;
  totalTest.textContent = `${testResult} , я Молодец =)))`;
  valueNumberOne.value = "";
  valueNumberTwo.value = "";
});

btnTestMinus.addEventListener("click", () => {
  one = Number(valueNumberOne.value);
  two = Number(valueNumberTwo.value);
  testResult = one - two;
  totalTest.textContent = `${testResult} , я Молодец =)))`;
  valueNumberOne.value = "";
  valueNumberTwo.value = "";
});

btnTestMultiply.addEventListener("click", () => {
  one = Number(valueNumberOne.value);
  two = Number(valueNumberTwo.value);
  testResult = one * two;
  totalTest.textContent = `${testResult} , я Молодец =)))`;
  valueNumberOne.value = "";
  valueNumberTwo.value = "";
});

btnTestSplit.addEventListener("click", () => {
  one = Number(valueNumberOne.value);
  two = Number(valueNumberTwo.value);
  testResult = one / two;
  totalTest.textContent = `${testResult} , я Молодец =)))`;
  valueNumberOne.value = "";
  valueNumberTwo.value = "";
});
