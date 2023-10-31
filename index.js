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
  orderStatusCompleteAndAccept,
  showOrderStatusSent,
  showOrderStatusPaid,
  logout,
} from "./scripts/main.js";

registrationBtn.addEventListener("click", () => {
  skeletonContainer.style.display = "block";
  setTimeout(() => {
    setItemToLocalStorage();
    regUserNameInput.value = "";
    regEmailInput.value = "";
    skeletonContainer.style.display = "none";
  }, 1000);
  pSignUpMessegeFunc();
});

loginBtn.addEventListener("click", () => {
  getItemFromLocalStorage();
  loginUserNameInput.value = "";
  loginEmailInput.value = "";
});
submitBtn.addEventListener("click", () => {
  skeletonContainer.style.display = "block";
  postOrderData();
  ifPostResponsOkShow();
  setTimeout(() => {
    skeletonContainer.style.display = "none";
  }, 600);
});
payBtn.addEventListener("click", () => {
  skeletonContainer.style.display = "block";
  setTimeout(() => {
    getRequestforFourthBtn();
    showOrderStatusPaid();
    skeletonContainer.style.display = "none";
  }, 1000);
});
sendBtn.addEventListener("click", () => {
  skeletonContainer.style.display = "block";
  setTimeout(() => {
    getRequestforFourthBtn();
    showOrderStatusSent();
    skeletonContainer.style.display = "none";
  }, 1000);
});
acceptBtn.addEventListener("click", () => {
  skeletonContainer.style.display = "block";
  setTimeout(() => {
    getRequestforFourthBtn();
    orderStatusCompleteAndAccept();
    skeletonContainer.style.display = "none";
  }, 1000);
});
completeBtn.addEventListener("click", () => {
  skeletonContainer.style.display = "block";
  setTimeout(() => {
    getRequestforFourthBtn();
    orderStatusCompleteAndAccept();
    skeletonContainer.style.display = "none";
  }, 1000);
});
logoutBtn.addEventListener("click", () => {
  logout();
});
