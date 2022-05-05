/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("////////////////////DOM/////////////////////////\nvar container = document.getElementById('container');\nvar form = document.getElementById('form');\nvar userName = document.getElementById('name');\nvar email = document.getElementById('email');\nvar country = document.getElementById('country');\nvar textCountry = document.getElementById('textCountry');\nvar zip = document.getElementById('zip');\nvar password = document.getElementById('password');\nvar confirmPass = document.getElementById('confirmPass');\nvar show = document.getElementById('show');\nvar hide = document.getElementById('hide');\nvar inputData = document.querySelectorAll('[data-input]');\nvar btnSub = document.getElementById('submit'); /////////////// Test password ////////////////////\n// function testPass(){\n//     if( password.value !== confirmPass.value )\n//     {\n//         alert(\"password not identical\")\n//     }\n// }\n\nfunction clearAll() {\n  userName.value = '';\n  email.value = '';\n  country.value = textCountry.value;\n  zip.value = '';\n  password.value = '';\n  confirmPass.value = '';\n} // \n///////////check Inputs///////////////\n\n\nbtnSub.addEventListener('click', function (e) {\n  e.preventDefault();\n  checkInputs();\n});\n\nfunction checkInputs() {\n  var userNameVal = userName.value.trim(); //trim() remove white space\n\n  var emailVal = email.value.trim();\n  var zipVal = zip.value.trim();\n  var passwordVal = password.value.trim();\n  var confirmVal = confirmPass.value.trim();\n\n  if (userNameVal === '') {\n    errorForm(userName, 'Username is required !!');\n  } else {\n    successForm(userName);\n  }\n\n  if (emailVal === '') {\n    errorForm(email, 'Email is required !!');\n  } else if (!checkEmail(emailVal)) {\n    errorForm(email, 'Email not valid !!');\n  } else {\n    successForm(email);\n  }\n\n  if (zipVal === '') {\n    errorForm(zip, 'Zip is required !!');\n  } else {\n    successForm(zip);\n  }\n\n  if (passwordVal === '') {\n    errorForm(password, 'Password is required !!');\n    show.style.display = 'none';\n  } else if (passwordVal.length <= 8) {\n    errorForm(password, 'Password must be more than 8 digits');\n    show.style.display = 'none';\n  } else {\n    successForm(password);\n  }\n\n  if (confirmVal === '') {\n    errorForm(confirmPass, 'Password is required !!');\n  } else if (confirmVal !== passwordVal) {\n    errorForm(confirmPass, 'Password does not match');\n  } else {\n    successForm(confirmPass);\n  }\n\n  if (country.value === textCountry.value) {\n    errorForm(country, 'Country is required !!');\n  } else {\n    successForm(country);\n  }\n}\n\nfunction errorForm(input, message) {\n  var formControl = input.parentElement; // .control-form\n\n  var small = formControl.querySelector('small');\n  small.innerText = message; //formControl.className ='control-form error'\n\n  formControl.classList.add('error');\n  formControl.classList.remove('success');\n  shakeError();\n}\n\nfunction successForm(input) {\n  var formControl = input.parentElement;\n  var small = formControl.querySelector('small');\n  formControl.classList.add('success'); //formControl.className ='control-form success'\n\n  formControl.classList.remove('error');\n  small.innerText = '';\n  show.style.right = \"5px\";\n}\n\nfunction checkEmail(email) {\n  return \"/^(([^<>()[]\\\\.,;:s@\\\"]+(.[^<>()[]\\\\.,;:s@\\\"]+)*)|(\\\".+\\\"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(\".concat(email, \")\");\n}\n\nfunction shakeError() {\n  container.classList.toggle(\"shake\");\n}\n\nshow.addEventListener('click', showPass);\n\nfunction showPass() {\n  if (password.type === \"password\") {\n    password.type = \"text\";\n    show.classList.remove('show');\n    hide.classList.add('hide');\n  } else {\n    password.type = \"password\";\n  }\n}\n\n//# sourceURL=webpack://validation_form/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;