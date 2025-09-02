"use strict";
(self["webpackChunkflair_covent_garden"] = self["webpackChunkflair_covent_garden"] || []).push([["assets_js_theme_blog-post_js"],{

/***/ "./assets/js/theme/blog-post.js":
/*!**************************************!*\
  !*** ./assets/js/theme/blog-post.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogPost)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _f_blog_related_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./f/blog-related-product */ "./assets/js/theme/f/blog-related-product.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var BlogPost = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(BlogPost, _PageManager);
  function BlogPost() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = BlogPost.prototype;
  _proto.onReady = function onReady() {
    if (this.context.relatedProduct) {
      (0,_f_blog_related_product__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.relatedProduct);
    }
  };
  return BlogPost;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ibG9nLXBvc3RfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDYTtBQUFBLElBRWpDRSxRQUFRLDBCQUFBQyxZQUFBO0VBQUFDLGNBQUEsQ0FBQUYsUUFBQSxFQUFBQyxZQUFBO0VBQUEsU0FBQUQsU0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUUsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQSxJQUFBQyxNQUFBLEdBQUFMLFFBQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3pCRSxPQUFPLEdBQVAsU0FBQUEsUUFBQSxFQUFVO0lBQ04sSUFBSSxJQUFJLENBQUNDLE9BQU8sQ0FBQ1QsY0FBYyxFQUFFO01BQzdCQSxtRUFBYyxDQUFDLElBQUksQ0FBQ1MsT0FBTyxDQUFDVCxjQUFjLENBQUM7SUFDL0M7RUFDSixDQUFDO0VBQUEsT0FBQUMsUUFBQTtBQUFBLEVBTGlDRixxREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDFCO0FBQ3dCO0FBRS9DLDZCQUFlLG9DQUFVYyxPQUFPLEVBQUU7RUFDOUIsSUFBTWIsY0FBYyxHQUFHYSxPQUFPLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFFekMsU0FBU0MsZ0JBQWdCQSxDQUFDQyxFQUFFLEVBQUU7SUFDMUJKLHNGQUF5QixDQUFDSSxFQUFFLEVBQUU7TUFBRUcsUUFBUSxFQUFFO0lBQTJCLENBQUMsRUFBRSxVQUFDQyxHQUFHLEVBQUVDLE9BQU8sRUFBSztNQUN0RixJQUFJRCxHQUFHLEVBQUU7UUFDTCxNQUFNLElBQUlFLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO01BQ3hCO01BQ0FULDZDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ1ksTUFBTSxDQUFDRixPQUFPLENBQUM7SUFDekMsQ0FBQyxDQUFDO0VBQ047O0VBRUE7RUFDQSxLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3hCLGNBQWMsQ0FBQ3lCLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7SUFDNUNULGdCQUFnQixDQUFDZixjQUFjLENBQUN3QixDQUFDLENBQUMsQ0FBQztFQUN2QztFQUVBYiw2Q0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNlLElBQUksQ0FBQyxDQUFDO0FBQ2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxhaXItY292ZW50LWdhcmRlbi8uL2Fzc2V0cy9qcy90aGVtZS9ibG9nLXBvc3QuanMiLCJ3ZWJwYWNrOi8vZmxhaXItY292ZW50LWdhcmRlbi8uL2Fzc2V0cy9qcy90aGVtZS9mL2Jsb2ctcmVsYXRlZC1wcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgcmVsYXRlZFByb2R1Y3QgZnJvbSAnLi9mL2Jsb2ctcmVsYXRlZC1wcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZ1Bvc3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5yZWxhdGVkUHJvZHVjdCkge1xuICAgICAgICAgICAgcmVsYXRlZFByb2R1Y3QodGhpcy5jb250ZXh0LnJlbGF0ZWRQcm9kdWN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvZHVjdCkge1xuICAgIGNvbnN0IHJlbGF0ZWRQcm9kdWN0ID0gcHJvZHVjdC5zcGxpdCgnOicpO1xuXG4gICAgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0QnlJZChycCkge1xuICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHJwLCB7IHRlbXBsYXRlOiAnZi9ibG9nL2Jsb2ctcHJvZHVjdC1jYXJkJyB9LCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcucmVsYXRlZFByb2R1Y3RzJykuYXBwZW5kKGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJRDogcmVsYXRlZFByb2R1Y3RbMV1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHJlbGF0ZWRQcm9kdWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZldGNoUHJvZHVjdEJ5SWQocmVsYXRlZFByb2R1Y3RbaV0pO1xuICAgIH1cblxuICAgICQoJy5yZWxhdGVkUHJvZHVjdHMnKS5zaG93KCk7XG59XG4iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJyZWxhdGVkUHJvZHVjdCIsIkJsb2dQb3N0IiwiX1BhZ2VNYW5hZ2VyIiwiX2luaGVyaXRzTG9vc2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJjb250ZXh0IiwiZGVmYXVsdCIsIiQiLCJ1dGlscyIsInByb2R1Y3QiLCJzcGxpdCIsImZldGNoUHJvZHVjdEJ5SWQiLCJycCIsImFwaSIsImdldEJ5SWQiLCJ0ZW1wbGF0ZSIsImVyciIsImNvbnRlbnQiLCJFcnJvciIsImFwcGVuZCIsImkiLCJsZW5ndGgiLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==
