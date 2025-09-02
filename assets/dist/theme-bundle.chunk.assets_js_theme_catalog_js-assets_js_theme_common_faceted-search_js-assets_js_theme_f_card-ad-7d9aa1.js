"use strict";
(self["webpackChunkflair_camden"] = self["webpackChunkflair_camden"] || []).push([["assets_js_theme_catalog_js-assets_js_theme_common_faceted-search_js-assets_js_theme_f_card-ad-7d9aa1"],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogPage)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);
  function CatalogPage(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    window.addEventListener('beforeunload', function () {
      if (document.activeElement.id === 'sort') {
        window.localStorage.setItem('sortByStatus', 'selected');
      }
    });
    return _this;
  }
  var _proto = CatalogPage.prototype;
  _proto.arrangeFocusOnSortBy = function arrangeFocusOnSortBy() {
    var $sortBySelector = $('[data-sort-by="product"] #sort');
    if (window.localStorage.getItem('sortByStatus')) {
      $sortBySelector.focus();
      window.localStorage.removeItem('sortByStatus');
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: url.pathname,
      search: _common_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query)
    });
  };
  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.assign.js */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");














/**
 * Faceted search view component
 */
var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'f/category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;
    var defaultOptions = {
      accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
      blockerSelector: '#facetedSearch .blocker',
      clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
      componentSelector: '#facetedSearch-navList',
      facetNavListSelector: '#facetedSearch .navList',
      priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
      priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
      priceRangeFormSelector: '#facet-range-form',
      priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
      priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
      showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
      facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
      modal: (0,_global_modal__WEBPACK_IMPORTED_MODULE_9__["default"])('#modal')[0],
      modalOpen: false
    };

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_10__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe DOM events
    window.onpopstate = function () {
      $(window).trigger('statechange');
    };

    // Observe user events
    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  }

  // Public methods
  var _proto = FacetedSearch.prototype;
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_10__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Restore view state
    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this2 = this;
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.api.getPage(_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this2.refreshView(content);
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;
    var facet = $navList.data('facet');
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this3.options.modal.open();
        _this3.options.modalOpen = true;
        _this3.options.modal.updateContent(response);
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };
  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };
  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };
  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this4.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = (0,_nod__WEBPACK_IMPORTED_MODULE_12__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _form_utils__WEBPACK_IMPORTED_MODULE_11__.Validators.setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);
      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);
      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url);
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    _url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_7__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_7__.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_12__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_7__.parse(window.location.href);
    var queryParams = decodeURI($(currentTarget).serialize());
    _url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_7__.format({
      pathname: url.pathname,
      search: "?" + queryParams
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };
  return FacetedSearch;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FacetedSearch);

/***/ }),

/***/ "./assets/js/theme/common/url-utils.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/common/url-utils.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  searchGoToUrl: function searchGoToUrl() {
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_2__.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }
    return url__WEBPACK_IMPORTED_MODULE_2__.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;
    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;
          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }
    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};
    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');
      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }
    return params;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlUtils);

/***/ }),

/***/ "./assets/js/theme/f/auto-highlight.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/f/auto-highlight.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  $('input[type=tel]').on('focusin mouseup', function (event) {
    $(event.target).select();
  });
}

/***/ }),

/***/ "./assets/js/theme/f/card-add-to-cart.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/f/card-add-to-cart.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _card_item_in_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-item-in-cart */ "./assets/js/theme/f/card-item-in-cart.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var itemAdded = _ref.itemAdded;
  function updateSideCart() {
    var $sideCart = $('.side-cart-content');
    var $sideCartDetails = $('.side-cart-details');
    var $sideCartActions = $('.side-cart-actions');
    var options = {
      template: {
        template: 'f/b2b/side-cart-content',
        details: 'f/b2b/side-cart-details',
        actions: 'f/b2b/side-cart-actions',
        itemcount: 'f/cart/item-count'
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getContent(options, function (err, response) {
      if (response.itemcount > 0) {
        $sideCart.html(response.template);
        $sideCartDetails.html(response.details);
        $sideCartActions.html(response.actions);
        $('.cart-quantity').html(response.itemcount);
        (0,_card_item_in_cart__WEBPACK_IMPORTED_MODULE_2__["default"])();
      }
      $('.side-cart-loading').css('display', 'none');
      $('.side-cart-item').css('opacity', '1');
    });
  }

  // Popup function for input notification
  function popup(target, str, delay) {
    var $addPopup = $(target).find('.add-card-popup');
    $addPopup.html("" + str);
    $addPopup.fadeIn(0).delay(delay).fadeOut(0);
    $('target').blur();
  }
  function addProductToCart(event, form) {
    $('.side-cart-loading').css('display', 'block');
    $('.side-cart-item').css('opacity', '0.5');

    // Get target product
    var $addToCartBtn = $('.button.button--primary.button--cardAdd', $(event.target));
    var originalBtnVal = $addToCartBtn.val();
    var waitMessage = $addToCartBtn.data('waitMessage');

    // Do not do AJAX if browser doesn't support FormData
    if (window.FormData === undefined) {
      $('.side-cart-loading').css('display', 'none');
      $('.side-cart-item').css('opacity', '1');
      return;
    }
    event.preventDefault();
    event.stopImmediatePropagation();
    $addToCartBtn.val(waitMessage).prop('disabled', true);

    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemAdd(new FormData(form), function (err, response) {
      var errorMessage = err || response.data.error;
      $addToCartBtn.val(originalBtnVal).prop('disabled', false);

      // Guard statement
      if (errorMessage) {
        popup(event.target, errorMessage, 4000);
      } else {
        // To add lang string
        popup(event.target, itemAdded, 2000);
      }
      var cartOptions = {
        template: 'f/cart/item-count'
      };
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getContent(cartOptions, function (error, resp) {
        $('.cart-quantity').html(resp);
        if (_bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].tools.storage.localStorageAvailable()) {
          localStorage.setItem('cart-quantity', resp);
        }
      });
      updateSideCart();
    });
  }
  $('[data-cart-item-add-from-card]').on('submit', function (event) {
    addProductToCart(event, event.target);
  });
}

/***/ }),

/***/ "./assets/js/theme/f/card-item-in-cart.js":
/*!************************************************!*\
  !*** ./assets/js/theme/f/card-item-in-cart.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_8__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");









function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(removeItemId) {
  // Display on product card that product has been added to cart
  var cartItems = $('#cart-preview-dropdown .side-cart-item');
  for (var _iterator = _createForOfIteratorHelperLoose(cartItems), _step; !(_step = _iterator()).done;) {
    var cartItem = _step.value;
    var itemId = $(cartItem).find('[data-product-id]').data().productId;
    var itemQty = cartItem.querySelector('[value]').value;
    var itemTextContainer = $('.card').find("[data-qtyInCart='" + itemId + "']");
    // To add lang string
    itemTextContainer.html("You have " + itemQty + " in your cart");
  }
  if (removeItemId) {
    $('.card').find("[data-qtyInCart='" + removeItemId + "']").html('');
  }
}

/***/ }),

/***/ "./assets/js/theme/f/request.js":
/*!**************************************!*\
  !*** ./assets/js/theme/f/request.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign.js */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



/**
 * Checks whether or not the current method passed in is valid
 *
 * @param {string} method
 * @returns {boolean}
 */
function isValidHTTPMethod(method) {
  var allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  return allowedMethods.indexOf(method) !== -1;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(url, opts, callback) {
  var defaultOptions = {
    method: 'GET',
    remote: false,
    requestOptions: {
      formData: null,
      params: {},
      config: {},
      template: []
    }
  };
  var options = Object.assign({}, defaultOptions, opts);
  var data = options.requestOptions.formData ? options.requestOptions.formData : options.requestOptions.params;
  var headers = {
    'stencil-config': options.requestOptions.config ? JSON.stringify(options.requestOptions.config) : '{}',
    'stencil-options': '{}'
  };
  var requestedTemplate = options.requestOptions.template;
  var usingTemplates = false;
  var usingSections = false;
  var templates = [];

  // Not a valid method
  if (!isValidHTTPMethod(options.method)) {
    return callback(new Error('Not a valid HTTP method'));
  }
  if (typeof requestedTemplate === 'object' && !Array.isArray(requestedTemplate)) {
    var template;
    usingSections = true;
    templates = [];
    for (template in requestedTemplate) {
      if (requestedTemplate.hasOwnProperty(template)) {
        templates.push(requestedTemplate[template]);
      }
    }
  } else if (typeof requestedTemplate === 'string') {
    templates = [requestedTemplate];
  } else if (Array.isArray(requestedTemplate) && requestedTemplate.length > 0) {
    templates = requestedTemplate;
  }
  if (templates.length > 0) {
    usingTemplates = true;
    headers['stencil-options'] = JSON.stringify({
      render_with: templates.join(',')
    });
  }

  // make ajax request using jquery
  $.ajax({
    method: options.method,
    url: url,
    contentType: options.requestOptions.formData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
    processData: !options.requestOptions.formData,
    success: function success(response) {
      var ret;
      var content = options.remote ? response.content : response;
      if (usingTemplates) {
        // Remove the `components` prefix from the response if it's an object
        if (typeof content === 'object') {
          var keys = Object.keys(content);
          var key;
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            key = _keys[_i];
            var cleanKey = key.replace(/^components\//, '');
            content[cleanKey] = content[key];
            delete content[key];
          }
        }

        // If using "sections", morph the content into the arbitrary keys => content object.
        if (usingSections) {
          var templateVariableNames = Object.keys(requestedTemplate);
          var templateVariable;
          for (var _i2 = 0, _templateVariableName = templateVariableNames; _i2 < _templateVariableName.length; _i2++) {
            templateVariable = _templateVariableName[_i2];
            content[templateVariable] = content[requestedTemplate[templateVariable]];
            delete content[requestedTemplate[templateVariable]];
          }
        }
        if (options.remote) {
          ret = response;
          ret.content = content;
        } else {
          ret = content;
        }
      } else {
        ret = response;
      }
      callback(null, ret);
    },
    error: function error(XHR, textStatus, err) {
      callback(err);
    },
    data: data,
    headers: headers
  });
}

/***/ }),

/***/ "./assets/js/theme/f/side-cart.js":
/*!****************************************!*\
  !*** ./assets/js/theme/f/side-cart.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sideCart)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request */ "./assets/js/theme/f/request.js");
/* harmony import */ var _auto_highlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auto-highlight */ "./assets/js/theme/f/auto-highlight.js");
/* harmony import */ var _card_item_in_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-item-in-cart */ "./assets/js/theme/f/card-item-in-cart.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");







function sideCart() {
  // Set up the mutable page height by grabbing it and the cart height then modifying based on one another
  // Also grab viewport height so we can create a scrollable inner element
  var getPageHeight = $('.page').height();
  var getCartHeight = $('.side-cart').height();

  // Only mut the height of elements if not on a mobile device
  if (!/Mobi/i.test(navigator.userAgent)) {
    $('#side-cart-container .side-cart-container').css('height', getPageHeight);
  }

  // Quick-Add SKU handler
  var $form = $('.quick-add');

  // Set up the sticky-ness of the side-cart
  var Sticky = __webpack_require__(/*! sticky-js */ "./node_modules/sticky-js/index.js");
  var sticky = new Sticky('#side-cart-container');

  // Update the cart size/dimensions function
  function updateCartSize() {
    // Mut the page height to better contain the side-cart
    getPageHeight = $('.page').height();
    getCartHeight = $('#side-cart-container').height();

    // Check for the existence of the data-sticky-contianer tag to make sure we should mut the page
    var getPageType = $('.page').attr('data-sticky-container');
    if (getPageType && $(window).width() > 1260) {
      if (getPageHeight < 685) {
        sticky.destroy();
      }
      if (getCartHeight > 685 && getPageHeight < 734) {
        $('.page-content').css('min-height', getCartHeight + 49);
        $('.side-cart-container').css('min-height', getCartHeight + 26);
      } else {
        switch (getCartHeight > getPageHeight) {
          case true:
            $('#side-cart-container .side-cart-container').css('min-height', getCartHeight);
            $('.page-content').css('min-height', getCartHeight + 40);
            break;
          case false:
            $('.page-content').css('min-height');
            sticky.update();
            break;
          default:
        }
      }
    }

    // This line cuts out a five line else-if. It's not meant to be called after being created, just invoked upon birth.
    var sideCartPopulatedCheck = !$('.side-cart-item').text() ? $('.side-cart-placeholder').css('display', 'block') : false; // eslint-disable-line no-unused-vars

    (0,_auto_highlight__WEBPACK_IMPORTED_MODULE_5__["default"])();
  }

  // Update the cart function
  function updateCart() {
    var $sideCart = $('.side-cart-content');
    var $sideCartDetails = $('.side-cart-details');
    var $sideCartActions = $('.side-cart-actions');
    $('.side-cart-loading').css('display', 'block');
    $('.side-cart-item').css('opacity', '0.5');
    var options = {
      template: {
        content: 'f/b2b/side-cart-content',
        details: 'f/b2b/side-cart-details',
        actions: 'f/b2b/side-cart-actions',
        counter: 'f/cart/item-count'
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent(options, function (err, response) {
      $sideCart.html(response.content);
      $sideCartDetails.html(response.details);
      $sideCartActions.html(response.actions);
      $('.cart-quantity').html(response.counter);

      // This line cuts out a five line else-if. It's not meant to be called after being created, just invoked upon birth.
      var sideCartPopulatedCheck = !$('.side-cart-item').text() ? $('.side-cart-placeholder').css('display', 'block') : false; // eslint-disable-line no-unused-vars

      $('body').trigger('cart-quantity-update', response.counter);
      $('.side-cart-loading').css('display', 'none');
      $('.side-cart-item').css('opacity', '1');
      (0,_card_item_in_cart__WEBPACK_IMPORTED_MODULE_6__["default"])();
    });
    updateCartSize();
  }

  // Popup function for input notification
  function popup(target, parent, child, str, delay) {
    var $popup = $(target).parents("" + parent).find("" + child);
    $popup.html("" + str);
    $popup.fadeIn(0).delay(delay).fadeOut(0);
  }

  // Debouncer fucntion to stop mut catching spam
  function debounce(func, wait, immediate) {
    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }
    var timeout;
    return function bounced() {
      var context = this;
      var later = function timedOut() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Setup a listener for window resizing/scrolling to help keep side-cart boundaries compliant
  var catchWindowResize = debounce(function () {
    updateCartSize();
  }, 350);
  $(window).resize(catchWindowResize);
  $(window).scroll(catchWindowResize);

  // Bind the quick add SKU button
  function processForm(event, form) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var targetForm = form;
    var sku = $(targetForm).find('[data-sku]');
    var qty = $(targetForm).find('[data-qty]');
    var url = "/cart.php?action=add&sku=" + sku.val() + "&qty=" + qty.val();
    var options = {
      template: {
        error: 'f/b2b/quick-add-response',
        content: 'f/b2b/side-cart-content',
        details: 'f/b2b/side-cart-details',
        newsku: 'f/b2b/side-cart-quick-add-sku',
        counter: 'f/cart/item-count'
      }
    };
    if (sku.val() && qty.val()) {
      (0,_request__WEBPACK_IMPORTED_MODULE_4__["default"])(url, {
        method: 'POST',
        requestOptions: options
      }, function (err, response) {
        var scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        var cleanResponse = response.error.replace(scriptRegex, '').trim();
        if (err) {
          throw new Error(err);
        }
        if (cleanResponse.length) {
          popup(event.currentTarget, '.side-cart-sku-add', '.add-side-cart-sku-item', cleanResponse, 4000);
        } else {
          updateCart();
          $('body').trigger('cart-quantity-update', response.counter);
          // To add lang string
          popup(event.currentTarget, '.side-cart-sku-add', '.add-side-cart-sku-item', qty.val() + " &times " + sku.val() + " Added to Cart", 2000);
        }
        sku.val('');
        qty.val(1);
      });
    } else {
      popup(event.currentTarget, '.side-cart-sku-add', '.add-side-cart-sku-item', $(event.currentTarget).data('error'), 2000);
    }
    updateCartSize();
  }
  $form.on('submit', function (event) {
    processForm(event, event.target);
  });

  // Update a product quantity
  $(document).on('change', '.side-cart-item-qty-input', function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var itemId = $(event.currentTarget).data('id').substring(4);
    var newQty = parseInt($(event.currentTarget).val(), 10);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      if (response.data.errors.length) {
        var currentErr = response.data.errors.join('/n');
        var errMax = currentErr.search(/maximum/i);
        var errMin = currentErr.search(/minimum/i);
        var errStock = currentErr.search(/enough/i);
        if (errMax !== -1) {
          popup(event.currentTarget, '.side-cart-item-info', '.change-side-cart-qty', $(event.currentTarget).data('quantity-max-error'), 2000);
        } else if (errMin !== -1) {
          popup(event.currentTarget, '.side-cart-item-info', '.change-side-cart-qty', $(event.currentTarget).data('quantity-min-error'), 2000);
        } else if (errStock !== -1) {
          popup(event.currentTarget, '.side-cart-item-info', '.change-side-cart-qty', $(event.currentTarget).data('stock-error'), 2000);
        } else {
          popup(event.currentTarget, '.side-cart-item-info', '.change-side-cart-qty', currentErr, 2000);
        }
        (0,_auto_highlight__WEBPACK_IMPORTED_MODULE_5__["default"])();
      } else {
        updateCart();
      }
    });
  });

  // Remove item from the cart function
  function cartRemoveItem(itemId, productId) {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response) {
        // Catch for if you try to remove the item before the cart has been updated with it server-side
        if (response.data.status === 'succeed') {
          updateCart();
        } else {
          updateCart();
          alert(response.data.errors.join('\n'));
        }
        (0,_card_item_in_cart__WEBPACK_IMPORTED_MODULE_6__["default"])(productId);
      }
    });
  }

  // Remove an item from the cart trigger
  $(document).on('click', '.cart-remove', function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var itemId = $(event.currentTarget).data('cart-itemid');
    var productId = $(event.currentTarget).data('product-id');
    cartRemoveItem(itemId, productId);
  });

  // Update everything
  updateCart();
}

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urls) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urls.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var noCompareMessage = _ref.noCompareMessage,
    urls = _ref.urls;
  var products;
  var $checked = $('body').find('input[name="products\[\]"]:checked');
  var $compareLink = $('a[data-compare-nav]');
  if ($checked.length !== 0) {
    products = lodash_map__WEBPACK_IMPORTED_MODULE_0___default()($checked, function (element) {
      return element.value;
    });
    updateCounterNav(products, $compareLink, urls);
  }
  var compareCounter = products || [];
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urls);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');
    if (productsToCompare.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_2__.showAlertModal)(noCompareMessage);
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_2__.showAlertModal)(noCompareMessage);
      return false;
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRhbG9nX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fZmFjZXRlZC1zZWFyY2hfanMtYXNzZXRzX2pzX3RoZW1lX2ZfY2FyZC1hZC03ZDlhYTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNDO0FBQ3BCO0FBQUEsSUFFREcsV0FBVywwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLFdBQUEsRUFBQUMsWUFBQTtFQUM1QixTQUFBRCxZQUFZRyxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFILFlBQUEsQ0FBQUksSUFBQSxPQUFNRixPQUFPLENBQUM7SUFFZEcsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsWUFBTTtNQUMxQyxJQUFJQyxRQUFRLENBQUNDLGFBQWEsQ0FBQ0MsRUFBRSxLQUFLLE1BQU0sRUFBRTtRQUN0Q0osTUFBTSxDQUFDSyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDO01BQzNEO0lBQ0osQ0FBQyxDQUFDO0lBQUMsT0FBQVIsS0FBQTtFQUNQO0VBQUMsSUFBQVMsTUFBQSxHQUFBYixXQUFBLENBQUFjLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxvQkFBb0IsR0FBcEIsU0FBQUEscUJBQUEsRUFBdUI7SUFDbkIsSUFBTUMsZUFBZSxHQUFHQyxDQUFDLENBQUMsZ0NBQWdDLENBQUM7SUFFM0QsSUFBSVgsTUFBTSxDQUFDSyxZQUFZLENBQUNPLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtNQUM3Q0YsZUFBZSxDQUFDRyxLQUFLLEVBQUU7TUFDdkJiLE1BQU0sQ0FBQ0ssWUFBWSxDQUFDUyxVQUFVLENBQUMsY0FBYyxDQUFDO0lBQ2xEO0VBQ0osQ0FBQztFQUFBUCxNQUFBLENBRURRLGNBQWMsR0FBZCxTQUFBQSxlQUFlQyxLQUFLLEVBQUVDLGFBQWEsRUFBRTtJQUNq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QUFJcUosaUJBQWlCLENBQUMxTixNQUFNLElBQUksQ0FBQyxFQUFFO01BQy9Cc00sc0RBQWMsQ0FBQ1UsZ0JBQWdCLENBQUM7TUFDaENuVSxLQUFLLENBQUNXLGNBQWMsRUFBRTtJQUMxQjtFQUNKLENBQUMsQ0FBQztFQUVGaEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDd0ksRUFBRSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxZQUFNO0lBQy9DLElBQU0yTSxvQkFBb0IsR0FBR25WLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzZMLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztJQUVqRixJQUFJc0osb0JBQW9CLENBQUMzTixNQUFNLElBQUksQ0FBQyxFQUFFO01BQ2xDc00sc0RBQWMsQ0FBQ1UsZ0JBQWdCLENBQUM7TUFDaEMsT0FBTyxLQUFLO0lBQ2hCO0VBQ0osQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovL2ZsYWlyLWNhbWRlbi8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXJsLXV0aWxzLmpzIiwid2VicGFjazovL2ZsYWlyLWNhbWRlbi8uL2Fzc2V0cy9qcy90aGVtZS9mL2F1dG8taGlnaGxpZ2h0LmpzIiwid2VicGFjazovL2ZsYWlyLWNhbWRlbi8uL2Fzc2V0cy9qcy90aGVtZS9mL2NhcmQtYWRkLXRvLWNhcnQuanMiLCJ3ZWJwYWNrOi8vZmxhaXItY2FtZGVuLy4vYXNzZXRzL2pzL3RoZW1lL2YvY2FyZC1pdGVtLWluLWNhcnQuanMiLCJ3ZWJwYWNrOi8vZmxhaXItY2FtZGVuLy4vYXNzZXRzL2pzL3RoZW1lL2YvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvZi9zaWRlLWNhcnQuanMiLCJ3ZWJwYWNrOi8vZmxhaXItY2FtZGVuLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQgPT09ICdzb3J0Jykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29ydEJ5U3RhdHVzJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFycmFuZ2VGb2N1c09uU29ydEJ5KCkge1xuICAgICAgICBjb25zdCAkc29ydEJ5U2VsZWN0b3IgPSAkKCdbZGF0YS1zb3J0LWJ5PVwicHJvZHVjdFwiXSAjc29ydCcpO1xuXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRCeVN0YXR1cycpKSB7XG4gICAgICAgICAgICAkc29ydEJ5U2VsZWN0b3IuZm9jdXMoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc29ydEJ5U3RhdHVzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi91cmwtdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbGxhcHNpYmxlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5cbi8qKlxuICogRmFjZXRlZCBzZWFyY2ggdmlldyBjb21wb25lbnRcbiAqL1xuY2xhc3MgRmFjZXRlZFNlYXJjaCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gT2JqZWN0IHdpdGggb3B0aW9ucyBmb3IgdGhlIGFqYXggcmVxdWVzdHNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgZmV0Y2hpbmcgdGVtcGxhdGVzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBDb25maWd1cmFibGUgb3B0aW9uc1xuICAgICAqIEBleGFtcGxlXG4gICAgICpcbiAgICAgKiBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICogICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgKiAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2YvY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgKiAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcidcbiAgICAgKiAgICAgfVxuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgdGVtcGxhdGVzRGlkTG9hZCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICogICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IGZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgdGVtcGxhdGVzRGlkTG9hZCk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLW5hdmlnYXRpb24sICNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLXRvZ2dsZScsXG4gICAgICAgICAgICBibG9ja2VyU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYmxvY2tlcicsXG4gICAgICAgICAgICBjbGVhckZhY2V0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC1jbGVhckxpbmsnLFxuICAgICAgICAgICAgY29tcG9uZW50U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaC1uYXZMaXN0JyxcbiAgICAgICAgICAgIGZhY2V0TmF2TGlzdFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLm5hdkxpc3QnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUVycm9yU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1pbmxpbmVNZXNzYWdlJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0tZmllbGRzZXQnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUZvcm1TZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWF4X3ByaWNlXScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1pbl9wcmljZV0nLFxuICAgICAgICAgICAgc2hvd01vcmVUb2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsXG4gICAgICAgICAgICBmYWNldGVkU2VhcmNoRmlsdGVySXRlbXM6ICcjZmFjZXRlZFNlYXJjaC1maWx0ZXJJdGVtcyAuZm9ybS1pbnB1dCcsXG4gICAgICAgICAgICBtb2RhbDogbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXSxcbiAgICAgICAgICAgIG1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBbXTtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XG4gICAgICAgICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKS5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxuICAgICAgICAvLyBOT1RFOiBOZWVkIHRvIGV4ZWN1dGUgYWZ0ZXIgQ29sbGFwc2libGUgZ2V0cyBib290c3RyYXBwZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9ic2VydmUgRE9NIGV2ZW50c1xuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCkge1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpO1xuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XG5cbiAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcblxuICAgICAgICBpZiAoaGFzTW9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xuICAgICAgICBpZiAoXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShmYWNldFVybCwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogZmFjZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycywgdGhpcy5vcHRpb25zLnZhbGlkYXRpb25FcnJvck1lc3NhZ2VzKTtcblxuICAgICAgICB0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBSZXN0b3JlIGNvbGxhcHNlZCBzdGF0ZSBmb3IgZWFjaCBmYWNldFxuICAgICAgICAkbmF2TGlzdHMuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBDbGVhbi11cFxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vbignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub2ZmKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIG9uQ2xlYXJGYWNldChldmVudCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXG4gICAgICAgIHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgfVxuXG4gICAgb25GYWNldENsaWNrKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGxpbmsudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsUXVlcnlQYXJhbXMpIH0pKTtcbiAgICB9XG5cbiAgICBvblJhbmdlU3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGRlY29kZVVSSSgkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IGA/JHtxdWVyeVBhcmFtc31gIH0pKTtcbiAgICB9XG5cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG5cbiAgICBvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcblxuICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0cywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5jb25zdCB1cmxVdGlscyA9IHtcbiAgICBnZXRVcmw6ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCxcblxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHNlYXJjaEdvVG9Vcmw6ICgpID0+IHtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgYnVpbGRRdWVyeVN0cmluZzogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV1bbmR4XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0LnN1YnN0cmluZygxKTtcbiAgICB9LFxuXG4gICAgcGFyc2VRdWVyeVBhcmFtczogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHF1ZXJ5RGF0YVtpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICBpZiAodGVtcFswXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNbdGVtcFswXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXS5wdXNoKHRlbXBbMV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IFtwYXJhbXNbdGVtcFswXV0sIHRlbXBbMV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gdGVtcFsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgICQoJ2lucHV0W3R5cGU9dGVsXScpLm9uKCdmb2N1c2luIG1vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgJChldmVudC50YXJnZXQpLnNlbGVjdCgpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBpdGVtSW5DYXJ0IGZyb20gJy4vY2FyZC1pdGVtLWluLWNhcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyBpdGVtQWRkZWQgfSkge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZVNpZGVDYXJ0KCkge1xuICAgICAgICBjb25zdCAkc2lkZUNhcnQgPSAkKCcuc2lkZS1jYXJ0LWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgJHNpZGVDYXJ0RGV0YWlscyA9ICQoJy5zaWRlLWNhcnQtZGV0YWlscycpO1xuICAgICAgICBjb25zdCAkc2lkZUNhcnRBY3Rpb25zID0gJCgnLnNpZGUtY2FydC1hY3Rpb25zJyk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdmL2IyYi9zaWRlLWNhcnQtY29udGVudCcsXG4gICAgICAgICAgICAgICAgZGV0YWlsczogJ2YvYjJiL3NpZGUtY2FydC1kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiAnZi9iMmIvc2lkZS1jYXJ0LWFjdGlvbnMnLFxuICAgICAgICAgICAgICAgIGl0ZW1jb3VudDogJ2YvY2FydC9pdGVtLWNvdW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLml0ZW1jb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICAkc2lkZUNhcnQuaHRtbChyZXNwb25zZS50ZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgJHNpZGVDYXJ0RGV0YWlscy5odG1sKHJlc3BvbnNlLmRldGFpbHMpO1xuICAgICAgICAgICAgICAgICRzaWRlQ2FydEFjdGlvbnMuaHRtbChyZXNwb25zZS5hY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAkKCcuY2FydC1xdWFudGl0eScpLmh0bWwocmVzcG9uc2UuaXRlbWNvdW50KTtcbiAgICAgICAgICAgICAgICBpdGVtSW5DYXJ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy5zaWRlLWNhcnQtbG9hZGluZycpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAkKCcuc2lkZS1jYXJ0LWl0ZW0nKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQb3B1cCBmdW5jdGlvbiBmb3IgaW5wdXQgbm90aWZpY2F0aW9uXG4gICAgZnVuY3Rpb24gcG9wdXAodGFyZ2V0LCBzdHIsIGRlbGF5KSB7XG4gICAgICAgIGNvbnN0ICRhZGRQb3B1cCA9ICQodGFyZ2V0KS5maW5kKCcuYWRkLWNhcmQtcG9wdXAnKTtcblxuICAgICAgICAkYWRkUG9wdXAuaHRtbChgJHtzdHJ9YCk7XG4gICAgICAgICRhZGRQb3B1cC5mYWRlSW4oMCkuZGVsYXkoZGVsYXkpLmZhZGVPdXQoMCk7XG4gICAgICAgICQoJ3RhcmdldCcpLmJsdXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKSB7XG4gICAgICAgICQoJy5zaWRlLWNhcnQtbG9hZGluZycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICAkKCcuc2lkZS1jYXJ0LWl0ZW0nKS5jc3MoJ29wYWNpdHknLCAnMC41Jyk7XG5cbiAgICAgICAgLy8gR2V0IHRhcmdldCBwcm9kdWN0XG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRCdG4gPSAkKCcuYnV0dG9uLmJ1dHRvbi0tcHJpbWFyeS5idXR0b24tLWNhcmRBZGQnLCAkKGV2ZW50LnRhcmdldCkpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4udmFsKCk7XG4gICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJGFkZFRvQ2FydEJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xuXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgJCgnLnNpZGUtY2FydC1sb2FkaW5nJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICQoJy5zaWRlLWNhcnQtaXRlbScpLmNzcygnb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxuICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gY2FydFxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKG5ldyBGb3JtRGF0YShmb3JtKSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciB8fCByZXNwb25zZS5kYXRhLmVycm9yO1xuXG4gICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgLnZhbChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHBvcHVwKGV2ZW50LnRhcmdldCwgZXJyb3JNZXNzYWdlLCA0MDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVG8gYWRkIGxhbmcgc3RyaW5nXG4gICAgICAgICAgICAgICAgcG9wdXAoZXZlbnQudGFyZ2V0LCBpdGVtQWRkZWQsIDIwMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjYXJ0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2YvY2FydC9pdGVtLWNvdW50JyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQoY2FydE9wdGlvbnMsIChlcnJvciwgcmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5jYXJ0LXF1YW50aXR5JykuaHRtbChyZXNwKTtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMudG9vbHMuc3RvcmFnZS5sb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydC1xdWFudGl0eScsIHJlc3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB1cGRhdGVTaWRlQ2FydCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkLWZyb20tY2FyZF0nKS5vbignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGV2ZW50LnRhcmdldCk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVtb3ZlSXRlbUlkKSB7XG4gICAgLy8gRGlzcGxheSBvbiBwcm9kdWN0IGNhcmQgdGhhdCBwcm9kdWN0IGhhcyBiZWVuIGFkZGVkIHRvIGNhcnRcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSAkKCcjY2FydC1wcmV2aWV3LWRyb3Bkb3duIC5zaWRlLWNhcnQtaXRlbScpO1xuICAgIGZvciAoY29uc3QgY2FydEl0ZW0gb2YgY2FydEl0ZW1zKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoY2FydEl0ZW0pLmZpbmQoJ1tkYXRhLXByb2R1Y3QtaWRdJykuZGF0YSgpLnByb2R1Y3RJZDtcbiAgICAgICAgY29uc3QgaXRlbVF0eSA9IGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZV0nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgaXRlbVRleHRDb250YWluZXIgPSAkKCcuY2FyZCcpLmZpbmQoYFtkYXRhLXF0eUluQ2FydD0nJHtpdGVtSWR9J11gKTtcbiAgICAgICAgLy8gVG8gYWRkIGxhbmcgc3RyaW5nXG4gICAgICAgIGl0ZW1UZXh0Q29udGFpbmVyLmh0bWwoYFlvdSBoYXZlICR7aXRlbVF0eX0gaW4geW91ciBjYXJ0YCk7XG4gICAgfVxuXG4gICAgaWYgKHJlbW92ZUl0ZW1JZCkge1xuICAgICAgICAkKCcuY2FyZCcpLmZpbmQoYFtkYXRhLXF0eUluQ2FydD0nJHtyZW1vdmVJdGVtSWR9J11gKS5odG1sKCcnKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGUgY3VycmVudCBtZXRob2QgcGFzc2VkIGluIGlzIHZhbGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRIVFRQTWV0aG9kKG1ldGhvZCkge1xuICAgIGNvbnN0IGFsbG93ZWRNZXRob2RzID0gWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnREVMRVRFJ107XG5cbiAgICByZXR1cm4gYWxsb3dlZE1ldGhvZHMuaW5kZXhPZihtZXRob2QpICE9PSAtMTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICByZW1vdGU6IGZhbHNlLFxuICAgICAgICByZXF1ZXN0T3B0aW9uczoge1xuICAgICAgICAgICAgZm9ybURhdGE6IG51bGwsXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgY29uZmlnOiB7fSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBbXSxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0cyk7XG4gICAgY29uc3QgZGF0YSA9IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEgPyBvcHRpb25zLnJlcXVlc3RPcHRpb25zLmZvcm1EYXRhIDogb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5wYXJhbXM7XG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgJ3N0ZW5jaWwtY29uZmlnJzogb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5jb25maWcgPyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnJlcXVlc3RPcHRpb25zLmNvbmZpZykgOiAne30nLFxuICAgICAgICAnc3RlbmNpbC1vcHRpb25zJzogJ3t9JyxcbiAgICB9O1xuICAgIGNvbnN0IHJlcXVlc3RlZFRlbXBsYXRlID0gb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy50ZW1wbGF0ZTtcblxuICAgIGxldCB1c2luZ1RlbXBsYXRlcyA9IGZhbHNlO1xuICAgIGxldCB1c2luZ1NlY3Rpb25zID0gZmFsc2U7XG4gICAgbGV0IHRlbXBsYXRlcyA9IFtdO1xuXG5cbiAgICAvLyBOb3QgYSB2YWxpZCBtZXRob2RcbiAgICBpZiAoIWlzVmFsaWRIVFRQTWV0aG9kKG9wdGlvbnMubWV0aG9kKSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEVycm9yKCdOb3QgYSB2YWxpZCBIVFRQIG1ldGhvZCcpKTtcbiAgICB9XG5cblxuICAgIGlmICh0eXBlb2YgKHJlcXVlc3RlZFRlbXBsYXRlKSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVxdWVzdGVkVGVtcGxhdGUpKSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZTtcblxuICAgICAgICB1c2luZ1NlY3Rpb25zID0gdHJ1ZTtcbiAgICAgICAgdGVtcGxhdGVzID0gW107XG5cbiAgICAgICAgZm9yICh0ZW1wbGF0ZSBpbiByZXF1ZXN0ZWRUZW1wbGF0ZSkge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3RlZFRlbXBsYXRlLmhhc093blByb3BlcnR5KHRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5wdXNoKHJlcXVlc3RlZFRlbXBsYXRlW3RlbXBsYXRlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiAocmVxdWVzdGVkVGVtcGxhdGUpID09PSAnc3RyaW5nJykge1xuICAgICAgICB0ZW1wbGF0ZXMgPSBbcmVxdWVzdGVkVGVtcGxhdGVdO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXF1ZXN0ZWRUZW1wbGF0ZSkgJiYgcmVxdWVzdGVkVGVtcGxhdGUubGVuZ3RoID4gMCkge1xuICAgICAgICB0ZW1wbGF0ZXMgPSByZXF1ZXN0ZWRUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBpZiAodGVtcGxhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdXNpbmdUZW1wbGF0ZXMgPSB0cnVlO1xuXG4gICAgICAgIGhlYWRlcnNbJ3N0ZW5jaWwtb3B0aW9ucyddID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgcmVuZGVyX3dpdGg6IHRlbXBsYXRlcy5qb2luKCcsJyksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIG1ha2UgYWpheCByZXF1ZXN0IHVzaW5nIGpxdWVyeVxuICAgICQuYWpheCh7XG4gICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgY29udGVudFR5cGU6IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEgPyBmYWxzZSA6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICBwcm9jZXNzRGF0YTogIW9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJldDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBvcHRpb25zLnJlbW90ZSA/IHJlc3BvbnNlLmNvbnRlbnQgOiByZXNwb25zZTtcblxuICAgICAgICAgICAgaWYgKHVzaW5nVGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBgY29tcG9uZW50c2AgcHJlZml4IGZyb20gdGhlIHJlc3BvbnNlIGlmIGl0J3MgYW4gb2JqZWN0XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29udGVudCkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbktleSA9IGtleS5yZXBsYWNlKC9eY29tcG9uZW50c1xcLy8sICcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFtjbGVhbktleV0gPSBjb250ZW50W2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgKGNvbnRlbnRba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB1c2luZyBcInNlY3Rpb25zXCIsIG1vcnBoIHRoZSBjb250ZW50IGludG8gdGhlIGFyYml0cmFyeSBrZXlzID0+IGNvbnRlbnQgb2JqZWN0LlxuICAgICAgICAgICAgICAgIGlmICh1c2luZ1NlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlVmFyaWFibGVOYW1lcyA9IE9iamVjdC5rZXlzKHJlcXVlc3RlZFRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBsYXRlVmFyaWFibGU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodGVtcGxhdGVWYXJpYWJsZSBvZiB0ZW1wbGF0ZVZhcmlhYmxlTmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRbdGVtcGxhdGVWYXJpYWJsZV0gPSBjb250ZW50W3JlcXVlc3RlZFRlbXBsYXRlW3RlbXBsYXRlVmFyaWFibGVdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb250ZW50W3JlcXVlc3RlZFRlbXBsYXRlW3RlbXBsYXRlVmFyaWFibGVdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlbW90ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0LmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXQgPSByZXNwb25zZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmV0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChYSFIsIHRleHRTdGF0dXMsIGVycikgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgaGVhZGVycyxcbiAgICB9KTtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnO1xuaW1wb3J0IGF1dG9IaWdobGlnaHQgZnJvbSAnLi9hdXRvLWhpZ2hsaWdodCc7XG5pbXBvcnQgaXRlbUluQ2FydCBmcm9tICcuL2NhcmQtaXRlbS1pbi1jYXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZUNhcnQoKSB7XG4gICAgLy8gU2V0IHVwIHRoZSBtdXRhYmxlIHBhZ2UgaGVpZ2h0IGJ5IGdyYWJiaW5nIGl0IGFuZCB0aGUgY2FydCBoZWlnaHQgdGhlbiBtb2RpZnlpbmcgYmFzZWQgb24gb25lIGFub3RoZXJcbiAgICAvLyBBbHNvIGdyYWIgdmlld3BvcnQgaGVpZ2h0IHNvIHdlIGNhbiBjcmVhdGUgYSBzY3JvbGxhYmxlIGlubmVyIGVsZW1lbnRcbiAgICBsZXQgZ2V0UGFnZUhlaWdodCA9ICQoJy5wYWdlJykuaGVpZ2h0KCk7XG4gICAgbGV0IGdldENhcnRIZWlnaHQgPSAkKCcuc2lkZS1jYXJ0JykuaGVpZ2h0KCk7XG5cbiAgICAvLyBPbmx5IG11dCB0aGUgaGVpZ2h0IG9mIGVsZW1lbnRzIGlmIG5vdCBvbiBhIG1vYmlsZSBkZXZpY2VcbiAgICBpZiAoIS9Nb2JpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAkKCcjc2lkZS1jYXJ0LWNvbnRhaW5lciAuc2lkZS1jYXJ0LWNvbnRhaW5lcicpLmNzcygnaGVpZ2h0JywgZ2V0UGFnZUhlaWdodCk7XG4gICAgfVxuXG4gICAgLy8gUXVpY2stQWRkIFNLVSBoYW5kbGVyXG4gICAgY29uc3QgJGZvcm0gPSAkKCcucXVpY2stYWRkJyk7XG5cbiAgICAvLyBTZXQgdXAgdGhlIHN0aWNreS1uZXNzIG9mIHRoZSBzaWRlLWNhcnRcbiAgICBjb25zdCBTdGlja3kgPSByZXF1aXJlKCdzdGlja3ktanMnKTtcbiAgICBjb25zdCBzdGlja3kgPSBuZXcgU3RpY2t5KCcjc2lkZS1jYXJ0LWNvbnRhaW5lcicpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBjYXJ0IHNpemUvZGltZW5zaW9ucyBmdW5jdGlvblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhcnRTaXplKCkge1xuICAgICAgICAvLyBNdXQgdGhlIHBhZ2UgaGVpZ2h0IHRvIGJldHRlciBjb250YWluIHRoZSBzaWRlLWNhcnRcbiAgICAgICAgZ2V0UGFnZUhlaWdodCA9ICQoJy5wYWdlJykuaGVpZ2h0KCk7XG4gICAgICAgIGdldENhcnRIZWlnaHQgPSAkKCcjc2lkZS1jYXJ0LWNvbnRhaW5lcicpLmhlaWdodCgpO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIHRoZSBkYXRhLXN0aWNreS1jb250aWFuZXIgdGFnIHRvIG1ha2Ugc3VyZSB3ZSBzaG91bGQgbXV0IHRoZSBwYWdlXG4gICAgICAgIGNvbnN0IGdldFBhZ2VUeXBlID0gJCgnLnBhZ2UnKS5hdHRyKCdkYXRhLXN0aWNreS1jb250YWluZXInKTtcblxuICAgICAgICBpZiAoZ2V0UGFnZVR5cGUgJiYgKCQod2luZG93KS53aWR0aCgpID4gMTI2MCkpIHtcbiAgICAgICAgICAgIGlmIChnZXRQYWdlSGVpZ2h0IDwgNjg1KSB7XG4gICAgICAgICAgICAgICAgc3RpY2t5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGdldENhcnRIZWlnaHQgPiA2ODUgJiYgZ2V0UGFnZUhlaWdodCA8IDczNCkge1xuICAgICAgICAgICAgICAgICQoJy5wYWdlLWNvbnRlbnQnKS5jc3MoJ21pbi1oZWlnaHQnLCBnZXRDYXJ0SGVpZ2h0ICsgNDkpO1xuICAgICAgICAgICAgICAgICQoJy5zaWRlLWNhcnQtY29udGFpbmVyJykuY3NzKCdtaW4taGVpZ2h0JywgZ2V0Q2FydEhlaWdodCArIDI2KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChnZXRDYXJ0SGVpZ2h0ID4gZ2V0UGFnZUhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgJCgnI3NpZGUtY2FydC1jb250YWluZXIgLnNpZGUtY2FydC1jb250YWluZXInKS5jc3MoJ21pbi1oZWlnaHQnLCBnZXRDYXJ0SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2UtY29udGVudCcpLmNzcygnbWluLWhlaWdodCcsIGdldENhcnRIZWlnaHQgKyA0MCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICAgICAgICAgICQoJy5wYWdlLWNvbnRlbnQnKS5jc3MoJ21pbi1oZWlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2t5LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgbGluZSBjdXRzIG91dCBhIGZpdmUgbGluZSBlbHNlLWlmLiBJdCdzIG5vdCBtZWFudCB0byBiZSBjYWxsZWQgYWZ0ZXIgYmVpbmcgY3JlYXRlZCwganVzdCBpbnZva2VkIHVwb24gYmlydGguXG4gICAgICAgIGNvbnN0IHNpZGVDYXJ0UG9wdWxhdGVkQ2hlY2sgPSAoISQoJy5zaWRlLWNhcnQtaXRlbScpLnRleHQoKSkgPyAkKCcuc2lkZS1jYXJ0LXBsYWNlaG9sZGVyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJykgOiBmYWxzZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4gICAgICAgIGF1dG9IaWdobGlnaHQoKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNhcnQgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiB1cGRhdGVDYXJ0KCkge1xuICAgICAgICBjb25zdCAkc2lkZUNhcnQgPSAkKCcuc2lkZS1jYXJ0LWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgJHNpZGVDYXJ0RGV0YWlscyA9ICQoJy5zaWRlLWNhcnQtZGV0YWlscycpO1xuICAgICAgICBjb25zdCAkc2lkZUNhcnRBY3Rpb25zID0gJCgnLnNpZGUtY2FydC1hY3Rpb25zJyk7XG5cbiAgICAgICAgJCgnLnNpZGUtY2FydC1sb2FkaW5nJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICQoJy5zaWRlLWNhcnQtaXRlbScpLmNzcygnb3BhY2l0eScsICcwLjUnKTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnZi9iMmIvc2lkZS1jYXJ0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6ICdmL2IyYi9zaWRlLWNhcnQtZGV0YWlscycsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogJ2YvYjJiL3NpZGUtY2FydC1hY3Rpb25zJyxcbiAgICAgICAgICAgICAgICBjb3VudGVyOiAnZi9jYXJ0L2l0ZW0tY291bnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAkc2lkZUNhcnQuaHRtbChyZXNwb25zZS5jb250ZW50KTtcbiAgICAgICAgICAgICRzaWRlQ2FydERldGFpbHMuaHRtbChyZXNwb25zZS5kZXRhaWxzKTtcbiAgICAgICAgICAgICRzaWRlQ2FydEFjdGlvbnMuaHRtbChyZXNwb25zZS5hY3Rpb25zKTtcbiAgICAgICAgICAgICQoJy5jYXJ0LXF1YW50aXR5JykuaHRtbChyZXNwb25zZS5jb3VudGVyKTtcblxuICAgICAgICAgICAgLy8gVGhpcyBsaW5lIGN1dHMgb3V0IGEgZml2ZSBsaW5lIGVsc2UtaWYuIEl0J3Mgbm90IG1lYW50IHRvIGJlIGNhbGxlZCBhZnRlciBiZWluZyBjcmVhdGVkLCBqdXN0IGludm9rZWQgdXBvbiBiaXJ0aC5cbiAgICAgICAgICAgIGNvbnN0IHNpZGVDYXJ0UG9wdWxhdGVkQ2hlY2sgPSAoISQoJy5zaWRlLWNhcnQtaXRlbScpLnRleHQoKSkgPyAkKCcuc2lkZS1jYXJ0LXBsYWNlaG9sZGVyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJykgOiBmYWxzZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCByZXNwb25zZS5jb3VudGVyKTtcblxuICAgICAgICAgICAgJCgnLnNpZGUtY2FydC1sb2FkaW5nJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICQoJy5zaWRlLWNhcnQtaXRlbScpLmNzcygnb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICBpdGVtSW5DYXJ0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZUNhcnRTaXplKCk7XG4gICAgfVxuXG4gICAgLy8gUG9wdXAgZnVuY3Rpb24gZm9yIGlucHV0IG5vdGlmaWNhdGlvblxuICAgIGZ1bmN0aW9uIHBvcHVwKHRhcmdldCwgcGFyZW50LCBjaGlsZCwgc3RyLCBkZWxheSkge1xuICAgICAgICBjb25zdCAkcG9wdXAgPSAkKHRhcmdldCkucGFyZW50cyhgJHtwYXJlbnR9YCkuZmluZChgJHtjaGlsZH1gKTtcblxuICAgICAgICAkcG9wdXAuaHRtbChgJHtzdHJ9YCk7XG4gICAgICAgICRwb3B1cC5mYWRlSW4oMCkuZGVsYXkoZGVsYXkpLmZhZGVPdXQoMCk7XG4gICAgfVxuXG4gICAgLy8gRGVib3VuY2VyIGZ1Y250aW9uIHRvIHN0b3AgbXV0IGNhdGNoaW5nIHNwYW1cbiAgICBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUsIC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IHRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBib3VuY2VkKCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uIHRpbWVkT3V0KCkge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBTZXR1cCBhIGxpc3RlbmVyIGZvciB3aW5kb3cgcmVzaXppbmcvc2Nyb2xsaW5nIHRvIGhlbHAga2VlcCBzaWRlLWNhcnQgYm91bmRhcmllcyBjb21wbGlhbnRcbiAgICBjb25zdCBjYXRjaFdpbmRvd1Jlc2l6ZSA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgdXBkYXRlQ2FydFNpemUoKTtcbiAgICB9LCAzNTApO1xuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShjYXRjaFdpbmRvd1Jlc2l6ZSk7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChjYXRjaFdpbmRvd1Jlc2l6ZSk7XG5cbiAgICAvLyBCaW5kIHRoZSBxdWljayBhZGQgU0tVIGJ1dHRvblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NGb3JtKGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldEZvcm0gPSBmb3JtO1xuICAgICAgICBjb25zdCBza3UgPSAkKHRhcmdldEZvcm0pLmZpbmQoJ1tkYXRhLXNrdV0nKTtcbiAgICAgICAgY29uc3QgcXR5ID0gJCh0YXJnZXRGb3JtKS5maW5kKCdbZGF0YS1xdHldJyk7XG4gICAgICAgIGNvbnN0IHVybCA9IGAvY2FydC5waHA/YWN0aW9uPWFkZCZza3U9JHtza3UudmFsKCl9JnF0eT0ke3F0eS52YWwoKX1gO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIGVycm9yOiAnZi9iMmIvcXVpY2stYWRkLXJlc3BvbnNlJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnZi9iMmIvc2lkZS1jYXJ0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6ICdmL2IyYi9zaWRlLWNhcnQtZGV0YWlscycsXG4gICAgICAgICAgICAgICAgbmV3c2t1OiAnZi9iMmIvc2lkZS1jYXJ0LXF1aWNrLWFkZC1za3UnLFxuICAgICAgICAgICAgICAgIGNvdW50ZXI6ICdmL2NhcnQvaXRlbS1jb3VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChza3UudmFsKCkgJiYgcXR5LnZhbCgpKSB7XG4gICAgICAgICAgICByZXF1ZXN0KHVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JpcHRSZWdleCA9IC88c2NyaXB0XFxiW148XSooPzooPyE8XFwvc2NyaXB0Pik8W148XSopKjxcXC9zY3JpcHQ+L2dpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuUmVzcG9uc2UgPSByZXNwb25zZS5lcnJvci5yZXBsYWNlKHNjcmlwdFJlZ2V4LCAnJykudHJpbSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2xlYW5SZXNwb25zZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAoZXZlbnQuY3VycmVudFRhcmdldCwgJy5zaWRlLWNhcnQtc2t1LWFkZCcsICcuYWRkLXNpZGUtY2FydC1za3UtaXRlbScsIGNsZWFuUmVzcG9uc2UsIDQwMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcmVzcG9uc2UuY291bnRlcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRvIGFkZCBsYW5nIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBwb3B1cChldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNpZGUtY2FydC1za3UtYWRkJywgJy5hZGQtc2lkZS1jYXJ0LXNrdS1pdGVtJywgYCR7cXR5LnZhbCgpfSAmdGltZXMgJHtza3UudmFsKCl9IEFkZGVkIHRvIENhcnRgLCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBza3UudmFsKCcnKTtcbiAgICAgICAgICAgICAgICBxdHkudmFsKDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3B1cChldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNpZGUtY2FydC1za3UtYWRkJywgJy5hZGQtc2lkZS1jYXJ0LXNrdS1pdGVtJywgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdlcnJvcicpLCAyMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNhcnRTaXplKCk7XG4gICAgfVxuXG4gICAgJGZvcm0ub24oJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBwcm9jZXNzRm9ybShldmVudCwgZXZlbnQudGFyZ2V0KTtcbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBhIHByb2R1Y3QgcXVhbnRpdHlcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5zaWRlLWNhcnQtaXRlbS1xdHktaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpZCcpLnN1YnN0cmluZyg0KTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKSwgMTApO1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEVyciA9IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJy9uJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyTWF4ID0gY3VycmVudEVyci5zZWFyY2goL21heGltdW0vaSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyTWluID0gY3VycmVudEVyci5zZWFyY2goL21pbmltdW0vaSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyU3RvY2sgPSBjdXJyZW50RXJyLnNlYXJjaCgvZW5vdWdoL2kpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVyck1heCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAoZXZlbnQuY3VycmVudFRhcmdldCwgJy5zaWRlLWNhcnQtaXRlbS1pbmZvJywgJy5jaGFuZ2Utc2lkZS1jYXJ0LXF0eScsICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncXVhbnRpdHktbWF4LWVycm9yJyksIDIwMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyTWluICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cChldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNpZGUtY2FydC1pdGVtLWluZm8nLCAnLmNoYW5nZS1zaWRlLWNhcnQtcXR5JywgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdxdWFudGl0eS1taW4tZXJyb3InKSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJTdG9jayAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAoZXZlbnQuY3VycmVudFRhcmdldCwgJy5zaWRlLWNhcnQtaXRlbS1pbmZvJywgJy5jaGFuZ2Utc2lkZS1jYXJ0LXF0eScsICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnc3RvY2stZXJyb3InKSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAoZXZlbnQuY3VycmVudFRhcmdldCwgJy5zaWRlLWNhcnQtaXRlbS1pbmZvJywgJy5jaGFuZ2Utc2lkZS1jYXJ0LXF0eScsIGN1cnJlbnRFcnIsIDIwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBSZW1vdmUgaXRlbSBmcm9tIHRoZSBjYXJ0IGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gY2FydFJlbW92ZUl0ZW0oaXRlbUlkLCBwcm9kdWN0SWQpIHtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZShpdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHsgLy8gQ2F0Y2ggZm9yIGlmIHlvdSB0cnkgdG8gcmVtb3ZlIHRoZSBpdGVtIGJlZm9yZSB0aGUgY2FydCBoYXMgYmVlbiB1cGRhdGVkIHdpdGggaXQgc2VydmVyLXNpZGVcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVDYXJ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2FydCgpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW1JbkNhcnQocHJvZHVjdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFuIGl0ZW0gZnJvbSB0aGUgY2FydCB0cmlnZ2VyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jYXJ0LXJlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhcnQtaXRlbWlkJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncHJvZHVjdC1pZCcpO1xuICAgICAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQsIHByb2R1Y3RJZCk7XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgZXZlcnl0aGluZ1xuICAgIHVwZGF0ZUNhcnQoKTtcbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJscykge1xuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybHMuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgbm9Db21wYXJlTWVzc2FnZSwgdXJscyB9KSB7XG4gICAgbGV0IHByb2R1Y3RzO1xuXG4gICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICBpZiAoJGNoZWNrZWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHByb2R1Y3RzID0gXy5tYXAoJGNoZWNrZWQsIGVsZW1lbnQgPT4gZWxlbWVudC52YWx1ZSk7XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihwcm9kdWN0cywgJGNvbXBhcmVMaW5rLCB1cmxzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wYXJlQ291bnRlciA9IHByb2R1Y3RzIHx8IFtdO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybHMpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnW2RhdGEtcHJvZHVjdC1jb21wYXJlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1RvQ29tcGFyZSA9ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RzVG9Db21wYXJlLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChub0NvbXBhcmVNZXNzYWdlKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKG5vQ29tcGFyZU1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJ1cmxVdGlscyIsIlVybCIsIkNhdGFsb2dQYWdlIiwiX1BhZ2VNYW5hZ2VyIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImlkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIl9wcm90byIsInByb3RvdHlwZSIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiJHNvcnRCeVNlbGVjdG9yIiwiJCIsImdldEl0ZW0iLCJmb2N1cyIsInJlbW92ZUl0ZW0iLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInVybCIsInBhcnNlIiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCJzZXJpYWxpemUiLCJzcGxpdCIsInF1ZXJ5IiwicGFnZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybWF0IiwicGF0aG5hbWUiLCJzZWFyY2giLCJidWlsZFF1ZXJ5U3RyaW5nIiwiZGVmYXVsdCIsImhvb2tzIiwiYXBpIiwibW9kYWxGYWN0b3J5IiwiY29sbGFwc2libGVGYWN0b3J5IiwiVmFsaWRhdG9ycyIsIm5vZCIsIkZhY2V0ZWRTZWFyY2giLCJyZXF1ZXN0T3B0aW9ucyIsImNhbGxiYWNrIiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxPcGVuIiwiX2V4dGVuZCIsImNvbGxhcHNlZEZhY2V0cyIsImNvbGxhcHNlZEZhY2V0SXRlbXMiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJlYWNoIiwiaW5kZXgiLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwiYWNjb3JkaW9uVG9nZ2xlIiwiJGFjY29yZGlvblRvZ2dsZSIsImNvbGxhcHNpYmxlIiwiZGF0YSIsImlzQ29sbGFwc2VkIiwicHVzaCIsInRhcmdldElkIiwic2V0VGltZW91dCIsImlzIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvbnBvcHN0YXRlIiwidHJpZ2dlciIsIm9uU3RhdGVDaGFuZ2UiLCJiaW5kIiwib25Ub2dnbGVDbGljayIsIm9uQWNjb3JkaW9uVG9nZ2xlIiwib25DbGVhckZhY2V0Iiwib25GYWNldENsaWNrIiwib25SYW5nZVN1Ym1pdCIsImZpbHRlckZhY2V0SXRlbXMiLCJiaW5kRXZlbnRzIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsIl90aGlzMiIsInNob3ciLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiaGlkZSIsIkVycm9yIiwiZXhwYW5kRmFjZXRJdGVtcyIsIiRuYXZMaXN0IiwiYXR0ciIsIl93aXRob3V0IiwiaGFzTW9yZVJlc3VsdHMiLCJfdW5pb24iLCJ0b2dnbGVGYWNldEl0ZW1zIiwiX2luY2x1ZGVzIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsIl90aGlzMyIsImZhY2V0IiwiZmFjZXRVcmwiLCJzaG93TW9yZSIsInRlbXBsYXRlIiwicGFyYW1zIiwibGlzdF9hbGwiLCJyZXNwb25zZSIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwiJGl0ZW1zIiwidmFsIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwidGV4dCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsImNvbGxhcHNlRmFjZXQiLCJjbG9zZSIsIl90aGlzNCIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwiX3RoaXM1IiwibGVuZ3RoIiwidmFsaWRhdG9yIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIl90aGlzNiIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwiX3RoaXM3IiwidW5iaW5kRXZlbnRzIiwib24iLCJvZmYiLCIkbGluayIsInN0b3BQcm9wYWdhdGlvbiIsImdvVG9VcmwiLCIkdG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ1cmxRdWVyeVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImFyZUFsbCIsImNvbnN0YW50cyIsIlZBTElEIiwiZGVjb2RlVVJJIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInRpdGxlIiwic2VhcmNoR29Ub1VybCIsInJlcGxhY2VQYXJhbXMiLCJwYXJzZWQiLCJwYXJhbSIsImhhc093blByb3BlcnR5IiwicXVlcnlEYXRhIiwib3V0Iiwia2V5IiwiQXJyYXkiLCJpc0FycmF5IiwibmR4Iiwic3Vic3RyaW5nIiwicGFyc2VRdWVyeVBhcmFtcyIsImkiLCJ0ZW1wIiwidGFyZ2V0Iiwic2VsZWN0IiwidXRpbHMiLCJpdGVtSW5DYXJ0IiwiX3JlZiIsIml0ZW1BZGRlZCIsInVwZGF0ZVNpZGVDYXJ0IiwiJHNpZGVDYXJ0IiwiJHNpZGVDYXJ0RGV0YWlscyIsIiRzaWRlQ2FydEFjdGlvbnMiLCJkZXRhaWxzIiwiYWN0aW9ucyIsIml0ZW1jb3VudCIsImNhcnQiLCJnZXRDb250ZW50IiwiaHRtbCIsImNzcyIsInBvcHVwIiwic3RyIiwiZGVsYXkiLCIkYWRkUG9wdXAiLCJmaW5kIiwiZmFkZUluIiwiZmFkZU91dCIsImJsdXIiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiZm9ybSIsIiRhZGRUb0NhcnRCdG4iLCJvcmlnaW5hbEJ0blZhbCIsIndhaXRNZXNzYWdlIiwiRm9ybURhdGEiLCJ1bmRlZmluZWQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJwcm9wIiwiaXRlbUFkZCIsImVycm9yTWVzc2FnZSIsImVycm9yIiwiY2FydE9wdGlvbnMiLCJyZXNwIiwidG9vbHMiLCJzdG9yYWdlIiwibG9jYWxTdG9yYWdlQXZhaWxhYmxlIiwicmVtb3ZlSXRlbUlkIiwiY2FydEl0ZW1zIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsImNhcnRJdGVtIiwidmFsdWUiLCJpdGVtSWQiLCJwcm9kdWN0SWQiLCJpdGVtUXR5IiwicXVlcnlTZWxlY3RvciIsIml0ZW1UZXh0Q29udGFpbmVyIiwiaXNWYWxpZEhUVFBNZXRob2QiLCJtZXRob2QiLCJhbGxvd2VkTWV0aG9kcyIsIm9wdHMiLCJyZW1vdGUiLCJmb3JtRGF0YSIsImNvbmZpZyIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVxdWVzdGVkVGVtcGxhdGUiLCJ1c2luZ1RlbXBsYXRlcyIsInVzaW5nU2VjdGlvbnMiLCJ0ZW1wbGF0ZXMiLCJyZW5kZXJfd2l0aCIsImpvaW4iLCJhamF4IiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsInN1Y2Nlc3MiLCJyZXQiLCJrZXlzIiwiX2kiLCJfa2V5cyIsImNsZWFuS2V5IiwicmVwbGFjZSIsInRlbXBsYXRlVmFyaWFibGVOYW1lcyIsInRlbXBsYXRlVmFyaWFibGUiLCJfaTIiLCJfdGVtcGxhdGVWYXJpYWJsZU5hbWUiLCJYSFIiLCJ0ZXh0U3RhdHVzIiwicmVxdWVzdCIsImF1dG9IaWdobGlnaHQiLCJzaWRlQ2FydCIsImdldFBhZ2VIZWlnaHQiLCJoZWlnaHQiLCJnZXRDYXJ0SGVpZ2h0IiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIiRmb3JtIiwiU3RpY2t5IiwicmVxdWlyZSIsInN0aWNreSIsInVwZGF0ZUNhcnRTaXplIiwiZ2V0UGFnZVR5cGUiLCJ3aWR0aCIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJzaWRlQ2FydFBvcHVsYXRlZENoZWNrIiwidXBkYXRlQ2FydCIsImNvdW50ZXIiLCJwYXJlbnQiLCJjaGlsZCIsIiRwb3B1cCIsInBhcmVudHMiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwiX2xlbiIsImFyZ3VtZW50cyIsImFyZ3MiLCJfa2V5IiwidGltZW91dCIsImJvdW5jZWQiLCJsYXRlciIsInRpbWVkT3V0IiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0IiwiY2F0Y2hXaW5kb3dSZXNpemUiLCJyZXNpemUiLCJzY3JvbGwiLCJwcm9jZXNzRm9ybSIsInRhcmdldEZvcm0iLCJza3UiLCJxdHkiLCJuZXdza3UiLCJzY3JpcHRSZWdleCIsImNsZWFuUmVzcG9uc2UiLCJ0cmltIiwibmV3UXR5IiwicGFyc2VJbnQiLCJpdGVtVXBkYXRlIiwiZXJyb3JzIiwiY3VycmVudEVyciIsImVyck1heCIsImVyck1pbiIsImVyclN0b2NrIiwiY2FydFJlbW92ZUl0ZW0iLCJpdGVtUmVtb3ZlIiwic3RhdHVzIiwiYWxlcnQiLCJzaG93QWxlcnRNb2RhbCIsImRlY3JlbWVudENvdW50ZXIiLCJpdGVtIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInVwZGF0ZUNvdW50ZXJOYXYiLCJ1cmxzIiwiYWRkQ2xhc3MiLCJjb21wYXJlIiwicmVtb3ZlQ2xhc3MiLCJub0NvbXBhcmVNZXNzYWdlIiwicHJvZHVjdHMiLCIkY2hlY2tlZCIsIiRjb21wYXJlTGluayIsIl9tYXAiLCJjb21wYXJlQ291bnRlciIsInByb2R1Y3QiLCIkY2xpY2tlZENvbXBhcmVMaW5rIiwiY2hlY2tlZCIsIiR0aGlzIiwicHJvZHVjdHNUb0NvbXBhcmUiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=
