/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../img/1.png */ \"./src/img/1.png\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../img/2.png */ \"./src/img/2.png\"));\nvar ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../img/3.png */ \"./src/img/3.png\"));\nvar ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../img/4.png */ \"./src/img/4.png\"));\nvar ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../img/foto.png */ \"./src/img/foto.png\"));\nvar ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../img/foto_2.jpg */ \"./src/img/foto_2.jpg\"));\n\n// Module\nexports.push([module.i, \"body {\\n    width: 100%;\\n    margin: 0px;\\n}\\n\\np {\\n    color: gray;\\n}\\n\\n.main {\\n    width: 1440px;\\n    margin: auto;\\n    background-color: #999999;\\n}\\n\\n.head {\\n    width: 1440px;\\n    height: 726px;\\n    margin: auto;\\n    background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n}\\n\\n.nav-bar {\\n    display: flex;\\n    width: 1128px;\\n    height: 24px;\\n    padding-left: 150px;\\n    padding-top: 37px;\\n    color: #FFFFFF;\\n}\\n\\n.creative-team {\\n    min-width: 99px;\\n    max-width: 22px;\\n    margin-right: 820px;\\n    font-style: normal;\\n    font-weight: 300;\\n    font-size: 18px;\\n    line-height: 21px;\\n    color: #FFFFFF;\\n}\\n\\n.component {\\n    margin-right: 30px;\\n}\\n\\n.down {\\n    min-width: 150px;\\n}\\n\\n.social-networks {\\n    display: flex;\\n}\\n\\n.social-n-icon {\\n    margin-right: 24px;\\n}\\n\\n.fa-cloud-download-alt {\\n    margin-right: 5px;\\n}\\n\\n.header {\\n    width: 549px;\\n    height: 304px;\\n    margin-left: 149px;\\n    margin-top: 207px;\\n    color: #FFFFFF;\\n}\\n\\n.headline {\\n    width: 530px;\\n    height: 125px;\\n    font-style: normal;\\n    font-family: Roboto;\\n    font-weight: 500;\\n    font-size: 53.2px;\\n    line-height: 62px;\\n}\\n\\n.description {\\n    width: 549px;\\n    height: 72px;\\n    margin-top: 11px;\\n    font-size: 18.2px;\\n    line-height: 21px;\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n\\n\\n.video-button {\\n    width: 179px;\\n    height: 54px;\\n    margin-top: 42px;\\n    border: none;\\n    box-shadow: 0px 2px 2px rgba(244, 67, 54, 0.14);\\n    border-radius: 3px;\\n    background: #F44336;\\n    color: #F8F8FF;\\n}\\n\\n.video-button:hover {\\n    background: #dc3432;\\n}\\n\\n.video-button-arrow {\\n    width: 15px;\\n    height: 18px;\\n    font-size: 18px;\\n    line-height: 21px;\\n    font-style: normal;\\n    font-weight: normal;\\n}\\n\\n.info {\\n    width: 723px;\\n    height: 70px;\\n    margin-left: 331px;\\n    margin-top: 38px;\\n    font-weight: 300;\\n    font-size: 17.5px;\\n    font-family: Roboto;\\n    line-height: 21px;\\n    font-style: normal;\\n    text-align: center;\\n    color: #999999;\\n}\\n\\n\\n.content {\\n    width: 1380px;\\n    height: 2045px;\\n    margin: -50px auto auto;\\n    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.2);\\n    border-radius: 6px;\\n    background: #FFFFFF;\\n}\\n\\n.topic {\\n    width: 277px;\\n    height: 43px;\\n    padding-top: 95px;\\n    padding-left: 552px;\\n    font-size: 36.4px;\\n    line-height: 43px;\\n    font-family: Roboto;\\n    font-style: normal;\\n    font-weight: normal;\\n    color: #3C4858;\\n}\\n\\n.cards {\\n    display: flex;\\n    margin-top: 161px;\\n    margin-left: 138px;\\n}\\n\\n.card {\\n    width: 328px;\\n    height: 201px;\\n    margin-right: 62px;\\n}\\n\\n.img-card-one {\\n    width: 80px;\\n    height: 80px;\\n    margin-left: 125px;\\n    background-image: url(\" + ___CSS_LOADER_URL___1___ + \");\\n}\\n\\n\\n.img-card-two {\\n    width: 80px;\\n    height: 80px;\\n    margin-left: 125px;\\n    background-image: url(\" + ___CSS_LOADER_URL___2___ + \");\\n}\\n\\n.img-card-three {\\n    width: 80px;\\n    height: 80px;\\n    margin-left: 125px;\\n    background-image: url(\" + ___CSS_LOADER_URL___3___ + \");\\n}\\n\\n.head-card {\\n    height: 24px;\\n    margin-top: 31px;\\n    font-weight: 500;\\n    font-size: 20px;\\n    line-height: 23px;\\n    font-family: Roboto;\\n    font-style: normal;\\n    text-align: center;\\n    color: #3C4858;\\n}\\n\\n.text-card {\\n    width: 328px;\\n    height: 58px;\\n    margin-top: 18px;\\n    font-weight: 300;\\n    line-height: 16px;\\n    font-size: 14px;\\n    text-align: center;\\n    font-family: Roboto;\\n    font-style: normal;\\n    color: #999999;\\n}\\n\\n.team {\\n    width: 1133px;\\n    height: 541px;\\n    margin-left: 125px;\\n    margin-top: 150px;\\n}\\n\\n.head-team {\\n    width: 268px;\\n    height: 43px;\\n    margin-left: 430px;\\n    font-family: Roboto;\\n    font-size: 36.4px;\\n    line-height: 43px;\\n    font-style: normal;\\n    font-weight: normal;\\n    color: #3C4858;\\n}\\n\\n.card-team {\\n    width: 352px;\\n    height: 412px;\\n    margin-right: 38px;\\n}\\n\\n.avatar {\\n    width: 170px;\\n    height: 170px;\\n    margin: auto;\\n    border-radius: 100px;\\n    background: url(\" + ___CSS_LOADER_URL___4___ + \"), #C4C4C4;\\n    box-shadow: 0px 16px 30px rgba(0, 0, 0, 0.3), 0px 4px 10px rgba(0, 0, 0, 0.3);\\n}\\n\\n.avatar-two {\\n    width: 170px;\\n    height: 170px;\\n    margin: auto;\\n    border-radius: 100px;\\n    background: url(\" + ___CSS_LOADER_URL___5___ + \"), #C4C4C4;\\n    box-shadow: 0px 16px 30px rgba(0, 0, 0, 0.3), 0px 4px 10px rgba(0, 0, 0, 0.3);\\n}\\n\\n.avatar-three {\\n    width: 170px;\\n    height: 170px;\\n    margin: auto;\\n    border-radius: 100px;\\n    background: url(\" + ___CSS_LOADER_URL___4___ + \"), #C4C4C4;\\n    box-shadow: 0px 16px 30px rgba(0, 0, 0, 0.3), 0px 4px 10px rgba(0, 0, 0, 0.3);\\n}\\n\\n.name {\\n    width: 85px;\\n    height: 22px;\\n    margin: 32px auto auto;\\n    font-weight: 500;\\n    font-size: 18.2px;\\n    line-height: 21px;\\n    font-style: normal;\\n    font-family: Roboto;\\n    color: #3C4858;\\n}\\n\\n.name-two {\\n    width: 120px;\\n    height: 22px;\\n    margin: auto;\\n    margin-top: 32px;\\n    font-weight: 500;\\n    font-size: 18.2px;\\n    line-height: 21px;\\n    font-family: Roboto;\\n    font-style: normal;\\n}\\n\\n.name-three {\\n    width: 98px;\\n    height: 22px;\\n    margin: auto;\\n    margin-top: 32px;\\n    font-weight: 500;\\n    font-size: 18.2px;\\n    line-height: 21px;\\n    font-style: normal;\\n    font-family: Roboto;\\n    color: #3C4858;\\n}\\n\\n.profession {\\n    width: 39px;\\n    height: 16px;\\n    margin: auto;\\n    font-weight: 500;\\n    font-size: 13.65px;\\n    line-height: 16px;\\n    font-style: normal;\\n    font-family: Roboto;\\n    color: #777777;\\n}\\n\\n.profession-d {\\n    width: 55px;\\n    height: 16px;\\n    margin: auto;\\n    font-weight: 500;\\n    font-size: 13.65px;\\n    line-height: 16px;\\n    font-style: normal;\\n    font-family: Roboto;\\n    color: #777777;\\n}\\n\\n.biography {\\n    width: 352px;\\n    height: 123px;\\n    margin-top: 35px;\\n    font-weight: 300;\\n    font-size: 14px;\\n    line-height: 16px;\\n    text-align: center;\\n    font-style: normal;\\n    font-family: Roboto;\\n    color: #999999;\\n}\\n\\n.social-networks-team {\\n    display: flex;\\n    margin-top: 55px;\\n    margin-left: 135px;\\n}\\n\\n.social-networks-team-d {\\n    display: flex;\\n    margin-top: 55px;\\n    margin-left: 158px;\\n}\\n\\n.social-n-icon-team {\\n    margin-right: 24px;\\n}\\n\\n.team-wrapper {\\n    display: flex;\\n    margin-top: 86px;\\n}\\n\\n.work {\\n    width: 753px;\\n    height: 423px;\\n    margin: auto;\\n    margin-top: 85px;\\n}\\n\\n.head-work {\\n    width: 209px;\\n    height: 43px;\\n    padding-bottom: 10px;\\n    margin: auto;\\n    font-size: 36.4px;\\n    line-height: 43px;\\n    font-family: Roboto;\\n    font-style: normal;\\n    font-weight: normal;\\n    color: #3C4858;\\n}\\n\\n.social-networks-team {\\n    display: flex;\\n    margin-top: 15px;\\n    margin-left: 135px;\\n}\\n\\n.social-networks-team-d {\\n    display: flex;\\n    margin-top: 15px;\\n    margin-left: 158px;\\n}\\n\\n.info-work {\\n    width: 753px;\\n    height: 72px;\\n    margin-top: 38px;\\n    font-weight: 300;\\n    font-size: 18.2px;\\n    line-height: 21px;\\n    text-align: center;\\n    font-style: normal;\\n    font-family: Roboto;\\n    color: #999999;\\n}\\n\\n.prof-wrapper {\\n    display: flex;\\n    margin-top: 36px;\\n}\\n\\n\\n.head-prof-name {\\n    width: 50px;\\n    height: 12px;\\n    font-size: 10px;\\n    line-height: 12px;\\n    font-family: Roboto;\\n    font-style: normal;\\n    font-weight: normal;\\n    color: #9C27B0;\\n}\\n\\n.head-u-message {\\n    width: 68px;\\n    height: 12px;\\n    margin-left: 2px;\\n    font-size: 10px;\\n    line-height: 12px;\\n    font-family: Roboto;\\n    font-style: normal;\\n    font-weight: normal;\\n    color: #9C27B0;\\n}\\n\\n.prof-name {\\n    width: 361px;\\n    height: 25px;\\n    margin-right: 32px;\\n    border: 0px solid;\\n    border-bottom: 1px solid gray;\\n    font-family: Roboto;\\n    font-style: normal;\\n    font-weight: normal;\\n    color: #999999;\\n}\\n\\n.email {\\n    width: 361px;\\n    height: 25px;\\n    border: 0px solid;\\n    border-bottom: 1px solid gray;\\n    font-family: Roboto;\\n    font-style: normal;\\n    font-weight: normal;\\n    color: #999999;\\n}\\n\\n.u-message {\\n    width: 751px;\\n    height: 92px;\\n    border: 0px solid;\\n    padding-top: 0px;\\n    border-bottom: 1px solid gray;\\n}\\n\\n.message {\\n    margin-top: 38px;\\n}\\n\\n.button {\\n    width: 148px;\\n    height: 41px;\\n    border: none;\\n    margin-left: 301px;\\n    margin-top: 25px;\\n    background: #9C27B0;\\n    box-shadow: 0px 2px 2px rgba(156, 39, 176, 0.2);\\n    border-radius: 3px;\\n    color: #FFFFFF;\\n}\\n\\n.button:hover {\\n    background: #802594;\\n}\\n\\n.footer {\\n    display: flex;\\n    width: 1440px;\\n    height: 65px;\\n    margin: auto;\\n    background-color: #999999;\\n}\\n\\n.footer-wrapper {\\n    display: flex;\\n    width: 1122px;\\n    height: 17px;\\n    margin-top: 32px;\\n    margin-left: 165px;\\n}\\n\\n.creat-tim {\\n    width: 79px;\\n    height: 15px;\\n    margin-right: 33px;\\n    font-family: Roboto;\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 12px;\\n    line-height: 14px;\\n    text-align: center;\\n    color: #333333;\\n}\\n\\n.licenses {\\n    width: 55px;\\n    height: 15px;\\n    font-family: Roboto;\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 12px;\\n    line-height: 14px;\\n    text-align: center;\\n    color: #333333;\\n}\\n\\n.about-us {\\n    width: 57px;\\n    height: 15px;\\n    margin-right: 33px;\\n    font-weight: 500;\\n    font-size: 12px;\\n    line-height: 14px;\\n    font-family: Roboto;\\n    font-style: normal;\\n    text-align: center;\\n    color: #333333;\\n}\\n\\n.blog {\\n    width: 31px;\\n    height: 15px;\\n    margin-right: 33px;\\n    font-weight: 500;\\n    font-size: 12px;\\n    line-height: 14px;\\n    text-align: center;\\n    font-family: Roboto;\\n    font-style: normal;\\n    color: #333333;\\n}\\n\\n.lice {\\n    width: 228px;\\n    height: 17px;\\n    margin-left: 573px;\\n    font-family: Roboto;\\n    font-style: normal;\\n\\n    font-weight: normal;\\n    font-size: 14px;\\n    line-height: 11px;\\n    text-align: center;\\n    color: #000000;\\n}\\n\\na {\\n    text-decoration: none;\\n    color: #000000;\\n}\\n\\n.a-header {\\n    text-decoration: none;\\n    color: #FFFFFF;\\n}\\n\\n.a-header:hover {\\n    color: #F44336;\\n\\n}\\n\\n.a-content {\\n    color: #999999;\\n}\\n\\na:hover {\\n    color: #9C27B0;\\n\\n}\\n\\n@media only screen\\nand (min-device-width: 320px)\\nand (max-device-width: 480px)\\nand (-webkit-min-device-pixel-ratio: 2) {\\n\\n    html, body {\\n        overflow-x: hidden;\\n    }\\n\\n    .main {\\n        width: 375px;\\n    }\\n\\n    .head {\\n        width: 375px;\\n        height: 426px;\\n    }\\n\\n    .headline {\\n        width: 320px;\\n        height: 55px;\\n        margin: auto;\\n        font-weight: 100;\\n        font-size: 21.2px;\\n    }\\n\\n    .header {\\n        width: 375px;\\n        margin-left: 0px;\\n        margin-top: 107px;\\n    }\\n\\n    .nav-bar {\\n        display: flex;\\n        flex-direction: column;\\n        width: 375px;\\n        height: 24px;\\n        padding-left: 35px;\\n        padding-top: 19px;\\n    }\\n\\n    .creative-team {\\n        padding-bottom: 8px;\\n    }\\n\\n    .component {\\n        padding-bottom: 8px;\\n    }\\n\\n    .down {\\n        padding-bottom: 8px;\\n    }\\n\\n    .description {\\n        width: 330px;\\n        margin: 11px auto auto;\\n    }\\n\\n    .video-button {\\n        margin-left: 100px;\\n        margin-top: 48px;\\n    }\\n\\n\\n    .content {\\n        width: 375px;\\n        height: 3060px;\\n        margin: -60px auto auto;\\n    }\\n\\n    .topic {\\n        margin: auto;\\n        padding-left: 11px;\\n    }\\n\\n    .team-wrapper {\\n        display: flex;\\n        flex-direction: column;\\n        margin-top: 36px;\\n    }\\n\\n    .info {\\n        width: 360px;\\n        margin: auto;\\n    }\\n\\n    .cards {\\n        display: flex;\\n        flex-direction: column;\\n        margin-top: 161px;\\n        margin-left: 1px;\\n    }\\n\\n    .card {\\n        width: 328px;\\n        height: 201px;\\n        margin: auto;\\n        margin-bottom: 35px;\\n    }\\n\\n    .team {\\n        width: 375px;\\n        margin-left: 0px;\\n        margin-top: 18px;\\n    }\\n\\n    .head-team {\\n        margin: auto;\\n    }\\n\\n    .card-team {\\n        padding-top: 20px;\\n        margin: auto;\\n    }\\n\\n    .work {\\n        width: 375px;\\n        margin: auto;\\n        margin-top: 845px;\\n    }\\n\\n    .prof-wrapper {\\n        display: flex;\\n        flex-direction: column;\\n        margin-top: 55px;\\n    }\\n\\n    .info-work {\\n        width: 353px;\\n        margin: auto;\\n        padding-bottom: 10px;\\n    }\\n\\n    .profile {\\n        padding-top: 10px;\\n        padding-bottom: 20px;\\n    }\\n\\n    .head-prof-name {\\n        padding-left: 12px;\\n    }\\n\\n    .prof-name {\\n        padding-left: 12px;\\n    }\\n\\n    .head-prof-name {\\n        padding-left: 12px;\\n\\n    }\\n\\n    .email {\\n        padding-left: 12px;\\n    }\\n\\n    .u-message {\\n        width: 358px;\\n        padding-left: 12px;\\n    }\\n\\n    .head-u-message {\\n        padding-left: 12px;\\n        margin-left: 0px;\\n    }\\n\\n    .button {\\n        margin-left: 125px;\\n    }\\n\\n    .biography {\\n        margin-top: 15px;\\n    }\\n\\n    .footer {\\n        display: flex;\\n        width: 375px;\\n        height: 175px;\\n    }\\n\\n    .footer-wrapper {\\n        display: flex;\\n        flex-direction: column;\\n        margin: auto;\\n        margin-top: 32px;\\n    }\\n\\n    .lice {\\n        width: 375px;\\n        height: 17px;\\n        margin-left: 45px;\\n        margin-top: 15px;\\n        font-family: FontAwesome;\\n        font-size: 15px;\\n    }\\n\\n    .creat-tim {\\n        margin-left: 35px;\\n        margin-bottom: 10px;\\n    }\\n\\n    .licenses {\\n        margin-left: 35px;\\n        margin-bottom: 10px;\\n    }\\n\\n    .about-us {\\n        margin-left: 35px;\\n        margin-bottom: 10px;\\n\\n    }\\n\\n    .blog {\\n        margin-left: 35px;\\n        margin-bottom: 10px;\\n    }\\n}\\n\\n@media only screen\\nand (min-device-width: 480px)\\nand (max-device-width: 1024px)\\nand (-webkit-min-device-pixel-ratio: 1) {\\n\\n    html, body {\\n        overflow-x: hidden;\\n        background-color: #999999;\\n    }\\n\\n    .head {\\n        width: 768px;\\n        height: 597px;\\n    }\\n\\n    .main {\\n        width: 768px;\\n    }\\n\\n    .nav-bar {\\n        width: 768px;\\n        height: 67px;\\n        padding-left: 24px;\\n        background: rgba(0, 0, 0, 0.4);\\n    }\\n\\n    .creative-team {\\n        margin-right: 245px;\\n    }\\n\\n    .header {\\n        width: 716px;\\n        height: 302px;\\n        margin-left: 24px;\\n        margin-top: 107px;\\n    }\\n\\n    .content {\\n        width: 748px;\\n        height: 3192px;\\n        margin: -50px auto auto;\\n    }\\n\\n    .topic {\\n        padding-left: 236px;\\n    }\\n\\n    .info {\\n        margin-left: 13px;\\n    }\\n\\n    .cards {\\n        display: flex;\\n        flex-direction: column;\\n        margin-top: 161px;\\n        margin-left: 1px;\\n    }\\n\\n    .card {\\n        width: 328px;\\n        height: 201px;\\n        margin: auto;\\n        margin-bottom: 35px;\\n    }\\n\\n    .head-team {\\n        margin: auto;\\n        margin-left: 241px;\\n    }\\n\\n    .team {\\n        width: 713px;\\n        height: 1100px;\\n        margin-left: 0px;\\n        margin-top: 108px;\\n    }\\n\\n    .team-wrapper {\\n        display: flex;\\n        flex-direction: column;\\n        margin-top: 36px;\\n    }\\n\\n    .card-team {\\n        width: 713px;\\n        height: 370px;\\n        margin-right: 19px;\\n    }\\n\\n    .biography {\\n        width: 713px;\\n        height: 81px;\\n        padding-left: 19px;\\n        margin-top: 15px;\\n    }\\n\\n    .social-networks-team {\\n        margin-left: 295px;\\n    }\\n\\n    .social-networks-team-d {\\n        margin-left: 314px;\\n    }\\n\\n    .work {\\n        width: 716px;\\n        height: 500px;\\n        margin-top: 192px;\\n    }\\n\\n    .info-work {\\n        width: 709px;\\n    }\\n\\n    .prof-wrapper {\\n        display: flex;\\n        flex-direction: column;\\n        margin-top: 55px;\\n    }\\n\\n    .u-message {\\n        width: 716px;\\n    }\\n\\n    .email {\\n        width: 716px;\\n        height: 38px;\\n    }\\n\\n    .prof-name {\\n        width: 716px;\\n        height: 38px;\\n    }\\n\\n    .profile {\\n        padding-bottom: 40px;\\n    }\\n\\n    .message {\\n        margin-top: 0px;\\n    }\\n\\n    .footer {\\n        display: flex;\\n        height: 117px;\\n    }\\n\\n    .footer-wrapper {\\n        display: flex;\\n        width: 559px;\\n        height: 62px;\\n        margin-top: 32px;\\n        margin-left: 39px;\\n    }\\n\\n    .lice {\\n        width: 228px;\\n        height: 17px;\\n        margin-left: 1px;\\n        margin-top: 45px;\\n    }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/img/1.png":
/*!***********************!*\
  !*** ./src/img/1.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4cf2bcf0cbf13ad5eb0d720502f34df1.png\";\n\n//# sourceURL=webpack:///./src/img/1.png?");

/***/ }),

/***/ "./src/img/2.png":
/*!***********************!*\
  !*** ./src/img/2.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"45dfbff96418191b2f51aafad4c124b8.png\";\n\n//# sourceURL=webpack:///./src/img/2.png?");

/***/ }),

/***/ "./src/img/3.png":
/*!***********************!*\
  !*** ./src/img/3.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"70effc5421504b1d01b9978648874f67.png\";\n\n//# sourceURL=webpack:///./src/img/3.png?");

/***/ }),

/***/ "./src/img/4.png":
/*!***********************!*\
  !*** ./src/img/4.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"48ddb4db23fad2bfc80db795763afe92.png\";\n\n//# sourceURL=webpack:///./src/img/4.png?");

/***/ }),

/***/ "./src/img/foto.png":
/*!**************************!*\
  !*** ./src/img/foto.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"07f57bbefa7fc8f351bfef1331d94e9b.png\";\n\n//# sourceURL=webpack:///./src/img/foto.png?");

/***/ }),

/***/ "./src/img/foto_2.jpg":
/*!****************************!*\
  !*** ./src/img/foto_2.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"615fe0ad25acdccbb88778270beb8357.jpg\";\n\n//# sourceURL=webpack:///./src/img/foto_2.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });