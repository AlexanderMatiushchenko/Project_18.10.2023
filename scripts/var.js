const body = document.querySelector("body");
const regBtnAndLoginBtn = document.querySelector("#regBtnAndLoginBtn");

// Sign up Form
const regUserNameInput = document.querySelector("#regUserNameInput");
const regEmailInput = document.querySelector("#regEmailInput");
const registrationBtn = document.querySelector("#registrationBtn");

//Sign in Form
const loginUserNameInput = document.querySelector("#loginUserNameInput");
const loginEmailInput = document.querySelector("#loginEmailInput ");
const loginBtn = document.querySelector("#loginBtn");

// Orders form
const addressInput = document.createElement("input");
addressInput.placeholder = "Address";
const priceInput = document.createElement("input");
priceInput.placeholder = "Price";
const costInput = document.createElement("input");
costInput.placeholder = "Cost";
const submitBtn = document.createElement("button");
submitBtn.innerText = "Submit";
const url = "https://jsonplaceholder.typicode.com/posts";
let orderObject = {
  address: addressInput.value,
  price: priceInput.value,
  cost: costInput.value,
};

// Container with buttons in Order Form
const orderButtonsContainer = document.querySelector("#orderButtonsContainer");
const containerWithInputs = document.querySelector("#containerWithInputs");
const loginFormContainer = document.querySelector("#loginFormContainer");
const registrationFormContainer = document.querySelector(
  "#registrationFormContainer"
);
const payBtn = document.createElement("button");
payBtn.innerText = "Pay";
const sendBtn = document.createElement("button");
sendBtn.innerText = "Send";
const acceptBtn = document.createElement("button");
acceptBtn.innerText = "Accept";
const completeBtn = document.createElement("button");
completeBtn.innerText = "Complete";
let messege = document.createElement("h3");
orderButtonsContainer.append(messege);

const registrationH1 = document.createElement("h1");
regBtnAndLoginBtn.append(registrationH1);

// Logout button

const logoutBtn = document.createElement("button");
logoutBtn.innerText = "Logout";
orderButtonsContainer.append(logoutBtn);
const signinBlock = document.querySelector("#signinBlock");
const signupBlock = document.querySelector("#signupBlock");

export {
  body,
  regBtnAndLoginBtn,
  logoutBtn,
  signinBlock,
  signupBlock,
  regUserNameInput,
  regEmailInput,
  registrationBtn,
  loginBtn,
  loginEmailInput,
  loginUserNameInput,
  payBtn,
  sendBtn,
  acceptBtn,
  completeBtn,
  messege,
  addressInput,
  priceInput,
  costInput,
  submitBtn,
  orderButtonsContainer,
  containerWithInputs,
  loginFormContainer,
  registrationFormContainer,
  url,
  orderObject,
};
