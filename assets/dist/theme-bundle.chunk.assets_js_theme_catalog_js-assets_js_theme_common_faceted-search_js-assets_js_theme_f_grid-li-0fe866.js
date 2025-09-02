"use strict";
(self["webpackChunkflair_kings_road"] = self["webpackChunkflair_kings_road"] || []).push([["assets_js_theme_catalog_js-assets_js_theme_common_faceted-search_js-assets_js_theme_f_grid-li-0fe866"],{

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
  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = CatalogPage.prototype;
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
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
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
      modal: (0,_global_modal__WEBPACK_IMPORTED_MODULE_8__["default"])('#modal')[0],
      modalOpen: false
    };

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])();

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
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])();

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
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__.api.getPage(_url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl(), this.requestOptions, function (err, content) {
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
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__.api.getPage(facetUrl, {
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
    var validator = (0,_nod__WEBPACK_IMPORTED_MODULE_11__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _form_utils__WEBPACK_IMPORTED_MODULE_10__.Validators.setMinMaxPriceValidation(validator, selectors);
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
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__.hooks.on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__.hooks.off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);
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
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6__.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].buildQueryString(url.query)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_11__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].parseQueryParams(queryParams);
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6__.format({
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

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validators": () => (/* binding */ Validators),
/* harmony export */   "classifyForm": () => (/* binding */ classifyForm),
/* harmony export */   "insertStateHiddenField": () => (/* binding */ insertStateHiddenField)
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
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");









var inputTagNames = ['input', 'select', 'textarea'];

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
  var $input = $(input);
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
  var $form = $(formSelector);
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
  $stateField.after($('<input />', stateFieldAttrs));
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
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_8__["default"].email(val);
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
    var $password = $(passwordSelector);
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
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value]);
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
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_1__.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }
    return url__WEBPACK_IMPORTED_MODULE_1__.format(parsed);
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
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlUtils);

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
    $('.productGrid').removeClass('productGrid--list productGrid--grid');
    $('.productGrid').addClass("productGrid--" + mode);
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
/* harmony import */ var _graph_ql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graph-ql */ "./assets/js/theme/f/graph-ql.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var productList = document.querySelectorAll('[data-id]');
  var productIdList = [];
  var swatchSize = context.themeSettings.swatch_option_size.split('x', 1)[0];
  var sizeName = context.themeSettings.size_label;
  var swatchQuery = '';
  productList.forEach(function (product) {
    productIdList.push(parseInt(product.dataset.id, 10));
  });
  if (context.themeSettings.enable_color_swatches) {
    swatchQuery += "... on SwatchOptionValue {\n            hexColors\n            imageUrl(width:" + swatchSize + ")\n        }";
  }
  function queryString(list) {
    var query = "query SeveralProductsByID {\n              site {\n                products(first: 50, entityIds: [" + list + "]) {\n                  edges {\n                    node {\n                      entityId\n                      productOptions {\n                        edges {\n                          node {\n                            ... on MultipleChoiceOption {\n                                displayStyle\n                                displayName\n                                values {\n                                  edges {\n                                    node {\n                                      label\n                                      " + swatchQuery + "\n                                    }\n                                  }\n                                }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }";
    return query;
  }
  function makeQuery(ids) {
    (0,_graph_ql__WEBPACK_IMPORTED_MODULE_6__["default"])(context.authorization, queryString(ids), function (result) {
      result.then(function (json) {
        var products = json.data.site.products.edges;
        products.forEach(function (product) {
          var productId = product.node.entityId;
          var productOptions = product.node.productOptions.edges;
          if (productOptions.length > 0) {
            var variantHTML = '';
            productOptions.forEach(function (option) {
              // Render the swatches if enabled
              if (option.node.displayStyle === 'Swatch' && context.themeSettings.enable_color_swatches) {
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
              if (option.node.displayName === sizeName && context.themeSettings.show_sizes_on_grid) {
                variantHTML += '<div>';
                option.node.values.edges.forEach(function (variant) {
                  variantHTML += "<div class=\"form-option form-option\"><span class='form-option-variant'>" + variant.node.label + "</span></div>";
                });
                variantHTML += '</div>';
              }
            });
            // add the swatch to the card, delete the data-id attribute so that it is not called again on infinite scroll
            $("[data-id=\"" + productId + "\"]").html(variantHTML).removeAttr('data-id');
          }
        });
      });
    });
  }
  function processList(ids) {
    // The call is for first 50 so split list up and loop if products more than 50
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
function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(urlContext) {
  var products;
  var $checked = $('body').find('input[name="products\[\]"]:checked');
  var $compareLink = $('a[data-compare-nav]');
  if ($checked.length !== 0) {
    products = lodash_map__WEBPACK_IMPORTED_MODULE_0___default()($checked, function (element) {
      return element.value;
    });
    updateCounterNav(products, $compareLink, urlContext);
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
    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');
    if (productsToCompare.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_2__.showAlertModal)('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_2__.showAlertModal)('You must select at least two products to compare');
      return false;
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRhbG9nX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fZmFjZXRlZC1zZWFyY2hfanMtYXNzZXRzX2pzX3RoZW1lX2ZfZ3JpZC1saS0wZmU4NjYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNDO0FBQ3BCO0FBQUEsSUFFREcsV0FBVywwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLFdBQUEsRUFBQUMsWUFBQTtFQUFBLFNBQUFELFlBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFFLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUEsSUFBQUMsTUFBQSxHQUFBTCxXQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUM1QkUsY0FBYyxHQUFkLFNBQUFBLGVBQWVDLEtBQUssRUFBRUMsYUFBYSxFQUFFO0lBQ2pDLElBQU1DLEdBQUcsR0FBR1gsc0NBQVMsQ0FBQ2EsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDakQsSUFBTUMsV0FBVyxHQUFHQyxDQUFDLENBQUNQLGFBQWEsQ0FBQyxDQUFDUSxTQUFTLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUUzRFIsR0FBRyxDQUFDUyxLQUFLLENBQUNKLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzFDLE9BQU9MLEdBQUcsQ0FBQ1MsS0FBSyxDQUFDQyxJQUFJO0lBRXJCWixLQUFLLENBQUNhLGNBQWMsRUFBRTtJQUN0QlQsTUFBTSxDQUFDQyxRQUFRLEdBQUdkLHVDQUFVLENBQUM7TUFBRXdCLFFBQVEsRUFBRWIsR0FBRyxDQUFDYSxRQUFRO01BQUVDLE1BQU0sRUFBRTFCLDBFQUF5QixDQUFDWSxHQUFHLENBQUNTLEtBQUs7SUFBRSxDQUFDLENBQUM7RUFDMUcsQ0FBQztFQUFBLE9BQUFuQixXQUFBO0FBQUEsRUFW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QU07TUFDSHdDLGdCQUFnQixDQUFDVyxjQUFjLEVBQUVuRCxPQUFPLENBQUM7SUFDN0M7SUFFQTZDLGdCQUFnQixDQUFDTSxjQUFjLEVBQUVDLG1CQUFtQixFQUFFTixVQUFVLENBQUM7RUFDckUsQ0FBQyxDQUFDO0VBRUZwUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM0SCxFQUFFLENBQUMsUUFBUSxFQUFFLHdCQUF3QixFQUFFLFVBQUFwSSxLQUFLLEVBQUk7SUFDdEQsSUFBTW9ULEtBQUssR0FBRzVTLENBQUMsQ0FBQ1IsS0FBSyxDQUFDQyxhQUFhLENBQUM7SUFDcEMsSUFBTW9ULGlCQUFpQixHQUFHRCxLQUFLLENBQUNoSixJQUFJLENBQUMsb0NBQW9DLENBQUM7SUFFMUUsSUFBSWlKLGlCQUFpQixDQUFDaE0sTUFBTSxJQUFJLENBQUMsRUFBRTtNQUMvQmdMLHNEQUFjLENBQUMsa0RBQWtELENBQUM7TUFDbEVyUyxLQUFLLENBQUNhLGNBQWMsRUFBRTtJQUMxQjtFQUNKLENBQUMsQ0FBQztFQUVGTCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM0SCxFQUFFLENBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFlBQU07SUFDL0MsSUFBTWtMLG9CQUFvQixHQUFHOVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDNEosSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBRWpGLElBQUlrSixvQkFBb0IsQ0FBQ2pNLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFDbENnTCxzREFBYyxDQUFDLGtEQUFrRCxDQUFDO01BQ2xFLE9BQU8sS0FBSztJQUNoQjtFQUNKLENBQUMsQ0FBQztBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxhaXIta2luZ3Mtcm9hZC8uL2Fzc2V0cy9qcy90aGVtZS9jYXRhbG9nLmpzIiwid2VicGFjazovL2ZsYWlyLWtpbmdzLXJvYWQvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovL2ZsYWlyLWtpbmdzLXJvYWQvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZmxhaXIta2luZ3Mtcm9hZC8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbW9kZWxzL2Zvcm1zLmpzIiwid2VicGFjazovL2ZsYWlyLWtpbmdzLXJvYWQvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3VybC11dGlscy5qcyIsIndlYnBhY2s6Ly9mbGFpci1raW5ncy1yb2FkLy4vYXNzZXRzL2pzL3RoZW1lL2YvZ3JpZC1saXN0LXN3aXRjaGVyLmpzIiwid2VicGFjazovL2ZsYWlyLWtpbmdzLXJvYWQvLi9hc3NldHMvanMvdGhlbWUvZi9vcHRpb24tcHJldmlldy5qcyIsIndlYnBhY2s6Ly9mbGFpci1raW5ncy1yb2FkLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vdXJsLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi9mb3JtLXV0aWxzJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuXG4vKipcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XG4gKi9cbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAqICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0T3B0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY2NvcmRpb25Ub2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tbmF2aWdhdGlvbiwgI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtdG9nZ2xlJyxcbiAgICAgICAgICAgIGJsb2NrZXJTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5ibG9ja2VyJyxcbiAgICAgICAgICAgIGNsZWFyRmFjZXRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGluaycsXG4gICAgICAgICAgICBjb21wb25lbnRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QnLFxuICAgICAgICAgICAgZmFjZXROYXZMaXN0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAubmF2TGlzdCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2UnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1maWVsZHNldCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRm9ybVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWluX3ByaWNlXScsXG4gICAgICAgICAgICBzaG93TW9yZVRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1jb250ZW50IC50b2dnbGVMaW5rJyxcbiAgICAgICAgICAgIGZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtczogJyNmYWNldGVkU2VhcmNoLWZpbHRlckl0ZW1zIC5mb3JtLWlucHV0JyxcbiAgICAgICAgICAgIG1vZGFsOiBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdLFxuICAgICAgICAgICAgbW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcml2YXRlIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5yZXF1ZXN0T3B0aW9ucyA9IHJlcXVlc3RPcHRpb25zO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gW107XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IFtdO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gU2hvdyBsaW1pdGVkIGl0ZW1zIGJ5IGRlZmF1bHRcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkKG5hdkxpc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTWFyayBpbml0aWFsbHkgY29sbGFwc2VkIGFjY29yZGlvbnNcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5wdXNoKGNvbGxhcHNpYmxlLnRhcmdldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29sbGFwc2UgYWxsIGZhY2V0cyBpZiBpbml0aWFsbHkgaGlkZGVuXG4gICAgICAgIC8vIE5PVEU6IE5lZWQgdG8gZXhlY3V0ZSBhZnRlciBDb2xsYXBzaWJsZSBnZXRzIGJvb3RzdHJhcHBlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5jb21wb25lbnRTZWxlY3RvcikuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxGYWNldHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gT2JzZXJ2ZSB1c2VyIGV2ZW50c1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgPSB0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblRvZ2dsZUNsaWNrID0gdGhpcy5vblRvZ2dsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25BY2NvcmRpb25Ub2dnbGUgPSB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbGVhckZhY2V0ID0gdGhpcy5vbkNsZWFyRmFjZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkZhY2V0Q2xpY2sgPSB0aGlzLm9uRmFjZXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUmFuZ2VTdWJtaXQgPSB0aGlzLm9uUmFuZ2VTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5maWx0ZXJGYWNldEl0ZW1zID0gdGhpcy5maWx0ZXJGYWNldEl0ZW1zLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZWZyZXNoVmlldyhjb250ZW50KSB7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBSZXN0b3JlIHZpZXcgc3RhdGVcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCk7XG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKTtcblxuICAgICAgICAvLyBCaW5kIGV2ZW50c1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcblxuICAgICAgICBhcGkuZ2V0UGFnZSh1cmxVdGlscy5nZXRVcmwoKSwgdGhpcy5yZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVmcmVzaCB2aWV3IHdpdGggbmV3IGNvbnRlbnRcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFZpZXcoY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFJlbW92ZVxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgY29uc3QgaGFzTW9yZVJlc3VsdHMgPSAkbmF2TGlzdC5kYXRhKCdoYXNNb3JlUmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChoYXNNb3JlUmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIGRlcGVuZGluZyBvbiBgY29sbGFwc2VkYCBmbGFnXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZpbHRlckZhY2V0SXRlbXMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGl0ZW1zID0gJCgnLm5hdkxpc3QtaXRlbScpO1xuICAgICAgICBjb25zdCBxdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAkaXRlbXMuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkKGVsZW1lbnQpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihxdWVyeSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUub3BlbigpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcbiAgICBpbml0UHJpY2VWYWxpZGF0b3IoKSB7XG4gICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5vZCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9O1xuXG4gICAgICAgIFZhbGlkYXRvcnMuc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uKHZhbGlkYXRvciwgc2VsZWN0b3JzKTtcblxuICAgICAgICB0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBSZXN0b3JlIGNvbGxhcHNlZCBzdGF0ZSBmb3IgZWFjaCBmYWNldFxuICAgICAgICAkbmF2TGlzdHMuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBDbGVhbi11cFxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vbignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub2ZmKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIG9uQ2xlYXJGYWNldChldmVudCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXG4gICAgICAgIHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgfVxuXG4gICAgb25GYWNldENsaWNrKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGxpbmsudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KSk7XG4gICAgfVxuXG4gICAgb25SYW5nZVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpLnNwbGl0KCcmJyk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMucGFyc2VRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiBgPyR7cXVlcnlQYXJhbXN9YCB9KSk7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgb25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG5cbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldHMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFjZXRlZFNlYXJjaDtcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL21vZGVscy9mb3Jtcyc7XG5cbmNvbnN0IGlucHV0VGFnTmFtZXMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAndGV4dGFyZWEnLFxuXTtcblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGFuIGlucHV0IGVsZW1lbnQgb24gaXRzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1GaWVsZENsYXNzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmZ1bmN0aW9uIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKSB7XG4gICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgY29uc3QgJGZvcm1GaWVsZCA9ICRpbnB1dC5wYXJlbnQoYC4ke2Zvcm1GaWVsZENsYXNzfWApO1xuICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXQucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke3RhZ05hbWV9YDtcbiAgICBsZXQgc3BlY2lmaWNDbGFzc05hbWU7XG5cbiAgICAvLyBJbnB1dCBjYW4gYmUgdGV4dC9jaGVja2JveC9yYWRpbyBldGMuLi5cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQucHJvcCgndHlwZScpO1xuXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKFsncmFkaW8nLCAnY2hlY2tib3gnLCAnc3VibWl0J10sIGlucHV0VHlwZSkpIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0tY2hlY2tib3gsIC5mb3JtLWZpZWxkLS1yYWRpb1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke18uY2FtZWxDYXNlKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0taW5wdXQgLmZvcm0tZmllbGQtLWlucHV0VGV4dFxuICAgICAgICAgICAgc3BlY2lmaWNDbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9JHtfLmNhcGl0YWxpemUoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY2xhc3MgbW9kaWZpZXJcbiAgICByZXR1cm4gJGZvcm1GaWVsZFxuICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuICAgICAgICAuYWRkQ2xhc3Moc3BlY2lmaWNDbGFzc05hbWUpO1xufVxuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gZWFjaCBpbnB1dCBlbGVtZW50IGluIGEgZm9ybSBiYXNlZCBvbiBpdHMgdHlwZVxuICogQGV4YW1wbGVcbiAqIC8vIEJlZm9yZVxuICogPGZvcm0gaWQ9XCJmb3JtXCI+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gKiAgICAgPC9kaXY+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPHNlbGVjdD4uLi48L3NlbGVjdD5cbiAqICAgICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqXG4gKiBjbGFzc2lmeUZvcm0oJyNmb3JtJywgeyBmb3JtRmllbGRDbGFzczogJ2Zvcm0tZmllbGQnIH0pO1xuICpcbiAqIC8vIEFmdGVyXG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1pbnB1dCBmb3JtLWZpZWxkLS1pbnB1dFRleHRcIj4uLi48L2Rpdj5cbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNlbGVjdFwiPi4uLjwvZGl2PlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gZm9ybVNlbGVjdG9yIC0gc2VsZWN0b3Igb3IgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge2pRdWVyeX0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5Rm9ybShmb3JtU2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRmb3JtID0gJChmb3JtU2VsZWN0b3IpO1xuICAgIGNvbnN0ICRpbnB1dHMgPSAkZm9ybS5maW5kKGlucHV0VGFnTmFtZXMuam9pbignLCAnKSk7XG5cbiAgICAvLyBPYnRhaW4gb3B0aW9uc1xuICAgIGNvbnN0IHsgZm9ybUZpZWxkQ2xhc3MgPSAnZm9ybS1maWVsZCcgfSA9IG9wdGlvbnM7XG5cbiAgICAvLyBDbGFzc2lmeSBlYWNoIGlucHV0IGluIGEgZm9ybVxuICAgICRpbnB1dHMuZWFjaCgoX18sIGlucHV0KSA9PiB7XG4gICAgICAgIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkZm9ybTtcbn1cblxuLyoqXG4gKiBHZXQgaWQgZnJvbSBnaXZlbiBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRmaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEZpZWxkSWQoJGZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9ICRmaWVsZC5wcm9wKCduYW1lJykubWF0Y2goLyhcXFsuKlxcXSkvKTtcblxuICAgIGlmIChmaWVsZElkICYmIGZpZWxkSWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBmaWVsZElkWzBdO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBJbnNlcnQgaGlkZGVuIGZpZWxkIGFmdGVyIFN0YXRlL1Byb3ZpbmNlIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJHN0YXRlRmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICovXG5mdW5jdGlvbiBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRzdGF0ZUZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9IGdldEZpZWxkSWQoJHN0YXRlRmllbGQpO1xuICAgIGNvbnN0IHN0YXRlRmllbGRBdHRycyA9IHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIG5hbWU6IGBGb3JtRmllbGRJc1RleHQke2ZpZWxkSWR9YCxcbiAgICAgICAgdmFsdWU6ICcxJyxcbiAgICB9O1xuXG4gICAgJHN0YXRlRmllbGQuYWZ0ZXIoJCgnPGlucHV0IC8+Jywgc3RhdGVGaWVsZEF0dHJzKSk7XG59XG5cbmNvbnN0IFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0RW1haWxWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSB2YWxpZCBlbWFpbC4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZFNlbGVjdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkMlNlbGVjdG9yXG4gICAgICogQHBhcmFtIHJlcXVpcmVtZW50c1xuICAgICAqIEBwYXJhbSBpc09wdGlvbmFsXG4gICAgICovXG4gICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBwYXNzd29yZFNlbGVjdG9yLCBwYXNzd29yZDJTZWxlY3RvciwgcmVxdWlyZW1lbnRzLCBpc09wdGlvbmFsKSA9PiB7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMuYWxwaGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLm51bWVyaWMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLmxlbmd0aCA+PSByZXF1aXJlbWVudHMubWlubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9wdGlvbmFsIGFuZCBub3RoaW5nIGVudGVyZWQsIGl0IGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsICYmIHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHJlcXVpcmVtZW50cy5lcnJvcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbCA9PT0gJHBhc3N3b3JkLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2guJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZChwYXNzd29yZFZhbGlkYXRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHtOb2R9IHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmVycm9yU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZpZWxkc2V0U2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZvcm1TZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWF4UHJpY2VTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWluUHJpY2VTZWxlY3RvclxuICAgICAqL1xuICAgIHNldE1pbk1heFByaWNlVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgc2VsZWN0b3JzKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH0gPSBzZWxlY3RvcnM7XG5cbiAgICAgICAgdmFsaWRhdG9yLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBmb3JtOiBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBwcmV2ZW50U3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnXycsIC8vIEtMVURHRTogRG9uJ3QgYXBwbHkgc3VjY2VzcyBjbGFzc1xuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01heC4gcHJpY2UgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluLiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdJbnB1dCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdtaW4tbnVtYmVyOjAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3Iuc2V0TWVzc2FnZU9wdGlvbnMoe1xuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHBhcmVudDogZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGVycm9yU3BhbjogZXJyb3JTZWxlY3RvcixcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldFN0YXRlQ291bnRyeVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdTdGF0ZS9Qcm92aW5jZVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgY2xhc3NlcyBmcm9tIGRpcnR5IGZvcm0gaWYgcHJldmlvdXNseSBjaGVja2VkXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgY2xlYW5VcFN0YXRlVmFsaWRhdGlvbjogKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0ICRmaWVsZENsYXNzRWxlbWVudCA9ICQoKGBbZGF0YS10eXBlPVwiJHtmaWVsZC5kYXRhKCdmaWVsZFR5cGUnKX1cIl1gKSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMobm9kLmNsYXNzZXMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJGZpZWxkQ2xhc3NFbGVtZW50Lmhhc0NsYXNzKG5vZC5jbGFzc2VzW3ZhbHVlXSkpIHtcbiAgICAgICAgICAgICAgICAkZmllbGRDbGFzc0VsZW1lbnQucmVtb3ZlQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCB7IFZhbGlkYXRvcnMsIGluc2VydFN0YXRlSGlkZGVuRmllbGQgfTtcbiIsImNvbnN0IGZvcm1zID0ge1xuICAgIGVtYWlsKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlID0gL14uK0AuK1xcLi4rLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgYSBwYXNzd29yZCBmaWVsZFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHBhc3N3b3JkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdEVtcHR5KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdmFsaWRhdGVzIGlmIGEgZmllbGQgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqL1xuICAgIG5vdEVtcHR5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtcztcbiIsImltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuY29uc3QgdXJsVXRpbHMgPSB7XG4gICAgZ2V0VXJsOiAoKSA9PiBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWAsXG5cbiAgICBnb1RvVXJsOiAodXJsKSA9PiB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH0sXG5cbiAgICByZXBsYWNlUGFyYW1zOiAodXJsLCBwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGxldCBwYXJhbTtcblxuICAgICAgICAvLyBMZXQgdGhlIGZvcm1hdHRlciB1c2UgdGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB0aGUgbmV3IHVybFxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcblxuICAgICAgICBmb3IgKHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVcmwuZm9ybWF0KHBhcnNlZCk7XG4gICAgfSxcblxuICAgIGJ1aWxkUXVlcnlTdHJpbmc6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgbGV0IG91dCA9ICcnO1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBxdWVyeURhdGEpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5RGF0YVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmR4O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobmR4IGluIHF1ZXJ5RGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlEYXRhW2tleV0uaGFzT3duUHJvcGVydHkobmR4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldW25keF19YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dC5zdWJzdHJpbmcoMSk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXNwbGF5TW9kZSA9IENvb2tpZXMuZ2V0KCdjYXRlZ29yeVZpZXcnKSB8fCBjb250ZXh0LmRpc3BsYXlNb2RlO1xuICAgICQoYC5zd2l0Y2gtJHtkaXNwbGF5TW9kZX1gKS5hZGRDbGFzcygnc3dpdGNoLWFjdGl2ZScpO1xuXG4gICAgZnVuY3Rpb24gc3dpdGNoRGlzcGxheShtb2RlKSB7XG4gICAgICAgICQoJy5wcm9kdWN0R3JpZCcpLnJlbW92ZUNsYXNzKCdwcm9kdWN0R3JpZC0tbGlzdCBwcm9kdWN0R3JpZC0tZ3JpZCcpO1xuXG4gICAgICAgICQoJy5wcm9kdWN0R3JpZCcpLmFkZENsYXNzKGBwcm9kdWN0R3JpZC0tJHttb2RlfWApO1xuICAgIH1cblxuICAgIHN3aXRjaERpc3BsYXkoZGlzcGxheU1vZGUpO1xuXG4gICAgJCgnW2RhdGEtZGlzcGxheS1zd2l0Y2hdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlUeXBlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKCdkYXRhLWRpc3BsYXktc3dpdGNoJyk7XG5cbiAgICAgICAgQ29va2llcy5zZXQoJ2NhdGVnb3J5VmlldycsIGRpc3BsYXlUeXBlLCB7IGV4cGlyZXM6IDMwIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWRpc3BsYXktc3dpdGNoXScpLnJlbW92ZUNsYXNzKCdzd2l0Y2gtYWN0aXZlJyk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ3N3aXRjaC1hY3RpdmUnKTtcblxuICAgICAgICBzd2l0Y2hEaXNwbGF5KGRpc3BsYXlUeXBlKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBncmFwaHFsIGZyb20gJy4vZ3JhcGgtcWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaWRdJyk7XG4gICAgY29uc3QgcHJvZHVjdElkTGlzdCA9IFtdO1xuICAgIGNvbnN0IHN3YXRjaFNpemUgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3Muc3dhdGNoX29wdGlvbl9zaXplLnNwbGl0KCd4JywgMSlbMF07XG4gICAgY29uc3Qgc2l6ZU5hbWUgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3Muc2l6ZV9sYWJlbDtcbiAgICBsZXQgc3dhdGNoUXVlcnkgPSAnJztcblxuICAgIHByb2R1Y3RMaXN0LmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgcHJvZHVjdElkTGlzdC5wdXNoKHBhcnNlSW50KHByb2R1Y3QuZGF0YXNldC5pZCwgMTApKTtcbiAgICB9KTtcblxuICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuZW5hYmxlX2NvbG9yX3N3YXRjaGVzKSB7XG4gICAgICAgIHN3YXRjaFF1ZXJ5ICs9IGAuLi4gb24gU3dhdGNoT3B0aW9uVmFsdWUge1xuICAgICAgICAgICAgaGV4Q29sb3JzXG4gICAgICAgICAgICBpbWFnZVVybCh3aWR0aDoke3N3YXRjaFNpemV9KVxuICAgICAgICB9YDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBxdWVyeVN0cmluZyhsaXN0KSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHF1ZXJ5IFNldmVyYWxQcm9kdWN0c0J5SUQge1xuICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cyhmaXJzdDogNTAsIGVudGl0eUlkczogWyR7bGlzdH1dKSB7XG4gICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gTXVsdGlwbGVDaG9pY2VPcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzd2F0Y2hRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1gO1xuICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVF1ZXJ5KGlkcykge1xuICAgICAgICBncmFwaHFsKGNvbnRleHQuYXV0aG9yaXphdGlvbiwgcXVlcnlTdHJpbmcoaWRzKSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGpzb24uZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHByb2R1Y3Qubm9kZS5lbnRpdHlJZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE9wdGlvbnMgPSBwcm9kdWN0Lm5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YXJpYW50SFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlciB0aGUgc3dhdGNoZXMgaWYgZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24ubm9kZS5kaXNwbGF5U3R5bGUgPT09ICdTd2F0Y2gnICYmIGNvbnRleHQudGhlbWVTZXR0aW5ncy5lbmFibGVfY29sb3Jfc3dhdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudEhUTUwgKz0gJzxkaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN3YXRjaENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLm5vZGUudmFsdWVzLmVkZ2VzLm1hcCh2YXJpYW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YXJpYW50Lm5vZGUuaW1hZ2VVcmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hDb250ZW50ICs9IGA8ZGl2IGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCI+PHNwYW4gY2xhc3M9J2Zvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVybicgdGl0bGU9XCIke3ZhcmlhbnQubm9kZS5sYWJlbH1cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt2YXJpYW50Lm5vZGUuaW1hZ2VVcmx9JylcIj48L3NwYW4+PC9kaXY+YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFyaWFudC5ub2RlLmhleENvbG9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hDb250ZW50ICs9IGA8ZGl2IGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCI+PHNwYW4gY2xhc3M9J2Zvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3InIHRpdGxlPVwiJHt2YXJpYW50Lm5vZGUubGFiZWx9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiR7dmFyaWFudC5ub2RlLmhleENvbG9yc31cIj48L3NwYW4+PC9kaXY+YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhdGNoQ29udGVudCArPSAnPGRpdiBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiPjxkaXYgY2xhc3M9XCJmb3JtLW9wdGlvbi0tbXVsdGlcIj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQubm9kZS5oZXhDb2xvcnMuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzd2F0Y2hDbGFzcyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyaWFudC5ub2RlLmhleENvbG9ycy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXRjaENsYXNzICs9ICdjb2xvci0tZHVvdG9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hDbGFzcyArPSAnY29sb3ItLXRyaXRvbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXRjaENvbnRlbnQgKz0gYDxzcGFuIGNsYXNzPSdmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yICR7c3dhdGNoQ2xhc3N9JyB0aXRsZT1cIiR7dmFyaWFudC5ub2RlLmxhYmVsfVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoke2NvbG9yfVwiPjwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhdGNoQ29udGVudCArPSAnPC9kaXY+PC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzd2F0Y2hDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudEhUTUwgKz0gYCR7c3dhdGNoQ29udGVudH08L2Rpdj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLm5vZGUuZGlzcGxheU5hbWUgPT09IHNpemVOYW1lICYmIGNvbnRleHQudGhlbWVTZXR0aW5ncy5zaG93X3NpemVzX29uX2dyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudEhUTUwgKz0gJzxkaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLm5vZGUudmFsdWVzLmVkZ2VzLmZvckVhY2godmFyaWFudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50SFRNTCArPSBgPGRpdiBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uXCI+PHNwYW4gY2xhc3M9J2Zvcm0tb3B0aW9uLXZhcmlhbnQnPiR7dmFyaWFudC5ub2RlLmxhYmVsfTwvc3Bhbj48L2Rpdj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudEhUTUwgKz0gJzwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHN3YXRjaCB0byB0aGUgY2FyZCwgZGVsZXRlIHRoZSBkYXRhLWlkIGF0dHJpYnV0ZSBzbyB0aGF0IGl0IGlzIG5vdCBjYWxsZWQgYWdhaW4gb24gaW5maW5pdGUgc2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGBbZGF0YS1pZD1cIiR7cHJvZHVjdElkfVwiXWApLmh0bWwodmFyaWFudEhUTUwpLnJlbW92ZUF0dHIoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NMaXN0KGlkcykge1xuICAgICAgICAvLyBUaGUgY2FsbCBpcyBmb3IgZmlyc3QgNTAgc28gc3BsaXQgbGlzdCB1cCBhbmQgbG9vcCBpZiBwcm9kdWN0cyBtb3JlIHRoYW4gNTBcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gaWRzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSA1MCkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGlkcy5zbGljZShpLCBpICsgNTApKTtcbiAgICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgbWFrZVF1ZXJ5KHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9jZXNzTGlzdChwcm9kdWN0SWRMaXN0KTtcbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJsQ29udGV4dCkge1xuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybENvbnRleHQuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVybENvbnRleHQpIHtcbiAgICBsZXQgcHJvZHVjdHM7XG5cbiAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgIGlmICgkY2hlY2tlZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcHJvZHVjdHMgPSBfLm1hcCgkY2hlY2tlZCwgZWxlbWVudCA9PiBlbGVtZW50LnZhbHVlKTtcblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KHByb2R1Y3RzLCAkY29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBhcmVDb3VudGVyID0gcHJvZHVjdHMgfHwgW107XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdbZGF0YS1wcm9kdWN0LWNvbXBhcmVdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzVG9Db21wYXJlID0gJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAocHJvZHVjdHNUb0NvbXBhcmUubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwidXJsVXRpbHMiLCJVcmwiLCJDYXRhbG9nUGFnZSIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInVybCIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCIkIiwic2VyaWFsaXplIiwic3BsaXQiLCJxdWVyeSIsInBhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1hdCIsInBhdGhuYW1lIiwic2VhcmNoIiwiYnVpbGRRdWVyeVN0cmluZyIsImRlZmF1bHQiLCJob29rcyIsImFwaSIsIm1vZGFsRmFjdG9yeSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlZhbGlkYXRvcnMiLCJub2QiLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJfdGhpcyIsImRlZmF1bHRPcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxPcGVuIiwiX2V4dGVuZCIsImNvbGxhcHNlZEZhY2V0cyIsImNvbGxhcHNlZEZhY2V0SXRlbXMiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJlYWNoIiwiaW5kZXgiLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwiYWNjb3JkaW9uVG9nZ2xlIiwiJGFjY29yZGlvblRvZ2dsZSIsImNvbGxhcHNpYmxlIiwiZGF0YSIsImlzQ29sbGFwc2VkIiwicHVzaCIsInRhcmdldElkIiwic2V0VGltZW91dCIsImlzIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwiYmluZCIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwiYmluZEV2ZW50cyIsInJlZnJlc2hWaWV3IiwiY29udGVudCIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcyIsInVwZGF0ZVZpZXciLCJfdGhpczIiLCJzaG93IiwiZ2V0UGFnZSIsImdldFVybCIsImVyciIsImhpZGUiLCJFcnJvciIsImV4cGFuZEZhY2V0SXRlbXMiLCIkbmF2TGlzdCIsImlkIiwiYXR0ciIsIl93aXRob3V0IiwiaGFzTW9yZVJlc3VsdHMiLCJfdW5pb24iLCJ0b2dnbGVGYWNldEl0ZW1zIiwiX2luY2x1ZGVzIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsIl90aGlzMyIsImZhY2V0IiwiZmFjZXRVcmwiLCJzaG93TW9yZSIsInRlbXBsYXRlIiwicGFyYW1zIiwibGlzdF9hbGwiLCJyZXNwb25zZSIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwiJGl0ZW1zIiwidmFsIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwidGV4dCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsImNvbGxhcHNlRmFjZXQiLCJjbG9zZSIsIl90aGlzNCIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwiX3RoaXM1IiwibGVuZ3RoIiwidmFsaWRhdG9yIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInByaWNlUmFuZ2VWYWxpZGF0b3IiLCJfdGhpczYiLCIkbmF2TGlzdHMiLCJzaG91bGRDb2xsYXBzZSIsIl90aGlzNyIsInVuYmluZEV2ZW50cyIsIm9uIiwiZG9jdW1lbnQiLCJvZmYiLCIkbGluayIsInN0b3BQcm9wYWdhdGlvbiIsImdvVG9VcmwiLCIkdG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJhcmVBbGwiLCJjb25zdGFudHMiLCJWQUxJRCIsImRlY29kZVVSSSIsInBhcnNlUXVlcnlQYXJhbXMiLCJmb3JtcyIsImlucHV0VGFnTmFtZXMiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiRmb3JtRmllbGQiLCJwYXJlbnQiLCJ0YWdOYW1lIiwicHJvcCIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiX2NhbWVsQ2FzZSIsIl9jYXBpdGFsaXplIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCIkZm9ybSIsIiRpbnB1dHMiLCJmaW5kIiwiam9pbiIsIl9vcHRpb25zIiwiX29wdGlvbnMkZm9ybUZpZWxkQ2xhIiwiX18iLCJnZXRGaWVsZElkIiwiJGZpZWxkIiwiZmllbGRJZCIsIm1hdGNoIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIiRzdGF0ZUZpZWxkIiwic3RhdGVGaWVsZEF0dHJzIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFmdGVyIiwic2V0RW1haWxWYWxpZGF0aW9uIiwiZmllbGQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJyZXN1bHQiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsInJlcXVpcmVtZW50cyIsImlzT3B0aW9uYWwiLCIkcGFzc3dvcmQiLCJwYXNzd29yZFZhbGlkYXRpb25zIiwiUmVnRXhwIiwiYWxwaGEiLCJudW1lcmljIiwibWlubGVuZ3RoIiwiZXJyb3IiLCJjb25maWd1cmUiLCJmb3JtIiwicHJldmVudFN1Ym1pdCIsInN1Y2Nlc3NDbGFzcyIsInNldE1lc3NhZ2VPcHRpb25zIiwiZXJyb3JTcGFuIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCIkZmllbGRDbGFzc0VsZW1lbnQiLCJPYmplY3QiLCJrZXlzIiwiY2xhc3NlcyIsImZvckVhY2giLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwicmUiLCJ0ZXN0IiwicGFzc3dvcmQiLCJub3RFbXB0eSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJ0aXRsZSIsInRyaWdnZXIiLCJyZXBsYWNlUGFyYW1zIiwicGFyc2VkIiwicGFyYW0iLCJoYXNPd25Qcm9wZXJ0eSIsInF1ZXJ5RGF0YSIsIm91dCIsImtleSIsIkFycmF5IiwiaXNBcnJheSIsIm5keCIsInN1YnN0cmluZyIsIkNvb2tpZXMiLCJjb250ZXh0IiwiZGlzcGxheU1vZGUiLCJnZXQiLCJzd2l0Y2hEaXNwbGF5IiwibW9kZSIsImRpc3BsYXlUeXBlIiwic2V0IiwiZXhwaXJlcyIsImdyYXBocWwiLCJwcm9kdWN0TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcm9kdWN0SWRMaXN0Iiwic3dhdGNoU2l6ZSIsInRoZW1lU2V0dGluZ3MiLCJzd2F0Y2hfb3B0aW9uX3NpemUiLCJzaXplTmFtZSIsInNpemVfbGFiZWwiLCJzd2F0Y2hRdWVyeSIsInByb2R1Y3QiLCJwYXJzZUludCIsImRhdGFzZXQiLCJlbmFibGVfY29sb3Jfc3dhdGNoZXMiLCJxdWVyeVN0cmluZyIsImxpc3QiLCJtYWtlUXVlcnkiLCJpZHMiLCJhdXRob3JpemF0aW9uIiwidGhlbiIsImpzb24iLCJwcm9kdWN0cyIsInNpdGUiLCJlZGdlcyIsInByb2R1Y3RJZCIsIm5vZGUiLCJlbnRpdHlJZCIsInByb2R1Y3RPcHRpb25zIiwidmFyaWFudEhUTUwiLCJvcHRpb24iLCJkaXNwbGF5U3R5bGUiLCJzd2F0Y2hDb250ZW50IiwidmFsdWVzIiwibWFwIiwidmFyaWFudCIsImltYWdlVXJsIiwibGFiZWwiLCJoZXhDb2xvcnMiLCJjb2xvciIsInN3YXRjaENsYXNzIiwiZGlzcGxheU5hbWUiLCJzaG93X3NpemVzX29uX2dyaWQiLCJodG1sIiwicmVtb3ZlQXR0ciIsInByb2Nlc3NMaXN0IiwicmVzdWx0cyIsImkiLCJsZW4iLCJzbGljZSIsInNob3dBbGVydE1vZGFsIiwiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpdGVtIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInVwZGF0ZUNvdW50ZXJOYXYiLCJ1cmxDb250ZXh0IiwiY29tcGFyZSIsIiRjaGVja2VkIiwiJGNvbXBhcmVMaW5rIiwiX21hcCIsImNvbXBhcmVDb3VudGVyIiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9
