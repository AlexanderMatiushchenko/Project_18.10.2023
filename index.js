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
  pSignUpMessegeFunc,
  ifPostResponsOkShow,
} from "./scripts/main.js";

registrationBtn.addEventListener("click", () => {
  // Показываем скелетон
  skeletonContainer.style.display = "block";

  setTimeout(function () {
    // Здесь выполните вашу задачу после задержки
    setItemToLocalStorage();
    regUserNameInput.value = "";
    regEmailInput.value = "";

    // Скрываем скелетон
    skeletonContainer.style.display = "none";
  }, 2000);
  pSignUpMessegeFunc();
});

loginBtn.addEventListener("click", () => {
  getItemFromLocalStorage();
  loginUserNameInput.value = "";
  loginEmailInput.value = "";
});
submitBtn.addEventListener("click", () => {
  postOrderData();
  ifPostResponsOkShow();
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
