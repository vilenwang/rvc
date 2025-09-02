"use strict";
(self["webpackChunkflair_covent_garden"] = self["webpackChunkflair_covent_garden"] || []).push([["assets_js_theme_catalog_js-assets_js_theme_common_faceted-search_js-assets_js_theme_f_option--01f19d"],{

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);
  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = CatalogPage.prototype;
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
    var queryParams = jquery__WEBPACK_IMPORTED_MODULE_3___default()(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_5__.format({
      pathname: url.pathname,
      search: _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].buildQueryString(url.query)
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");















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
   *          productListing: 'category/product-listing',
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
      modal: (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#modal')[0],
      modalOpen: false
    };

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_11__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Show limited items by default
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems(jquery__WEBPACK_IMPORTED_MODULE_7___default()(navList));
    });

    // Mark initially collapsed accordions
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = jquery__WEBPACK_IMPORTED_MODULE_7___default()(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_7___default()(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

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
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_11__["default"])();

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
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.api.getPage(_url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].getUrl(), this.requestOptions, function (err, content) {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(_this2.options.blockerSelector).hide();
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
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].getUrl();
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
    var $items = jquery__WEBPACK_IMPORTED_MODULE_7___default()('.navList-item');
    var query = jquery__WEBPACK_IMPORTED_MODULE_7___default()(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = jquery__WEBPACK_IMPORTED_MODULE_7___default()(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()(element).show();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()(element).hide();
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
    var $accordionToggles = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = jquery__WEBPACK_IMPORTED_MODULE_7___default()(accordionToggle);
      _this4.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;
    var $accordionToggles = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = jquery__WEBPACK_IMPORTED_MODULE_7___default()(accordionToggle);
      _this5.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if (jquery__WEBPACK_IMPORTED_MODULE_7___default()(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = (0,_nod__WEBPACK_IMPORTED_MODULE_13__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _form_utils__WEBPACK_IMPORTED_MODULE_12__.Validators.setMinMaxPriceValidation(validator, selectors);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;
    var $navLists = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = jquery__WEBPACK_IMPORTED_MODULE_7___default()(navList);
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
    var $accordionToggles = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = jquery__WEBPACK_IMPORTED_MODULE_7___default()(accordionToggle);
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
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).on('statechange', this.onStateChange);
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).off('statechange', this.onStateChange);
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.hooks.off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = jquery__WEBPACK_IMPORTED_MODULE_7___default()(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].goToUrl(url);
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = jquery__WEBPACK_IMPORTED_MODULE_7___default()(event.currentTarget);
    var $navList = jquery__WEBPACK_IMPORTED_MODULE_7___default()($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = jquery__WEBPACK_IMPORTED_MODULE_7___default()(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    _url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_8__.parse(window.location.href, true);
    var queryParams = jquery__WEBPACK_IMPORTED_MODULE_7___default()(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_8__.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].buildQueryString(url.query)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_13__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_8__.parse(window.location.href, true);
    var queryParams = decodeURI(jquery__WEBPACK_IMPORTED_MODULE_7___default()(currentTarget).serialize()).split('&');
    queryParams = _url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].parseQueryParams(queryParams);
    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    }

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_8__.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = jquery__WEBPACK_IMPORTED_MODULE_7___default()(event.currentTarget);
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

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validators: () => (/* binding */ Validators),
/* harmony export */   classifyForm: () => (/* binding */ classifyForm),
/* harmony export */   insertStateHiddenField: () => (/* binding */ insertStateHiddenField)
/* harmony export */ });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");










var inputTagNames = ['input', 'select', 'textarea'];

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
  var $input = jquery__WEBPACK_IMPORTED_MODULE_7___default()(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName;

  // Input can be text/checkbox/radio etc...
  if (tagName === 'input') {
    var inputType = $input.prop('type');
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  }

  // Apply class modifier
  return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }
  var $form = jquery__WEBPACK_IMPORTED_MODULE_7___default()(formSelector);
  var $inputs = $form.find(inputTagNames.join(', '));

  // Obtain options
  var _options = options,
    _options$formFieldCla = _options.formFieldClass,
    formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla;

  // Classify each input in a form
  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);
  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }
  return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after(jquery__WEBPACK_IMPORTED_MODULE_7___default()('<input />', stateFieldAttrs));
}
var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_9__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },
  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = jquery__WEBPACK_IMPORTED_MODULE_7___default()(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

        // If optional and nothing entered, it is valid
        if (isOptional && val.length === 0) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },
  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
      fieldsetSelector = selectors.fieldsetSelector,
      formSelector = selectors.formSelector,
      maxPriceSelector = selectors.maxPriceSelector,
      minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class
    });

    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },
  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = jquery__WEBPACK_IMPORTED_MODULE_7___default()("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_8__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_8__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_8__["default"].classes[value]);
      }
    });
  }
};


/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },
  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },
  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");




var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_3__.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }
    return url__WEBPACK_IMPORTED_MODULE_3__.format(parsed);
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

/***/ "./assets/js/theme/f/option-preview.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/f/option-preview.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _graph_ql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graph-ql */ "./assets/js/theme/f/graph-ql.js");








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var productList = document.querySelectorAll('[data-id]');
  var productIdList = [];
  var swatchSize = context.themeSettings.grid_swatch_option_size.split('x', 1)[0];
  var sizeName = context.themeSettings.size_label;
  var swatchQuery = '';
  productList.forEach(function (product) {
    productIdList.push(parseInt(product.dataset.id, 10));
  });
  if (context.themeSettings.show_swatches_on_grid) {
    swatchQuery += "... on SwatchOptionValue {\n            hexColors\n            imageUrl(width:" + swatchSize + ")\n        }";
  }
  function queryString(list) {
    var query = "query SeveralProductsByID {\n          site {\n            products(first: 50, entityIds: [" + list + "]) {\n              edges {\n                node {\n                  entityId\n                  productOptions {\n                    edges {\n                      node {\n                        ... on MultipleChoiceOption {\n                            displayStyle\n                            displayName\n                            values {\n                              edges {\n                                node {\n                                  label\n                                  " + swatchQuery + "\n                                }\n                              }\n                            }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }";
    return query;
  }
  function makeQuery(ids) {
    (0,_graph_ql__WEBPACK_IMPORTED_MODULE_7__["default"])(context.authorization, queryString(ids), function (result) {
      result.then(function (json) {
        var products = json.data.site.products.edges;
        products.forEach(function (product) {
          var productId = product.node.entityId;
          var productOptions = product.node.productOptions.edges;
          if (productOptions.length > 0) {
            var variantHTML = '';
            productOptions.forEach(function (option) {
              // Render the swatches if enabled
              if (option.node.displayStyle === 'Swatch' && context.themeSettings.show_swatches_on_grid) {
                variantHTML += '<div>';
                var swatchContent = '';
                option.node.values.edges.map(function (variant) {
                  if (variant.node.imageUrl !== null) {
                    swatchContent += "<div class=\"form-option form-option-swatch\"><span class='form-option-variant form-option-variant--pattern' title=\"" + variant.node.label + "\" style=\"background-image: url('" + variant.node.imageUrl + "')\"></span></div>";
                  } else if (variant.node.hexColors.length === 1) {
                    swatchContent += "<div class=\"form-option form-option-swatch\"><span class='form-option-variant form-option-variant--color' title=\"" + variant.node.label + "\" style=\"background-color:" + variant.node.hexColors + "\"></span></div>";
                  } else {
                    swatchContent += '<div class="form-option form-option-swatch"><div class="form-option--multi">';
                    variant.node.hexColors.forEach(function (color) {
                      var swatchClass = '';
                      if (variant.node.hexColors.length === 2) {
                        swatchClass += 'color--duotone';
                      } else {
                        swatchClass += 'color--tritone';
                      }
                      swatchContent += "<span class='form-option-variant form-option-variant--color " + swatchClass + "' title=\"" + variant.node.label + "\" style=\"background-color:" + color + "\"></span>";
                    });
                    swatchContent += '</div></div>';
                  }
                  return swatchContent;
                });
                variantHTML += swatchContent + "</div>";
              }

              // Enable sizes if enabled
              if (option.node.displayName === sizeName && context.themeSettings.show_sizes_on_grid) {
                variantHTML += '<div>';
                option.node.values.edges.forEach(function (variant) {
                  variantHTML += "<div class=\"form-option\"><span class='form-option-variant'>" + variant.node.label + "</span></div>";
                });
                variantHTML += '</div>';
              }
            });

            // add the swatch to the card, delete the data-id attribute so that it is not called again on infinite scroll
            jquery__WEBPACK_IMPORTED_MODULE_6___default()("[data-id=\"" + productId + "\"]").html(variantHTML).removeAttr('data-id');
          }
        });
      });
    });
  }
  function processList(ids) {
    var results = [];
    for (var i = 0, len = ids.length; i < len; i += 50) {
      results.push(ids.slice(i, i + 50));
      results.forEach(function (result) {
        makeQuery(result);
      });
    }
  }
  processList(productIdList);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRhbG9nX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fZmFjZXRlZC1zZWFyY2hfanMtYXNzZXRzX2pzX3RoZW1lX2Zfb3B0aW9uLS0wMWYxOWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDbEI7QUFDbUI7QUFDcEI7QUFBQSxJQUVESSxXQUFXLDBCQUFBQyxZQUFBO0VBQUFDLGNBQUEsQ0FBQUYsV0FBQSxFQUFBQyxZQUFBO0VBQUEsU0FBQUQsWUFBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUUsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQSxJQUFBQyxNQUFBLEdBQUFMLFdBQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQzVCRSxjQUFjLEdBQWQsU0FBQUEsZUFBZUMsS0FBSyxFQUFFQyxhQUFhLEVBQUU7SUFDakMsSUFBTUMsR0FBRyxHQUFHWCxzQ0FBUyxDQUFDYSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNqRCxJQUFNQyxXQUFXLEdBQUdsQiw2Q0FBQyxDQUFDWSxhQUFhLENBQUMsQ0FBQ08sU0FBUyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUUzRFAsR0FBRyxDQUFDUSxLQUFLLENBQUNILFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzFDLE9BQU9MLEdBQUcsQ0FBQ1EsS0FBSyxDQUFDQyxJQUFJO0lBRXJCWCxLQUFLLENBQUNZLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCUixNQUFNLENBQUNDLFFBQVEsR0FBR2QsdUNBQVUsQ0FBQztNQUFFdUIsUUFBUSxFQUFFWixHQUFHLENBQUNZLFFBQVE7TUFBRUMsTUFBTSxFQUFFekIsMEVBQXlCLENBQUNZLEdBQUcsQ0FBQ1EsS0FBSztJQUFFLENBQUMsQ0FBQztFQUMxRyxDQUFDO0VBQUEs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ZmxhaXItY292ZW50LWdhcmRlbi8uL2Fzc2V0cy9qcy90aGVtZS9jYXRhbG9nLmpzIiwid2VicGFjazovL2ZsYWlyLWNvdmVudC1nYXJkZW4vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovL2ZsYWlyLWNvdmVudC1nYXJkZW4vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZmxhaXItY292ZW50LWdhcmRlbi8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbW9kZWxzL2Zvcm1zLmpzIiwid2VicGFjazovL2ZsYWlyLWNvdmVudC1nYXJkZW4vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3VybC11dGlscy5qcyIsIndlYnBhY2s6Ly9mbGFpci1jb3ZlbnQtZ2FyZGVuLy4vYXNzZXRzL2pzL3RoZW1lL2Yvb3B0aW9uLXByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL3VybC11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29sbGFwc2libGUnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4vZm9ybS11dGlscyc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcblxuLyoqXG4gKiBGYWNldGVkIHNlYXJjaCB2aWV3IGNvbXBvbmVudFxuICovXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBPYmplY3Qgd2l0aCBvcHRpb25zIGZvciB0aGUgYWpheCByZXF1ZXN0c1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgKiAgICAgIHRlbXBsYXRlczoge1xuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgKiAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcidcbiAgICAgKiAgICAgfVxuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgdGVtcGxhdGVzRGlkTG9hZCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICogICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IGZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgdGVtcGxhdGVzRGlkTG9hZCk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLW5hdmlnYXRpb24sICNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLXRvZ2dsZScsXG4gICAgICAgICAgICBibG9ja2VyU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYmxvY2tlcicsXG4gICAgICAgICAgICBjbGVhckZhY2V0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC1jbGVhckxpbmsnLFxuICAgICAgICAgICAgY29tcG9uZW50U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaC1uYXZMaXN0JyxcbiAgICAgICAgICAgIGZhY2V0TmF2TGlzdFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLm5hdkxpc3QnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUVycm9yU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1pbmxpbmVNZXNzYWdlJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0tZmllbGRzZXQnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUZvcm1TZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWF4X3ByaWNlXScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1pbl9wcmljZV0nLFxuICAgICAgICAgICAgc2hvd01vcmVUb2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsXG4gICAgICAgICAgICBmYWNldGVkU2VhcmNoRmlsdGVySXRlbXM6ICcjZmFjZXRlZFNlYXJjaC1maWx0ZXJJdGVtcyAuZm9ybS1pbnB1dCcsXG4gICAgICAgICAgICBtb2RhbDogbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXSxcbiAgICAgICAgICAgIG1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBbXTtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XG4gICAgICAgICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKS5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxuICAgICAgICAvLyBOT1RFOiBOZWVkIHRvIGV4ZWN1dGUgYWZ0ZXIgQ29sbGFwc2libGUgZ2V0cyBib290c3RyYXBwZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCkge1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpO1xuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XG5cbiAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcblxuICAgICAgICBpZiAoaGFzTW9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xuICAgICAgICBpZiAoXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShmYWNldFVybCwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogZmFjZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycyk7XG5cbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCkge1xuICAgICAgICBjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gUmVzdG9yZSBjb2xsYXBzZWQgc3RhdGUgZm9yIGVhY2ggZmFjZXRcbiAgICAgICAgJG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQobmF2TGlzdCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gQ2xlYW4tdXBcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vbignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub24oJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vZmYoJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9mZignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICBvbkNsZWFyRmFjZXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cignaHJlZicpKTtcblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xuICAgICAgICB0aGlzLnRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgIH1cblxuICAgIG9uRmFjZXRDbGljayhldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRsaW5rLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWxPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSkpO1xuICAgIH1cblxuICAgIG9uUmFuZ2VTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIXRoaXMucHJpY2VSYW5nZVZhbGlkYXRvci5hcmVBbGwobm9kLmNvbnN0YW50cy5WQUxJRCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IGRlY29kZVVSSSgkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpKS5zcGxpdCgnJicpO1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHVybFV0aWxzLnBhcnNlUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHVybC5xdWVyeVtrZXldID0gcXVlcnlQYXJhbXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxuICAgICAgICBjb25zdCB1cmxRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmxRdWVyeVBhcmFtcykgfSkpO1xuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH1cblxuICAgIG9uQWNjb3JkaW9uVG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuXG4gICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2V0ZWRTZWFyY2g7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vbW9kZWxzL2Zvcm1zJztcblxuY29uc3QgaW5wdXRUYWdOYW1lcyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG5dO1xuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gYW4gaW5wdXQgZWxlbWVudCBvbiBpdHMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybUZpZWxkQ2xhc3NcbiAqIEByZXR1cm4ge29iamVjdH0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICBjb25zdCAkZm9ybUZpZWxkID0gJGlucHV0LnBhcmVudChgLiR7Zm9ybUZpZWxkQ2xhc3N9YCk7XG4gICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7dGFnTmFtZX1gO1xuICAgIGxldCBzcGVjaWZpY0NsYXNzTmFtZTtcblxuICAgIC8vIElucHV0IGNhbiBiZSB0ZXh0L2NoZWNrYm94L3JhZGlvIGV0Yy4uLlxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5wcm9wKCd0eXBlJyk7XG5cbiAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydyYWRpbycsICdjaGVja2JveCcsICdzdWJtaXQnXSwgaW5wdXRUeXBlKSkge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1jaGVja2JveCwgLmZvcm0tZmllbGQtLXJhZGlvXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7Xy5jYW1lbENhc2UoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1pbnB1dCAuZm9ybS1maWVsZC0taW5wdXRUZXh0XG4gICAgICAgICAgICBzcGVjaWZpY0NsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0ke18uY2FwaXRhbGl6ZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjbGFzcyBtb2RpZmllclxuICAgIHJldHVybiAkZm9ybUZpZWxkXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIC5hZGRDbGFzcyhzcGVjaWZpY0NsYXNzTmFtZSk7XG59XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBlYWNoIGlucHV0IGVsZW1lbnQgaW4gYSBmb3JtIGJhc2VkIG9uIGl0cyB0eXBlXG4gKiBAZXhhbXBsZVxuICogLy8gQmVmb3JlXG4gKiA8Zm9ybSBpZD1cImZvcm1cIj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAqICAgICA8L2Rpdj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8c2VsZWN0Pi4uLjwvc2VsZWN0PlxuICogICAgIDwvZGl2PlxuICogPC9mb3JtPlxuICpcbiAqIGNsYXNzaWZ5Rm9ybSgnI2Zvcm0nLCB7IGZvcm1GaWVsZENsYXNzOiAnZm9ybS1maWVsZCcgfSk7XG4gKlxuICogLy8gQWZ0ZXJcbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWlucHV0IGZvcm0tZmllbGQtLWlucHV0VGV4dFwiPi4uLjwvZGl2PlxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0XCI+Li4uPC9kaXY+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBmb3JtU2VsZWN0b3IgLSBzZWxlY3RvciBvciBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7alF1ZXJ5fSBFbGVtZW50IGl0c2VsZlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGb3JtKGZvcm1TZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG4gICAgY29uc3QgJGlucHV0cyA9ICRmb3JtLmZpbmQoaW5wdXRUYWdOYW1lcy5qb2luKCcsICcpKTtcblxuICAgIC8vIE9idGFpbiBvcHRpb25zXG4gICAgY29uc3QgeyBmb3JtRmllbGRDbGFzcyA9ICdmb3JtLWZpZWxkJyB9ID0gb3B0aW9ucztcblxuICAgIC8vIENsYXNzaWZ5IGVhY2ggaW5wdXQgaW4gYSBmb3JtXG4gICAgJGlucHV0cy5lYWNoKChfXywgaW5wdXQpID0+IHtcbiAgICAgICAgY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICRmb3JtO1xufVxuXG4vKipcbiAqIEdldCBpZCBmcm9tIGdpdmVuIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJGZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RmllbGRJZCgkZmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gJGZpZWxkLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcWy4qXFxdKS8pO1xuXG4gICAgaWYgKGZpZWxkSWQgJiYgZmllbGRJZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkSWRbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEluc2VydCBoaWRkZW4gZmllbGQgYWZ0ZXIgU3RhdGUvUHJvdmluY2UgZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkc3RhdGVGaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJHN0YXRlRmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gZ2V0RmllbGRJZCgkc3RhdGVGaWVsZCk7XG4gICAgY29uc3Qgc3RhdGVGaWVsZEF0dHJzID0ge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgbmFtZTogYEZvcm1GaWVsZElzVGV4dCR7ZmllbGRJZH1gLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgIH07XG5cbiAgICAkc3RhdGVGaWVsZC5hZnRlcigkKCc8aW5wdXQgLz4nLCBzdGF0ZUZpZWxkQXR0cnMpKTtcbn1cblxuY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFbWFpbFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQyU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVxdWlyZW1lbnRzXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWxcbiAgICAgKi9cbiAgICBzZXRQYXNzd29yZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHBhc3N3b3JkU2VsZWN0b3IsIHBhc3N3b3JkMlNlbGVjdG9yLCByZXF1aXJlbWVudHMsIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5hbHBoYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMubnVtZXJpYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubGVuZ3RoID49IHJlcXVpcmVtZW50cy5taW5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb3B0aW9uYWwgYW5kIG5vdGhpbmcgZW50ZXJlZCwgaXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwgJiYgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVxdWlyZW1lbnRzLmVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfSA9IHNlbGVjdG9ycztcblxuICAgICAgICB2YWxpZGF0b3IuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGZvcm06IGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdfJywgLy8gS0xVREdFOiBEb24ndCBhcHBseSBzdWNjZXNzIGNsYXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWF4LiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4uIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ0lucHV0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ21pbi1udW1iZXI6MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5zZXRNZXNzYWdlT3B0aW9ucyh7XG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgcGFyZW50OiBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZXJyb3JTcGFuOiBlcnJvclNlbGVjdG9yLFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xuIiwiY29uc3QgZm9ybXMgPSB7XG4gICAgZW1haWwodmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmUgPSAvXi4rQC4rXFwuLisvO1xuICAgICAgICByZXR1cm4gcmUudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyBhIHBhc3N3b3JkIGZpZWxkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcGFzc3dvcmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90RW1wdHkodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB2YWxpZGF0ZXMgaWYgYSBmaWVsZCBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqXG4gICAgICovXG4gICAgbm90RW1wdHkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuY29uc3QgdXJsVXRpbHMgPSB7XG4gICAgZ2V0VXJsOiAoKSA9PiBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWAsXG5cbiAgICBnb1RvVXJsOiAodXJsKSA9PiB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH0sXG5cbiAgICByZXBsYWNlUGFyYW1zOiAodXJsLCBwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGxldCBwYXJhbTtcblxuICAgICAgICAvLyBMZXQgdGhlIGZvcm1hdHRlciB1c2UgdGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB0aGUgbmV3IHVybFxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcblxuICAgICAgICBmb3IgKHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVcmwuZm9ybWF0KHBhcnNlZCk7XG4gICAgfSxcblxuICAgIGJ1aWxkUXVlcnlTdHJpbmc6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgbGV0IG91dCA9ICcnO1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBxdWVyeURhdGEpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5RGF0YVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmR4O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobmR4IGluIHF1ZXJ5RGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlEYXRhW2tleV0uaGFzT3duUHJvcGVydHkobmR4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldW25keF19YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dC5zdWJzdHJpbmcoMSk7XG4gICAgfSxcblxuICAgIHBhcnNlUXVlcnlQYXJhbXM6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBxdWVyeURhdGFbaV0uc3BsaXQoJz0nKTtcblxuICAgICAgICAgICAgaWYgKHRlbXBbMF0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zW3RlbXBbMF1dKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0ucHVzaCh0ZW1wWzFdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0gPSBbcGFyYW1zW3RlbXBbMF1dLCB0ZW1wWzFdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IHRlbXBbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmxVdGlscztcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgZ3JhcGhxbCBmcm9tICcuL2dyYXBoLXFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9kdWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWlkXScpO1xuICAgIGNvbnN0IHByb2R1Y3RJZExpc3QgPSBbXTtcbiAgICBjb25zdCBzd2F0Y2hTaXplID0gY29udGV4dC50aGVtZVNldHRpbmdzLmdyaWRfc3dhdGNoX29wdGlvbl9zaXplLnNwbGl0KCd4JywgMSlbMF07XG4gICAgY29uc3Qgc2l6ZU5hbWUgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3Muc2l6ZV9sYWJlbDtcbiAgICBsZXQgc3dhdGNoUXVlcnkgPSAnJztcblxuICAgIHByb2R1Y3RMaXN0LmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgcHJvZHVjdElkTGlzdC5wdXNoKHBhcnNlSW50KHByb2R1Y3QuZGF0YXNldC5pZCwgMTApKTtcbiAgICB9KTtcblxuICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3Muc2hvd19zd2F0Y2hlc19vbl9ncmlkKSB7XG4gICAgICAgIHN3YXRjaFF1ZXJ5ICs9IGAuLi4gb24gU3dhdGNoT3B0aW9uVmFsdWUge1xuICAgICAgICAgICAgaGV4Q29sb3JzXG4gICAgICAgICAgICBpbWFnZVVybCh3aWR0aDoke3N3YXRjaFNpemV9KVxuICAgICAgICB9YDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcXVlcnlTdHJpbmcobGlzdCkge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGBxdWVyeSBTZXZlcmFsUHJvZHVjdHNCeUlEIHtcbiAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgIHByb2R1Y3RzKGZpcnN0OiA1MCwgZW50aXR5SWRzOiBbJHtsaXN0fV0pIHtcbiAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzd2F0Y2hRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1gO1xuICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVF1ZXJ5KGlkcykge1xuICAgICAgICBncmFwaHFsKGNvbnRleHQuYXV0aG9yaXphdGlvbiwgcXVlcnlTdHJpbmcoaWRzKSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGpzb24uZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHByb2R1Y3Qubm9kZS5lbnRpdHlJZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE9wdGlvbnMgPSBwcm9kdWN0Lm5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YXJpYW50SFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlciB0aGUgc3dhdGNoZXMgaWYgZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24ubm9kZS5kaXNwbGF5U3R5bGUgPT09ICdTd2F0Y2gnICYmIGNvbnRleHQudGhlbWVTZXR0aW5ncy5zaG93X3N3YXRjaGVzX29uX2dyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudEhUTUwgKz0gJzxkaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN3YXRjaENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLm5vZGUudmFsdWVzLmVkZ2VzLm1hcCh2YXJpYW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YXJpYW50Lm5vZGUuaW1hZ2VVcmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hDb250ZW50ICs9IGA8ZGl2IGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCI+PHNwYW4gY2xhc3M9J2Zvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVybicgdGl0bGU9XCIke3ZhcmlhbnQubm9kZS5sYWJlbH1cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt2YXJpYW50Lm5vZGUuaW1hZ2VVcmx9JylcIj48L3NwYW4+PC9kaXY+YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFyaWFudC5ub2RlLmhleENvbG9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hDb250ZW50ICs9IGA8ZGl2IGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCI+PHNwYW4gY2xhc3M9J2Zvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3InIHRpdGxlPVwiJHt2YXJpYW50Lm5vZGUubGFiZWx9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiR7dmFyaWFudC5ub2RlLmhleENvbG9yc31cIj48L3NwYW4+PC9kaXY+YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhdGNoQ29udGVudCArPSAnPGRpdiBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiPjxkaXYgY2xhc3M9XCJmb3JtLW9wdGlvbi0tbXVsdGlcIj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQubm9kZS5oZXhDb2xvcnMuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzd2F0Y2hDbGFzcyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyaWFudC5ub2RlLmhleENvbG9ycy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXRjaENsYXNzICs9ICdjb2xvci0tZHVvdG9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hDbGFzcyArPSAnY29sb3ItLXRyaXRvbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXRjaENvbnRlbnQgKz0gYDxzcGFuIGNsYXNzPSdmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yICR7c3dhdGNoQ2xhc3N9JyB0aXRsZT1cIiR7dmFyaWFudC5ub2RlLmxhYmVsfVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoke2NvbG9yfVwiPjwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhdGNoQ29udGVudCArPSAnPC9kaXY+PC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzd2F0Y2hDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudEhUTUwgKz0gYCR7c3dhdGNoQ29udGVudH08L2Rpdj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBzaXplcyBpZiBlbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5ub2RlLmRpc3BsYXlOYW1lID09PSBzaXplTmFtZSAmJiBjb250ZXh0LnRoZW1lU2V0dGluZ3Muc2hvd19zaXplc19vbl9ncmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRIVE1MICs9ICc8ZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5ub2RlLnZhbHVlcy5lZGdlcy5mb3JFYWNoKHZhcmlhbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudEhUTUwgKz0gYDxkaXYgY2xhc3M9XCJmb3JtLW9wdGlvblwiPjxzcGFuIGNsYXNzPSdmb3JtLW9wdGlvbi12YXJpYW50Jz4ke3ZhcmlhbnQubm9kZS5sYWJlbH08L3NwYW4+PC9kaXY+YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRIVE1MICs9ICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHN3YXRjaCB0byB0aGUgY2FyZCwgZGVsZXRlIHRoZSBkYXRhLWlkIGF0dHJpYnV0ZSBzbyB0aGF0IGl0IGlzIG5vdCBjYWxsZWQgYWdhaW4gb24gaW5maW5pdGUgc2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGBbZGF0YS1pZD1cIiR7cHJvZHVjdElkfVwiXWApLmh0bWwodmFyaWFudEhUTUwpLnJlbW92ZUF0dHIoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcm9jZXNzTGlzdChpZHMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gaWRzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSA1MCkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGlkcy5zbGljZShpLCBpICsgNTApKTtcbiAgICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgbWFrZVF1ZXJ5KHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9jZXNzTGlzdChwcm9kdWN0SWRMaXN0KTtcbn1cbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsIiQiLCJ1cmxVdGlscyIsIlVybCIsIkNhdGFsb2dQYWdlIiwiX1BhZ2VNYW5hZ2VyIiwiX2luaGVyaXRzTG9vc2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uU29ydEJ5U3VibWl0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXJsIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsImJ1aWxkUXVlcnlTdHJpbmciLCJkZWZhdWx0IiwiaG9va3MiLCJhcGkiLCJtb2RhbEZhY3RvcnkiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJWYWxpZGF0b3JzIiwibm9kIiwiRmFjZXRlZFNlYXJjaCIsInJlcXVlc3RPcHRpb25zIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiX3RoaXMiLCJkZWZhdWx0T3B0aW9ucyIsImFjY29yZGlvblRvZ2dsZVNlbGVjdG9yIiwiYmxvY2tlclNlbGVjdG9yIiwiY2xlYXJGYWNldFNlbGVjdG9yIiwiY29tcG9uZW50U2VsZWN0b3IiLCJmYWNldE5hdkxpc3RTZWxlY3RvciIsInByaWNlUmFuZ2VFcnJvclNlbGVjdG9yIiwicHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IiLCJwcmljZVJhbmdlRm9ybVNlbGVjdG9yIiwicHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IiLCJwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvciIsInNob3dNb3JlVG9nZ2xlU2VsZWN0b3IiLCJmYWNldGVkU2VhcmNoRmlsdGVySXRlbXMiLCJtb2RhbCIsIm1vZGFsT3BlbiIsIl9leHRlbmQiLCJjb2xsYXBzZWRGYWNldHMiLCJjb2xsYXBzZWRGYWNldEl0ZW1zIiwiaW5pdFByaWNlVmFsaWRhdG9yIiwiZWFjaCIsImluZGV4IiwibmF2TGlzdCIsImNvbGxhcHNlRmFjZXRJdGVtcyIsImFjY29yZGlvblRvZ2dsZSIsIiRhY2NvcmRpb25Ub2dnbGUiLCJjb2xsYXBzaWJsZSIsImRhdGEiLCJpc0NvbGxhcHNlZCIsInB1c2giLCJ0YXJnZXRJZCIsInNldFRpbWVvdXQiLCJpcyIsImNvbGxhcHNlQWxsRmFjZXRzIiwib25TdGF0ZUNoYW5nZSIsImJpbmQiLCJvblRvZ2dsZUNsaWNrIiwib25BY2NvcmRpb25Ub2dnbGUiLCJvbkNsZWFyRmFjZXQiLCJvbkZhY2V0Q2xpY2siLCJvblJhbmdlU3VibWl0IiwiZmlsdGVyRmFjZXRJdGVtcyIsImJpbmRFdmVudHMiLCJyZWZyZXNoVmlldyIsImNvbnRlbnQiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRzIiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMiLCJ1cGRhdGVWaWV3IiwiX3RoaXMyIiwic2hvdyIsImdldFBhZ2UiLCJnZXRVcmwiLCJlcnIiLCJoaWRlIiwiRXJyb3IiLCJleHBhbmRGYWNldEl0ZW1zIiwiJG5hdkxpc3QiLCJpZCIsImF0dHIiLCJfd2l0aG91dCIsImhhc01vcmVSZXN1bHRzIiwiX3VuaW9uIiwidG9nZ2xlRmFjZXRJdGVtcyIsIl9pbmNsdWRlcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJfdGhpczMiLCJmYWNldCIsImZhY2V0VXJsIiwic2hvd01vcmUiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwicmVzcG9uc2UiLCJvcGVuIiwidXBkYXRlQ29udGVudCIsIiRpdGVtcyIsInZhbCIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsInRleHQiLCJpbmRleE9mIiwiZXhwYW5kRmFjZXQiLCJjb2xsYXBzZUZhY2V0IiwiY2xvc2UiLCJfdGhpczQiLCIkYWNjb3JkaW9uVG9nZ2xlcyIsImV4cGFuZEFsbEZhY2V0cyIsIl90aGlzNSIsImxlbmd0aCIsInZhbGlkYXRvciIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJwcmljZVJhbmdlVmFsaWRhdG9yIiwiX3RoaXM2IiwiJG5hdkxpc3RzIiwic2hvdWxkQ29sbGFwc2UiLCJfdGhpczciLCJ1bmJpbmRFdmVudHMiLCJvbiIsImRvY3VtZW50Iiwib2ZmIiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJnb1RvVXJsIiwiJHRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJkZWNvZGVVUkkiLCJwYXJzZVF1ZXJ5UGFyYW1zIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJ1cmxRdWVyeVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImZvcm1zIiwiaW5wdXRUYWdOYW1lcyIsImNsYXNzaWZ5SW5wdXQiLCJpbnB1dCIsImZvcm1GaWVsZENsYXNzIiwiJGlucHV0IiwiJGZvcm1GaWVsZCIsInBhcmVudCIsInRhZ05hbWUiLCJwcm9wIiwiY2xhc3NOYW1lIiwic3BlY2lmaWNDbGFzc05hbWUiLCJpbnB1dFR5cGUiLCJfY2FtZWxDYXNlIiwiX2NhcGl0YWxpemUiLCJhZGRDbGFzcyIsImNsYXNzaWZ5Rm9ybSIsIiRmb3JtIiwiJGlucHV0cyIsImZpbmQiLCJqb2luIiwiX29wdGlvbnMiLCJfb3B0aW9ucyRmb3JtRmllbGRDbGEiLCJfXyIsImdldEZpZWxkSWQiLCIkZmllbGQiLCJmaWVsZElkIiwibWF0Y2giLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiJHN0YXRlRmllbGQiLCJzdGF0ZUZpZWxkQXR0cnMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYWZ0ZXIiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJmaWVsZCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwicGFzc3dvcmRTZWxlY3RvciIsInBhc3N3b3JkMlNlbGVjdG9yIiwicmVxdWlyZW1lbnRzIiwiaXNPcHRpb25hbCIsIiRwYXNzd29yZCIsInBhc3N3b3JkVmFsaWRhdGlvbnMiLCJSZWdFeHAiLCJhbHBoYSIsIm51bWVyaWMiLCJtaW5sZW5ndGgiLCJlcnJvciIsImNvbmZpZ3VyZSIsImZvcm0iLCJwcmV2ZW50U3VibWl0Iiwic3VjY2Vzc0NsYXNzIiwic2V0TWVzc2FnZU9wdGlvbnMiLCJlcnJvclNwYW4iLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsIiRmaWVsZENsYXNzRWxlbWVudCIsImtleXMiLCJjbGFzc2VzIiwiZm9yRWFjaCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJyZSIsInRlc3QiLCJwYXNzd29yZCIsIm5vdEVtcHR5IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInRpdGxlIiwidHJpZ2dlciIsInJlcGxhY2VQYXJhbXMiLCJwYXJzZWQiLCJwYXJhbSIsInF1ZXJ5RGF0YSIsIm91dCIsIkFycmF5IiwiaXNBcnJheSIsIm5keCIsInN1YnN0cmluZyIsImkiLCJ0ZW1wIiwiZ3JhcGhxbCIsImNvbnRleHQiLCJwcm9kdWN0TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcm9kdWN0SWRMaXN0Iiwic3dhdGNoU2l6ZSIsInRoZW1lU2V0dGluZ3MiLCJncmlkX3N3YXRjaF9vcHRpb25fc2l6ZSIsInNpemVOYW1lIiwic2l6ZV9sYWJlbCIsInN3YXRjaFF1ZXJ5IiwicHJvZHVjdCIsInBhcnNlSW50IiwiZGF0YXNldCIsInNob3dfc3dhdGNoZXNfb25fZ3JpZCIsInF1ZXJ5U3RyaW5nIiwibGlzdCIsIm1ha2VRdWVyeSIsImlkcyIsImF1dGhvcml6YXRpb24iLCJ0aGVuIiwianNvbiIsInByb2R1Y3RzIiwic2l0ZSIsImVkZ2VzIiwicHJvZHVjdElkIiwibm9kZSIsImVudGl0eUlkIiwicHJvZHVjdE9wdGlvbnMiLCJ2YXJpYW50SFRNTCIsIm9wdGlvbiIsImRpc3BsYXlTdHlsZSIsInN3YXRjaENvbnRlbnQiLCJ2YWx1ZXMiLCJtYXAiLCJ2YXJpYW50IiwiaW1hZ2VVcmwiLCJsYWJlbCIsImhleENvbG9ycyIsImNvbG9yIiwic3dhdGNoQ2xhc3MiLCJkaXNwbGF5TmFtZSIsInNob3dfc2l6ZXNfb25fZ3JpZCIsImh0bWwiLCJyZW1vdmVBdHRyIiwicHJvY2Vzc0xpc3QiLCJyZXN1bHRzIiwibGVuIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9
