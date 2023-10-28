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
  costInput,
  orderObject,
  url,
  submitBtn,
  payBtn,
  sendBtn,
  acceptBtn,
  completeBtn,
  pMessege,
  logoutBtn,
  registrationH1,
} from "./var.js";
export {
  userRegistration,
  userLogin,
  setItemToLocalStorage,
  getItemFromLocalStorage,
  postOrderData,
  orderForm,
  getRequestforFourthBtn,
};
function userRegistration() {
  regBtnAndLoginBtn.append(regEmailInput);
  regBtnAndLoginBtn.append(regUserNameInput);
  regBtnAndLoginBtn.append(signUpBtn);
}
function userLogin() {
  regBtnAndLoginBtn.append(loginEmailInput);
  regBtnAndLoginBtn.append(loginUserNameInput);
  regBtnAndLoginBtn.append(loginBtnLoginForm);
}

function setItemToLocalStorage() {
  const userObject = {
    userName: regUserNameInput.value,
    email: regEmailInput.value,
  };
  const userObjectJSON = JSON.stringify(userObject);
  localStorage.setItem("user", userObjectJSON);
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
    } else {
      console.log("User Name or Email is Wrong.");
    }
  } else {
    console.log("User data not found.");
  }
}

function orderForm() {
  regBtnAndLoginBtn.append(addressInput);
  regBtnAndLoginBtn.append(priceInput);
  regBtnAndLoginBtn.append(costInput);
  regBtnAndLoginBtn.append(submitBtn);
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
function ifPostResponsOk() {
  regBtnAndLoginBtn.append(payBtn);
  regBtnAndLoginBtn.append(sendBtn);
  regBtnAndLoginBtn.append(acceptBtn);
  regBtnAndLoginBtn.append(completeBtn);
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
