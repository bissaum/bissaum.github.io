webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/index.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://yarnpkg.com/en/package/normalize.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --black: black;\n  --primary-dark: #602539;\n  --secondary-dark: #4e8394;\n  --danger-dark: #c82d11;\n  --warning-dark: #c9721a;\n  --success-dark: #108a3a;\n  --info-dark: #4183d4;\n  --gray-dark: #454545;\n  --offline-dark: #959595;\n  --loading-dark: #757575;\n  --primary: #893552;\n  --secondary: #70bbd4;\n  --danger: #f15b40;\n  --warning: #f9a870;\n  --success: #25b456;\n  --info: #95b6df;\n  --gray: #757575;\n  --offline: #d5d5d5;\n  --loading: #959595;\n  --primary-light: #954a64;\n  --secondary-light: #94cde0;\n  --danger-light: #ffd1c9;\n  --warning-light: #ffd6ba;\n  --success-light: #b7ffcf;\n  --info-light: #d1e5ff;\n  --gray-light: #959595;\n  --offline-light: #eeeeee;\n  --loading-light: #d5d5d5;\n  --white: white;\n}\n\n@font-face {\n  font-family: Recoleta-Regular;\n  src: local(Recoleta-Regular), url(\"https://bissaum.github.io/font/seres/heading/Recoleta-Regular.ttf\");\n}\n@font-face {\n  font-family: Recoleta-Bold;\n  src: local(Recoleta-Bold), url(\"https://bissaum.github.io/font/seres/heading/Recoleta-Bold.ttf\");\n}\n@font-face {\n  font-family: Recoleta-Italic;\n  src: local(Recoleta-Italic), url(\"https://bissaum.github.io/font/seres/heading/Recoleta-Italic.ttf\");\n}\n@font-face {\n  font-family: Recoleta-Bold-Italic;\n  src: local(Recoleta-Bold-Italic), url(\"https://bissaum.github.io/font/seres/heading/Recoleta-Bold-Italic.ttf\");\n}\n@font-face {\n  font-family: Barlow-Regular;\n  src: local(Barlow-Regular), url(\"https://bissaum.github.io/font/seres/body/Barlow-Regular.ttf\");\n}\n@font-face {\n  font-family: Barlow-Bold;\n  src: local(Barlow-Bold), url(\"https://bissaum.github.io/font/seres/body/Barlow-Bold.ttf\");\n}\n@font-face {\n  font-family: Barlow-Italic;\n  src: local(Barlow-Italic), url(\"https://bissaum.github.io/font/seres/body/Barlow-Italic.ttf\");\n}\n@font-face {\n  font-family: Barlow-Bold-Italic;\n  src: local(Barlow-Bold-Italic), url(\"https://bissaum.github.io/font/seres/body/Barlow-Bold-Italic.ttf\");\n}\n:root {\n  --font-heading-regular: Recoleta-Regular;\n  --font-heading-bold: Recoleta-Bold;\n  --font-heading-italic: Recoleta-Italic;\n  --font-heading-bold-italic: Recoleta-Bold-Italic;\n  --font-body-regular: Barlow-Regular;\n  --font-body-bold: Barlow-Bold;\n  --font-body-italic: Barlow-Italic;\n  --font-body-bold-italic: Barlow-Bold-Italic;\n}\n\nh1 {\n  font-family: var(--font-heading-regular);\n  color: var(--gray-dark);\n  font-size: 2em;\n  line-height: 3rem;\n  margin-bottom: 20px;\n  margin-top: 0;\n}\n\nh2 {\n  font-family: var(--font-heading-regular);\n  color: var(--gray-dark);\n  font-size: 1.9em;\n  line-height: 2.9rem;\n  margin-bottom: 19px;\n  margin-top: 0;\n}\n\nh3 {\n  font-family: var(--font-heading-regular);\n  color: var(--gray-dark);\n  font-size: 1.8em;\n  line-height: 2.8rem;\n  margin-bottom: 18px;\n  margin-top: 0;\n}\n\nh4 {\n  font-family: var(--font-heading-regular);\n  color: var(--gray-dark);\n  font-size: 1.7em;\n  line-height: 2.7rem;\n  margin-bottom: 17px;\n  margin-top: 0;\n}\n\nh5 {\n  font-family: var(--font-heading-regular);\n  color: var(--gray-dark);\n  font-size: 1.6em;\n  line-height: 2.6rem;\n  margin-bottom: 16px;\n  margin-top: 0;\n}\n\nh6 {\n  font-family: var(--font-heading-regular);\n  color: var(--gray-dark);\n  font-size: 1.5em;\n  line-height: 2.5rem;\n  margin-bottom: 15px;\n  margin-top: 0;\n}\n\n@media (min-width: 576px) {\n  h1 {\n    font-size: 2.1em;\n    line-height: 3.1rem;\n    margin-bottom: 21px;\n  }\n\n  h2 {\n    font-size: 2em;\n    line-height: 3rem;\n    margin-bottom: 20px;\n  }\n\n  h3 {\n    font-size: 1.9em;\n    line-height: 2.9rem;\n    margin-bottom: 19px;\n  }\n\n  h4 {\n    font-size: 1.8em;\n    line-height: 2.8rem;\n    margin-bottom: 18px;\n  }\n\n  h5 {\n    font-size: 1.7em;\n    line-height: 2.7rem;\n    margin-bottom: 17px;\n  }\n\n  h6 {\n    font-size: 1.6em;\n    line-height: 2.6rem;\n    margin-bottom: 16px;\n  }\n}\n@media (min-width: 768px) {\n  h2 {\n    font-size: 2.2em;\n    line-height: 3.2rem;\n    margin-bottom: 22px;\n  }\n\n  h2 {\n    font-size: 2.1em;\n    line-height: 3.1rem;\n    margin-bottom: 21px;\n  }\n\n  h3 {\n    font-size: 2em;\n    line-height: 3rem;\n    margin-bottom: 20px;\n  }\n\n  h4 {\n    font-size: 1.9em;\n    line-height: 2.9rem;\n    margin-bottom: 19px;\n  }\n\n  h5 {\n    font-size: 1.8em;\n    line-height: 2.8rem;\n    margin-bottom: 18px;\n  }\n\n  h6 {\n    font-size: 1.7em;\n    line-height: 2.7rem;\n    margin-bottom: 17px;\n  }\n}\n@media (min-width: 992px) {\n  h1 {\n    font-size: 2.3em;\n    line-height: 3.3rem;\n    margin-bottom: 23px;\n  }\n\n  h2 {\n    font-size: 2.2em;\n    line-height: 3.2rem;\n    margin-bottom: 22px;\n  }\n\n  h3 {\n    font-size: 2.1em;\n    line-height: 3.1rem;\n    margin-bottom: 21px;\n  }\n\n  h4 {\n    font-size: 2em;\n    line-height: 3rem;\n    margin-bottom: 20px;\n  }\n\n  h5 {\n    font-size: 1.9em;\n    line-height: 2.9rem;\n    margin-bottom: 19px;\n  }\n\n  h6 {\n    font-size: 1.8em;\n    line-height: 2.8rem;\n    margin-bottom: 18px;\n  }\n}\n@media (min-width: 1200px) {\n  h1 {\n    font-size: 2.4em;\n    line-height: 3.4rem;\n    margin-bottom: 24px;\n  }\n\n  h2 {\n    font-size: 2.3em;\n    line-height: 3.3rem;\n    margin-bottom: 23px;\n  }\n\n  h3 {\n    font-size: 2.2em;\n    line-height: 3.2rem;\n    margin-bottom: 22px;\n  }\n\n  h4 {\n    font-size: 2.1em;\n    line-height: 3.1rem;\n    margin-bottom: 21px;\n  }\n\n  h5 {\n    font-size: 2em;\n    line-height: 3rem;\n    margin-bottom: 20px;\n  }\n\n  h6 {\n    font-size: 1.9em;\n    line-height: 2.9rem;\n    margin-bottom: 19px;\n  }\n}\n@media (min-width: 1400px) {\n  h1 {\n    font-size: 2.5em;\n    line-height: 3.5rem;\n    margin-bottom: 25px;\n  }\n\n  h2 {\n    font-size: 2.4em;\n    line-height: 3.4rem;\n    margin-bottom: 24px;\n  }\n\n  h3 {\n    font-size: 2.3em;\n    line-height: 3.3rem;\n    margin-bottom: 23px;\n  }\n\n  h4 {\n    font-size: 2.2em;\n    line-height: 3.2rem;\n    margin-bottom: 22px;\n  }\n\n  h5 {\n    font-size: 2.1em;\n    line-height: 3.1rem;\n    margin-bottom: 21px;\n  }\n\n  h6 {\n    font-size: 2em;\n    line-height: 3rem;\n    margin-bottom: 20px;\n  }\n}\n@media (min-width: 2560px) {\n  h1 {\n    font-size: 5em;\n    line-height: 7rem;\n    margin-bottom: 50px;\n  }\n\n  h2 {\n    font-size: 4.8em;\n    line-height: 6.8rem;\n    margin-bottom: 48px;\n  }\n\n  h3 {\n    font-size: 4.6em;\n    line-height: 6.6rem;\n    margin-bottom: 46px;\n  }\n\n  h4 {\n    font-size: 4.4em;\n    line-height: 6.4rem;\n    margin-bottom: 44px;\n  }\n\n  h5 {\n    font-size: 4.2em;\n    line-height: 6.2rem;\n    margin-bottom: 42px;\n  }\n\n  h6 {\n    font-size: 4em;\n    line-height: 6rem;\n    margin-bottom: 40px;\n  }\n}\np {\n  font-family: var(--font-body-regular);\n  color: var(--gray-dark);\n  font-size: 1em;\n  line-height: 1.5rem;\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\nb {\n  font-family: var(--font-body-bold);\n  color: var(--gray-dark);\n  font-weight: normal;\n}\n\nstrong {\n  font-family: var(--font-body-bold);\n  color: var(--black);\n  font-weight: normal;\n}\n\ni {\n  font-family: var(--font-body-italic);\n  color: var(--gray-dark);\n  font-style: normal;\n}\n\nem {\n  font-family: var(--font-body-italic);\n  color: var(--black);\n  font-style: normal;\n}\n\nb i,\ni b,\nstrong i,\ni strong,\nb em,\nem b,\nstrong em,\nem strong {\n  font-family: var(--font-body-bold-italic);\n}\n\nu {\n  text-decoration: underline;\n}\n\ndel {\n  text-decoration: line-through;\n  color: var(--gray);\n}\n\nspan {\n  color: #00a1e4;\n}\n\nmark {\n  color: black;\n  background-color: #ffd400;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n@media (min-width: 576px) {\n  p {\n    font-size: 1.1em;\n    line-height: 1.7rem;\n    margin-bottom: 21px;\n  }\n}\n@media (min-width: 768px) {\n  p {\n    font-size: 1.2em;\n    line-height: 1.9rem;\n    margin-bottom: 22px;\n  }\n}\n@media (min-width: 992px) {\n  p {\n    font-size: 1.3em;\n    line-height: 2.1rem;\n    margin-bottom: 23px;\n  }\n}\n@media (min-width: 1200px) {\n  p {\n    font-size: 1.4em;\n    line-height: 2.3rem;\n    margin-bottom: 24px;\n  }\n}\n@media (min-width: 1400px) {\n  p {\n    font-size: 1.5em;\n    line-height: 2.5rem;\n    margin-bottom: 25px;\n  }\n}\n@media (min-width: 2560px) {\n  p {\n    font-size: 3em;\n    line-height: 5rem;\n    margin-bottom: 50px;\n    margin-top: 0;\n  }\n}", "",{"version":3,"sources":["webpack://src/@theme/color/_seres.scss","webpack://src/index.scss","webpack://src/@theme/font/_seres.scss","webpack://src/@core/_heading.scss","webpack://src/@core/breakpoint/_sm.scss","webpack://src/@core/breakpoint/_md.scss","webpack://src/@core/breakpoint/_lg.scss","webpack://src/@core/breakpoint/_xl.scss","webpack://src/@core/breakpoint/_xxl.scss","webpack://src/@core/_paragraph.scss"],"names":[],"mappings":"AAqCE;EACE,cAAA;EAEA,uBAAA;EACA,yBAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,oBAAA;EACA,oBAAA;EACA,uBAAA;EACA,uBAAA;EAEA,kBAAA;EACA,oBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;EAEA,wBAAA;EACA,0BAAA;EACA,uBAAA;EACA,wBAAA;EACA,wBAAA;EACA,qBAAA;EACA,qBAAA;EACA,wBAAA;EACA,wBAAA;EAEA,cAAA;ACvCJ;;ACjBE;EACE,6BAAA;EACA,sGAAA;ADoBJ;AChBE;EACE,0BAAA;EACA,gGAAA;ADkBJ;ACdE;EACE,4BAAA;EACA,oGAAA;ADgBJ;ACZE;EACE,iCAAA;EACA,8GAAA;ADcJ;ACVE;EACE,2BAAA;EACA,+FAAA;ADYJ;ACRE;EACE,wBAAA;EACA,yFAAA;ADUJ;ACNE;EACE,0BAAA;EACA,6FAAA;ADQJ;ACJE;EACE,+BAAA;EACA,uGAAA;ADMJ;ACFE;EACE,wCAAA;EACA,kCAAA;EACA,sCAAA;EACA,gDAAA;EAEA,mCAAA;EACA,6BAAA;EACA,iCAAA;EACA,2CAAA;ADGJ;;AExEA;EACE,wCAAA;EACA,uBAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;AF2EF;;AExEA;EACE,wCAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;AF2EF;;AExEA;EACE,wCAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;AF2EF;;AExEA;EACE,wCAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;AF2EF;;AExEA;EACE,wCAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;AF2EF;;AExEA;EACE,wCAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;AF2EF;;AG5HE;EDqDA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EF2EF;;EExEA;IACE,cAAA;IACA,iBAAA;IACA,mBAAA;EF2EF;;EExEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EF2EF;;EExEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EF2EF;;EExEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EF2EF;;EExEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EF2EF;AACF;AIlKE;EF2FA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EF0EF;;EEvEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EF0EF;;EEvEA;IACE,cAAA;IACA,iBAAA;IACA,mBAAA;EF0EF;;EEvEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EF0EF;;EEvEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EF0EF;;EEvEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EF0EF;AACF;AKvME;EHiIA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFyEF;;EEtEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFyEF;;EEtEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFyEF;;EEtEA;IACE,cAAA;IACA,iBAAA;IACA,mBAAA;EFyEF;;EEtEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFyEF;;EEtEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFyEF;AACF;AM5OE;EJuKA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFwEF;;EErEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFwEF;;EErEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFwEF;;EErEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFwEF;;EErEA;IACE,cAAA;IACA,iBAAA;IACA,mBAAA;EFwEF;;EErEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFwEF;AACF;AOjRE;EL6MA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFuEF;;EEpEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFuEF;;EEpEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFuEF;;EEpEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFuEF;;EEpEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFuEF;;EEpEA;IACE,cAAA;IACA,iBAAA;IACA,mBAAA;EFuEF;AACF;AEpEA;EACE;IACE,cAAA;IACA,iBAAA;IACA,mBAAA;EFsEF;;EEnEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFsEF;;EEnEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFsEF;;EEnEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFsEF;;EEnEA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;EFsEF;;EEnEA;IACE,cAAA;IACA,iBAAA;IACA,mBAAA;EFsEF;AACF;AQ7VA;EACE,qCAAA;EACA,uBAAA;EACA,cAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;AR+VF;;AQ5VA;EACE,kCAAA;EACA,uBAAA;EACA,mBAAA;AR+VF;;AQ5VA;EACE,kCAAA;EACA,mBAAA;EACA,mBAAA;AR+VF;;AQ5VA;EACE,oCAAA;EACA,uBAAA;EACA,kBAAA;AR+VF;;AQ5VA;EACE,oCAAA;EACA,mBAAA;EACA,kBAAA;AR+VF;;AQ5VA;;;;;;;;EAQE,yCAAA;AR+VF;;AQ5VA;EACE,0BAAA;AR+VF;;AQ5VA;EACE,6BAAA;EACA,kBAAA;AR+VF;;AQ5VA;EACE,cAAA;AR+VF;;AQ5VA;EACE,YAAA;EACA,yBAAA;AR+VF;;AQ5VA;EACE,kBAAA;AR+VF;;AQ5VA;EACE,mBAAA;AR+VF;;AQ5VA;EACE,gBAAA;AR+VF;;AQ5VA;EACE,iBAAA;AR+VF;;AGxaE;EK6EA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;ER+VF;AACF;AIhbE;EIqFA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;ER8VF;AACF;AKvbE;EG6FA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;ER6VF;AACF;AM9bE;EEqGA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;ER4VF;AACF;AOrcE;EC6GA;IACE,gBAAA;IACA,mBAAA;IACA,mBAAA;ER2VF;AACF;AQxVA;EACE;IACE,cAAA;IACA,iBAAA;IACA,mBAAA;IACA,aAAA;ER0VF;AACF","sourcesContent":["@import \"./../theme\";\n\n@include theme(\"seres\") {\n  $black: rgba(0, 0, 0, 1);\n\n  $primary-dark: rgba(96, 37, 57, 1);\n  $secondary-dark: rgba(78, 131, 148, 1);\n  $danger-dark: rgba(200, 45, 17, 1);\n  $warning-dark: rgba(201, 114, 26, 1);\n  $success-dark: rgba(16, 138, 58, 1);\n  $info-dark: rgba(65, 131, 212, 1);\n  $gray-dark: rgba(69, 69, 69, 1);\n  $offline-dark: rgba(149, 149, 149, 1);\n  $loading-dark: rgba(117, 117, 117, 1);\n\n  $primary: rgba(137, 53, 82, 1);\n  $secondary: rgba(112, 187, 212, 1);\n  $danger: rgba(241, 91, 64, 1);\n  $warning: rgba(249, 168, 112, 1);\n  $success: rgba(37, 180, 86, 1);\n  $info: rgba(149, 182, 223, 1);\n  $gray: rgba(117, 117, 117, 1);\n  $offline: rgba(213, 213, 213, 1);\n  $loading: rgba(149, 149, 149, 1);\n\n  $primary-light: rgba(149, 74, 100, 1);\n  $secondary-light: rgba(148, 205, 224, 1);\n  $danger-light: rgba(255, 209, 201, 1);\n  $warning-light: rgba(255, 214, 186, 1);\n  $success-light: rgba(183, 255, 207, 1);\n  $info-light: rgba(209, 229, 255, 1);\n  $gray-light: rgba(149, 149, 149, 1);\n  $offline-light: rgba(238, 238, 238, 1);\n  $loading-light: rgba(213, 213, 213, 1);\n\n  $white: rgba(255, 255, 255, 1);\n\n  :root {\n    --black: #{$black};\n\n    --primary-dark: #{$primary-dark};\n    --secondary-dark: #{$secondary-dark};\n    --danger-dark: #{$danger-dark};\n    --warning-dark: #{$warning-dark};\n    --success-dark: #{$success-dark};\n    --info-dark: #{$info-dark};\n    --gray-dark: #{$gray-dark};\n    --offline-dark: #{$offline-dark};\n    --loading-dark: #{$loading-dark};\n\n    --primary: #{$primary};\n    --secondary: #{$secondary};\n    --danger: #{$danger};\n    --warning: #{$warning};\n    --success: #{$success};\n    --info: #{$info};\n    --gray: #{$gray};\n    --offline: #{$offline};\n    --loading: #{$loading};\n\n    --primary-light: #{$primary-light};\n    --secondary-light: #{$secondary-light};\n    --danger-light: #{$danger-light};\n    --warning-light: #{$warning-light};\n    --success-light: #{$success-light};\n    --info-light: #{$info-light};\n    --gray-light: #{$gray-light};\n    --offline-light: #{$offline-light};\n    --loading-light: #{$loading-light};\n\n    --white: #{$white};\n  }\n}\n","@import \"https://yarnpkg.com/en/package/normalize.css\";\n\n@import \"./@theme/color\";\n@import \"./@theme/font\";\n\n@import \"./@core/heading\";\n@import \"./@core/paragraph\";\n","@import \"./../../@core/cdn\";\n@import \"./../theme\";\n\n@include theme(\"seres\") {\n  $font-heading-regular: \"Recoleta-Regular\";\n  $font-heading-bold: \"Recoleta-Bold\";\n  $font-heading-italic: \"Recoleta-Italic\";\n  $font-heading-bold-italic: \"Recoleta-Bold-Italic\";\n\n  $font-body-regular: \"Barlow-Regular\";\n  $font-body-bold: \"Barlow-Bold\";\n  $font-body-italic: \"Barlow-Italic\";\n  $font-body-bold-italic: \"Barlow-Bold-Italic\";\n\n  @font-face {\n    font-family: #{$font-heading-regular};\n    src: local(#{$font-heading-regular}),\n      url(\"https://#{$cdn}/font/#{$theme}/heading/#{$font-heading-regular}.ttf\");\n  }\n\n  @font-face {\n    font-family: #{$font-heading-bold};\n    src: local(#{$font-heading-bold}),\n      url(\"https://#{$cdn}/font/#{$theme}/heading/#{$font-heading-bold}.ttf\");\n  }\n\n  @font-face {\n    font-family: #{$font-heading-italic};\n    src: local(#{$font-heading-italic}),\n      url(\"https://#{$cdn}/font/#{$theme}/heading/#{$font-heading-italic}.ttf\");\n  }\n\n  @font-face {\n    font-family: #{$font-heading-bold-italic};\n    src: local(#{$font-heading-bold-italic}),\n      url(\"https://#{$cdn}/font/#{$theme}/heading/#{$font-heading-bold-italic}.ttf\");\n  }\n\n  @font-face {\n    font-family: #{$font-body-regular};\n    src: local(#{$font-body-regular}),\n      url(\"https://#{$cdn}/font/#{$theme}/body/#{$font-body-regular}.ttf\");\n  }\n\n  @font-face {\n    font-family: #{$font-body-bold};\n    src: local(#{$font-body-bold}),\n      url(\"https://#{$cdn}/font/#{$theme}/body/#{$font-body-bold}.ttf\");\n  }\n\n  @font-face {\n    font-family: #{$font-body-italic};\n    src: local(#{$font-body-italic}),\n      url(\"https://#{$cdn}/font/#{$theme}/body/#{$font-body-italic}.ttf\");\n  }\n\n  @font-face {\n    font-family: #{$font-body-bold-italic};\n    src: local(#{$font-body-bold-italic}),\n      url(\"https://#{$cdn}/font/#{$theme}/body/#{$font-body-bold-italic}.ttf\");\n  }\n\n  :root {\n    --font-heading-regular: #{$font-heading-regular};\n    --font-heading-bold: #{$font-heading-bold};\n    --font-heading-italic: #{$font-heading-italic};\n    --font-heading-bold-italic: #{$font-heading-bold-italic};\n\n    --font-body-regular: #{$font-body-regular};\n    --font-body-bold: #{$font-body-bold};\n    --font-body-italic: #{$font-body-italic};\n    --font-body-bold-italic: #{$font-body-bold-italic};\n  }\n}\n","@import \"./breakpoint\";\n\nh1 {\n  font-family: var(--font-heading-regular);\n  color: var(--gray-dark);\n  font-size: 2em;\n  line-height: 3rem;\n  margin-bottom: 20px;\n  margin-top: 0;\n}\n\nh2 {\n  font-family: var(--font-heading-regular);\n  color: var(--gray-dark);\n  font-size: 1.9em;\n  line-height: 2.9rem;\n  margin-bottom: 19px;\n  margin-top: 0;\n}\n\nh3 {\n  font-family: var(--font-heading-regular);\n  color: var(--gray-dark);\n  font-size: 1.8em;\n  line-height: 2.8rem;\n  margin-bottom: 18px;\n  margin-top: 0;\n}\n\nh4 {\n  font-family: var(--font-heading-regular);\n  color: var(--gray-dark);\n  font-size: 1.7em;\n  line-height: 2.7rem;\n  margin-bottom: 17px;\n  margin-top: 0;\n}\n\nh5 {\n  font-family: var(--font-heading-regular);\n  color: var(--gray-dark);\n  font-size: 1.6em;\n  line-height: 2.6rem;\n  margin-bottom: 16px;\n  margin-top: 0;\n}\n\nh6 {\n  font-family: var(--font-heading-regular);\n  color: var(--gray-dark);\n  font-size: 1.5em;\n  line-height: 2.5rem;\n  margin-bottom: 15px;\n  margin-top: 0;\n}\n\n@include sm {\n  h1 {\n    font-size: 2.1em;\n    line-height: 3.1rem;\n    margin-bottom: 21px;\n  }\n\n  h2 {\n    font-size: 2em;\n    line-height: 3rem;\n    margin-bottom: 20px;\n  }\n\n  h3 {\n    font-size: 1.9em;\n    line-height: 2.9rem;\n    margin-bottom: 19px;\n  }\n\n  h4 {\n    font-size: 1.8em;\n    line-height: 2.8rem;\n    margin-bottom: 18px;\n  }\n\n  h5 {\n    font-size: 1.7em;\n    line-height: 2.7rem;\n    margin-bottom: 17px;\n  }\n\n  h6 {\n    font-size: 1.6em;\n    line-height: 2.6rem;\n    margin-bottom: 16px;\n  }\n}\n\n@include md {\n  h2 {\n    font-size: 2.2em;\n    line-height: 3.2rem;\n    margin-bottom: 22px;\n  }\n\n  h2 {\n    font-size: 2.1em;\n    line-height: 3.1rem;\n    margin-bottom: 21px;\n  }\n\n  h3 {\n    font-size: 2em;\n    line-height: 3rem;\n    margin-bottom: 20px;\n  }\n\n  h4 {\n    font-size: 1.9em;\n    line-height: 2.9rem;\n    margin-bottom: 19px;\n  }\n\n  h5 {\n    font-size: 1.8em;\n    line-height: 2.8rem;\n    margin-bottom: 18px;\n  }\n\n  h6 {\n    font-size: 1.7em;\n    line-height: 2.7rem;\n    margin-bottom: 17px;\n  }\n}\n\n@include lg {\n  h1 {\n    font-size: 2.3em;\n    line-height: 3.3rem;\n    margin-bottom: 23px;\n  }\n\n  h2 {\n    font-size: 2.2em;\n    line-height: 3.2rem;\n    margin-bottom: 22px;\n  }\n\n  h3 {\n    font-size: 2.1em;\n    line-height: 3.1rem;\n    margin-bottom: 21px;\n  }\n\n  h4 {\n    font-size: 2em;\n    line-height: 3rem;\n    margin-bottom: 20px;\n  }\n\n  h5 {\n    font-size: 1.9em;\n    line-height: 2.9rem;\n    margin-bottom: 19px;\n  }\n\n  h6 {\n    font-size: 1.8em;\n    line-height: 2.8rem;\n    margin-bottom: 18px;\n  }\n}\n\n@include xl {\n  h1 {\n    font-size: 2.4em;\n    line-height: 3.4rem;\n    margin-bottom: 24px;\n  }\n\n  h2 {\n    font-size: 2.3em;\n    line-height: 3.3rem;\n    margin-bottom: 23px;\n  }\n\n  h3 {\n    font-size: 2.2em;\n    line-height: 3.2rem;\n    margin-bottom: 22px;\n  }\n\n  h4 {\n    font-size: 2.1em;\n    line-height: 3.1rem;\n    margin-bottom: 21px;\n  }\n\n  h5 {\n    font-size: 2em;\n    line-height: 3rem;\n    margin-bottom: 20px;\n  }\n\n  h6 {\n    font-size: 1.9em;\n    line-height: 2.9rem;\n    margin-bottom: 19px;\n  }\n}\n\n@include xxl {\n  h1 {\n    font-size: 2.5em;\n    line-height: 3.5rem;\n    margin-bottom: 25px;\n  }\n\n  h2 {\n    font-size: 2.4em;\n    line-height: 3.4rem;\n    margin-bottom: 24px;\n  }\n\n  h3 {\n    font-size: 2.3em;\n    line-height: 3.3rem;\n    margin-bottom: 23px;\n  }\n\n  h4 {\n    font-size: 2.2em;\n    line-height: 3.2rem;\n    margin-bottom: 22px;\n  }\n\n  h5 {\n    font-size: 2.1em;\n    line-height: 3.1rem;\n    margin-bottom: 21px;\n  }\n\n  h6 {\n    font-size: 2em;\n    line-height: 3rem;\n    margin-bottom: 20px;\n  }\n}\n\n@media (min-width: 2560px) {\n  h1 {\n    font-size: 5em;\n    line-height: 7rem;\n    margin-bottom: 50px;\n  }\n\n  h2 {\n    font-size: 4.8em;\n    line-height: 6.8rem;\n    margin-bottom: 48px;\n  }\n\n  h3 {\n    font-size: 4.6em;\n    line-height: 6.6rem;\n    margin-bottom: 46px;\n  }\n\n  h4 {\n    font-size: 4.4em;\n    line-height: 6.4rem;\n    margin-bottom: 44px;\n  }\n\n  h5 {\n    font-size: 4.2em;\n    line-height: 6.2rem;\n    margin-bottom: 42px;\n  }\n\n  h6 {\n    font-size: 4em;\n    line-height: 6rem;\n    margin-bottom: 40px;\n  }\n}\n","$breakpoint-sm: 576px;\n$breakpoint-brand-sm: 64px;\n\n@mixin sm {\n  @media (min-width: $breakpoint-sm) {\n    @content;\n  }\n}\n","$breakpoint-md: 768px;\n$breakpoint-brand-md: 128px;\n\n@mixin md {\n  @media (min-width: $breakpoint-md) {\n    @content;\n  }\n}\n","$breakpoint-lg: 992px;\n$breakpoint-brand-lg: 192px;\n\n@mixin lg {\n  @media (min-width: $breakpoint-lg) {\n    @content;\n  }\n}\n","$breakpoint-xl: 1200px;\n$breakpoint-brand-xl: 256px;\n\n@mixin xl {\n  @media (min-width: $breakpoint-xl) {\n    @content;\n  }\n}\n","$breakpoint-xxl: 1400px;\n$breakpoint-brand-xxl: 320px;\n\n@mixin xxl {\n  @media (min-width: $breakpoint-xxl) {\n    @content;\n  }\n}\n","@import \"./breakpoint\";\n\np {\n  font-family: var(--font-body-regular);\n  color: var(--gray-dark);\n  font-size: 1em;\n  line-height: 1.5rem;\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\nb {\n  font-family: var(--font-body-bold);\n  color: var(--gray-dark);\n  font-weight: normal;\n}\n\nstrong {\n  font-family: var(--font-body-bold);\n  color: var(--black);\n  font-weight: normal;\n}\n\ni {\n  font-family: var(--font-body-italic);\n  color: var(--gray-dark);\n  font-style: normal;\n}\n\nem {\n  font-family: var(--font-body-italic);\n  color: var(--black);\n  font-style: normal;\n}\n\nb i,\ni b,\nstrong i,\ni strong,\nb em,\nem b,\nstrong em,\nem strong {\n  font-family: var(--font-body-bold-italic);\n}\n\nu {\n  text-decoration: underline;\n}\n\ndel {\n  text-decoration: line-through;\n  color: var(--gray);\n}\n\nspan {\n  color: rgba(0, 161, 228, 1);\n}\n\nmark {\n  color: rgba(0, 0, 0, 1);\n  background-color: rgba(255, 212, 0, 1);\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n@include sm {\n  p {\n    font-size: 1.1em;\n    line-height: 1.7rem;\n    margin-bottom: 21px;\n  }\n}\n\n@include md {\n  p {\n    font-size: 1.2em;\n    line-height: 1.9rem;\n    margin-bottom: 22px;\n  }\n}\n\n@include lg {\n  p {\n    font-size: 1.3em;\n    line-height: 2.1rem;\n    margin-bottom: 23px;\n  }\n}\n\n@include xl {\n  p {\n    font-size: 1.4em;\n    line-height: 2.3rem;\n    margin-bottom: 24px;\n  }\n}\n\n@include xxl {\n  p {\n    font-size: 1.5em;\n    line-height: 2.5rem;\n    margin-bottom: 25px;\n  }\n}\n\n@media (min-width: 2560px) {\n  p {\n    font-size: 3em;\n    line-height: 5rem;\n    margin-bottom: 50px;\n    margin-top: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.4b5346f84b8a5dcf7fdd.hot-update.js.map