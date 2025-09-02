"use strict";
(self["webpackChunkflair_camden"] = self["webpackChunkflair_camden"] || []).push([["assets_js_theme_common_collapsible_js-assets_js_theme_f_grid-list-switcher_js"],{

/***/ "./assets/js/theme/common/collapsible.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/common/collapsible.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collapsible": () => (/* binding */ Collapsible),
/* harmony export */   "CollapsibleEvents": () => (/* binding */ CollapsibleEvents),
/* harmony export */   "default": () => (/* binding */ collapsibleFactory)
/* harmony export */ });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _media_query_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");




function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var PLUGIN_KEY = 'collapsible';
var CollapsibleEvents = {
  open: 'open.collapsible',
  close: 'close.collapsible',
  toggle: 'toggle.collapsible',
  click: 'click.collapsible'
};
var CollapsibleState = {
  closed: 'closed',
  open: 'open'
};
function prependHash(id) {
  if (id && id.indexOf('#') === 0) {
    return id;
  }
  return "#" + id;
}
function optionsFromData($element) {
  return {
    disabledBreakpoint: $element.data(PLUGIN_KEY + "DisabledBreakpoint"),
    disabledState: $element.data(PLUGIN_KEY + "DisabledState"),
    enabledState: $element.data(PLUGIN_KEY + "EnabledState"),
    openClassName: $element.data(PLUGIN_KEY + "OpenClassName")
  };
}

/**
 * Collapse/Expand toggle
 */
var Collapsible = /*#__PURE__*/function () {
  /**
   * @param {jQuery} $toggle - Trigger button
   * @param {jQuery} $target - Content to collapse / expand
   * @param {Object} [options] - Configurable options
   * @param {Object} [options.$context]
   * @param {Object} [options.disabledBreakpoint]
   * @param {Object} [options.disabledState]
   * @param {Object} [options.enabledState]
   * @param {Object} [options.openClassName]
   * @example
   *
   * <button id="#more">Collapse</button>
   * <div id="content">...</div>
   *
   * new Collapsible($('#more'), $('#content'));
   */
  function Collapsible($toggle, $target, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      disabledBreakpoint = _ref.disabledBreakpoint,
      disabledState = _ref.disabledState,
      enabledState = _ref.enabledState,
      _ref$openClassName = _ref.openClassName,
      openClassName = _ref$openClassName === void 0 ? 'is-open' : _ref$openClassName;
    this.$toggle = $toggle;
    this.$target = $target;
    this.targetId = $target.attr('id');
    this.openClassName = openClassName;
    this.disabledState = disabledState;
    this.enabledState = enabledState;
    if (disabledBreakpoint) {
      this.disabledMediaQueryList = (0,_media_query_list__WEBPACK_IMPORTED_MODULE_4__["default"])(disabledBreakpoint);
    }
    if (this.disabledMediaQueryList) {
      this.disabled = this.disabledMediaQueryList.matches;
    } else {
      this.disabled = false;
    }

    // Auto-bind
    this.onClicked = this.onClicked.bind(this);
    this.onDisabledMediaQueryListMatch = this.onDisabledMediaQueryListMatch.bind(this);

    // Assign DOM attributes
    this.$target.attr('aria-hidden', this.isCollapsed);
    this.$toggle.attr('aria-controls', $target.attr('id')).attr('aria-expanded', this.isOpen);

    // Listen
    this.bindEvents();
  }
  var _proto = Collapsible.prototype;
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$notify = _ref2.notify,
      notify = _ref2$notify === void 0 ? true : _ref2$notify;
    this.$toggle.addClass(this.openClassName).attr('aria-expanded', true);
    this.$target.addClass(this.openClassName).attr('aria-hidden', false);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.open, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.close = function close(_temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$notify = _ref3.notify,
      notify = _ref3$notify === void 0 ? true : _ref3$notify;
    this.$toggle.removeClass(this.openClassName).attr('aria-expanded', false);
    this.$target.removeClass(this.openClassName).attr('aria-hidden', true);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.close, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.toggle = function toggle() {
    if (this.isCollapsed) {
      this.open();
    } else {
      this.close();
    }
  };
  _proto.toggleByState = function toggleByState(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    switch (state) {
      case CollapsibleState.open:
        return this.open.apply(this, args);
      case CollapsibleState.closed:
        return this.close.apply(this, args);
      default:
        return undefined;
    }
  };
  _proto.hasCollapsible = function hasCollapsible(collapsibleInstance) {
    return $.contains(this.$target.get(0), collapsibleInstance.$target.get(0));
  };
  _proto.bindEvents = function bindEvents() {
    this.$toggle.on(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.addListener) {
      this.disabledMediaQueryList.addListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$toggle.off(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.removeListener) {
      this.disabledMediaQueryList.removeListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.onClicked = function onClicked(event) {
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    this.toggle();
  };
  _proto.onDisabledMediaQueryListMatch = function onDisabledMediaQueryListMatch(media) {
    this.disabled = media.matches;
  };
  _createClass(Collapsible, [{
    key: "isCollapsed",
    get: function get() {
      return !this.$target.hasClass(this.openClassName) || this.$target.is(':hidden');
    }
  }, {
    key: "isOpen",
    get: function get() {
      return !this.isCollapsed;
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(disabled) {
      this._disabled = disabled;
      if (disabled) {
        this.toggleByState(this.disabledState);
      } else {
        this.toggleByState(this.enabledState);
      }
    }
  }]);
  return Collapsible;
}();

/**
 * Convenience method for constructing Collapsible instance
 *
 * @param {string} [selector]
 * @param {Object} [options]
 * @param {Object} [options.$context]
 * @param {Object} [options.disabledBreakpoint]
 * @param {Object} [options.disabledState]
 * @param {Object} [options.enabledState]
 * @param {Object} [options.openClassName]
 * @return {Array} array of Collapsible instances
 *
 * @example
 * <a href="#content" data-collapsible>Collapse</a>
 * <div id="content">...</div>
 *
 * collapsibleFactory();
 */
function collapsibleFactory(selector, overrideOptions) {
  if (selector === void 0) {
    selector = "[data-" + PLUGIN_KEY + "]";
  }
  if (overrideOptions === void 0) {
    overrideOptions = {};
  }
  var $collapsibles = $(selector, overrideOptions.$context);
  return $collapsibles.map(function (index, element) {
    var $toggle = $(element);
    var instanceKey = PLUGIN_KEY + "Instance";
    var cachedCollapsible = $toggle.data(instanceKey);
    if (cachedCollapsible instanceof Collapsible) {
      return cachedCollapsible;
    }
    var targetId = prependHash($toggle.data(PLUGIN_KEY) || $toggle.data(PLUGIN_KEY + "Target") || $toggle.attr('href'));
    var options = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(optionsFromData($toggle), overrideOptions);
    var collapsible = new Collapsible($toggle, $(targetId, overrideOptions.$context), options);
    $toggle.data(instanceKey, collapsible);
    return collapsible;
  }).toArray();
}

/***/ }),

/***/ "./assets/js/theme/common/media-query-list.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/media-query-list.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mediaQueryListFactory)
/* harmony export */ });
/*
 * Remember to update /assets/scss/settings/global/screensizes/screensizes.scss
 * if you decide to change breakpoint values
 */
var breakpointSizes = {
  xlarge: 1441,
  large: 1261,
  medium: 801,
  small: 551
};

/**
 * Create MediaQueryList using breakpoint name
 * @param {string} breakpointName
 * @return {MediaQueryList|null}
 */
function mediaQueryListFactory(breakpointName) {
  if (!breakpointName || !window.matchMedia) {
    return null;
  }
  var breakpoint = breakpointSizes[breakpointName];
  var mediaQuery = "(min-width: " + breakpoint + "px)";
  var mediaQueryList = window.matchMedia(mediaQuery);
  return mediaQueryList;
}

/***/ }),

/***/ "./assets/js/theme/f/grid-list-switcher.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/f/grid-list-switcher.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fY29sbGFwc2libGVfanMtYXNzZXRzX2pzX3RoZW1lX2ZfZ3JpZC1saXN0LXN3aXRjaGVyX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUV2RCxJQUFNQyxVQUFVLEdBQUcsYUFBYTtBQUV6QixJQUFNQyxpQkFBaUIsR0FBRztFQUM3QkMsSUFBSSxFQUFFLGtCQUFrQjtFQUN4QkMsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQkMsTUFBTSxFQUFFLG9CQUFvQjtFQUM1QkMsS0FBSyxFQUFFO0FBQ1gsQ0FBQztBQUVELElBQU1DLGdCQUFnQixHQUFHO0VBQ3JCQyxNQUFNLEVBQUUsUUFBUTtFQUNoQkwsSUFBSSxFQUFFO0FBQ1YsQ0FBQztBQUVELFNBQVNNLFdBQVdBLENBQUNDLEVBQUUsRUFBRTtFQUNyQixJQUFJQSxFQUFFLElBQUlBLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUM3QixPQUFPRCxFQUFFO0VBQ2I7RUFFQSxhQUFXQSxFQUFFO0FBQ2pCO0FBRUEsU0FBU0UsZUFBZUEsQ0FBQ0MsUUFBUSxFQUFFO0VBQy9CLE9BQU87SUFDSEMsa0JBQWtCLEVBQUVELFFBQVEsQ0FBQ0UsSUFBSSxDQUFJZCxVQUFVLHdCQUFxQjtJQUNwRWUsYUFBYSxFQUFFSCxRQUFRLENBQUNFLElBQUksQ0FBSWQsVUFBVSxtQkFBZ0I7SUFDMURnQixZQUFZLEVBQUVKLFFBQVEsQ0FBQ0UsSUFBSSxDQUFJZCxVQUFVLGtCQUFlO0lBQ3hEaUIsYUFBYSxFQUFFTCxRQUFRLENBQUNFLElBQUksQ0FBSWQsVUFBVTtFQUM5QyxDQUFDO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ08sSUFBTWtCLFdBQVc7RUFDcEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUU7SUFDekI5QyxDQUFDLENBQUMsK0NBQStDLENBQUMsQ0FBQ2IsV0FBVyxDQUFDLHFHQUFxRyxDQUFDO0lBRXJLYSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNsQixRQUFRLGdCQUFjZ0UsSUFBSSxDQUFHO0lBQzVDOUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDbEIsUUFBUSxZQUFVZ0UsSUFBSSxDQUFHO0lBQ3BDOUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDbEIsUUFBUSxvQkFBa0JnRSxJQUFJLENBQUc7SUFDcEQ5QyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNsQixRQUFRLG1CQUFpQmdFLElBQUksQ0FBRztFQUN0RDtFQUVBRCxhQUFhLENBQUNELFdBQVcsQ0FBQztFQUUxQjVDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUNLLEtBQUssRUFBSztJQUM5Q0EsS0FBSyxDQUFDQyxjQUFjLEVBQUU7SUFDdEIsSUFBTXNDLFdBQVcsR0FBRy9DLENBQUMsQ0FBQ1EsS0FBSyxDQUFDd0MsYUFBYSxDQUFDLENBQUNsRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFFdEU0RSxvREFBVyxDQUFDLGNBQWMsRUFBRUssV0FBVyxFQUFFO01BQUVFLE9BQU8sRUFBRTtJQUFHLENBQUMsQ0FBQztJQUV6RGpELENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDYixXQUFXLENBQUMsZUFBZSxDQUFDO0lBQ3ZEYSxDQUFDLENBQUNRLEtBQUssQ0FBQ3dDLGFBQWEsQ0FBQyxDQUFDbEUsUUFBUSxDQUFDLGVBQWUsQ0FBQztJQUVoRCtELGFBQWEsQ0FBQ0UsV0FBVyxDQUFDO0VBQzlCLENBQUMsQ0FBQztBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxhaXItY2FtZGVuLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jb2xsYXBzaWJsZS5qcyIsIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL21lZGlhLXF1ZXJ5LWxpc3QuanMiLCJ3ZWJwYWNrOi8vZmxhaXItY2FtZGVuLy4vYXNzZXRzL2pzL3RoZW1lL2YvZ3JpZC1saXN0LXN3aXRjaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbWVkaWFRdWVyeUxpc3RGYWN0b3J5IGZyb20gJy4vbWVkaWEtcXVlcnktbGlzdCc7XG5cbmNvbnN0IFBMVUdJTl9LRVkgPSAnY29sbGFwc2libGUnO1xuXG5leHBvcnQgY29uc3QgQ29sbGFwc2libGVFdmVudHMgPSB7XG4gICAgb3BlbjogJ29wZW4uY29sbGFwc2libGUnLFxuICAgIGNsb3NlOiAnY2xvc2UuY29sbGFwc2libGUnLFxuICAgIHRvZ2dsZTogJ3RvZ2dsZS5jb2xsYXBzaWJsZScsXG4gICAgY2xpY2s6ICdjbGljay5jb2xsYXBzaWJsZScsXG59O1xuXG5jb25zdCBDb2xsYXBzaWJsZVN0YXRlID0ge1xuICAgIGNsb3NlZDogJ2Nsb3NlZCcsXG4gICAgb3BlbjogJ29wZW4nLFxufTtcblxuZnVuY3Rpb24gcHJlcGVuZEhhc2goaWQpIHtcbiAgICBpZiAoaWQgJiYgaWQuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICByZXR1cm4gYCMke2lkfWA7XG59XG5cbmZ1bmN0aW9uIG9wdGlvbnNGcm9tRGF0YSgkZWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRpc2FibGVkQnJlYWtwb2ludDogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfURpc2FibGVkQnJlYWtwb2ludGApLFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVl9RGlzYWJsZWRTdGF0ZWApLFxuICAgICAgICBlbmFibGVkU3RhdGU6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1FbmFibGVkU3RhdGVgKSxcbiAgICAgICAgb3BlbkNsYXNzTmFtZTogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfU9wZW5DbGFzc05hbWVgKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIENvbGxhcHNlL0V4cGFuZCB0b2dnbGVcbiAqL1xuZXhwb3J0IGNsYXNzIENvbGxhcHNpYmxlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRvZ2dsZSAtIFRyaWdnZXIgYnV0dG9uXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICR0YXJnZXQgLSBDb250ZW50IHRvIGNvbGxhcHNlIC8gZXhwYW5kXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLiRjb250ZXh0XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZEJyZWFrcG9pbnRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRpc2FibGVkU3RhdGVdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmVuYWJsZWRTdGF0ZV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMub3BlbkNsYXNzTmFtZV1cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogPGJ1dHRvbiBpZD1cIiNtb3JlXCI+Q29sbGFwc2U8L2J1dHRvbj5cbiAgICAgKiA8ZGl2IGlkPVwiY29udGVudFwiPi4uLjwvZGl2PlxuICAgICAqXG4gICAgICogbmV3IENvbGxhcHNpYmxlKCQoJyNtb3JlJyksICQoJyNjb250ZW50JykpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCR0b2dnbGUsICR0YXJnZXQsIHtcbiAgICAgICAgZGlzYWJsZWRCcmVha3BvaW50LFxuICAgICAgICBkaXNhYmxlZFN0YXRlLFxuICAgICAgICBlbmFibGVkU3RhdGUsXG4gICAgICAgIG9wZW5DbGFzc05hbWUgPSAnaXMtb3BlbicsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZSA9ICR0b2dnbGU7XG4gICAgICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXQ7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSAkdGFyZ2V0LmF0dHIoJ2lkJyk7XG4gICAgICAgIHRoaXMub3BlbkNsYXNzTmFtZSA9IG9wZW5DbGFzc05hbWU7XG4gICAgICAgIHRoaXMuZGlzYWJsZWRTdGF0ZSA9IGRpc2FibGVkU3RhdGU7XG4gICAgICAgIHRoaXMuZW5hYmxlZFN0YXRlID0gZW5hYmxlZFN0YXRlO1xuXG4gICAgICAgIGlmIChkaXNhYmxlZEJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCA9IG1lZGlhUXVlcnlMaXN0RmFjdG9yeShkaXNhYmxlZEJyZWFrcG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXV0by1iaW5kXG4gICAgICAgIHRoaXMub25DbGlja2VkID0gdGhpcy5vbkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaCA9IHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2guYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBBc3NpZ24gRE9NIGF0dHJpYnV0ZXNcbiAgICAgICAgdGhpcy4kdGFyZ2V0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdGhpcy5pc0NvbGxhcHNlZCk7XG4gICAgICAgIHRoaXMuJHRvZ2dsZVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtY29udHJvbHMnLCAkdGFyZ2V0LmF0dHIoJ2lkJykpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRoaXMuaXNPcGVuKTtcblxuICAgICAgICAvLyBMaXN0ZW5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGlzQ29sbGFwc2VkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuJHRhcmdldC5oYXNDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpIHx8IHRoaXMuJHRhcmdldC5pcygnOmhpZGRlbicpO1xuICAgIH1cblxuICAgIGdldCBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0NvbGxhcHNlZDtcbiAgICB9XG5cbiAgICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQnlTdGF0ZSh0aGlzLmRpc2FibGVkU3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCeVN0YXRlKHRoaXMuZW5hYmxlZFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICAgIH1cblxuICAgIG9wZW4oeyBub3RpZnkgPSB0cnVlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiR0b2dnbGVcbiAgICAgICAgICAgIC5hZGRDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgLmFkZENsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcblxuICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5vcGVuLCBbdGhpc10pO1xuICAgICAgICAgICAgdGhpcy4kdG9nZ2xlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMudG9nZ2xlLCBbdGhpc10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2UoeyBub3RpZnkgPSB0cnVlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiR0b2dnbGVcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcblxuICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbG9zZSwgW3RoaXNdKTtcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLnRvZ2dsZSwgW3RoaXNdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQnlTdGF0ZShzdGF0ZSwgLi4uYXJncykge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgQ29sbGFwc2libGVTdGF0ZS5vcGVuOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3Blbi5hcHBseSh0aGlzLCBhcmdzKTtcblxuICAgICAgICBjYXNlIENvbGxhcHNpYmxlU3RhdGUuY2xvc2VkOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UuYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDb2xsYXBzaWJsZShjb2xsYXBzaWJsZUluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiAkLmNvbnRhaW5zKHRoaXMuJHRhcmdldC5nZXQoMCksIGNvbGxhcHNpYmxlSW5zdGFuY2UuJHRhcmdldC5nZXQoMCkpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZS5vbihDb2xsYXBzaWJsZUV2ZW50cy5jbGljaywgdGhpcy5vbkNsaWNrZWQpO1xuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QgJiYgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIodGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZS5vZmYoQ29sbGFwc2libGVFdmVudHMuY2xpY2ssIHRoaXMub25DbGlja2VkKTtcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0ICYmIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LnJlbW92ZUxpc3RlbmVyKHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gobWVkaWEpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IG1lZGlhLm1hdGNoZXM7XG4gICAgfVxufVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgY29uc3RydWN0aW5nIENvbGxhcHNpYmxlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcl1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy4kY29udGV4dF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZEJyZWFrcG9pbnRdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGlzYWJsZWRTdGF0ZV1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5lbmFibGVkU3RhdGVdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMub3BlbkNsYXNzTmFtZV1cbiAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBvZiBDb2xsYXBzaWJsZSBpbnN0YW5jZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogPGEgaHJlZj1cIiNjb250ZW50XCIgZGF0YS1jb2xsYXBzaWJsZT5Db2xsYXBzZTwvYT5cbiAqIDxkaXYgaWQ9XCJjb250ZW50XCI+Li4uPC9kaXY+XG4gKlxuICogY29sbGFwc2libGVGYWN0b3J5KCk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbGxhcHNpYmxlRmFjdG9yeShzZWxlY3RvciA9IGBbZGF0YS0ke1BMVUdJTl9LRVl9XWAsIG92ZXJyaWRlT3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGNvbGxhcHNpYmxlcyA9ICQoc2VsZWN0b3IsIG92ZXJyaWRlT3B0aW9ucy4kY29udGV4dCk7XG5cbiAgICByZXR1cm4gJGNvbGxhcHNpYmxlcy5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZUtleSA9IGAke1BMVUdJTl9LRVl9SW5zdGFuY2VgO1xuICAgICAgICBjb25zdCBjYWNoZWRDb2xsYXBzaWJsZSA9ICR0b2dnbGUuZGF0YShpbnN0YW5jZUtleSk7XG5cbiAgICAgICAgaWYgKGNhY2hlZENvbGxhcHNpYmxlIGluc3RhbmNlb2YgQ29sbGFwc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDb2xsYXBzaWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gcHJlcGVuZEhhc2goJHRvZ2dsZS5kYXRhKFBMVUdJTl9LRVkpIHx8XG4gICAgICAgICAgICAkdG9nZ2xlLmRhdGEoYCR7UExVR0lOX0tFWX1UYXJnZXRgKSB8fFxuICAgICAgICAgICAgJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gXy5leHRlbmQob3B0aW9uc0Zyb21EYXRhKCR0b2dnbGUpLCBvdmVycmlkZU9wdGlvbnMpO1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9IG5ldyBDb2xsYXBzaWJsZSgkdG9nZ2xlLCAkKHRhcmdldElkLCBvdmVycmlkZU9wdGlvbnMuJGNvbnRleHQpLCBvcHRpb25zKTtcblxuICAgICAgICAkdG9nZ2xlLmRhdGEoaW5zdGFuY2VLZXksIGNvbGxhcHNpYmxlKTtcblxuICAgICAgICByZXR1cm4gY29sbGFwc2libGU7XG4gICAgfSkudG9BcnJheSgpO1xufVxuIiwiLypcbiAqIFJlbWVtYmVyIHRvIHVwZGF0ZSAvYXNzZXRzL3Njc3Mvc2V0dGluZ3MvZ2xvYmFsL3NjcmVlbnNpemVzL3NjcmVlbnNpemVzLnNjc3NcbiAqIGlmIHlvdSBkZWNpZGUgdG8gY2hhbmdlIGJyZWFrcG9pbnQgdmFsdWVzXG4gKi9cbmNvbnN0IGJyZWFrcG9pbnRTaXplcyA9IHtcbiAgICB4bGFyZ2U6IDE0NDEsXG4gICAgbGFyZ2U6IDEyNjEsXG4gICAgbWVkaXVtOiA4MDEsXG4gICAgc21hbGw6IDU1MSxcbn07XG5cbi8qKlxuICogQ3JlYXRlIE1lZGlhUXVlcnlMaXN0IHVzaW5nIGJyZWFrcG9pbnQgbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGJyZWFrcG9pbnROYW1lXG4gKiBAcmV0dXJuIHtNZWRpYVF1ZXJ5TGlzdHxudWxsfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoYnJlYWtwb2ludE5hbWUpIHtcbiAgICBpZiAoIWJyZWFrcG9pbnROYW1lIHx8ICF3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBicmVha3BvaW50ID0gYnJlYWtwb2ludFNpemVzW2JyZWFrcG9pbnROYW1lXTtcbiAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludH1weClgO1xuICAgIGNvbnN0IG1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFRdWVyeSk7XG5cbiAgICByZXR1cm4gbWVkaWFRdWVyeUxpc3Q7XG59XG4iLCJpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IGRpc3BsYXlNb2RlID0gQ29va2llcy5nZXQoJ2NhdGVnb3J5VmlldycpIHx8IGNvbnRleHQuZGlzcGxheU1vZGU7XG4gICAgJChgLnN3aXRjaC0ke2Rpc3BsYXlNb2RlfWApLmFkZENsYXNzKCdzd2l0Y2gtYWN0aXZlJyk7XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hEaXNwbGF5KG1vZGUpIHtcbiAgICAgICAgJCgnLmNhdGVnb3J5LCAucGFnZSwgLnByb2R1Y3RDYXJkcywgLnByb2R1Y3RDYXJkJykucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LS1saXN0IHBhZ2UtLWxpc3QgcHJvZHVjdENhcmRzLS1saXN0IHByb2R1Y3RDYXJkLS1saXN0IHByb2R1Y3RDYXJkcy0tZ3JpZCBwcm9kdWN0Q2FyZC0tZ3JpZCcpO1xuXG4gICAgICAgICQoJy5jYXRlZ29yeScpLmFkZENsYXNzKGBjYXRlZ29yeS0tJHttb2RlfWApO1xuICAgICAgICAkKCcucGFnZScpLmFkZENsYXNzKGBwYWdlLS0ke21vZGV9YCk7XG4gICAgICAgICQoJy5wcm9kdWN0Q2FyZHMnKS5hZGRDbGFzcyhgcHJvZHVjdENhcmRzLS0ke21vZGV9YCk7XG4gICAgICAgICQoJy5wcm9kdWN0Q2FyZCcpLmFkZENsYXNzKGBwcm9kdWN0Q2FyZC0tJHttb2RlfWApO1xuICAgIH1cblxuICAgIHN3aXRjaERpc3BsYXkoZGlzcGxheU1vZGUpO1xuXG4gICAgJCgnW2RhdGEtZGlzcGxheS1zd2l0Y2hdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlUeXBlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKCdkYXRhLWRpc3BsYXktc3dpdGNoJyk7XG5cbiAgICAgICAgQ29va2llcy5zZXQoJ2NhdGVnb3J5VmlldycsIGRpc3BsYXlUeXBlLCB7IGV4cGlyZXM6IDMwIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWRpc3BsYXktc3dpdGNoXScpLnJlbW92ZUNsYXNzKCdzd2l0Y2gtYWN0aXZlJyk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ3N3aXRjaC1hY3RpdmUnKTtcblxuICAgICAgICBzd2l0Y2hEaXNwbGF5KGRpc3BsYXlUeXBlKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkiLCJQTFVHSU5fS0VZIiwiQ29sbGFwc2libGVFdmVudHMiLCJvcGVuIiwiY2xvc2UiLCJ0b2dnbGUiLCJjbGljayIsIkNvbGxhcHNpYmxlU3RhdGUiLCJjbG9zZWQiLCJwcmVwZW5kSGFzaCIsImlkIiwiaW5kZXhPZiIsIm9wdGlvbnNGcm9tRGF0YSIsIiRlbGVtZW50IiwiZGlzYWJsZWRCcmVha3BvaW50IiwiZGF0YSIsImRpc2FibGVkU3RhdGUiLCJlbmFibGVkU3RhdGUiLCJvcGVuQ2xhc3NOYW1lIiwiQ29sbGFwc2libGUiLCIkdG9nZ2xlIiwiJHRhcmdldCIsIl90ZW1wIiwiX3JlZiIsIl9yZWYkb3BlbkNsYXNzTmFtZSIsInRhcmdldElkIiwiYXR0ciIsImRpc2FibGVkTWVkaWFRdWVyeUxpc3QiLCJkaXNhYmxlZCIsIm1hdGNoZXMiLCJvbkNsaWNrZWQiLCJiaW5kIiwib25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2giLCJpc0NvbGxhcHNlZCIsImlzT3BlbiIsImJpbmRFdmVudHMiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJfdGVtcDIiLCJfcmVmMiIsIl9yZWYyJG5vdGlmeSIsIm5vdGlmeSIsImFkZENsYXNzIiwidHJpZ2dlciIsIl90ZW1wMyIsIl9yZWYzIiwiX3JlZjMkbm90aWZ5IiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVCeVN0YXRlIiwic3RhdGUiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImFwcGx5IiwidW5kZWZpbmVkIiwiaGFzQ29sbGFwc2libGUiLCJjb2xsYXBzaWJsZUluc3RhbmNlIiwiJCIsImNvbnRhaW5zIiwiZ2V0Iiwib24iLCJhZGRMaXN0ZW5lciIsInVuYmluZEV2ZW50cyIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1lZGlhIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiaGFzQ2xhc3MiLCJpcyIsIl9kaXNhYmxlZCIsInNldCIsImNvbGxhcHNpYmxlRmFjdG9yeSIsInNlbGVjdG9yIiwib3ZlcnJpZGVPcHRpb25zIiwiJGNvbGxhcHNpYmxlcyIsIiRjb250ZXh0IiwibWFwIiwiaW5kZXgiLCJlbGVtZW50IiwiaW5zdGFuY2VLZXkiLCJjYWNoZWRDb2xsYXBzaWJsZSIsIm9wdGlvbnMiLCJfZXh0ZW5kIiwiY29sbGFwc2libGUiLCJ0b0FycmF5IiwiYnJlYWtwb2ludFNpemVzIiwieGxhcmdlIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsImJyZWFrcG9pbnROYW1lIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImJyZWFrcG9pbnQiLCJtZWRpYVF1ZXJ5IiwibWVkaWFRdWVyeUxpc3QiLCJDb29raWVzIiwiY29udGV4dCIsImRpc3BsYXlNb2RlIiwic3dpdGNoRGlzcGxheSIsIm1vZGUiLCJkaXNwbGF5VHlwZSIsImN1cnJlbnRUYXJnZXQiLCJleHBpcmVzIl0sInNvdXJjZVJvb3QiOiIifQ==
