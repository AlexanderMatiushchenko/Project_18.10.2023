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
  url,
  orderObject,
  messegeContainer,
} from "./var.js";
export {
  pSignUpMessegeFunc,
  setItemToLocalStorage,
  getItemFromLocalStorage,
  postOrderData,
  getRequestforFourthBtn,
  ifPostResponsOkShow,
  orderStatusCompleteAndAccept,
  showOrderStatusSent,
  showOrderStatusPaid,
  logout,
};

function setItemToLocalStorage() {
  const userObject = {
    userName: regUserNameInput.value,
    email: regEmailInput.value,
  };
  try {
    const userObjectJSON = JSON.stringify(userObject);
    localStorage.setItem("user", userObjectJSON);
  } catch {
    console.log("Err");
  }
}
function pSignUpMessegeFunc() {
  let existingMessage = document.querySelector("#signupMessage");
  if (existingMessage) {
    existingMessage.innerText =
      "Thanks for signing up. Your information has been updated.";
  } else {
    let pSignUpMessage = document.createElement("p");
    pSignUpMessage.id = "signupMessage";
    pSignUpMessage.innerText =
      "Thanks for signing up. Welcome to our community. We are happy to have you on board.";
    signupBlock.appendChild(pSignUpMessage);
  }
}
function getItemFromLocalStorage() {
  const loginUserName = loginUserNameInput.value;
  const loginEmail = loginEmailInput.value;
  const userObjectJSON = localStorage.getItem("user");
  if (userObjectJSON) {
    const userObject = JSON.parse(userObjectJSON);
    if (
      userObject.userName === loginUserName &&
      userObject.email === loginEmail
    ) {
      console.log(userObject);
      orderForm();
      regBtnAndLoginBtn.style.display = "none";
      containerWithInputs.style.display = "";
    } else {
      console.log("User Name or Email is Wrong.");
    }
  } else {
    console.log("User data not found.");
  }
}

function orderForm() {
  containerWithInputs.append(addressInput, priceInput, costInput, submitBtn);
}

async function postOrderData() {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(orderObject),
  });
  ifPostResponsOk();
  // const responseText = await response.text();
}
function ifPostResponsOkShow() {
  containerWithInputs.style.display = "none";
  orderButtonsContainer.style.display = "";
}
function ifPostResponsOk() {
  const buttons = [payBtn, sendBtn, acceptBtn, completeBtn];
  for (const button of buttons) {
    orderButtonsContainer.append(button);
  }
}

async function getRequestforFourthBtn() {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(),
  });
}
function showOrderStatusPaid() {
  messegeContainer.style.display = "block";
  messege.innerText = "Order has been paid";
  setTimeout(function () {
    messege.innerText = "";
    messegeContainer.style.display = "";
  }, 2000);
}
function showOrderStatusSent() {
  messegeContainer.style.display = "block";
  messege.innerText = "the Order has been sent";
  setTimeout(function () {
    messege.innerText = "";
    messegeContainer.style.display = "";
  }, 2000);
}
function orderStatusCompleteAndAccept() {
  messegeContainer.style.display = "block";
  messege.innerText = "Succes";
  setTimeout(function () {
    messege.innerText = "";
    messegeContainer.style.display = "";
  }, 2000);
}
function logout() {
  orderButtonsContainer.style.display = "none";
  regBtnAndLoginBtn.style.display = "";
}
