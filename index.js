import {
  body,
  regBtnAndLoginBtn,
  registrationBtn,
  loginBtn,
  regUserNameInput,
  regEmailInput,
  loginUserNameInput,
  loginEmailInput,
  loginBtnLoginForm,
  signUpBtn,
  addressInput,
  priceInput,
  url,
  costInput,
  orderObject,
  submitBtn,
  registrationH1,
} from "./scripts/var.js";
import {
  userRegistration,
  userLogin,
  setItemToLocalStorage,
  getItemFromLocalStorage,
  postOrderData,
  orderForm,
} from "./scripts/main.js";

registrationBtn.addEventListener("click", () => {
  userRegistration();
});
signUpBtn.addEventListener("click", () => {
  setItemToLocalStorage();
  regUserNameInput.value = "";
  regEmailInput.value = "";
});

loginBtn.addEventListener("click", () => {
  userLogin();
});
loginBtnLoginForm.addEventListener("click", () => {
  getItemFromLocalStorage();
  loginUserNameInput.value = "";
  loginEmailInput.value = "";
});
submitBtn.addEventListener("click", () => {
  postOrderData();
});
