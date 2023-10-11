/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App/App.js":
/*!************************!*\
  !*** ./src/App/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.module.scss */ "./src/App/App.module.scss");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/HomePage/HomePage */ "./src/pages/HomePage/HomePage.js");
/* harmony import */ var _pages_AboutPage_AboutPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/AboutPage/AboutPage */ "./src/pages/AboutPage/AboutPage.js");
/* harmony import */ var _pages_ProjectPage_ProjectPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/ProjectPage/ProjectPage */ "./src/pages/ProjectPage/ProjectPage.js");
/* harmony import */ var _pages_ServicesPage_ServicesPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/ServicesPage/ServicesPage */ "./src/pages/ServicesPage/ServicesPage.js");








const App = () => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useLocation)();
  const [isTransitioning, setIsTransitioning] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Handle route changes and set the transitioning state.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsTransitioning(true);
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Adjust the timeout duration to match your CSS transition duration.

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [location]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "app-container".concat(isTransitioning ? '-exit' : '-enter')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/about",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_AboutPage_AboutPage__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/projects",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ProjectPage_ProjectPage__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/services",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ServicesPage_ServicesPage__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/About/About.js":
/*!***************************************!*\
  !*** ./src/components/About/About.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _About_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.module.scss */ "./src/components/About/About.module.scss");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data */ "./src/data.js");
// About.js



const About = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: _About_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].intro
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _About_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, _data__WEBPACK_IMPORTED_MODULE_2__.aboutMe.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _About_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tag
  }, _data__WEBPACK_IMPORTED_MODULE_2__.aboutMe.tag), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _About_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bio
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, _data__WEBPACK_IMPORTED_MODULE_2__.aboutMe.bio.split('\n').map((paragraph, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: index,
    className: _About_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bioBulletPoint
  }, paragraph)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/components/Carousel/Carousel.js":
/*!*********************************************!*\
  !*** ./src/components/Carousel/Carousel.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/data.js");
/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.module.scss */ "./src/components/Carousel/Carousel.module.scss");



const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Function to cycle through images automatically
    const nextImage = () => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % _data__WEBPACK_IMPORTED_MODULE_1__.images.length);
    };
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval); // Cleanup to prevent memory leaks
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].carousel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].carouselImage,
    src: "/img/".concat(_data__WEBPACK_IMPORTED_MODULE_1__.images[currentImageIndex]),
    alt: "Image ".concat(currentImageIndex + 1)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);

/***/ }),

/***/ "./src/components/Contact/ContactModalForm.js":
/*!****************************************************!*\
  !*** ./src/components/Contact/ContactModalForm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ContactModalForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactModalForm.module.scss */ "./src/components/Contact/ContactModalForm.module.scss");
/* harmony import */ var _utilities_send_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/send-email */ "./src/utilities/send-email.js");
/* harmony import */ var _utilities_send_email__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utilities_send_email__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



function ContactForm() {
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // State for the modal

  const handleChange = e => {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [e.target.name]: e.target.value
    }));
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const sendEmail = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      try {
        // Make a POST request using your custom utility
        const response = yield _utilities_send_email__WEBPACK_IMPORTED_MODULE_2___default().post('/contact', formData);
        if (response.status === 'success') {
          console.log('Email sent:', response.data);
          // You can close the modal or display a success message here
          closeModal(); // Close the modal after sending the email
        } else {
          console.error('Error sending email:', response.error);
          // Handle and display an error message here
        }
      } catch (error) {
        console.error('Error sending email:', error);
        // Handle and display an error message here
      }
    });
    return function sendEmail() {
      return _ref.apply(this, arguments);
    };
  }();
  const handleSubmit = e => {
    e.preventDefault(); // Prevent the default form submission behavior
    sendEmail(); // Call your sendEmail function to handle the submission
  };

  const stopPropagation = e => {
    e.stopPropagation();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: openModal
  }, "Contact Me"), isModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ContactModalForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalOverlay,
    onClick: closeModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ContactModalForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modal,
    onClick: stopPropagation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ContactModalForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ContactModalForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalBody
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ContactModalForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "user_name"
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    name: "user_name",
    id: "user_name",
    value: formData.user_name,
    onChange: handleChange,
    onClick: stopPropagation
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ContactModalForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "user_email"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    name: "user_email",
    id: "user_email",
    value: formData.user_email,
    onChange: handleChange,
    onClick: stopPropagation
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ContactModalForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "message"
  }, "Message:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    name: "message",
    id: "message",
    value: formData.message,
    onChange: handleChange,
    onClick: stopPropagation
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    onClick: stopPropagation
  }, "Send")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ }),

/***/ "./src/components/Education/Education.js":
/*!***********************************************!*\
  !*** ./src/components/Education/Education.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/data.js");
/* harmony import */ var _Education_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Education.module.scss */ "./src/components/Education/Education.module.scss");
// Education.js



const Education = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Education_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].eduContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Education"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: _Education_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].eduList
  }, _data__WEBPACK_IMPORTED_MODULE_1__.educationData.map((entry, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: index,
    className: _Education_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].eduListItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Education_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].eduItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "/img/".concat(entry.image),
    alt: entry.university,
    className: _Education_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].edImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, entry.degree), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _Education_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].certification
  }, entry.certification), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _Education_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].university
  }, entry.university), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _Education_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].gradYear
  }, entry.graduationYear), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: _Education_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].achievements
  }, entry.achievements.map((achievement, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: i
  }, achievement)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/img/resume.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Education_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].resumeLink
  }, "Resume"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Education);

/***/ }),

/***/ "./src/components/Experience/Experience.js":
/*!*************************************************!*\
  !*** ./src/components/Experience/Experience.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/data.js");
/* harmony import */ var _Experience_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Experience.module.scss */ "./src/components/Experience/Experience.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");




const Experience = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Experience_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].experienceContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: _Experience_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].workTitle
  }, "Work Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Experience_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].experienceList
  }, _data__WEBPACK_IMPORTED_MODULE_1__.experienceData.map((entry, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: index,
    className: _Experience_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].experienceItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: _Experience_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].expTitle
  }, entry.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _Experience_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].company
  }, entry.company), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _Experience_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].dates
  }, entry.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: _Experience_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].expBulletList
  }, entry.description.map((point, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: i
  }, point))), entry.projects && entry.projects.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Experience_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].expLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/projects",
    className: _Experience_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].expLink
  }, "View Projects")), entry.salonWebsite && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Experience_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].salonLinkContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: 'https://www.evokesalonquincy.com' // put link here
    ,
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Experience_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].salonLink
  }, "Visit Salon Website"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.scss */ "./src/components/Footer/Footer.module.scss");


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showEmail, setShowEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const emailAddress = 'boeingjamie@gmail.com';
  const handleMouseEnter = () => {
    setShowEmail(true);
  };
  const handleMouseLeave = () => {
    setShowEmail(false);
  };
  const handleCopyEmail = () => {
    const textArea = document.createElement('textarea');
    textArea.value = emailAddress;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Email address copied to clipboard.');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].footer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contactInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, "\xA9 ", currentYear, " Jamie Boeing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].emailContainer
  }, showEmail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].email,
    onClick: handleCopyEmail
  }, emailAddress)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].linked
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.linkedin.com/in/jamie-boeing-b59342272/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "/img/linked-in-icon.png",
    alt: "Linked-in"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/JamieBoeing",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "/img/github-icon.png",
    alt: "Github"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");



const NavBar = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navBarLinks
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/about"
  }, "About Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/projects"
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/services"
  }, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/img/resume.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].resumeLink
  }, "Resume")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/data.js");
/* harmony import */ var _Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.module.scss */ "./src/components/Projects/Projects.module.scss");



const Projects = () => {
  const [expandedProjectId, setExpandedProjectId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handleExpand = projectId => {
    if (expandedProjectId === projectId) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(projectId);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container
  }, _data__WEBPACK_IMPORTED_MODULE_1__.projects.map(project => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: project.id,
    className: "".concat(_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].item, " ").concat(expandedProjectId === project.id ? _Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].expanded : ''),
    onClick: () => handleExpand(project.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].projectTitle
  }, project.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: project.imageUrl,
    alt: project.title,
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].projectImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].projectDetails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].projectDescription
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Description:"), typeof project.description === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, project.description.split('\n').map((line, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: index
  }, line))) : project.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].technologies
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Technologies:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, project.technologies.map((tech, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: index
  }, tech))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].links
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: project.githubLink,
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].button
  }, "GitHub"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: project.liveDemoLink,
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].button
  }, "Live Demo")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

/***/ }),

/***/ "./src/components/Services/Services.js":
/*!*********************************************!*\
  !*** ./src/components/Services/Services.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/data.js");
/* harmony import */ var _Services_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.module.scss */ "./src/components/Services/Services.module.scss");



const Services = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    id: "services"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Available Services"), _data__WEBPACK_IMPORTED_MODULE_1__.servicesData.map((serviceItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Services_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].services,
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, serviceItem.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, serviceItem.service))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

/***/ }),

/***/ "./src/components/Skills/Skills.js":
/*!*****************************************!*\
  !*** ./src/components/Skills/Skills.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/data.js");
/* harmony import */ var _Skills_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Skills.module.scss */ "./src/components/Skills/Skills.module.scss");



const Skills = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Skills_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].skillsContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Skills"), _data__WEBPACK_IMPORTED_MODULE_1__.skills.map((category, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Skills_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].category,
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, category.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: _Skills_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].list
  }, category.skills.map((skill, skillIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: _Skills_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].skill,
    key: skillIndex
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "/img/".concat(skill.image),
    alt: skill.name,
    className: _Skills_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].skillImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: skill.name
  }, skill.name)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

/***/ }),

/***/ "./src/components/WordCloud/WordCloud.js":
/*!***********************************************!*\
  !*** ./src/components/WordCloud/WordCloud.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_wordcloud2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-wordcloud2 */ "./node_modules/react-wordcloud2/lib/react-wordcloud2.es.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data */ "./src/data.js");
/* harmony import */ var _WordCloud_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WordCloud.module.scss */ "./src/components/WordCloud/WordCloud.module.scss");




const MyWordCloud = () => {
  const colors = [_WordCloud_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['col-1'], _WordCloud_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['col-2'], _WordCloud_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['col-3'], _WordCloud_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['col-4'], _WordCloud_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['col-5']];
  const options = {
    rotations: 2,
    rotationAngles: [0, 90],
    fontSizes: [20, 60] // Define your desired font size range
  };

  const assignRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
  const wordColors = words.map(word => ({
    text: word.text,
    size: word.size,
    color: assignRandomColor()
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_wordcloud2__WEBPACK_IMPORTED_MODULE_1__["default"], {
    wordData: _data__WEBPACK_IMPORTED_MODULE_2__.wordData,
    options: options
  }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (MyWordCloud);

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutMe: () => (/* binding */ aboutMe),
/* harmony export */   educationData: () => (/* binding */ educationData),
/* harmony export */   experienceData: () => (/* binding */ experienceData),
/* harmony export */   images: () => (/* binding */ images),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   servicesData: () => (/* binding */ servicesData),
/* harmony export */   skills: () => (/* binding */ skills),
/* harmony export */   wordData: () => (/* binding */ wordData)
/* harmony export */ });
const projects = [{
  id: 1,
  title: 'Recipes API',
  description: 'Developed a Node.js application that serves as a recipe API server.\nThis RESTful API provides a collection of recipes with details such as ingredients, instructions, and cooking times.\nUtilizing Express.js, the server handles HTTP requests for retrieving, creating, updating, and deleting recipes.\nThe data is stored in a JSON file and can be easily extended to include additional features like user authentication and search functionality.',
  technologies: ['React', 'Node.js', 'MongoDB'],
  githubLink: 'https://github.com/JamieBoeing/unit_2_project',
  liveDemoLink: 'https://yourproject1demo.com',
  imageUrl: 'img/recipe.svg' // Replace with the actual Imgur URL
}, {
  id: 2,
  title: 'Art Supplies',
  description: 'Designed and developed a comprehensive e-commerce platform for an art supplies store, showcasing a range of art materials and tools.\nLeveraging the MERN (MongoDB, Express.js, React, Node.js) stack, the project offers a seamless user experience from browsing products to making purchases.',
  technologies: ['React', 'Express', 'Node.js', 'MongoDB', 'Digital Ocean'],
  githubLink: 'https://github.com/JamieBoeing/art-supplies',
  liveDemoLink: 'https://art-supplies.jamieboeing.me/orders',
  imageUrl: 'img/art.svg' // Replace with the actual Imgur URL
}, {
  id: 3,
  title: 'Bazaar',
  description: 'A group completed, full MERN stack site, offering a user the ability to login, logout, sign up to be a seller and start entering their own items to add.\nThis artistic website features multi functions utilizing React and Node.js.',
  technologies: ['React', 'Express', 'MongoDB', 'Digital Ocean'],
  githubLink: 'https://github.com/joe-bor/Etsy_Capstone',
  liveDemoLink: 'https://bazaar.hlysllrs.me/home',
  imageUrl: 'img/bazaar.svg' // Replace with the actual Imgur URL
}
// Add more project objects here...
];

// Express, VS Code, Github, OpenAI API, Gulp, WebPack, Nginx, PM2, Bootstrap, Jest, Supertest, JsonWebToken, Certbot

const skills = [{
  category: 'Front-end Development &  Programming Languages',
  skills: [{
    name: 'JavaScript',
    image: 'javascript-icon.png' // Image filename for JavaScript
  }, {
    name: 'Python',
    image: 'python-icon.png' // Image filename for Python
  }, {
    name: 'PHP',
    image: 'php-icon.png' // Image filename for Python
  }, {
    name: 'React',
    image: 'react-icon.png' // Image filename for React
  }, {
    name: 'HTML',
    image: 'html-icon.png' // Image filename for HTML
  }, {
    name: 'CSS',
    image: 'css-icon.png' // Image filename for CSS
  }]
}, {
  category: 'Design Tools',
  skills: [{
    name: 'Adobe Photoshop',
    image: 'photoshop-logo.png'
  }, {
    name: 'Adobe Illustrator',
    image: 'ai-icon.png'
  }, {
    name: 'Node.js',
    image: 'node-icon.png'
  }]
}, {
  category: 'Databases',
  skills: [{
    name: 'MongoDB',
    image: 'mongoDb-icon.png' // Image filename for React
  }, {
    name: 'Digital Ocean',
    image: 'digital-icon.png' // Image filename for HTML
  }]
}
// Add more categories and skills as needed...
];

const aboutMe = {
  name: 'Jamie Boeing',
  title: 'Full-Stack Web Developer',
  tag: 'As an accomplished and versatile professional with over a decade of experience, I bring a unique blend of skills to Software Engineering, and Graphic Design.',
  bio: 'Full-Stack Web Developer, Graphic Designer, and Artist, fueled by a passion for collaboration.\nBacked by a foundation in customer service and management, I offer valuable business expertise.\nEnthusiastic about personal growth, community engagement, travel, and meaningful connections.\nExcited to integrate into the Web Developer community, contributing diverse skills to exciting opportunities.'
};
const experienceData = [{
  id: 1,
  title: 'Software Engineering Student',
  company: 'General Assembly',
  location: 'Remote',
  date: 'Sept 2023',
  projects: [{
    name: 'Personal Portfolio',
    link: 'GitHub Repository'
  }, {
    name: 'Group Bazaar Project',
    link: 'Express React Node.js [GitHub Repository]'
  }, {
    name: 'Art Supplies Store',
    link: 'Express React Node.js [GitHub Repository] [LiveLink Deployment]'
  }, {
    name: 'Recipes API',
    link: 'GitHub Repository'
  }, {
    name: 'Quiz Biz - A simple trivia game',
    link: 'VS Code [GitHub Repository]'
  }],
  description: ['Successfully completed 500+ hours of expert-led instruction in Full Stack Web and Software Development.', 'Completed hands-on learning of the fundamentals and the industry\'s most in-demand technologies.', 'Developed projects, including:']
}, {
  id: 2,
  title: 'Graphic Designer-Artist',
  company: 'Freelance',
  location: 'Remote',
  date: '2016–Current',
  description: ['Personalized branding, logo design, and web design.', 'Prepared files for specialty printing and file conversions.', 'Lead Customer Service and Consultations.', 'Utilized Adobe Photoshop, Adobe Illustrator, & Adobe InDesign.', 'Worked with all types of machines and software for printing and embroidery.']
}, {
  id: 3,
  title: 'Salon Owner/Operator | Cosmetologist',
  company: 'Evoke Salon',
  date: '2010–Current',
  description: ['Managed daily operations and task assignment.', 'Created original & interesting Interior design for multiple levels and layouts in the business.', 'Designed custom logos and overall brand design, and print work.', 'Handled Marketing, Advertising & Communications.', 'Helped facilitate and implement customer satisfaction and human resources.', 'Created Business operation documentation and implementation with Adobe suites.', 'Maintained a retail website and handled all social media accounts.', 'Continued Education, diversity, sexual harassment, & domestic violence training.']
}
// Add more experience entries...
];

const educationData = [{
  id: 1,
  image: 'degree.png',
  degree: 'Associates in Computer Aided Design',
  certification: 'Web Certification',
  university: 'John Wood Community College',
  graduationYear: 2016,
  achievements: ['Academic Sorority', "Dean's list student"]
}, {
  id: 2,
  image: 'degree.png',
  degree: 'Web Development Bootcamp',
  university: 'General Assembly',
  graduationYear: 2023,
  achievements: ['Deployed and working current projects', 'Successfully completed 500+ hours of expert-led instruction in Full Stack Web and Software Development', "Completed hands-on learning of the fundamentals and the industry's most in-demand technologies."]
}
// Add more education entries...
];

const wordData = [{
  words: ['Full-Stack Developer', 'Web Development', 'JavaScript', 'React', 'Node.js', 'Express.js', 'HTML', 'CSS', 'MongoDB', 'Responsive Design', 'Git', 'RESTful API', 'UI/UX Design', 'Problem Solving', 'Agile', 'Scrum', 'Team Collaboration', 'Front-end', 'Back-end', 'Database', 'Creative', 'Adaptable', 'Innovative', 'Detail-Oriented', 'Problem Solver', 'Collaborative', 'Communicative', 'Organized', 'Curious', 'Motivated', 'Resourceful', 'Analytical', 'Patient', 'Empathetic', 'Positive', 'Team Player', 'Leadership', 'Self-Motivated', 'Open-Minded', 'Resilient']
}];
const servicesData = [{
  category: 'Web Development',
  service: 'Front-End Web Development'
}, {
  category: 'Web Development',
  service: 'Back-End Web Development'
}
// Add more services...
];

const images = ['image1.jpeg', 'image2.jpeg', 'portrait.png', 'image3.jpeg', 'image4.jpeg', 'image5.jpeg', 'profileImage.jpg'];


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _App_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/App */ "./src/App/App.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_App_App__WEBPACK_IMPORTED_MODULE_0__["default"], null))), document.getElementById('app'));

//Entry point for react app

/***/ }),

/***/ "./src/pages/AboutPage/AboutPage.js":
/*!******************************************!*\
  !*** ./src/pages/AboutPage/AboutPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/About/About */ "./src/components/About/About.js");
/* harmony import */ var _components_Experience_Experience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Experience/Experience */ "./src/components/Experience/Experience.js");
/* harmony import */ var _components_Skills_Skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Skills/Skills */ "./src/components/Skills/Skills.js");
/* harmony import */ var _components_Education_Education__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Education/Education */ "./src/components/Education/Education.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AboutPage.module.scss */ "./src/pages/AboutPage/AboutPage.module.scss");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data */ "./src/data.js");









const AboutPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "About Me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].contentWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].leftColumn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].about
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_About_About__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].experience
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Experience_Experience__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].rightColumn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].portraitImg,
    src: "/img/portrait.png",
    alt: "portrait"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].education
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Education_Education__WEBPACK_IMPORTED_MODULE_4__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].skills
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Skills_Skills__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ }),

/***/ "./src/pages/HomePage/HomePage.js":
/*!****************************************!*\
  !*** ./src/pages/HomePage/HomePage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_WordCloud_WordCloud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/WordCloud/WordCloud */ "./src/components/WordCloud/WordCloud.js");
/* harmony import */ var _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage.module.scss */ "./src/pages/HomePage/HomePage.module.scss");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Carousel/Carousel */ "./src/components/Carousel/Carousel.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data */ "./src/data.js");






const HomePage = () => {
  const [typingText, setTypingText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const fullText = _data__WEBPACK_IMPORTED_MODULE_5__.aboutMe.tag;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let charIndex = 0;
    let typingTimer;
    function typeText() {
      if (charIndex < fullText.length) {
        setTypingText(fullText.substring(0, charIndex + 1));
        charIndex++;
        typingTimer = setTimeout(typeText, 100); // Adjust the typing speed here
      }
    }

    typeText();
    return () => {
      clearTimeout(typingTimer);
    };
  }, [fullText]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].titleCenter
  }, "Welcome to Jamie Boeing's Portfolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].titleSub
  }, "A showcase of my web development and design journey.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].contentWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].tag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: typingText
  }, typingText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].imageCarousel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: _data__WEBPACK_IMPORTED_MODULE_5__.images
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./src/pages/ProjectPage/ProjectPage.js":
/*!**********************************************!*\
  !*** ./src/pages/ProjectPage/ProjectPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ProjectPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectPage.module.scss */ "./src/pages/ProjectPage/ProjectPage.module.scss");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./src/components/Footer/Footer.js");




const ProjectPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProjectPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].projectContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "A Showcase of My Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectPage);

/***/ }),

/***/ "./src/pages/ServicesPage/ServicesPage.js":
/*!************************************************!*\
  !*** ./src/pages/ServicesPage/ServicesPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Services_Services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Services/Services */ "./src/components/Services/Services.js");
/* harmony import */ var _components_Contact_ContactModalForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Contact/ContactModalForm */ "./src/components/Contact/ContactModalForm.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _ServicesPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServicesPage.module.scss */ "./src/pages/ServicesPage/ServicesPage.module.scss");






const ServicesPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ServicesPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "My Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Services_Services__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Contact_ContactModalForm__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesPage);

/***/ }),

/***/ "./src/utilities/send-email.js":
/*!*************************************!*\
  !*** ./src/utilities/send-email.js ***!
  \*************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const BASE_URL = '/api/contact';
const api = {
  get: function () {
    var _get = _asyncToGenerator(function* (url) {
      try {
        const response = yield fetch("".concat(BASE_URL).concat(url));
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    });
    function get(_x) {
      return _get.apply(this, arguments);
    }
    return get;
  }(),
  post: function () {
    var _post = _asyncToGenerator(function* (url, data) {
      try {
        const response = yield fetch("".concat(BASE_URL).concat(url), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    });
    function post(_x2, _x3) {
      return _post.apply(this, arguments);
    }
    return post;
  }()

  // Add other HTTP methods as needed (e.g., put, delete, etc.)
};

module.exports = api;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App/App.module.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App/App.module.scss ***!
  \************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ltey90hcBSZ6CZKGFD2n {
  height: 100%;
}`, "",{"version":3,"sources":["webpack://./src/App/App.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ","sourcesContent":[".App {\n    height: 100%;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"App": `ltey90hcBSZ6CZKGFD2n`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/About/About.module.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/About/About.module.scss ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* About.module.scss */
.pyRgnPakkZDPVpT1PNzu {
  background-color: #1f1c30; /* Dark background color */
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.zzkxuQz1UyKxuNaaCigI {
  font-size: 47px;
  margin-bottom: 10px;
  color: aquamarine;
}

.CAh7kmOYU3KaRvw1H0b5 {
  font-size: 32px;
  margin-bottom: 20px;
}

.ZhRKoFes24SkYgC2RlHp {
  font-size: 25px;
}

.txhFcFuRgJtiRy4NFblA {
  font-size: 20px;
  list-style: disc; /* Use bullets as list-style */
  margin-bottom: 10px;
}`, "",{"version":3,"sources":["webpack://./src/components/About/About.module.scss"],"names":[],"mappings":"AAAA,sBAAA;AAEA;EACI,yBAAA,EAAA,0BAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;AAAJ;;AAGE;EACE,eAAA;EACA,mBAAA;EACA,iBAAA;AAAJ;;AAGE;EACE,eAAA;EACA,mBAAA;AAAJ;;AAGE;EACE,eAAA;AAAJ;;AAEE;EACE,eAAA;EACA,gBAAA,EAAA,8BAAA;EACA,mBAAA;AACJ","sourcesContent":["/* About.module.scss */\n\n.intro {\n    background-color: #1f1c30; /* Dark background color */\n    padding: 20px;\n    border-radius: 10px;\n    color: white;\n  }\n  \n  .title {\n    font-size: 47px;\n    margin-bottom: 10px;\n    color: aquamarine;\n  }\n  \n  .tag {\n    font-size: 32px;\n    margin-bottom: 20px;\n  }\n  \n  .bio {\n    font-size: 25px;\n  }\n  .bioBulletPoint {\n    font-size: 20px;\n    list-style: disc; /* Use bullets as list-style */\n    margin-bottom: 10px;\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"intro": `pyRgnPakkZDPVpT1PNzu`,
	"title": `zzkxuQz1UyKxuNaaCigI`,
	"tag": `CAh7kmOYU3KaRvw1H0b5`,
	"bio": `ZhRKoFes24SkYgC2RlHp`,
	"bioBulletPoint": `txhFcFuRgJtiRy4NFblA`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Carousel/Carousel.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Carousel/Carousel.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Carousel.module.scss */
.gpetVLQZHYUp_GY0Hsng {
  width: 100%; /* Make the container full-width */
  height: auto;
  margin: 0 auto; /* Center the container horizontally */
  text-align: center; /* Center the contents within the container */
  padding: 20px; /* Add some spacing if desired */
  background-color: transparent; /* Remove background color */
}

.us6xXbnTOqgJpV586KPQ {
  width: 350px; /* Adjust the width to the desired size */
  height: auto; /* Maintain the aspect ratio */
  border-radius: 6px;
  border: solid #161417 0.175rem;
  background-color: #60b4c4;
  padding: 4px;
  margin: 2px;
}`, "",{"version":3,"sources":["webpack://./src/components/Carousel/Carousel.module.scss"],"names":[],"mappings":"AAAA,yBAAA;AAEA;EACI,WAAA,EAAA,kCAAA;EACA,YAAA;EACA,cAAA,EAAA,sCAAA;EACA,kBAAA,EAAA,6CAAA;EACA,aAAA,EAAA,gCAAA;EACA,6BAAA,EAAA,4BAAA;AAAJ;;AAGE;EACE,YAAA,EAAA,yCAAA;EACA,YAAA,EAAA,8BAAA;EACA,kBAAA;EACA,8BAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;AAAJ","sourcesContent":["/* Carousel.module.scss */\n\n.carousel {\n    width: 100%; /* Make the container full-width */\n    height: auto;\n    margin: 0 auto; /* Center the container horizontally */\n    text-align: center; /* Center the contents within the container */\n    padding: 20px; /* Add some spacing if desired */\n    background-color: transparent; /* Remove background color */\n  }\n  \n  .carouselImage {\n    width: 350px; /* Adjust the width to the desired size */\n    height: auto; /* Maintain the aspect ratio */\n    border-radius: 6px;\n    border: solid #161417 .175rem;\n    background-color: #60b4c4;\n    padding: 4px;\n    margin: 2px;\n  }\n  \n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"carousel": `gpetVLQZHYUp_GY0Hsng`,
	"carouselImage": `us6xXbnTOqgJpV586KPQ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Contact/ContactModalForm.module.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Contact/ContactModalForm.module.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Style the modal backdrop */
.HpgsyLKvI9rV_4W7pf1e {
  opacity: 0.8;
}

/* Style the modal container */
.qIryTj4fLNoJ0EM0frBc {
  border: 2px solid #4c5570;
  border-radius: 10px;
  max-width: 600px;
  margin: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  /* Style the modal overlay */
  /* Style the modal content container */
}
.qIryTj4fLNoJ0EM0frBc .sXXh0S53zgaHNEvTFmtc {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  display: flex; /* Initially hidden */
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it appears on top of other content */
}
.qIryTj4fLNoJ0EM0frBc .QN9mGwPf1aNipbtl4stj {
  border: none;
  border-radius: 10px;
  background-color: #2c3437;
  width: 80%; /* Adjust the width as needed */
  /* Style the modal content */
  /* Style the modal footer */
}
.qIryTj4fLNoJ0EM0frBc .QN9mGwPf1aNipbtl4stj .JklruQZgG2I6rX0sx6WH {
  padding: 20px;
  /* Add custom styling for the modal body content here */
}
.qIryTj4fLNoJ0EM0frBc .QN9mGwPf1aNipbtl4stj .kHItKmbTvwF6p39wA2Le {
  border-top: none;
  padding: 20px;
  /* Style the buttons in the modal footer */
}
.qIryTj4fLNoJ0EM0frBc .QN9mGwPf1aNipbtl4stj .kHItKmbTvwF6p39wA2Le button {
  margin-right: 10px;
}`, "",{"version":3,"sources":["webpack://./src/components/Contact/ContactModalForm.module.scss"],"names":[],"mappings":"AAAA,6BAAA;AACA;EACE,YAAA;AACF;;AAEA,8BAAA;AACA;EACE,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,0BAAA;EAEA,4BAAA;EAcA,sCAAA;AAbF;AAAE;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA,EAAA,gCAAA;EACA,aAAA,EAAA,qBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA,EAAA,8CAAA;AAEJ;AAEE;EACE,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,UAAA,EAAA,+BAAA;EAEA,4BAAA;EAOA,2BAAA;AAPJ;AACI;EACE,aAAA;EAEA,uDAAA;AAAN;AAII;EACE,gBAAA;EACA,aAAA;EAEA,0CAAA;AAHN;AAIM;EACE,kBAAA;AAFR","sourcesContent":["/* Style the modal backdrop */\n.modalBackdrop {\n  opacity: 0.8;\n}\n\n/* Style the modal container */\n.modal {\n  border: 2px solid #4c5570;\n  border-radius: 10px;\n  max-width: 600px;\n  margin: 20px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,);\n\n  /* Style the modal overlay */\n  .modalOverlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */\n    display: flex; /* Initially hidden */\n    justify-content: center;\n    align-items: center;\n    z-index: 1000; /* Ensure it appears on top of other content */\n  }\n\n  /* Style the modal content container */\n  .modal-container {\n    border: none;\n    border-radius: 10px;\n    background-color: #2c3437;\n    width: 80%; /* Adjust the width as needed */\n\n    /* Style the modal content */\n    .modal-body {\n      padding: 20px;\n\n      /* Add custom styling for the modal body content here */\n    }\n\n    /* Style the modal footer */\n    .modal-footer {\n      border-top: none;\n      padding: 20px;\n\n      /* Style the buttons in the modal footer */\n      button {\n        margin-right: 10px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"modalBackdrop": `HpgsyLKvI9rV_4W7pf1e`,
	"modal": `qIryTj4fLNoJ0EM0frBc`,
	"modalOverlay": `sXXh0S53zgaHNEvTFmtc`,
	"modal-container": `QN9mGwPf1aNipbtl4stj`,
	"modal-body": `JklruQZgG2I6rX0sx6WH`,
	"modal-footer": `kHItKmbTvwF6p39wA2Le`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Education/Education.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Education/Education.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.fcJFu5Rcew3sw3qbbu0p {
  padding: 2rem;
  margin-right: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #572387;
  border-radius: 10px;
  text-align: center;
}
.fcJFu5Rcew3sw3qbbu0p h2 {
  font-size: 47px;
  margin-bottom: 1rem;
  color: #60b4c4;
}
.fcJFu5Rcew3sw3qbbu0p .xG1tGq4NqK3zrwmBa5rw {
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: center;
  align-items: center;
}
.fcJFu5Rcew3sw3qbbu0p .xG1tGq4NqK3zrwmBa5rw h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.fcJFu5Rcew3sw3qbbu0p .xG1tGq4NqK3zrwmBa5rw .dEJqsUBLQoz0dILIIW6t {
  font-size: 0.9rem;
  color: #555;
}

.MXCQmfDKMNYFwLK38M23 {
  padding: auto;
  border-radius: 10px;
  background-color: white;
  list-style: none;
  align-items: center;
}

.gWyjJKsoBGL40SAp6uxD {
  align-items: center;
  text-align: center;
  margin-right: 46px;
}

.L7wzdj0LGGKVCaXC6WyS {
  align-items: center;
  list-style: none;
}

.QGhI7K9tY0Jyn4D2CC6i {
  color: aquamarine;
}

.FguP31XS9F0B1w5iLho6 {
  list-style-type: disc;
  padding-left: 2.5rem;
  padding: 4px;
  text-align: left;
  margin: 2px;
}

.aQjlWHsLjAw3eEMDjHFT {
  font-size: 1.7rem;
}

.Edi7ssqrfPRMtBQ5v4c_ {
  font-size: 1.3rem;
}

.m8TeojzqHVVmtHXH0IvO {
  font-weight: 600;
  font-size: 1.5;
}`, "",{"version":3,"sources":["webpack://./src/components/Education/Education.module.scss"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,kBAAA;AAAJ;AAGI;EACE,eAAA;EACA,mBAAA;EACA,cAAA;AADN;AAII;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,wCAAA;EACA,uBAAA;EACA,kBAAA;EACA,mBAAA;AAFN;AAIM;EACE,iBAAA;EACA,qBAAA;AAFR;AAOM;EACE,iBAAA;EACA,WAAA;AALR;;AASE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;AANJ;;AASA;EACE,mBAAA;EACA,kBAAA;EACA,kBAAA;AANF;;AASA;EACA,mBAAA;EACA,gBAAA;AANA;;AASA;EACE,iBAAA;AANF;;AASA;EACE,qBAAA;EACA,oBAAA;EACA,YAAA;EACA,gBAAA;EACA,WAAA;AANF;;AAQA;EACE,iBAAA;AALF;;AAQA;EACE,iBAAA;AALF;;AAQA;EACE,gBAAA;EACA,cAAA;AALF","sourcesContent":["\n.eduContainer {\n    padding: 2rem;\n    margin-right: 18px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #572387;\n    border-radius: 10px;\n    text-align: center;\n\n  \n    h2 {\n      font-size: 47px;\n      margin-bottom: 1rem;\n      color: #60b4c4;\n    }\n  \n    .eduItem {\n      border-radius: 8px;\n      padding: 1rem;\n      margin-bottom: 1rem;\n      width: 100%;\n      max-width: 400px;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      background-color: white;\n      text-align: center;\n      align-items: center;\n  \n      h3 {\n        font-size: 1.2rem;\n        margin-bottom: 0.5rem;\n      }\n  \n      \n  \n      .dates {\n        font-size: 0.9rem;\n        color: #555;\n      }\n    }\n  }\n  .edImage {\n    padding: auto;\n    border-radius: 10px;\n    background-color: white;\n    list-style: none;\n    align-items: center;\n\n  }\n.eduList {\n  align-items: center;\n  text-align: center;\n  margin-right: 46px ;\n}\n\n.eduListItem {\nalign-items: center;\nlist-style: none;\n}\n\n.resumeLink {\n  color:aquamarine;\n}\n\n.achievements {\n  list-style-type: disc;\n  padding-left: 2.5rem;\n  padding: 4px;\n  text-align: left;\n  margin: 2px;\n}\n.university {\n  font-size: 1.7rem;\n}\n\n.gradYear {\n  font-size: 1.3rem;\n}\n\n.certification {\n  font-weight: 600;\n  font-size: 1.5;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"eduContainer": `fcJFu5Rcew3sw3qbbu0p`,
	"eduItem": `xG1tGq4NqK3zrwmBa5rw`,
	"dates": `dEJqsUBLQoz0dILIIW6t`,
	"edImage": `MXCQmfDKMNYFwLK38M23`,
	"eduList": `gWyjJKsoBGL40SAp6uxD`,
	"eduListItem": `L7wzdj0LGGKVCaXC6WyS`,
	"resumeLink": `QGhI7K9tY0Jyn4D2CC6i`,
	"achievements": `FguP31XS9F0B1w5iLho6`,
	"university": `aQjlWHsLjAw3eEMDjHFT`,
	"gradYear": `Edi7ssqrfPRMtBQ5v4c_`,
	"certification": `m8TeojzqHVVmtHXH0IvO`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Experience/Experience.module.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Experience/Experience.module.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Experience.module.scss */
.l_wko_W3JfW1JmNK3RIC {
  padding: 2rem;
  padding-right: 4rem;
  display: flex;
  flex-direction: column;
  background-color: #60b4c4; /* Dark background color */
  border-radius: 10px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.l_wko_W3JfW1JmNK3RIC .Sid5nAtMp7iNV7VOoYKq {
  font-size: 47px;
  margin-bottom: 1rem;
  color: #572387;
}
.l_wko_W3JfW1JmNK3RIC .LGNR_UfT0Xr8tEQq4cbg {
  padding: 1rem;
  margin-bottom: 2rem; /* Increase margin to separate entries */
  width: 100%;
  max-width: 600px; /* Wider container for better spacing */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #161417;
  border-radius: 10px;
}
.l_wko_W3JfW1JmNK3RIC .LGNR_UfT0Xr8tEQq4cbg .dDwG9q1KZw95_O57kZJS {
  font-size: 32px; /* Slightly larger heading */
  margin-bottom: 1rem; /* More spacing below the title */
  color: #60b4c4;
}
.l_wko_W3JfW1JmNK3RIC .LGNR_UfT0Xr8tEQq4cbg .VlMpCrXd7i_eF88rN96k {
  font-size: 1.1rem; /* Larger font size for description */
  margin-bottom: 1rem; /* More spacing between lines */
}
.l_wko_W3JfW1JmNK3RIC .LGNR_UfT0Xr8tEQq4cbg ._8fLtJdD6OAp2alkiw82p {
  font-size: 1rem;
  color: #555;
}
.l_wko_W3JfW1JmNK3RIC .LGNR_UfT0Xr8tEQq4cbg .qvwdY9A9xMTOqtHoneou {
  color: aquamarine; /* Style for project links */
  text-decoration: none;
  text-align: right;
}
.l_wko_W3JfW1JmNK3RIC .LGNR_UfT0Xr8tEQq4cbg .qvwdY9A9xMTOqtHoneou:hover {
  text-decoration: underline;
}

.HzTxMFSkng6tH6DhGtSe {
  list-style-type: none;
  padding: auto;
}

.L2Zve5fH1iGi6d6UN0bP {
  font-size: 20px;
  list-style: disc; /* Use bullets as list-style */
  margin-bottom: 10px;
}

.UNZs0GGOt6d9a7Tl3FKy {
  color: white;
}`, "",{"version":3,"sources":["webpack://./src/components/Experience/Experience.module.scss"],"names":[],"mappings":"AAAA,2BAAA;AAEA;EACE,aAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA,EAAA,0BAAA;EACA,mBAAA;EACA,YAAA;EACA,wCAAA;AAAF;AAGE;EACE,eAAA;EACA,mBAAA;EACA,cAAA;AADJ;AAIE;EACE,aAAA;EACA,mBAAA,EAAA,wCAAA;EACA,WAAA;EACA,gBAAA,EAAA,uCAAA;EACA,wCAAA;EACA,yBAAA;EACA,mBAAA;AAFJ;AAKI;EACE,eAAA,EAAA,4BAAA;EACA,mBAAA,EAAA,iCAAA;EACA,cAAA;AAHN;AAMI;EACE,iBAAA,EAAA,qCAAA;EACA,mBAAA,EAAA,+BAAA;AAJN;AAOI;EACE,eAAA;EACA,WAAA;AALN;AAUI;EACE,iBAAA,EAAA,4BAAA;EACA,qBAAA;EACA,iBAAA;AARN;AAUM;EACE,0BAAA;AARR;;AAcA;EACE,qBAAA;EACA,aAAA;AAXF;;AAcA;EACE,eAAA;EACA,gBAAA,EAAA,8BAAA;EACA,mBAAA;AAXF;;AAaA;EACE,YAAA;AAVF","sourcesContent":["/* Experience.module.scss */\n\n.experienceContainer {\n  padding: 2rem;\n  padding-right: 4rem;\n  display: flex;\n  flex-direction: column;\n  background-color: #60b4c4; /* Dark background color */\n  border-radius: 10px;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n \n\n  .workTitle {\n    font-size: 47px;\n    margin-bottom: 1rem;\n    color: #572387;\n  }\n\n  .experienceItem {\n    padding: 1rem;\n    margin-bottom: 2rem; /* Increase margin to separate entries */\n    width: 100%;\n    max-width: 600px; /* Wider container for better spacing */\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    background-color: #161417;\n    border-radius: 10px;\n    \n\n    .expTitle {\n      font-size: 32px; /* Slightly larger heading */\n      margin-bottom: 1rem; /* More spacing below the title */\n      color: #60b4c4;\n    }\n\n    .company {\n      font-size: 1.1rem; /* Larger font size for description */\n      margin-bottom: 1rem; /* More spacing between lines */\n    }\n\n    .dates {\n      font-size: 1rem;\n      color: #555;\n    }\n\n    \n\n    .expLink {\n      color: aquamarine; /* Style for project links */\n      text-decoration: none;\n      text-align: right;\n\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n  }\n}\n\n.experienceList {\n  list-style-type: none;\n  padding: auto;\n}\n\n.expoBulletList {\n  font-size: 20px;\n  list-style: disc; /* Use bullets as list-style */\n  margin-bottom: 10px;\n}\n.salonLink {\n  color: white;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"experienceContainer": `l_wko_W3JfW1JmNK3RIC`,
	"workTitle": `Sid5nAtMp7iNV7VOoYKq`,
	"experienceItem": `LGNR_UfT0Xr8tEQq4cbg`,
	"expTitle": `dDwG9q1KZw95_O57kZJS`,
	"company": `VlMpCrXd7i_eF88rN96k`,
	"dates": `_8fLtJdD6OAp2alkiw82p`,
	"expLink": `qvwdY9A9xMTOqtHoneou`,
	"experienceList": `HzTxMFSkng6tH6DhGtSe`,
	"expoBulletList": `L2Zve5fH1iGi6d6UN0bP`,
	"salonLink": `UNZs0GGOt6d9a7Tl3FKy`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Footer/Footer.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Footer/Footer.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Footer.module.scss */
.ceS4EgxnSPoT9JOwqjeP {
  padding: 15px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #1f1c30;
  color: #fff;
  width: 100%;
  opacity: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Adjust to align to the right */
}

.aFyFehz8aeZeiJnpnjpE {
  display: flex;
  align-items: center;
}
.aFyFehz8aeZeiJnpnjpE img {
  width: 35px;
  height: auto;
  padding: 8px; /* Reduce padding to bring the links closer to the center */
  border-radius: 50%;
  margin-right: 24px; /* Add margin to push the links to the right */
}

.eW9ij6nP8axm1anPkNAw {
  margin-bottom: 10px;
  display: flexs;
  align-items: center; /* Center the content vertically within the contactInfo div */
  justify-content: center; /* Center the content horizontally within the contactInfo div */
}

.GkCpZLzisdZbfn8OT1RQ {
  font-size: 0.9rem;
  color: #f7f6f5;
  cursor: pointer;
}

.NXxFbXHLaIT7eYOW7Tit {
  display: flex;
  justify-content: space-between;
}

a {
  margin: 0 10px;
  display: inline-block;
  transition: transform 0.3s;
  position: relative;
  padding: 20px;
  margin: -20px;
}

a::before {
  content: "";
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  opacity: 0;
  transition: opacity 0.3s ease-in;
  z-index: -1;
}

a:hover::before {
  opacity: 1;
}

a:hover::before,
a:hover {
  transform: scale(1.9);
}

p {
  margin: 0;
}`, "",{"version":3,"sources":["webpack://./src/components/Footer/Footer.module.scss"],"names":[],"mappings":"AAAA,uBAAA;AAEA;EACE,aAAA;EACA,kBAAA;EACA,eAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,yBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA,EAAA,iCAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;AAAF;AACE;EACE,WAAA;EACA,YAAA;EACA,YAAA,EAAA,2DAAA;EACA,kBAAA;EACA,kBAAA,EAAA,8CAAA;AACJ;;AAIA;EACE,mBAAA;EACA,cAAA;EACA,mBAAA,EAAA,6DAAA;EACA,uBAAA,EAAA,+DAAA;AADF;;AAIA;EACE,iBAAA;EACA,cAAA;EACA,eAAA;AADF;;AAGA;EACE,aAAA;EACA,8BAAA;AAAF;;AAGA;EACE,cAAA;EACA,qBAAA;EACA,0BAAA;EACA,kBAAA;EACA,aAAA;EACA,aAAA;AAAF;;AAGA;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,UAAA;EACA,gCAAA;EACA,WAAA;AAAF;;AAGA;EACE,UAAA;AAAF;;AAGA;;EAEE,qBAAA;AAAF;;AAIA;EACE,SAAA;AADF","sourcesContent":["/* Footer.module.scss */\n\n.footer {\n  padding: 15px;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #1f1c30;\n  color: #fff;\n  width: 100%;\n  opacity: 70%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; /* Adjust to align to the right */\n}\n\n.linked {\n  display: flex;\n  align-items: center;\n  img {\n    width: 35px;\n    height: auto;\n    padding: 8px; /* Reduce padding to bring the links closer to the center */\n    border-radius: 50%;\n    margin-right: 24px; /* Add margin to push the links to the right */\n  }\n  \n}\n\n.contactInfo {\n  margin-bottom: 10px;\n  display: flexs;\n  align-items: center; /* Center the content vertically within the contactInfo div */\n  justify-content: center; /* Center the content horizontally within the contactInfo div */\n}\n\n.email {\n  font-size: 0.9rem;\n  color: #f7f6f5;\n  cursor: pointer;\n}\n.links {\n  display: flex;\n  justify-content: space-between;\n}\n\na {\n  margin: 0 10px;\n  display: inline-block;\n  transition: transform 0.3s;\n  position: relative;\n  padding: 20px;\n  margin: -20px;\n}\n\na::before {\n  content: '';\n  position: absolute;\n  top: -20px;\n  left: -20px;\n  right: -20px;\n  bottom: -20px;\n  opacity: 0;\n  transition: opacity 0.3s ease-in;\n  z-index: -1;\n}\n\na:hover::before {\n  opacity: 1;\n}\n\na:hover::before,\na:hover {\n  transform: scale(1.9);\n}\n\n\np {\n  margin: 0;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footer": `ceS4EgxnSPoT9JOwqjeP`,
	"linked": `aFyFehz8aeZeiJnpnjpE`,
	"contactInfo": `eW9ij6nP8axm1anPkNAw`,
	"email": `GkCpZLzisdZbfn8OT1RQ`,
	"links": `NXxFbXHLaIT7eYOW7Tit`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.QpVD3qAS0nYBtoQqAYoe {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2.5rem 1.5rem 2.5rem;
  background-color: #4c5570;
  color: white;
}
.QpVD3qAS0nYBtoQqAYoe .EfcguAt9VgWgnagI0yQp {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.QpVD3qAS0nYBtoQqAYoe .EfcguAt9VgWgnagI0yQp a {
  text-decoration: underline;
  color: #f7f6f5;
}
.QpVD3qAS0nYBtoQqAYoe .EfcguAt9VgWgnagI0yQp a:hover {
  cursor: pointer;
  border-radius: 7px;
  padding: 3px;
  margin: 3px;
  background: linear-gradient(90deg, #646e67 12.5%, #3d4742 25%, #2c3437 37.5%, #e37d4e 50%, #e4ead8 62.5%, #4c5570 75%, #ced5eb 87.5%, #f7f6f5 100%);
  background-size: 1000px 100%;
  animation: vPrwvlxTcWrOTMBgZ6_3 38s infinite;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: ease-in-out;
}

@keyframes vPrwvlxTcWrOTMBgZ6_3 {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/NavBar/NavBar.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,oCAAA;EACA,yBAAA;EACA,YAAA;AACF;AACE;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;AACJ;AACI;EACE,0BAAA;EACA,cAAA;AACN;AACM;EACE,eAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,mJAAA;EAWA,4BAAA;EACA,4CAAA;EACA,qBAAA;EACA,6BAAA;EACA,kBAAA;EACA,uBAAA;AATR;;AAeA;EACE;IACE,8BAAA;EAZF;EAcA;IACE,6BAAA;EAZF;AACF","sourcesContent":[".NavBar {\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem 2.5rem 1.5rem 2.5rem;\n  background-color: #4c5570;\n  color: white;\n\n  .navBarLinks {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    a {\n      text-decoration: underline;\n      color: #f7f6f5;\n\n      &:hover {\n        cursor: pointer;\n        border-radius: 7px;\n        padding: 3px;\n        margin: 3px;\n        background: linear-gradient(\n          90deg,\n          #646e67 12.5%,\n          #3d4742 25%,\n          #2c3437 37.5%,\n          #e37d4e 50%,\n          #e4ead8 62.5%,\n          #4c5570 75%,\n          #ced5eb 87.5%,\n          #f7f6f5 100%\n        );\n        background-size: 1000px 100%;\n        animation: shimmer 38s infinite;\n        background-clip: text;\n        -webkit-background-clip: text;\n        color: transparent;\n        transition: ease-in-out;\n      }\n    }\n  }\n}\n\n@keyframes shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"NavBar": `QpVD3qAS0nYBtoQqAYoe`,
	"navBarLinks": `EfcguAt9VgWgnagI0yQp`,
	"shimmer": `vPrwvlxTcWrOTMBgZ6_3`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Projects/Projects.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Projects/Projects.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Re9b4dg0VO9C3H0aAuBl {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 2rem;
  justify-items: center;
  text-align: left;
  perspective: 1000px;
}

.WL_csyXcz9fuX7NR7iMV {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  animation: u6fEW0ob9ZvwQ763iPQI 20s linear infinite;
  transform-style: preserve-3d;
  transform: rotateY(0);
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: #bf8575;
}
.WL_csyXcz9fuX7NR7iMV:hover {
  transform: rotateY(0);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a box shadow for elevation */
  animation-play-state: paused;
}
.WL_csyXcz9fuX7NR7iMV .CIHI0EnOcLSjcuolDMsj {
  font-size: 1.7rem;
  margin-bottom: 1rem;
  text-align: center; /* Center-align the titles */
  color: #1a3d5c;
}
.WL_csyXcz9fuX7NR7iMV .XMUC8p37Bly8vH_bONyK {
  font-weight: bold;
}
.WL_csyXcz9fuX7NR7iMV .XMUC8p37Bly8vH_bONyK ul {
  padding-left: 20px;
  color: #2c3437;
}
.WL_csyXcz9fuX7NR7iMV .XMUC8p37Bly8vH_bONyK li {
  margin-bottom: 5px;
}
.WL_csyXcz9fuX7NR7iMV .vWfUCwrZRq_vGSlQp9Ak {
  max-width: 100%;
  height: 300px;
  -o-object-fit: contain;
  object-fit: contain;
  margin-bottom: 1rem;
  border: solid 1rem #1a3d5c;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.WL_csyXcz9fuX7NR7iMV .UF3WvfAPpAmourlbiCcy {
  font-size: 1.3rem;
  list-style-type: disc;
}
.WL_csyXcz9fuX7NR7iMV .UF3WvfAPpAmourlbiCcy .XMUC8p37Bly8vH_bONyK {
  font-weight: bold;
  list-style: disc;
}
.WL_csyXcz9fuX7NR7iMV .UF3WvfAPpAmourlbiCcy .XMUC8p37Bly8vH_bONyK ul {
  padding-left: 20px;
}
.WL_csyXcz9fuX7NR7iMV .UF3WvfAPpAmourlbiCcy .XMUC8p37Bly8vH_bONyK li {
  margin-bottom: 5px;
}
.WL_csyXcz9fuX7NR7iMV .Eg_HZ4D4dhGDwQ5TOw3x {
  font-size: 1.3rem;
}
.WL_csyXcz9fuX7NR7iMV .Eg_HZ4D4dhGDwQ5TOw3x p {
  max-height: 120px; /* Adjust the height for the collapsed summary */
  overflow: hidden;
  text-overflow: ellipsis;
}
.WL_csyXcz9fuX7NR7iMV .IK6BzG3mN_nEimNsMAEg {
  font-size: 1.6rem;
  background-color: #60b4c4;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
.WL_csyXcz9fuX7NR7iMV .IK6BzG3mN_nEimNsMAEg:hover {
  background-color: #301b5e;
}
.WL_csyXcz9fuX7NR7iMV .A7Wz_hoPe6EokPBKnxnQ {
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 0.5rem;
  margin: 0.5rem 0;
}
.WL_csyXcz9fuX7NR7iMV .A7Wz_hoPe6EokPBKnxnQ ul {
  padding-left: 20px;
}
.WL_csyXcz9fuX7NR7iMV .A7Wz_hoPe6EokPBKnxnQ li {
  margin-bottom: 5px;
}
.WL_csyXcz9fuX7NR7iMV .zGbJvQU7P0x9do1B25R5 {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
.WL_csyXcz9fuX7NR7iMV .zGbJvQU7P0x9do1B25R5 a {
  font-size: 1.6rem;
  color: #60b4c4;
  text-decoration: underline;
  transition: color 0.2s;
  cursor: pointer;
}
.WL_csyXcz9fuX7NR7iMV .zGbJvQU7P0x9do1B25R5 a:hover {
  color: #301b5e;
  transform: scale(1.9);
}

.WL_csyXcz9fuX7NR7iMV.i57_1aVGXV3m0qE3beAw {
  transform: rotateY(0);
  animation-play-state: paused;
}

@keyframes u6fEW0ob9ZvwQ763iPQI {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}`, "",{"version":3,"sources":["webpack://./src/components/Projects/Projects.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,2DAAA;EACA,SAAA;EACA,aAAA;EACA,qBAAA;EACA,gBAAA;EACA,mBAAA;AACF;;AAEA;EACE,sBAAA;EACA,kBAAA;EACA,aAAA;EACA,wCAAA;EACA,WAAA;EACA,gBAAA;EACA,mDAAA;EACA,4BAAA;EACA,qBAAA;EACA,2CAAA;EACA,yBAAA;AACF;AACE;EACE,qBAAA;EACA,wCAAA,EAAA,mCAAA;EACA,4BAAA;AACJ;AAEE;EACE,iBAAA;EACA,mBAAA;EACA,kBAAA,EAAA,4BAAA;EACA,cAAA;AAAJ;AAGE;EACE,iBAAA;AADJ;AAEI;EACE,kBAAA;EACA,cAAA;AAAN;AAEI;EACE,kBAAA;AAAN;AAGE;EACE,eAAA;EACA,aAAA;EACA,sBAAA;EACG,mBAAA;EACH,mBAAA;EACA,0BAAA;EACA,kBAAA;EACA,wCAAA;AADJ;AAIE;EACE,iBAAA;EACA,qBAAA;AAFJ;AAGI;EACE,iBAAA;EACA,gBAAA;AADN;AAGM;EAEE,kBAAA;AAFR;AAIM;EACE,kBAAA;AAFR;AAOE;EACE,iBAAA;AALJ;AAMI;EACE,iBAAA,EAAA,gDAAA;EACA,gBAAA;EACA,uBAAA;AAJN;AAQE;EACE,iBAAA;EACA,yBAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;EACA,eAAA;EACA,iCAAA;AANJ;AAQI;EACE,yBAAA;AANN;AAUE;EACE,iBAAA;EACA,WAAA;EACA,qBAAA;EACA,gBAAA;AARJ;AASI;EACE,kBAAA;AAPN;AAUI;EACE,kBAAA;AARN;AAYE;EACE,aAAA;EACA,6BAAA;EACA,qBAAA;AAVJ;AAYI;EACE,iBAAA;EACA,cAAA;EACA,0BAAA;EACA,sBAAA;EACA,eAAA;AAVN;AAYM;EACE,cAAA;EACA,qBAAA;AAVR;;AAiBA;EACE,qBAAA;EACA,4BAAA;AAdF;;AAkBA;EACE;IACE,qBAAA;EAfF;EAiBA;IACE,0BAAA;EAfF;AACF","sourcesContent":[".container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n  padding: 2rem;\n  justify-items: center;\n  text-align: left;\n  perspective: 1000px;\n}\n\n.item {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n  animation: rotate 20s linear infinite;\n  transform-style: preserve-3d;\n  transform: rotateY(0);\n  transition: transform 0.2s, box-shadow 0.2s;\n  background-color: #bf8575;\n\n  &:hover {\n    transform: rotateY(0);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a box shadow for elevation */\n    animation-play-state: paused;\n  }\n\n  .projectTitle {\n    font-size: 1.7rem;\n    margin-bottom: 1rem;\n    text-align: center; /* Center-align the titles */\n    color: #1a3d5c;\n  }\n\n  .projectDescription {\n    font-weight: bold;\n    ul {\n      padding-left: 20px;\n      color: #2c3437;\n    }\n    li {\n      margin-bottom: 5px;\n    }\n  }\n  .projectImage {\n    max-width: 100%;\n    height: 300px;\n    -o-object-fit: contain;\n       object-fit: contain;\n    margin-bottom: 1rem;\n    border: solid 1rem #1a3d5c;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  }\n\n  .projectDetails {\n    font-size: 1.3rem;\n    list-style-type: disc;\n    .projectDescription {\n      font-weight: bold;\n      list-style: disc;\n      \n      ul {\n       \n        padding-left: 20px;\n      }\n      li {\n        margin-bottom: 5px;\n      }\n    }\n  }\n\n  .projectSummary {\n    font-size: 1.3rem;\n    p {\n      max-height: 120px; /* Adjust the height for the collapsed summary */\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n\n  .expandButton {\n    font-size: 1.6rem;\n    background-color: #60b4c4;\n    color: white;\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n    transition: background-color 0.2s;\n\n    &:hover {\n      background-color: #301b5e;\n    }\n  }\n\n  .technologies {\n    font-size: 1.3rem;\n    color: #555;\n    margin-bottom: 0.5rem;\n    margin: 0.5rem 0;\n    ul {\n      padding-left: 20px;\n      \n    }\n    li {\n      margin-bottom: 5px;\n    }\n  }\n\n  .links {\n    display: flex;\n    justify-content: space-around;\n    align-items: baseline;\n\n    a {\n      font-size: 1.6rem;\n      color: #60b4c4;\n      text-decoration: underline;\n      transition: color 0.2s;\n      cursor: pointer;\n\n      &:hover {\n        color: #301b5e;\n        transform: scale(1.9);\n      }\n    }\n  }\n}\n\n\n.item.show-details {\n  transform: rotateY(0);\n  animation-play-state: paused;\n}\n\n\n@keyframes rotate {\n  0% {\n    transform: rotateY(0);\n  }\n  100% {\n    transform: rotateY(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `Re9b4dg0VO9C3H0aAuBl`,
	"item": `WL_csyXcz9fuX7NR7iMV`,
	"rotate": `u6fEW0ob9ZvwQ763iPQI`,
	"projectTitle": `CIHI0EnOcLSjcuolDMsj`,
	"projectDescription": `XMUC8p37Bly8vH_bONyK`,
	"projectImage": `vWfUCwrZRq_vGSlQp9Ak`,
	"projectDetails": `UF3WvfAPpAmourlbiCcy`,
	"projectSummary": `Eg_HZ4D4dhGDwQ5TOw3x`,
	"expandButton": `IK6BzG3mN_nEimNsMAEg`,
	"technologies": `A7Wz_hoPe6EokPBKnxnQ`,
	"links": `zGbJvQU7P0x9do1B25R5`,
	"show-details": `i57_1aVGXV3m0qE3beAw`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Services/Services.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Services/Services.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.EjhMvsCUQLCTQ0Y_vV7g {
  padding: auto;
}`, "",{"version":3,"sources":["webpack://./src/components/Services/Services.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ","sourcesContent":[".services {\n    padding: auto;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"services": `EjhMvsCUQLCTQ0Y_vV7g`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Skills/Skills.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Skills/Skills.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Ts3qWjeJKnasnLkvsufw {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Ts3qWjeJKnasnLkvsufw .iR2y6namh21c3PIQrXun {
  margin-bottom: 1rem;
}
.Ts3qWjeJKnasnLkvsufw .iR2y6namh21c3PIQrXun h3 {
  font-size: 1.7rem;
  color: #1f1c30;
  margin-bottom: 10px;
}
.Ts3qWjeJKnasnLkvsufw .iR2y6namh21c3PIQrXun .OGzEytfFmVnevKN7eEia {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.Ts3qWjeJKnasnLkvsufw .iR2y6namh21c3PIQrXun .OGzEytfFmVnevKN7eEia .uI2pMXmkaNRvrDmKpVf4 {
  padding: 0.3rem;
  margin: 0.2rem;
  border-radius: 4px;
  font-size: 1.9rem;
  display: flex;
  flex-direction: column; /* Display image and text in a column */
  align-items: center; /* Center the image and text vertically */
  text-align: center; /* Center the text horizontally */
}
.Ts3qWjeJKnasnLkvsufw .iR2y6namh21c3PIQrXun .OGzEytfFmVnevKN7eEia .uI2pMXmkaNRvrDmKpVf4 .fUHE4gBT0lLidQwqH56K {
  width: 100px; /* Set desired width for the images */
  height: 100px; /* Set desired height for the images */
  -o-object-fit: cover;
  object-fit: cover; /* Maintain aspect ratio and cover the entire space */
  border-radius: 50%; /* Create a circular shape for the image */
  margin-bottom: 8px; /* Add spacing between the image and text */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #60b4c4;
  border: solid #161417 0.175rem;
  margin: 2px;
  animation: bDNpF4OBapbdYRk9NbRT 3s infinite linear;
  transition: transform 0.2s ease-in-out;
}
.Ts3qWjeJKnasnLkvsufw .iR2y6namh21c3PIQrXun .OGzEytfFmVnevKN7eEia .uI2pMXmkaNRvrDmKpVf4 .fUHE4gBT0lLidQwqH56K:hover {
  transform: scale(1.9);
  border: aquamarine;
}
.Ts3qWjeJKnasnLkvsufw .iR2y6namh21c3PIQrXun .OGzEytfFmVnevKN7eEia .uI2pMXmkaNRvrDmKpVf4 span.jFnD1QfjiGUL11LaqyrA {
  font-weight: bold;
  color: #1f1c30;
  font-size: 1rem;
}

@keyframes bDNpF4OBapbdYRk9NbRT {
  0% {
    transform: translate(0, 0);
  }
  /* Define custom animations for individual images */
  20% {
    transform: translate(3px, -4px);
  }
  40% {
    transform: translate(-2px, 5px);
  }
  60% {
    transform: translate(4px, 1px);
  }
  80% {
    transform: translate(-3px, -2px);
  }
  100% {
    transform: translate(2px, 3px);
  }
}`, "",{"version":3,"sources":["webpack://./src/components/Skills/Skills.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACF;AACE;EACE,mBAAA;AACJ;AAEI;EACE,iBAAA;EACA,cAAA;EACA,mBAAA;AAAN;AAGI;EACE,aAAA;EACA,eAAA;EACA,mBAAA;AADN;AAGM;EACE,eAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA,EAAA,uCAAA;EACA,mBAAA,EAAA,yCAAA;EACA,kBAAA,EAAA,iCAAA;AADR;AAGQ;EACE,YAAA,EAAA,qCAAA;EACA,aAAA,EAAA,sCAAA;EACA,oBAAA;EACG,iBAAA,EAAA,qDAAA;EACH,kBAAA,EAAA,0CAAA;EACA,kBAAA,EAAA,2CAAA;EACA,wCAAA;EACA,yBAAA;EACA,8BAAA;EACA,WAAA;EACA,kDAAA;EACA,sCAAA;AADV;AAGU;EACE,qBAAA;EACA,kBAAA;AADZ;AAKQ;EACE,iBAAA;EACA,cAAA;EACA,eAAA;AAHV;;AAWA;EACE;IACE,0BAAA;EARF;EAWA,mDAAA;EACA;IACE,+BAAA;EATF;EAYA;IACE,+BAAA;EAVF;EAaA;IACE,8BAAA;EAXF;EAcA;IACE,gCAAA;EAZF;EAeA;IACE,8BAAA;EAbF;AACF","sourcesContent":[".skillsContainer {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .category {\n    margin-bottom: 1rem;\n  \n\n    h3 {\n      font-size: 1.7rem;\n      color: #1f1c30;\n      margin-bottom: 10px;\n    }\n\n    .list {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: center;\n\n      .skill {\n        padding: 0.3rem;\n        margin: 0.2rem;\n        border-radius: 4px;\n        font-size: 1.9rem;\n        display: flex;\n        flex-direction: column; /* Display image and text in a column */\n        align-items: center; /* Center the image and text vertically */\n        text-align: center; /* Center the text horizontally */\n\n        .skillImage {\n          width: 100px; /* Set desired width for the images */\n          height: 100px; /* Set desired height for the images */\n          -o-object-fit: cover;\n             object-fit: cover; /* Maintain aspect ratio and cover the entire space */\n          border-radius: 50%; /* Create a circular shape for the image */\n          margin-bottom: 8px; /* Add spacing between the image and text */\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n          background-color: #60b4c4;\n          border: solid #161417 .175rem;\n          margin: 2px;\n          animation: randomAnimation 3s infinite linear;\n          transition: transform 0.2s ease-in-out;\n\n          &:hover {\n            transform: scale(1.9);\n            border: aquamarine;\n          }\n        }\n\n        span.skillName {\n          font-weight: bold;\n          color: #1f1c30;\n          font-size: 1rem;\n        }\n      }\n    }\n  }\n}\n\n\n@keyframes randomAnimation {\n  0% {\n    transform: translate(0, 0);\n  }\n\n  /* Define custom animations for individual images */\n  20% {\n    transform: translate(3px, -4px);\n  }\n\n  40% {\n    transform: translate(-2px, 5px);\n  }\n\n  60% {\n    transform: translate(4px, 1px);\n  }\n\n  80% {\n    transform: translate(-3px, -2px);\n  }\n\n  100% {\n    transform: translate(2px, 3px);\n  }\n}\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"skillsContainer": `Ts3qWjeJKnasnLkvsufw`,
	"category": `iR2y6namh21c3PIQrXun`,
	"list": `OGzEytfFmVnevKN7eEia`,
	"skill": `uI2pMXmkaNRvrDmKpVf4`,
	"skillImage": `fUHE4gBT0lLidQwqH56K`,
	"randomAnimation": `bDNpF4OBapbdYRk9NbRT`,
	"skillName": `jFnD1QfjiGUL11LaqyrA`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/WordCloud/WordCloud.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/WordCloud/WordCloud.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutPage/AboutPage.module.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutPage/AboutPage.module.scss ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sQkdi7KRaUR4jafWumCI {
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* Align the left column at the top */
  justify-content: space-between; /* Create space between columns */
  width: 100%;
  padding: 1rem;
}

.xc6Y6XUpPgPqycXM6Nrg {
  width: 60%; /* Adjust as needed */
  margin-right: 1rem;
}

.K2fI0tJ2EKl7u0ykMEHz {
  width: 47%; /* Adjust as needed */
}

.TQtoyLM4BCcepFioP8zK {
  padding: 1rem;
  text-align: center;
  margin-top: auto; /* Push the education section to the bottom */
  margin-bottom: 70px;
}

.xouQhGwjP45KgPHzkj5V {
  padding: 1rem;
  align-items: center;
}

.YnZPhvUb5L7KpILX4RrA {
  margin-top: 10px;
  align-items: center;
}

.xv88iKLs2S2f6PKgaSn0 {
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.xv88iKLs2S2f6PKgaSn0:hover {
  background-color: #60b4c4;
}

.lk2tEymXQqD96bCWLCJ7 p {
  margin: 20px 0;
}

.ax88xrECsTAB4PpYfYAn {
  padding: 4px;
  margin: 2px;
  border-radius: 6px;
  border: solid #161417 0.175rem;
  max-width: 380px;
  margin-left: 45px;
  margin-right: 25px;
  background-color: #60b4c4;
}

.ByAae_BzjGr1_tJ9Maka {
  max-width: 550px;
}

.TUH8MaEdqfmIVrr6BNQJ {
  line-height: 1.5;
  color: #2c3437;
  background-color: #f7f6f5;
  border-radius: 6px;
  padding: 22px;
  margin: 22px;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/pages/AboutPage/AboutPage.module.scss"],"names":[],"mappings":"AACA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA,EAAA,qCAAA;EACA,8BAAA,EAAA,iCAAA;EACA,WAAA;EACA,aAAA;AAAF;;AAGA;EACE,UAAA,EAAA,qBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,UAAA,EAAA,qBAAA;AAAF;;AAGA;EACE,aAAA;EACA,kBAAA;EACA,gBAAA,EAAA,6CAAA;EACA,mBAAA;AAAF;;AAGA;EACC,aAAA;EACA,mBAAA;AAAD;;AAGA;EACE,gBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,WAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,sCAAA;AAAF;;AAGA;EACE,yBAAA;AAAF;;AAGA;EACE,cAAA;AAAF;;AAGA;EACE,YAAA;EACA,WAAA;EACA,kBAAA;EACA,8BAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAIA;EACE,gBAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;AADF","sourcesContent":["\n.contentWrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start; /* Align the left column at the top */\n  justify-content: space-between; /* Create space between columns */\n  width: 100%;\n  padding: 1rem;\n}\n\n.leftColumn {\n  width: 60%; /* Adjust as needed */\n  margin-right: 1rem;\n}\n\n.rightColumn {\n  width: 47%; /* Adjust as needed */\n}\n\n.skills {\n  padding: 1rem;\n  text-align: center;\n  margin-top: auto; /* Push the education section to the bottom */\n  margin-bottom: 70px;\n}\n\n.education {\n padding: 1rem;\n align-items: center;\n}\n\n.experience {\n  margin-top: 10px;\n  align-items: center;\n}\n\n.contactButton {\n  color: #fff;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.contactButton:hover {\n  background-color: #60b4c4;\n}\n\n.contact p {\n  margin: 20px 0;\n}\n\n.portraitImg {\n  padding: 4px;\n  margin: 2px;\n  border-radius: 6px;\n  border: solid #161417 .175rem;\n  max-width: 380px;\n  margin-left: 45px;\n  margin-right: 25px;\n  background-color: #60b4c4;\n}\n\n.intro {\n  max-width: 550px;\n  \n}\n\n.aboutBio {\n  line-height: 1.5;\n  color: #2c3437;\n  background-color: #f7f6f5;\n  border-radius: 6px;\n  padding: 22px;\n  margin: 22px;\n  text-align: center;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contentWrapper": `sQkdi7KRaUR4jafWumCI`,
	"leftColumn": `xc6Y6XUpPgPqycXM6Nrg`,
	"rightColumn": `K2fI0tJ2EKl7u0ykMEHz`,
	"skills": `TQtoyLM4BCcepFioP8zK`,
	"education": `xouQhGwjP45KgPHzkj5V`,
	"experience": `YnZPhvUb5L7KpILX4RrA`,
	"contactButton": `xv88iKLs2S2f6PKgaSn0`,
	"contact": `lk2tEymXQqD96bCWLCJ7`,
	"portraitImg": `ax88xrECsTAB4PpYfYAn`,
	"intro": `ByAae_BzjGr1_tJ9Maka`,
	"aboutBio": `TUH8MaEdqfmIVrr6BNQJ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.i7JD0mLtNn3FLv6dkbiC {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Eq21mHtG5aTTJ4GArzw_ {
  text-align: center !important;
}

.uYIIXhYJv5OixJHJsMbR {
  margin-right: 69px;
}

.xPQPLtKObSsR3IJtaSLh {
  margin-left: 73px;
  text-shadow: 1rem;
}

.DUEGqbTIf5ob2wpiWA_Z {
  padding: 20px;
  margin: 20px;
  margin-left: 60px;
  text-align: center;
  border: 1px solid #e4ead8;
  border-radius: 7px;
  background-color: #f5f5f5;
  font-size: 1.2rem;
  max-width: 600px;
}`, "",{"version":3,"sources":["webpack://./src/pages/HomePage/HomePage.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AACF;;AAEA;EACE,6BAAA;AACF;;AAEE;EACE,kBAAA;AACJ;;AAEE;EACE,iBAAA;EACA,iBAAA;AACJ;;AAEE;EACE,aAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,yBAAA;EACA,iBAAA;EACA,gBAAA;AACJ","sourcesContent":[".contentWrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.titleCenter {\n  text-align: center !important;\n}\n\n  .imageCarousel {\n    margin-right: 69px;\n  }\n\n  .titleSub {\n    margin-left: 73px;\n    text-shadow: 1rem;\n  }\n\n  .tag {\n    padding: 20px;\n    margin:20px;\n    margin-left: 60px;\n    text-align: center;\n    border: 1px solid #e4ead8;\n    border-radius: 7px;\n    background-color: #f5f5f5;\n    font-size: 1.2rem;\n    max-width: 600px;\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contentWrapper": `i7JD0mLtNn3FLv6dkbiC`,
	"titleCenter": `Eq21mHtG5aTTJ4GArzw_`,
	"imageCarousel": `uYIIXhYJv5OixJHJsMbR`,
	"titleSub": `xPQPLtKObSsR3IJtaSLh`,
	"tag": `DUEGqbTIf5ob2wpiWA_Z`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProjectPage/ProjectPage.module.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProjectPage/ProjectPage.module.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ServicesPage/ServicesPage.module.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ServicesPage/ServicesPage.module.scss ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App/App.module.scss":
/*!*********************************!*\
  !*** ./src/App/App.module.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./App.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App/App.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/About/About.module.scss":
/*!************************************************!*\
  !*** ./src/components/About/About.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./About.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/About/About.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_About_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Carousel/Carousel.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Carousel/Carousel.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Carousel.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Carousel/Carousel.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Contact/ContactModalForm.module.scss":
/*!*************************************************************!*\
  !*** ./src/components/Contact/ContactModalForm.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactModalForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ContactModalForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Contact/ContactModalForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactModalForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactModalForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactModalForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactModalForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Education/Education.module.scss":
/*!********************************************************!*\
  !*** ./src/components/Education/Education.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Education_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Education.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Education/Education.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Education_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Education_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Education_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Education_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Experience/Experience.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/Experience/Experience.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Experience_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Experience.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Experience/Experience.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Experience_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Experience_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Experience_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Experience_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Footer/Footer.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Footer/Footer.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Footer.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Footer/Footer.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NavBar/NavBar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/NavBar/NavBar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavBar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Projects/Projects.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Projects/Projects.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Projects.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Projects/Projects.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Services/Services.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Services/Services.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Services_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Services.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Services/Services.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Services_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Services_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Services_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Services_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Skills/Skills.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Skills/Skills.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Skills_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Skills.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Skills/Skills.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Skills_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Skills_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Skills_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Skills_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/WordCloud/WordCloud.module.scss":
/*!********************************************************!*\
  !*** ./src/components/WordCloud/WordCloud.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_WordCloud_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./WordCloud.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/WordCloud/WordCloud.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_WordCloud_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_WordCloud_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_WordCloud_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_WordCloud_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/AboutPage/AboutPage.module.scss":
/*!***************************************************!*\
  !*** ./src/pages/AboutPage/AboutPage.module.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AboutPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutPage/AboutPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/HomePage/HomePage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/HomePage/HomePage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./HomePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ProjectPage/ProjectPage.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/ProjectPage/ProjectPage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProjectPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProjectPage/ProjectPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ServicesPage/ServicesPage.module.scss":
/*!*********************************************************!*\
  !*** ./src/pages/ServicesPage/ServicesPage.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ServicesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ServicesPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ServicesPage/ServicesPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ServicesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ServicesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ServicesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ServicesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-55cbeb"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.19ac82c9355737b2de4e3cdd341f7dad.js.map