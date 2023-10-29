import {
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
  orderObject,
} from "./scripts/var.js";
import {
  setItemToLocalStorage,
  getItemFromLocalStorage,
  postOrderData,
  orderForm,
  getRequestforFourthBtn,
} from "./scripts/main.js";

registrationBtn.addEventListener("click", () => {
  setTimeout(function () {
    setItemToLocalStorage();
    regUserNameInput.value = "";
    regEmailInput.value = "";
  }, 2000);
});

loginBtn.addEventListener("click", () => {
  getItemFromLocalStorage();
  loginUserNameInput.value = "";
  loginEmailInput.value = "";
});
submitBtn.addEventListener("click", () => {
  postOrderData();
});
payBtn.addEventListener("click", () => {
  getRequestforFourthBtn();
  messege.innerText = "Order has been paid";
});
sendBtn.addEventListener("click", () => {
  getRequestforFourthBtn();
  messege.innerText = "the Order has been sent";
});
acceptBtn.addEventListener("click", () => {
  getRequestforFourthBtn();
  messege.innerText = "Succes";
});
completeBtn.addEventListener("click", () => {
  getRequestforFourthBtn();
  messege.innerText = "Succes";
});
logoutBtn.addEventListener("click", () => {
  orderButtonsContainer.style.display = "none";
  regBtnAndLoginBtn.style.display = "";
});
