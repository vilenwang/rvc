(self["webpackChunkflair_camden"] = self["webpackChunkflair_camden"] || []).push([["assets_js_theme_wishlist_js"],{

/***/ "./assets/js/theme/common/nod-functions/min-max-validate.js":
/*!******************************************************************!*\
  !*** ./assets/js/theme/common/nod-functions/min-max-validate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNaN */ "./node_modules/lodash/isNaN.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function minMaxValidate(minInputSelector, maxInputSelector) {
  function validate(cb) {
    var minValue = parseFloat($(minInputSelector).val());
    var maxValue = parseFloat($(maxInputSelector).val());
    if (maxValue > minValue || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(maxValue) || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(minValue)) {
      return cb(true);
    }
    return cb(false);
  }
  return validate;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minMaxValidate);

/***/ }),

/***/ "./assets/js/theme/common/nod.js":
/*!***************************************!*\
  !*** ./assets/js/theme/common/nod.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nod-validate */ "./node_modules/nod-validate/nod.js");
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nod_validate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nod-functions/min-max-validate */ "./assets/js/theme/common/nod-functions/min-max-validate.js");



// Hook our SCSS framework form field status classes into the nod validation system before use
(nod_validate__WEBPACK_IMPORTED_MODULE_0___default().classes.errorClass) = 'form-field--error';
(nod_validate__WEBPACK_IMPORTED_MODULE_0___default().classes.successClass) = 'form-field--success';
(nod_validate__WEBPACK_IMPORTED_MODULE_0___default().classes.errorMessageClass) = 'form-inlineMessage';

// Register validate functions
(nod_validate__WEBPACK_IMPORTED_MODULE_0___default().checkFunctions["min-max"]) = _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((nod_validate__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./assets/js/theme/f/grid-list-switcher.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/f/grid-list-switcher.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var displayMode = js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get('categoryView') || context.displayMode;
  $(".switch-" + displayMode).addClass('switch-active');
  function switchDisplay(mode) {
    $('.category, .page, .productCards, .productCard').removeClass('category--list page--list productCards--list productCard--list productCards--grid productCard--grid');
    $('.category').addClass("category--" + mode);
    $('.page').addClass("page--" + mode);
    $('.productCards').addClass("productCards--" + mode);
    $('.productCard').addClass("productCard--" + mode);
  }
  switchDisplay(displayMode);
  $('[data-display-switch]').on('click', function (event) {
    event.preventDefault();
    var displayType = $(event.currentTarget).attr('data-display-switch');
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set('categoryView', displayType, {
      expires: 30
    });
    $('[data-display-switch]').removeClass('switch-active');
    $(event.currentTarget).addClass('switch-active');
    switchDisplay(displayType);
  });
}

/***/ }),

/***/ "./assets/js/theme/wishlist.js":
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WishList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./f/grid-list-switcher */ "./assets/js/theme/f/grid-list-switcher.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var WishList = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(WishList, _PageManager);
  function WishList(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _assertThisInitialized(_this) || _assertThisInitialized(_this);
  }

  /**
   * Creates a confirm box before deleting all wish lists
   */
  var _proto = WishList.prototype;
  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;
    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);
      if (confirmed) {
        return true;
      }
      event.preventDefault();
    });
  };
  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;
    this.addWishlistValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: '.wishlist-form input[type="submit"]'
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: this.context.enterWishlistNameError
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();
      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.wishListHandler = function wishListHandler() {
    var _this4 = this;
    $('body').on('click', '[data-wishlist]', function (event) {
      var wishListUrl = event.currentTarget.href;
      var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.api.getPage(wishListUrl, _this4.options, function (err, content) {
        if (err) {
          return modal.updateContent(err);
        }
        modal.updateContent(content, {
          wrap: true
        });
        var $wishlistForm = $('.wishlist-form', modal.$content);
        _this4.registerAddWishListValidation($wishlistForm);
      });
    });
  };
  _proto.onReady = function onReady() {
    var clipboard = new (clipboard__WEBPACK_IMPORTED_MODULE_3___default())('.button--copy');
    var $addWishListForm = $('.wishlist-form');
    clipboard.on('success', function () {
      $('.list-copied-feedback').text('Link copied').fadeIn('fast').delay(1000).fadeOut('fast');
    });
    clipboard.on('error', function () {
      $('.list-copied-feedback').text('Press Ctrl+C to copy').fadeIn('fast').delay(1000).fadeOut('fast');
    });
    (0,_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context);
    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }
    this.wishlistDeleteConfirm();
    this.wishListHandler();
  };
  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_5__["default"]);


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV93aXNobGlzdF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLGNBQWNBLENBQUNDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRTtFQUN4RCxTQUFTQyxRQUFRQSxDQUFDQyxFQUFFLEVBQUU7SUFDbEIsSUFBTUMsUUFBUSxHQUFHQyxVQUFVLENBQUNDLENBQUMsQ0FBQ04sZ0JBQWdCLENBQUMsQ0FBQ08sR0FBRyxFQUFFLENBQUM7SUFDdEQsSUFBTUMsUUFBUSxHQUFHSCxVQUFVLENBQUNDLENBQUMsQ0FBQ0wsZ0JBQWdCLENBQUMsQ0FBQ00sR0FBRyxFQUFFLENBQUM7SUFFdEQsSUFBSUMsUUFBUSxHQUFHSixRQUFRLElBQUlLLG1EQUFBLENBQVFELFFBQVEsQ0FBQyxJQUFJQyxtREFBQSxDQUFRTCxRQUFRLENBQUMsRUFBRTtNQUMvRCxPQUFPRCxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ25CO0lBRUEsT0FBT0EsRUFBRSxDQUFDLEtBQUssQ0FBQztFQUNwQjtFQUVBLE9BQU9ELFFBQVE7QUFDbkI7QUFFQSxpRUFBZUgsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJFO0FBQytCOztBQUU5RDtBQUNBVyx3RUFBc0IsR0FBRyxtQkFBbUI7QUFDNUNBLDBFQUF3QixHQUFHLHFCQUFxQjtBQUNoREEsK0VBQTZCLEdBQUcsb0JBQW9COztBQUVwRDtBQUNBQSwrRUFBNkIsR0FBR1gsdUVBQWM7QUFFOUMsaUVBQWVXLHFEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYYztBQUVoQyw2QkFBZSxvQ0FBVU8sT0FBTyxFQUFFO0VBQzlCLElBQU1DLFdBQVcsR0FBR0Ysb0RBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSUMsT0FBTyxDQUFDQyxXQUFXO0VBQ3RFWixDQUFDLGNBQVlZLFdBQVcsQ0FBRyxDQUFDRSxRQUFRLENBQUMsZUFBZSxDQUFDO0VBRXJELFNBQVNDLGFBQWFBLENBQUND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YW1kZW4vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC1mdW5jdGlvbnMvbWluLW1heC12YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC5qcyIsIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvZi9ncmlkLWxpc3Qtc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vZmxhaXItY2FtZGVuLy4vYXNzZXRzL2pzL3RoZW1lL3dpc2hsaXN0LmpzIiwid2VicGFjazovL2ZsYWlyLWNhbWRlbi8uL25vZGVfbW9kdWxlcy9qcy1jb29raWUvc3JjL2pzLmNvb2tpZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5mdW5jdGlvbiBtaW5NYXhWYWxpZGF0ZShtaW5JbnB1dFNlbGVjdG9yLCBtYXhJbnB1dFNlbGVjdG9yKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoY2IpIHtcbiAgICAgICAgY29uc3QgbWluVmFsdWUgPSBwYXJzZUZsb2F0KCQobWluSW5wdXRTZWxlY3RvcikudmFsKCkpO1xuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IHBhcnNlRmxvYXQoJChtYXhJbnB1dFNlbGVjdG9yKS52YWwoKSk7XG5cbiAgICAgICAgaWYgKG1heFZhbHVlID4gbWluVmFsdWUgfHwgXy5pc05hTihtYXhWYWx1ZSkgfHwgXy5pc05hTihtaW5WYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYihmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaW5NYXhWYWxpZGF0ZTtcbiIsImltcG9ydCBub2QgZnJvbSAnbm9kLXZhbGlkYXRlJztcbmltcG9ydCBtaW5NYXhWYWxpZGF0ZSBmcm9tICcuL25vZC1mdW5jdGlvbnMvbWluLW1heC12YWxpZGF0ZSc7XG5cbi8vIEhvb2sgb3VyIFNDU1MgZnJhbWV3b3JrIGZvcm0gZmllbGQgc3RhdHVzIGNsYXNzZXMgaW50byB0aGUgbm9kIHZhbGlkYXRpb24gc3lzdGVtIGJlZm9yZSB1c2Vcbm5vZC5jbGFzc2VzLmVycm9yQ2xhc3MgPSAnZm9ybS1maWVsZC0tZXJyb3InO1xubm9kLmNsYXNzZXMuc3VjY2Vzc0NsYXNzID0gJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnO1xubm9kLmNsYXNzZXMuZXJyb3JNZXNzYWdlQ2xhc3MgPSAnZm9ybS1pbmxpbmVNZXNzYWdlJztcblxuLy8gUmVnaXN0ZXIgdmFsaWRhdGUgZnVuY3Rpb25zXG5ub2QuY2hlY2tGdW5jdGlvbnNbJ21pbi1tYXgnXSA9IG1pbk1heFZhbGlkYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBub2Q7XG4iLCJpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IGRpc3BsYXlNb2RlID0gQ29va2llcy5nZXQoJ2NhdGVnb3J5VmlldycpIHx8IGNvbnRleHQuZGlzcGxheU1vZGU7XG4gICAgJChgLnN3aXRjaC0ke2Rpc3BsYXlNb2RlfWApLmFkZENsYXNzKCdzd2l0Y2gtYWN0aXZlJyk7XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hEaXNwbGF5KG1vZGUpIHtcbiAgICAgICAgJCgnLmNhdGVnb3J5LCAucGFnZSwgLnByb2R1Y3RDYXJkcywgLnByb2R1Y3RDYXJkJykucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LS1saXN0IHBhZ2UtLWxpc3QgcHJvZHVjdENhcmRzLS1saXN0IHByb2R1Y3RDYXJkLS1saXN0IHByb2R1Y3RDYXJkcy0tZ3JpZCBwcm9kdWN0Q2FyZC0tZ3JpZCcpO1xuXG4gICAgICAgICQoJy5jYXRlZ29yeScpLmFkZENsYXNzKGBjYXRlZ29yeS0tJHttb2RlfWApO1xuICAgICAgICAkKCcucGFnZScpLmFkZENsYXNzKGBwYWdlLS0ke21vZGV9YCk7XG4gICAgICAgICQoJy5wcm9kdWN0Q2FyZHMnKS5hZGRDbGFzcyhgcHJvZHVjdENhcmRzLS0ke21vZGV9YCk7XG4gICAgICAgICQoJy5wcm9kdWN0Q2FyZCcpLmFkZENsYXNzKGBwcm9kdWN0Q2FyZC0tJHttb2RlfWApO1xuICAgIH1cblxuICAgIHN3aXRjaERpc3BsYXkoZGlzcGxheU1vZGUpO1xuXG4gICAgJCgnW2RhdGEtZGlzcGxheS1zd2l0Y2hdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlUeXBlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKCdkYXRhLWRpc3BsYXktc3dpdGNoJyk7XG5cbiAgICAgICAgQ29va2llcy5zZXQoJ2NhdGVnb3J5VmlldycsIGRpc3BsYXlUeXBlLCB7IGV4cGlyZXM6IDMwIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWRpc3BsYXktc3dpdGNoXScpLnJlbW92ZUNsYXNzKCdzd2l0Y2gtYWN0aXZlJyk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ3N3aXRjaC1hY3RpdmUnKTtcblxuICAgICAgICBzd2l0Y2hEaXNwbGF5KGRpc3BsYXlUeXBlKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5yZXZlYWwnO1xuaW1wb3J0IENsaXBib2FyZEpTIGZyb20gJ2NsaXBib2FyZCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGdyaWRTd2l0Y2hlciBmcm9tICcuL2YvZ3JpZC1saXN0LXN3aXRjaGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lzaExpc3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2FjY291bnQvYWRkLXdpc2hsaXN0JyxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29uZmlybSBib3ggYmVmb3JlIGRlbGV0aW5nIGFsbCB3aXNoIGxpc3RzXG4gICAgICovXG4gICAgd2lzaGxpc3REZWxldGVDb25maXJtKCkge1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXdpc2hsaXN0LWRlbGV0ZV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybSh0aGlzLmNvbnRleHQud2lzaGxpc3REZWxldGUpO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNobGlzdEZvcm0pIHtcbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbbmFtZT1cIndpc2hsaXN0bmFtZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlcldpc2hsaXN0TmFtZUVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGFkZFdpc2hsaXN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB3aXNoTGlzdEhhbmRsZXIoKSB7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtd2lzaGxpc3RdJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2lzaExpc3RVcmwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmhyZWY7XG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKHdpc2hMaXN0VXJsLCB0aGlzLm9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RhbC51cGRhdGVDb250ZW50KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChjb250ZW50LCB7IHdyYXA6IHRydWUgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkd2lzaGxpc3RGb3JtID0gJCgnLndpc2hsaXN0LWZvcm0nLCBtb2RhbC4kY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCR3aXNobGlzdEZvcm0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUygnLmJ1dHRvbi0tY29weScpO1xuICAgICAgICBjb25zdCAkYWRkV2lzaExpc3RGb3JtID0gJCgnLndpc2hsaXN0LWZvcm0nKTtcblxuICAgICAgICBjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCAoKSA9PiB7XG4gICAgICAgICAgICAkKCcubGlzdC1jb3BpZWQtZmVlZGJhY2snKS50ZXh0KCdMaW5rIGNvcGllZCcpLmZhZGVJbignZmFzdCcpLmRlbGF5KDEwMDApLmZhZGVPdXQoJ2Zhc3QnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2xpcGJvYXJkLm9uKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgICQoJy5saXN0LWNvcGllZC1mZWVkYmFjaycpLnRleHQoJ1ByZXNzIEN0cmwrQyB0byBjb3B5JykuZmFkZUluKCdmYXN0JykuZGVsYXkoMTAwMCkuZmFkZU91dCgnZmFzdCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBncmlkU3dpdGNoZXIodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAoJGFkZFdpc2hMaXN0Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hMaXN0Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndpc2hsaXN0RGVsZXRlQ29uZmlybSgpO1xuICAgICAgICB0aGlzLndpc2hMaXN0SGFuZGxlcigpO1xuICAgIH1cbn1cbiIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlIChzKSB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSA/XG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpXG5cdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxuXHRcdFx0XHQvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuXHRcdFx0XHQvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldCAoa2V5LCBqc29uKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBqYXIgPSB7fTtcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIWpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRjb29raWUgPSAoY29udmVydGVyLnJlYWQgfHwgY29udmVydGVyKShjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRkZWNvZGUoY29va2llKTtcblxuXHRcdFx0XHRcdGlmIChqc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGphcltuYW1lXSA9IGNvb2tpZTtcblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBzZXQ7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCBmYWxzZSAvKiByZWFkIGFzIHJhdyAqLyk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCB0cnVlIC8qIHJlYWQgYXMganNvbiAqLyk7XG5cdFx0fTtcblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0c2V0KGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiJdLCJuYW1lcyI6WyJtaW5NYXhWYWxpZGF0ZSIsIm1pbklucHV0U2VsZWN0b3IiLCJtYXhJbnB1dFNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsIm1pblZhbHVlIiwicGFyc2VGbG9hdCIsIiQiLCJ2YWwiLCJtYXhWYWx1ZSIsIl9pc05hTiIsIm5vZCIsImNsYXNzZXMiLCJlcnJvckNsYXNzIiwic3VjY2Vzc0NsYXNzIiwiZXJyb3JNZXNzYWdlQ2xhc3MiLCJjaGVja0Z1bmN0aW9ucyIsIkNvb2tpZXMiLCJjb250ZXh0IiwiZGlzcGxheU1vZGUiLCJnZXQiLCJhZGRDbGFzcyIsInN3aXRjaERpc3BsYXkiLCJtb2RlIiwicmVtb3ZlQ2xhc3MiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXNwbGF5VHlwZSIsImN1cnJlbnRUYXJnZXQiLCJhdHRyIiwic2V0IiwiZXhwaXJlcyIsIkNsaXBib2FyZEpTIiwiUGFnZU1hbmFnZXIiLCJhcGkiLCJkZWZhdWx0TW9kYWwiLCJncmlkU3dpdGNoZXIiLCJXaXNoTGlzdCIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiX3RoaXMiLCJjYWxsIiwib3B0aW9ucyIsInRlbXBsYXRlIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9wcm90byIsInByb3RvdHlwZSIsIndpc2hsaXN0RGVsZXRlQ29uZmlybSIsIl90aGlzMiIsImNvbmZpcm1lZCIsIndpbmRvdyIsImNvbmZpcm0iLCJ3aXNobGlzdERlbGV0ZSIsInJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uIiwiJGFkZFdpc2hsaXN0Rm9ybSIsIl90aGlzMyIsImFkZFdpc2hsaXN0VmFsaWRhdG9yIiwic3VibWl0IiwiYWRkIiwic2VsZWN0b3IiLCJyZXN1bHQiLCJsZW5ndGgiLCJlcnJvck1lc3NhZ2UiLCJlbnRlcldpc2hsaXN0TmFtZUVycm9yIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwid2lzaExpc3RIYW5kbGVyIiwiX3RoaXM0Iiwid2lzaExpc3RVcmwiLCJocmVmIiwibW9kYWwiLCJvcGVuIiwiZ2V0UGFnZSIsImVyciIsImNvbnRlbnQiLCJ1cGRhdGVDb250ZW50Iiwid3JhcCIsIiR3aXNobGlzdEZvcm0iLCIkY29udGVudCIsIm9uUmVhZHkiLCJjbGlwYm9hcmQiLCIkYWRkV2lzaExpc3RGb3JtIiwidGV4dCIsImZhZGVJbiIsImRlbGF5IiwiZmFkZU91dCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9
