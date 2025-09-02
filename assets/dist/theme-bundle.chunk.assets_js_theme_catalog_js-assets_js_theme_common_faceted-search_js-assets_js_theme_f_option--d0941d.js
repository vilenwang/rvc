(self["webpackChunkflair_brick_lane"] = self["webpackChunkflair_brick_lane"] || []).push([["assets_js_theme_catalog_js-assets_js_theme_common_faceted-search_js-assets_js_theme_f_option--d0941d"],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
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

    // toggle facet dropdown
    window.onresize = this.toggleAccordion();

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
  _proto.toggleAccordion = function toggleAccordion() {
    var _this2 = this;
    $(this.options.accordionToggleSelector).on('click', function (event) {
      var facetOpen = $(event.currentTarget).hasClass("is-open");
      var facetSiblingOpen = $(event.currentTarget.nextElementSibling).hasClass("is-open");
      var width = window.innerWidth > 0 ? window.innerWidth : document.documentElement.clientWidth;
      if (width > 800) {
        // Collapse all facets on initial click
        // Effectively removes .is-open class
        _this2.collapseAllFacets();

        // if current facet accordion has class is-open
        // add class is-open and expand accordion
        // else collapse accordion
        // Enables toggle on click
        if (facetOpen && facetSiblingOpen) {
          $(event.currentTarget).addClass("is-open");
          $(event.currentTarget.nextElementSibling).addClass("is-open");
        } else {
          _this2.collapseAllFacets();
        }
      } else {
        return;
      }
    });
  };
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_11__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Restore view state

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this3 = this;
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__.api.getPage(_url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this3.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this3.refreshView(content);
      _this3.toggleAccordion();
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
    var _this4 = this;
    var facet = $navList.data('facet');
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this4.options.modal.open();
        _this4.options.modalOpen = true;
        _this4.options.modal.updateContent(response);
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
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this6 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this6.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
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
    var _this7 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacetItems, id);
      if (shouldCollapse) {
        _this7.collapseFacetItems($navList);
      } else {
        _this7.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this8 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this8.collapsedFacets, id);
      if (shouldCollapse) {
        _this8.collapseFacet($accordionToggle);
      } else {
        _this8.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__.hooks.on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__.hooks.off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].goToUrl(url);
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
    _url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_8__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_8__.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_9__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_13__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_8__.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
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
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };
  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl);
    // If searchParams does not contain a page value then modify url query string to have page=1
    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');
      var re = /page=[0-9]+/i;
      var updatedLinkUrl = linkUrl.replace(re, 'page=1');
      window.history.replaceState({}, document.title, updatedLinkUrl);
    }
    $(window).trigger('statechange');
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./assets/js/theme/f/graph-ql.js":
/*!***************************************!*\
  !*** ./assets/js/theme/f/graph-ql.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(auth, query, callback) {
  fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer " + auth
    },
    body: JSON.stringify({
      query: query
    })
  }).then(function (res) {
    callback(res.json());
  });
}

/***/ }),

/***/ "./assets/js/theme/f/option-preview.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/f/option-preview.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  if (context.enableSwatches) {
    swatchQuery += "... on SwatchOptionValue {\n            hexColors\n            imageUrl(width:" + swatchSize + ")\n        }";
  }
  function queryString(list) {
    var query = "query SeveralProductsByID {\n            site {\n              products(entityIds: [" + list + "]) {\n                edges {\n                  node {\n                    entityId\n                    productOptions {\n                      edges {\n                        node {\n                          ... on MultipleChoiceOption {\n                              displayStyle\n                              displayName\n                              values {\n                                edges {\n                                  node {\n                                    label\n                                    " + swatchQuery + "\n                                  }\n                                }\n                              }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }";
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
              if (option.node.displayStyle === 'Swatch' && context.enableSwatches) {
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
              if (option.node.displayName === sizeName && context.enableSizes) {
                variantHTML += '<div>';
                option.node.values.edges.forEach(function (variant) {
                  variantHTML += "<div class=\"form-option form-option\"><span class='form-option-variant'>" + variant.node.label + "</span></div>";
                });
                variantHTML += '</div>';
              }
            });
            $("[data-id=\"" + productId + "\"]").html(variantHTML);
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

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? lodash_map__WEBPACK_IMPORTED_MODULE_0___default()($checked, function (element) {
      return element.value;
    }) : [];
    updateCounterNav(compareCounter, $compareLink, urlContext);
  });
  $('body').triggerHandler('compareReset');
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

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRhbG9nX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fZmFjZXRlZC1zZWFyY2hfanMtYXNzZXRzX2pzX3RoZW1lX2Zfb3B0aW9uLS1kMDk0MWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNDO0FBQ3BCO0FBQUEsSUFFREcsV0FBVywwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLFdBQUEsRUFBQUMsWUFBQTtFQUFBLFNBQUFELFlBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFFLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUEsSUFBQUMsTUFBQSxHQUFBTCxXQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUM1QkUsY0FBYyxHQUFkLFNBQUFBLGVBQWVDLEtBQUssRUFBRUMsYUFBYSxFQUFFO0lBQ2pDLElBQU1DLEdBQUcsR0FBR1gsc0NBQVMsQ0FBQ2EsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDakQsSUFBTUMsV0FBVyxHQUFHQyxDQUFDLENBQUNQLGFBQWEsQ0FBQyxDQUFDUSxTQUFTLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBRTNEUixHQUFHLENBQUNTLEtBQUssQ0FBQ0osV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsT0FBT0wsR0FBRyxDQUFDUyxLQUFLLENBQUNDLElBQUk7SUFFckJaLEtBQUssQ0FBQ2EsY0FBYyxDQUFDLENBQUM7SUFDdEJULE1BQU0sQ0FBQ0MsUUFBUSxHQUFHZCx1Q0FBVSxDQUFDO01BQUV3QixRQUFRLEVBQUViLEdBQUcsQ0FBQ2EsUUFBUTtNQUFFQyxNQUFNLEVBQUUxQix5REFBUSxDQUFDMkIsZ0JBQWdCLENBQUNmLEdBQUcsQ0FBQ1MsS0FBSztJQUFFLENBQUMsQ0FBQztFQUMxRyxDQUFDO0VBQUEsT0FBQW5CLFdBQUE7QUFBQSxFQVZvQ0gscURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pJO0FBRWxDO0FBQ2E7QUFDUTtBQUNJO0FBQ0w7QUFDbEI7O0FBRXhCO0FBQ0E7QUFDQTtBQUZBLElBR01vQyxhQUFhO0VBQ2Y7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJLFNBQUFBLGNBQVlDLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQzNDLElBQU1DLGNBQWMsR0FBRztNQUNuQkMsdUJBQXVCLEVBQUUsNEVBQTRFO01BQ3JHQyxlQUFlLEVBQUUseUJBQXlCO01BQzFDQyxrQkFBa0IsRUFBRSx5Q0FBeUM7TUFDN0RDLGlCQUFpQixFQUFFLHdCQUF3QjtNQUMzQ0Msb0JBQW9CLEVBQUUseUJBQXlCO01BQy9DQyx1QkFBdUIsRUFBRSx1Q0FBdUM7TUFDaEVDLDBCQUEwQixFQUFFLGtDQUFrQztNQUM5REMsc0JBQXNCLEVBQUUsbUJBQW1CO01BQzNDQywwQkFBMEIsRUFBRSxvQ0FBb0M7TUFDaEVDLDBCQUEwQixFQUFFLG9DQUFvQztNQUNoRUMsc0JBQXNCLEVBQUUsK0NBQStDO01BQ3ZFQyx3QkFBd0IsRUFBRSx3Q0FBd0M7TUFDbEVDLEtBQUssRUFBRXRCLDBEQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hDdUIsU0FBUyxFQUFFO0lBQ2YsQ0FBQzs7SUFFRDtJQUNBLElBQUksQ0FBQ2xCLGNBQWMsR0FBR0EsY0FBYztJQUNwQyxJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNDLE9BQU8sR0FBR2lCLG9EQUFBLENBQVMsQ0FBQyxDQUFDLEVBQUVmLGNBQWMsRUFBRUYsT0FBTyxDQUFDO0lBQ3BELElBQUksQ0FBQ2tCLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUcsRUFBRTs7SUFFN0I7SUFDQXpCLHlEQUFrQixDQUFDLENBQUM7O0lBRXBCO0lBQ0EsSUFBSSxDQUFDMEIsa0JBQWtCLENBQUMsQ0FBQzs7SUFFekI7SUFDQTVDLE1BQU0sQ0FBQzZDLFFBQVEsR0FBRyxJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDOztJQUV4QztJQUNBMUMsQ0FBQyxDQUFDLElBQUksQ0FBQ29CLE9BQU8sQ0FBQ08sb0JBQW9CLENBQUMsQ0FBQ2dCLElBQUksQ0FBQyxVQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBSztNQUMxRHhCLEtBQUksQ0FBQ3lCLGtCQUFrQixDQUFDOUMsQ0FBQyxDQUFDNkMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDOztJQUVGO0lBQ0E3QyxDQUFDLENBQUMsSUFBSSxDQUFDb0IsT0FBTyxDQUFDRyx1QkFBdUIsQ0FBQyxDQUFDb0IsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUcsZUFBZSxFQUFLO01BQ3JFLElBQU1DLGdCQUFnQixHQUFHaEQsQ0FBQyxDQUFDK0MsZUFBZSxDQUFDO01BQzNDLElBQU1FLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztNQUVoRSxJQUFJRCxXQUFXLENBQUNFLFdBQVcsRUFBRTtRQUN6QjlCLEtBQUksQ0FBQ2lCLGVBQWUsQ0FBQ2MsSUFBSSxDQUFDSCxXQUFXLENBQUNJLFFBQVEsQ0FBQztNQUNuRDtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBO0lBQ0FDLFVBQVUsQ0FBQyxZQUFNO01BQ2IsSUFBSXRELENBQUMsQ0FBQ3FCLEtBQUksQ0FBQ0QsT0FBTyxDQUFDTSxpQkFBaUIsQ0FBQyxDQUFDNkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ2pEbEMsS0FBSSxDQUFDbUMsaUJBQWlCLENBQUMsQ0FBQztNQUM1QjtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xELElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xELElBQUksQ0FBQ0UsaUJBQWlCLEdBQUcsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMxRCxJQUFJLENBQUNHLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVksQ0FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoRCxJQUFJLENBQUNJLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVksQ0FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoRCxJQUFJLENBQUNLLGFBQWEsR0FBRyxJQUFJLENBQUNBLGFBQWEsQ0FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsRCxJQUFJLENBQUNuRSxjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNtRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3BELElBQUksQ0FBQ00sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQztJQUV4RCxJQUFJLENBQUNPLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCOztFQUVBO0VBQUEsSUFBQTVFLE1BQUEsR0FBQTRCLGFBQUEsQ0FBQTNCLFNBQUE7RUFBQUQsTUFBQSxDQUVBcUQsZUFBZSxHQUFmLFNBQUFBLGdCQUFBLEVBQWtCO0lBQUEsSUFBQXdCLE1BQUE7SUFDZGxFLENBQUMsQ0FBQyxJQUFJLENBQUNvQixPQUFPLENBQUNHLHVCQUF1QixDQUFDLENBQUM0QyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMzRSxLQUFLLEVBQUs7TUFDM0QsSUFBTTRFLFNBQVMsR0FBR3BFLENBQUMsQ0FBQ1IsS0FBSyxDQUFDQyxhQUFhLENBQUMsQ0FBQzRFLFFBQVEsQ0FBQyxTQUFTLENBQUM7TUFDNUQsSUFBTUMsZ0JBQWdCLEdBQUd0RSxDQUFDLENBQUNSLEtBQUssQ0FBQ0MsYUFBYSxDQUFDOEUsa0JBQWtCLENBQUMsQ0FBQ0YsUUFBUSxDQUFDLFNBQVMsQ0FBQztNQUN0RixJQUFNRyxLQUFLLEdBQUk1RSxNQUFNLENBQUM2RSxVQUFVLEdBQUcsQ0FBQyxHQUFJN0UsTUFBTSxDQUFDNkUsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsV0FBVztNQUNoRyxJQUFHSixLQUFLLEdBQUcsR0FBRyxFQUFDO1FBQ1g7UUFDQTtRQUNBTixNQUFJLENBQUNWLGlCQUFpQixDQUFDLENBQUM7O1FBRXhCO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSVksU0FBUyxJQUFJRSxnQkFBZ0IsRUFBRTtVQUMvQnRFLENBQUMsQ0FBQ1IsS0FBSyxDQUFDQyxhQUFhLENBQUMsQ0FBQ29GLFFBQVEsQ0FBQyxTQUFTLENBQUM7VUFDMUM3RSxDQUFDLENBQUNSLEtBQUssQ0FBQ0MsYUFBYSxDQUFDOEUsa0JBQWtCLENBQUMsQ0FBQ00sUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNqRSxDQUFDLE1BQU07VUFDSFgsTUFBSSxDQUFDVixpQkFBaUIsQ0FBQyxDQUFDO1FBQzVCO01BQ0osQ0FBQyxNQUFNO1FBQ0g7TUFDSjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQW5FLE1BQUEsQ0FFRHlGLFdBQVcsR0FBWCxTQUFBQSxZQUFZQyxPQUFPLEVBQUU7SUFDakIsSUFBSUEsT0FBTyxFQUFFO01BQ1QsSUFBSSxDQUFDNUQsUUFBUSxDQUFDNEQsT0FBTyxDQUFDO0lBQzFCOztJQUVBO0lBQ0FqRSx5REFBa0IsQ0FBQyxDQUFDOztJQUVwQjtJQUNBLElBQUksQ0FBQzBCLGtCQUFrQixDQUFDLENBQUM7O0lBRXpCOztJQUVBO0lBQ0EsSUFBSSxDQUFDeUIsVUFBVSxDQUFDLENBQUM7RUFDckIsQ0FBQztFQUFBNUUsTUFBQSxDQUVEMkYsVUFBVSxHQUFWLFNBQUFBLFdBQUEsRUFBYTtJQUFBLElBQUFDLE1BQUE7SUFDVGpGLENBQUMsQ0FBQyxJQUFJLENBQUNvQixPQUFPLENBQUNJLGVBQWUsQ0FBQyxDQUFDMEQsSUFBSSxDQUFDLENBQUM7SUFFdEN0RSwyREFBRyxDQUFDdUUsT0FBTyxDQUFDckcsa0RBQVEsQ0FBQ3NHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDbEUsY0FBYyxFQUFFLFVBQUNtRSxHQUFHLEVBQUVOLE9BQU8sRUFBSztNQUNsRS9FLENBQUMsQ0FBQ2lGLE1BQUksQ0FBQzdELE9BQU8sQ0FBQ0ksZUFBZSxDQUFDLENBQUM4RCxJQUFJLENBQUMsQ0FBQztNQUV0QyxJQUFJRCxHQUFHLEVBQUU7UUFDTCxNQUFNLElBQUlFLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO01BQ3hCOztNQUVBO01BQ0FKLE1BQUksQ0FBQ0gsV0FBVyxDQUFDQyxPQUFPLENBQUM7TUFDekJFLE1BQUksQ0FBQ3ZDLGVBQWUsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXJELE1BQUEsQ0FFRG1HLGdCQUFnQixHQUFoQixTQUFBQSxpQkFBaUJDLFFBQVEsRUFBRTtJQUN2QixJQUFNQyxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQzs7SUFFOUI7SUFDQSxJQUFJLENBQUNwRCxtQkFBbUIsR0FBR3FELHFEQUFBLENBQVUsSUFBSSxDQUFDckQsbUJBQW1CLEVBQUVtRCxFQUFFLENBQUM7RUFDdEUsQ0FBQztFQUFBckcsTUFBQSxDQUVEeUQsa0JBQWtCLEdBQWxCLFNBQUFBLG1CQUFtQjJDLFFBQVEsRUFBRTtJQUN6QixJQUFNQyxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QixJQUFNRSxjQUFjLEdBQUdKLFFBQVEsQ0FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUV0RCxJQUFJMkMsY0FBYyxFQUFFO01BQ2hCLElBQUksQ0FBQ3RELG1CQUFtQixHQUFHdUQsbURBQUEsQ0FBUSxJQUFJLENBQUN2RCxtQkFBbUIsRUFBRSxDQUFDbUQsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDbkQsbUJBQW1CLEdBQUdxRCxxREFBQSxDQUFVLElBQUksQ0FBQ3JELG1CQUFtQixFQUFFbUQsRUFBRSxDQUFDO0lBQ3RFO0VBQ0osQ0FBQztFQUFBckcsTUFBQSxDQUVEMEcsZ0JBQWdCLEdBQWhCLFNBQUFBLGlCQUFpQk4sUUFBUSxFQUFFO0lBQ3ZCLElBQU1DLEVBQUUsR0FBR0QsUUFBUSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDOztJQUU5QjtJQUNBLElBQUlLLHNEQUFBLENBQVcsSUFBSSxDQUFDekQsbUJBQW1CLEVBQUVtRCxFQUFFLENBQUMsRUFBRTtNQUMxQyxJQUFJLENBQUNPLG1CQUFtQixDQUFDUixRQUFRLENBQUM7TUFFbEMsT0FBTyxJQUFJO0lBQ2Y7SUFFQSxJQUFJLENBQUMzQyxrQkFBa0IsQ0FBQzJDLFFBQVEsQ0FBQztJQUVqQyxPQUFPLEtBQUs7RUFDaEIsQ0FBQztFQUFBcEcsTUFBQSxDQUVENEcsbUJBQW1CLEdBQW5CLFNBQUFBLG9CQUFvQlIsUUFBUSxFQUFFO0lBQUEsSUFBQVMsTUFBQTtJQUMxQixJQUFNQyxLQUFLLEdBQUdWLFFBQVEsQ0FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDcEMsSUFBTWtELFFBQVEsR0FBR3RILGtEQUFRLENBQUNzRyxNQUFNLENBQUMsQ0FBQztJQUVsQyxJQUFJLElBQUksQ0FBQ2xFLGNBQWMsQ0FBQ21GLFFBQVEsRUFBRTtNQUM5QnpGLDJEQUFHLENBQUN1RSxPQUFPLENBQUNpQixRQUFRLEVBQUU7UUFDbEJFLFFBQVEsRUFBRSxJQUFJLENBQUNwRixjQUFjLENBQUNtRixRQUFRO1FBQ3RDRSxNQUFNLEVBQUU7VUFDSkMsUUFBUSxFQUFFTDtRQUNkO01BQ0osQ0FBQyxFQUFFLFVBQUNkLEdBQUcsRUFBRW9CLFFBQVEsRUFBSztRQUNsQixJQUFJcEIsR0FBRyxFQUFFO1VBQ0wsTUFBTSxJQUFJRSxLQUFLLENBQUNGLEdBQUcsQ0FBQztRQUN4QjtRQUVBYSxNQUFJLENBQUM5RSxPQUFPLENBQUNlLEtBQUssQ0FBQ3VFLElBQUksQ0FBQyxDQUFDO1FBQ3pCUixNQUFJLENBQUM5RSxPQUFPLENBQUNnQixTQUFTLEdBQUcsSUFBSTtRQUM3QjhELE1BQUksQ0FBQzlFLE9BQU8sQ0FBQ2UsS0FBSyxDQUFDd0UsYUFBYSxDQUFDRixRQUFRLENBQUM7TUFDOUMsQ0FBQyxDQUFDO0lBQ047SUFFQSxJQUFJLENBQUMzRCxrQkFBa0IsQ0FBQzJDLFFBQVEsQ0FBQztJQUVqQyxPQUFPLEtBQUs7RUFDaEIsQ0FBQztFQUFBcEcsTUFBQSxDQUVEMkUsZ0JBQWdCLEdBQWhCLFNBQUFBLGlCQUFpQnhFLEtBQUssRUFBRTtJQUNwQixJQUFNb0gsTUFBTSxHQUFHNUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUNqQyxJQUFNRyxLQUFLLEdBQUdILENBQUMsQ0FBQ1IsS0FBSyxDQUFDQyxhQUFhLENBQUMsQ0FBQ29ILEdBQUcsQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBRXhERixNQUFNLENBQUNqRSxJQUFJLENBQUMsVUFBQ0MsS0FBSyxFQUFFbUUsT0FBTyxFQUFLO01BQzVCLElBQU1DLElBQUksR0FBR2hILENBQUMsQ0FBQytHLE9BQU8sQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDRixXQUFXLENBQUMsQ0FBQztNQUM1QyxJQUFJRSxJQUFJLENBQUNDLE9BQU8sQ0FBQzlHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQzVCSCxDQUFDLENBQUMrRyxPQUFPLENBQUMsQ0FBQzdCLElBQUksQ0FBQyxDQUFDO01BQ3JCLENBQUMsTUFBTTtRQUNIbEYsQ0FBQyxDQUFDK0csT0FBTyxDQUFDLENBQUN6QixJQUFJLENBQUMsQ0FBQztNQUNyQjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQWpHLE1BQUEsQ0FFRDZILFdBQVcsR0FBWCxTQUFBQSxZQUFZbEUsZ0JBQWdCLEVBQUU7SUFDMUIsSUFBTUMsV0FBVyxHQUFHRCxnQkFBZ0IsQ0FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBRWhFRCxXQUFXLENBQUN5RCxJQUFJLENBQUMsQ0FBQztFQUN0QixDQUFDO0VBQUFySCxNQUFBLENBRUQ4SCxhQUFhLEdBQWIsU0FBQUEsY0FBY25FLGdCQUFnQixFQUFFO0lBQzVCLElBQU1DLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUVoRUQsV0FBVyxDQUFDbUUsS0FBSyxDQUFDLENBQUM7RUFDdkIsQ0FBQztFQUFBL0gsTUFBQSxDQUVEbUUsaUJBQWlCLEdBQWpCLFNBQUFBLGtCQUFBLEVBQW9CO0lBQUEsSUFBQTZELE1BQUE7SUFDaEIsSUFBTUMsaUJBQWlCLEdBQUd0SCxDQUFDLENBQUMsSUFBSSxDQUFDb0IsT0FBTyxDQUFDRyx1QkFBdUIsQ0FBQztJQUVqRStGLGlCQUFpQixDQUFDM0UsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUcsZUFBZSxFQUFLO01BQy9DLElBQU1DLGdCQUFnQixHQUFHaEQsQ0FBQyxDQUFDK0MsZUFBZSxDQUFDO01BRTNDc0UsTUFBSSxDQUFDRixhQUFhLENBQUNuRSxnQkFBZ0IsQ0FBQztJQUN4QyxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEzRCxNQUFBLENBRURrSSxlQUFlLEdBQWYsU0FBQUEsZ0JBQUEsRUFBa0I7SUFBQSxJQUFBQyxNQUFBO0lBQ2QsSUFBTUYsaUJBQWlCLEdBQUd0SCxDQUFDLENBQUMsSUFBSSxDQUFDb0IsT0FBTyxDQUFDRyx1QkFBdUIsQ0FBQztJQUVqRStGLGlCQUFpQixDQUFDM0UsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUcsZUFBZSxFQUFLO01BQy9DLElBQU1DLGdCQUFnQixHQUFHaEQsQ0FBQyxDQUFDK0MsZUFBZSxDQUFDO01BRTNDeUUsTUFBSSxDQUFDTixXQUFXLENBQUNsRSxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDLENBQUM7RUFDTjs7RUFFQTtFQUFBO0VBQUEzRCxNQUFBLENBQ0FtRCxrQkFBa0IsR0FBbEIsU0FBQUEsbUJBQUEsRUFBcUI7SUFDakIsSUFBSXhDLENBQUMsQ0FBQyxJQUFJLENBQUNvQixPQUFPLENBQUNVLHNCQUFzQixDQUFDLENBQUMyRixNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3JEO0lBQ0o7SUFFQSxJQUFNQyxTQUFTLEdBQUcxRyxpREFBRyxDQUFDLENBQUM7SUFDdkIsSUFBTTJHLFNBQVMsR0FBRztNQUNkQyxhQUFhLEVBQUUsSUFBSSxDQUFDeEcsT0FBTyxDQUFDUSx1QkFBdUI7TUFDbkRpRyxnQkFBZ0IsRUFBRSxJQUFJLENBQUN6RyxPQUFPLENBQUNTLDBCQUEwQjtNQUN6RGlHLFlBQVksRUFBRSxJQUFJLENBQUMxRyxPQUFPLENBQUNVLHNCQUFzQjtNQUNqRGlHLGdCQUFnQixFQUFFLElBQUksQ0FBQzNHLE9BQU8sQ0FBQ1csMEJBQTBCO01BQ3pEaUcsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDNUcsT0FBTyxDQUFDWTtJQUNuQyxDQUFDO0lBRURqQixvREFBVSxDQUFDa0gsd0JBQXdCLENBQUNQLFNBQVMsRUFBRUMsU0FBUyxDQUFDO0lBRXpELElBQUksQ0FBQ08sbUJBQW1CLEdBQUdSLFNBQVM7RUFDeEMsQ0FBQztFQUFBckksTUFBQSxDQUVEOEksMEJBQTBCLEdBQTFCLFNBQUFBLDJCQUFBLEVBQTZCO0lBQUEsSUFBQUMsTUFBQTtJQUN6QixJQUFNQyxTQUFTLEdBQUdySSxDQUFDLENBQUMsSUFBSSxDQUFDb0IsT0FBTyxDQUFDTyxvQkFBb0IsQ0FBQzs7SUFFdEQ7SUFDQTBHLFNBQVMsQ0FBQzFGLElBQUksQ0FBQyxVQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBSztNQUMvQixJQUFNNEMsUUFBUSxHQUFHekYsQ0FBQyxDQUFDNkMsT0FBTyxDQUFDO01BQzNCLElBQU02QyxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQztNQUM5QixJQUFNMkMsY0FBYyxHQUFHdEMsc0RBQUEsQ0FBV29DLE1BQUksQ0FBQzdGLG1CQUFtQixFQUFFbUQsRUFBRSxDQUFDO01BRS9ELElBQUk0QyxjQUFjLEVBQUU7UUFDaEJGLE1BQUksQ0FBQ3RGLGtCQUFrQixDQUFDMkMsUUFBUSxDQUFDO01BQ3JDLENBQUMsTUFBTTtRQUNIMkMsTUFBSSxDQUFDNUMsZ0JBQWdCLENBQUNDLFFBQVEsQ0FBQztNQUNuQztJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXBHLE1BQUEsQ0FFRGtKLHNCQUFzQixHQUF0QixTQUFBQSx1QkFBQSxFQUF5QjtJQUFBLElBQUFDLE1BQUE7SUFDckIsSUFBTWxCLGlCQUFpQixHQUFHdEgsQ0FBQyxDQUFDLElBQUksQ0FBQ29CLE9BQU8sQ0FBQ0csdUJBQXVCLENBQUM7SUFFakUrRixpQkFBaUIsQ0FBQzNFLElBQUksQ0FBQyxVQUFDQyxLQUFLLEVBQUVHLGVBQWUsRUFBSztNQUMvQyxJQUFNQyxnQkFBZ0IsR0FBR2hELENBQUMsQ0FBQytDLGVBQWUsQ0FBQztNQUMzQyxJQUFNRSxXQUFXLEdBQUdELGdCQUFnQixDQUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUM7TUFDaEUsSUFBTXdDLEVBQUUsR0FBR3pDLFdBQVcsQ0FBQ0ksUUFBUTtNQUMvQixJQUFNaUYsY0FBYyxHQUFHdEMsc0RBQUEsQ0FBV3dDLE1BQUksQ0FBQ2xHLGVBQWUsRUFBRW9ELEVBQUUsQ0FBQztNQUUzRCxJQUFJNEMsY0FBYyxFQUFFO1FBQ2hCRSxNQUFJLENBQUNyQixhQUFhLENBQUNuRSxnQkFBZ0IsQ0FBQztNQUN4QyxDQUFDLE1BQU07UUFDSHdGLE1BQUksQ0FBQ3RCLFdBQVcsQ0FBQ2xFLGdCQUFnQixDQUFDO01BQ3RDO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBM0QsTUFBQSxDQUVENEUsVUFBVSxHQUFWLFNBQUFBLFdBQUEsRUFBYTtJQUNUO0lBQ0EsSUFBSSxDQUFDd0UsWUFBWSxDQUFDLENBQUM7O0lBRW5CO0lBQ0F6SSxDQUFDLENBQUNKLE1BQU0sQ0FBQyxDQUFDdUUsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUNWLGFBQWEsQ0FBQztJQUMvQ3pELENBQUMsQ0FBQ0osTUFBTSxDQUFDLENBQUN1RSxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQ3VFLFVBQVUsQ0FBQztJQUN6QzFJLENBQUMsQ0FBQzBFLFFBQVEsQ0FBQyxDQUFDUCxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQy9DLE9BQU8sQ0FBQ2Esc0JBQXNCLEVBQUUsSUFBSSxDQUFDMEIsYUFBYSxDQUFDO0lBQ2hGM0QsQ0FBQyxDQUFDMEUsUUFBUSxDQUFDLENBQUNQLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMvQyxPQUFPLENBQUNHLHVCQUF1QixFQUFFLElBQUksQ0FBQ3FDLGlCQUFpQixDQUFDO0lBQ2xHNUQsQ0FBQyxDQUFDMEUsUUFBUSxDQUFDLENBQUNQLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDL0MsT0FBTyxDQUFDYyx3QkFBd0IsRUFBRSxJQUFJLENBQUM4QixnQkFBZ0IsQ0FBQztJQUNyRmhFLENBQUMsQ0FBQyxJQUFJLENBQUNvQixPQUFPLENBQUNLLGtCQUFrQixDQUFDLENBQUMwQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ04sWUFBWSxDQUFDOztJQUVqRTtJQUNBbEQsNkRBQUssQ0FBQ3dELEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUNMLFlBQVksQ0FBQztJQUMxRG5ELDZEQUFLLENBQUN3RCxFQUFFLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDSixhQUFhLENBQUM7SUFDN0RwRCw2REFBSyxDQUFDd0QsRUFBRSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQzVFLGNBQWMsQ0FBQztFQUNyRCxDQUFDO0VBQUFGLE1BQUEsQ0FFRG9KLFlBQVksR0FBWixTQUFBQSxhQUFBLEVBQWU7SUFDWDtJQUNBekksQ0FBQyxDQUFDSixNQUFNLENBQUMsQ0FBQytJLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDbEYsYUFBYSxDQUFDO0lBQ2hEekQsQ0FBQyxDQUFDSixNQUFNLENBQUMsQ0FBQytJLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDRCxVQUFVLENBQUM7SUFDMUMxSSxDQUFDLENBQUMwRSxRQUFRLENBQUMsQ0FBQ2lFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDdkgsT0FBTyxDQUFDYSxzQkFBc0IsRUFBRSxJQUFJLENBQUMwQixhQUFhLENBQUM7SUFDakYzRCxDQUFDLENBQUMwRSxRQUFRLENBQUMsQ0FBQ2lFLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUN2SCxPQUFPLENBQUNHLHVCQUF1QixFQUFFLElBQUksQ0FBQ3FDLGlCQUFpQixDQUFDO0lBQ25HNUQsQ0FBQyxDQUFDMEUsUUFBUSxDQUFDLENBQUNpRSxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ3ZILE9BQU8sQ0FBQ2Msd0JBQXdCLEVBQUUsSUFBSSxDQUFDOEIsZ0JBQWdCLENBQUM7SUFDdEZoRSxDQUFDLENBQUMsSUFBSSxDQUFDb0IsT0FBTyxDQUFDSyxrQkFBa0IsQ0FBQyxDQUFDa0gsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM5RSxZQUFZLENBQUM7O0lBRWxFO0lBQ0FsRCw2REFBSyxDQUFDZ0ksR0FBRyxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQzdFLFlBQVksQ0FBQztJQUMzRG5ELDZEQUFLLENBQUNnSSxHQUFHLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDNUUsYUFBYSxDQUFDO0lBQzlEcEQsNkRBQUssQ0FBQ2dJLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUNwSixjQUFjLENBQUM7RUFDdEQsQ0FBQztFQUFBRixNQUFBLENBRUR3RSxZQUFZLEdBQVosU0FBQUEsYUFBYXJFLEtBQUssRUFBRTtJQUNoQixJQUFNb0osS0FBSyxHQUFHNUksQ0FBQyxDQUFDUixLQUFLLENBQUNDLGFBQWEsQ0FBQztJQUNwQyxJQUFNQyxHQUFHLEdBQUdrSixLQUFLLENBQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTlCbkcsS0FBSyxDQUFDYSxjQUFjLENBQUMsQ0FBQztJQUN0QmIsS0FBSyxDQUFDcUosZUFBZSxDQUFDLENBQUM7O0lBRXZCO0lBQ0EvSixrREFBUSxDQUFDZ0ssT0FBTyxDQUFDcEosR0FBRyxDQUFDO0VBQ3pCLENBQUM7RUFBQUwsTUFBQSxDQUVEc0UsYUFBYSxHQUFiLFNBQUFBLGNBQWNuRSxLQUFLLEVBQUU7SUFDakIsSUFBTXVKLE9BQU8sR0FBRy9JLENBQUMsQ0FBQ1IsS0FBSyxDQUFDQyxhQUFhLENBQUM7SUFDdEMsSUFBTWdHLFFBQVEsR0FBR3pGLENBQUMsQ0FBQytJLE9BQU8sQ0FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFFeEM7SUFDQW5HLEtBQUssQ0FBQ2EsY0FBYyxDQUFDLENBQUM7O0lBRXRCO0lBQ0EsSUFBSSxDQUFDMEYsZ0JBQWdCLENBQUNOLFFBQVEsQ0FBQztFQUNuQyxDQUFDO0VBQUFwRyxNQUFBLENBRUR5RSxZQUFZLEdBQVosU0FBQUEsYUFBYXRFLEtBQUssRUFBRUMsYUFBYSxFQUFFO0lBQy9CLElBQU1tSixLQUFLLEdBQUc1SSxDQUFDLENBQUNQLGFBQWEsQ0FBQztJQUM5QixJQUFNQyxHQUFHLEdBQUdrSixLQUFLLENBQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTlCbkcsS0FBSyxDQUFDYSxjQUFjLENBQUMsQ0FBQztJQUV0QnVJLEtBQUssQ0FBQ0ksV0FBVyxDQUFDLGFBQWEsQ0FBQzs7SUFFaEM7SUFDQWxLLGtEQUFRLENBQUNnSyxPQUFPLENBQUNwSixHQUFHLENBQUM7SUFFckIsSUFBSSxJQUFJLENBQUMwQixPQUFPLENBQUNnQixTQUFTLEVBQUU7TUFDeEIsSUFBSSxDQUFDaEIsT0FBTyxDQUFDZSxLQUFLLENBQUNpRixLQUFLLENBQUMsQ0FBQztJQUM5QjtFQUNKLENBQUM7RUFBQS9ILE1BQUEsQ0FFREUsY0FBYyxHQUFkLFNBQUFBLGVBQWVDLEtBQUssRUFBRUMsYUFBYSxFQUFFO0lBQ2pDLElBQU1DLEdBQUcsR0FBR1gsc0NBQVMsQ0FBQ2EsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDakQsSUFBTUMsV0FBVyxHQUFHQyxDQUFDLENBQUNQLGFBQWEsQ0FBQyxDQUFDUSxTQUFTLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBRTNEUixHQUFHLENBQUNTLEtBQUssQ0FBQ0osV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsT0FBT0wsR0FBRyxDQUFDUyxLQUFLLENBQUNDLElBQUk7O0lBRXJCO0lBQ0EsSUFBTTZJLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDekJDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDRixjQUFjLEVBQUV2SixHQUFHLENBQUNTLEtBQUssQ0FBQztJQUV4Q1gsS0FBSyxDQUFDYSxjQUFjLENBQUMsQ0FBQztJQUV0QnZCLGtEQUFRLENBQUNnSyxPQUFPLENBQUMvSix1Q0FBVSxDQUFDO01BQUV3QixRQUFRLEVBQUViLEdBQUcsQ0FBQ2EsUUFBUTtNQUFFQyxNQUFNLEVBQUUxQixrREFBUSxDQUFDMkIsZ0JBQWdCLENBQUN3SSxjQUFjO0lBQUUsQ0FBQyxDQUFDLENBQUM7RUFDL0csQ0FBQztFQUFBNUosTUFBQSxDQUVEMEUsYUFBYSxHQUFiLFNBQUFBLGNBQWN2RSxLQUFLLEVBQUVDLGFBQWEsRUFBRTtJQUNoQ0QsS0FBSyxDQUFDYSxjQUFjLENBQUMsQ0FBQztJQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDNkgsbUJBQW1CLENBQUNrQixNQUFNLENBQUNwSSw2Q0FBRyxDQUFDcUksU0FBUyxDQUFDQyxLQUFLLENBQUMsRUFBRTtNQUN2RDtJQUNKO0lBRUEsSUFBTTVKLEdBQUcsR0FBR1gsc0NBQVMsQ0FBQ2EsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDakQsSUFBSUMsV0FBVyxHQUFHd0osU0FBUyxDQUFDdkosQ0FBQyxDQUFDUCxhQUFhLENBQUMsQ0FBQ1EsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3BFSCxXQUFXLEdBQUdqQixrREFBUSxDQUFDMEssZ0JBQWdCLENBQUN6SixXQUFXLENBQUM7SUFFcEQsS0FBSyxJQUFNMEosR0FBRyxJQUFJMUosV0FBVyxFQUFFO01BQzNCLElBQUlBLFdBQVcsQ0FBQzJKLGNBQWMsQ0FBQ0QsR0FBRyxDQUFDLEVBQUU7UUFDakMvSixHQUFHLENBQUNTLEtBQUssQ0FBQ3NKLEdBQUcsQ0FBQyxHQUFHMUosV0FBVyxDQUFDMEosR0FBRyxDQUFDO01BQ3JDO0lBQ0o7O0lBRUE7SUFDQSxJQUFNUixjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0YsY0FBYyxFQUFFdkosR0FBRyxDQUFDUyxLQUFLLENBQUM7SUFFeENyQixrREFBUSxDQUFDZ0ssT0FBTyxDQUFDL0osdUNBQVUsQ0FBQztNQUFFd0IsUUFBUSxFQUFFYixHQUFHLENBQUNhLFFBQVE7TUFBRUMsTUFBTSxFQUFFMUIsa0RBQVEsQ0FBQzJCLGdCQUFnQixDQUFDd0ksY0FBYztJQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9HLENBQUM7RUFBQTVKLE1BQUEsQ0FFRG9FLGFBQWEsR0FBYixTQUFBQSxjQUFBLEVBQWdCO0lBQ1osSUFBSSxDQUFDdUIsVUFBVSxDQUFDLENBQUM7RUFDckIsQ0FBQztFQUFBM0YsTUFBQSxDQUVEdUUsaUJBQWlCLEdBQWpCLFNBQUFBLGtCQUFrQnBFLEtBQUssRUFBRTtJQUNyQixJQUFNd0QsZ0JBQWdCLEdBQUdoRCxDQUFDLENBQUNSLEtBQUssQ0FBQ0MsYUFBYSxDQUFDO0lBQy9DLElBQU13RCxXQUFXLEdBQUdELGdCQUFnQixDQUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDaEUsSUFBTXdDLEVBQUUsR0FBR3pDLFdBQVcsQ0FBQ0ksUUFBUTtJQUUvQixJQUFJSixXQUFXLENBQUNFLFdBQVcsRUFBRTtNQUN6QixJQUFJLENBQUNiLGVBQWUsR0FBR3dELG1EQUFBLENBQVEsSUFBSSxDQUFDeEQsZUFBZSxFQUFFLENBQUNvRCxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNwRCxlQUFlLEdBQUdzRCxxREFBQSxDQUFVLElBQUksQ0FBQ3RELGVBQWUsRUFBRW9ELEVBQUUsQ0FBQztJQUM5RDtFQUNKLENBQUM7RUFBQXJHLE1BQUEsQ0FFRHFKLFVBQVUsR0FBVixTQUFBQSxXQUFBLEVBQWE7SUFDVCxJQUFNaUIsVUFBVSxHQUFHL0osTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUk7SUFDdkMsSUFBTThKLFlBQVksR0FBRyxJQUFJQyxlQUFlLENBQUNGLFVBQVUsQ0FBQztJQUNwRDtJQUNBLElBQUksQ0FBQ0MsWUFBWSxDQUFDRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7TUFDM0IsSUFBTUMsT0FBTyxHQUFHL0osQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMyRixJQUFJLENBQUMsTUFBTSxDQUFDO01BQ2xELElBQU1xRSxFQUFFLEdBQUcsY0FBYztNQUN6QixJQUFNQyxjQUFjLEdBQUdGLE9BQU8sQ0FBQ0csT0FBTyxDQUFDRixFQUFFLEVBQUUsUUFBUSxDQUFDO01BQ3BEcEssTUFBTSxDQUFDdUssT0FBTyxDQUFDQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUxRixRQUFRLENBQUMyRixLQUFLLEVBQUVKLGNBQWMsQ0FBQztJQUNuRTtJQUNBakssQ0FBQyxDQUFDSixNQUFNLENBQUMsQ0FBQzBLLE9BQU8sQ0FBQyxhQUFhLENBQUM7RUFDcEMsQ0FBQztFQUFBLE9BQUFySixhQUFBO0FBQUE7QUFHTCxpRUFBZUEsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvY0o7QUFDVztBQUVuQyxJQUFNdUosYUFBYSxHQUFHLENBQ2xCLE9BQU8sRUFDUCxRQUFRLEVBQ1IsVUFBVSxDQUNiOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLGFBQWFBLENBQUNDLEtBQUssRUFBRUMsY0FBYyxFQUFFO0VBQzFDLElBQU1DLE1BQU0sR0FBRzVLLENBQUMsQ0FBQzBLLEtBQUssQ0FBQztFQUN2QixJQUFNRyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxPQUFLSCxjQUFnQixDQUFDO0VBQ3RELElBQU1JLE9BQU8sR0FBR0gsTUFBTSxDQUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUNsRSxXQUFXLENBQUMsQ0FBQztFQUVwRCxJQUFJbUUsU0FBUyxHQUFNTixjQUFjLFVBQUtJLE9BQVM7RUFDL0MsSUFBSUcsaUJBQWlCOztFQUVyQjtFQUNBLElBQUlILE9BQU8sS0FBSyxPQUFPLEVBQUU7SUFDckIsSUFBTUksU0FBUyxHQUFHUCxNQUFNLENBQUNJLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFckMsSUFBSWhGLHNEQUFBLENBQVcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxFQUFFbUYsU0FBUyxDQUFDLEVBQUU7TUFDeEQ7TUFDQUYsU0FBUyxHQUFNTixjQUFjLFVBQUtTLHVEQUFBLENBQVlELFNBQVMsQ0FBRztJQUM5RCxDQUFDLE1BQU07TUFDSDtNQUNBRCxpQkFBaUIsUUFBTUQsU0FBUyxHQUFHSSx3REFBQSxDQUFhRixTQUFTLENBQUc7SUFDaEU7RUFDSjs7RUFFQTtFQUNBLE9BQU9OLFVBQVUsQ0FDWmhHLFFBQVEsQ0FBQ29HLFNBQVMsQ0FBQyxDQUNuQnBHLFFBQVEsQ0FBQ3FHLGlCQUFpQixDQUFDO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTSSxZQUFZQSxDQUFDeEQsWUFBWSxFQUFFMUcsT0FBTyxFQUFPO0VBQUEsSUFBZEEsT0FBTztJQUFQQSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0VBQUE7RUFDbkQsSUFBTW1LLEtBQUssR0FBR3ZMLENBQUMsQ0FBQzhILFlBQVksQ0FBQztFQUM3QixJQUFNMEQsT0FBTyxHQUFHRCxLQUFLLENBQUNFLElBQUksQ0FBQ2pCLGFBQWEsQ0FBQ2tCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7RUFFcEQ7RUFDQSxJQUFBQyxRQUFBLEdBQTBDdkssT0FBTztJQUFBd0sscUJBQUEsR0FBQUQsUUFBQSxDQUF6Q2hCLGNBQWM7SUFBZEEsY0FBYyxHQUFBaUIscUJBQUEsY0FBRyxZQUFZLEdBQUFBLHFCQUFBOztFQUVyQztFQUNBSixPQUFPLENBQUM3SSxJQUFJLENBQUMsVUFBQ2tKLEVBQUUsRUFBRW5CLEtBQUssRUFBSztJQUN4QkQsYUFBYSxDQUFDQyxLQUFLLEVBQUVDLGNBQWMsQ0FBQztFQUN4QyxDQUFDLENBQUM7RUFFRixPQUFPWSxLQUFLO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTTyxVQUFVQSxDQUFDQyxNQUFNLEVBQUU7RUFDeEIsSUFBTUMsT0FBTyxHQUFHRCxNQUFNLENBQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQ2lCLEtBQUssQ0FBQyxVQUFVLENBQUM7RUFFckQsSUFBSUQsT0FBTyxJQUFJQSxPQUFPLENBQUN2RSxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQ2pDLE9BQU91RSxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3JCO0VBRUEsT0FBTyxFQUFFO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTRSxzQkFBc0JBLENBQUNDLFdBQVcsRUFBRTtFQUN6QyxJQUFNSCxPQUFPLEdBQUdGLFVBQVUsQ0FBQ0ssV0FBVyxDQUFDO0VBQ3ZDLElBQU1DLGVBQWUsR0FBRztJQUNwQkMsSUFBSSxFQUFFLFFBQVE7SUFDZEMsSUFBSSxzQkFBb0JOLE9BQVM7SUFDakNPLEtBQUssRUFBRTtFQUNYLENBQUM7RUFFREosV0FBVyxDQUFDSyxLQUFLLENBQUN4TSxDQUFDLENBQUMsV0FBVyxFQUFFb00sZUFBZSxDQUFDLENBQUM7QUFDdEQ7QUFFQSxJQUFNckwsVUFBVSxHQUFHO0VBQ2Y7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJMEwsa0JBQWtCLEVBQUUsU0FBQUEsbUJBQUMvRSxTQUFTLEVBQUVnRixLQUFLLEVBQUs7SUFDdEMsSUFBSUEsS0FBSyxFQUFFO01BQ1BoRixTQUFTLENBQUNpRixHQUFHLENBQUM7UUFDVkMsUUFBUSxFQUFFRixLQUFLO1FBQ2ZHLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxFQUFFLEVBQUVqRyxHQUFHLEVBQUs7VUFDbkIsSUFBTWtHLE1BQU0sR0FBR3hDLHFEQUFLLENBQUN5QyxLQUFLLENBQUNuRyxHQUFHLENBQUM7VUFFL0JpRyxFQUFFLENBQUNDLE1BQU0sQ0FBQztRQUNkLENBQUM7UUFDREUsWUFBWSxFQUFFO01BQ2xCLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSUMscUJBQXFCLEVBQUUsU0FBQUEsc0JBQUN4RixTQUFTLEVBQUV5RixnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFLO0lBQ2pHLElBQU1DLFNBQVMsR0FBR3ZOLENBQUMsQ0FBQ21OLGdCQUFnQixDQUFDO0lBQ3JDLElBQU1LLG1CQUFtQixHQUFHLENBQ3hCO01BQ0laLFFBQVEsRUFBRU8sZ0JBQWdCO01BQzFCTixRQUFRLEVBQUUsU0FBQUEsU0FBQ0MsRUFBRSxFQUFFakcsR0FBRyxFQUFLO1FBQ25CLElBQU1rRyxNQUFNLEdBQUdsRyxHQUFHLENBQUNZLE1BQU07UUFFekIsSUFBSTZGLFVBQVUsRUFBRTtVQUNaLE9BQU9SLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDbkI7UUFFQUEsRUFBRSxDQUFDQyxNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0RFLFlBQVksRUFBRTtJQUNsQixDQUFDLEVBQ0Q7TUFDSUwsUUFBUSxFQUFFTyxnQkFBZ0I7TUFDMUJOLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxFQUFFLEVBQUVqRyxHQUFHLEVBQUs7UUFDbkIsSUFBTWtHLE1BQU0sR0FBR2xHLEdBQUcsQ0FBQ29GLEtBQUssQ0FBQyxJQUFJd0IsTUFBTSxDQUFDSixZQUFZLENBQUNLLEtBQUssQ0FBQyxDQUFDLElBQ2pEN0csR0FBRyxDQUFDb0YsS0FBSyxDQUFDLElBQUl3QixNQUFNLENBQUNKLFlBQVksQ0FBQ00sT0FBTyxDQUFDLENBQUMsSUFDM0M5RyxHQUFHLENBQUNZLE1BQU0sSUFBSTRGLFlBQVksQ0FBQ08sU0FBUzs7UUFFM0M7UUFDQSxJQUFJTixVQUFVLElBQUl6RyxHQUFHLENBQUNZLE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDaEMsT0FBT3FGLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDbkI7UUFFQUEsRUFBRSxDQUFDQyxNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0RFLFlBQVksRUFBRUksWUFBWSxDQUFDUTtJQUMvQixDQUFDLEVBQ0Q7TUFDSWpCLFFBQVEsRUFBRVEsaUJBQWlCO01BQzNCUCxRQUFRLEVBQUUsU0FBQUEsU0FBQ0MsRUFBRSxFQUFFakcsR0FBRyxFQUFLO1FBQ25CLElBQU1rRyxNQUFNLEdBQUdsRyxHQUFHLENBQUNZLE1BQU07UUFFekIsSUFBSTZGLFVBQVUsRUFBRTtVQUNaLE9BQU9SLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDbkI7UUFFQUEsRUFBRSxDQUFDQyxNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0RFLFlBQVksRUFBRTtJQUNsQixDQUFDLEVBQ0Q7TUFDSUwsUUFBUSxFQUFFUSxpQkFBaUI7TUFDM0JQLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxFQUFFLEVBQUVqRyxHQUFHLEVBQUs7UUFDbkIsSUFBTWtHLE1BQU0sR0FBR2xHLEdBQUcsS0FBSzBHLFNBQVMsQ0FBQzFHLEdBQUcsQ0FBQyxDQUFDO1FBRXRDaUcsRUFBRSxDQUFDQyxNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0RFLFlBQVksRUFBRTtJQUNsQixDQUFDLENBQ0o7SUFFRHZGLFNBQVMsQ0FBQ2lGLEdBQUcsQ0FBQ2EsbUJBQW1CLENBQUM7RUFDdEMsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0l2Rix3QkFBd0IsRUFBRSxTQUFBQSx5QkFBQ1AsU0FBUyxFQUFFQyxTQUFTLEVBQUs7SUFDaEQsSUFDSUMsYUFBYSxHQUtiRCxTQUFTLENBTFRDLGFBQWE7TUFDYkMsZ0JBQWdCLEdBSWhCRixTQUFTLENBSlRFLGdCQUFnQjtNQUNoQkMsWUFBWSxHQUdaSCxTQUFTLENBSFRHLFlBQVk7TUFDWkMsZ0JBQWdCLEdBRWhCSixTQUFTLENBRlRJLGdCQUFnQjtNQUNoQkMsZ0JBQWdCLEdBQ2hCTCxTQUFTLENBRFRLLGdCQUFnQjtJQUdwQk4sU0FBUyxDQUFDb0csU0FBUyxDQUFDO01BQ2hCQyxJQUFJLEVBQUVqRyxZQUFZO01BQ2xCa0csYUFBYSxFQUFFLElBQUk7TUFDbkJDLFlBQVksRUFBRSxHQUFHLENBQUU7SUFDdkIsQ0FBQyxDQUFDOztJQUVGdkcsU0FBUyxDQUFDaUYsR0FBRyxDQUFDO01BQ1ZNLFlBQVksRUFBRSx5Q0FBeUM7TUFDdkRMLFFBQVEsRUFBRTVFLGdCQUFnQjtNQUMxQjZFLFFBQVEsZUFBYTdFLGdCQUFnQixTQUFJRDtJQUM3QyxDQUFDLENBQUM7SUFFRkwsU0FBUyxDQUFDaUYsR0FBRyxDQUFDO01BQ1ZNLFlBQVksRUFBRSx5Q0FBeUM7TUFDdkRMLFFBQVEsRUFBRTdFLGdCQUFnQjtNQUMxQjhFLFFBQVEsZUFBYTdFLGdCQUFnQixTQUFJRDtJQUM3QyxDQUFDLENBQUM7SUFFRkwsU0FBUyxDQUFDaUYsR0FBRyxDQUFDO01BQ1ZNLFlBQVksRUFBRSx5QkFBeUI7TUFDdkNMLFFBQVEsRUFBRTdFLGdCQUFnQjtNQUMxQjhFLFFBQVEsRUFBRTtJQUNkLENBQUMsQ0FBQztJQUVGbkYsU0FBUyxDQUFDaUYsR0FBRyxDQUFDO01BQ1ZNLFlBQVksRUFBRSx5QkFBeUI7TUFDdkNMLFFBQVEsRUFBRTVFLGdCQUFnQjtNQUMxQjZFLFFBQVEsRUFBRTtJQUNkLENBQUMsQ0FBQztJQUVGbkYsU0FBUyxDQUFDaUYsR0FBRyxDQUFDO01BQ1ZNLFlBQVksRUFBRSwrQkFBK0I7TUFDN0NMLFFBQVEsRUFBRSxDQUFDNUUsZ0JBQWdCLEVBQUVELGdCQUFnQixDQUFDO01BQzlDOEUsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxDQUFDO0lBRUZuRixTQUFTLENBQUN3RyxpQkFBaUIsQ0FBQztNQUN4QnRCLFFBQVEsRUFBRSxDQUFDNUUsZ0JBQWdCLEVBQUVELGdCQUFnQixDQUFDO01BQzlDK0MsTUFBTSxFQUFFakQsZ0JBQWdCO01BQ3hCc0csU0FBUyxFQUFFdkc7SUFDZixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJd0cseUJBQXlCLEVBQUUsU0FBQUEsMEJBQUMxRyxTQUFTLEVBQUVnRixLQUFLLEVBQUs7SUFDN0MsSUFBSUEsS0FBSyxFQUFFO01BQ1BoRixTQUFTLENBQUNpRixHQUFHLENBQUM7UUFDVkMsUUFBUSxFQUFFRixLQUFLO1FBQ2ZHLFFBQVEsRUFBRSxVQUFVO1FBQ3BCSSxZQUFZLEVBQUU7TUFDbEIsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSW9CLHNCQUFzQixFQUFFLFNBQUFBLHVCQUFDM0IsS0FBSyxFQUFLO0lBQy9CLElBQU00QixrQkFBa0IsR0FBR3RPLENBQUMsbUJBQWlCME0sS0FBSyxDQUFDeEosSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFLLENBQUM7SUFFMUVnRyxNQUFNLENBQUNxRixJQUFJLENBQUN2Tiw0Q0FBRyxDQUFDd04sT0FBTyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFDbEMsS0FBSyxFQUFLO01BQ3hDLElBQUkrQixrQkFBa0IsQ0FBQ2pLLFFBQVEsQ0FBQ3JELDRDQUFHLENBQUN3TixPQUFPLENBQUNqQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2pEK0Isa0JBQWtCLENBQUNJLFdBQVcsQ0FBQzFOLDRDQUFHLENBQUN3TixPQUFPLENBQUNqQyxLQUFLLENBQUMsQ0FBQztNQUN0RDtJQUNKLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hTRCxJQUFNaEMsS0FBSyxHQUFHO0VBQ1Z5QyxLQUFLLFdBQUFBLE1BQUNULEtBQUssRUFBRTtJQUNULElBQU12QyxFQUFFLEdBQUcsWUFBWTtJQUN2QixPQUFPQSxFQUFFLENBQUMyRSxJQUFJLENBQUNwQyxLQUFLLENBQUM7RUFDekIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSXFDLFFBQVEsV0FBQUEsU0FBQ3JDLEtBQUssRUFBRTtJQUNaLE9BQU8sSUFBSSxDQUFDc0MsUUFBUSxDQUFDdEMsS0FBSyxDQUFDO0VBQy9CLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSXNDLFFBQVEsV0FBQUEsU0FBQ3RDLEtBQUssRUFBRTtJQUNaLE9BQU9BLEtBQUssQ0FBQzlFLE1BQU0sR0FBRyxDQUFDO0VBQzNCO0FBQ0osQ0FBQztBQUVELGlFQUFlOEMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkU7QUFFdEIsSUFBTXpMLFFBQVEsR0FBRztFQUNic0csTUFBTSxFQUFFLFNBQUFBLE9BQUE7SUFBQSxZQUFTeEYsTUFBTSxDQUFDQyxRQUFRLENBQUNVLFFBQVEsR0FBR1gsTUFBTSxDQUFDQyxRQUFRLENBQUNXLE1BQU07RUFBQSxDQUFFO0VBRXBFc0ksT0FBTyxFQUFFLFNBQUFBLFFBQUNwSixHQUFHLEVBQUs7SUFDZEUsTUFBTSxDQUFDdUssT0FBTyxDQUFDMkUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFcEssUUFBUSxDQUFDMkYsS0FBSyxFQUFFM0ssR0FBRyxDQUFDO0lBQ2pETSxDQUFDLENBQUNKLE1BQU0sQ0FBQyxDQUFDMEssT0FBTyxDQUFDLGFBQWEsQ0FBQztFQUNwQyxDQUFDO0VBRUR5RSxhQUFhLEVBQUUsU0FBQUEsY0FBQ3JQLEdBQUcsRUFBRTZHLE1BQU0sRUFBSztJQUM1QixJQUFNeUksTUFBTSxHQUFHalEsc0NBQVMsQ0FBQ1csR0FBRyxFQUFFLElBQUksQ0FBQztJQUNuQyxJQUFJdVAsS0FBSzs7SUFFVDtJQUNBRCxNQUFNLENBQUN4TyxNQUFNLEdBQUcsSUFBSTtJQUVwQixLQUFLeU8sS0FBSyxJQUFJMUksTUFBTSxFQUFFO01BQ2xCLElBQUlBLE1BQU0sQ0FBQ21ELGNBQWMsQ0FBQ3VGLEtBQUssQ0FBQyxFQUFFO1FBQzlCRCxNQUFNLENBQUM3TyxLQUFLLENBQUM4TyxLQUFLLENBQUMsR0FBRzFJLE1BQU0sQ0FBQzBJLEtBQUssQ0FBQztNQUN2QztJQUNKO0lBRUEsT0FBT2xRLHVDQUFVLENBQUNpUSxNQUFNLENBQUM7RUFDN0IsQ0FBQztFQUVEdk8sZ0JBQWdCLEVBQUUsU0FBQUEsaUJBQUN5TyxTQUFTLEVBQUs7SUFDN0IsSUFBSUMsR0FBRyxHQUFHLEVBQUU7SUFDWixJQUFJMUYsR0FBRztJQUNQLEtBQUtBLEdBQUcsSUFBSXlGLFNBQVMsRUFBRTtNQUNuQixJQUFJQSxTQUFTLENBQUN4RixjQUFjLENBQUNELEdBQUcsQ0FBQyxFQUFFO1FBQy9CLElBQUkyRixLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsU0FBUyxDQUFDekYsR0FBRyxDQUFDLENBQUMsRUFBRTtVQUMvQixJQUFJNkYsR0FBRztVQUVQLEtBQUtBLEdBQUcsSUFBSUosU0FBUyxDQUFDekYsR0FBRyxDQUFDLEVBQUU7WUFDeEIsSUFBSXlGLFNBQVMsQ0FBQ3pGLEdBQUcsQ0FBQyxDQUFDQyxjQUFjLENBQUM0RixHQUFHLENBQUMsRUFBRTtjQUNwQ0gsR0FBRyxVQUFRMUYsR0FBRyxTQUFJeUYsU0FBUyxDQUFDekYsR0FBRyxDQUFDLENBQUM2RixHQUFHLENBQUc7WUFDM0M7VUFDSjtRQUNKLENBQUMsTUFBTTtVQUNISCxHQUFHLFVBQVExRixHQUFHLFNBQUl5RixTQUFTLENBQUN6RixHQUFHLENBQUc7UUFDdEM7TUFDSjtJQUNKO0lBRUEsT0FBTzBGLEdBQUcsQ0FBQ0ksU0FBUyxDQUFDLENBQUMsQ0FBQztFQUMzQixDQUFDO0VBRUQvRixnQkFBZ0IsRUFBRSxTQUFBQSxpQkFBQzBGLFNBQVMsRUFBSztJQUM3QixJQUFNM0ksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVqQixLQUFLLElBQUlpSixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdOLFNBQVMsQ0FBQ3pILE1BQU0sRUFBRStILENBQUMsRUFBRSxFQUFFO01BQ3ZDLElBQU1DLElBQUksR0FBR1AsU0FBUyxDQUFDTSxDQUFDLENBQUMsQ0FBQ3RQLEtBQUssQ0FBQyxHQUFHLENBQUM7TUFFcEMsSUFBSXVQLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSWxKLE1BQU0sRUFBRTtRQUNuQixJQUFJNkksS0FBSyxDQUFDQyxPQUFPLENBQUM5SSxNQUFNLENBQUNrSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQ2hDbEosTUFBTSxDQUFDa0osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNyTSxJQUFJLENBQUNxTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxNQUFNO1VBQ0hsSixNQUFNLENBQUNrSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDbEosTUFBTSxDQUFDa0osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRDtNQUNKLENBQUMsTUFBTTtRQUNIbEosTUFBTSxDQUFDa0osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLElBQUksQ0FBQyxDQUFDLENBQUM7TUFDN0I7SUFDSjtJQUVBLE9BQU9sSixNQUFNO0VBQ2pCO0FBQ0osQ0FBQztBQUVELGlFQUFlekgsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDckV2Qiw2QkFBZSxvQ0FBVTRRLElBQUksRUFBRXZQLEtBQUssRUFBRWdCLFFBQVEsRUFBRTtFQUM1Q3dPLEtBQUssQ0FBQyxVQUFVLEVBQUU7SUFDZEMsTUFBTSxFQUFFLE1BQU07SUFDZEMsT0FBTyxFQUFFO01BQ0wsY0FBYyxFQUFFLGtCQUFrQjtNQUNsQ0MsYUFBYSxjQUFZSjtJQUM3QixDQUFDO0lBQ0RLLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7TUFDakI5UCxLQUFLLEVBQUxBO0lBQ0osQ0FBQztFQUNMLENBQUMsQ0FBQyxDQUNHK1AsSUFBSSxDQUFDLFVBQUNDLEdBQUcsRUFBSztJQUNYaFAsUUFBUSxDQUFDZ1AsR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3hCLENBQUMsQ0FBQztBQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RpQztBQUVqQyw2QkFBZSxvQ0FBVUUsT0FBTyxFQUFFO0VBQzlCLElBQU1DLFdBQVcsR0FBRzdMLFFBQVEsQ0FBQzhMLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztFQUMxRCxJQUFNQyxhQUFhLEdBQUcsRUFBRTtFQUN4QixJQUFNQyxVQUFVLEdBQUdKLE9BQU8sQ0FBQ0ssYUFBYSxDQUFDQyxrQkFBa0IsQ0FBQzFRLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzVFLElBQU0yUSxRQUFRLEdBQUdQLE9BQU8sQ0FBQ0ssYUFBYSxDQUFDRyxVQUFVO0VBQ2pELElBQUlDLFdBQVcsR0FBRyxFQUFFO0VBRXBCUixXQUFXLENBQUM5QixPQUFPLENBQUMsVUFBQ3VDLE9BQU8sRUFBSztJQUM3QlAsYUFBYSxDQUFDck4sSUFBSSxDQUFDNk4sUUFBUSxDQUFDRCxPQUFPLENBQUNFLE9BQU8sQ0FBQ3hMLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztFQUN4RCxDQUFDLENBQUM7RUFFRixJQUFJNEssT0FBTyxDQUFDYSxjQUFjLEVBQUU7SUFDeEJKLFdBQVcsdUZBRVVMLFVBQVUsaUJBQzdCO0VBQ047RUFDQSxTQUFTVSxXQUFXQSxDQUFDQyxJQUFJLEVBQUU7SUFDdkIsSUFBTWxSLEtBQUssNEZBRWtCa1IsSUFBSSw4aEJBY0hOLFdBQVcsMlNBWXJDO0lBQ0osT0FBTzVRLEtBQUs7RUFDaEI7RUFFQSxTQUFTbVIsU0FBU0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ3BCbEIscURBQU8sQ0FBQ0MsT0FBTyxDQUFDa0IsYUFBYSxFQUFFSixXQUFXLENBQUNHLEdBQUcsQ0FBQyxFQUFFLFVBQUN4RSxNQUFNLEVBQUs7TUFDekRBLE1BQU0sQ0FBQ21ELElBQUksQ0FBQyxVQUFDRSxJQUFJLEVBQUs7UUFDbEIsSUFBTXFCLFFBQVEsR0FBR3JCLElBQUksQ0FBQ2xOLElBQUksQ0FBQ3dPLElBQUksQ0FBQ0QsUUFBUSxDQUFDRSxLQUFLO1FBQzlDRixRQUFRLENBQUNoRCxPQUFPLENBQUMsVUFBQXVDLE9BQU8sRUFBSTtVQUN4QixJQUFNWSxTQUFTLEdBQUdaLE9BQU8sQ0FBQ2EsSUFBSSxDQUFDQyxRQUFRO1VBQ3ZDLElBQU1DLGNBQWMsR0FBR2YsT0FBTyxDQUFDYSxJQUFJLENBQUNFLGNBQWMsQ0FBQ0osS0FBSztVQUV4RCxJQUFJSSxjQUFjLENBQUN0SyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQUl1SyxXQUFXLEdBQUcsRUFBRTtZQUNwQkQsY0FBYyxDQUFDdEQsT0FBTyxDQUFDLFVBQUF3RCxNQUFNLEVBQUk7Y0FDN0I7Y0FDQSxJQUFJQSxNQUFNLENBQUNKLElBQUksQ0FBQ0ssWUFBWSxLQUFLLFFBQVEsSUFBSTVCLE9BQU8sQ0FBQ2EsY0FBYyxFQUFFO2dCQUNqRWEsV0FBVyxJQUFJLE9BQU87Z0JBQ3RCLElBQUlHLGFBQWEsR0FBRyxFQUFFO2dCQUN0QkYsTUFBTSxDQUFDSixJQUFJLENBQUNPLE1BQU0sQ0FBQ1QsS0FBSyxDQUFDVSxHQUFHLENBQUMsVUFBQUMsT0FBTyxFQUFJO2tCQUNwQyxJQUFJQSxPQUFPLENBQUNULElBQUksQ0FBQ1UsUUFBUSxLQUFLLElBQUksRUFBRTtvQkFDaENKLGFBQWEsOEhBQXlIRyxPQUFPLENBQUNULElBQUksQ0FBQ1csS0FBSywwQ0FBbUNGLE9BQU8sQ0FBQ1QsSUFBSSxDQUFDVSxRQUFRLHVCQUFtQjtrQkFDdk8sQ0FBQyxNQUFNLElBQUlELE9BQU8sQ0FBQ1QsSUFBSSxDQUFDWSxTQUFTLENBQUNoTCxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM1QzBLLGFBQWEsNEhBQXVIRyxPQUFPLENBQUNULElBQUksQ0FBQ1csS0FBSyxvQ0FBNkJGLE9BQU8sQ0FBQ1QsSUFBSSxDQUFDWSxTQUFTLHFCQUFpQjtrQkFDOU4sQ0FBQyxNQUFNO29CQUNITixhQUFhLElBQUksOEVBQThFO29CQUMvRkcsT0FBTyxDQUFDVCxJQUFJLENBQUNZLFNBQVMsQ0FBQ2hFLE9BQU8sQ0FBQyxVQUFBaUUsS0FBSyxFQUFJO3NCQUNwQyxJQUFJQyxXQUFXLEdBQUcsRUFBRTtzQkFDcEIsSUFBSUwsT0FBTyxDQUFDVCxJQUFJLENBQUNZLFNBQVMsQ0FBQ2hMLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQ3JDa0wsV0FBVyxJQUFJLGdCQUFnQjtzQkFDbkMsQ0FBQyxNQUFNO3dCQUNIQSxXQUFXLElBQUksZ0JBQWdCO3NCQUNuQztzQkFDQVIsYUFBYSxxRUFBbUVRLFdBQVcsa0JBQVlMLE9BQU8sQ0FBQ1QsSUFBSSxDQUFDVyxLQUFLLG9DQUE2QkUsS0FBSyxlQUFXO29CQUMxSyxDQUFDLENBQUM7b0JBRUZQLGFBQWEsSUFBSSxjQUFjO2tCQUNuQztrQkFDQSxPQUFPQSxhQUFhO2dCQUN4QixDQUFDLENBQUM7Z0JBQ0ZILFdBQVcsSUFBT0csYUFBYSxXQUFRO2NBQzNDO2NBQ0EsSUFBSUYsTUFBTSxDQUFDSixJQUFJLENBQUNlLFdBQVcsS0FBSy9CLFFBQVEsSUFBSVAsT0FBTyxDQUFDdUMsV0FBVyxFQUFFO2dCQUM3RGIsV0FBVyxJQUFJLE9BQU87Z0JBQ3RCQyxNQUFNLENBQUNKLElBQUksQ0FBQ08sTUFBTSxDQUFDVCxLQUFLLENBQUNsRCxPQUFPLENBQUMsVUFBQTZELE9BQU8sRUFBSTtrQkFDeENOLFdBQVcsa0ZBQThFTSxPQUFPLENBQUNULElBQUksQ0FBQ1csS0FBSyxrQkFBZTtnQkFDOUgsQ0FBQyxDQUFDO2dCQUNGUixXQUFXLElBQUksUUFBUTtjQUMzQjtZQUNKLENBQUMsQ0FBQztZQUNGaFMsQ0FBQyxpQkFBYzRSLFNBQVMsUUFBSSxDQUFDLENBQUNrQixJQUFJLENBQUNkLFdBQVcsQ0FBQztVQUNuRDtRQUNKLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0VBQ0EsU0FBU2UsV0FBV0EsQ0FBQ3hCLEdBQUcsRUFBRTtJQUN0QixJQUFNeUIsT0FBTyxHQUFHLEVBQUU7SUFDbEIsS0FBSyxJQUFJeEQsQ0FBQyxHQUFHLENBQUMsRUFBRXlELEdBQUcsR0FBRzFCLEdBQUcsQ0FBQzlKLE1BQU0sRUFBRStILENBQUMsR0FBR3lELEdBQUcsRUFBRXpELENBQUMsSUFBSSxFQUFFLEVBQUU7TUFDaER3RCxPQUFPLENBQUM1UCxJQUFJLENBQUNtTyxHQUFHLENBQUMyQixLQUFLLENBQUMxRCxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztNQUNsQ3dELE9BQU8sQ0FBQ3ZFLE9BQU8sQ0FBQyxVQUFDMUIsTUFBTSxFQUFLO1FBQ3hCdUUsU0FBUyxDQUFDdkUsTUFBTSxDQUFDO01BQ3JCLENBQUMsQ0FBQztJQUNOO0VBQ0o7RUFDQWdHLFdBQVcsQ0FBQ3RDLGFBQWEsQ0FBQztBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSHlDO0FBRXpDLFNBQVMyQyxnQkFBZ0JBLENBQUNDLE9BQU8sRUFBRUMsSUFBSSxFQUFFO0VBQ3JDLElBQU0xUSxLQUFLLEdBQUd5USxPQUFPLENBQUNwTSxPQUFPLENBQUNxTSxJQUFJLENBQUM7RUFFbkMsSUFBSTFRLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtJQUNaeVEsT0FBTyxDQUFDRSxNQUFNLENBQUMzUSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQzVCO0FBQ0o7QUFFQSxTQUFTNFEsZ0JBQWdCQSxDQUFDSCxPQUFPLEVBQUVDLElBQUksRUFBRTtFQUNyQ0QsT0FBTyxDQUFDalEsSUFBSSxDQUFDa1EsSUFBSSxDQUFDO0FBQ3RCO0FBRUEsU0FBU0csZ0JBQWdCQSxDQUFDSixPQUFPLEVBQUV6SyxLQUFLLEVBQUU4SyxVQUFVLEVBQUU7RUFDbEQsSUFBSUwsT0FBTyxDQUFDNUwsTUFBTSxLQUFLLENBQUMsRUFBRTtJQUN0QixJQUFJLENBQUNtQixLQUFLLENBQUNyRixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7TUFDdEJxRixLQUFLLENBQUMvRCxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzFCO0lBQ0ErRCxLQUFLLENBQUNqRCxJQUFJLENBQUMsTUFBTSxFQUFLK04sVUFBVSxDQUFDQyxPQUFPLFNBQUlOLE9BQU8sQ0FBQzNILElBQUksQ0FBQyxHQUFHLENBQUcsQ0FBQztJQUNoRTlDLEtBQUssQ0FBQzZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDcUgsSUFBSSxDQUFDTyxPQUFPLENBQUM1TCxNQUFNLENBQUM7RUFDckQsQ0FBQyxNQUFNO0lBQ0htQixLQUFLLENBQUM4RixXQUFXLENBQUMsTUFBTSxDQUFDO0VBQzdCO0FBQ0o7QUFFQSw2QkFBZSxvQ0FBVWdGLFVBQVUsRUFBRTtFQUNqQyxJQUFJRSxjQUFjLEdBQUcsRUFBRTtFQUV2QixJQUFNQyxZQUFZLEdBQUc3VCxDQUFDLENBQUMscUJBQXFCLENBQUM7RUFFN0NBLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ21FLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBTTtJQUMvQixJQUFNMlAsUUFBUSxHQUFHOVQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDeUwsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBRXJFbUksY0FBYyxHQUFHRSxRQUFRLENBQUNyTSxNQUFNLEdBQUdzTSxpREFBQSxDQUFNRCxRQUFRLEVBQUUsVUFBQS9NLE9BQU87TUFBQSxPQUFJQSxPQUFPLENBQUN3RixLQUFLO0lBQUEsRUFBQyxHQUFHLEVBQUU7SUFDakZrSCxnQkFBZ0IsQ0FBQ0csY0FBYyxFQUFFQyxZQUFZLEVBQUVILFVBQVUsQ0FBQztFQUM5RCxDQUFDLENBQUM7RUFHRjFULENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2dVLGNBQWMsQ0FBQyxjQUFjLENBQUM7RUFFeENoVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNtRSxFQUFFLENBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFVBQUEzRSxLQUFLLEVBQUk7SUFDaEQsSUFBTXdSLE9BQU8sR0FBR3hSLEtBQUssQ0FBQ0MsYUFBYSxDQUFDOE0sS0FBSztJQUN6QyxJQUFNMEgsbUJBQW1CLEdBQUdqVSxDQUFDLENBQUMscUJBQXFCLENBQUM7SUFFcEQsSUFBSVIsS0FBSyxDQUFDQyxhQUFhLENBQUN5VSxPQUFPLEVBQUU7TUFDN0JWLGdCQUFnQixDQUFDSSxjQUFjLEVBQUU1QyxPQUFPLENBQUM7SUFDN0MsQ0FBQyxNQUFNO01BQ0hvQyxnQkFBZ0IsQ0FBQ1EsY0FBYyxFQUFFNUMsT0FBTyxDQUFDO0lBQzdDO0lBRUF5QyxnQkFBZ0IsQ0FBQ0csY0FBYyxFQUFFSyxtQkFBbUIsRUFBRVAsVUFBVSxDQUFDO0VBQ3JFLENBQUMsQ0FBQztFQUVGMVQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDbUUsRUFBRSxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxVQUFBM0UsS0FBSyxFQUFJO0lBQ3RELElBQU0yVSxLQUFLLEdBQUduVSxDQUFDLENBQUNSLEtBQUssQ0FBQ0MsYUFBYSxDQUFDO0lBQ3BDLElBQU0yVSxpQkFBaUIsR0FBR0QsS0FBSyxDQUFDMUksSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBRTFFLElBQUkySSxpQkFBaUIsQ0FBQzNNLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFDL0IwTCxzREFBYyxDQUFDLGtEQUFrRCxDQUFDO01BQ2xFM1QsS0FBSyxDQUFDYSxjQUFjLENBQUMsQ0FBQztJQUMxQjtFQUNKLENBQUMsQ0FBQztFQUVGTCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNtRSxFQUFFLENBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFlBQU07SUFDL0MsSUFBTWtRLG9CQUFvQixHQUFHclUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDeUwsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBRWpGLElBQUk0SSxvQkFBb0IsQ0FBQzVNLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFDbEMwTCxzREFBYyxDQUFDLGtEQUFrRCxDQUFDO01BQ2xFLE9BQU8sS0FBSztJQUNoQjtFQUNKLENBQUMsQ0FBQztBQUNOOzs7Ozs7Ozs7O0FDekVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxhaXItYnJpY2stbGFuZS8uL2Fzc2V0cy9qcy90aGVtZS9jYXRhbG9nLmpzIiwid2VicGFjazovL2ZsYWlyLWJyaWNrLWxhbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovL2ZsYWlyLWJyaWNrLWxhbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZmxhaXItYnJpY2stbGFuZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbW9kZWxzL2Zvcm1zLmpzIiwid2VicGFjazovL2ZsYWlyLWJyaWNrLWxhbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3VybC11dGlscy5qcyIsIndlYnBhY2s6Ly9mbGFpci1icmljay1sYW5lLy4vYXNzZXRzL2pzL3RoZW1lL2YvZ3JhcGgtcWwuanMiLCJ3ZWJwYWNrOi8vZmxhaXItYnJpY2stbGFuZS8uL2Fzc2V0cy9qcy90aGVtZS9mL29wdGlvbi1wcmV2aWV3LmpzIiwid2VicGFjazovL2ZsYWlyLWJyaWNrLWxhbmUvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZmxhaXItYnJpY2stbGFuZS9pZ25vcmVkfC9Vc2Vycy9hbGV4L0Rlc2t0b3AvUHJvamVjdHMvZi9ub2RlX21vZHVsZXMvb2JqZWN0LWluc3BlY3R8Li91dGlsLmluc3BlY3QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi91cmwtdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbGxhcHNpYmxlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5cbi8qKlxuICogRmFjZXRlZCBzZWFyY2ggdmlldyBjb21wb25lbnRcbiAqL1xuY2xhc3MgRmFjZXRlZFNlYXJjaCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gT2JqZWN0IHdpdGggb3B0aW9ucyBmb3IgdGhlIGFqYXggcmVxdWVzdHNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgZmV0Y2hpbmcgdGVtcGxhdGVzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBDb25maWd1cmFibGUgb3B0aW9uc1xuICAgICAqIEBleGFtcGxlXG4gICAgICpcbiAgICAgKiBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICogICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgKiAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICogICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInXG4gICAgICogICAgIH1cbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IHRlbXBsYXRlc0RpZExvYWQgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICogICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAqICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCBmYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIHRlbXBsYXRlc0RpZExvYWQpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlcXVlc3RPcHRpb25zLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxuICAgICAgICAgICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXInLFxuICAgICAgICAgICAgY2xlYXJGYWNldFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtY2xlYXJMaW5rJyxcbiAgICAgICAgICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXG4gICAgICAgICAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0taW5saW5lTWVzc2FnZScsXG4gICAgICAgICAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1heF9wcmljZV0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1taW5fcHJpY2VdJyxcbiAgICAgICAgICAgIHNob3dNb3JlVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmsnLFxuICAgICAgICAgICAgZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiAnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMgLmZvcm0taW5wdXQnLFxuICAgICAgICAgICAgbW9kYWw6IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF0sXG4gICAgICAgICAgICBtb2RhbE9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyB0b2dnbGUgZmFjZXQgZHJvcGRvd25cbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy50b2dnbGVBY2NvcmRpb24oKTtcblxuICAgICAgICAvLyBTaG93IGxpbWl0ZWQgaXRlbXMgYnkgZGVmYXVsdFxuICAgICAgICAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCQobmF2TGlzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNYXJrIGluaXRpYWxseSBjb2xsYXBzZWQgYWNjb3JkaW9uc1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLnB1c2goY29sbGFwc2libGUudGFyZ2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbGwgZmFjZXRzIGlmIGluaXRpYWxseSBoaWRkZW5cbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuXG4gICAgdG9nZ2xlQWNjb3JkaW9uKCkge1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcikub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmYWNldE9wZW4gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgICAgIGNvbnN0IGZhY2V0U2libGluZ09wZW4gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nKS5oYXNDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aCA+IDApID8gd2luZG93LmlubmVyV2lkdGggOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBpZih3aWR0aCA+IDgwMCl7XG4gICAgICAgICAgICAgICAgLy8gQ29sbGFwc2UgYWxsIGZhY2V0cyBvbiBpbml0aWFsIGNsaWNrXG4gICAgICAgICAgICAgICAgLy8gRWZmZWN0aXZlbHkgcmVtb3ZlcyAuaXMtb3BlbiBjbGFzc1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxGYWNldHMoKTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIGN1cnJlbnQgZmFjZXQgYWNjb3JkaW9uIGhhcyBjbGFzcyBpcy1vcGVuXG4gICAgICAgICAgICAgICAgLy8gYWRkIGNsYXNzIGlzLW9wZW4gYW5kIGV4cGFuZCBhY2NvcmRpb25cbiAgICAgICAgICAgICAgICAvLyBlbHNlIGNvbGxhcHNlIGFjY29yZGlvblxuICAgICAgICAgICAgICAgIC8vIEVuYWJsZXMgdG9nZ2xlIG9uIGNsaWNrXG4gICAgICAgICAgICAgICAgaWYgKGZhY2V0T3BlbiAmJiBmYWNldFNpYmxpbmdPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nKS5hZGRDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWZyZXNoVmlldyhjb250ZW50KSB7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBSZXN0b3JlIHZpZXcgc3RhdGVcblxuICAgICAgICAvLyBCaW5kIGV2ZW50c1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcblxuICAgICAgICBhcGkuZ2V0UGFnZSh1cmxVdGlscy5nZXRVcmwoKSwgdGhpcy5yZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVmcmVzaCB2aWV3IHdpdGggbmV3IGNvbnRlbnRcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFZpZXcoY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUFjY29yZGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcblxuICAgICAgICBpZiAoaGFzTW9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xuICAgICAgICBpZiAoXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShmYWNldFVybCwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogZmFjZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycyk7XG5cbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCkge1xuICAgICAgICBjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gUmVzdG9yZSBjb2xsYXBzZWQgc3RhdGUgZm9yIGVhY2ggZmFjZXRcbiAgICAgICAgJG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQobmF2TGlzdCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gQ2xlYW4tdXBcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vbignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9uKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vZmYoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9mZignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICBvbkNsZWFyRmFjZXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cignaHJlZicpKTtcblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xuICAgICAgICB0aGlzLnRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgIH1cblxuICAgIG9uRmFjZXRDbGljayhldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRsaW5rLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWxPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxuICAgICAgICBjb25zdCB1cmxRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25SYW5nZVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpLnNwbGl0KCcmJyk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMucGFyc2VRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5W2tleV0gPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgb25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG5cbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldHMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUG9wU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50VXJsKTtcbiAgICAgICAgLy8gSWYgc2VhcmNoUGFyYW1zIGRvZXMgbm90IGNvbnRhaW4gYSBwYWdlIHZhbHVlIHRoZW4gbW9kaWZ5IHVybCBxdWVyeSBzdHJpbmcgdG8gaGF2ZSBwYWdlPTFcbiAgICAgICAgaWYgKCFzZWFyY2hQYXJhbXMuaGFzKCdwYWdlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtVcmwgPSAkKCcucGFnaW5hdGlvbi1saW5rJykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgY29uc3QgcmUgPSAvcGFnZT1bMC05XSsvaTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rVXJsID0gbGlua1VybC5yZXBsYWNlKHJlLCAncGFnZT0xJyk7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cGRhdGVkTGlua1VybCk7XG4gICAgICAgIH1cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vbW9kZWxzL2Zvcm1zJztcblxuY29uc3QgaW5wdXRUYWdOYW1lcyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG5dO1xuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gYW4gaW5wdXQgZWxlbWVudCBvbiBpdHMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybUZpZWxkQ2xhc3NcbiAqIEByZXR1cm4ge29iamVjdH0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICBjb25zdCAkZm9ybUZpZWxkID0gJGlucHV0LnBhcmVudChgLiR7Zm9ybUZpZWxkQ2xhc3N9YCk7XG4gICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7dGFnTmFtZX1gO1xuICAgIGxldCBzcGVjaWZpY0NsYXNzTmFtZTtcblxuICAgIC8vIElucHV0IGNhbiBiZSB0ZXh0L2NoZWNrYm94L3JhZGlvIGV0Yy4uLlxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5wcm9wKCd0eXBlJyk7XG5cbiAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydyYWRpbycsICdjaGVja2JveCcsICdzdWJtaXQnXSwgaW5wdXRUeXBlKSkge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1jaGVja2JveCwgLmZvcm0tZmllbGQtLXJhZGlvXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7Xy5jYW1lbENhc2UoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1pbnB1dCAuZm9ybS1maWVsZC0taW5wdXRUZXh0XG4gICAgICAgICAgICBzcGVjaWZpY0NsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0ke18uY2FwaXRhbGl6ZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjbGFzcyBtb2RpZmllclxuICAgIHJldHVybiAkZm9ybUZpZWxkXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIC5hZGRDbGFzcyhzcGVjaWZpY0NsYXNzTmFtZSk7XG59XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBlYWNoIGlucHV0IGVsZW1lbnQgaW4gYSBmb3JtIGJhc2VkIG9uIGl0cyB0eXBlXG4gKiBAZXhhbXBsZVxuICogLy8gQmVmb3JlXG4gKiA8Zm9ybSBpZD1cImZvcm1cIj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAqICAgICA8L2Rpdj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8c2VsZWN0Pi4uLjwvc2VsZWN0PlxuICogICAgIDwvZGl2PlxuICogPC9mb3JtPlxuICpcbiAqIGNsYXNzaWZ5Rm9ybSgnI2Zvcm0nLCB7IGZvcm1GaWVsZENsYXNzOiAnZm9ybS1maWVsZCcgfSk7XG4gKlxuICogLy8gQWZ0ZXJcbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWlucHV0IGZvcm0tZmllbGQtLWlucHV0VGV4dFwiPi4uLjwvZGl2PlxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0XCI+Li4uPC9kaXY+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBmb3JtU2VsZWN0b3IgLSBzZWxlY3RvciBvciBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7alF1ZXJ5fSBFbGVtZW50IGl0c2VsZlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGb3JtKGZvcm1TZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG4gICAgY29uc3QgJGlucHV0cyA9ICRmb3JtLmZpbmQoaW5wdXRUYWdOYW1lcy5qb2luKCcsICcpKTtcblxuICAgIC8vIE9idGFpbiBvcHRpb25zXG4gICAgY29uc3QgeyBmb3JtRmllbGRDbGFzcyA9ICdmb3JtLWZpZWxkJyB9ID0gb3B0aW9ucztcblxuICAgIC8vIENsYXNzaWZ5IGVhY2ggaW5wdXQgaW4gYSBmb3JtXG4gICAgJGlucHV0cy5lYWNoKChfXywgaW5wdXQpID0+IHtcbiAgICAgICAgY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICRmb3JtO1xufVxuXG4vKipcbiAqIEdldCBpZCBmcm9tIGdpdmVuIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJGZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RmllbGRJZCgkZmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gJGZpZWxkLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcWy4qXFxdKS8pO1xuXG4gICAgaWYgKGZpZWxkSWQgJiYgZmllbGRJZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkSWRbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEluc2VydCBoaWRkZW4gZmllbGQgYWZ0ZXIgU3RhdGUvUHJvdmluY2UgZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkc3RhdGVGaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJHN0YXRlRmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gZ2V0RmllbGRJZCgkc3RhdGVGaWVsZCk7XG4gICAgY29uc3Qgc3RhdGVGaWVsZEF0dHJzID0ge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgbmFtZTogYEZvcm1GaWVsZElzVGV4dCR7ZmllbGRJZH1gLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgIH07XG5cbiAgICAkc3RhdGVGaWVsZC5hZnRlcigkKCc8aW5wdXQgLz4nLCBzdGF0ZUZpZWxkQXR0cnMpKTtcbn1cblxuY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFbWFpbFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQyU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVxdWlyZW1lbnRzXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWxcbiAgICAgKi9cbiAgICBzZXRQYXNzd29yZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHBhc3N3b3JkU2VsZWN0b3IsIHBhc3N3b3JkMlNlbGVjdG9yLCByZXF1aXJlbWVudHMsIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5hbHBoYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMubnVtZXJpYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubGVuZ3RoID49IHJlcXVpcmVtZW50cy5taW5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb3B0aW9uYWwgYW5kIG5vdGhpbmcgZW50ZXJlZCwgaXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwgJiYgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVxdWlyZW1lbnRzLmVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfSA9IHNlbGVjdG9ycztcblxuICAgICAgICB2YWxpZGF0b3IuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGZvcm06IGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdfJywgLy8gS0xVREdFOiBEb24ndCBhcHBseSBzdWNjZXNzIGNsYXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWF4LiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4uIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ0lucHV0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ21pbi1udW1iZXI6MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5zZXRNZXNzYWdlT3B0aW9ucyh7XG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgcGFyZW50OiBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZXJyb3JTcGFuOiBlcnJvclNlbGVjdG9yLFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xuIiwiY29uc3QgZm9ybXMgPSB7XG4gICAgZW1haWwodmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmUgPSAvXi4rQC4rXFwuLisvO1xuICAgICAgICByZXR1cm4gcmUudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyBhIHBhc3N3b3JkIGZpZWxkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcGFzc3dvcmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90RW1wdHkodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB2YWxpZGF0ZXMgaWYgYSBmaWVsZCBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqXG4gICAgICovXG4gICAgbm90RW1wdHkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zO1xuIiwiaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5jb25zdCB1cmxVdGlscyA9IHtcbiAgICBnZXRVcmw6ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCxcblxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgYnVpbGRRdWVyeVN0cmluZzogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV1bbmR4XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0LnN1YnN0cmluZygxKTtcbiAgICB9LFxuXG4gICAgcGFyc2VRdWVyeVBhcmFtczogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHF1ZXJ5RGF0YVtpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICBpZiAodGVtcFswXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNbdGVtcFswXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXS5wdXNoKHRlbXBbMV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IFtwYXJhbXNbdGVtcFswXV0sIHRlbXBbMV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gdGVtcFsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGF1dGgsIHF1ZXJ5LCBjYWxsYmFjaykge1xuICAgIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aH1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2socmVzLmpzb24oKSk7XG4gICAgICAgIH0pO1xufVxuIiwiaW1wb3J0IGdyYXBocWwgZnJvbSAnLi9ncmFwaC1xbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvZHVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pZF0nKTtcbiAgICBjb25zdCBwcm9kdWN0SWRMaXN0ID0gW107XG4gICAgY29uc3Qgc3dhdGNoU2l6ZSA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5zd2F0Y2hfb3B0aW9uX3NpemUuc3BsaXQoJ3gnLCAxKVswXTtcbiAgICBjb25zdCBzaXplTmFtZSA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5zaXplX2xhYmVsO1xuICAgIGxldCBzd2F0Y2hRdWVyeSA9ICcnO1xuXG4gICAgcHJvZHVjdExpc3QuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgICBwcm9kdWN0SWRMaXN0LnB1c2gocGFyc2VJbnQocHJvZHVjdC5kYXRhc2V0LmlkLCAxMCkpO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvbnRleHQuZW5hYmxlU3dhdGNoZXMpIHtcbiAgICAgICAgc3dhdGNoUXVlcnkgKz0gYC4uLiBvbiBTd2F0Y2hPcHRpb25WYWx1ZSB7XG4gICAgICAgICAgICBoZXhDb2xvcnNcbiAgICAgICAgICAgIGltYWdlVXJsKHdpZHRoOiR7c3dhdGNoU2l6ZX0pXG4gICAgICAgIH1gO1xuICAgIH1cbiAgICBmdW5jdGlvbiBxdWVyeVN0cmluZyhsaXN0KSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHF1ZXJ5IFNldmVyYWxQcm9kdWN0c0J5SUQge1xuICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgIHByb2R1Y3RzKGVudGl0eUlkczogWyR7bGlzdH1dKSB7XG4gICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N3YXRjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfWA7XG4gICAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlUXVlcnkoaWRzKSB7XG4gICAgICAgIGdyYXBocWwoY29udGV4dC5hdXRob3JpemF0aW9uLCBxdWVyeVN0cmluZyhpZHMpLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXN1bHQudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzID0ganNvbi5kYXRhLnNpdGUucHJvZHVjdHMuZWRnZXM7XG4gICAgICAgICAgICAgICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gcHJvZHVjdC5ub2RlLmVudGl0eUlkO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0T3B0aW9ucyA9IHByb2R1Y3Qubm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcztcblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhcmlhbnRIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyIHRoZSBzd2F0Y2hlcyBpZiBlbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5ub2RlLmRpc3BsYXlTdHlsZSA9PT0gJ1N3YXRjaCcgJiYgY29udGV4dC5lbmFibGVTd2F0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50SFRNTCArPSAnPGRpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3dhdGNoQ29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ubm9kZS52YWx1ZXMuZWRnZXMubWFwKHZhcmlhbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhcmlhbnQubm9kZS5pbWFnZVVybCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXRjaENvbnRlbnQgKz0gYDxkaXYgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIj48c3BhbiBjbGFzcz0nZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1wYXR0ZXJuJyB0aXRsZT1cIiR7dmFyaWFudC5ub2RlLmxhYmVsfVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ZhcmlhbnQubm9kZS5pbWFnZVVybH0nKVwiPjwvc3Bhbj48L2Rpdj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YXJpYW50Lm5vZGUuaGV4Q29sb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXRjaENvbnRlbnQgKz0gYDxkaXYgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIj48c3BhbiBjbGFzcz0nZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcicgdGl0bGU9XCIke3ZhcmlhbnQubm9kZS5sYWJlbH1cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JHt2YXJpYW50Lm5vZGUuaGV4Q29sb3JzfVwiPjwvc3Bhbj48L2Rpdj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hDb250ZW50ICs9ICc8ZGl2IGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCI+PGRpdiBjbGFzcz1cImZvcm0tb3B0aW9uLS1tdWx0aVwiPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudC5ub2RlLmhleENvbG9ycy5mb3JFYWNoKGNvbG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN3YXRjaENsYXNzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YXJpYW50Lm5vZGUuaGV4Q29sb3JzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhdGNoQ2xhc3MgKz0gJ2NvbG9yLS1kdW90b25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXRjaENsYXNzICs9ICdjb2xvci0tdHJpdG9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhdGNoQ29udGVudCArPSBgPHNwYW4gY2xhc3M9J2Zvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgJHtzd2F0Y2hDbGFzc30nIHRpdGxlPVwiJHt2YXJpYW50Lm5vZGUubGFiZWx9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiR7Y29sb3J9XCI+PC9zcGFuPmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hDb250ZW50ICs9ICc8L2Rpdj48L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN3YXRjaENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50SFRNTCArPSBgJHtzd2F0Y2hDb250ZW50fTwvZGl2PmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24ubm9kZS5kaXNwbGF5TmFtZSA9PT0gc2l6ZU5hbWUgJiYgY29udGV4dC5lbmFibGVTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50SFRNTCArPSAnPGRpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ubm9kZS52YWx1ZXMuZWRnZXMuZm9yRWFjaCh2YXJpYW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRIVE1MICs9IGA8ZGl2IGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb25cIj48c3BhbiBjbGFzcz0nZm9ybS1vcHRpb24tdmFyaWFudCc+JHt2YXJpYW50Lm5vZGUubGFiZWx9PC9zcGFuPjwvZGl2PmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50SFRNTCArPSAnPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYFtkYXRhLWlkPVwiJHtwcm9kdWN0SWR9XCJdYCkuaHRtbCh2YXJpYW50SFRNTCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJvY2Vzc0xpc3QoaWRzKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGlkcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gNTApIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChpZHMuc2xpY2UoaSwgaSArIDUwKSk7XG4gICAgICAgICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIG1ha2VRdWVyeShyZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvY2Vzc0xpc3QocHJvZHVjdElkTGlzdCk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcblxuZnVuY3Rpb24gZGVjcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb3VudGVyLnB1c2goaXRlbSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXJOYXYoY291bnRlciwgJGxpbmssIHVybENvbnRleHQpIHtcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxDb250ZXh0LmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh1cmxDb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVDb3VudGVyID0gW107XG5cbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NvbXBhcmVSZXNldCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBjb21wYXJlQ291bnRlciA9ICRjaGVja2VkLmxlbmd0aCA/IF8ubWFwKCRjaGVja2VkLCBlbGVtZW50ID0+IGVsZW1lbnQudmFsdWUpIDogW107XG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cblxuICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdbZGF0YS1wcm9kdWN0LWNvbXBhcmVdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzVG9Db21wYXJlID0gJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAocHJvZHVjdHNUb0NvbXBhcmUubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwidXJsVXRpbHMiLCJVcmwiLCJDYXRhbG9nUGFnZSIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInVybCIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCIkIiwic2VyaWFsaXplIiwic3BsaXQiLCJxdWVyeSIsInBhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1hdCIsInBhdGhuYW1lIiwic2VhcmNoIiwiYnVpbGRRdWVyeVN0cmluZyIsImRlZmF1bHQiLCJob29rcyIsImFwaSIsIm1vZGFsRmFjdG9yeSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlZhbGlkYXRvcnMiLCJub2QiLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJfdGhpcyIsImRlZmF1bHRPcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxPcGVuIiwiX2V4dGVuZCIsImNvbGxhcHNlZEZhY2V0cyIsImNvbGxhcHNlZEZhY2V0SXRlbXMiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJvbnJlc2l6ZSIsInRvZ2dsZUFjY29yZGlvbiIsImVhY2giLCJpbmRleCIsIm5hdkxpc3QiLCJjb2xsYXBzZUZhY2V0SXRlbXMiLCJhY2NvcmRpb25Ub2dnbGUiLCIkYWNjb3JkaW9uVG9nZ2xlIiwiY29sbGFwc2libGUiLCJkYXRhIiwiaXNDb2xsYXBzZWQiLCJwdXNoIiwidGFyZ2V0SWQiLCJzZXRUaW1lb3V0IiwiaXMiLCJjb2xsYXBzZUFsbEZhY2V0cyIsIm9uU3RhdGVDaGFuZ2UiLCJiaW5kIiwib25Ub2dnbGVDbGljayIsIm9uQWNjb3JkaW9uVG9nZ2xlIiwib25DbGVhckZhY2V0Iiwib25GYWNldENsaWNrIiwib25SYW5nZVN1Ym1pdCIsImZpbHRlckZhY2V0SXRlbXMiLCJiaW5kRXZlbnRzIiwiX3RoaXMyIiwib24iLCJmYWNldE9wZW4iLCJoYXNDbGFzcyIsImZhY2V0U2libGluZ09wZW4iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYWRkQ2xhc3MiLCJyZWZyZXNoVmlldyIsImNvbnRlbnQiLCJ1cGRhdGVWaWV3IiwiX3RoaXMzIiwic2hvdyIsImdldFBhZ2UiLCJnZXRVcmwiLCJlcnIiLCJoaWRlIiwiRXJyb3IiLCJleHBhbmRGYWNldEl0ZW1zIiwiJG5hdkxpc3QiLCJpZCIsImF0dHIiLCJfd2l0aG91dCIsImhhc01vcmVSZXN1bHRzIiwiX3VuaW9uIiwidG9nZ2xlRmFjZXRJdGVtcyIsIl9pbmNsdWRlcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJfdGhpczQiLCJmYWNldCIsImZhY2V0VXJsIiwic2hvd01vcmUiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwicmVzcG9uc2UiLCJvcGVuIiwidXBkYXRlQ29udGVudCIsIiRpdGVtcyIsInZhbCIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsInRleHQiLCJpbmRleE9mIiwiZXhwYW5kRmFjZXQiLCJjb2xsYXBzZUZhY2V0IiwiY2xvc2UiLCJfdGhpczUiLCIkYWNjb3JkaW9uVG9nZ2xlcyIsImV4cGFuZEFsbEZhY2V0cyIsIl90aGlzNiIsImxlbmd0aCIsInZhbGlkYXRvciIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJwcmljZVJhbmdlVmFsaWRhdG9yIiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMiLCJfdGhpczciLCIkbmF2TGlzdHMiLCJzaG91bGRDb2xsYXBzZSIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJfdGhpczgiLCJ1bmJpbmRFdmVudHMiLCJvblBvcFN0YXRlIiwib2ZmIiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJnb1RvVXJsIiwiJHRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwidXJsUXVlcnlQYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmVBbGwiLCJjb25zdGFudHMiLCJWQUxJRCIsImRlY29kZVVSSSIsInBhcnNlUXVlcnlQYXJhbXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImN1cnJlbnRVcmwiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJoYXMiLCJsaW5rVXJsIiwicmUiLCJ1cGRhdGVkTGlua1VybCIsInJlcGxhY2UiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJ0cmlnZ2VyIiwiZm9ybXMiLCJpbnB1dFRhZ05hbWVzIiwiY2xhc3NpZnlJbnB1dCIsImlucHV0IiwiZm9ybUZpZWxkQ2xhc3MiLCIkaW5wdXQiLCIkZm9ybUZpZWxkIiwicGFyZW50IiwidGFnTmFtZSIsInByb3AiLCJjbGFzc05hbWUiLCJzcGVjaWZpY0NsYXNzTmFtZSIsImlucHV0VHlwZSIsIl9jYW1lbENhc2UiLCJfY2FwaXRhbGl6ZSIsImNsYXNzaWZ5Rm9ybSIsIiRmb3JtIiwiJGlucHV0cyIsImZpbmQiLCJqb2luIiwiX29wdGlvbnMiLCJfb3B0aW9ucyRmb3JtRmllbGRDbGEiLCJfXyIsImdldEZpZWxkSWQiLCIkZmllbGQiLCJmaWVsZElkIiwibWF0Y2giLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiJHN0YXRlRmllbGQiLCJzdGF0ZUZpZWxkQXR0cnMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYWZ0ZXIiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJmaWVsZCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwicGFzc3dvcmRTZWxlY3RvciIsInBhc3N3b3JkMlNlbGVjdG9yIiwicmVxdWlyZW1lbnRzIiwiaXNPcHRpb25hbCIsIiRwYXNzd29yZCIsInBhc3N3b3JkVmFsaWRhdGlvbnMiLCJSZWdFeHAiLCJhbHBoYSIsIm51bWVyaWMiLCJtaW5sZW5ndGgiLCJlcnJvciIsImNvbmZpZ3VyZSIsImZvcm0iLCJwcmV2ZW50U3VibWl0Iiwic3VjY2Vzc0NsYXNzIiwic2V0TWVzc2FnZU9wdGlvbnMiLCJlcnJvclNwYW4iLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsIiRmaWVsZENsYXNzRWxlbWVudCIsImtleXMiLCJjbGFzc2VzIiwiZm9yRWFjaCIsInJlbW92ZUNsYXNzIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJwdXNoU3RhdGUiLCJyZXBsYWNlUGFyYW1zIiwicGFyc2VkIiwicGFyYW0iLCJxdWVyeURhdGEiLCJvdXQiLCJBcnJheSIsImlzQXJyYXkiLCJuZHgiLCJzdWJzdHJpbmciLCJpIiwidGVtcCIsImF1dGgiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImdyYXBocWwiLCJjb250ZXh0IiwicHJvZHVjdExpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJvZHVjdElkTGlzdCIsInN3YXRjaFNpemUiLCJ0aGVtZVNldHRpbmdzIiwic3dhdGNoX29wdGlvbl9zaXplIiwic2l6ZU5hbWUiLCJzaXplX2xhYmVsIiwic3dhdGNoUXVlcnkiLCJwcm9kdWN0IiwicGFyc2VJbnQiLCJkYXRhc2V0IiwiZW5hYmxlU3dhdGNoZXMiLCJxdWVyeVN0cmluZyIsImxpc3QiLCJtYWtlUXVlcnkiLCJpZHMiLCJhdXRob3JpemF0aW9uIiwicHJvZHVjdHMiLCJzaXRlIiwiZWRnZXMiLCJwcm9kdWN0SWQiLCJub2RlIiwiZW50aXR5SWQiLCJwcm9kdWN0T3B0aW9ucyIsInZhcmlhbnRIVE1MIiwib3B0aW9uIiwiZGlzcGxheVN0eWxlIiwic3dhdGNoQ29udGVudCIsInZhbHVlcyIsIm1hcCIsInZhcmlhbnQiLCJpbWFnZVVybCIsImxhYmVsIiwiaGV4Q29sb3JzIiwiY29sb3IiLCJzd2F0Y2hDbGFzcyIsImRpc3BsYXlOYW1lIiwiZW5hYmxlU2l6ZXMiLCJodG1sIiwicHJvY2Vzc0xpc3QiLCJyZXN1bHRzIiwibGVuIiwic2xpY2UiLCJzaG93QWxlcnRNb2RhbCIsImRlY3JlbWVudENvdW50ZXIiLCJjb3VudGVyIiwiaXRlbSIsInNwbGljZSIsImluY3JlbWVudENvdW50ZXIiLCJ1cGRhdGVDb3VudGVyTmF2IiwidXJsQ29udGV4dCIsImNvbXBhcmUiLCJjb21wYXJlQ291bnRlciIsIiRjb21wYXJlTGluayIsIiRjaGVja2VkIiwiX21hcCIsInRyaWdnZXJIYW5kbGVyIiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9
