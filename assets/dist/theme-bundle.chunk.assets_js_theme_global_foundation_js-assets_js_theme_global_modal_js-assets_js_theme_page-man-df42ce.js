"use strict";
(self["webpackChunkflair_camden"] = self["webpackChunkflair_camden"] || []).push([["assets_js_theme_global_foundation_js-assets_js_theme_global_modal_js-assets_js_theme_page-man-df42ce"],{

/***/ "./assets/js/theme/global/foundation.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/global/foundation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.tab */ "./node_modules/foundation-sites/js/foundation/foundation.tab.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _reveal_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reveal-close */ "./assets/js/theme/global/reveal-close.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($element) {
  $element.foundation({
    dropdown: {
      // specify the class used for active dropdowns
      active_class: 'is-open'
    },
    reveal: {
      bg_class: 'modal-background',
      dismiss_modal_class: 'modal-close',
      close_on_background_click: true
    },
    tab: {
      active_class: 'is-active'
    }
  });
  (0,_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-reveal]', {
    $context: $element
  });
  (0,_reveal_close__WEBPACK_IMPORTED_MODULE_5__["default"])('[data-reveal-close]', {
    $context: $element
  });
}

/***/ }),

/***/ "./assets/js/theme/global/modal.js":
/*!*****************************************!*\
  !*** ./assets/js/theme/global/modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal),
/* harmony export */   "ModalEvents": () => (/* binding */ ModalEvents),
/* harmony export */   "alertModal": () => (/* binding */ alertModal),
/* harmony export */   "default": () => (/* binding */ modalFactory),
/* harmony export */   "defaultModal": () => (/* binding */ defaultModal),
/* harmony export */   "showAlertModal": () => (/* binding */ showAlertModal)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./assets/js/theme/global/foundation.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var bodyActiveClass = 'has-activeModal';
var loadingOverlayClass = 'loadingOverlay';
var modalBodyClass = 'modal-body';
var modalContentClass = 'modal-content';
var SizeClasses = {
  small: 'modal--small',
  large: 'modal--large',
  normal: ''
};
var ModalEvents = {
  close: 'close.fndtn.reveal',
  closed: 'closed.fndtn.reveal',
  open: 'open.fndtn.reveal',
  opened: 'opened.fndtn.reveal'
};
function getSizeFromModal($modal) {
  if ($modal.hasClass(SizeClasses.small)) {
    return 'small';
  }
  if ($modal.hasClass(SizeClasses.large)) {
    return 'large';
  }
  return 'normal';
}
function getViewportHeight(multipler) {
  if (multipler === void 0) {
    multipler = 1;
  }
  var viewportHeight = $(window).height();
  return viewportHeight * multipler;
}
function wrapModalBody(content) {
  var $modalBody = $('<div>');
  $modalBody.addClass(modalBodyClass).html(content);
  return $modalBody;
}
function restrainContentHeight($content) {
  var $body = $("." + modalBodyClass, $content);
  var bodyHeight = $body.outerHeight();
  var contentHeight = $content.outerHeight();
  var viewportHeight = getViewportHeight(0.9);
  var maxHeight = viewportHeight - (contentHeight - bodyHeight);
  $body.css('max-height', maxHeight);
}
function createModalContent($modal) {
  var $content = $("." + modalContentClass, $modal);
  if ($content.length === 0) {
    var existingContent = $modal.children();
    $content = $('<div>').addClass(modalContentClass).append(existingContent).appendTo($modal);
  }
  return $content;
}
function createLoadingOverlay($modal) {
  var $loadingOverlay = $("." + loadingOverlayClass, $modal);
  if ($loadingOverlay.length === 0) {
    $loadingOverlay = $('<div>').addClass(loadingOverlayClass).appendTo($modal);
  }
  return $loadingOverlay;
}

/**
 * Require foundation.reveal
 * Decorate foundation.reveal with additional methods
 * @param {jQuery} $modal
 * @param {Object} [options]
 * @param {string} [options.size]
 */
var Modal = /*#__PURE__*/function () {
  function Modal($modal, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? null : _ref$size;
    this.$modal = $modal;
    this.$content = createModalContent(this.$modal);
    this.$overlay = createLoadingOverlay(this.$modal);
    this.defaultSize = size || getSizeFromModal($modal);
    this.size = this.defaultSize;
    this.pending = false;
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalOpened = this.onModalOpened.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalClosed = this.onModalClosed.bind(this);
    this.bindEvents();

    /* STRF-2471 - Multiple Wish Lists - prevents double-firing
     * of foundation.dropdown click.fndtn.dropdown event */
    this.$modal.on('click', '.dropdown-menu-button', function (e) {
      e.stopPropagation();
    });
  }
  var _proto = Modal.prototype;
  _proto.bindEvents = function bindEvents() {
    this.$modal.on(ModalEvents.close, this.onModalClose);
    this.$modal.on(ModalEvents.closed, this.onModalClosed);
    this.$modal.on(ModalEvents.open, this.onModalOpen);
    this.$modal.on(ModalEvents.opened, this.onModalOpened);
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$modal.off(ModalEvents.close, this.onModalClose);
    this.$modal.off(ModalEvents.closed, this.onModalClosed);
    this.$modal.off(ModalEvents.open, this.onModalOpen);
    this.$modal.off(ModalEvents.opened, this.onModalOpened);
  };
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      size = _ref2.size,
      _ref2$pending = _ref2.pending,
      pending = _ref2$pending === void 0 ? true : _ref2$pending,
      _ref2$clearContent = _ref2.clearContent,
      clearContent = _ref2$clearContent === void 0 ? true : _ref2$clearContent;
    this.pending = pending;
    if (size) {
      this.size = size;
    }
    if (clearContent) {
      this.clearContent();
    }
    this.$modal.foundation('reveal', 'open');
  };
  _proto.close = function close() {
    this.$modal.foundation('reveal', 'close');
  };
  _proto.updateContent = function updateContent(content, _temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$wrap = _ref3.wrap,
      wrap = _ref3$wrap === void 0 ? false : _ref3$wrap;
    var $content = $(content);
    if (wrap) {
      $content = wrapModalBody(content);
    }
    this.pending = false;
    this.$content.html($content);
    restrainContentHeight(this.$content);
    (0,_foundation__WEBPACK_IMPORTED_MODULE_3__["default"])(this.$content);
  };
  _proto.clearContent = function clearContent() {
    this.$content.html('');
  };
  _proto.onModalClose = function onModalClose() {
    $('body').removeClass(bodyActiveClass);
  };
  _proto.onModalClosed = function onModalClosed() {
    this.size = this.defaultSize;
  };
  _proto.onModalOpen = function onModalOpen() {
    $('body').addClass(bodyActiveClass);
  };
  _proto.onModalOpened = function onModalOpened() {
    restrainContentHeight(this.$content);
  };
  _createClass(Modal, [{
    key: "pending",
    get: function get() {
      return this._pending;
    },
    set: function set(pending) {
      this._pending = pending;
      if (pending) {
        this.$overlay.show();
      } else {
        this.$overlay.hide();
      }
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(size) {
      this._size = size;
      this.$modal.removeClass(SizeClasses.small).removeClass(SizeClasses.large).addClass(SizeClasses[size] || '');
    }
  }]);
  return Modal;
}();

/**
 * Return an array of modals
 * @param {string} selector
 * @param {Object} [options]
 * @param {string} [options.size]
 * @returns {array}
 */
function modalFactory(selector, options) {
  if (selector === void 0) {
    selector = '[data-reveal]';
  }
  if (options === void 0) {
    options = {};
  }
  var $modals = $(selector, options.$context);
  return $modals.map(function (index, element) {
    var $modal = $(element);
    var instanceKey = 'modalInstance';
    var cachedModal = $modal.data(instanceKey);
    if (cachedModal instanceof Modal) {
      return cachedModal;
    }
    var modal = new Modal($modal, options);
    $modal.data(instanceKey, modal);
    return modal;
  }).toArray();
}

/*
 * Return the default page modal
 */
function defaultModal() {
  return modalFactory('#modal')[0];
}

/*
 * Return the default alert modal
 */
function alertModal() {
  return modalFactory('#alert-modal')[0];
}

/*
 * Display the given message in the default alert modal
 */
function showAlertModal(message) {
  var modal = alertModal();
  modal.open();
  modal.updateContent("<span>" + message + "</span>");
}

/***/ }),

/***/ "./assets/js/theme/global/reveal-close.js":
/*!************************************************!*\
  !*** ./assets/js/theme/global/reveal-close.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ revealCloseFactory)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var revealCloseAttr = 'revealClose';
var revealCloseSelector = "[data-" + revealCloseAttr + "]";
var revealSelector = '[data-reveal]';
var RevealClose = /*#__PURE__*/function () {
  function RevealClose($button) {
    this.$button = $button;
    this.modalId = $button.data(revealCloseAttr);
    this.onClick = this.onClick.bind(this);
    this.bindEvents();
  }
  var _proto = RevealClose.prototype;
  _proto.bindEvents = function bindEvents() {
    this.$button.on('click', this.onClick);
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$button.off('click', this.onClick);
  };
  _proto.onClick = function onClick(event) {
    var modal = this.modal;
    if (modal) {
      event.preventDefault();
      modal.close();
    }
  };
  _createClass(RevealClose, [{
    key: "modal",
    get: function get() {
      var $modal;
      if (this.modalId) {
        $modal = $("#" + this.modalId);
      } else {
        $modal = this.$button.parents(revealSelector).eq(0);
      }
      return $modal.data('modalInstance');
    }
  }]);
  return RevealClose;
}();
/*
 * Extend foundation.reveal with the ability to close a modal by clicking on any of its child element
 * with data-reveal-close attribute.
 *
 * @example
 *
 * <div data-reveal id="helloModal">
 *   <button data-reveal-close>Continue</button>
 * </div>
 *
 * <div data-reveal id="helloModal"></div>
 * <button data-reveal-close="helloModal">Continue</button>
 */
function revealCloseFactory(selector, options) {
  if (selector === void 0) {
    selector = revealCloseSelector;
  }
  if (options === void 0) {
    options = {};
  }
  var $buttons = $(selector, options.$context);
  return $buttons.map(function (index, element) {
    var $button = $(element);
    var instanceKey = revealCloseAttr + "Instance";
    var cachedButton = $button.data(instanceKey);
    if (cachedButton instanceof RevealClose) {
      return cachedButton;
    }
    var button = new RevealClose($button);
    $button.data(instanceKey, button);
    return button;
  }).toArray();
}

/***/ }),

/***/ "./assets/js/theme/page-manager.js":
/*!*****************************************!*\
  !*** ./assets/js/theme/page-manager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageManager)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var PageManager = /*#__PURE__*/function () {
  function PageManager(context) {
    this.context = context;
  }
  var _proto = PageManager.prototype;
  _proto.type = function type() {
    return this.constructor.name;
  };
  _proto.onReady = function onReady() {};
  PageManager.load = function load(context) {
    var page = new this(context);
    $(document).ready(function () {
      page.onReady.bind(page)();
    });
  };
  return PageManager;
}();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9nbG9iYWxfZm91bmRhdGlvbl9qcy1hc3NldHNfanNfdGhlbWVfZ2xvYmFsX21vZGFsX2pzLWFzc2V0c19qc190aGVtZV9wYWdlLW1hbi1kZjQyY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDUztBQUNGO0FBQ0g7QUFDcEI7QUFDYTtBQUVoRCw2QkFBZSxvQ0FBVUUsUUFBUSxFQUFFO0VBQy9CQSxRQUFRLENBQUNDLFVBQVUsQ0FBQztJQUNoQkMsUUFBUSxFQUFFO01BQ047TUFDQUMsWUFBWSxFQUFFO0lBQ2xCLENBQUM7SUFDREMsTUFBTSxFQUFFO01BQ0pDLFFBQVEsRUFBRSxrQkFBa0I7TUFDNUJDLG1CQUFtQixFQUFFLGFBQWE7TUFDbENDLHlCQUF5QixFQUFFO0lBQy9CLENBQUM7SUFDREMsR0FBRyxFQUFFO01BQ0RMLFlBQVksRUFBRTtJQUNsQjtFQUNKLENBQUMsQ0FBQztFQUVGTCxrREFBWSxDQUFDLGVBQWUsRUFBRTtJQUFFVyxRQUFRLEVBQUVUO0VBQVMsQ0FBQyxDQUFDO0VBQ3JERCx5REFBa0IsQ0FBQyxxQkFBcUIsRUFBRTtJQUFFVSxRQUFRLEVBQUVUO0VBQVMsQ0FBQyxDQUFDO0FBQ3JFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJzQztBQUV0QyxJQUFNVSxlQUFlLEdBQUcsaUJBQWlCO0FBQ3pDLElBQU1DLG1CQUFtQixHQUFHLGdCQUFnQjtBQUM1QyxJQUFNQyxjQUFjLEdBQUcsWUFBWTtBQUNuQyxJQUFNQyxpQkFBaUIsR0FBRyxlQUFlO0FBRXpDLElBQU1DLFdBQVcsR0FBRztFQUNoQkMsS0FBSyxFQUFFLGNBQWM7RUFDckJDLEtBQUssRUFBRSxjQUFjO0VBQ3JCQyxNQUFNLEVBQUU7QUFDWixDQUFDO0FBRU0sSUFBTUMsV0FBVyxHQUFHO0VBQ3ZCQyxLQUFLLEVBQUUsb0JBQW9CO0VBQzNCQyxNQUFNLEVB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QyxFQUFFO0lBQzdCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUFBUCxXQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vZmxhaXItY2FtZGVuLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL3JldmVhbC1jbG9zZS5qcyIsIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvcGFnZS1tYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5kcm9wZG93bic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnRhYic7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHJldmVhbENsb3NlRmFjdG9yeSBmcm9tICcuL3JldmVhbC1jbG9zZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgkZWxlbWVudCkge1xuICAgICRlbGVtZW50LmZvdW5kYXRpb24oe1xuICAgICAgICBkcm9wZG93bjoge1xuICAgICAgICAgICAgLy8gc3BlY2lmeSB0aGUgY2xhc3MgdXNlZCBmb3IgYWN0aXZlIGRyb3Bkb3duc1xuICAgICAgICAgICAgYWN0aXZlX2NsYXNzOiAnaXMtb3BlbicsXG4gICAgICAgIH0sXG4gICAgICAgIHJldmVhbDoge1xuICAgICAgICAgICAgYmdfY2xhc3M6ICdtb2RhbC1iYWNrZ3JvdW5kJyxcbiAgICAgICAgICAgIGRpc21pc3NfbW9kYWxfY2xhc3M6ICdtb2RhbC1jbG9zZScsXG4gICAgICAgICAgICBjbG9zZV9vbl9iYWNrZ3JvdW5kX2NsaWNrOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB0YWI6IHtcbiAgICAgICAgICAgIGFjdGl2ZV9jbGFzczogJ2lzLWFjdGl2ZScsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBtb2RhbEZhY3RvcnkoJ1tkYXRhLXJldmVhbF0nLCB7ICRjb250ZXh0OiAkZWxlbWVudCB9KTtcbiAgICByZXZlYWxDbG9zZUZhY3RvcnkoJ1tkYXRhLXJldmVhbC1jbG9zZV0nLCB7ICRjb250ZXh0OiAkZWxlbWVudCB9KTtcbn1cbiIsImltcG9ydCBmb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbmNvbnN0IGJvZHlBY3RpdmVDbGFzcyA9ICdoYXMtYWN0aXZlTW9kYWwnO1xuY29uc3QgbG9hZGluZ092ZXJsYXlDbGFzcyA9ICdsb2FkaW5nT3ZlcmxheSc7XG5jb25zdCBtb2RhbEJvZHlDbGFzcyA9ICdtb2RhbC1ib2R5JztcbmNvbnN0IG1vZGFsQ29udGVudENsYXNzID0gJ21vZGFsLWNvbnRlbnQnO1xuXG5jb25zdCBTaXplQ2xhc3NlcyA9IHtcbiAgICBzbWFsbDogJ21vZGFsLS1zbWFsbCcsXG4gICAgbGFyZ2U6ICdtb2RhbC0tbGFyZ2UnLFxuICAgIG5vcm1hbDogJycsXG59O1xuXG5leHBvcnQgY29uc3QgTW9kYWxFdmVudHMgPSB7XG4gICAgY2xvc2U6ICdjbG9zZS5mbmR0bi5yZXZlYWwnLFxuICAgIGNsb3NlZDogJ2Nsb3NlZC5mbmR0bi5yZXZlYWwnLFxuICAgIG9wZW46ICdvcGVuLmZuZHRuLnJldmVhbCcsXG4gICAgb3BlbmVkOiAnb3BlbmVkLmZuZHRuLnJldmVhbCcsXG59O1xuXG5mdW5jdGlvbiBnZXRTaXplRnJvbU1vZGFsKCRtb2RhbCkge1xuICAgIGlmICgkbW9kYWwuaGFzQ2xhc3MoU2l6ZUNsYXNzZXMuc21hbGwpKSB7XG4gICAgICAgIHJldHVybiAnc21hbGwnO1xuICAgIH1cblxuICAgIGlmICgkbW9kYWwuaGFzQ2xhc3MoU2l6ZUNsYXNzZXMubGFyZ2UpKSB7XG4gICAgICAgIHJldHVybiAnbGFyZ2UnO1xuICAgIH1cblxuICAgIHJldHVybiAnbm9ybWFsJztcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRIZWlnaHQobXVsdGlwbGVyID0gMSkge1xuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXG4gICAgcmV0dXJuIHZpZXdwb3J0SGVpZ2h0ICogbXVsdGlwbGVyO1xufVxuXG5mdW5jdGlvbiB3cmFwTW9kYWxCb2R5KGNvbnRlbnQpIHtcbiAgICBjb25zdCAkbW9kYWxCb2R5ID0gJCgnPGRpdj4nKTtcblxuICAgICRtb2RhbEJvZHlcbiAgICAgICAgLmFkZENsYXNzKG1vZGFsQm9keUNsYXNzKVxuICAgICAgICAuaHRtbChjb250ZW50KTtcblxuICAgIHJldHVybiAkbW9kYWxCb2R5O1xufVxuXG5mdW5jdGlvbiByZXN0cmFpbkNvbnRlbnRIZWlnaHQoJGNvbnRlbnQpIHtcbiAgICBjb25zdCAkYm9keSA9ICQoYC4ke21vZGFsQm9keUNsYXNzfWAsICRjb250ZW50KTtcbiAgICBjb25zdCBib2R5SGVpZ2h0ID0gJGJvZHkub3V0ZXJIZWlnaHQoKTtcbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub3V0ZXJIZWlnaHQoKTtcbiAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IGdldFZpZXdwb3J0SGVpZ2h0KDAuOSk7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gdmlld3BvcnRIZWlnaHQgLSAoY29udGVudEhlaWdodCAtIGJvZHlIZWlnaHQpO1xuXG4gICAgJGJvZHkuY3NzKCdtYXgtaGVpZ2h0JywgbWF4SGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxDb250ZW50KCRtb2RhbCkge1xuICAgIGxldCAkY29udGVudCA9ICQoYC4ke21vZGFsQ29udGVudENsYXNzfWAsICRtb2RhbCk7XG5cbiAgICBpZiAoJGNvbnRlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQ29udGVudCA9ICRtb2RhbC5jaGlsZHJlbigpO1xuXG4gICAgICAgICRjb250ZW50ID0gJCgnPGRpdj4nKVxuICAgICAgICAgICAgLmFkZENsYXNzKG1vZGFsQ29udGVudENsYXNzKVxuICAgICAgICAgICAgLmFwcGVuZChleGlzdGluZ0NvbnRlbnQpXG4gICAgICAgICAgICAuYXBwZW5kVG8oJG1vZGFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvYWRpbmdPdmVybGF5KCRtb2RhbCkge1xuICAgIGxldCAkbG9hZGluZ092ZXJsYXkgPSAkKGAuJHtsb2FkaW5nT3ZlcmxheUNsYXNzfWAsICRtb2RhbCk7XG5cbiAgICBpZiAoJGxvYWRpbmdPdmVybGF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkbG9hZGluZ092ZXJsYXkgPSAkKCc8ZGl2PicpXG4gICAgICAgICAgICAuYWRkQ2xhc3MobG9hZGluZ092ZXJsYXlDbGFzcylcbiAgICAgICAgICAgIC5hcHBlbmRUbygkbW9kYWwpO1xuICAgIH1cblxuICAgIHJldHVybiAkbG9hZGluZ092ZXJsYXk7XG59XG5cbi8qKlxuICogUmVxdWlyZSBmb3VuZGF0aW9uLnJldmVhbFxuICogRGVjb3JhdGUgZm91bmRhdGlvbi5yZXZlYWwgd2l0aCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kYWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaXplXVxuICovXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIGNvbnN0cnVjdG9yKCRtb2RhbCwge1xuICAgICAgICBzaXplID0gbnVsbCxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy4kbW9kYWwgPSAkbW9kYWw7XG4gICAgICAgIHRoaXMuJGNvbnRlbnQgPSBjcmVhdGVNb2RhbENvbnRlbnQodGhpcy4kbW9kYWwpO1xuICAgICAgICB0aGlzLiRvdmVybGF5ID0gY3JlYXRlTG9hZGluZ092ZXJsYXkodGhpcy4kbW9kYWwpO1xuICAgICAgICB0aGlzLmRlZmF1bHRTaXplID0gc2l6ZSB8fCBnZXRTaXplRnJvbU1vZGFsKCRtb2RhbCk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGVmYXVsdFNpemU7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Nb2RhbE9wZW4gPSB0aGlzLm9uTW9kYWxPcGVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb2RhbE9wZW5lZCA9IHRoaXMub25Nb2RhbE9wZW5lZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW9kYWxDbG9zZSA9IHRoaXMub25Nb2RhbENsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb2RhbENsb3NlZCA9IHRoaXMub25Nb2RhbENsb3NlZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8qIFNUUkYtMjQ3MSAtIE11bHRpcGxlIFdpc2ggTGlzdHMgLSBwcmV2ZW50cyBkb3VibGUtZmlyaW5nXG4gICAgICAgICAqIG9mIGZvdW5kYXRpb24uZHJvcGRvd24gY2xpY2suZm5kdG4uZHJvcGRvd24gZXZlbnQgKi9cbiAgICAgICAgdGhpcy4kbW9kYWwub24oJ2NsaWNrJywgJy5kcm9wZG93bi1tZW51LWJ1dHRvbicsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHBlbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZW5kaW5nO1xuICAgIH1cblxuICAgIHNldCBwZW5kaW5nKHBlbmRpbmcpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZyA9IHBlbmRpbmc7XG5cbiAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuXG4gICAgc2V0IHNpemUoc2l6ZSkge1xuICAgICAgICB0aGlzLl9zaXplID0gc2l6ZTtcblxuICAgICAgICB0aGlzLiRtb2RhbFxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFNpemVDbGFzc2VzLnNtYWxsKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFNpemVDbGFzc2VzLmxhcmdlKVxuICAgICAgICAgICAgLmFkZENsYXNzKFNpemVDbGFzc2VzW3NpemVdIHx8ICcnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5jbG9zZSwgdGhpcy5vbk1vZGFsQ2xvc2UpO1xuICAgICAgICB0aGlzLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5jbG9zZWQsIHRoaXMub25Nb2RhbENsb3NlZCk7XG4gICAgICAgIHRoaXMuJG1vZGFsLm9uKE1vZGFsRXZlbnRzLm9wZW4sIHRoaXMub25Nb2RhbE9wZW4pO1xuICAgICAgICB0aGlzLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5vcGVuZWQsIHRoaXMub25Nb2RhbE9wZW5lZCk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRtb2RhbC5vZmYoTW9kYWxFdmVudHMuY2xvc2UsIHRoaXMub25Nb2RhbENsb3NlKTtcbiAgICAgICAgdGhpcy4kbW9kYWwub2ZmKE1vZGFsRXZlbnRzLmNsb3NlZCwgdGhpcy5vbk1vZGFsQ2xvc2VkKTtcbiAgICAgICAgdGhpcy4kbW9kYWwub2ZmKE1vZGFsRXZlbnRzLm9wZW4sIHRoaXMub25Nb2RhbE9wZW4pO1xuICAgICAgICB0aGlzLiRtb2RhbC5vZmYoTW9kYWxFdmVudHMub3BlbmVkLCB0aGlzLm9uTW9kYWxPcGVuZWQpO1xuICAgIH1cblxuICAgIG9wZW4oe1xuICAgICAgICBzaXplLFxuICAgICAgICBwZW5kaW5nID0gdHJ1ZSxcbiAgICAgICAgY2xlYXJDb250ZW50ID0gdHJ1ZSxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gcGVuZGluZztcblxuICAgICAgICBpZiAoc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGVhckNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJDb250ZW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRtb2RhbC5mb3VuZGF0aW9uKCdyZXZlYWwnLCAnb3BlbicpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLiRtb2RhbC5mb3VuZGF0aW9uKCdyZXZlYWwnLCAnY2xvc2UnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDb250ZW50KGNvbnRlbnQsIHsgd3JhcCA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICBsZXQgJGNvbnRlbnQgPSAkKGNvbnRlbnQpO1xuXG4gICAgICAgIGlmICh3cmFwKSB7XG4gICAgICAgICAgICAkY29udGVudCA9IHdyYXBNb2RhbEJvZHkoY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kY29udGVudC5odG1sKCRjb250ZW50KTtcblxuICAgICAgICByZXN0cmFpbkNvbnRlbnRIZWlnaHQodGhpcy4kY29udGVudCk7XG4gICAgICAgIGZvdW5kYXRpb24odGhpcy4kY29udGVudCk7XG4gICAgfVxuXG4gICAgY2xlYXJDb250ZW50KCkge1xuICAgICAgICB0aGlzLiRjb250ZW50Lmh0bWwoJycpO1xuICAgIH1cblxuICAgIG9uTW9kYWxDbG9zZSgpIHtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKGJvZHlBY3RpdmVDbGFzcyk7XG4gICAgfVxuXG4gICAgb25Nb2RhbENsb3NlZCgpIHtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kZWZhdWx0U2l6ZTtcbiAgICB9XG5cbiAgICBvbk1vZGFsT3BlbigpIHtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKGJvZHlBY3RpdmVDbGFzcyk7XG4gICAgfVxuXG4gICAgb25Nb2RhbE9wZW5lZCgpIHtcbiAgICAgICAgcmVzdHJhaW5Db250ZW50SGVpZ2h0KHRoaXMuJGNvbnRlbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgb2YgbW9kYWxzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaXplXVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbEZhY3Rvcnkoc2VsZWN0b3IgPSAnW2RhdGEtcmV2ZWFsXScsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRtb2RhbHMgPSAkKHNlbGVjdG9yLCBvcHRpb25zLiRjb250ZXh0KTtcblxuICAgIHJldHVybiAkbW9kYWxzLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VLZXkgPSAnbW9kYWxJbnN0YW5jZSc7XG4gICAgICAgIGNvbnN0IGNhY2hlZE1vZGFsID0gJG1vZGFsLmRhdGEoaW5zdGFuY2VLZXkpO1xuXG4gICAgICAgIGlmIChjYWNoZWRNb2RhbCBpbnN0YW5jZW9mIE1vZGFsKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkTW9kYWw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgkbW9kYWwsIG9wdGlvbnMpO1xuXG4gICAgICAgICRtb2RhbC5kYXRhKGluc3RhbmNlS2V5LCBtb2RhbCk7XG5cbiAgICAgICAgcmV0dXJuIG1vZGFsO1xuICAgIH0pLnRvQXJyYXkoKTtcbn1cblxuLypcbiAqIFJldHVybiB0aGUgZGVmYXVsdCBwYWdlIG1vZGFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TW9kYWwoKSB7XG4gICAgcmV0dXJuIG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF07XG59XG5cbi8qXG4gKiBSZXR1cm4gdGhlIGRlZmF1bHQgYWxlcnQgbW9kYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0TW9kYWwoKSB7XG4gICAgcmV0dXJuIG1vZGFsRmFjdG9yeSgnI2FsZXJ0LW1vZGFsJylbMF07XG59XG5cbi8qXG4gKiBEaXNwbGF5IHRoZSBnaXZlbiBtZXNzYWdlIGluIHRoZSBkZWZhdWx0IGFsZXJ0IG1vZGFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxlcnRNb2RhbChtZXNzYWdlKSB7XG4gICAgY29uc3QgbW9kYWwgPSBhbGVydE1vZGFsKCk7XG4gICAgbW9kYWwub3BlbigpO1xuICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoYDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+YCk7XG59XG4iLCJjb25zdCByZXZlYWxDbG9zZUF0dHIgPSAncmV2ZWFsQ2xvc2UnO1xuY29uc3QgcmV2ZWFsQ2xvc2VTZWxlY3RvciA9IGBbZGF0YS0ke3JldmVhbENsb3NlQXR0cn1dYDtcbmNvbnN0IHJldmVhbFNlbGVjdG9yID0gJ1tkYXRhLXJldmVhbF0nO1xuXG5jbGFzcyBSZXZlYWxDbG9zZSB7XG4gICAgY29uc3RydWN0b3IoJGJ1dHRvbikge1xuICAgICAgICB0aGlzLiRidXR0b24gPSAkYnV0dG9uO1xuICAgICAgICB0aGlzLm1vZGFsSWQgPSAkYnV0dG9uLmRhdGEocmV2ZWFsQ2xvc2VBdHRyKTtcblxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgbW9kYWwoKSB7XG4gICAgICAgIGxldCAkbW9kYWw7XG5cbiAgICAgICAgaWYgKHRoaXMubW9kYWxJZCkge1xuICAgICAgICAgICAgJG1vZGFsID0gJChgIyR7dGhpcy5tb2RhbElkfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1vZGFsID0gdGhpcy4kYnV0dG9uLnBhcmVudHMocmV2ZWFsU2VsZWN0b3IpLmVxKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICRtb2RhbC5kYXRhKCdtb2RhbEluc3RhbmNlJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kYnV0dG9uLm9uKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRidXR0b24ub2ZmKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgICBjb25zdCB7IG1vZGFsIH0gPSB0aGlzO1xuXG4gICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLypcbiAqIEV4dGVuZCBmb3VuZGF0aW9uLnJldmVhbCB3aXRoIHRoZSBhYmlsaXR5IHRvIGNsb3NlIGEgbW9kYWwgYnkgY2xpY2tpbmcgb24gYW55IG9mIGl0cyBjaGlsZCBlbGVtZW50XG4gKiB3aXRoIGRhdGEtcmV2ZWFsLWNsb3NlIGF0dHJpYnV0ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIDxkaXYgZGF0YS1yZXZlYWwgaWQ9XCJoZWxsb01vZGFsXCI+XG4gKiAgIDxidXR0b24gZGF0YS1yZXZlYWwtY2xvc2U+Q29udGludWU8L2J1dHRvbj5cbiAqIDwvZGl2PlxuICpcbiAqIDxkaXYgZGF0YS1yZXZlYWwgaWQ9XCJoZWxsb01vZGFsXCI+PC9kaXY+XG4gKiA8YnV0dG9uIGRhdGEtcmV2ZWFsLWNsb3NlPVwiaGVsbG9Nb2RhbFwiPkNvbnRpbnVlPC9idXR0b24+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldmVhbENsb3NlRmFjdG9yeShzZWxlY3RvciA9IHJldmVhbENsb3NlU2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRidXR0b25zID0gJChzZWxlY3Rvciwgb3B0aW9ucy4kY29udGV4dCk7XG5cbiAgICByZXR1cm4gJGJ1dHRvbnMubWFwKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkYnV0dG9uID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VLZXkgPSBgJHtyZXZlYWxDbG9zZUF0dHJ9SW5zdGFuY2VgO1xuICAgICAgICBjb25zdCBjYWNoZWRCdXR0b24gPSAkYnV0dG9uLmRhdGEoaW5zdGFuY2VLZXkpO1xuXG4gICAgICAgIGlmIChjYWNoZWRCdXR0b24gaW5zdGFuY2VvZiBSZXZlYWxDbG9zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZEJ1dHRvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBSZXZlYWxDbG9zZSgkYnV0dG9uKTtcblxuICAgICAgICAkYnV0dG9uLmRhdGEoaW5zdGFuY2VLZXksIGJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9KS50b0FycmF5KCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZChjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBuZXcgdGhpcyhjb250ZXh0KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICBwYWdlLm9uUmVhZHkuYmluZChwYWdlKSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsibW9kYWxGYWN0b3J5IiwicmV2ZWFsQ2xvc2VGYWN0b3J5IiwiJGVsZW1lbnQiLCJmb3VuZGF0aW9uIiwiZHJvcGRvd24iLCJhY3RpdmVfY2xhc3MiLCJyZXZlYWwiLCJiZ19jbGFzcyIsImRpc21pc3NfbW9kYWxfY2xhc3MiLCJjbG9zZV9vbl9iYWNrZ3JvdW5kX2NsaWNrIiwidGFiIiwiJGNvbnRleHQiLCJib2R5QWN0aXZlQ2xhc3MiLCJsb2FkaW5nT3ZlcmxheUNsYXNzIiwibW9kYWxCb2R5Q2xhc3MiLCJtb2RhbENvbnRlbnRDbGFzcyIsIlNpemVDbGFzc2VzIiwic21hbGwiLCJsYXJnZSIsIm5vcm1hbCIsIk1vZGFsRXZlbnRzIiwiY2xvc2UiLCJjbG9zZWQiLCJvcGVuIiwib3BlbmVkIiwiZ2V0U2l6ZUZyb21Nb2RhbCIsIiRtb2RhbCIsImhhc0NsYXNzIiwiZ2V0Vmlld3BvcnRIZWlnaHQiLCJtdWx0aXBsZXIiLCJ2aWV3cG9ydEhlaWdodCIsIiQiLCJ3aW5kb3ciLCJoZWlnaHQiLCJ3cmFwTW9kYWxCb2R5IiwiY29udGVudCIsIiRtb2RhbEJvZHkiLCJhZGRDbGFzcyIsImh0bWwiLCJyZXN0cmFpbkNvbnRlbnRIZWlnaHQiLCIkY29udGVudCIsIiRib2R5IiwiYm9keUhlaWdodCIsIm91dGVySGVpZ2h0IiwiY29udGVudEhlaWdodCIsIm1heEhlaWdodCIsImNzcyIsImNyZWF0ZU1vZGFsQ29udGVudCIsImxlbmd0aCIsImV4aXN0aW5nQ29udGVudCIsImNoaWxkcmVuIiwiYXBwZW5kIiwiYXBwZW5kVG8iLCJjcmVhdGVMb2FkaW5nT3ZlcmxheSIsIiRsb2FkaW5nT3ZlcmxheSIsIk1vZGFsIiwiX3RlbXAiLCJfcmVmIiwiX3JlZiRzaXplIiwic2l6ZSIsIiRvdmVybGF5IiwiZGVmYXVsdFNpemUiLCJwZW5kaW5nIiwib25Nb2RhbE9wZW4iLCJiaW5kIiwib25Nb2RhbE9wZW5lZCIsIm9uTW9kYWxDbG9zZSIsIm9uTW9kYWxDbG9zZWQiLCJiaW5kRXZlbnRzIiwib24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiX3Byb3RvIiwicHJvdG90eXBlIiwidW5iaW5kRXZlbnRzIiwib2ZmIiwiX3RlbXAyIiwiX3JlZjIiLCJfcmVmMiRwZW5kaW5nIiwiX3JlZjIkY2xlYXJDb250ZW50IiwiY2xlYXJDb250ZW50IiwidXBkYXRlQ29udGVudCIsIl90ZW1wMyIsIl9yZWYzIiwiX3JlZjMkd3JhcCIsIndyYXAiLCJyZW1vdmVDbGFzcyIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdldCIsIl9wZW5kaW5nIiwic2V0Iiwic2hvdyIsImhpZGUiLCJfc2l6ZSIsInNlbGVjdG9yIiwib3B0aW9ucyIsIiRtb2RhbHMiLCJtYXAiLCJpbmRleCIsImVsZW1lbnQiLCJpbnN0YW5jZUtleSIsImNhY2hlZE1vZGFsIiwiZGF0YSIsIm1vZGFsIiwidG9BcnJheSIsImRlZmF1bHRNb2RhbCIsImFsZXJ0TW9kYWwiLCJzaG93QWxlcnRNb2RhbCIsIm1lc3NhZ2UiLCJyZXZlYWxDbG9zZUF0dHIiLCJyZXZlYWxDbG9zZVNlbGVjdG9yIiwicmV2ZWFsU2VsZWN0b3IiLCJSZXZlYWxDbG9zZSIsIiRidXR0b24iLCJtb2RhbElkIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRzIiwiZXEiLCIkYnV0dG9ucyIsImNhY2hlZEJ1dHRvbiIsImJ1dHRvbiIsIlBhZ2VNYW5hZ2VyIiwiY29udGV4dCIsInR5cGUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJvblJlYWR5IiwibG9hZCIsInBhZ2UiLCJkb2N1bWVudCIsInJlYWR5IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=
