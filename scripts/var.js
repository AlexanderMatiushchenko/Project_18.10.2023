const body = document.querySelector("body");
const regBtnAndLoginBtn = document.querySelector("#regBtnAndLoginBtn");
const registrationBtn = document.querySelector("#registrationBtn");
const loginBtn = document.querySelector("#loginBtn");
// Anmeldung Form
const regUserNameInput = document.createElement("input");
const regEmailInput = document.createElement("input");
const signUpBtn = document.createElement("button");
signUpBtn.innerText = "Sign Up";
regUserNameInput.placeholder = "User Name";
regEmailInput.placeholder = "Email";

//Einloggen Form
const loginUserNameInput = document.createElement("input");
const loginEmailInput = document.createElement("input");
const loginBtnLoginForm = document.createElement("button");
loginBtnLoginForm.innerText = "Login";
loginUserNameInput.placeholder = "User Name";
loginEmailInput.placeholder = "Email";

// Orders form
const addressInput = document.createElement("input");
addressInput.placeholder = "Address";
const priceInput = document.createElement("input");
priceInput.placeholder = "Price";
const costInput = document.createElement("input");
costInput.placeholder = "Cost";
const submitBtn = document.createElement("butoon");
submitBtn.innerText = "Submit";
const url = "https://jsonplaceholder.typicode.com/posts";
let orderObject = {
  address: addressInput.value,
  price: priceInput.value,
  cost: costInput.value,
};

const registrationH1 = document.createElement("h1");
regBtnAndLoginBtn.append(registrationH1);

export {
  body,
  regBtnAndLoginBtn,
  registrationBtn,
  loginBtn,
  regUserNameInput,
  regEmailInput,
  loginUserNameInput,
  loginEmailInput,
  registrationH1,
  signUpBtn,
  loginBtnLoginForm,
  addressInput,
  priceInput,
  costInput,
  url,
  orderObject,
  submitBtn,
};
