"use strict";
(self["webpackChunkflair_camden"] = self["webpackChunkflair_camden"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/f/selected-option.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/f/selected-option.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var $src = $('.show-selected-option input');
  var $selected = $('.show-selected-option input[checked]');
  var $selectedOptionLabel;
  var $selectedOption;
  function changeLabel() {
    $selectedOptionLabel = $(this).siblings().children('span[data-option-value]');
    $selectedOption = $(this).attr('data-option-label');
    $selectedOptionLabel.text($selectedOption);
  }
  $selected.each(changeLabel);
  $src.on('click', changeLabel);
}

/***/ }),

/***/ "./assets/js/theme/f/watchers.js":
/*!***************************************!*\
  !*** ./assets/js/theme/f/watchers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ watchers)
/* harmony export */ });
function watchers(minWatchers, maxWatchers, update) {
  var interval = update * 1000;
  setInterval(function () {
    var baseline = Math.floor(Math.random() * 5 + 1);
    var addOrSubtract = Math.random() < 0.5 ? -1 : 1;
    baseline *= addOrSubtract;
    var currentnumber = document.getElementById('product_watchers');
    var newWatchers = parseInt(currentnumber.innerHTML, 10) + baseline;
    if (newWatchers < minWatchers) {
      newWatchers = minWatchers;
    } else if (newWatchers > maxWatchers) {
      newWatchers = maxWatchers;
    }
    document.getElementById('product_watchers').innerHTML = newWatchers;
  }, interval);
}

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _f_selected_option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./f/selected-option */ "./assets/js/theme/f/selected-option.js");
/* harmony import */ var _f_watchers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./f/watchers */ "./assets/js/theme/f/watchers.js");
/* harmony import */ var _f_options_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./f/options-grid */ "./assets/js/theme/f/options-grid.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */









var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($('.productView, .product-description'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var $reviewForm = (0,_common_form_utils__WEBPACK_IMPORTED_MODULE_6__.classifyForm)('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    if (this.context.enableSelectedOptionLabel) {
      (0,_f_selected_option__WEBPACK_IMPORTED_MODULE_7__["default"])();
    }
    var Sticky = __webpack_require__(/*! sticky-js */ "./node_modules/sticky-js/index.js");
    var sticky = new Sticky('.sticky-product'); // eslint-disable-line no-unused-vars

    this.productReviewHandler();
    if (this.context.watchers) {
      (0,_f_watchers__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context.watchers_min, this.context.watchers_max, this.context.watchers_update);
    }
    var optionsConfig = {
      taxPriceSettings: this.context.productTaxPriceSettings,
      taxDisplaySettings: this.context.productTaxDisplaySettings,
      taxLabel: this.context.productTaxLabel,
      dictionary: this.context.gridOrderingDictionary,
      columnLabels: this.context.productGridColumnLabels,
      enable: this.context.gridOrderingEnabled
    };
    (0,_f_options_grid__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context.productOptionsGql, this.context.productId, optionsConfig);
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");




var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    $('.productView-reviewLink').on('click', function () {
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__.CollapsibleEvents.click);
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__.CollapsibleEvents.click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();


/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQWUsc0NBQVk7RUFDdkIsSUFBTUEsSUFBSSxHQUFHQyxDQUFDLENBQUMsNkJBQTZCLENBQUM7RUFDN0MsSUFBTUMsU0FBUyxHQUFHRCxDQUFDLENBQUMsc0NBQXNDLENBQUM7RUFDM0QsSUFBSUUsb0JBQW9CO0VBQ3hCLElBQUlDLGVBQWU7RUFFbkIsU0FBU0MsV0FBV0EsQ0FBQSxFQUFHO0lBQ25CRixvQkFBb0IsR0FBR0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUMseUJBQXlCLENBQUM7SUFDN0VILGVBQWUsR0FBR0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFFbkRMLG9CQUFvQixDQUFDTSxJQUFJLENBQUNMLGVBQWUsQ0FBQztFQUM5QztFQUVBRixTQUFTLENBQUNRLElBQUksQ0FBQ0wsV0FBVyxDQUFDO0VBQzNCTCxJQUFJLENBQUNXLEVBQUUsQ0FBQyxPQUFPLEVBQUVOLFdBQVcsQ0FBQztBQUNqQyxDOzs7Ozs7Ozs7Ozs7OztBQ2ZlLFNBQVNPLFFBQVFBLENBQUNDLFdBQVcsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUU7RUFDL0QsSUFBTUMsUUFBUSxHQUFHRCxNQUFNLEdBQUcsSUFBSTtFQUM5QkUsV0FBVyxDQUFDLFlBQU07SUFDZCxJQUFJQyxRQUFRLEdBQUlDLElBQUksQ0FBQ0MsS0FBSyxDQUFFRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFJLENBQUMsQ0FBRTtJQUNwRCxJQUFNQyxhQUFhLEdBQUdILElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNsREgsUUFBUSxJQUFJSSxhQUFhO0lBQ3pC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QUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDcUgsY0FBYyxDQUFDWSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUQsQ0FBQztFQUFBLE9BQUFsQixZQUFBO0FBQUE7QUFHVSxTQUFTekYsWUFBWUEsQ0FBQSxFQUFHO0VBQ25DLElBQU00RyxTQUFTLEdBQUcsZUFBZTtFQUNqQyxJQUFNQyxhQUFhLEdBQUc3SSxDQUFDLFlBQVU0SSxTQUFTLE1BQUcsQ0FBQztFQUU5Q0MsYUFBYSxDQUFDcEksSUFBSSxDQUFDLFVBQUNxSSxLQUFLLEVBQUVDLE9BQU8sRUFBSztJQUNuQyxJQUFNQyxHQUFHLEdBQUdoSixDQUFDLENBQUMrSSxPQUFPLENBQUM7SUFDdEIsSUFBTUUsYUFBYSxHQUFHRCxHQUFHLENBQUNYLElBQUksQ0FBQ08sU0FBUyxDQUFDLFlBQVluQixZQUFZO0lBRWpFLElBQUl3QixhQUFhLEVBQUU7TUFDZjtJQUNKO0lBRUFELEdBQUcsQ0FBQ1gsSUFBSSxDQUFDTyxTQUFTLEVBQUUsSUFBSW5CLFlBQVksQ0FBQ3VCLEdBQUcsQ0FBQyxDQUFDO0VBQzlDLENBQUMsQ0FBQztBQUNOLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvZi9zZWxlY3RlZC1vcHRpb24uanMiLCJ3ZWJwYWNrOi8vZmxhaXItY2FtZGVuLy4vYXNzZXRzL2pzL3RoZW1lL2Yvd2F0Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vZmxhaXItY2FtZGVuLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZmxhaXItY2FtZGVuLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCAkc3JjID0gJCgnLnNob3ctc2VsZWN0ZWQtb3B0aW9uIGlucHV0Jyk7XG4gICAgY29uc3QgJHNlbGVjdGVkID0gJCgnLnNob3ctc2VsZWN0ZWQtb3B0aW9uIGlucHV0W2NoZWNrZWRdJyk7XG4gICAgbGV0ICRzZWxlY3RlZE9wdGlvbkxhYmVsO1xuICAgIGxldCAkc2VsZWN0ZWRPcHRpb247XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VMYWJlbCgpIHtcbiAgICAgICAgJHNlbGVjdGVkT3B0aW9uTGFiZWwgPSAkKHRoaXMpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJ3NwYW5bZGF0YS1vcHRpb24tdmFsdWVdJyk7XG4gICAgICAgICRzZWxlY3RlZE9wdGlvbiA9ICQodGhpcykuYXR0cignZGF0YS1vcHRpb24tbGFiZWwnKTtcblxuICAgICAgICAkc2VsZWN0ZWRPcHRpb25MYWJlbC50ZXh0KCRzZWxlY3RlZE9wdGlvbik7XG4gICAgfVxuXG4gICAgJHNlbGVjdGVkLmVhY2goY2hhbmdlTGFiZWwpO1xuICAgICRzcmMub24oJ2NsaWNrJywgY2hhbmdlTGFiZWwpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2F0Y2hlcnMobWluV2F0Y2hlcnMsIG1heFdhdGNoZXJzLCB1cGRhdGUpIHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHVwZGF0ZSAqIDEwMDA7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBsZXQgYmFzZWxpbmUgPSAoTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDUpICsgMSkpO1xuICAgICAgICBjb25zdCBhZGRPclN1YnRyYWN0ID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IC0xIDogMTtcbiAgICAgICAgYmFzZWxpbmUgKj0gYWRkT3JTdWJ0cmFjdDtcbiAgICAgICAgY29uc3QgY3VycmVudG51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0X3dhdGNoZXJzJyk7XG4gICAgICAgIGxldCBuZXdXYXRjaGVycyA9IHBhcnNlSW50KGN1cnJlbnRudW1iZXIuaW5uZXJIVE1MLCAxMCkgKyBiYXNlbGluZTtcbiAgICAgICAgaWYgKG5ld1dhdGNoZXJzIDwgbWluV2F0Y2hlcnMpIHtcbiAgICAgICAgICAgIG5ld1dhdGNoZXJzID0gbWluV2F0Y2hlcnM7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3V2F0Y2hlcnMgPiBtYXhXYXRjaGVycykge1xuICAgICAgICAgICAgbmV3V2F0Y2hlcnMgPSBtYXhXYXRjaGVycztcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdF93YXRjaGVycycpLmlubmVySFRNTCA9IG5ld1dhdGNoZXJzO1xuICAgIH0sIGludGVydmFsKTtcbn1cbiIsIi8qXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXG4gKi9cbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgUmV2aWV3IGZyb20gJy4vcHJvZHVjdC9yZXZpZXdzJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgdmlkZW9HYWxsZXJ5IGZyb20gJy4vcHJvZHVjdC92aWRlby1nYWxsZXJ5JztcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4vY29tbW9uL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHNlbGVjdGVkT3B0aW9uIGZyb20gJy4vZi9zZWxlY3RlZC1vcHRpb24nO1xuaW1wb3J0IHdhdGNoZXJzIGZyb20gJy4vZi93YXRjaGVycyc7XG5pbXBvcnQgb3B0aW9uc0dyaWQgZnJvbSAnLi9mL29wdGlvbnMtZ3JpZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdGhpcy4kcmV2aWV3TGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xvc2UuZm5kdG4ucmV2ZWFsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEgJiYgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRvcjtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3LCAucHJvZHVjdC1kZXNjcmlwdGlvbicpLCB0aGlzLmNvbnRleHQsIHdpbmRvdy5CQ0RhdGEucHJvZHVjdF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuXG4gICAgICAgIHZpZGVvR2FsbGVyeSgpO1xuXG4gICAgICAgIGNvbnN0ICRyZXZpZXdGb3JtID0gY2xhc3NpZnlGb3JtKCcud3JpdGVSZXZpZXctZm9ybScpO1xuICAgICAgICBjb25zdCByZXZpZXcgPSBuZXcgUmV2aWV3KCRyZXZpZXdGb3JtKTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJywgKCkgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdG9yID0gcmV2aWV3LnJlZ2lzdGVyVmFsaWRhdGlvbih0aGlzLmNvbnRleHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkcmV2aWV3Rm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVuYWJsZVNlbGVjdGVkT3B0aW9uTGFiZWwpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBTdGlja3kgPSByZXF1aXJlKCdzdGlja3ktanMnKTtcbiAgICAgICAgY29uc3Qgc3RpY2t5ID0gbmV3IFN0aWNreSgnLnN0aWNreS1wcm9kdWN0Jyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdIYW5kbGVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC53YXRjaGVycykge1xuICAgICAgICAgICAgd2F0Y2hlcnModGhpcy5jb250ZXh0LndhdGNoZXJzX21pbiwgdGhpcy5jb250ZXh0LndhdGNoZXJzX21heCwgdGhpcy5jb250ZXh0LndhdGNoZXJzX3VwZGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25zQ29uZmlnID0ge1xuICAgICAgICAgICAgdGF4UHJpY2VTZXR0aW5nczogdGhpcy5jb250ZXh0LnByb2R1Y3RUYXhQcmljZVNldHRpbmdzLFxuICAgICAgICAgICAgdGF4RGlzcGxheVNldHRpbmdzOiB0aGlzLmNvbnRleHQucHJvZHVjdFRheERpc3BsYXlTZXR0aW5ncyxcbiAgICAgICAgICAgIHRheExhYmVsOiB0aGlzLmNvbnRleHQucHJvZHVjdFRheExhYmVsLFxuICAgICAgICAgICAgZGljdGlvbmFyeTogdGhpcy5jb250ZXh0LmdyaWRPcmRlcmluZ0RpY3Rpb25hcnksXG4gICAgICAgICAgICBjb2x1bW5MYWJlbHM6IHRoaXMuY29udGV4dC5wcm9kdWN0R3JpZENvbHVtbkxhYmVscyxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5jb250ZXh0LmdyaWRPcmRlcmluZ0VuYWJsZWQsXG4gICAgICAgIH07XG5cbiAgICAgICAgb3B0aW9uc0dyaWQodGhpcy5jb250ZXh0LnByb2R1Y3RPcHRpb25zR3FsLCB0aGlzLmNvbnRleHQucHJvZHVjdElkLCBvcHRpb25zQ29uZmlnKTtcbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZUV2ZW50cyB9IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigkcmV2aWV3Rm9ybSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRyZXZpZXdGb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kcmV2aWV3c0NvbnRlbnQgPSAkKCcjcHJvZHVjdC1yZXZpZXdzJyk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlID0gJCgnW2RhdGEtY29sbGFwc2libGVdJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIHRoaXMuaW5pdExpbmtCaW5kKCk7XG4gICAgICAgIHRoaXMuaW5qZWN0UGFnaW5hdGlvbkxpbmsoKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZVJldmlld3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBpbml0aWFsIHBhZ2UgbG9hZCwgdGhlIHVzZXIgY2xpY2tzIG9uIFwiKDEyIFJldmlld3MpXCIgbGlua1xuICAgICAqIFRoZSBicm93c2VyIGp1bXBzIHRvIHRoZSByZXZpZXcgcGFnZSBhbmQgc2hvdWxkIGV4cGFuZCB0aGUgcmV2aWV3cyBzZWN0aW9uXG4gICAgICovXG4gICAgaW5pdExpbmtCaW5kKCkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICQoJyNwcm9kdWN0UmV2aWV3cy1jb250ZW50JywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdMaW5rJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEkY29udGVudC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbGxhcHNlUmV2aWV3cygpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gcGFnaW5hdGluZyBzdGF0ZSwgZG8gbm90IGNvbGxhcHNlXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjcHJvZHVjdC1yZXZpZXdzJykgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNlIGNvbGxhcHNlIG9uIHBhZ2UgbG9hZFxuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3QgSUQgaW50byB0aGUgcGFnaW5hdGlvbiBsaW5rXG4gICAgICovXG4gICAgaW5qZWN0UGFnaW5hdGlvbkxpbmsoKSB7XG4gICAgICAgIGNvbnN0ICRuZXh0TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcbiAgICAgICAgY29uc3QgJHByZXZMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tcHJldmlvdXMgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICBpZiAoJG5leHRMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJG5leHRMaW5rLmF0dHIoJ2hyZWYnLCBgJHskbmV4dExpbmsuYXR0cignaHJlZicpfSAjcHJvZHVjdC1yZXZpZXdzYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHByZXZMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJHByZXZMaW5rLmF0dHIoJ2hyZWYnLCBgJHskcHJldkxpbmsuYXR0cignaHJlZicpfSAjcHJvZHVjdC1yZXZpZXdzYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlclZhbGlkYXRpb24oY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoW3tcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZyYXRpbmdcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0aXRsZVwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0ZXh0XCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3Q29tbWVudCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdFbWFpbCxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIiRzcmMiLCIkIiwiJHNlbGVjdGVkIiwiJHNlbGVjdGVkT3B0aW9uTGFiZWwiLCIkc2VsZWN0ZWRPcHRpb24iLCJjaGFuZ2VMYWJlbCIsInNpYmxpbmdzIiwiY2hpbGRyZW4iLCJhdHRyIiwidGV4dCIsImVhY2giLCJvbiIsIndhdGNoZXJzIiwibWluV2F0Y2hlcnMiLCJtYXhXYXRjaGVycyIsInVwZGF0ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJiYXNlbGluZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFkZE9yU3VidHJhY3QiLCJjdXJyZW50bnVtYmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5ld1dhdGNoZXJzIiwicGFyc2VJbnQiLCJpbm5lckhUTUwiLCJQYWdlTWFuYWdlciIsIlJldmlldyIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlByb2R1Y3REZXRhaWxzIiwidmlkZW9HYWxsZXJ5IiwiY2xhc3NpZnlGb3JtIiwic2VsZWN0ZWRPcHRpb24iLCJvcHRpb25zR3JpZCIsIlByb2R1Y3QiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiJHJldmlld0xpbmsiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJfdGhpczIiLCJpbmRleE9mIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJwcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsInNldFByb2R1Y3RWYXJpYW50IiwiJHJldmlld0Zvcm0iLCJyZXZpZXciLCJyZWdpc3RlclZhbGlkYXRpb24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJlbmFibGVTZWxlY3RlZE9wdGlvbkxhYmVsIiwiU3RpY2t5IiwicmVxdWlyZSIsInN0aWNreSIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwid2F0Y2hlcnNfbWluIiwid2F0Y2hlcnNfbWF4Iiwid2F0Y2hlcnNfdXBkYXRlIiwib3B0aW9uc0NvbmZpZyIsInRheFByaWNlU2V0dGluZ3MiLCJwcm9kdWN0VGF4UHJpY2VTZXR0aW5ncyIsInRheERpc3BsYXlTZXR0aW5ncyIsInByb2R1Y3RUYXhEaXNwbGF5U2V0dGluZ3MiLCJ0YXhMYWJlbCIsInByb2R1Y3RUYXhMYWJlbCIsImRpY3Rpb25hcnkiLCJncmlkT3JkZXJpbmdEaWN0aW9uYXJ5IiwiY29sdW1uTGFiZWxzIiwicHJvZHVjdEdyaWRDb2x1bW5MYWJlbHMiLCJlbmFibGUiLCJncmlkT3JkZXJpbmdFbmFibGVkIiwicHJvZHVjdE9wdGlvbnNHcWwiLCJwcm9kdWN0SWQiLCJ0cmlnZ2VyIiwiZGVmYXVsdCIsIm5vZCIsIkNvbGxhcHNpYmxlRXZlbnRzIiwiZm9ybXMiLCJfZGVmYXVsdCIsInN1Ym1pdCIsImZpbmQiLCIkcmV2aWV3c0NvbnRlbnQiLCIkY29sbGFwc2libGUiLCJpbml0TGlua0JpbmQiLCJpbmplY3RQYWdpbmF0aW9uTGluayIsImNvbGxhcHNlUmV2aWV3cyIsIiRjb250ZW50IiwiaGFzQ2xhc3MiLCJjbGljayIsImhhc2giLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJsZW5ndGgiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwicmV2aWV3UmF0aW5nIiwicmV2aWV3U3ViamVjdCIsInJldmlld0NvbW1lbnQiLCJjYiIsInZhbCIsInJlc3VsdCIsImVtYWlsIiwicmV2aWV3RW1haWwiLCJWaWRlb0dhbGxlcnkiLCIkZWxlbWVudCIsIiRwbGF5ZXIiLCIkdmlkZW9zIiwiY3VycmVudFZpZGVvIiwiYmluZEV2ZW50cyIsInNlbGVjdE5ld1ZpZGVvIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImRhdGEiLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImJpbmQiLCJwbHVnaW5LZXkiLCIkdmlkZW9HYWxsZXJ5IiwiaW5kZXgiLCJlbGVtZW50IiwiJGVsIiwiaXNJbml0aWFsaXplZCJdLCJzb3VyY2VSb290IjoiIn0=