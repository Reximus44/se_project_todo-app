// // moved
// const showInputError = (formElement, inputElement, errorMessage, settings) => {
//   const errorElementId = `#${inputElement.id}-error`;
//   const errorElement = formElement.querySelector(errorElementId);
//   inputElement.classList.add(settings.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(settings.errorClass);
// };

// // moved
// const hideInputError = (formElement, inputElement, settings) => {
//   const errorElementId = `#${inputElement.id}-error`;
//   const errorElement = formElement.querySelector(errorElementId);
//   inputElement.classList.remove(settings.inputErrorClass);
//   errorElement.classList.remove(settings.errorClass);
//   errorElement.textContent = "";
// };

// // moved
// const checkInputValidity = (formElement, inputElement, settings) => {
//   if (!inputElement.validity.valid) {
//     showInputError(
//       formElement,
//       inputElement,
//       inputElement.validationMessage,
//       settings
//     );
//   } else {
//     hideInputError(formElement, inputElement, settings);
//   }
// };

// // moved
// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// // moved
// const toggleButtonState = (inputList, buttonElement, settings) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(settings.inactiveButtonClass);
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.classList.remove(settings.inactiveButtonClass);
//     buttonElement.disabled = false;
//   }
// };

// // moved
// const setEventListeners = (formElement, settings) => {
//   const inputList = Array.from(
//     formElement.querySelectorAll(settings.inputSelector)
//   );
//   const buttonElement = formElement.querySelector(
//     settings.submitButtonSelector
//   );

//   toggleButtonState(inputList, buttonElement, settings);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", () => {
//       checkInputValidity(formElement, inputElement, settings);
//       toggleButtonState(inputList, buttonElement, settings);
//     });
//   });
// };

// // moved
// const enableValidation = (settings) => {
//   const formElement = document.querySelector(settings.formSelector);
//   formElement.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//   });
//   setEventListeners(formElement, settings);
// };

// enableValidation(validationConfig);
