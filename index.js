import {
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
  payBtn,
  sendBtn,
  acceptBtn,
  completeBtn,
  logoutBtn,
  pMessege,
} from "./scripts/var.js";
import {
  userRegistration,
  userLogin,
  setItemToLocalStorage,
  getItemFromLocalStorage,
  postOrderData,
  orderForm,
  getRequestforFourthBtn,
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
payBtn.addEventListener("click", () => {
  getRequestforFourthBtn();
  pMessege.innerText = "Order has been paid";
});
sendBtn.addEventListener("click", () => {
  getRequestforFourthBtn();
  pMessege.innerText = "the order has been sent";
});
acceptBtn.addEventListener("click", () => {
  getRequestforFourthBtn();
  pMessege.innerText = "Succes";
});
completeBtn.addEventListener("click", () => {
  getRequestforFourthBtn();
  pMessege.innerText = "Succes";
});
logoutBtn.addEventListener("click", () => {
  body.style.display = "none";
});
