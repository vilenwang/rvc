"use strict";
(self["webpackChunkflair_covent_garden"] = self["webpackChunkflair_covent_garden"] || []).push([["assets_js_theme_blog_js"],{

/***/ "./assets/js/theme/blog.js":
/*!*********************************!*\
  !*** ./assets/js/theme/blog.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _f_blog_related_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./f/blog-related-product */ "./assets/js/theme/f/blog-related-product.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.equalizer */ "./node_modules/foundation-sites/js/foundation/foundation.equalizer.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_5__);

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Blog = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Blog, _PageManager);
  function Blog() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = Blog.prototype;
  _proto.onReady = function onReady() {
    if (this.context.relatedProduct) {
      (0,_f_blog_related_product__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.relatedProduct);
    }
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).foundation({
      equalizer: {
        equalize_on_stack: true
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).foundation('equalizer', 'reflow');
  };
  return Blog;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/f/blog-related-product.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/f/blog-related-product.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(product) {
  var relatedProduct = product.split(':');
  function fetchProductById(rp) {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.product.getById(rp, {
      template: 'f/blog/blog-product-card'
    }, function (err, content) {
      if (err) {
        throw new Error(err);
      }
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.relatedProducts').append(content);
    });
  }

  // ID: relatedProduct[1]
  for (var i = 1; i < relatedProduct.length; i++) {
    fetchProductById(relatedProduct[i]);
  }
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.relatedProducts').show();
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ibG9nX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2E7QUFDL0I7QUFDNEI7QUFDVTtBQUFBLElBRXhDRyxJQUFJLDBCQUFBQyxZQUFBO0VBQUFDLGNBQUEsQ0FBQUYsSUFBQSxFQUFBQyxZQUFBO0VBQUEsU0FBQUQsS0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUUsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQSxJQUFBQyxNQUFBLEdBQUFMLElBQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3JCRSxPQUFPLEdBQVAsU0FBQUEsUUFBQSxFQUFVO0lBQ04sSUFBSSxJQUFJLENBQUNDLE9BQU8sQ0FBQ1YsY0FBYyxFQUFFO01BQzdCQSxtRUFBYyxDQUFDLElBQUksQ0FBQ1UsT0FBTyxDQUFDVixjQUFjLENBQUM7SUFDL0M7SUFFQUMsNkNBQUMsQ0FBQ1UsUUFBUSxDQUFDLENBQUNDLFVBQVUsQ0FBQztNQUNuQkMsU0FBUyxFQUFFO1FBQ1BDLGlCQUFpQixFQUFFO01BQ3ZCO0lBQ0osQ0FBQyxDQUFDO0lBRUZiLDZDQUFDLENBQUNVLFFBQVEsQ0FBQyxDQUFDQyxVQUFVLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQztFQUNqRCxDQUFDO0VBQUEsT0FBQVYsSUFBQTtBQUFBLEVBYjZCSCxxREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnRCO0FBQ3dCO0FBRS9DLDZCQUFlLG9DQUFVa0IsT0FBTyxFQUFFO0VBQzlCLElBQU1qQixjQUFjLEdBQUdpQixPQUFPLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFFekMsU0FBU0MsZ0JBQWdCQSxDQUFDQyxFQUFFLEVBQUU7SUFDMUJKLHNGQUF5QixDQUFDSSxFQUFFLEVBQUU7TUFBRUcsUUFBUSxFQUFFO0lBQTJCLENBQUMsRUFBRSxVQUFDQyxHQUFHLEVBQUVDLE9BQU8sRUFBSztNQUN0RixJQUFJRCxHQUFHLEVBQUU7UUFDTCxNQUFNLElBQUlFLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO01BQ3hCO01BQ0F2Qiw2Q0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMwQixNQUFNLENBQUNGLE9BQU8sQ0FBQztJQUN6QyxDQUFDLENBQUM7RUFDTjs7RUFFQTtFQUNBLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHNUIsY0FBYyxDQUFDNkIsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtJQUM1Q1QsZ0JBQWdCLENBQUNuQixjQUFjLENBQUM0QixDQUFDLENBQUMsQ0FBQztFQUN2QztFQUVBM0IsNkNBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDNkIsSUFBSSxDQUFDLENBQUM7QUFDaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGFpci1jb3ZlbnQtZ2FyZGVuLy4vYXNzZXRzL2pzL3RoZW1lL2Jsb2cuanMiLCJ3ZWJwYWNrOi8vZmxhaXItY292ZW50LWdhcmRlbi8uL2Fzc2V0cy9qcy90aGVtZS9mL2Jsb2ctcmVsYXRlZC1wcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgcmVsYXRlZFByb2R1Y3QgZnJvbSAnLi9mL2Jsb2ctcmVsYXRlZC1wcm9kdWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24uZXF1YWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZyBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnJlbGF0ZWRQcm9kdWN0KSB7XG4gICAgICAgICAgICByZWxhdGVkUHJvZHVjdCh0aGlzLmNvbnRleHQucmVsYXRlZFByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgJChkb2N1bWVudCkuZm91bmRhdGlvbih7XG4gICAgICAgICAgICBlcXVhbGl6ZXI6IHtcbiAgICAgICAgICAgICAgICBlcXVhbGl6ZV9vbl9zdGFjazogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmZvdW5kYXRpb24oJ2VxdWFsaXplcicsICdyZWZsb3cnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICBjb25zdCByZWxhdGVkUHJvZHVjdCA9IHByb2R1Y3Quc3BsaXQoJzonKTtcblxuICAgIGZ1bmN0aW9uIGZldGNoUHJvZHVjdEJ5SWQocnApIHtcbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChycCwgeyB0ZW1wbGF0ZTogJ2YvYmxvZy9ibG9nLXByb2R1Y3QtY2FyZCcgfSwgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnLnJlbGF0ZWRQcm9kdWN0cycpLmFwcGVuZChjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSUQ6IHJlbGF0ZWRQcm9kdWN0WzFdXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCByZWxhdGVkUHJvZHVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmZXRjaFByb2R1Y3RCeUlkKHJlbGF0ZWRQcm9kdWN0W2ldKTtcbiAgICB9XG5cbiAgICAkKCcucmVsYXRlZFByb2R1Y3RzJykuc2hvdygpO1xufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwicmVsYXRlZFByb2R1Y3QiLCIkIiwiQmxvZyIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiY29udGV4dCIsImRvY3VtZW50IiwiZm91bmRhdGlvbiIsImVxdWFsaXplciIsImVxdWFsaXplX29uX3N0YWNrIiwiZGVmYXVsdCIsInV0aWxzIiwicHJvZHVjdCIsInNwbGl0IiwiZmV0Y2hQcm9kdWN0QnlJZCIsInJwIiwiYXBpIiwiZ2V0QnlJZCIsInRlbXBsYXRlIiwiZXJyIiwiY29udGVudCIsIkVycm9yIiwiYXBwZW5kIiwiaSIsImxlbmd0aCIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9
