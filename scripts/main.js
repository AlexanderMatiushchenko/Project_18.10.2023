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
} from "./var.js";
export {
  setItemToLocalStorage,
  getItemFromLocalStorage,
  postOrderData,
  orderForm,
  getRequestforFourthBtn,
};

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
      regBtnAndLoginBtn.style.display = "none";
    } else {
      console.log("User Name or Email is Wrong.");
    }
  } else {
    console.log("User data not found.");
  }
}

function orderForm() {
  containerWithInputs.append(addressInput);
  containerWithInputs.append(priceInput);
  containerWithInputs.append(costInput);
  containerWithInputs.append(submitBtn);
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
  containerWithInputs.style.display = "none";
  orderButtonsContainer.append(payBtn);
  orderButtonsContainer.append(sendBtn);
  orderButtonsContainer.append(acceptBtn);
  orderButtonsContainer.append(completeBtn);
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
