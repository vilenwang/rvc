"use strict";
(self["webpackChunkflair_camden"] = self["webpackChunkflair_camden"] || []).push([["assets_js_theme_cart_js"],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan.js */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _f_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./f/api */ "./assets/js/theme/f/api.js");
/* harmony import */ var _f_countdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./f/countdown */ "./assets/js/theme/f/countdown.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");







function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }









var Cart = /*#__PURE__*/function (_PageManager) {
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Cart, _PageManager);
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    // Classes
    this.classRow = '.cart-item-title';
    this.classResultMessage = '.list-feedback';

    // Class names
    this.classNameRowError = 'list-add__row--error';

    // Functional assignments
    this.$form = $('.cart-list-form');
    this.$newList = $('.add-new-list');
    this.$addingOverlay = $('.loading-overlay');
    this.$document = $(document);
    this.resetState();
    this.bindEvents();
    if (this.context.showCartCountdown) {
      (0,_f_countdown__WEBPACK_IMPORTED_MODULE_15__["default"])(this.context.cartCountdownTimer, 'cart-countdown', this.context.cartCountdownEndMessage);
    }
  };
  _proto.resetState = function resetState() {
    this.items = [];
    this.errors = [];
    this.currentLoop = 0;
  }

  // Run AJAX calls one by one
  ;
  _proto.handleAjax = function handleAjax() {
    var _this = this;
    if (this.currentLoop < this.items.length) {
      $(this.classResultMessage).html("Saving<br> " + this.items[this.currentLoop].pname + "<br> to your list");
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(this.items[this.currentLoop].url, {
        template: 'f/b2b/add-to-list-response'
      }, function (err) {
        if (err) {
          throw new Error(err);
        }

        // Increment 'current' and run AJAX call again
        _this.currentLoop++;
        _this.handleAjax();
      });
    }

    // Last attempt, redirect only
    if (this.currentLoop === this.items.length) {
      this.$addingOverlay.hide();
      if (this.listTarget !== '' && this.listTarget !== undefined) {
        document.location.href = "/wishlist.php?action=viewwishlistitems" + this.listTarget;
      } else {
        document.location.href = '/wishlist.php';
      }
      // $('.multi_add__cart-button').css('display', 'inline-block');
      // $('.multi-add__row[data-status=success]').remove();
    }
  };
  _proto.processForm = function processForm(event, form) {
    var _this2 = this;
    event.preventDefault();
    this.$addingOverlay.show();
    var allRows = $(form).find(this.classRow);
    var allMessages = allRows.find(this.classResultMessage);
    this.resetState();

    // For each row, add the URL and target to the items array
    allRows.each(function (index, row) {
      var target = $(row);
      var pid = target.find('[data-pid]').val();
      var pname = target.find('.cart-item-name').attr('data-pname');
      _this2.listTarget = $('#list-id').val();
      if (_this2.listTarget !== '' && _this2.listTarget !== undefined) {
        _this2.listTarget = "&wishlistid=" + _this2.listTarget;
      } else {
        _this2.listTarget = '';
      }
      var url = "/wishlist.php?action=add&product_id=" + pid + _this2.listTarget;
      _this2.items.push({
        url: url,
        target: target,
        pname: pname
      });
    });

    // To add lang string
    allMessages.text('Saving to list...').show();
    this.handleAjax();
  };
  _proto.openAddList = function openAddList(event) {
    event.preventDefault();
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_12__.defaultModal)();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage('/cart.php', {
      template: 'f/cart/add-list-form'
    }, function (err, response) {
      if (err) {
        throw new Error(err);
      }
      if (response.length) {
        modal.updateContent(response);
        $('#wishlistname').select();
      }
    });
    modal.open();
  };
  _proto.addNewList = function addNewList(event) {
    event.preventDefault();
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_12__.defaultModal)();
    var listName = $('#wishlistname').val();
    var sharedList = $('#publicwishlist').val();
    var targetUrl = '/wishlist.php?action=addwishlist&product_id=';
    $.ajax({
      method: 'POST',
      url: targetUrl,
      data: {
        wishlistname: listName,
        publicwishlist: sharedList,
        submit: null
      }
    }).done(function () {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage('/wishlist.php', {
        template: 'f/b2b/list-added-response'
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        if (response.length) {
          // replace contents of '.list-selector' with response
          $('.list-selector').html(response);
        }
        modal.close();
      });
    });
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this3 = this;
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantity-max'), 10);
    var minQty = parseInt($el.data('quantity-min'), 10);
    var minError = $el.data('quantity-min-error');
    var maxError = $el.data('quantity-max-error');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
    // Does not qualify for min/max quantity
    if (newQty < minQty) {
      return (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
        text: maxError,
        type: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this3.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this3.refreshContent(remove);
      } else {
        $el.val(oldQty);
        (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this4 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cart-itemid');
    var $el = $("#qty-" + itemId);
    var minQty = parseInt($el.data('quantity-min'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry;
    // Does not quality for min/max quantity
    if (newQty < 0 || Number.isNaN(newQty)) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
        text: this.context.invalidEntryMessage.replace('[ENTRY]', invalidEntry),
        type: 'error'
      });
    } else {
      this.$overlay.show();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
        _this4.$overlay.hide();
        if (response.data.status === 'succeed') {
          // if the quantity is changed "1" from "0", we have to remove the row.
          var remove = newQty === 0;
          _this4.refreshContent(remove);
        } else {
          $el.val(oldQty);
          (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
            text: response.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    }
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this5 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this5.refreshContent(true);
      } else {
        (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        }).then(function () {
          _this5.refreshContent(true);
        });
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId) {
    var _this6 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_12__.defaultModal)();
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      _this6.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $changedOption = $(currentTarget);
      var $form = $changedOption.parents('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      var item = $('[name="item_id"]', $form).attr('value');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
            text: err,
            type: 'error'
          });
          return false;
        }
        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove, empty) {
    var _this7 = this;
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }

    // Remove last item from cart? Reload
    if (remove && empty) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.getContent(options, function (err, response) {
      _this7.$cartContent.html(response.content);
      _this7.$cartTotals.html(response.totals);
      _this7.$cartMessages.html(response.statusMessages);
      $cartPageTitle.replaceWith(response.pageTitle);
      _this7.bindEvents();
      _this7.$overlay.hide();
      var quantity = $('[data-cart-quantity]', _this7.$cartContent).data('cart-quantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this8 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // clear cart
    $('[data-cart-clear]', this.$cartContent).on('click', function (event) {
      event.preventDefault();
      (0,_f_api__WEBPACK_IMPORTED_MODULE_14__["default"])("/api/storefront/carts/" + _this8.context.cartId, 'DELETE', {}).then(_this8.refreshContent(true, true));
    });

    // cart qty manually updates
    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();
      event.stopImmediatePropagation();

      // update cart quantity
      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      event.stopImmediatePropagation();
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
        text: string,
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: _this8.context.cancelButtonText
      }).then(function () {
        // remove item from cart
        cartRemoveItem(itemId);
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      event.preventDefault();
      // edit item in cart
      _this8.cartEditOptions(itemId);
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this9 = this;
    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
          text: $codeInput.data('error'),
          type: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this9.refreshContent();
        } else {
          (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
            text: response.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this0 = this;
    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!(0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_9__["default"])(code)) {
        var validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_10__.createTranslationDictionary)(_this0.context);
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"].fire({
          text: validationDictionary.invalid_gift_certificate,
          icon: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this0.refreshContent();
        } else {
          (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
            text: resp.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this1 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_12__.defaultModal)();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this1.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    var _this10 = this;
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();
    this.$form.on('click', '[data-save-cart]', function (event) {
      _this10.processForm(event, _this10.$form[0]);
    });
    this.$newList.on('click', function (event) {
      _this10.openAddList(event);
    });
    this.$document.on('click', '.add-new-list-form .button', function (event) {
      _this10.addNewList(event);
    });

    // initiate shipping estimator module
    var shippingErrorMessages = {
      country: this.context.shippingCountryErrorMessage,
      province: this.context.shippingProvinceErrorMessage
    };
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_11__["default"]($('[data-shipping-estimator]'), shippingErrorMessages);
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_8__["default"]);


/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShippingEstimator)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan.js */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");








var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element, shippingErrorMessages) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.shippingErrorMessages = shippingErrorMessages;
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit"
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.country
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.province
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_3__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"])({
          text: err,
          type: 'error'
        });
        throw new Error(err);
      }
      var $field = $(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_form_utils__WEBPACK_IMPORTED_MODULE_6__.Validators.cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content);

        // bind the select button
        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $estimatorContainer.removeClass('u-hiddenVisually');
      $('.shipping-estimate-hide').show();
    });
    $('.shipping-estimate-hide').on('click', function (event) {
      event.preventDefault();
      $estimatorContainer.addClass('u-hiddenVisually');
      $('.shipping-estimate-show').show();
      $('.shipping-estimate-hide').hide();
    });
  };
  return ShippingEstimator;
}();


/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(cert) {
  if (typeof cert !== 'string' || cert.length === 0) {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
}

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");









/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    (0,_form_utils__WEBPACK_IMPORTED_MODULE_6__.insertStateHiddenField)($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()($selectElement)) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(statesArray.states, function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + stateObj.name + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }
  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_object_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.object.values.js */ "./node_modules/core-js/modules/es7.object.values.js");
/* harmony import */ var core_js_modules_es7_object_values_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_values_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_3__);




var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./assets/js/theme/f/api.js":
/*!**********************************!*\
  !*** ./assets/js/theme/f/api.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ apiCall)
/* harmony export */ });
function apiCall(url, method, payload) {
  return fetch(url, {
    method: method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(function (response) {
    return response;
  });
}

/***/ }),

/***/ "./assets/js/theme/f/countdown.js":
/*!****************************************!*\
  !*** ./assets/js/theme/f/countdown.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ countdown)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");

function countdown(targetMinutes, targetElement, endMessage) {
  var countdownTarget = document.getElementById(targetElement);
  if (countdownTarget) {
    var timer = targetMinutes * 60;
    if (_bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].tools.storage.localStorageAvailable()) {
      if (localStorage.getItem(targetElement)) {
        timer = localStorage.getItem(targetElement) * 60;
      }
    }
    var countdownTimer = setInterval(function () {
      var mins = Math.floor(timer / 60);
      var secs = timer % 60;
      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }
      if (timer > 0) {
        countdownTarget.innerHTML = mins + ":" + secs;
        timer -= 1;
        if (_bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].tools.storage.localStorageAvailable()) {
          localStorage.setItem(targetElement, mins);
        }
      } else {
        countdownTarget.parentElement.innerHTML = endMessage;
        clearInterval(countdownTimer);
        if (_bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].tools.storage.localStorageAvailable()) {
          localStorage.removeItem(targetElement);
        }
      }
    }, 1000);
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXJ0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0M7QUFDTjtBQUM4QjtBQUNTO0FBQ3RCO0FBQ1o7QUFDTjtBQUNWO0FBQ1E7QUFBQSxJQUVqQlMsSUFBSSwwQkFBQUMsWUFBQTtFQUFBLFNBQUFELEtBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosSUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxJQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUNyQkUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUNOLElBQUksQ0FBQ0MsWUFBWSxHQUFHQyxDQUFDLENBQUMscUJBQXFCLENBQUM7SUFDNUMsSUFBSSxDQUFDQyxhQUFhLEdBQUdELENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUM1QyxJQUFJLENBQUNFLFdBQVcsR0FBR0YsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO0lBQzFDLElBQUksQ0FBQ0csUUFBUSxHQUFHSCxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FDM0NJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFFYjtJQUNBLElBQUksQ0FBQ0MsUUFBUSxHQUFHLGtCQUFrQjtJQUNsQyxJQUFJLENBQUNDLGtCQUFrQixHQUFHLGdCQUFnQjs7SUFFMUM7SUFDQSxJQUFJLENBQUNDLGlCQUFpQixHQUFHLHNCQUFzQjs7SUFFL0M7SUFDQSxJQUFJLENBQUNDLEtBQUssR0FBR1IsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0lBQ2pDLElBQUksQ0FBQ1MsUUFBUSxHQUFHVCxDQUFDLENBQUMsZUFBZSxDQUFDO0lBQ2xDLElBQUksQ0FBQ1UsY0FBYyxHQUFHVixDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDM0MsSUFBSSxDQUFD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RyxFQUFFLENBQUM7TUFDakMsSUFBSVcsSUFBSSxHQUFHWCxLQUFLLEdBQUcsRUFBRTtNQUVyQixJQUFJUSxJQUFJLEdBQUcsRUFBRSxFQUFFO1FBQ1hBLElBQUksU0FBT0EsSUFBTTtNQUNyQjtNQUVBLElBQUlHLElBQUksR0FBRyxFQUFFLEVBQUU7UUFDWEEsSUFBSSxTQUFPQSxJQUFNO01BQ3JCO01BRUEsSUFBSVgsS0FBSyxHQUFHLENBQUMsRUFBRTtRQUNYRixlQUFlLENBQUNjLFNBQVMsR0FBTUosSUFBSSxTQUFJRyxJQUFNO1FBQzdDWCxLQUFLLElBQUksQ0FBQztRQUNWLElBQUk3VCx3RUFBVyxDQUFDK1QsT0FBTyxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUU7VUFDN0NDLFlBQVksQ0FBQ1MsT0FBTyxDQUFDakIsYUFBYSxFQUFFWSxJQUFJLENBQUM7UUFDN0M7TUFDSixDQUFDLE1BQU07UUFDSFYsZUFBZSxDQUFDZ0IsYUFBYSxDQUFDRixTQUFTLEdBQUdmLFVBQVU7UUFDcERrQixhQUFhLENBQUNULGNBQWMsQ0FBQztRQUM3QixJQUFJblUsd0VBQVcsQ0FBQytULE9BQU8sQ0FBQ0MscUJBQXFCLENBQUMsQ0FBQyxFQUFFO1VBQzdDQyxZQUFZLENBQUNZLFVBQVUsQ0FBQ3BCLGFBQWEsQ0FBQztRQUMxQztNQUNKO0lBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNaO0FBQ0osQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsYWlyLWNhbWRlbi8uL2Fzc2V0cy9qcy90aGVtZS9jYXJ0LmpzIiwid2VicGFjazovL2ZsYWlyLWNhbWRlbi8uL2Fzc2V0cy9qcy90aGVtZS9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvci5qcyIsIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovL2ZsYWlyLWNhbWRlbi8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vc3RhdGUtY291bnRyeS5qcyIsIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyIsIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvZi9hcGkuanMiLCJ3ZWJwYWNrOi8vZmxhaXItY2FtZGVuLy4vYXNzZXRzL2pzL3RoZW1lL2YvY291bnRkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBjaGVja0lzR2lmdENlcnRWYWxpZCBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IFNoaXBwaW5nRXN0aW1hdG9yIGZyb20gJy4vY2FydC9zaGlwcGluZy1lc3RpbWF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuaW1wb3J0IGFwaUNhbGwgZnJvbSAnLi9mL2FwaSc7XG5pbXBvcnQgY291bnRkb3duIGZyb20gJy4vZi9jb3VudGRvd24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuJGNhcnRDb250ZW50ID0gJCgnW2RhdGEtY2FydC1jb250ZW50XScpO1xuICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMgPSAkKCdbZGF0YS1jYXJ0LXN0YXR1c10nKTtcbiAgICAgICAgdGhpcy4kY2FydFRvdGFscyA9ICQoJ1tkYXRhLWNhcnQtdG90YWxzXScpO1xuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydF0gLmxvYWRpbmdPdmVybGF5JylcbiAgICAgICAgICAgIC5oaWRlKCk7IC8vIFRPRE86IHRlbXBvcmFyeSB1bnRpbCByb3BlciBwdWxscyBpbiBoaXMgY2FydCBjb21wb25lbnRzXG5cbiAgICAgICAgLy8gQ2xhc3Nlc1xuICAgICAgICB0aGlzLmNsYXNzUm93ID0gJy5jYXJ0LWl0ZW0tdGl0bGUnO1xuICAgICAgICB0aGlzLmNsYXNzUmVzdWx0TWVzc2FnZSA9ICcubGlzdC1mZWVkYmFjayc7XG5cbiAgICAgICAgLy8gQ2xhc3MgbmFtZXNcbiAgICAgICAgdGhpcy5jbGFzc05hbWVSb3dFcnJvciA9ICdsaXN0LWFkZF9fcm93LS1lcnJvcic7XG5cbiAgICAgICAgLy8gRnVuY3Rpb25hbCBhc3NpZ25tZW50c1xuICAgICAgICB0aGlzLiRmb3JtID0gJCgnLmNhcnQtbGlzdC1mb3JtJyk7XG4gICAgICAgIHRoaXMuJG5ld0xpc3QgPSAkKCcuYWRkLW5ldy1saXN0Jyk7XG4gICAgICAgIHRoaXMuJGFkZGluZ092ZXJsYXkgPSAkKCcubG9hZGluZy1vdmVybGF5Jyk7XG4gICAgICAgIHRoaXMuJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5zaG93Q2FydENvdW50ZG93bikge1xuICAgICAgICAgICAgY291bnRkb3duKHRoaXMuY29udGV4dC5jYXJ0Q291bnRkb3duVGltZXIsICdjYXJ0LWNvdW50ZG93bicsIHRoaXMuY29udGV4dC5jYXJ0Q291bnRkb3duRW5kTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldFN0YXRlKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudExvb3AgPSAwO1xuICAgIH1cblxuICAgIC8vIFJ1biBBSkFYIGNhbGxzIG9uZSBieSBvbmVcbiAgICBoYW5kbGVBamF4KCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9vcCA8IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKHRoaXMuY2xhc3NSZXN1bHRNZXNzYWdlKS5odG1sKGBTYXZpbmc8YnI+ICR7dGhpcy5pdGVtc1t0aGlzLmN1cnJlbnRMb29wXS5wbmFtZX08YnI+IHRvIHlvdXIgbGlzdGApO1xuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodGhpcy5pdGVtc1t0aGlzLmN1cnJlbnRMb29wXS51cmwsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2YvYjJiL2FkZC10by1saXN0LXJlc3BvbnNlJyxcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEluY3JlbWVudCAnY3VycmVudCcgYW5kIHJ1biBBSkFYIGNhbGwgYWdhaW5cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMb29wKys7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBamF4KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExhc3QgYXR0ZW1wdCwgcmVkaXJlY3Qgb25seVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9vcCA9PT0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuJGFkZGluZ092ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0VGFyZ2V0ICE9PSAnJyAmJiB0aGlzLmxpc3RUYXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL3dpc2hsaXN0LnBocD9hY3Rpb249dmlld3dpc2hsaXN0aXRlbXMke3RoaXMubGlzdFRhcmdldH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJy93aXNobGlzdC5waHAnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gJCgnLm11bHRpX2FkZF9fY2FydC1idXR0b24nKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgICAgICAvLyAkKCcubXVsdGktYWRkX19yb3dbZGF0YS1zdGF0dXM9c3VjY2Vzc10nKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2Nlc3NGb3JtKGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy4kYWRkaW5nT3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgY29uc3QgYWxsUm93cyA9ICQoZm9ybSkuZmluZCh0aGlzLmNsYXNzUm93KTtcbiAgICAgICAgY29uc3QgYWxsTWVzc2FnZXMgPSBhbGxSb3dzLmZpbmQodGhpcy5jbGFzc1Jlc3VsdE1lc3NhZ2UpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuXG4gICAgICAgIC8vIEZvciBlYWNoIHJvdywgYWRkIHRoZSBVUkwgYW5kIHRhcmdldCB0byB0aGUgaXRlbXMgYXJyYXlcbiAgICAgICAgYWxsUm93cy5lYWNoKChpbmRleCwgcm93KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHJvdyk7XG4gICAgICAgICAgICBjb25zdCBwaWQgPSB0YXJnZXQuZmluZCgnW2RhdGEtcGlkXScpLnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgcG5hbWUgPSB0YXJnZXQuZmluZCgnLmNhcnQtaXRlbS1uYW1lJykuYXR0cignZGF0YS1wbmFtZScpO1xuICAgICAgICAgICAgdGhpcy5saXN0VGFyZ2V0ID0gJCgnI2xpc3QtaWQnKS52YWwoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFRhcmdldCAhPT0gJycgJiYgdGhpcy5saXN0VGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RUYXJnZXQgPSBgJndpc2hsaXN0aWQ9JHt0aGlzLmxpc3RUYXJnZXR9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0VGFyZ2V0ID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAvd2lzaGxpc3QucGhwP2FjdGlvbj1hZGQmcHJvZHVjdF9pZD0ke3BpZH0ke3RoaXMubGlzdFRhcmdldH1gO1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgICAgIHBuYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRvIGFkZCBsYW5nIHN0cmluZ1xuICAgICAgICBhbGxNZXNzYWdlcy50ZXh0KCdTYXZpbmcgdG8gbGlzdC4uLicpLnNob3coKTtcbiAgICAgICAgdGhpcy5oYW5kbGVBamF4KCk7XG4gICAgfVxuXG4gICAgb3BlbkFkZExpc3QoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKCcvY2FydC5waHAnLCB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2YvY2FydC9hZGQtbGlzdC1mb3JtJyxcbiAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICQoJyN3aXNobGlzdG5hbWUnKS5zZWxlY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kYWwub3BlbigpO1xuICAgIH1cblxuICAgIGFkZE5ld0xpc3QoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9ICQoJyN3aXNobGlzdG5hbWUnKS52YWwoKTtcbiAgICAgICAgY29uc3Qgc2hhcmVkTGlzdCA9ICQoJyNwdWJsaWN3aXNobGlzdCcpLnZhbCgpO1xuICAgICAgICBjb25zdCB0YXJnZXRVcmwgPSAnL3dpc2hsaXN0LnBocD9hY3Rpb249YWRkd2lzaGxpc3QmcHJvZHVjdF9pZD0nO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogdGFyZ2V0VXJsLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHdpc2hsaXN0bmFtZTogbGlzdE5hbWUsXG4gICAgICAgICAgICAgICAgcHVibGljd2lzaGxpc3Q6IHNoYXJlZExpc3QsXG4gICAgICAgICAgICAgICAgc3VibWl0OiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSgnL3dpc2hsaXN0LnBocCcsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2YvYjJiL2xpc3QtYWRkZWQtcmVzcG9uc2UnLFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBjb250ZW50cyBvZiAnLmxpc3Qtc2VsZWN0b3InIHdpdGggcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgJCgnLmxpc3Qtc2VsZWN0b3InKS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRVcGRhdGUoJHRhcmdldCkge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgY29uc3QgJGVsID0gJChgI3F0eS0ke2l0ZW1JZH1gKTtcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcGFyc2VJbnQoJGVsLnZhbCgpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eS1tYXgnKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHktbWluJyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHktbWluLWVycm9yJyk7XG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5LW1heC1lcnJvcicpO1xuICAgICAgICBjb25zdCBuZXdRdHkgPSAkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJyA/IG9sZFF0eSArIDEgOiBvbGRRdHkgLSAxO1xuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaWZ5IGZvciBtaW4vbWF4IHF1YW50aXR5XG4gICAgICAgIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsID0gbnVsbCkge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnQtaXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eS1taW4nKSwgMTApO1xuICAgICAgICBjb25zdCBvbGRRdHkgPSBwcmVWYWwgIT09IG51bGwgPyBwcmVWYWwgOiBtaW5RdHk7XG4gICAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KE51bWJlcigkZWwudmFsKCkpLCAxMCk7XG5cbiAgICAgICAgbGV0IGludmFsaWRFbnRyeTtcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAobmV3UXR5IDwgMCB8fCBOdW1iZXIuaXNOYU4obmV3UXR5KSkge1xuICAgICAgICAgICAgaW52YWxpZEVudHJ5ID0gJGVsLnZhbCgpO1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LmludmFsaWRFbnRyeU1lc3NhZ2UucmVwbGFjZSgnW0VOVFJZXScsIGludmFsaWRFbnRyeSksXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtUmVtb3ZlKGl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0RWRpdE9wdGlvbnMoaXRlbUlkKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2NvbmZpZ3VyZS1wcm9kdWN0JyxcbiAgICAgICAgfTtcblxuICAgICAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLmNvbmZpZ3VyZUluQ2FydChpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHV0aWxzLmhvb2tzLm9uKCdwcm9kdWN0LW9wdGlvbi1jaGFuZ2UnLCAoZXZlbnQsIGN1cnJlbnRUYXJnZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xuICAgICAgICAgICAgY29uc3QgJHN1Ym1pdCA9ICQoJ2lucHV0LmJ1dHRvbicsICRmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLmFsZXJ0TWVzc2FnZUJveCcpO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9ICQoJ1tuYW1lPVwiaXRlbV9pZFwiXScsICRmb3JtKS5hdHRyKCd2YWx1ZScpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKGl0ZW0sICRmb3JtLnNlcmlhbGl6ZSgpLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGEgfHwge307XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgncC5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnJlc2hDb250ZW50KHJlbW92ZSwgZW1wdHkpIHtcbiAgICAgICAgY29uc3QgJGNhcnRJdGVtc1Jvd3MgPSAkKCdbZGF0YS1pdGVtLXJvd10nLCB0aGlzLiRjYXJ0Q29udGVudCk7XG4gICAgICAgIGNvbnN0ICRjYXJ0UGFnZVRpdGxlID0gJCgnW2RhdGEtY2FydC1wYWdlLXRpdGxlXScpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnY2FydC9jb250ZW50JyxcbiAgICAgICAgICAgICAgICB0b3RhbHM6ICdjYXJ0L3RvdGFscycsXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAnY2FydC9wYWdlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlczogJ2NhcnQvc3RhdHVzLW1lc3NhZ2VzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxhc3QgaXRlbSBmcm9tIGNhcnQ/IFJlbG9hZFxuICAgICAgICBpZiAocmVtb3ZlICYmICRjYXJ0SXRlbXNSb3dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gZnJvbSBjYXJ0PyBSZWxvYWRcbiAgICAgICAgaWYgKHJlbW92ZSAmJiBlbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0VG90YWxzLmh0bWwocmVzcG9uc2UudG90YWxzKTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcy5odG1sKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2VzKTtcblxuICAgICAgICAgICAgJGNhcnRQYWdlVGl0bGUucmVwbGFjZVdpdGgocmVzcG9uc2UucGFnZVRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCB0aGlzLiRjYXJ0Q29udGVudCkuZGF0YSgnY2FydC1xdWFudGl0eScpIHx8IDA7XG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRDYXJ0RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBkZWJvdW5jZVRpbWVvdXQgPSA0MDA7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGUgPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGUsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSA9IF8uYmluZChfLmRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBjb25zdCBjYXJ0UmVtb3ZlSXRlbSA9IF8uYmluZChfLmRlYm91bmNlKHRoaXMuY2FydFJlbW92ZUl0ZW0sIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBsZXQgcHJlVmFsO1xuXG4gICAgICAgIC8vIGNhcnQgdXBkYXRlXG4gICAgICAgICQoJ1tkYXRhLWNhcnQtdXBkYXRlXScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcbiAgICAgICAgICAgIGNhcnRVcGRhdGUoJHRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNsZWFyIGNhcnRcbiAgICAgICAgJCgnW2RhdGEtY2FydC1jbGVhcl0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGFwaUNhbGwoYC9hcGkvc3RvcmVmcm9udC9jYXJ0cy8ke3RoaXMuY29udGV4dC5jYXJ0SWR9YCwgJ0RFTEVURScsIHt9KVxuICAgICAgICAgICAgICAgIC50aGVuKHRoaXMucmVmcmVzaENvbnRlbnQodHJ1ZSwgdHJ1ZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYXJ0IHF0eSBtYW51YWxseSB1cGRhdGVzXG4gICAgICAgICQoJy5jYXJ0LWl0ZW0tcXR5LWlucHV0JywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdmb2N1cycsIGZ1bmN0aW9uIG9uUXR5Rm9jdXMoKSB7XG4gICAgICAgICAgICBwcmVWYWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KS5jaGFuZ2UoZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY2FydC1yZW1vdmUnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY29uZmlybURlbGV0ZScpO1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHRoaXMuY29udGV4dC5jYW5jZWxCdXR0b25UZXh0XG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgaXRlbSBmcm9tIGNhcnRcbiAgICAgICAgICAgICAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWVkaXRdJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUVkaXQnKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGVkaXQgaXRlbSBpbiBjYXJ0XG4gICAgICAgICAgICB0aGlzLmNhcnRFZGl0T3B0aW9ucyhpdGVtSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kUHJvbW9Db2RlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCAkY291cG9uQ29udGFpbmVyID0gJCgnLmNvdXBvbi1jb2RlJyk7XG4gICAgICAgIGNvbnN0ICRjb3Vwb25Gb3JtID0gJCgnLmNvdXBvbi1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRjb2RlSW5wdXQgPSAkKCdbbmFtZT1cImNvdXBvbmNvZGVcIl0nLCAkY291cG9uRm9ybSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5zaG93KCk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuc2hvdygpO1xuICAgICAgICAgICAgJGNvZGVJbnB1dC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5oaWRlKCk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLnNob3coKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNvdXBvbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY29kZUlucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBFbXB0eSBjb2RlXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICRjb2RlSW5wdXQuZGF0YSgnZXJyb3InKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlDb2RlKGNvZGUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGNlcnRDb250YWluZXIgPSAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jb2RlJyk7XG4gICAgICAgIGNvbnN0ICRjZXJ0Rm9ybSA9ICQoJy5jYXJ0LWdpZnQtY2VydGlmaWNhdGUtZm9ybScpO1xuICAgICAgICBjb25zdCAkY2VydElucHV0ID0gJCgnW25hbWU9XCJjZXJ0Y29kZVwiXScsICRjZXJ0Rm9ybSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlKCk7XG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1hZGQnKS50b2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkY2VydEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY2VydElucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIWNoZWNrSXNHaWZ0Q2VydFZhbGlkKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdmFsaWRhdGlvbkRpY3Rpb25hcnkuaW52YWxpZF9naWZ0X2NlcnRpZmljYXRlLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUdpZnRDZXJ0aWZpY2F0ZShjb2RlLCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1naWZ0d3JhcF0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1HaWZ0d3JhcCcpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2dpZnQtd3JhcHBpbmctZm9ybScsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zKGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0V3JhcHBpbmdGb3JtKCkge1xuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJHNlbGVjdC52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gJHNlbGVjdC5kYXRhKCdpbmRleCcpO1xuXG4gICAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhbGxvd01lc3NhZ2UgPSAkc2VsZWN0LmZpbmQoYG9wdGlvblt2YWx1ZT0ke2lkfV1gKS5kYXRhKCdhbGxvd01lc3NhZ2UnKTtcblxuICAgICAgICAgICAgJChgLmdpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctaW1hZ2UtJHtpbmRleH0tJHtpZH1gKS5zaG93KCk7XG5cbiAgICAgICAgICAgIGlmIChhbGxvd01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLW1lc3NhZ2UtJHtpbmRleH1gKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVWaWV3cygpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJCgnaW5wdXQ6cmFkaW9bbmFtZSA9XCJnaWZ0d3JhcHR5cGVcIl06Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgJHNpbmdsZUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLXNpbmdsZScpO1xuICAgICAgICAgICAgY29uc3QgJG11bHRpRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctbXVsdGlwbGUnKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnc2FtZScpIHtcbiAgICAgICAgICAgICAgICAkc2luZ2xlRm9ybS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tuYW1lPVwiZ2lmdHdyYXB0eXBlXCJdJykub24oJ2NsaWNrJywgdG9nZ2xlVmlld3MpO1xuXG4gICAgICAgIHRvZ2dsZVZpZXdzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5iaW5kQ2FydEV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRQcm9tb0NvZGVFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMuJGZvcm0ub24oJ2NsaWNrJywgJ1tkYXRhLXNhdmUtY2FydF0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NGb3JtKGV2ZW50LCB0aGlzLiRmb3JtWzBdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kbmV3TGlzdC5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW5BZGRMaXN0KGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZG9jdW1lbnQub24oJ2NsaWNrJywgJy5hZGQtbmV3LWxpc3QtZm9ybSAuYnV0dG9uJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGROZXdMaXN0KGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaW5pdGlhdGUgc2hpcHBpbmcgZXN0aW1hdG9yIG1vZHVsZVxuICAgICAgICBjb25zdCBzaGlwcGluZ0Vycm9yTWVzc2FnZXMgPSB7XG4gICAgICAgICAgICBjb3VudHJ5OiB0aGlzLmNvbnRleHQuc2hpcHBpbmdDb3VudHJ5RXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgcHJvdmluY2U6IHRoaXMuY29udGV4dC5zaGlwcGluZ1Byb3ZpbmNlRXJyb3JNZXNzYWdlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9IG5ldyBTaGlwcGluZ0VzdGltYXRvcigkKCdbZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJyksIHNoaXBwaW5nRXJyb3JNZXNzYWdlcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuLi9jb21tb24vZm9ybS11dGlscyc7XG5pbXBvcnQgc3dhbCBmcm9tICcuLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ0VzdGltYXRvciB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQsIHNoaXBwaW5nRXJyb3JNZXNzYWdlcykge1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMgPSBzaGlwcGluZ0Vycm9yTWVzc2FnZXM7XG4gICAgICAgIHRoaXMuaW5pdEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpO1xuICAgICAgICB0aGlzLmJpbmRFc3RpbWF0b3JFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IgPSAnZm9ybVtkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nO1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdGAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXQnLCB0aGlzLiRlbGVtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIGNvdW50cmllcywgdGhlIHN0YXRlL3JlZ2lvbiBpcyBkeW5hbWljXG4gICAgICAgICAgICAvLyBPbmx5IHBlcmZvcm0gYSBjaGVjayBmb3IgYWxsIGZpZWxkcyB3aGVuIGNvdW50cnkgaGFzIGEgdmFsdWVcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhcmVBbGwoJ3ZhbGlkJykgd2lsbCBjaGVjayBjb3VudHJ5IGZvciB2YWxpZGl0eVxuICAgICAgICAgICAgaWYgKCQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCkudmFsKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmluZFZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFVQU1JhdGVzKCk7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRyeUlkID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvdW50cnlJZCAhPT0gMCAmJiAhTnVtYmVyLmlzTmFOKGNvdW50cnlJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMuY291bnRyeVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsZSA9ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlVmFsID0gJGVsZS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlVmFsICYmIGVsZVZhbC5sZW5ndGggJiYgZWxlVmFsICE9PSAnU3RhdGUvcHJvdmluY2UnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMucHJvdmluY2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBiZXR3ZWVuIGRlZmF1bHQgc2hpcHBpbmcgYW5kIHVwcyBzaGlwcGluZyByYXRlc1xuICAgICAqL1xuICAgIGJpbmRVUFNSYXRlcygpIHtcbiAgICAgICAgY29uc3QgVVBTUmF0ZVRvZ2dsZSA9ICcuZXN0aW1hdG9yLWZvcm0tdG9nZ2xlVVBTUmF0ZSc7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIFVQU1JhdGVUb2dnbGUsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1VcHMgPSAkKCcuZXN0aW1hdG9yLWZvcm0tLXVwcycpO1xuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1EZWZhdWx0ID0gJCgnLmVzdGltYXRvci1mb3JtLS1kZWZhdWx0Jyk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRlc3RpbWF0b3JGb3JtVXBzLnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybURlZmF1bHQudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpIHtcbiAgICAgICAgbGV0ICRsYXN0O1xuXG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgc3RhdGVDb3VudHJ5KHRoaXMuJHN0YXRlLCB0aGlzLmNvbnRleHQsIHsgdXNlSWRGb3JTdGF0ZXM6IHRydWUgfSwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5nZXRTdGF0dXModGhpcy4kc3RhdGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGF0ZS9wcm92aW5jZScpO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSB0aGlzIGNsYXNzIHdoZW4gd2Ugc3dhcCBzaW5jZSBub2QgdmFsaWRhdGlvbiBkb2Vzbid0IGNsZWFudXAgZm9yIHVzXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEVzdGltYXRvckV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckNvbnRhaW5lciA9ICQoJy5zaGlwcGluZy1lc3RpbWF0b3InKTtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm0gPSAkKCcuZXN0aW1hdG9yLWZvcm0nKTtcblxuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGVzdGltYXRvckNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLnNob3coKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VydCkge1xuICAgIGlmICh0eXBlb2YgY2VydCAhPT0gJ3N0cmluZycgfHwgY2VydC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEFkZCBhbnkgY3VzdG9tIGdpZnQgY2VydGlmaWNhdGUgdmFsaWRhdGlvbiBsb2dpYyBoZXJlXG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGluc2VydFN0YXRlSGlkZGVuRmllbGQgfSBmcm9tICcuL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuXG4vKipcbiAqIElmIHRoZXJlIGFyZSBubyBvcHRpb25zIGZyb20gYmNhcHAsIGEgdGV4dCBmaWVsZCB3aWxsIGJlIHNlbnQuIFRoaXMgd2lsbCBjcmVhdGUgYSBzZWxlY3QgZWxlbWVudCB0byBob2xkIG9wdGlvbnMgYWZ0ZXIgdGhlIHJlbW90ZSByZXF1ZXN0LlxuICogQHJldHVybnMge2pRdWVyeXxIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gbWFrZVN0YXRlUmVxdWlyZWQoc3RhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cnMgPSBfLnRyYW5zZm9ybShzdGF0ZUVsZW1lbnQucHJvcCgnYXR0cmlidXRlcycpLCAocmVzdWx0LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICAgICAgcmV0W2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICBpZDogYXR0cnMuaWQsXG4gICAgICAgICdkYXRhLWxhYmVsJzogYXR0cnNbJ2RhdGEtbGFiZWwnXSxcbiAgICAgICAgY2xhc3M6ICdmb3JtLXNlbGVjdCcsXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXG4gICAgICAgICdkYXRhLWZpZWxkLXR5cGUnOiBhdHRyc1snZGF0YS1maWVsZC10eXBlJ10sXG4gICAgfTtcblxuICAgIHN0YXRlRWxlbWVudC5yZXBsYWNlV2l0aCgkKCc8c2VsZWN0Pjwvc2VsZWN0PicsIHJlcGxhY2VtZW50QXR0cmlidXRlcykpO1xuXG4gICAgY29uc3QgJG5ld0VsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcbiAgICBjb25zdCAkaGlkZGVuSW5wdXQgPSAkKCdbbmFtZSo9XCJGb3JtRmllbGRJc1RleHRcIl0nKTtcblxuICAgIGlmICgkaGlkZGVuSW5wdXQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICRoaWRkZW5JbnB1dC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAoJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFN0cmluZyBpcyBpbmplY3RlZCBmcm9tIGxvY2FsaXplclxuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuYXBwZW5kKGA8c21hbGw+JHtjb250ZXh0LnJlcXVpcmVkfTwvc21hbGw+YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuc2hvdygpO1xuICAgIH1cblxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBJZiBhIGNvdW50cnkgd2l0aCBzdGF0ZXMgaXMgdGhlIGRlZmF1bHQsIGEgc2VsZWN0IHdpbGwgYmUgc2VudCxcbiAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gc3dpdGNoIHRvIGFuIGlucHV0IGZpZWxkIGFuZCBoaWRlIHRoZSByZXF1aXJlZCBmaWVsZFxuICovXG5mdW5jdGlvbiBtYWtlU3RhdGVPcHRpb25hbChzdGF0ZUVsZW1lbnQpIHtcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50QXR0cmlidXRlcyA9IHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBpZDogYXR0cnMuaWQsXG4gICAgICAgICdkYXRhLWxhYmVsJzogYXR0cnNbJ2RhdGEtbGFiZWwnXSxcbiAgICAgICAgY2xhc3M6ICdmb3JtLWlucHV0JyxcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcbiAgICB9O1xuXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxpbnB1dCAvPicsIHJlcGxhY2VtZW50QXR0cmlidXRlcykpO1xuXG4gICAgY29uc3QgJG5ld0VsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcblxuICAgIGlmICgkbmV3RWxlbWVudC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCgkbmV3RWxlbWVudCk7XG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLmhpZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogQWRkcyB0aGUgYXJyYXkgb2Ygb3B0aW9ucyBmcm9tIHRoZSByZW1vdGUgcmVxdWVzdCB0byB0aGUgbmV3bHkgY3JlYXRlZCBzZWxlY3QgYm94LlxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlc0FycmF5XG4gKiBAcGFyYW0ge2pRdWVyeX0gJHNlbGVjdEVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGFkZE9wdGlvbnMoc3RhdGVzQXJyYXksICRzZWxlY3RFbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gW107XG5cbiAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIlwiPiR7c3RhdGVzQXJyYXkucHJlZml4fTwvb3B0aW9uPmApO1xuXG4gICAgaWYgKCFfLmlzRW1wdHkoJHNlbGVjdEVsZW1lbnQpKSB7XG4gICAgICAgIF8uZWFjaChzdGF0ZXNBcnJheS5zdGF0ZXMsIChzdGF0ZU9iaikgPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudXNlSWRGb3JTdGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIiR7c3RhdGVPYmouaWR9XCI+JHtzdGF0ZU9iai5uYW1lfTwvb3B0aW9uPmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIiR7c3RhdGVPYmoubmFtZX1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRzZWxlY3RFbGVtZW50Lmh0bWwoY29udGFpbmVyLmpvaW4oJyAnKSk7XG4gICAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge2pRdWVyeX0gc3RhdGVFbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZUVsZW1lbnQsIGNvbnRleHQgPSB7fSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAvKipcbiAgICAgKiBCYWNrd2FyZHMgY29tcGF0aWJsZSBmb3IgdGhyZWUgcGFyYW1ldGVycyBpbnN0ZWFkIG9mIGZvdXJcbiAgICAgKlxuICAgICAqIEF2YWlsYWJsZSBvcHRpb25zOlxuICAgICAqXG4gICAgICogdXNlSWRGb3JTdGF0ZXMge0Jvb2x9IC0gR2VuZXJhdGVzIHN0YXRlcyBkcm9wZG93biB1c2luZyBpZCBmb3IgdmFsdWVzIGluc3RlYWQgb2Ygc3RyaW5nc1xuICAgICAqL1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIH1cblxuICAgICQoJ3NlbGVjdFtkYXRhLWZpZWxkLXR5cGU9XCJDb3VudHJ5XCJdJykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgY291bnRyeU5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuXG4gICAgICAgIGlmIChjb3VudHJ5TmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jb3VudHJ5LmdldEJ5TmFtZShjb3VudHJ5TmFtZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChjb250ZXh0LnN0YXRlX2Vycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRJbnB1dCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgICAgICAgICBpZiAoIV8uaXNFbXB0eShyZXNwb25zZS5kYXRhLnN0YXRlcykpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBtYXkgaGF2ZSBiZWVuIHJlcGxhY2VkIHdpdGggYSBzZWxlY3QsIHJlc2VsZWN0IGl0XG4gICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdEVsZW1lbnQgPSBtYWtlU3RhdGVSZXF1aXJlZCgkY3VycmVudElucHV0LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGFkZE9wdGlvbnMocmVzcG9uc2UuZGF0YSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsICRzZWxlY3RFbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IG1ha2VTdGF0ZU9wdGlvbmFsKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbmV3RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBpQ2FsbCh1cmwsIG1ldGhvZCwgcGF5bG9hZCkge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZSk7XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb3VudGRvd24odGFyZ2V0TWludXRlcywgdGFyZ2V0RWxlbWVudCwgZW5kTWVzc2FnZSkge1xuICAgIGNvbnN0IGNvdW50ZG93blRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldEVsZW1lbnQpO1xuXG4gICAgaWYgKGNvdW50ZG93blRhcmdldCkge1xuICAgICAgICBsZXQgdGltZXIgPSB0YXJnZXRNaW51dGVzICogNjA7XG5cbiAgICAgICAgaWYgKHV0aWxzLnRvb2xzLnN0b3JhZ2UubG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YXJnZXRFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRpbWVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGFyZ2V0RWxlbWVudCkgKiA2MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvdW50ZG93blRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1pbnMgPSBNYXRoLmZsb29yKHRpbWVyIC8gNjApO1xuICAgICAgICAgICAgbGV0IHNlY3MgPSB0aW1lciAlIDYwO1xuXG4gICAgICAgICAgICBpZiAobWlucyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgbWlucyA9IGAwJHttaW5zfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWNzIDwgMTApIHtcbiAgICAgICAgICAgICAgICBzZWNzID0gYDAke3NlY3N9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRpbWVyID4gMCkge1xuICAgICAgICAgICAgICAgIGNvdW50ZG93blRhcmdldC5pbm5lckhUTUwgPSBgJHttaW5zfToke3NlY3N9YDtcbiAgICAgICAgICAgICAgICB0aW1lciAtPSAxO1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy50b29scy5zdG9yYWdlLmxvY2FsU3RvcmFnZUF2YWlsYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhcmdldEVsZW1lbnQsIG1pbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnRkb3duVGFyZ2V0LnBhcmVudEVsZW1lbnQuaW5uZXJIVE1MID0gZW5kTWVzc2FnZTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNvdW50ZG93blRpbWVyKTtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMudG9vbHMuc3RvcmFnZS5sb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0YXJnZXRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJ1dGlscyIsIlBhZ2VNYW5hZ2VyIiwiY2hlY2tJc0dpZnRDZXJ0VmFsaWQiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJTaGlwcGluZ0VzdGltYXRvciIsImRlZmF1bHRNb2RhbCIsInN3YWwiLCJhcGlDYWxsIiwiY291bnRkb3duIiwiQ2FydCIsIl9QYWdlTWFuYWdlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiJGNhcnRDb250ZW50IiwiJCIsIiRjYXJ0TWVzc2FnZXMiLCIkY2FydFRvdGFscyIsIiRvdmVybGF5IiwiaGlkZSIsImNsYXNzUm93IiwiY2xhc3NSZXN1bHRNZXNzYWdlIiwiY2xhc3NOYW1lUm93RXJyb3IiLCIkZm9ybSIsIiRuZXdMaXN0IiwiJGFkZGluZ092ZXJsYXkiLCIkZG9jdW1lbnQiLCJkb2N1bWVudCIsInJlc2V0U3RhdGUiLCJiaW5kRXZlbnRzIiwiY29udGV4dCIsInNob3dDYXJ0Q291bnRkb3duIiwiY2FydENvdW50ZG93blRpbWVyIiwiY2FydENvdW50ZG93bkVuZE1lc3NhZ2UiLCJpdGVtcyIsImVycm9ycyIsImN1cnJlbnRMb29wIiwiaGFuZGxlQWpheCIsIl90aGlzIiwibGVuZ3RoIiwiaHRtbCIsInBuYW1lIiwiYXBpIiwiZ2V0UGFnZSIsInVybCIsInRlbXBsYXRlIiwiZXJyIiwiRXJyb3IiLCJsaXN0VGFyZ2V0IiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJocmVmIiwicHJvY2Vzc0Zvcm0iLCJldmVudCIsImZvcm0iLCJfdGhpczIiLCJwcmV2ZW50RGVmYXVsdCIsInNob3ciLCJhbGxSb3dzIiwiZmluZCIsImFsbE1lc3NhZ2VzIiwiZWFjaCIsImluZGV4Iiwicm93IiwidGFyZ2V0IiwicGlkIiwidmFsIiwiYXR0ciIsInB1c2giLCJ0ZXh0Iiwib3BlbkFkZExpc3QiLCJtb2RhbCIsInJlc3BvbnNlIiwidXBkYXRlQ29udGVudCIsInNlbGVjdCIsIm9wZW4iLCJhZGROZXdMaXN0IiwibGlzdE5hbWUiLCJzaGFyZWRMaXN0IiwidGFyZ2V0VXJsIiwiYWpheCIsIm1ldGhvZCIsImRhdGEiLCJ3aXNobGlzdG5hbWUiLCJwdWJsaWN3aXNobGlzdCIsInN1Ym1pdCIsImRvbmUiLCJjbG9zZSIsImNhcnRVcGRhdGUiLCIkdGFyZ2V0IiwiX3RoaXMzIiwiaXRlbUlkIiwiJGVsIiwib2xkUXR5IiwicGFyc2VJbnQiLCJtYXhRdHkiLCJtaW5RdHkiLCJtaW5FcnJvciIsIm1heEVycm9yIiwibmV3UXR5IiwidHlwZSIsImNhcnQiLCJpdGVtVXBkYXRlIiwic3RhdHVzIiwicmVtb3ZlIiwicmVmcmVzaENvbnRlbnQiLCJqb2luIiwiY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UiLCJwcmVWYWwiLCJfdGhpczQiLCJOdW1iZXIiLCJpbnZhbGlkRW50cnkiLCJpc05hTiIsImludmFsaWRFbnRyeU1lc3NhZ2UiLCJyZXBsYWNlIiwiY2FydFJlbW92ZUl0ZW0iLCJfdGhpczUiLCJpdGVtUmVtb3ZlIiwidGhlbiIsImNhcnRFZGl0T3B0aW9ucyIsIl90aGlzNiIsIm9wdGlvbnMiLCJwcm9kdWN0QXR0cmlidXRlcyIsImNvbmZpZ3VyZUluQ2FydCIsImNvbnRlbnQiLCJiaW5kR2lmdFdyYXBwaW5nRm9ybSIsImhvb2tzIiwib24iLCJjdXJyZW50VGFyZ2V0IiwiJGNoYW5nZWRPcHRpb24iLCJwYXJlbnRzIiwiJHN1Ym1pdCIsIiRtZXNzYWdlQm94IiwiaXRlbSIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsInJlc3VsdCIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInByb3AiLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCJlbXB0eSIsIl90aGlzNyIsIiRjYXJ0SXRlbXNSb3dzIiwiJGNhcnRQYWdlVGl0bGUiLCJ0b3RhbHMiLCJwYWdlVGl0bGUiLCJzdGF0dXNNZXNzYWdlcyIsIndpbmRvdyIsInJlbG9hZCIsImdldENvbnRlbnQiLCJyZXBsYWNlV2l0aCIsInF1YW50aXR5IiwidHJpZ2dlciIsImJpbmRDYXJ0RXZlbnRzIiwiX3RoaXM4IiwiZGVib3VuY2VUaW1lb3V0IiwiX2JpbmQiLCJfZGVib3VuY2UiLCJjYXJ0SWQiLCJvblF0eUZvY3VzIiwidmFsdWUiLCJjaGFuZ2UiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzdHJpbmciLCJzaG93Q2FuY2VsQnV0dG9uIiwiY2FuY2VsQnV0dG9uVGV4dCIsImJpbmRQcm9tb0NvZGVFdmVudHMiLCJfdGhpczkiLCIkY291cG9uQ29udGFpbmVyIiwiJGNvdXBvbkZvcm0iLCIkY29kZUlucHV0IiwiY29kZSIsImFwcGx5Q29kZSIsImJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMiLCJfdGhpczAiLCIkY2VydENvbnRhaW5lciIsIiRjZXJ0Rm9ybSIsIiRjZXJ0SW5wdXQiLCJ0b2dnbGUiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImZpcmUiLCJpbnZhbGlkX2dpZnRfY2VydGlmaWNhdGUiLCJpY29uIiwiYXBwbHlHaWZ0Q2VydGlmaWNhdGUiLCJyZXNwIiwiYmluZEdpZnRXcmFwcGluZ0V2ZW50cyIsIl90aGlzMSIsImdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zIiwiJHNlbGVjdCIsImlkIiwiYWxsb3dNZXNzYWdlIiwidG9nZ2xlVmlld3MiLCIkc2luZ2xlRm9ybSIsIiRtdWx0aUZvcm0iLCJfdGhpczEwIiwic2hpcHBpbmdFcnJvck1lc3NhZ2VzIiwiY291bnRyeSIsInNoaXBwaW5nQ291bnRyeUVycm9yTWVzc2FnZSIsInByb3ZpbmNlIiwic2hpcHBpbmdQcm92aW5jZUVycm9yTWVzc2FnZSIsInNoaXBwaW5nRXN0aW1hdG9yIiwiZGVmYXVsdCIsInN0YXRlQ291bnRyeSIsIm5vZCIsIlZhbGlkYXRvcnMiLCIkZWxlbWVudCIsIiRzdGF0ZSIsImluaXRGb3JtVmFsaWRhdGlvbiIsImJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UiLCJiaW5kRXN0aW1hdG9yRXZlbnRzIiwic2hpcHBpbmdWYWxpZGF0b3IiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJiaW5kVmFsaWRhdGlvbiIsImJpbmRTdGF0ZVZhbGlkYXRpb24iLCJiaW5kVVBTUmF0ZXMiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJjb3VudHJ5SWQiLCJlcnJvck1lc3NhZ2UiLCIkZWxlIiwiZWxlVmFsIiwiVVBTUmF0ZVRvZ2dsZSIsIiRlc3RpbWF0b3JGb3JtVXBzIiwiJGVzdGltYXRvckZvcm1EZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCIkbGFzdCIsInVzZUlkRm9yU3RhdGVzIiwiZmllbGQiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJpcyIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJyZW1vdmVDbGFzcyIsIiRlc3RpbWF0b3JDb250YWluZXIiLCIkZXN0aW1hdG9yRm9ybSIsInBhcmFtcyIsImNvdW50cnlfaWQiLCJzdGF0ZV9pZCIsImNpdHkiLCJ6aXBfY29kZSIsImdldFNoaXBwaW5nUXVvdGVzIiwiY2xpY2tFdmVudCIsInF1b3RlSWQiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwiYWRkQ2xhc3MiLCJjZXJ0IiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsInNob3dBbGVydE1vZGFsIiwibWFrZVN0YXRlUmVxdWlyZWQiLCJzdGF0ZUVsZW1lbnQiLCJhdHRycyIsIl90cmFuc2Zvcm0iLCJyZXQiLCJuYW1lIiwicmVwbGFjZW1lbnRBdHRyaWJ1dGVzIiwiY2xhc3MiLCIkbmV3RWxlbWVudCIsIiRoaWRkZW5JbnB1dCIsInByZXYiLCJhcHBlbmQiLCJyZXF1aXJlZCIsIm1ha2VTdGF0ZU9wdGlvbmFsIiwiYWRkT3B0aW9ucyIsInN0YXRlc0FycmF5IiwiJHNlbGVjdEVsZW1lbnQiLCJjb250YWluZXIiLCJwcmVmaXgiLCJfaXNFbXB0eSIsIl9lYWNoIiwic3RhdGVzIiwic3RhdGVPYmoiLCJjYWxsYmFjayIsImNvdW50cnlOYW1lIiwiZ2V0QnlOYW1lIiwic3RhdGVfZXJyb3IiLCIkY3VycmVudElucHV0IiwibmV3RWxlbWVudCIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJpIiwiSlNPTiIsInBhcnNlIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFuc2xhdGlvbktleXMiLCJtYXAiLCJrZXkiLCJzcGxpdCIsInBvcCIsInJlZHVjZSIsImFjYyIsInBheWxvYWQiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJzdHJpbmdpZnkiLCJ0YXJnZXRNaW51dGVzIiwidGFyZ2V0RWxlbWVudCIsImVuZE1lc3NhZ2UiLCJjb3VudGRvd25UYXJnZXQiLCJnZXRFbGVtZW50QnlJZCIsInRpbWVyIiwidG9vbHMiLCJzdG9yYWdlIiwibG9jYWxTdG9yYWdlQXZhaWxhYmxlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvdW50ZG93blRpbWVyIiwic2V0SW50ZXJ2YWwiLCJtaW5zIiwiTWF0aCIsImZsb29yIiwic2VjcyIsImlubmVySFRNTCIsInNldEl0ZW0iLCJwYXJlbnRFbGVtZW50IiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUl0ZW0iXSwic291cmNlUm9vdCI6IiJ9